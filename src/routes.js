// import React from 'react'
// import {BrowserRouter, Route, Switch} from 'react-router-dom'
//
// import {ConnectedRouter, routerReducer, routerMiddleware, push} from 'react-router-redux'
//
// import Layout from './pages/layout'
// import IndexPage from './pages/index-page'
// import About from './pages/about'
// import Resume from './pages/resume'
// import Skyforge from './pages/skyforge'
// import NoMatch from './pages/no-match'
//
//
// const supportsHistory = 'pushState' in window.history;
//
// export default (
//     <BrowserRouter forceRefresh={!supportsHistory}>
//         <ConnectedRouter history={history}>
//             <Switch>
//                 <Route path="/" component={Layout}>
//                     <Route exact path="/" component={IndexPage}/>
//                     <Route path='/about' component={About}/>
//                     <Route path='/resume' component={Resume}/>
//                     <Route path='/projects' component={Skyforge}/>
//                     <Route component={NoMatch}/>
//                 </Route>
//             </Switch>
//         </ConnectedRouter>
//     </BrowserRouter>
// )