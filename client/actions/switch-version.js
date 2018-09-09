import { SWICTH_VERSION } from '../constants';

const switchVersion = isMobile => ({
  type: SWICTH_VERSION,
  isMobile,
});

export default switchVersion;
