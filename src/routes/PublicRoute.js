import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useIsAuth, useHaveTeam } from "../hooks";

// ==============================================
// ROUTE ALLOWED ONLY FOR UNAUTHENTICATED USERS
// ==============================================
const PublicRoute = ({ component: Component, ...rest }) => {
  const isAuth = useIsAuth();
  const haveTeam = useHaveTeam();

  let routeToRedirect;

  if (haveTeam) routeToRedirect = "/";
  else routeToRedirect = "/create";

  console.log(isAuth);
  console.log(haveTeam);
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
};

export default PublicRoute;
