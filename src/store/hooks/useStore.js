import { useContext, createContext } from "react";

import { authDefault } from "../reducers/auth";
import { loaderDefault } from "../reducers/loader";
import { enterTeamDefault } from "../reducers/enterTeam";

export const defaultStore = {
  store: { ...authDefault, ...loaderDefault, ...enterTeamDefault  },
  dispatch: () => {},
};

export const StoreContext = createContext(defaultStore);

export default function useStore() {
  return useContext(StoreContext);
}
