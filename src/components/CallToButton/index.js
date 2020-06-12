import React from "react";

// ========================================
// COMPONENTES IMPORTS
// ========================================
import Ripple from "../Ripple";

// ========================================
// ALL STYLES IMPORTED AS S OBJECT
// ========================================
import * as S from "./styles";

const defaultConfig = {
  icon: null,
  text: "Click Me",
  background: "var(--background-light)",
  color: "var(--color)",
};

export default function CallToButton({ config: userConfig = {}, ...rest }) {
  const { background, color, text, icon: Icon } = {
    ...defaultConfig,
    ...userConfig,
  };

  return (
    <S.CallToButton background={background} color={color} {...rest}>
      {Icon && (
        <S.CallToIconWrapper>
          <Icon />
        </S.CallToIconWrapper>
      )}
      <S.CallToButtonText>{text}</S.CallToButtonText>
      <Ripple color="var(--ripple)" duration={1000} />
    </S.CallToButton>
  );
}
