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
// UTILS IMPORTS
// ========================================
import toast from "../../utils/toast";

// ========================================
// ALL STYLES IMPORTED AS S OBJECT
// ========================================
import * as S from "./styles";

const AuthButton = ({
  method: { provider, icon: Icon, color, name },
  ...rest
}) => {
  const handleLogin = async () => {
    try {
      await firebase_service.auth(provider);
    } catch (error) {
      if (!error.render_error) return;

      toast[error.toast || "error"](error.message);
    }
  };
  return (
    <S.AuthButton
      color={color}
      onClick={handleLogin}
      className="font-normal"
      {...rest}
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
