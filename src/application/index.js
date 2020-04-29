import React, { useEffect } from "react";

import Routes from "../routes";

import { setUserAction } from "../store/reducers/auth";
import Connect from "../store/connect";

import firebase_services from "../services/firebase";

const Application = ({ auth, dispatch }) => {
  useEffect(() => {
    const user = firebase_services.getUser();

    dispatch(
      setUserAction({
        isLogged: !!user,
        user: user || {},
      })
    );
  }, []);

  if (auth.isLogged === null) return <h1>Carregando usuário</h1>;

  return <Routes />;
};

const mapStateToProps = ({ auth }, props) => {
  return {
    auth,
    ...props,
  };
};

export default Connect(mapStateToProps)(Application);
