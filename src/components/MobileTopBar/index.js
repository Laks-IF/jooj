import React from "react";

import { FaArrowLeft } from "react-icons/fa";

import * as S from "./styles";

export default function MobileTopBar({ ...props }) {
  return (
    <S.TopBarWrapper {...props}>
      <S.TopBarContainer>
        <FaArrowLeft />
      </S.TopBarContainer>
    </S.TopBarWrapper>
  );
}
