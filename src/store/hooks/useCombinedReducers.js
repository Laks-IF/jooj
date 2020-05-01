import { useReducer } from "react";
import authReducer, { authDefault } from "./../reducers/auth";
import loaderReducer, { loaderDefault } from "./../reducers/loader";

const useCombinedReducers = () => {
  const [authStore, auth] = useReducer(authReducer, authDefault);
  const [loaderStore, loader] = useReducer(loaderReducer, loaderDefault);

  return {
    store: { ...authStore, ...loaderStore },
    reducers: [auth, loader],
  };
};

export default useCombinedReducers;
