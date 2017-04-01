import {SWITCH_LANG} from '../constants'

export default switchLang = (lang) => {
    return {
        type: SWITCH_LANG,
        lang
    }
}