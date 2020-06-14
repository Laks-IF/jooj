import React from "react";

import * as S from "./styles";

export default function SpinnerLoader() {
  return (
    <S.Loader>
      <div className="box1"></div>
      <div className="box2"></div>
      <div className="box3"></div>
    </S.Loader>
  );
}
