var suicides = {
"AF": 5.7,
"AL": 5.9,
"AM": 2.9,
"DZ": 1.9,
"AO": 13.8,
"AR": 10.3,
"AU": 10.6,
"AT": 11.5,
"AZ": 1.7,
"BD": 7.8,
"BY": 18.3,
"BE": 14.2,
"BZ": 2.6,
"BJ": 5.7,
"BT": 17.8,
"BO": 12.2,
"BA": 10.8,
"BW": 3.8,
"BR": 5.8,
"BS": 2.3,
"BN": 6.4,
"BG": 10.8,
"BF": 4.8,
"BI": 23.1,
"KH": 9.4,
"CM": 7,
"CA": 9.8,
"CO": 5.4,
"CF": 9.5,
"TD": 4.7,
"CL": 12.2,
"CN": 7.8,
"CG": 9.6,
"CR": 6.7,
"CI": 7.4,
"HR": 11.6,
"CU": 11.4,
"CY": 4.7,
"CZ": 12.5,
"CD": 10.1,
"DK": 8.8,
"DO": 4.1,
"DJ": 15.1,
"EC": 9.2,
"EG": 1.7,
"SV": 13.6,
"ER": 16.3,
"EE": 13.6,
"ET": 11.5,
"FJ": 7.3,
"FI": 14.8,
"FR": 12.3,
"GA": 8.2,
"GM": 5,
"GE": 3.2,
"GQ": 16.6,
"DE": 9.2,
"GH": 3.1,
"GR": 3.8,
"GT": 8.7,
"GN": 4.7,
"GW": 4.7,
"GY": 44.2,
"GB": 6.2,
"HT": 2.8,
"HN": 5.5,
"HU": 19.1,
"IS": 14,
"IN": 21.1,
"ID": 4.3,
"IR": 5.2,
"IQ": 1.7,
"IE": 11,
"IL": 5.9,
"IT": 4.7,
"JM": 1.2,
"JP": 18.5,
"JO": 2,
"KZ": 23.8,
"KE": 16.2,
"KW": 0.9,
"KG": 9.2,
"KP": 28.9,
"LA": 8.8,
"LV": 16.2,
"LB": 0.9,
"LS": 6.1,
"LR": 4.3,
"LT": 28.2,
"LY": 1.8,
"LU": 8.7,
"MG": 11,
"MW": 16,
"MY": 3,
"ML": 4.8,
"MR": 2.9,
"MX": 4.2,
"MN": 9.8,
"ME": 15.3,
"MA": 5.3,
"MZ": 27.4,
"MM": 13.1,
"NA": 2.7,
"NP": 24.9,
"NL": 8.2,
"NZ": 9.6,
"NI": 10,
"NE": 3.5,
"NG": 6.5,
"NO": 9.1,
"OM": 1,
"PK": 9.3,
"PA": 4.7,
"PG": 12.4,
"PY": 6.1,
"PE": 3.2,
"PH": 2.9,
"PL": 16.6,
"PT": 8.2,
"QA": 4.6,
"RO": 10.5,
"RU": 19.5,
"RW": 11.9,
"SA": 0.4,
"SN": 5.4,
"RS": 12.4,
"SL": 7.7,
"SK": 10.1,
"SI": 12.4,
"SB": 10.6,
"SO": 12.4,
"SS": 19.8,
"ZA": 3,
"ES": 5.1,
"LK": 28.8,
"SD": 17.2,
"SR": 27.8,
"SZ": 6.2,
"SE": 11.1,
"CH": 9.2,
"SY": 0.4,
"TJ": 4.2,
"TH": 11.4,
"TM": 19.6,
"MK": 5.2,
"TL": 8,
"TG": 5.5,
"TT": 13,
"TN": 2.4,
"TR": 7.9,
"UG": 19.5,
"UA": 16.8,
"AE": 3.2,
"TZ": 24.9,
"US": 12.1,
"UZ": 8.5,
"UY": 12.1,
"VN": 5,
"VE": 2.6,
"YE": 3.7,
"ZM": 15.7,
"ZW": 18.1
  };

var psychiatrists = {
"AF": 0.01,
"AL": 1.32,
"AM": 5.9,
"DZ": 2.29,	
"AU": 9.16,
"AZ": 3.72,
"BD": 0.13,
"BY": 7.66,
"BE": 20.32,
"BZ": 0.59,
"BJ": 0.11,
"BA": 4,
"BW": 0.29,
"BR": 3.49,
"BN": 3.31,
"BF": 0.05,
"BI": 0.01,
"CA": 13.42,
"CL": 4.66,
"CI": 0.1,
"CO": 2.53,
"CU": 10.26,
"CY": 2.69,
"CD": 0.1,
"DK": 9.57,
"DO": 1.08,
"EC": 1.09,
"EG": 0.69,
"ER": 0,
"EE": 13.87,
"FI": 18.37,
"FR": 14.12,
"GM": 0.11,
"GE": 5.85,
"GH": 0.06,
"GR": 14.09,
"GT": 0.29,
"GY": 0.5,
"GB": 14.63,
"HT": 0.07,
"HN": 0.38,
"IN": 0.3,
"ID": 0.29,
"IR": 1.76,
"IQ": 0.37,
"IL": 11.57,
"IT": 10.85,
"JM": 1.11,
"JO": 0.51,
"KW": 3.33,
"KG": 3.36,
"LA": 0.03,
"LV": 12.05,
"LB": 0.87,
"LS": 0.1,
"LR": 0.02,
"MG": 0.06,
"MY": 0.76,
"ML": 0.04,
"MX": 0.67,
"ME": 8.69,
"MA": 0.45,
"MZ": 0.05,
"MM": 0.29,
"NA": 0.34,
"NP": 0.22,
"NL": 20.1,
"NE": 0.02,
"NG": 0.1,
"NO": 29.69,
"OM": 2.32,
"PK": 0.31,
"PA": 3.8,
"PG": 0.09,
"PY": 2,
"PE": 0.76,
"PH": 0.46,
"PL": 5.07,
"PT": 4.49,
"QA": 2.95,
"RO": 5.98,
"RU": 11.06,
"SA": 2.14,
"SN": 0.14,
"RS": 7.35,
"SL": 0.03,
"SI": 10.21,
"SB": 0.18,
"SS": 0.03,
"ZA": 0.39,
"ES": 8.08,
"LK": 0.36,
"SR": 1.47,
"SE": 18.31,
"TJ": 2.16,
"TH": 0.87,
"TL": 0.26,
"TG": 0.04,
"TT": 3.12,
"TN": 2.58,
"TR": 1.51,
"TZ": 0.01,
"US": 12.4,
"UZ": 2.68,
"UY": 16.91,
"VN": 0.91,
"ZM": 0.05,
"ZW": 0.08
  };
  