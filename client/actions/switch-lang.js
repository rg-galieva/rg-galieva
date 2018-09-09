import { SWITCH_LANG } from '../constants';

const switchLang = lang => ({
  type: SWITCH_LANG,
  lang,
});

export default switchLang;
