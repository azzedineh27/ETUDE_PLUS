import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import translationFR from './src/locales/fr/translationFR.json';
import translationEN from './src/locales/en/translationEN.json';
import translationAE from './src/locales/ae/translationAE.json';
import translationTR from './src/locales/tr/translationTR.json';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      fr: { translation: translationFR },
      en: { translation: translationEN },
      ae: { translation: translationAE },
      tr: { translation: translationTR },
    },
    fallbackLng: 'fr',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;