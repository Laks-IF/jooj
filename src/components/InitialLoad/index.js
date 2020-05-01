import React from "react";

import Logo from "../../assets/browser-logo-192.png";

// ========================================
// COMPONENTES IMPORTS
// ========================================
import Particles from "../ParticlesBackground";

import * as S from "./styles";

const InitialLoad = () => {
  return (
    <S.LoadWrapper aria-label="Aguarde, estamos carregando...">
      <Particles />
      <S.LoadLogo src={Logo} alt="Flip Logo, imagem do aplicativo" />
    </S.LoadWrapper>
  );
};

export default InitialLoad;
