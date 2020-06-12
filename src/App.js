import React from "react";

import { ToastContainer } from "react-toastify";

import Provider from "./store";

import GlobalStyles from "./styles";

import Container from "./container";

export default function App() {
  return (
    <Provider>
      <GlobalStyles />
      <Container />
      <ToastContainer
        autoClose={8000}
        closeButton={false}
        pauseOnHover
        position="bottom-right"
      />
    </Provider>
  );
}
