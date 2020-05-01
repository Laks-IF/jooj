import React from "react";

// ========================================
// COMPONENTES IMPORTS
// ========================================
import CallToButton from "../CallToButton";

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
// import * as S from "./styles";

const AuthButton = ({ method: { provider, icon, color, name }, ...rest }) => {
  const handleLogin = async () => {
    try {
      await firebase_service.auth(provider);
    } catch (error) {
      if (!error.render_error) return;

      toast[error.toast || "error"](error.message);
    }
  };
  return (
    <CallToButton
      role="button"
      aria-label={`Clique aqui para fazer login com ${name}`}
      config={{
        text: `Login com ${name}`,
        color: "#fff",
        background: color,
        icon,
      }}
      onClick={handleLogin}
      {...rest}
    />
  );
};

export default AuthButton;
