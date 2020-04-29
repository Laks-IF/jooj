import { useContext, createContext } from "react";
import { authDefault } from "../reducers/auth";

export const defaultStore = {
  store: { ...authDefault },
  dispatch: () => {},
};

export const StoreContext = createContext(defaultStore);

export default () => {
  return useContext(StoreContext);
};
