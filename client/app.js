import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import ReduxIntlProvider from 'client/components/reduxIntlProvider/reduxIntlProvider';

import reducers from 'client/reducers';
import routes from 'client/routes';

const store = createStore(reducers, applyMiddleware());

// import * as OfflinePluginRuntime from 'offline-plugin/runtime';
// OfflinePluginRuntime.install();

render(
  <Provider store={store}>
    <ReduxIntlProvider>
      <BrowserRouter>
        {routes}
      </BrowserRouter>
    </ReduxIntlProvider>
  </Provider>,
  document.getElementById('app'),
);

window.store = store;
