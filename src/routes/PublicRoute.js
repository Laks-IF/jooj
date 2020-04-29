import React from "react";
import { Route, Redirect } from "react-router-dom";

const isAuth = false;

export default ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      !isAuth ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: "/",
            state: { from: props.location },
          }}
        />
      )
    }
  />
);
