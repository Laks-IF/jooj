import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useIsAuth, useHaveTeam } from "../hooks";

// ============================================================
// ROUTE ALLOWED ONLY FOR AUTHENTICATED USERS WITHOUT A TEAM
// ============================================================
const ProtectedRoute = ({ component: Component, ...rest }) => {
  const isAuth = useIsAuth();
  const haveTeam = useHaveTeam();

  return (
    <Route
      {...rest}
      render={(props) =>
        isAuth && !haveTeam ? (
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
};

export default ProtectedRoute;
