import React from 'react'
import {Route, Switch} from 'react-router-dom'

import Layout from './pages/layout'
import IndexPage from './pages/index-page'
import About from './pages/about'
import Resume from './pages/resume'
import Skyforge from './pages/skyforge'
import NoMatch from './pages/no-match'

export default (
    <Layout>
        <Switch>
            <Route exact path="/" component={IndexPage}/>
            <Route path='/about' component={About}/>
            <Route path='/resume' component={Resume}/>
            <Route path='/projects' component={Skyforge}/>
            <Route component={NoMatch}/>
        </Switch>
    </Layout>
)