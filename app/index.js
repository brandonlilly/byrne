import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Route, Router, browserHistory, hashHistory, IndexRoute } from 'react-router';
import { App, Home, NoMatch, Reading } from './components';
import { isProduction } from './utils';
import { createLog } from './log';

if (isProduction()) {
  console.log = createLog();
}

ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>
      <Route path="reading" component={Reading}/>
      <Route path="*" component={NoMatch}/>
    </Route>
  </Router>
), document.getElementById('app'));
