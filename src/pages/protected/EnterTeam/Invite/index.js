import React, { useState, useEffect } from "react";

import { useHistory, useParams } from "react-router";

import firebase_services from "../../../../services/firebase";

import Particles from "../../../../components/ParticlesBackground";

import * as S from "./styles";

export default function Invite() {
  const [inviteData, setInviteData] = useState(null);
  const [loading, setLoading] = useState(true);
  const { invite } = useParams();

  const history = useHistory();

  function handleComeBack() {
    history.push("/select");
  }

  useEffect(() => {
    async function getInviteData() {
      const teamData = await firebase_services.firestore.getTeamByInvite(
        invite
      );
      const leaderData = await firebase_services.firestore.getLeaderByTeam(
        teamData.id
      );

      console.log({ teamData, leaderData });
      if (!teamData || !leaderData) {
        return console.log("Convite inválido");
      }

      setInviteData({
        team: teamData,
        leader: leaderData,
      });
      setLoading(false);
    }

    getInviteData();
  }, []);

  return (
    <S.InviteWrapper>
      <Particles />
      <S.InviteContainer>
        <S.InviteHeader></S.InviteHeader>
        {loading ? (
          <h1>Carregando</h1>
        ) : (
          (function () {
            const {
              team: { name: teamName, createdAt },
              leader: { name: leaderName, photoURL },
            } = inviteData;
            const dateString = createdAt.toDate().toLocaleDateString();
            return (
              <S.InviteBody>
                <S.InviteTitle>
                  {teamName}, líder: {leaderName}
                </S.InviteTitle>
                <S.InviteLeader>{dateString}</S.InviteLeader>
                <S.InviteButton>É essa mesmo!</S.InviteButton>
              </S.InviteBody>
            );
          })()
        )}
      </S.InviteContainer>
    </S.InviteWrapper>
  );
}
