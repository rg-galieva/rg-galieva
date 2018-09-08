import {SWITCH_LANG} from '../constants'

const switchLang = (lang) => {
    return {
        type: SWITCH_LANG,
        lang: lang
    }
};

export default switchLang