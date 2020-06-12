import { useContext, createContext } from "react";
import { authDefault } from "../reducers/auth";
import { loaderDefault } from "../reducers/loader";

export const defaultStore = {
  store: { ...authDefault, ...loaderDefault },
  dispatch: () => {},
};

export const StoreContext = createContext(defaultStore);

export default function useStore() {
  return useContext(StoreContext);
}
