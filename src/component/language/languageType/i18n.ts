import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import {getLocales} from 'react-native-localize';
import en from './en';
import hi from './hi';
import bn from './bn';
import ta from './ta';
i18n.use(initReactI18next).init({
  lng: getLocales()[0].languageCode,
  fallbackLng: 'en',
  resources: {
    en: {
      translation: en,
    },
    hi: {
      translation: hi,
    },
    bn: {
      translation: bn,
    },
    ta: {
      translation: ta,
    },
  },
});
export default i18n;
