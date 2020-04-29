import React from "react";

import Provider from "./store";

import GlobalStyle from "./styles";

import Application from "./application";

const App = () => (
  <Provider>
    <GlobalStyle />
    <Application />
  </Provider>
);

export default App;
