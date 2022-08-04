import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpApi from "i18next-http-backend";
import translationEN from "../assets/locales/en/translation.json"
import translationRu from "../assets/locales/rus/translation.json";


const resources = {
    en: { translation: translationEN },
    rus: { translation: translationRu }
};

i18n
    .use(initReactI18next)
    .use(HttpApi)
    .use(LanguageDetector)
    .init({
        resources,
        lng: "en",
        fallbackLng: "en",
        contextSeparator: true,
        detection: {
            order: ['cookie', 'htmlTag', 'localStorage', 'subdomain'],
            caches: ['cookie'],
        },

    });

export default i18n;