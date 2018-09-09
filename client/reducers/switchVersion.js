import { SWICTH_VERSION } from 'client/constants';
import isMobile from 'client/utils/useragentCheck';

const initialState = {
  isMobile,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SWICTH_VERSION:
      return {
        isMobile: action.isMobile,
      };

    default:
      return state;
  }
};
