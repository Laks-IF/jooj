import React, { useEffect } from "react";

import Routes from "../routes";

import { setUserAction } from "../store/reducers/auth";
import Connect from "../store/connect";

import { useIsAuth } from "../hooks/index";

import firebase_services from "../services/firebase";

const Application = ({ dispatch }) => {
  const isAuth = useIsAuth();

  useEffect(() => {
    const getUser = async () => {
      const user = await firebase_services.getUser();

      console.log(!!user);
      console.log(user);

      dispatch(
        setUserAction({
          isAuth: !!user,
          user: user || {},
        })
      );
    };
    getUser();
  }, []);

  if (isAuth === null) return <h1>Carregando usuário</h1>;

  return <Routes />;
};

export default Connect()(Application);
