import React, { useEffect, useContext } from "react";

import Routes from "../routes";

import firebase_services from "../services/firebase";

export default () => {
  useEffect(() => {
    firebase_services.auth();
  });
  return <Routes />;
};
