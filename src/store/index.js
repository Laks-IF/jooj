import React from "react";
import useCombinedReducers from "./hooks/useCombinedReducers";
import { StoreContext } from "./hooks/useStore";
import middleware from "./middleware";

export default function Provider({ children }) {
  const { store, reducers } = useCombinedReducers();

  function triggerDispatchs(action) {
    for (let i = 0; i < reducers.length; i++) {
      reducers[i](action);
    }
  }

  function withMiddleware(action) {
    middleware(action)(triggerDispatchs);
  }

  return (
    <StoreContext.Provider
      value={{
        store,
        dispatch: withMiddleware,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
}
