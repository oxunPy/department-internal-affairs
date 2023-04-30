// import i18next from "i18next";
// import { initReactI18next } from "react-i18next";
// import HttpApi from "i18next-http-backend";
// import LanguageDetector from "i18next-browser-languagedetector";
// import translationsEng from "./eng/translation.json";
// import translationsRu from "./ru/translation.json";
// import translationsUz from "./uz/translation.json";
// import { useSelector } from "react-redux";
// import { selectLang } from "../features/lang/langSlice";
// let lang = localStorage.getItem("lang");
// i18next
//   .use(HttpApi)
//   .use(LanguageDetector)
//   .use(initReactI18next)
//   .init({
//     resources: {
//       en: { translation: translationsEng },
//       ru: { translation: translationsRu },
//       uz: { translation: translationsUz },
//     },
//     lng: lang,
//     fallbackLng: "ru",
//     interpolation: { escapeValue: false },
//     supportedLngs: ["en", "ru", "uz"],
//     debug: false,
//     // Options for language detector
//     detection: {
//       order: ["cookie", "path", "htmlTag"],
//       caches: ["cookie"],
//     },
//     // react: { useSuspense: false },
//     // backend: {
//     //   loadPath: "/assets/locales/{{lng}}/translation.json",
//     // },
//   });