const defaultLocale = 'en';
const localeWithRegionCode = (navigator.languages && navigator.languages[0])
    || navigator.language;

const locale = localeWithRegionCode.toLowerCase().split(/[_-]+/)[0] || defaultLocale;

export default locale !== 'ru' ? defaultLocale : locale;
