import React from "react";

import { useParams } from "react-router";

import { firstLetterUpperCase } from "../../../utils";

import * as S from "./styles";

export default function Join() {
  const { join: pageKey } = useParams();

  const pages = {
    JoinTeam,
    CreateTeam,
  };

  const pageToRender = `${firstLetterUpperCase(pageKey)}Team`;

  return pages[pageToRender]();
}

function CreateTeam() {
  return <div>Crie uma turma agora, bora</div>;
}
