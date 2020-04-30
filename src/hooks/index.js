import useStore from "../store/hooks/useStore";

const useHaveTeam = () => {
  const {
    store: { auth },
  } = useStore();

  return !!auth.user.teamId;
};

const useIsAuth = () => {
  const {
    store: { auth },
  } = useStore();

  return auth.isAuth;
};

export { useHaveTeam, useIsAuth };
