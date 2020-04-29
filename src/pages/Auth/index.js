import React from "react";

import AuthButton from "../../components/AuthButton";

import Logo from "../../assets/browser-logo-512.png";

import { FaTwitter, FaGoogle, FaGithub, FaMicrosoft } from "react-icons/fa";

import { firstLetterUpper } from "../../utils";

import firebase_service from "../../services/firebase";

import * as S from "./styles";

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
      Suas informações são utilizadas para e somente identificação, não podemos
      divulgar nada em seu nome, não, também não posso te enviar pack do pé
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
