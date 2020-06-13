import React from "react";

import { MdGroupAdd, MdHttps } from "react-icons/md";

import Logo from "../../../../assets/browser-favicon-64.png";

import EnterTeamInput from "../../../../components/EnterTeamInput";
import CallToButton from "../../../../components/CallToButton";

import * as S from "./styles";

export default function Create() {
  return (
    <S.CreateWrapper>
      <S.CreateContainer>
        <S.CreateImage src={Logo} alt="Logo do aplicativo" />
        <S.CreateTitle>Crie uma turma</S.CreateTitle>
        <S.CreateInputField>
          <EnterTeamInput
            placeholder="Digite o nome da turma"
            config={{
              label: "Nome da turma:",
              Icon: MdGroupAdd,
              type: "text",
              enableShowHide: false,
            }}
          />
        </S.CreateInputField>
        <S.CreateInputField>
          <EnterTeamInput
            placeholder="Crie a senha da turma:"
            config={{
              label: "Crie uma senha",
              Icon: MdHttps,
              type: "text",
              enableShowHide: true,
            }}
          />
        </S.CreateInputField>
        <S.CreateSubmitButton>
          <CallToButton
            role="button"
            arial-label="Clique aqui para criar a turma"
            config={{
              background: "var(--primary)",
              color: "#fff",
              icon: null,
              text: "Criar",
              center: true,
            }}
          />
        </S.CreateSubmitButton>
      </S.CreateContainer>
    </S.CreateWrapper>
  );
}
