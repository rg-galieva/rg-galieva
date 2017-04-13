import { combineReducers } from 'redux';
import {routerReducer} from 'react-router-redux'
import switchLang from './switch-lang'
import switchVersion from './switch-version'
import projects from './projects'

export default combineReducers({
    switchLang,
    projects,
    switchVersion,
    router: routerReducer
});