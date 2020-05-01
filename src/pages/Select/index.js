import React from "react";

// ========================================
// LIBRARY IMPORTS
// ========================================
import { FaKey as JoinIcon, FaLock as CreateIcon } from "react-icons/fa";

// ========================================
// STORE IMPORTS
// ========================================
import { setLoaderAction } from "../../store/reducers/loader";
import Connect from "../../store/connect";

// ========================================
// COMPONENTES IMPORTS
// ========================================
import CallToButton from "../../components/CallToButton";
import Particles from "../../components/ParticlesBackground";
import Loader from "../../components/Loader";

import * as S from "./styles";

const SelectPage = ({ loader, dispatch }) => {
  return (
    <S.SelectWrapper>
      <Particles />
      <Loader />
      <S.ButtonsWrapper>
        <CallToButton
          aria-label="Opa! Clique aqui para criar uma nova equipe!"
          config={{
            text: "Criar uma nova equipe!",
            color: "#fff",
            background: "var(--primary)",
            icon: CreateIcon,
          }}
        />
        <CallToButton
          onClick={() => {
            if (loader.isLoading) return;

            dispatch(setLoaderAction({ isLoading: true }));

            setTimeout(
              () => dispatch(setLoaderAction({ isLoading: false })),
              3000
            );
          }}
          aria-label="Opa! Clique aqui para entrar em uma equipe já existente!"
          config={{
            text: "Entrar em uma equipe!",
            color: "#fff",
            background: "var(--secondary)",
            icon: JoinIcon,
          }}
        />
      </S.ButtonsWrapper>
    </S.SelectWrapper>
  );
};

const mapStateToProps = ({ loader }, props) => ({
  loader,
  ...props,
});

export default Connect(mapStateToProps)(SelectPage);
