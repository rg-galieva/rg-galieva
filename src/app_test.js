// import React from 'react';
// import {render} from 'react-dom';
//
// import {createStore, combineReducers, applyMiddleware} from 'redux'
// import {Provider} from 'react-redux'
//
// import createHistory from 'history/createBrowserHistory'
// import {BrowserRouter, Route, Switch} from 'react-router-dom'
//
// import {ConnectedRouter, routerReducer, routerMiddleware, push} from 'react-router-redux'
//
// import reducers from './reducers';
//
// import Layout from './pages/layout'
// import IndexPage from './pages/index-page'
// import About from './pages/about'
// import Resume from './pages/resume'
// import Skyforge from './pages/skyforge'
// import NoMatch from './pages/no-match'
//
//
// const history = createHistory();
// const middleware = routerMiddleware(history);
//
// const store = createStore(
//     combineReducers({
//         ...reducers,
//         router: routerReducer
//     }),
//     applyMiddleware(middleware)
// )
//
// render(
//     <Provider store={store}>
//         <ConnectedRouter history={history}>
//             {/*<Switch>*/}
//             {/*<Route path="/" component={Layout}>*/}
//             <Route exact path="/" component={IndexPage}/>
//             <Route path='/about' component={About}/>
//             <Route path='/resume' component={Resume}/>
//             <Route path='/projects' component={Skyforge}/>
//             <Route component={NoMatch}/>
//             {/*</Route>*/}
//             {/*</Switch>*/}
//         </ConnectedRouter>
//     </Provider>,
//     document.getElementById('app')
// );