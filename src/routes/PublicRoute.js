import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useIsAuth, useHaveTeam } from "../hooks";

// ==============================================
// ROUTE ALLOWED ONLY FOR UNAUTHENTICATED USERS
// ==============================================
export default function PublicRoute({ component: Component, ...rest }) {
  const isAuth = useIsAuth();
  const haveTeam = useHaveTeam();

  let routeToRedirect;

  if (haveTeam) routeToRedirect = "/";
  else routeToRedirect = "/select";

  return (
    <Route
      {...rest}
      render={(props) =>
        !isAuth ? (
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
