import { combineReducers } from 'redux';
import switchLang from './switchLang';
import switchVersion from './switchVersion';
import projects from './projects';

export default combineReducers({
  switchLang,
  projects,
  switchVersion,
});
