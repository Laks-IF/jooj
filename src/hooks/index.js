import useStore from "../store/hooks/useStore";

function useHaveTeam() {
  const {
    store: { auth },
  } = useStore();

  return !!auth.user.teamId;
}

function useIsAuth() {
  const {
    store: { auth },
  } = useStore();

  return auth.isAuth;
}

function useUserData() {
  const {
    store: { auth },
  } = useStore();

  return auth.user;
}

export { useHaveTeam, useIsAuth, useUserData };
