import React from "react";

import { useHistory } from "react-router-dom";

import Ripple from "../../components/Ripple";
import Particles from "../../components/ParticlesBackground";

import buttons from "./buttons";

import * as S from "./styles";

export default function Select() {
  const history = useHistory();

  return (
    <S.SelectWrapper>
      <Particles />
      <S.ButtonsWrapper>
        {buttons.map(({ props, text, icon: Icon, redirectTo }) => (
          <S.Button
            key={`id-${redirectTo}`}
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
}
