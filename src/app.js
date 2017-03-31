import React from 'react';
import {render} from 'react-dom';

import {IntlProvider, addLocaleData} from 'react-intl';
import en from 'react-intl/locale-data/en';
import ru from 'react-intl/locale-data/ru';

import {createStore, combineReducers, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import {ConnectedRouter, routerReducer, routerMiddleware, push} from 'react-router-redux'

import reducers from './reducers';
import history from './history'
import routes from './routes'

const middleware = routerMiddleware(history);

const store = createStore(
    combineReducers({
        ...reducers,
        router: routerReducer
    }),
    applyMiddleware(middleware)
)

addLocaleData([...en, ...ru]);

// Define user's language. Different browsers have the user locale defined
// on different fields on the `navigator` object, so we make sure to account
// for these different by checking all of them
const locale = (navigator.languages && navigator.languages[0]) ||
    navigator.language ||
    navigator.userLanguage;

// Split locales with a region code
const localeWithoutRegionCode = locale.toLowerCase().split(/[_-]+/)[0];


render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <IntlProvider locale={localeWithoutRegionCode}>
                {routes}
            </IntlProvider>
        </ConnectedRouter>
    </Provider>,
    document.getElementById('app')
);