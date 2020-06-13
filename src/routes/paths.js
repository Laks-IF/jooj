import { Route } from "react-router-dom";

import Dashboard from "../pages/private/Dashboard";
import Auth from "../pages/public/Auth";
import Select from "../pages/protected/Select";
import EnterTeam from "../pages/protected/EnterTeam";
import Invite from "../pages/protected/EnterTeam/Invite";

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
      component: EnterTeam,
      exact: true,
    },
    RouteType: ProtectedRoute,
  },
  {
    props: {
      path: "/invite/:invite",
      component: Invite,
      exact: true,
    },
    RouteType: ProtectedRoute,
  },
];

export default all_routes;
