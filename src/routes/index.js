import React from 'react';

import { Navigation, Route } from 'react-tiger-transition';
import { ConnectedRouter } from 'connected-react-router';

import Home from '@/pages/Home';
import About from '@/pages/About';

import Nav from '@/components/Nav';

import history from './history';
import './registerTransitions';

const Routes = () => (
  <ConnectedRouter history={history}>
    <Navigation>
      <Route exact path="/" screen>
        <Home />
      </Route>
      <Route exact path="/about" screen>
        <About />
      </Route>
      <Route exact path={['/', '/about']} screen>
        <Nav />
      </Route>
    </Navigation>
  </ConnectedRouter>
);
export default Routes;
