import {SWICTH_VERSION} from '../constants'

const switchVersion = (isMobile) => {
    return {
        type: SWICTH_VERSION,
        isMobile: isMobile
    }
};

export default switchVersion