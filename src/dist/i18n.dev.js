"use strict";

var _i18next = _interopRequireDefault(require("i18next"));

var _reactI18next = require("react-i18next");

var _i18nextBrowserLanguagedetector = _interopRequireDefault(require("i18next-browser-languagedetector"));

var _translation, _translation2;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

_i18next["default"].use(_reactI18next.initReactI18next).use(_i18nextBrowserLanguagedetector["default"]).init({
  fallbackLng: "en",
  resources: {
    en: {
      translation: (_translation = {
        learn: "Welcome to React and react-i18next",
        location: "Location",
        WhatsApp: "WhatsApp",
        Call: "Call",
        Vat: "All prices are inclusive of VAT",
        Powerby: "Powered by ZMatjar"
      }, _defineProperty(_translation, "learn", "learn more"), _defineProperty(_translation, "add", "Add"), _defineProperty(_translation, "basket", "View basket"), _defineProperty(_translation, "cartbasket", "YOUR BASKET"), _defineProperty(_translation, "Instructions", "Instructions"), _defineProperty(_translation, "Subtotal", "Subtotal"), _defineProperty(_translation, "charges", "Delivery charges Free"), _defineProperty(_translation, "Total", "Total"), _defineProperty(_translation, "cartVat", "Inclusive of VAT"), _defineProperty(_translation, "Checkout", "Checkout"), _translation)
    },
    ar: {
      translation: (_translation2 = {
        learn: "مرحبا بترجمة الخاصة الرياكت",
        location: "الموقع",
        WhatsApp: "واتساب",
        Call: "اتصل",
        Vat: "جميع الأسعار شاملة ضريبة القيمة المضافة",
        Powerby: "الدعم التقني من زمتجر"
      }, _defineProperty(_translation2, "learn", "المزيد"), _defineProperty(_translation2, "add", "اضافة"), _defineProperty(_translation2, "basket", "عرض سلة التسوق"), _defineProperty(_translation2, "cartbasket", "سلة التسوق"), _defineProperty(_translation2, "Instructions", "تعليمات"), _defineProperty(_translation2, "Subtotal", "المجموع"), _defineProperty(_translation2, "charges", "رسوم التوصيل"), _defineProperty(_translation2, "Total", "المجموع الاجمالى"), _defineProperty(_translation2, "cartVat", "شامل ضريبة القيمة المضافة"), _defineProperty(_translation2, "Checkout", "تنفيذ الطلب"), _translation2)
    }
  }
});

document.documentElement.lang = _i18next["default"].language;

if (_i18next["default"].language == "en") {
  document.documentElement.dir = "ltr";
} else {
  document.documentElement.dir = "rtl";
}