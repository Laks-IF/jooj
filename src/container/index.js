import React, { useEffect } from "react";

import Routes from "../routes";

import { setUserAction } from "../store/reducers/auth";
import Connect from "../store/connect";

import { useIsAuth } from "../hooks";

import firebase_service from "../services/firebase";

import InitialLoad from "../components/InitialLoad";

function Container({ dispatch }) {
  const isAuth = useIsAuth();

  useEffect(() => {
    async function getUser(currentUser) {
      let user = currentUser || firebase_service.auth.getUser();

      if (user) {
        let { uid, displayName: name, photoURL, email } = user;
        user = { uid, name, photoURL, email };

        user = await firebase_service.firestore.getUser(user, user.uid);
      }

      dispatch(
        setUserAction({
          isAuth: !!user,
          user: user || {},
        })
      );
    }

    firebase_service.auth.onStateChange(getUser);
  }, []);

  if (isAuth === null) return <InitialLoad />;

  return <Routes />;
}

export default Connect()(Container);
