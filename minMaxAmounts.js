const minMaxAmounts = {
	// exnode
	"BTC_ETH": { minAmount: 0.00005, maxAmount: 100000 },
	"BTC_USDT": { minAmount: 0.00005, maxAmount: 100000 },
	"BTC_USDC": { minAmount: 0.00005, maxAmount: 100000 },
	"BTC_DAI": { minAmount: 0.00005, maxAmount: 100000 },
	"BTC_BNB": { minAmount: 0.00005, maxAmount: 100000 },
	"BTC_LTC": { minAmount: 0.00005, maxAmount: 100000 },
	"BTC_TON": { minAmount: 0.00005, maxAmount: 100000 },
	"BTC_TWT": { minAmount: 0.00005, maxAmount: 100000 },
	"BTC_DOGE": { minAmount: 0.00005, maxAmount: 100000 },
	"BTC_AVAX": { minAmount: 0.00005, maxAmount: 100000 },
	"BTC_DASH": { minAmount: 0.00005, maxAmount: 100000 },
	"BTC_DOT": { minAmount: 0.00005, maxAmount: 100000 },
	"BTC_MATIC": { minAmount: 0.00005, maxAmount: 100000 },
	"BTC_ADA": { minAmount: 0.00005, maxAmount: 100000 },
	"ETH_BTC": { minAmount: 0.001, maxAmount: 100000 },
	"ETH_USDT": { minAmount: 0.001, maxAmount: 100000 },
	"ETH_USDC": { minAmount: 0.001, maxAmount: 100000 },
	"ETH_DAI": { minAmount: 0.001, maxAmount: 100000 },
	"ETH_BNB": { minAmount: 0.001, maxAmount: 100000 },
	"ETH_LTC": { minAmount: 0.001, maxAmount: 100000 },
	"ETH_TON": { minAmount: 0.001, maxAmount: 100000 },
	"ETH_TWT": { minAmount: 0.001, maxAmount: 100000 },
	"ETH_DOGE": { minAmount: 0.001, maxAmount: 100000 },
	"ETH_AVAX": { minAmount: 0.001, maxAmount: 100000 },
	"ETH_DASH": { minAmount: 0.001, maxAmount: 100000 },
	"ETH_DOT": { minAmount: 0.001, maxAmount: 100000 },
	"ETH_MATIC": { minAmount: 0.001, maxAmount: 100000 },
	"ETH_ADA": { minAmount: 0.001, maxAmount: 100000 },
	"USDT_BTC": { minAmount: 1, maxAmount: 100000 },
	"USDT_ETH": { minAmount: 1, maxAmount: 100000 },
	"USDT_USDC": { minAmount: 1, maxAmount: 100000 },
	"USDT_DAI": { minAmount: 1, maxAmount: 100000 },
	"USDT_BNB": { minAmount: 1, maxAmount: 100000 },
	"USDT_LTC": { minAmount: 1, maxAmount: 100000 },
	"USDT_TON": { minAmount: 1, maxAmount: 100000 },
	"USDT_TWT": { minAmount: 1, maxAmount: 100000 },
	"USDT_DOGE": { minAmount: 1, maxAmount: 100000 },
	"USDT_AVAX": { minAmount: 1, maxAmount: 100000 },
	"USDT_DASH": { minAmount: 1, maxAmount: 100000 },
	"USDT_DOT": { minAmount: 1, maxAmount: 100000 },
	"USDT_MATIC": { minAmount: 1, maxAmount: 100000 },
	"USDT_ADA": { minAmount: 1, maxAmount: 100000 },
	"USDC_BTC": { minAmount: 10, maxAmount: 100000 },
	"USDC_ETH": { minAmount: 10, maxAmount: 100000 },
	"USDC_USDT": { minAmount: 10, maxAmount: 100000 },
	"USDC_DAI": { minAmount: 10, maxAmount: 100000 },
	"USDC_BNB": { minAmount: 10, maxAmount: 100000 },
	"USDC_LTC": { minAmount: 10, maxAmount: 100000 },
	"USDC_TON": { minAmount: 10, maxAmount: 100000 },
	"USDC_TWT": { minAmount: 10, maxAmount: 100000 },
	"USDC_DOGE": { minAmount: 10, maxAmount: 100000 },
	"USDC_AVAX": { minAmount: 10, maxAmount: 100000 },
	"USDC_DASH": { minAmount: 10, maxAmount: 100000 },
	"USDC_DOT": { minAmount: 10, maxAmount: 100000 },
	"USDC_MATIC": { minAmount: 10, maxAmount: 100000 },
	"USDC_ADA": { minAmount: 10, maxAmount: 100000 },
	"DAI_BTC": { minAmount: 1, maxAmount: 100000 },
	"DAI_ETH": { minAmount: 1, maxAmount: 100000 },
	"DAI_USDT": { minAmount: 1, maxAmount: 100000 },
	"DAI_USDC": { minAmount: 1, maxAmount: 100000 },
	"DAI_BNB": { minAmount: 1, maxAmount: 100000 },
	"DAI_LTC": { minAmount: 1, maxAmount: 100000 },
	"DAI_TON": { minAmount: 1, maxAmount: 100000 },
	"DAI_TWT": { minAmount: 1, maxAmount: 100000 },
	"DAI_DOGE": { minAmount: 1, maxAmount: 100000 },
	"DAI_AVAX": { minAmount: 1, maxAmount: 100000 },
	"DAI_DASH": { minAmount: 1, maxAmount: 100000 },
	"DAI_DOT": { minAmount: 1, maxAmount: 100000 },
	"DAI_MATIC": { minAmount: 1, maxAmount: 100000 },
	"DAI_ADA": { minAmount: 1, maxAmount: 100000 },
	"BNB_BTC": { minAmount: 0.005, maxAmount: 100000 },
	"BNB_ETH": { minAmount: 0.005, maxAmount: 100000 },
	"BNB_USDT": { minAmount: 0.005, maxAmount: 100000 },
	"BNB_USDC": { minAmount: 0.005, maxAmount: 100000 },
	"BNB_DAI": { minAmount: 0.005, maxAmount: 100000 },
	"BNB_LTC": { minAmount: 0.005, maxAmount: 100000 },
	"BNB_TON": { minAmount: 0.005, maxAmount: 100000 },
	"BNB_TWT": { minAmount: 0.005, maxAmount: 100000 },
	"BNB_DOGE": { minAmount: 0.005, maxAmount: 100000 },
	"BNB_AVAX": { minAmount: 0.005, maxAmount: 100000 },
	"BNB_DASH": { minAmount: 0.005, maxAmount: 100000 },
	"BNB_DOT": { minAmount: 0.005, maxAmount: 100000 },
	"BNB_MATIC": { minAmount: 0.005, maxAmount: 100000 },
	"BNB_ADA": { minAmount: 0.005, maxAmount: 100000 },
	"LTC_BTC": { minAmount: 0.025, maxAmount: 100000 },
	"LTC_ETH": { minAmount: 0.025, maxAmount: 100000 },
	"LTC_USDT": { minAmount: 0.025, maxAmount: 100000 },
	"LTC_USDC": { minAmount: 0.025, maxAmount: 100000 },
	"LTC_DAI": { minAmount: 0.025, maxAmount: 100000 },
	"LTC_BNB": { minAmount: 0.025, maxAmount: 100000 },
	"LTC_TON": { minAmount: 0.025, maxAmount: 100000 },
	"LTC_TWT": { minAmount: 0.025, maxAmount: 100000 },
	"LTC_DOGE": { minAmount: 0.025, maxAmount: 100000 },
	"LTC_AVAX": { minAmount: 0.025, maxAmount: 100000 },
	"LTC_DASH": { minAmount: 0.025, maxAmount: 100000 },
	"LTC_DOT": { minAmount: 0.025, maxAmount: 100000 },
	"LTC_MATIC": { minAmount: 0.025, maxAmount: 100000 },
	"LTC_ADA": { minAmount: 0.025, maxAmount: 100000 },
	"TON_BTC": { minAmount: 5, maxAmount: 100000 },
	"TON_ETH": { minAmount: 5, maxAmount: 100000 },
	"TON_USDT": { minAmount: 5, maxAmount: 100000 },
	"TON_USDC": { minAmount: 5, maxAmount: 100000 },
	"TON_DAI": { minAmount: 5, maxAmount: 100000 },
	"TON_BNB": { minAmount: 5, maxAmount: 100000 },
	"TON_LTC": { minAmount: 5, maxAmount: 100000 },
	"TON_TWT": { minAmount: 5, maxAmount: 100000 },
	"TON_DOGE": { minAmount: 5, maxAmount: 100000 },
	"TON_AVAX": { minAmount: 5, maxAmount: 100000 },
	"TON_DASH": { minAmount: 5, maxAmount: 100000 },
	"TON_DOT": { minAmount: 5, maxAmount: 100000 },
	"TON_MATIC": { minAmount: 5, maxAmount: 100000 },
	"TON_ADA": { minAmount: 5, maxAmount: 100000 },
	"TWT_BTC": { minAmount: 1, maxAmount: 100000 },
	"TWT_ETH": { minAmount: 1, maxAmount: 100000 },
	"TWT_USDT": { minAmount: 1, maxAmount: 100000 },
	"TWT_USDC": { minAmount: 1, maxAmount: 100000 },
	"TWT_DAI": { minAmount: 1, maxAmount: 100000 },
	"TWT_BNB": { minAmount: 1, maxAmount: 100000 },
	"TWT_LTC": { minAmount: 1, maxAmount: 100000 },
	"TWT_TON": { minAmount: 1, maxAmount: 100000 },
	"TWT_DOGE": { minAmount: 1, maxAmount: 100000 },
	"TWT_AVAX": { minAmount: 1, maxAmount: 100000 },
	"TWT_DASH": { minAmount: 1, maxAmount: 100000 },
	"TWT_DOT": { minAmount: 1, maxAmount: 100000 },
	"TWT_MATIC": { minAmount: 1, maxAmount: 100000 },
	"TWT_ADA": { minAmount: 1, maxAmount: 100000 },
	"DOGE_BTC": { minAmount: 50, maxAmount: 100000 },
	"DOGE_ETH": { minAmount: 50, maxAmount: 100000 },
	"DOGE_USDT": { minAmount: 50, maxAmount: 100000 },
	"DOGE_USDC": { minAmount: 50, maxAmount: 100000 },
	"DOGE_DAI": { minAmount: 50, maxAmount: 100000 },
	"DOGE_BNB": { minAmount: 50, maxAmount: 100000 },
	"DOGE_LTC": { minAmount: 50, maxAmount: 100000 },
	"DOGE_TON": { minAmount: 50, maxAmount: 100000 },
	"DOGE_TWT": { minAmount: 50, maxAmount: 100000 },
	"DOGE_AVAX": { minAmount: 50, maxAmount: 100000 },
	"DOGE_DASH": { minAmount: 50, maxAmount: 100000 },
	"DOGE_DOT": { minAmount: 50, maxAmount: 100000 },
	"DOGE_MATIC": { minAmount: 50, maxAmount: 100000 },
	"DOGE_ADA": { minAmount: 50, maxAmount: 100000 },
	"AVAX_BTC": { minAmount: 1, maxAmount: 100000 },
	"AVAX_ETH": { minAmount: 1, maxAmount: 100000 },
	"AVAX_USDT": { minAmount: 1, maxAmount: 100000 },
	"AVAX_USDC": { minAmount: 1, maxAmount: 100000 },
	"AVAX_DAI": { minAmount: 1, maxAmount: 100000 },
	"AVAX_BNB": { minAmount: 1, maxAmount: 100000 },
	"AVAX_LTC": { minAmount: 1, maxAmount: 100000 },
	"AVAX_TON": { minAmount: 1, maxAmount: 100000 },
	"AVAX_TWT": { minAmount: 1, maxAmount: 100000 },
	"AVAX_DOGE": { minAmount: 1, maxAmount: 100000 },
	"AVAX_DASH": { minAmount: 1, maxAmount: 100000 },
	"AVAX_DOT": { minAmount: 1, maxAmount: 100000 },
	"AVAX_MATIC": { minAmount: 1, maxAmount: 100000 },
	"AVAX_ADA": { minAmount: 1, maxAmount: 100000 },
	"DASH_BTC": { minAmount: 0.05, maxAmount: 100000 },
	"DASH_ETH": { minAmount: 0.05, maxAmount: 100000 },
	"DASH_USDT": { minAmount: 0.05, maxAmount: 100000 },
	"DASH_USDC": { minAmount: 0.05, maxAmount: 100000 },
	"DASH_DAI": { minAmount: 0.05, maxAmount: 100000 },
	"DASH_BNB": { minAmount: 0.05, maxAmount: 100000 },
	"DASH_LTC": { minAmount: 0.05, maxAmount: 100000 },
	"DASH_TON": { minAmount: 0.05, maxAmount: 100000 },
	"DASH_TWT": { minAmount: 0.05, maxAmount: 100000 },
	"DASH_DOGE": { minAmount: 0.05, maxAmount: 100000 },
	"DASH_AVAX": { minAmount: 0.05, maxAmount: 100000 },
	"DASH_DOT": { minAmount: 0.05, maxAmount: 100000 },
	"DASH_MATIC": { minAmount: 0.05, maxAmount: 100000 },
	"DASH_ADA": { minAmount: 0.05, maxAmount: 100000 },
	"DOT_BTC": { minAmount: 1, maxAmount: 100000 },
	"DOT_ETH": { minAmount: 1, maxAmount: 100000 },
	"DOT_USDT": { minAmount: 1, maxAmount: 100000 },
	"DOT_USDC": { minAmount: 1, maxAmount: 100000 },
	"DOT_DAI": { minAmount: 1, maxAmount: 100000 },
	"DOT_BNB": { minAmount: 1, maxAmount: 100000 },
	"DOT_LTC": { minAmount: 1, maxAmount: 100000 },
	"DOT_TON": { minAmount: 1, maxAmount: 100000 },
	"DOT_TWT": { minAmount: 1, maxAmount: 100000 },
	"DOT_DOGE": { minAmount: 1, maxAmount: 100000 },
	"DOT_AVAX": { minAmount: 1, maxAmount: 100000 },
	"DOT_DASH": { minAmount: 1, maxAmount: 100000 },
	"DOT_MATIC": { minAmount: 1, maxAmount: 100000 },
	"DOT_ADA": { minAmount: 1, maxAmount: 100000 },
	"MATIC_BTC": { minAmount: 5, maxAmount: 100000 },
	"MATIC_ETH": { minAmount: 5, maxAmount: 100000 },
	"MATIC_USDT": { minAmount: 5, maxAmount: 100000 },
	"MATIC_USDC": { minAmount: 5, maxAmount: 100000 },
	"MATIC_DAI": { minAmount: 5, maxAmount: 100000 },
	"MATIC_BNB": { minAmount: 5, maxAmount: 100000 },
	"MATIC_LTC": { minAmount: 5, maxAmount: 100000 },
	"MATIC_TON": { minAmount: 5, maxAmount: 100000 },
	"MATIC_TWT": { minAmount: 5, maxAmount: 100000 },
	"MATIC_DOGE": { minAmount: 5, maxAmount: 100000 },
	"MATIC_AVAX": { minAmount: 5, maxAmount: 100000 },
	"MATIC_DASH": { minAmount: 5, maxAmount: 100000 },
	"MATIC_DOT": { minAmount: 5, maxAmount: 100000 },
	"MATIC_ADA": { minAmount: 5, maxAmount: 100000 },
	"ADA_BTC": { minAmount: 1, maxAmount: 100000 },
	"ADA_ETH": { minAmount: 1, maxAmount: 100000 },
	"ADA_USDT": { minAmount: 1, maxAmount: 100000 },
	"ADA_USDC": { minAmount: 1, maxAmount: 100000 },
	"ADA_DAI": { minAmount: 1, maxAmount: 100000 },
	"ADA_BNB": { minAmount: 1, maxAmount: 100000 },
	"ADA_LTC": { minAmount: 1, maxAmount: 100000 },
	"ADA_TON": { minAmount: 1, maxAmount: 100000 },
	"ADA_TWT": { minAmount: 1, maxAmount: 100000 },
	"ADA_DOGE": { minAmount: 1, maxAmount: 100000 },
	"ADA_AVAX": { minAmount: 1, maxAmount: 100000 },
	"ADA_DASH": { minAmount: 1, maxAmount: 100000 },
	"ADA_DOT": { minAmount: 1, maxAmount: 100000 },
	"ADA_MATIC": { minAmount: 1, maxAmount: 100000 },

	// otc
	"BTC_RUB": { minAmount: 0.000042, maxAmount: 0.21 },
	"ETH_RUB": { minAmount: 0.00071, maxAmount: 3.55 },
	"USDT_RUB": { minAmount: 2.1, maxAmount: 10800 },
	"USDC_RUB": { minAmount: 2.1, maxAmount: 10800 },
	"DAI_RUB": { minAmount: 2.1, maxAmount: 10800 },
	"BNB_RUB": { minAmount: 0.0056, maxAmount: 27.81 },
	"LTC_RUB": { minAmount: 0.0031, maxAmount: 156.07 },
	"TON_RUB": { minAmount: 1.03, maxAmount: 5181 },
	"TWT_RUB": { minAmount: 1.65, maxAmount: 8200 },
	"DOGE_RUB": { minAmount: 25.66, maxAmount: 128296 },
	"AVAX_RUB": { minAmount: 0.3, maxAmount: 1230 },
	"DASH_RUB": { minAmount: 0.071, maxAmount: 356 },
	"DOT_RUB": { minAmount: 0.27, maxAmount: 1360 },
	"MATIC_RUB": { minAmount: 2.1, maxAmount: 10860 },
	"ADA_RUB": { minAmount: 3.75, maxAmount: 18725 },
	"BTC_EUR": { minAmount: 0.000042, maxAmount: 0.21 },
	"ETH_EUR": { minAmount: 0.00071, maxAmount: 3.55 },
	"USDT_EUR": { minAmount: 2.1, maxAmount: 10800 },
	"USDC_EUR": { minAmount: 2.1, maxAmount: 10800 },
	"DAI_EUR": { minAmount: 2.1, maxAmount: 10800 },
	"BNB_EUR": { minAmount: 0.0056, maxAmount: 27.81 },
	"LTC_EUR": { minAmount: 0.0031, maxAmount: 156.07 },
	"TON_EUR": { minAmount: 1.03, maxAmount: 5181 },
	"TWT_EUR": { minAmount: 1.65, maxAmount: 8200 },
	"DOGE_EUR": { minAmount: 25.66, maxAmount: 128296 },
	"AVAX_EUR": { minAmount: 0.3, maxAmount: 1230 },
	"DASH_EUR": { minAmount: 0.071, maxAmount: 356 },
	"DOT_EUR": { minAmount: 0.27, maxAmount: 1360 },
	"MATIC_EUR": { minAmount: 2.1, maxAmount: 10860 },
	"ADA_EUR": { minAmount: 3.75, maxAmount: 18725 },
	"BTC_USD": { minAmount: 0.000042, maxAmount: 0.21 },
	"ETH_USD": { minAmount: 0.00071, maxAmount: 3.55 },
	"USDT_USD": { minAmount: 2.1, maxAmount: 10800 },
	"USDC_USD": { minAmount: 2.1, maxAmount: 10800 },
	"DAI_USD": { minAmount: 2.1, maxAmount: 10800 },
	"BNB_USD": { minAmount: 0.0056, maxAmount: 27.81 },
	"LTC_USD": { minAmount: 0.0031, maxAmount: 156.07 },
	"TON_USD": { minAmount: 1.03, maxAmount: 5181 },
	"TWT_USD": { minAmount: 1.65, maxAmount: 8200 },
	"DOGE_USD": { minAmount: 25.66, maxAmount: 128296 },
	"AVAX_USD": { minAmount: 0.3, maxAmount: 1230 },
	"DASH_USD": { minAmount: 0.071, maxAmount: 356 },
	"DOT_USD": { minAmount: 0.27, maxAmount: 1360 },
	"MATIC_USD": { minAmount: 2.1, maxAmount: 10860 },
	"ADA_USD": { minAmount: 3.75, maxAmount: 18725 },
	"BTC_KZT": { minAmount: 0.000042, maxAmount: 0.21 },
	"ETH_KZT": { minAmount: 0.00071, maxAmount: 3.55 },
	"USDT_KZT": { minAmount: 2.1, maxAmount: 10800 },
	"USDC_KZT": { minAmount: 2.1, maxAmount: 10800 },
	"DAI_KZT": { minAmount: 2.1, maxAmount: 10800 },
	"BNB_KZT": { minAmount: 0.0056, maxAmount: 27.81 },
	"LTC_KZT": { minAmount: 0.0031, maxAmount: 156.07 },
	"TON_KZT": { minAmount: 1.03, maxAmount: 5181 },
	"TWT_KZT": { minAmount: 1.65, maxAmount: 8200 },
	"DOGE_KZT": { minAmount: 25.66, maxAmount: 128296 },
	"AVAX_KZT": { minAmount: 0.3, maxAmount: 1230 },
	"DASH_KZT": { minAmount: 0.071, maxAmount: 356 },
	"DOT_KZT": { minAmount: 0.27, maxAmount: 1360 },
	"MATIC_KZT": { minAmount: 2.1, maxAmount: 10860 },
	"ADA_KZT": { minAmount: 3.75, maxAmount: 18725 },
	"BTC_AZN": { minAmount: 0.000042, maxAmount: 0.21 },
	"ETH_AZN": { minAmount: 0.00071, maxAmount: 3.55 },
	"USDT_AZN": { minAmount: 2.1, maxAmount: 10800 },
	"USDC_AZN": { minAmount: 2.1, maxAmount: 10800 },
	"DAI_AZN": { minAmount: 2.1, maxAmount: 10800 },
	"BNB_AZN": { minAmount: 0.0056, maxAmount: 27.81 },
	"LTC_AZN": { minAmount: 0.0031, maxAmount: 156.07 },
	"TON_AZN": { minAmount: 1.03, maxAmount: 5181 },
	"TWT_AZN": { minAmount: 1.65, maxAmount: 8200 },
	"DOGE_AZN": { minAmount: 25.66, maxAmount: 128296 },
	"AVAX_AZN": { minAmount: 0.3, maxAmount: 1230 },
	"DASH_AZN": { minAmount: 0.071, maxAmount: 356 },
	"DOT_AZN": { minAmount: 0.27, maxAmount: 1360 },
	"MATIC_AZN": { minAmount: 2.1, maxAmount: 10860 },
	"ADA_AZN": { minAmount: 3.75, maxAmount: 18725 },
	"BTC_UZS": { minAmount: 0.000042, maxAmount: 0.21 },
	"ETH_UZS": { minAmount: 0.00071, maxAmount: 3.55 },
	"USDT_UZS": { minAmount: 2.1, maxAmount: 10800 },
	"USDC_UZS": { minAmount: 2.1, maxAmount: 10800 },
	"DAI_UZS": { minAmount: 2.1, maxAmount: 10800 },
	"BNB_UZS": { minAmount: 0.0056, maxAmount: 27.81 },
	"LTC_UZS": { minAmount: 0.0031, maxAmount: 156.07 },
	"TON_UZS": { minAmount: 1.03, maxAmount: 5181 },
	"TWT_UZS": { minAmount: 1.65, maxAmount: 8200 },
	"DOGE_UZS": { minAmount: 25.66, maxAmount: 128296 },
	"AVAX_UZS": { minAmount: 0.3, maxAmount: 1230 },
	"DASH_UZS": { minAmount: 0.071, maxAmount: 356 },
	"DOT_UZS": { minAmount: 0.27, maxAmount: 1360 },
	"MATIC_UZS": { minAmount: 2.1, maxAmount: 10860 },
	"ADA_UZS": { minAmount: 3.75, maxAmount: 18725 },

	// aiforiy
	"RUB_BTC": { minAmount: 500, maxAmount: 300000 },
	"RUB_ETH": { minAmount: 500, maxAmount: 300000 },
	"RUB_USDT": { minAmount: 500, maxAmount: 300000 },
	"RUB_USDC": { minAmount: 500, maxAmount: 300000 },
	"RUB_DAI": { minAmount: 500, maxAmount: 300000 },
	"RUB_BNB": { minAmount: 500, maxAmount: 300000 },
	"RUB_LTC": { minAmount: 500, maxAmount: 300000 },
	"RUB_TON": { minAmount: 500, maxAmount: 300000 },
	"RUB_TWT": { minAmount: 500, maxAmount: 300000 },
	"RUB_DOGE": { minAmount: 500, maxAmount: 300000 },
	"RUB_AVAX": { minAmount: 500, maxAmount: 300000 },
	"RUB_DASH": { minAmount: 500, maxAmount: 300000 },
	"RUB_DOT": { minAmount: 500, maxAmount: 300000 },
	"RUB_MATIC": { minAmount: 500, maxAmount: 300000 },
	"RUB_ADA": { minAmount: 500, maxAmount: 300000 },
	"EUR_BTC": { minAmount: 5, maxAmount: 1000 },
	"EUR_ETH": { minAmount: 5, maxAmount: 1000 },
	"EUR_USDT": { minAmount: 5, maxAmount: 1000 },
	"EUR_USDC": { minAmount: 5, maxAmount: 1000 },
	"EUR_DAI": { minAmount: 5, maxAmount: 1000 },
	"EUR_BNB": { minAmount: 5, maxAmount: 1000 },
	"EUR_LTC": { minAmount: 5, maxAmount: 1000 },
	"EUR_TON": { minAmount: 5, maxAmount: 1000 },
	"EUR_TWT": { minAmount: 5, maxAmount: 1000 },
	"EUR_DOGE": { minAmount: 5, maxAmount: 1000 },
	"EUR_AVAX": { minAmount: 5, maxAmount: 1000 },
	"EUR_DASH": { minAmount: 5, maxAmount: 1000 },
	"EUR_DOT": { minAmount: 5, maxAmount: 1000 },
	"EUR_MATIC": { minAmount: 5, maxAmount: 1000 },
	"EUR_ADA": { minAmount: 5, maxAmount: 1000 },
}


module.exports = minMaxAmounts;