import React from 'react'
import {Route, Switch} from 'react-router-dom'

import Layout from './pages/layout'
import IndexPage from './pages/index-page'
import About from './pages/about'
import Resume from './pages/resume'
import Skyforge from './pages/skyforge'
import NoMatch from './pages/no-match'

export default (
    <Switch>
        <Layout>
            <Route path="/" exact component={IndexPage}/>
            <Route path='/about' exact component={About}/>
            <Route path='/resume' exact component={Resume}/>
            <Route path='/projects' exact component={Skyforge}/>
            <Route component={NoMatch}/>
        </Layout>
    </Switch>
)