import React from 'react';
import {render} from 'react-dom';

import {IntlProvider} from 'react-intl';
import {getIntl} from './utils/intl';

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

render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <IntlProvider {...getIntl}>
                {routes}
            </IntlProvider>
        </ConnectedRouter>
    </Provider>,
    document.getElementById('app')
);