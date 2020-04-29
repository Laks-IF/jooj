import React from "react";

import Provider from "./store";

import GlobalStyle from "./styles";

import Application from "./application";

// Nesses Fragments vai o provider
export default () => (
  <Provider>
    <GlobalStyle />
    <Application />
  </Provider>
);
