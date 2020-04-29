import React from "react";

import Ripple from "../../components/Ripple";

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
    <S.AuthTitle>Faça login para continuar...</S.AuthTitle>
    <S.AuthDescription>
      Suas informações são usadas para identificação, não temos permissão de
      realizar nada em seu nome
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
            Login com {firstLetterUpper(key)}{" "}
            <Ripple color="var(--ripple)" duration={1000} />
          </S.AuthButton>
        );
      })}
    </S.AuthButtonsWrapper>
  </S.AuthWrapper>
);
