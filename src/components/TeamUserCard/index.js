import React from "react";

import { useUserData } from "../../hooks";

import * as S from "./styles";

export default function TeamUserCard({
  user: { photoURL, name, status, isLeader, uid },
}) {
  const currentUser = useUserData();

  const circleColor = isLeader ? "var(--warning)" : "var(--success)";

  const isTheCurrentUser = currentUser.uid === uid;

  return (
    <S.TeamCardWrapper renderBorder={isTheCurrentUser}>
      <S.TeamCardContainer>
        <S.TeamCardImg src={photoURL} alt={name + " - " + status} />
        <S.TeamCardData>
          <S.TeamCardName circleColor={circleColor}>{name}</S.TeamCardName>
          <S.TeamCardStatus>{status}</S.TeamCardStatus>
        </S.TeamCardData>
      </S.TeamCardContainer>
    </S.TeamCardWrapper>
  );
}
