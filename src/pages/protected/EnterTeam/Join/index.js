import React, { useState, useEffect } from "react";

import { useHistory } from "react-router";

import { IoMdLink } from "react-icons/io";

import Logo from "../../../../assets/browser-favicon-64.png";

import { setFormAction } from "../../../../store/reducers/enterTeam";

import Connect from "../../../../store/connect";

import EnterTeamInput from "../../../../components/EnterTeamInput";
import CallToButton from "../../../../components/CallToButton";

import * as S from "./styles";

function Join({ enterTeam: { form }, dispatch }) {
  const [validInvite, setValidInvite] = useState(true);

  const history = useHistory();

  const {
    join: { invite },
  } = form;

  function handleChangeInvite({ target: { value } }) {
    dispatch(
      setFormAction({
        ...form,
        join: {
          ...form.join,
          invite: value,
        },
      })
    );
  }

  async function handleSubmit(e) {
    e.preventDefault();

    if (!validInvite) {
      return;
    }

    if (!invite.length) {
      return setValidInvite(false);
    }

    try {
      const invitePaths = new URL(invite).pathname.split("/");
      const inviteCode = invitePaths[invitePaths.length - 1];

      history.push(`/invite/${inviteCode}`);
    } catch (e) {
      setValidInvite(false);
    }
  }

  useEffect(() => {
    if (!invite.length) return setValidInvite(true);
    try {
      new URL(invite);
      setValidInvite(true);
    } catch (e) {
      setValidInvite(false);
    }
  }, [invite]);

  return (
    <S.JoinWrapper>
      <S.JoinContainer onSubmit={handleSubmit}>
        <S.JoinImage src={Logo} alt="Logo do aplicativo" />
        <S.JoinTitle>Entrar na turma</S.JoinTitle>

        <S.JoinInputField>
          <EnterTeamInput
            placeholder="Cole o convite que você recebeu aqui"
            onChange={handleChangeInvite}
            value={invite}
            config={{
              valid: validInvite,
              invalidLabel: "Convite inválido!",
              label: "Cole link de convite abaixo",
              Icon: IoMdLink,
              type: "text",
              enableShowHide: false,
            }}
          />
        </S.JoinInputField>

        <S.JoinSubmitButton>
          <CallToButton
            role="button"
            arial-label="Clique aqui para entrar na turma usando seu link de convite"
            config={{
              background: "var(--primary)",
              color: "#fff",
              icon: null,
              text: "Entrar",
              center: true,
            }}
          />
        </S.JoinSubmitButton>
      </S.JoinContainer>
    </S.JoinWrapper>
  );
}

const mapStateToProps = ({ enterTeam }, props) => ({
  enterTeam,
  ...props,
});

export default Connect(mapStateToProps)(Join);
