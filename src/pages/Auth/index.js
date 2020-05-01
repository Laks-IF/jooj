import React from "react";

// ====================
// ASSETS IMPORTS
// ====================
import Logo from "../../assets/browser-logo-512.png";

// ========================================
// COMPONENTES IMPORTS
// ========================================
import AuthButton from "../../components/AuthButton";
import Particles from "../../components/ParticlesBackground";
import Loader from "../../components/Loader";

// ========================================
// UTILS IMPORTS
// ========================================
import { firstLetterUpper } from "../../utils";

import methods from "./methods";
// ========================================
// ALL STYLES IMPORTED AS S OBJECT
// ========================================
import * as S from "./styles";

const AuthPage = () => (
  <S.AuthWrapper>
    <Particles />
    <Loader />
    <S.AuthLogo
      arial-label="Flip Logotipo, é esta imagem que representa o aplicativo"
      src={Logo}
      alt="Flip Logotipo, imagem do aplicativo"
    />
    <S.AuthTitle>
      Mostre sua carta... hã, digo, faça login para continuar...
    </S.AuthTitle>
    <S.AuthDescription>
      Suas informações são utilizadas para e somente identificação, não vamos e
      nem podemos divulgar nada em seu nome.
    </S.AuthDescription>
    <S.AuthButtonsWrapper>
      {Object.keys(methods).map((key) => (
        <AuthButton
          key={`auth__button__${key}`}
          method={{ ...methods[key], name: firstLetterUpper(key) }}
        />
      ))}
    </S.AuthButtonsWrapper>
  </S.AuthWrapper>
);

export default AuthPage;
