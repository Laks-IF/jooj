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

const SelectPage = () => {
  return (
    <S.SelectWrapper>
      <S.ButtonsWrapper>
        <CallToButton
          config={{
            text: "Bora criar uma equipe!",
            color: "#fff",
            background: "#546CE6",
            icon: CreateIcon,
          }}
        />
        <CallToButton
          config={{
            text: "Quero entrar em uma equipe!",
            color: "#fff",
            background: "#7589E9",
            icon: JoinIcon,
          }}
        />
      </S.ButtonsWrapper>
    </S.SelectWrapper>
  );
};

export default SelectPage;
