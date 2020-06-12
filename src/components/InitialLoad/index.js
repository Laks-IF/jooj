import React from "react";

import Logo from "../../assets/browser-logo-192.png";

import Particles from "../ParticlesBackground";

import * as S from "./styles";

export default function InitialLoad() {
  return (
    <S.LoadWrapper aria-label="Aguarde, estamos carregando...">
      <Particles />
      <S.LoadLogo src={Logo} alt="Flip Logo, imagem do aplicativo" />
    </S.LoadWrapper>
  );
}
