import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";

import all_routes from "./paths";

export default function Rotues() {
  return (
    <Router basename="/flip">
      <Switch>
        {all_routes.map(({ RouteType, props }) => (
          <RouteType
            key={`ROUTE_PATH_${props.path.replace(/\//g, "")}`}
            {...props}
          />
        ))}
      </Switch>
    </Router>
  );
}
