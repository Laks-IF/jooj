import { useReducer } from "react";
import authReducer, { authDefault } from "./../reducers/auth";

const useCombinedReducers = () => {
  const [authStore, auth] = useReducer(authReducer, authDefault);

  return {
    store: { ...authStore },
    reducers: [auth],
  };
};

export default useCombinedReducers;
