import React, { useState, useEffect } from "react";

import { useHistory, useParams } from "react-router";

import { FaArrowLeft as BackArrow } from "react-icons/fa";

import InvalidInvite from "../../../../assets/invalid-invite.png";
import Logo from "../../../../assets/browser-favicon-64.png";

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
      try {
        const teamData = await firebase_services.firestore.getTeamByInvite(
          invite
        );

        const leaderData = await firebase_services.firestore.getLeaderByTeam(
          teamData.id
        );

        if (!teamData || !leaderData) {
          throw new Error("Invalid invite");
        }

        setInviteData({
          team: teamData,
          leader: leaderData,
        });
        setLoading(false);
      } catch (e) {
        setLoading(false);
      }
    }

    getInviteData();
  }, [invite]);

  return (
    <S.InviteWrapper>
      <Particles />
      <S.InviteContainer>
        <S.InviteHeader onClick={handleComeBack}>
          <BackArrow />
        </S.InviteHeader>
        {loading ? (
          <S.InviteLoadingWrapper>
            <S.InviteLoadingImg src={Logo} alt="Logo do aplicativo" />
          </S.InviteLoadingWrapper>
        ) : !!inviteData ? (
          (function () {
            const {
              team: { name: teamName, createdAt },
              leader: { name: leaderName, photoURL },
            } = inviteData;

            const dateString = createdAt.toDate().getFullYear();

            return (
              <S.InviteBody>
                <S.InviteLeaderPhotoWrapper>
                  <S.InviteLeaderImg
                    src={photoURL}
                    alt={`Foto de perfil do líder do ${teamName}`}
                  />
                </S.InviteLeaderPhotoWrapper>
                <S.InviteLeader>
                  {leaderName} convidou você para se juntar
                </S.InviteLeader>
                <S.InviteTitle>{teamName}</S.InviteTitle>
                <S.InviteTeamDateWrapper>
                  <S.InviteTeamDate circleColor="var(--success)">
                    Turma de {dateString}
                  </S.InviteTeamDate>
                </S.InviteTeamDateWrapper>
                <S.InviteButton>Aceitar</S.InviteButton>
              </S.InviteBody>
            );
          })()
        ) : (
          (function () {
            return (
              <S.InviteBody>
                <S.InviteLeaderPhotoWrapper>
                  <S.InviteLeaderImg
                    src={InvalidInvite}
                    alt="Convite inválido"
                  />
                </S.InviteLeaderPhotoWrapper>
                <S.InviteLeader>Ops, este convite é inválido</S.InviteLeader>
                <S.InviteTitle>Convite Inválido</S.InviteTitle>
                <S.InviteTeamDateWrapper>
                  <S.InviteTeamDate circleColor="var(--error)">
                    Solicite um novo convite
                  </S.InviteTeamDate>
                </S.InviteTeamDateWrapper>
              </S.InviteBody>
            );
          })()
        )}
      </S.InviteContainer>
    </S.InviteWrapper>
  );
}
