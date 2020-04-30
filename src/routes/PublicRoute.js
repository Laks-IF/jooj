import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useIsAuth } from "../hooks";

// ==============================================
// ROUTE ALLOWED ONLY FOR UNAUTHENTICATED USERS
// ==============================================
const PublicRoute = ({ component: Component, ...rest }) => {
  const isAuth = useIsAuth();
  return (
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
};

export default PublicRoute;
