import React from 'react';

import { Navigation, Route } from 'react-tiger-transition';
import { ConnectedRouter } from 'connected-react-router';

import { makeStyles } from '@material-ui/styles';

import Nav from '@/components/Nav';

import routePaths from '@/utils/routePaths';

import history from './history';
import './registerTransitions';

const useStyles = makeStyles({
  hide: {
    visibility: 'hidden',
    opacity: 0,
    zIndex: 0,
  },
});

const Routes = () => {
  const classes = useStyles();
  const hideInsteadOfUnmount = {
    mountOnEnter: true,
    unmountOnExit: false,
    onExited: (node) => node.classList.add(classes.hide),
    onEnter: (node) => node.classList.remove(classes.hide),
  };
  return (
    <ConnectedRouter history={history}>
      <Navigation>
        {routePaths.map(({ route, Component }) => (
          <Route key={`id-${route}`} exact path={route} screen>
            <Component />
          </Route>
        ))}
        <Route
          transitionProps={{
            style: {
              height: '48px',
            },
            ...hideInsteadOfUnmount,
          }}
          path="*"
        >
          <Nav />
        </Route>
      </Navigation>
    </ConnectedRouter>
  );
};
export default Routes;
