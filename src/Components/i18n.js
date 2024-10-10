import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Translations from './Translations';

i18n
  .use(initReactI18next)
  .init({
    resources: Translations,
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
