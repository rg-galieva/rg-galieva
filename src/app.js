import React from 'react';
import {render} from 'react-dom';

import {createStore, combineReducers, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'


import {BrowserRouter, Route, Switch} from 'react-router-dom'

import {ConnectedRouter, routerReducer, routerMiddleware, push} from 'react-router-redux'

import reducers from './reducers';

import Layout from './pages/layout'
import IndexPage from './pages/index-page'
import About from './pages/about'
import Resume from './pages/resume'
import Skyforge from './pages/skyforge'
import NoMatch from './pages/no-match'


import history from './history'

const middleware = routerMiddleware(history);

const store = createStore(
    combineReducers({
        ...reducers,
        router: routerReducer
    }),
    applyMiddleware(middleware)
)

render(
    <BrowserRouter>
        <Layout>
            <Switch>
                <Route exact path="/" component={IndexPage}/>
                <Route path='/about' component={About}/>
                <Route path='/resume' component={Resume}/>
                <Route path='/projects' component={Skyforge}/>
                <Route component={NoMatch}/>
            </Switch>
        </Layout>
    </BrowserRouter>,
    document.getElementById('app')
);