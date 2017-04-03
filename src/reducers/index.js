import { combineReducers } from 'redux';
import {routerReducer} from 'react-router-redux'
import { switchLang } from './switch-lang'

export default combineReducers({
    switchLang,
    router: routerReducer
});