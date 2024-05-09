
/**
 * @see https://partner.steamgames.com/doc/store/pricing/currencies
 */

export interface TCurrency {
    id: number,
    abbr: string,
    symbol: string|null,
    hint: string,
    multiplier: number,
    unit: number,
    format: {
        places: number,
        hidePlacesWhenZero: boolean,
        symbolFormat: string,
        thousand: string,
        group?: number,
        decimal: string,
        right: boolean
    }
}

export default Object.freeze(<Array<TCurrency>>[
    { "id": 1, "abbr": "USD", "symbol": "$", "hint": "United States Dollars", "multiplier": 100, "unit": 1, "format": { "places": 2, "hidePlacesWhenZero": false, "symbolFormat": "$", "thousand": ",", "decimal": ".", "right": false } },
    { "id": 2, "abbr": "GBP", "symbol": "£", "hint": "British Pound", "multiplier": 100, "unit": 1, "format": { "places": 2, "hidePlacesWhenZero": false, "symbolFormat": "£", "thousand": ",", "decimal": ".", "right": false } },
    { "id": 3, "abbr": "EUR", "symbol": "€", "hint": "European Union Euro", "multiplier": 100, "unit": 1, "format": { "places": 2, "hidePlacesWhenZero": false, "symbolFormat": "€", "thousand": " ", "decimal": ",", "right": true } },
    { "id": 4, "abbr": "CHF", "symbol": "CHF", "hint": "Swiss Francs", "multiplier": 100, "unit": 1, "format": { "places": 2, "hidePlacesWhenZero": false, "symbolFormat": "CHF ", "thousand": "'", "decimal": ".", "right": false } },
    { "id": 5, "abbr": "RUB", "symbol": "pуб", "hint": "Russian Rouble", "multiplier": 100, "unit": 1, "format": { "places": 2, "hidePlacesWhenZero": true,  "symbolFormat": " pуб.", "thousand": "", "decimal": ",", "right": true } },
    { "id": 6, "abbr": "PLN", "symbol": "zł", "hint": "Polish Złoty", "multiplier": 100, "unit": 1, "format": { "places": 2, "hidePlacesWhenZero": false, "symbolFormat": " zł", "thousand": " ", "decimal": ",", "right": true } },
    { "id": 7, "abbr": "BRL", "symbol": "R$", "hint": "Brazilian Reals", "multiplier": 100, "unit": 1, "format": { "places": 2, "hidePlacesWhenZero": false, "symbolFormat": "R$ ", "thousand": ".", "decimal": ",", "right": false } },
    { "id": 8, "abbr": "JPY", "symbol": "¥", "hint": "Japanese Yen", "multiplier": 100, "unit": 100, "format": { "places": 0, "hidePlacesWhenZero": false, "symbolFormat": "¥ ", "thousand": " ", "group": 4, "decimal": ".", "right": false } },
    { "id": 9, "abbr": "NOK", "symbol": "kr", "hint": "Norwegian Krone", "multiplier": 100, "unit": 1, "format": { "places": 2, "hidePlacesWhenZero": false, "symbolFormat": " kr", "thousand": ".", "decimal": ",", "right": true } },
    { "id": 10, "abbr": "IDR", "symbol": "Rp", "hint": "Indonesian Rupiah", "multiplier": 100, "unit": 100, "format": { "places": 0, "hidePlacesWhenZero": false, "symbolFormat": "Rp ", "thousand": " ", "decimal": ".", "right": false } },
    { "id": 11, "abbr": "MYR", "symbol": "RM", "hint": "Malaysian Ringgit", "multiplier": 100, "unit": 1, "format": { "places": 2, "hidePlacesWhenZero": false, "symbolFormat": "RM", "thousand": ",", "decimal": ".", "right": false } },
    { "id": 12, "abbr": "PHP", "symbol": "P", "hint": "Philippine Pes", "multiplier": 100, "unit": 1, "format": { "places": 2, "hidePlacesWhenZero": false, "symbolFormat": "P", "thousand": ",", "decimal": ".", "right": false } },
    { "id": 13, "abbr": "SGD", "symbol": "S$", "hint": "Singapore Dollar", "multiplier": 100, "unit": 1, "format": { "places": 2, "hidePlacesWhenZero": false, "symbolFormat": "S$", "thousand": ",", "decimal": ".", "right": false } },
    { "id": 14, "abbr": "THB", "symbol": "฿", "hint": "Thai Baht", "multiplier": 100, "unit": 1, "format": { "places": 2, "hidePlacesWhenZero": false, "symbolFormat": "฿", "thousand": ",", "decimal": ".", "right": false } },
    { "id": 15, "abbr": "VND", "symbol": "₫", "hint": "Vietnamese Dong", "multiplier": 100, "unit": 50000, "format": { "places": 2, "hidePlacesWhenZero": false, "symbolFormat": "₫", "thousand": ",", "decimal": ".", "right": false } },
    { "id": 16, "abbr": "KRW", "symbol": "₩", "hint": "South Korean Won", "multiplier": 100, "unit": 1000, "format": { "places": 2, "hidePlacesWhenZero": false, "symbolFormat": "₩", "thousand": ",", "decimal": ".", "right": false } },
    { "id": 17, "abbr": "TRY", "symbol": "TL", "hint": "Turkish Lira", "multiplier": 100, "unit": 1, "format": { "places": 2, "hidePlacesWhenZero": false, "symbolFormat": " TL", "thousand": "", "decimal": ",", "right": true } },
    { "id": 18, "abbr": "UAH", "symbol": "₴", "hint": "Ukrainian Hryvnia", "multiplier": 100, "unit": 100, "format": { "places": 2, "hidePlacesWhenZero": false, "symbolFormat": "₴", "thousand": "", "decimal": ",", "right": true } },
    { "id": 19, "abbr": "MXN", "symbol": "Mex$", "hint": "Mexican Peso", "multiplier": 100, "unit": 1, "format": { "places": 2, "hidePlacesWhenZero": false, "symbolFormat": "Mex$ ", "thousand": ",", "decimal": ".", "right": false } },
    { "id": 20, "abbr": "CAD", "symbol": "CDN$", "hint": "Canadian Dollars", "multiplier": 100, "unit": 1, "format": { "places": 2, "hidePlacesWhenZero": false, "symbolFormat": "CDN$ ", "thousand": ",", "decimal": ".", "right": false } },
    { "id": 21, "abbr": "AUD", "symbol": "A$", "hint": "Australian Dollars", "multiplier": 100, "unit": 1, "format": { "places": 2, "hidePlacesWhenZero": false, "symbolFormat": "A$ ", "thousand": ",", "decimal": ".", "right": false } },
    { "id": 22, "abbr": "NZD", "symbol": "NZ$", "hint": "New Zealand Dollar", "multiplier": 100, "unit": 1, "format": { "places": 2, "hidePlacesWhenZero": false, "symbolFormat": "NZ$ ", "thousand": ",", "decimal": ".", "right": false } },
    { "id": 23, "abbr": "CNY", "symbol": null, "hint": "Chinese Renminbi (yuan)", "multiplier": 100, "unit": 100, "format": { "places": 2, "hidePlacesWhenZero": false, "symbolFormat": "¥ ", "thousand": ",", "decimal": ".", "right": false } },
    { "id": 24, "abbr": "INR", "symbol": "₹", "hint": "Indian Rupee", "multiplier": 100, "unit": 100, "format": { "places": 0, "hidePlacesWhenZero": false, "symbolFormat": "₹ ", "thousand": ",", "decimal": ".", "right": false } },
    { "id": 25, "abbr": "CLP", "symbol": "CLP$", "hint": "Chilean Peso", "multiplier": 100, "unit": 100, "format": { "places": 0, "hidePlacesWhenZero": true, "symbolFormat": "CLP$ ", "thousand": ".", "decimal": ",", "right": false } },
    { "id": 26, "abbr": "PEN", "symbol": "S/.", "hint": "Peruvian Nuevo Sol", "multiplier": 100, "unit": 1, "format": { "places": 2, "hidePlacesWhenZero": false, "symbolFormat": "S/.", "thousand": ",", "decimal": ".", "right": false } },
    { "id": 27, "abbr": "COP", "symbol": "COL$", "hint": "Colombian Peso", "multiplier": 100, "unit": 100, "format": { "places": 0, "hidePlacesWhenZero": true, "symbolFormat": "COL$ ", "thousand": ".", "decimal": ",", "right": false } },
    { "id": 28, "abbr": "ZAR", "symbol": "R ", "hint": "South African Rand", "multiplier": 100, "unit": 1, "format": { "places": 2, "hidePlacesWhenZero": false, "symbolFormat": "R ", "thousand": " ", "decimal": ".", "right": false } },
    { "id": 29, "abbr": "HKD", "symbol": "HK$", "hint": "Hong Kong Dollar", "multiplier": 100, "unit": 1, "format": { "places": 2, "hidePlacesWhenZero": false, "symbolFormat": "HK$ ", "thousand": ",", "decimal": ".", "right": false } },
    { "id": 30, "abbr": "TWD", "symbol": "NT$", "hint": "New Taiwan Dollar", "multiplier": 100, "unit": 100, "format": { "places": 0, "hidePlacesWhenZero": false, "symbolFormat": "NT$ ", "thousand": ",", "decimal": ".", "right": false } },
    { "id": 31, "abbr": "SAR", "symbol": "SR", "hint": "Saudi Riyal", "multiplier": 100, "unit": 1, "format": { "places": 2, "hidePlacesWhenZero": false, "symbolFormat": " SR", "thousand": ",", "decimal": ".", "right": true } },
    { "id": 32, "abbr": "AED", "symbol": "DH", "hint": "United Arab Emirates Dirham", "multiplier": 100, "unit": 1, "format": { "places": 2, "hidePlacesWhenZero": false, "symbolFormat": " DH", "thousand": ",", "decimal": ".", "right": true } },
    { "id": 34, "abbr": "ARS", "symbol": "ARS$", "hint": "Argentine Peso", "multiplier": 100, "unit": 1, "format": { "places": 2, "hidePlacesWhenZero": false, "symbolFormat": "ARS$ ", "thousand": ".", "decimal": ",", "right": false } },
    { "id": 35, "abbr": "ILS", "symbol": "₪", "hint": "Israeli New Shekel", "multiplier": 100, "unit": 1, "format": { "places": 2, "hidePlacesWhenZero": false, "symbolFormat": "₪", "thousand": ",", "decimal": ".", "right": false } },
    { "id": 37, "abbr": "KZT", "symbol": "₸", "hint": "Kazakhstani Tenge", "multiplier": 100, "unit": 100, "format": { "places": 2, "hidePlacesWhenZero": true, "symbolFormat": "₸ ", "thousand": " ", "decimal": ".", "right": false } },
    { "id": 38, "abbr": "KWD", "symbol": "KD", "hint": "Kuwaiti Dinar", "multiplier": 100, "unit": 1, "format": { "places": 3, "hidePlacesWhenZero": false, "symbolFormat": " KD", "thousand": ",", "decimal": ".", "right": true } },
    { "id": 39, "abbr": "QAR", "symbol": "QR", "hint": "Qatari Riyal", "multiplier": 100, "unit": 1, "format": { "places": 2, "hidePlacesWhenZero": false, "symbolFormat": " QR", "thousand": ",", "decimal": ".", "right": true } },
    { "id": 40, "abbr": "CRC", "symbol": "₡", "hint": "Costa Rican Colón", "multiplier": 100, "unit": 500, "format": { "places": 2, "hidePlacesWhenZero": false, "symbolFormat": "₡", "thousand": ".", "decimal": ",", "right": false } },
    { "id": 41, "abbr": "UYU", "symbol": "$U", "hint": "Uruguayan Peso", "multiplier": 100, "unit": 100, "format": { "places": 0, "hidePlacesWhenZero": true, "symbolFormat": "$U", "thousand": ",", "decimal": ".", "right": false } }
]);
