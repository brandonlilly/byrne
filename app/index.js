import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Route, Router, browserHistory, useRouterHistory, IndexRoute } from 'react-router';
import { createHashHistory } from 'history'
import { App, Home, NoMatch, Projects, Reading } from './components';
import { isProduction } from './utils';
import { createLog } from './log';

if (isProduction()) {
  console.log = createLog();
}

const history = useRouterHistory(createHashHistory)({ queryKey: false })

ReactDOM.render((
  <Router history={history}>
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>
      <Route path="reading" component={Reading}/>
      <Route path="projects" component={Projects}/>
      <Route path="*" component={NoMatch}/>
    </Route>
  </Router>
), document.getElementById('app'));
