import { Route } from "react-router-dom";

import Dashboard from "../pages/Dashboard";
import Auth from "../pages/Auth";

import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";
import ProtectedRoute from "./ProtectedRoute";

const all_routes = [
  {
    props: {
      path: "/auth",
      component: Auth,
      exact: true,
    },
    RouteType: PublicRoute,
  },
  {
    props: {
      path: "/",
      component: Dashboard,
      exact: true,
    },
    RouteType: PrivateRoute,
  },
  {
    props: {
      path: "/about",
      component: Auth,
      exact: true,
    },
    RouteType: Route,
  },
  {
    props: {
      path: "/create",
      component: Auth,
      exact: true,
    },
    RouteType: ProtectedRoute,
  },
];

export default all_routes;
