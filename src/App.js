import React from "react";

import { ToastContainer } from "react-toastify";

import Provider from "./store";

import GlobalStyle from "./styles";

import Application from "./application";

const App = () => (
  <Provider>
    <GlobalStyle />
    <Application />
    <ToastContainer
      autoClose={8000}
      closeButton={false}
      pauseOnHover
      position="bottom-right"
    />
  </Provider>
);

export default App;
