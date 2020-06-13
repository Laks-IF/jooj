import { useReducer } from "react";
import authReducer, { authDefault } from "./../reducers/auth";
import loaderReducer, { loaderDefault } from "./../reducers/loader";
import enterTeamReducer, { enterTeamDefault } from "./../reducers/enterTeam";

export default function useCombinedReducers() {
  const [authStore, auth] = useReducer(authReducer, authDefault);
  const [loaderStore, loader] = useReducer(loaderReducer, loaderDefault);
  const [enterTeamStore, enterTeam] = useReducer(
    enterTeamReducer,
    enterTeamDefault
  );

  return {
    store: { ...authStore, ...loaderStore, ...enterTeamStore },
    reducers: [auth, loader, enterTeam],
  };
}
