import React from "react";

// ========================================
// COMPONENTES IMPORTS
// ========================================
import Ripple from "../Ripple";

// ========================================
// FIREBASE SERVICE
// ========================================
import firebase_service from "../../services/firebase";

// ========================================
// ALL STYLES IMPORTED AS S OBJECT
// ========================================
import * as S from "./styles";

const AuthButton = ({ method: { provider, icon: Icon, color, name } }) => {
  return (
    <S.AuthButton
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