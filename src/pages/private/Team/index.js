import React, { useState, useEffect } from "react";

import firebase_services from "../../../services/firebase";

import Connect from "../../../store/connect";

import NavBar from "../../../components/NavBar";
import TeamUserCard from "../../../components/TeamUserCard";
import SpinnerLoader from "../../../components/SpinnerLoader";

import * as S from "./styles";

function Team({
  auth: {
    user: { teamId },
  },
}) {
  const [loading, setLoading] = useState(true);
  const [usersQuery, setUsersQuery] = useState({
    queries: firebase_services.firestore.getUsersByTeam(teamId, {
      limit: 1,
    }),
    hasMore: null,
    initial: true,
    data: [],
  });

  useEffect(() => {
    async function loadInitialUsers() {
      const {
        data: initialUsers,
        hasMore,
      } = await usersQuery.queries.initialQuery();

      console.log({ initialUsers });

      setUsersQuery({
        ...usersQuery,
        initial: false,
        hasMore,
        data: initialUsers,
      });
    }

    async function loadMoreUsers() {
      if (!usersQuery.hasMore) {
        setLoading(false);
        return;
      }

      const {
        data: moreUsers,
        hasMore,
      } = await usersQuery.queries.getMoreQuery();

      setUsersQuery({
        ...usersQuery,
        hasMore,
        data: [...usersQuery.data, ...moreUsers],
      });
    }

    if (usersQuery.initial) {
      loadInitialUsers();
    } else {
      loadMoreUsers();
    }
  }, [usersQuery]);

  return (
    <>
      <NavBar />
      <S.TeamWrapper>
        {usersQuery.data.map((user) => (
          <TeamUserCard
            key={user.uid}
            user={{
              ...user,
              status: user.isLeader ? "Líder" : "Estudante",
            }}
          />
        ))}
        {loading && (
          <S.TeamUserLoaderWrapper>
            <SpinnerLoader />
          </S.TeamUserLoaderWrapper>
        )}
      </S.TeamWrapper>
    </>
  );
}

const mapStateToProps = ({ auth }, props) => ({
  auth,
  ...props,
});

export default Connect(mapStateToProps)(Team);
