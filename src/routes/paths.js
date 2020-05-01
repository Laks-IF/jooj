import { Route } from "react-router-dom";

import Dashboard from "../pages/Dashboard";
import Auth from "../pages/Auth";
import Select from "../pages/Select";
import Action from "../pages/Action";

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
      path: "/select",
      component: Select,
      exact: true,
    },
    RouteType: ProtectedRoute,
  },
  {
    props: {
      path: "/select/:action",
      component: Action,
      exact: true,
    },
    RouteType: ProtectedRoute,
  },
];

export default all_routes;
