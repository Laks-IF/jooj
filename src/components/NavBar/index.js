import React from "react";

// import { useLocation } from "react-router";

import * as S from "./styles";

import tabs from "./tabs";

export default function NavBar() {
  // const location = useLocation();

  return (
    <S.NavBarWrapper>
      <S.NavBarContainer>
        {tabs.map(({ Icon, label, path }) => (
          <S.NavTabWrapper
            key={path}
            to={path}
            activeClassName="tab--active"
            exact={true}
          >
            <S.NavTabIconWrapper className="nav-tab__icon-wrapper">
              <Icon />
            </S.NavTabIconWrapper>
            <S.NavTabLabel className="nav-tab__label">{label}</S.NavTabLabel>
          </S.NavTabWrapper>
        ))}
      </S.NavBarContainer>
    </S.NavBarWrapper>
  );
}
