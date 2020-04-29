import React from "react";

import Ripple from "../../components/Ripple";

import * as S from "./styles";

export default () => (
  <S.AuthWrapper>
    <S.AuthButton className="font-normal">
      Login com Google <Ripple color="var(--ripple)" duration={1000} />
    </S.AuthButton>
    <S.AuthButton className="font-normal">Login com Facebook</S.AuthButton>
    <S.AuthButton className="font-normal">Login com Github</S.AuthButton>
    <S.AuthButton className="font-normal">Login com Twitter</S.AuthButton>
    <S.AuthButton className="font-normal">Login com Microsoft</S.AuthButton>
    <S.AuthButton className="font-normal">Login com telefone</S.AuthButton>
  </S.AuthWrapper>
);
