import { useEffect, useState } from "react";
import useStore from "../store/hooks/useStore";

const useHaveTeam = () => {
  const [userHaveTeam, setUserHaveTeam] = useState(null);

  const {
    store: {
      auth: { user },
    },
  } = useStore();

  useEffect(() => setUserHaveTeam(!!user.teamId), [user.teamId]);

  return !!userHaveTeam;
};

const useIsAuth = () => {
  const [userIsAuth, setUserIsAuth] = useState(null);

  const {
    store: {
      auth: { user },
    },
  } = useStore();

  useEffect(() => setUserIsAuth(!!user.isAuth), [user.isAuth]);

  return !!userIsAuth;
};

export { useHaveTeam, useIsAuth };
