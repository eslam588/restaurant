import i18n from "i18next";
import {initReactI18next } from "react-i18next";
import  LanguageDetector from "i18next-browser-languagedetector"

i18n
  .use(initReactI18next) 
  .use(LanguageDetector)
  .init({
    fallbackLng: "en",
    resources: {
      en: {
        translation: {
          learn : "Welcome to React and react-i18next",
          location:"Location",
          WhatsApp:"WhatsApp",
          Call:"Call",
          Vat:"All prices are inclusive of VAT",
          Powerby:"Powered by ZMatjar",
          learn:"learn more",
          add:"Add",
          basket:"View basket",
          cartbasket:"YOUR BASKET",
          Instructions:"Instructions",
          Subtotal:"Subtotal",
          charges:"Delivery charges Free",
          Total :"Total",
          cartVat:"Inclusive of VAT",
          Checkout:"Checkout"
        }
      },
      ar: {
        translation: {
          learn : "مرحبا بترجمة الخاصة الرياكت",
          location:"الموقع",
          WhatsApp:"واتساب",
          Call:"اتصل",
          Vat:"جميع الأسعار شاملة ضريبة القيمة المضافة",
          Powerby:"الدعم التقني من زمتجر",
          learn:"المزيد",
          add:"اضافة",
          basket:"عرض سلة التسوق",
          cartbasket:"سلة التسوق",
          Instructions:"تعليمات",
          Subtotal :"المجموع",
          charges:"رسوم التوصيل",
          Total :"المجموع الاجمالى",
          cartVat:"شامل ضريبة القيمة المضافة",
          Checkout:"تنفيذ الطلب"
        }
      }
    }
  });


  document.documentElement.lang = i18n.language
  if(i18n.language=="en"){
    document.documentElement.dir="ltr"
  }
  else{
    document.documentElement.dir="rtl"
  }
