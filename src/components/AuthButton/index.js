import React from "react";

import Ripple from "../Ripple";

import firebase_service from "../../services/firebase";

import * as S from "./styles";

const AuthButton = ({ method: { provider, icon: Icon, color, name } }) => {
  return (
    <S.AuthButton
      key={`auth__button__${name}`}
      color={color}
      onClick={() => firebase_service.auth(provider)}
      className="font-normal"
    >
      <S.AuthIconWrapper>
        <Icon />
      </S.AuthIconWrapper>
      <S.AuthButtonText>Login com {name}</S.AuthButtonText>
      <Ripple color="var(--ripple)" duration={1000} />
    </S.AuthButton>
  );
};

export default AuthButton;
