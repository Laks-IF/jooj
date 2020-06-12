import React from "react";
import { StoreContext } from "./hooks/useStore";

const returnPropsAsDefault = (_, props) => props;

export default function Connect(mapStateToProps = returnPropsAsDefault) {
  function ConnectComponent(Component) {
    function WrapConnect(props) {
      return (
        <StoreContext.Consumer>
          {({ dispatch, store }) => {
            const storeProps = mapStateToProps(store, props);
            return <Component {...storeProps} dispatch={dispatch} />;
          }}
        </StoreContext.Consumer>
      );
    }

    return WrapConnect;
  }

  return ConnectComponent;
}
