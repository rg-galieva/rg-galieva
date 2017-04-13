import {SWICTH_VERSION} from '../constants'
import isMobile from '../utils/useragent-check';

const initialState = {
    isMobile: isMobile
}

export default (state = initialState, action) => {
    switch (action.type) {
        case SWICTH_VERSION:
            return {
                isMobile: action.isMobile
            }

        default:
            return state;
    }
}