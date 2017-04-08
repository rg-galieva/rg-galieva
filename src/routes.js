import React from "react"
import {Route, Switch} from "react-router-dom"

import Layout from "./pages/layout"
import IndexPage from "./pages/index-page"
import About from "./pages/about"
import Resume from "./pages/resume"
import ProjectList from "./pages/prj-list"
import Experiments from './pages/experiments'
import Project from './components/prj'
import Contact from './pages/contact'
import NoMatch from "./pages/no-match"

export default (
    <Route render={({location}) => (
        <Layout>
            <Switch location={location} key={location.pathname}>
                <Route path="/" component={IndexPage} exact/>
                <Route path="/about" component={About}/>
                <Route path="/resume" component={Resume}/>
                <Route path="/projects" component={ProjectList} exact/>
                <Route path="/projects/:id" component={Project}/>
                <Route path="/experiments" component={Experiments}/>
                <Route path="/contact" component={Contact}/>
                <Route component={NoMatch}/>
            </Switch>
        </Layout>
    )}/>
)