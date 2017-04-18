import React from 'react';
import {render} from 'react-dom';
import ReduxIntlProvider from './components/redux-intl-provider'
import {createStore, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import {ConnectedRouter, routerMiddleware} from 'react-router-redux'

import reducers from './reducers';
import history from './history'
import routes from './routes'

const middleware = routerMiddleware(history);
const store = createStore(reducers, applyMiddleware(middleware));

// import * as OfflinePluginRuntime from 'offline-plugin/runtime';
// OfflinePluginRuntime.install();

render(
    <Provider store={store}>
        <ReduxIntlProvider>
            <ConnectedRouter history={history}>
                {routes}
            </ConnectedRouter>
        </ReduxIntlProvider>
    </Provider>,
    document.getElementById('app')
);

window.store = store;