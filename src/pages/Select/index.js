import React from "react";

// ========================================
// LIBRARY IMPORTS
// ========================================
import { FaKey as JoinIcon, FaLock as CreateIcon } from "react-icons/fa";

// ========================================
// COMPONENTES IMPORTS
// ========================================
import CallToButton from "../../components/CallToButton";

import * as S from "./styles";

const SelectPage = ({ loader, dispatch }) => {
  return (
    <S.SelectWrapper>
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

export default SelectPage;
