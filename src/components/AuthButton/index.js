import React from "react";

// ========================================
// LIBRARY IMPORTS
// ========================================
import { toast } from "react-toastify";

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

const AuthButton = ({
  method: { provider, icon: Icon, color, name },
  ...rest
}) => {
  return (
    <S.AuthButton
      color={color}
      onClick={() => {
        try {
          firebase_service.auth(provider);
        } catch (error) {
          toast.success(error.message);
        }
      }}
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
