import React from 'react';

import { Navigation, Route } from 'react-tiger-transition';
import { ConnectedRouter } from 'connected-react-router';

import Home from '@/pages/Home';
import About from '@/pages/About';
import Header from '@/components/Header';

import history from './history';
import './animations';

const Routes = () => (
  <ConnectedRouter history={history}>
    <Header />
    <>
      <Navigation>
        <Route exact path="/" screen>
          <Home />
        </Route>
        <Route exact path="/about" screen>
          <About />
        </Route>
      </Navigation>
    </>
  </ConnectedRouter>
);

export default Routes;
