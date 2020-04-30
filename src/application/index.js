import React, { useEffect } from "react";

import Routes from "../routes";

import { setUserAction } from "../store/reducers/auth";
import Connect from "../store/connect";

import { useIsAuth } from "../hooks/index";

import firebase_service from "../services/firebase";

const Application = ({ dispatch }) => {
  const isAuth = useIsAuth();

  useEffect(() => {
    const getUser = async (currentUser) => {
      let user = currentUser || (await firebase_service.getUser());

      if (user) {
        let { uid, displayName: name, photoURL, email } = user;
        user = { uid, name, photoURL, email };

        user = await firebase_service.getUserData(
          firebase_service.available_resources.USER,
          user,
          user.uid
        );
      }
      console.log(user);

      dispatch(
        setUserAction({
          isAuth: !!user,
          user: user || {},
        })
      );
    };

    firebase_service.onAuthStateChange(getUser);
    getUser();
  }, []);

  if (isAuth === null) return <h1>Carregando usuário</h1>;

  return <Routes />;
};

export default Connect()(Application);
