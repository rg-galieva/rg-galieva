import {SWITCH_LANG} from '../constants'
import {userLocale} from '../utils/user-locale';

const initialState = {
    lang: userLocale
}

export const switchLang = (state = initialState, action) => {
    switch (action.type) {
        case SWITCH_LANG:
            return {
                lang: action.lang
            }

        default:
            return state;
    }
}