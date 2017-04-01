import {addLocaleData} from 'react-intl';
import en from 'react-intl/locale-data/en';
import ru from 'react-intl/locale-data/ru';
import localeDataEn from '../assets/i18n/en.json';
import localeDataRu from '../assets/i18n/ru.json';

const localeWithRegionCode = (navigator.languages && navigator.languages[0]) ||
    navigator.language ||
    navigator.userLanguage;

const locale = localeWithRegionCode.toLowerCase().split(/[_-]+/)[0];
const defaultLocale = 'en';

const messages = {
    en: localeDataEn,
    ru: localeDataRu,
};

addLocaleData([...en, ...ru]);

export const getIntl = {
    locale: locale,
    messages: messages[locale],
    defaultLocale: defaultLocale
};

// export function getLocale(url) {
//     // Get the "en" from the url "http://domain.tld/en"
//     const firstURIlevel = url.replace(/^\//, "").split("/")[0]
//
//     // If there is not the locale in the url, we take the default locale
//     return firstURIlevel && locales.indexOf(firstURIlevel) > -1
//         ? firstURIlevel
//         : defaultLocale
// }