const defaultLocale = 'en';
const localeWithRegionCode = (navigator.languages && navigator.languages[0]) ||
    navigator.language ||
    navigator.userLanguage;

let locale = localeWithRegionCode.toLowerCase().split(/[_-]+/)[0] || defaultLocale;
if (locale !== 'ru') locale = defaultLocale;

export const userLocale = locale;