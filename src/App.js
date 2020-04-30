import React from "react";

import { ToastContainer } from "react-toastify";

import Provider from "./store";

import GlobalStyle from "./styles";

import Application from "./application";

const App = () => (
  <Provider>
    <GlobalStyle />
    <Application />
    <ToastContainer />
  </Provider>
);

export default App;
