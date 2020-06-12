import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useIsAuth, useHaveTeam } from "../hooks";

// ============================================================
// ROUTE ALLOWED ONLY FOR AUTHENTICATED USERS WITHOUT A TEAM
// ============================================================
export default function ProtectedRoute({ component: Component, ...rest }) {
  const isAuth = useIsAuth();
  const haveTeam = useHaveTeam();

  let routeToRedirect;

  if (isAuth && haveTeam) routeToRedirect = "/";
  if (!isAuth && !haveTeam) routeToRedirect = "/auth";

  return (
    <Route
      {...rest}
      render={(props) =>
        isAuth && !haveTeam ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: routeToRedirect,
              state: { from: props.location },
            }}
          />
        )
      }
    />
  );
}
