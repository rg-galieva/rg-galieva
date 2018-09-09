import { SWITCH_LANG } from 'client/constants';
import userLocale from 'client/utils/userLocale';

const initialState = {
  lang: userLocale,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SWITCH_LANG:
      return {
        lang: action.lang,
      };

    default:
      return state;
  }
};
