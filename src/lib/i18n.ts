import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enLang from "../constants/texts/en.json"
import frLang from "../constants/texts/fr.json"
import mgLang from "../constants/texts/mg.json"

const resources = {
  en: {
    translation: enLang,
  },
  fr: {
    translation: frLang,
  },
  mg: {
    translation: mgLang,
  },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'fr',
    lng: "fr",
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;