import React from "react";

// ====================
// ASSETS IMPORTS
// ====================
import Logo from "../../assets/browser-logo-512.png";

// ====================
// LIBRARY IMPORTS
// ====================
import { FaTwitter, FaGoogle, FaGithub, FaMicrosoft } from "react-icons/fa";

// ========================================
// COMPONENTES IMPORTS
// ========================================
import AuthButton from "../../components/AuthButton";

// ========================================
// UTILS IMPORTS
// ========================================
import { firstLetterUpper } from "../../utils";

// ========================================
// FIREBASE SERVICE
// ========================================
import firebase_service from "../../services/firebase";

// ========================================
// ALL STYLES IMPORTED AS S OBJECT
// ========================================
import * as S from "./styles";

// ========================================
// ALL AVAILABLE METHODS
// ========================================
const methods = {
  google: {
    provider: firebase_service.available_auth_methods.GOOGLE,
    color: "#DD4B39",
    icon: FaGoogle,
  },
  github: {
    provider: firebase_service.available_auth_methods.GITHUB,
    color: "#000000",
    icon: FaGithub,
  },
  twitter: {
    provider: firebase_service.available_auth_methods.TWITTER,
    color: "#1C9CEA",
    icon: FaTwitter,
  },
  microsoft: {
    provider: firebase_service.available_auth_methods.MICROSOFT,
    color: "#8646F2",
    icon: FaMicrosoft,
  },
};

const AuthPage = () => (
  <S.AuthWrapper>
    <S.AuthLogo src={Logo} alt="Flip Logotipo, imagem do aplicativo" />
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
