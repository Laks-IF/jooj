import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Dashboard from "../pages/Dashboard";
import Auth from "../pages/Auth";

import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";

export default () => (
  <Router>
    <Switch>
      <PublicRoute path="/auth" exact component={Auth} />
      <PrivateRoute path="/" exact component={Dashboard} />
      <Route path="/about" exact component={() => <>About Component</>} />
    </Switch>
  </Router>
);
