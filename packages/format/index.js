"use strict";
exports.__esModule = true;
exports.formatPrice = void 0;
function formatPrice(value, currency, locale) {
    return new Intl.NumberFormat(locale || (navigator === null || navigator === void 0 ? void 0 : navigator.language) || "", { style: "currency", currency: currency }).format(value);
}
exports.formatPrice = formatPrice;
