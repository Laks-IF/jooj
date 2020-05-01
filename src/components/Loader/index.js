import React from "react";

import Connect from "../../store/connect";

import * as S from "./styles";

const Loader = ({ loader }) => (
  <S.LoaderWrapper
    className={loader.isLoading ? "loader__loading" : "loader__static"}
  />
);

const mapStateToProps = ({ loader }, props) => ({
  loader,
  ...props,
});

export default Connect(mapStateToProps)(Loader);
