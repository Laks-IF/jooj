import React from "react";

// ====================
// ASSETS IMPORTS
// ====================
import Logo from "../../../assets/browser-logo-512.png";

// ========================================
// COMPONENTES IMPORTS
// ========================================
import Particles from "../../../components/ParticlesBackground";
import Loader from "../../../components/Loader";

// ========================================
// STORE IMPORTS
// ========================================
import { setLoaderAction } from "../../../store/reducers/loader";
import Connect from "../../../store/connect";

// ========================================
// COMPONENTES IMPORTS
// ========================================
import CallToButton from "../../../components/CallToButton";

// ========================================
// FIREBASE SERVICE
// ========================================
import firebase_service from "../../../services/firebase";

// ========================================
// UTILS IMPORTS
// ========================================
import toast from "../../../utils/toast";

import { firstLetterUpperCase } from "../../../utils";

import methods from "./methods";

import * as S from "./styles";

function Auth({ dispatch }) {
  async function handleLogin(provider) {
    try {
      dispatch(setLoaderAction({ isLoading: true }));

      await firebase_service.auth.login(provider);
    } catch (error) {
      dispatch(setLoaderAction({ isLoading: false }));

      if (!error.render_error) return;

      toast[error.toast || "error"](error.message);
    }
  }

  return (
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
        Suas informações são utilizadas para e somente identificação, não vamos
        e nem podemos divulgar nada em seu nome.
      </S.AuthDescription>
      <S.AuthButtonsWrapper>
        {Object.keys(methods).map((key) => {
          const name = firstLetterUpperCase(key);

          const method = methods[key];

          const { Icon, provider } = method;

          return (
            <CallToButton
              role="button"
              aria-label={`Clique aqui para fazer login com ${name}`}
              key={`auth__button__${key}`}
              onClick={() => handleLogin(provider)}
              config={{
                text: `Login com ${name}`,
                color: "#fff",
                background: method.color,
                icon: Icon,
              }}
            />
          );
        })}
      </S.AuthButtonsWrapper>
    </S.AuthWrapper>
  );
}

const mapStateToProps = ({ loader }, props) => ({
  loader,
  ...props,
});

export default Connect(mapStateToProps)(Auth);
