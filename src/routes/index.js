import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { ConnectedRouter } from 'connected-react-router';

import Home from '@/pages/Home';
import About from '@/pages/About';

import history from './history';

const Routes = () => (
  <ConnectedRouter history={history}>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/about" exact component={About} />
    </Switch>
  </ConnectedRouter>
);

export default Routes;
