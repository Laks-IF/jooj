import React from "react";

import { useHistory } from "react-router";

import Join from "./Join";
import Create from "./Create";

import MobileTopBar from "../../../components/MobileTopBar";

import { useParams } from "react-router";

import { firstLetterUpperCase } from "../../../utils";

import * as S from "./styles";

export default function EnterTeam() {
  const history = useHistory();

  const { action } = useParams();

  const actions = {
    Join,
    Create,
  };

  const PageToRender = actions[firstLetterUpperCase(action)];

  function handleComeBack() {
    history.push("/select");
  }

  return (
    <S.EnterTeamWrapper>
      <MobileTopBar onClick={handleComeBack} />
      <PageToRender />
    </S.EnterTeamWrapper>
  );
}
