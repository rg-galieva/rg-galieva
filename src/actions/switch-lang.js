import {SWITCH_LANG} from '../constants'

const switchLang = (lang) => {
    console.log("---AC switchLang lang", lang);
    return {
        type: SWITCH_LANG,
        lang: lang
    }
};

export default switchLang