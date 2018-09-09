import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Layout from 'client/pages/layout/layout';
import IndexPage from 'client/pages/mainPage/mainPage';
import About from 'client/pages/about/about';
import Resume from 'client/pages/resume/resume';
import ProjectList from 'client/pages/prjList/prjList';
import Experiments from 'client/pages/experiments/experiments';
import Project from 'client/components/prj/prj';
import Contact from 'client/pages/contact/contact';
import NoMatch from 'client/pages/noMatch/noMatch';

export default (
  <Route render={({ location }) => (
    <Layout>
      <Switch location={location} key={location.pathname}>
        <Route path="/" component={IndexPage} exact />
        <Route path="/about" component={About} />
        <Route path="/resume" component={Resume} />
        <Route path="/projects/:id?" component={ProjectList} />
        <Route path="/project/:id" component={Project} />
        <Route path="/experiments" component={Experiments} />
        <Route path="/contact" component={Contact} />
        <Route component={NoMatch} />
      </Switch>
    </Layout>
  )}
  />
);
