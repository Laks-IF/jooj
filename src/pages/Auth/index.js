import React from "react";

import Ripple from "../../components/Ripple";

import Logo from "../../assets/browser-logo-512.png";

import { FaTwitter, FaGoogle, FaGithub, FaMicrosoft } from "react-icons/fa";

import firebase_service from "../../services/firebase";

import * as S from "./styles";

import { firstLetterUpper } from "../../utils";

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

export default () => (
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
      {Object.keys(methods).map((key) => {
        const { provider, icon: Icon, color } = methods[key];
        return (
          <S.AuthButton
            key={`auth__button__${key}`}
            color={color}
            onClick={() => firebase_service.auth(provider)}
            className="font-normal"
          >
            <S.AuthIconWrapper>
              <Icon />
            </S.AuthIconWrapper>
            <S.AuthButtonText>
              Login com {firstLetterUpper(key)}
            </S.AuthButtonText>
            <Ripple color="var(--ripple)" duration={1000} />
          </S.AuthButton>
        );
      })}
    </S.AuthButtonsWrapper>
  </S.AuthWrapper>
);
