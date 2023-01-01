import i18n from "i18next";
import {initReactI18next } from "react-i18next";
import  LanguageDetector from "i18next-browser-languagedetector"

i18n
  .use(initReactI18next) 
  .use(LanguageDetector)
  .init({
    fallbackLng: "de",
    resources: {
      en: {
        translation: {
          learn : "Welcome to React and react-i18next",
          location:"Location",
          WhatsApp:"WhatsApp",
          Call:"Call"
        }
      },
      de: {
        translation: {
          learn : "مرحبا بترجمة الخاصة الرياكت",
          location:"الموقع",
          WhatsApp:"واتساب",
          Call:"اتصل"
        }
      }
    }
  });
