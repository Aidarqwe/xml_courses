const express = require("express");
const axios = require("axios");
const xmlbuilder = require("xmlbuilder");
const cors = require("cors");
const minMaxAmounts = require("./minMaxAmounts");
const reserve = require("./reserve");

const port = 5000;
const app = express();
app.use(cors());



const byBitEndpoint = "https://api.bybit.com/v2/public/tickers";
const cbrEndpoint = "https://www.cbr-xml-daily.ru/daily_json.js";


app.get("/", async (req, res) => {

	const currencies = [
		"BTC", "ETH", "USDT", "USDC", "DAI", "BNB", "LTC", "TON", "TWT", "DOGE",
		"AVAX", "DASH", "DOT", "MATIC", "ADA", "USD", "EUR", "RUB", "KZT", "AZN", "INR", "UZS"
	];

	const items = [];
	let cryptoData = null;
	let fiatData = null;
	try {
		const [byBitResponse, cbrResponse] = await Promise.all([
			axios.get(byBitEndpoint).then(response => response.data),
			axios.get(cbrEndpoint).then(response => response.data)
		]);
		cryptoData = byBitResponse;
		fiatData = cbrResponse;
	} catch (error) {
		console.error('Произошла ошибка:', error);
		throw error;
	}

	for (let i = 0; i < currencies.length; i++) {
		for (let j = 0 ; j < currencies.length; j++) {

			if (currencies[i] === currencies[j]) {
				continue;
			}

			const pairKey = `${currencies[i]}_${currencies[j]}`;
			const { minAmount, maxAmount } = minMaxAmounts[pairKey] || { minAmount: 0, maxAmount: 0 };
			const amount = reserve[currencies[i]] || 0;
			const exchangeRate = await calculateExchangeRate(currencies[i], currencies[j], cryptoData, fiatData) || 0;

			const item = {
				from: ["USD", "EUR", "RUB", "KZT", "AZN", "INR", "UZS"].includes(currencies[i]) ? "CARD" + currencies[i] : currencies[i],
				to: ["USD", "EUR", "RUB", "KZT", "AZN", "INR", "UZS"].includes(currencies[j]) ? "CARD" + currencies[j] : currencies[j],
				in: 1,
				out: exchangeRate,
				amount,
				minamount: minAmount,
				maxamount: maxAmount,
			};

			items.push(item);

		}
	}

	const xml = xmlbuilder.create({ rates: { item: items } }).end({ pretty: true });
	res.set('Content-Type', 'application/xml');
	res.send(xml);


	async function calculateExchangeRate(fromCurrency, toCurrency, cryptoData, fiatData) {

		const companyPercent = 0.011;
		const otcPercent = {
			"EUR": 0.055,
			"KZT": 0.01,
			"RUB": 0.02,
			"USD": 0.05,
			"UZS": 0.035
		};
		const exnodePercent = {
			"BTC": 0.05,
			"USDT": 0.05,
			"ETH": 0.05,
			"BNB": 0.05,
			"LTC": 0.05,
			"DASH": 0.05,
			"DOGE": 0.05,
			"MATIC": 0.05,
			"TON": 0.05,
		};
		const aiforiyPercent = {
			"RUB": 0.035,
			"EUR": 0.06,
		};

		const isCryptoCurrency1 = ["BTC", "ETH", "USDT", "USDC", "DAI", "BNB", "LTC", "TON", "TWT", "DOGE",
			"AVAX", "DASH", "DOT", "MATIC", "ADA"].includes(fromCurrency);
		const isCryptoCurrency2 = ["BTC", "ETH", "USDT", "USDC", "DAI", "BNB", "LTC", "TON", "TWT", "DOGE",
			"AVAX", "DASH", "DOT", "MATIC", "ADA"].includes(toCurrency);

		const isFiatCurrency1 = ["USD", "EUR", "RUB", "KZT", "AZN", "INR", "UZS"].includes(fromCurrency);
		const isFiatCurrency2 = ["USD", "EUR", "RUB", "KZT", "AZN", "INR", "UZS"].includes(toCurrency);

		if (isCryptoCurrency1 && isCryptoCurrency2){
			const rate1 = await getCrypto(fromCurrency, cryptoData);
			const rate2 = await getCrypto(toCurrency, cryptoData);
			let res = rate1 / rate2;
			if (exnodePercent.hasOwnProperty(fromCurrency)) {
				const exnodeValue = res * exnodePercent[fromCurrency];
				const companyValue = res * companyPercent;
				return res - exnodeValue - companyValue;
			} else {
				return res;
			}
		}

		if (isFiatCurrency1 && isFiatCurrency2) {
			const rate1 = await getFiat(fromCurrency, fiatData);
			const rate2 = await getFiat(toCurrency, fiatData);

			return rate1/rate2;
		}

		if (isFiatCurrency1 && isCryptoCurrency2) {
			const fiatTempRate = await getFiat(fromCurrency, fiatData);
			const cryptoTempRate = await getCrypto(toCurrency, cryptoData);
			let res = fiatTempRate / cryptoTempRate;

			if (aiforiyPercent.hasOwnProperty(fromCurrency)) {
				const aiforiyValue = res * aiforiyPercent[fromCurrency];
				const companyValue = res * companyPercent;
				return res - aiforiyValue - companyValue;
			} else {
				return res;
			}

		}
		if (isCryptoCurrency1 && isFiatCurrency2) {
			const cryptoTempRate = await getCrypto(fromCurrency, cryptoData);
			const fiatTempRate = await getFiat(toCurrency, fiatData);
			let res = cryptoTempRate / fiatTempRate;

			if (otcPercent.hasOwnProperty(toCurrency)) {
				const otcValue = res * otcPercent[toCurrency];
				const companyValue = res * companyPercent;
				return res - otcValue - companyValue;
			} else {
				return res;
			}

		}
		return null;
	}


	async function getCrypto(currency, cryptoData) {
		const symbolToFind = `${currency}USDT`;

		if(currency === "USDT"){
			return 1.01;
		}else if(currency === "DAI"){
			return 1.0012;
		}else{
			if (cryptoData && cryptoData.result) {
				for (const item of cryptoData.result) {
					if (item.symbol === symbolToFind) {
						return parseFloat(item.last_price);
					}
				}
			}
		}
		return null;
	}
	async function getFiat(currency, fiatData) {

		let rateRes;
		let rate;
		const usdRubRate = fiatData.Valute.USD.Value;


		if (currency === 'RUB') {
			rateRes = 1;
			rate = rateRes / usdRubRate;
		} else if (currency === 'KZT') {
			rateRes = (fiatData.Valute[currency].Value / 100);
			rate = rateRes / usdRubRate;
		} else if (currency === 'INR') {
			rateRes = (fiatData.Valute[currency].Value / 10);
			rate = rateRes / usdRubRate;
		} else if (currency === 'UZS') {
			rateRes = (fiatData.Valute[currency].Value / 10000);
			rate = rateRes / usdRubRate;
		} else {
			rateRes = (fiatData.Valute[currency].Value);
			rate = rateRes / usdRubRate;
		}


		return rate;
	}
})



app.listen(port, () => {
	console.log(`Server is running at http://localhost:${port}`);
});