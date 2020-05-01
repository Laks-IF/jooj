import React from "react";

// ========================================
// LIBRARY IMPORTS
// ========================================
import { useHistory } from "react-router-dom";
import {
  FaKey as JoinIcon,
  FaLock as CreateIcon,
  // FaQuestionCircle as HelpIcon,
} from "react-icons/fa";

// ========================================
// COMPONENTES IMPORTS
// ========================================
import Ripple from "../../components/Ripple";
import Particles from "../../components/ParticlesBackground";

import * as S from "./styles";

const buttons = [
  {
    redirectTo: "/select/create",
    icon: CreateIcon,
    text: "Criar uma nova equipe!",
    props: {
      "aria-label": "Opa! Clique aqui para criar uma nova equipe!",
      background: "var(--primary)",
    },
  },
  {
    redirectTo: "/select/join",
    icon: JoinIcon,
    text: "Entrar em uma equipe!",
    props: {
      "aria-label": "Opa! Clique aqui para entrar em uma equipe já existente!",
      background: "var(--secondary)",
    },
  },
];

const SelectPage = () => {
  const history = useHistory();

  return (
    <S.SelectWrapper>
      <Particles />
      <S.ButtonsWrapper>
        {buttons.map(({ props, text, icon: Icon, redirectTo }) => (
          <S.Button
            onClick={() => history.push(redirectTo)}
            color="#fff"
            role="button"
            {...props}
          >
            <S.SelectIconWrapper>
              <Icon />
            </S.SelectIconWrapper>
            <S.SelectButtonText>{text}</S.SelectButtonText>
            <Ripple color="var(--ripple)" duration={1000} />
          </S.Button>
        ))}
      </S.ButtonsWrapper>
    </S.SelectWrapper>
  );
};

export default SelectPage;
