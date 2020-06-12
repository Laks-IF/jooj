import { useReducer } from "react";
import authReducer, { authDefault } from "./../reducers/auth";
import loaderReducer, { loaderDefault } from "./../reducers/loader";

export default function useCombinedReducers() {
  const [authStore, auth] = useReducer(authReducer, authDefault);
  const [loaderStore, loader] = useReducer(loaderReducer, loaderDefault);

  return {
    store: { ...authStore, ...loaderStore },
    reducers: [auth, loader],
  };
}
