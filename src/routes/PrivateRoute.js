import React from "react";
import { Route, Redirect } from "react-router-dom";

const isAuth = false;

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      isAuth ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: "/auth",
            state: { from: props.location },
          }}
        />
      )
    }
  />
);

export default PrivateRoute;
