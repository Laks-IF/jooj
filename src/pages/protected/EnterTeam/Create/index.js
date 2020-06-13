import React, { useState, useEffect } from "react";

import firebase_service from "../../../../services/firebase";

import { MdGroupAdd, MdHttps } from "react-icons/md";

import Logo from "../../../../assets/browser-favicon-64.png";

import { setFormAction } from "../../../../store/reducers/enterTeam";
import { setUserAction } from "../../../../store/reducers/auth";
import { setLoaderAction } from "../../../../store/reducers/loader";

import Connect from "../../../../store/connect";

import EnterTeamInput from "../../../../components/EnterTeamInput";
import CallToButton from "../../../../components/CallToButton";

import * as S from "./styles";

function Create({
  enterTeam: { form },
  auth: {
    user: { uid, ...authUserRest },
    ...authRest
  },
  dispatch,
}) {
  const [validName, setValidName] = useState(true);
  const [validPassword, setValidPassword] = useState(true);

  const {
    create: { name, password },
  } = form;

  function handleChangeName({ target: { value } }) {
    dispatch(
      setFormAction({
        ...form,
        create: {
          ...form.create,
          name: value,
        },
      })
    );
  }

  function handleChangePassword({ target: { value } }) {
    dispatch(
      setFormAction({
        ...form,
        create: {
          ...form.create,
          password: value,
        },
      })
    );
  }

  async function handleSubmit(e) {
    e.preventDefault();

    if (!validPassword || !validName) {
      return;
    }

    if (!name.length) {
      return setValidName(false);
    }

    if (!password.length) {
      return setValidPassword(false);
    }

    dispatch(
      setLoaderAction({
        isLoading: true,
      })
    );

    const { teamId, isLeader } = await firebase_service.firestore.createTeam(
      {
        name,
        password,
      },
      uid
    );

    dispatch(
      setUserAction({
        ...authRest,
        user: {
          ...authUserRest,
          uid,
          teamId,
          isLeader,
        },
      })
    );
  }

  useEffect(() => {
    if (password.length > 0 && password.length < 4) {
      setValidPassword(false);
    } else {
      setValidPassword(true);
    }
    if (name.length > 0 && name.length < 4) {
      setValidName(false);
    } else {
      setValidName(true);
    }
  }, [name, password]);

  return (
    <S.CreateWrapper>
      <S.CreateContainer onSubmit={handleSubmit}>
        <S.CreateImage src={Logo} alt="Logo do aplicativo" />
        <S.CreateTitle>Crie uma turma</S.CreateTitle>
        <S.CreateInputField>
          <EnterTeamInput
            placeholder="Digite o nome da turma"
            onChange={handleChangeName}
            value={name}
            config={{
              valid: validName,
              invalidLabel: "Escolha um nome maior!",
              label: "Nome da turma",
              Icon: MdGroupAdd,
              type: "text",
              enableShowHide: false,
            }}
          />
        </S.CreateInputField>
        <S.CreateInputField>
          <EnterTeamInput
            placeholder="Crie a senha da turma"
            onChange={handleChangePassword}
            value={password}
            config={{
              valid: validPassword,
              invalidLabel: "Crie uma senha mais forte!",
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

const mapStateToProps = ({ enterTeam, auth }, props) => ({
  enterTeam,
  auth,
  ...props,
});

export default Connect(mapStateToProps)(Create);
