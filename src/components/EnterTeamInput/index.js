import React, { useState } from "react";

import { FaEyeSlash as Hidden, FaEye as Visible } from "react-icons/fa";

import * as S from "./styles";

function EnterTeamInput({
  config: {
    valid,
    invalidLabel,
    label,
    Icon,
    type: initialType,
    enableShowHide,
    autoFocus,
  },
  ...props
}) {
  const [type, setType] = useState(enableShowHide ? "password" : initialType);
  const [focused, setFocused] = useState(!!autoFocus);

  function handleToggleVisibility() {
    if (!enableShowHide) return;

    setType(type === "password" ? initialType : "password");
  }

  function handleBlur() {
    setFocused(false);
  }

  function handleFocus() {
    setFocused(true);
  }

  const inputContainerClassName = `${focused && "focused"} ${
    !valid && "input--invalid"
  }`;

  return (
    <S.EnterTeamInputWrapper>
      <S.EnterTeamLabel
        className={!valid && "input--invalid"}
        data-label={invalidLabel}
      >
        {label}
      </S.EnterTeamLabel>
      <S.EnterTeamInputContainer className={inputContainerClassName}>
        <S.EnterTeamInput
          {...props}
          type={type}
          onBlur={handleBlur}
          onFocus={handleFocus}
        />
        <S.EnterTeamIconWrapper
          cursorPointer={enableShowHide}
          onClick={handleToggleVisibility}
        >
          {enableShowHide ? (
            type === "password" ? (
              <Visible />
            ) : (
              <Hidden />
            )
          ) : (
            <Icon />
          )}
        </S.EnterTeamIconWrapper>
      </S.EnterTeamInputContainer>
    </S.EnterTeamInputWrapper>
  );
}

export default EnterTeamInput;
