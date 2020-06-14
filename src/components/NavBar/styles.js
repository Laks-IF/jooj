import styled from "styled-components";

import { NavLink } from "react-router-dom";

export const NavBarWrapper = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;

  position: fixed;
  bottom: 0;
  left: 0;

  box-shadow: 0 -2px 5px rgb(0, 0, 0, 0.05);

  background: var(--background);
`;

export const NavBarContainer = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;
`;

export const NavTabWrapper = styled(NavLink)`
  user-select: none;

  flex: 1;
  padding: 0.5rem;

  max-width: 150px;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  cursor: pointer;

  transition: all 0.15s ease-in-out;

  border-top: 3px solid transparent;

  text-decoration: none;
  * {
    text-decoration: none;
  }
  &:not(.tab--active) {
    &:active,
    &:hover,
    &:focus {
      background: var(--background-light);
    }
  }
  &.tab--active {
    border-top: 3px solid var(--primary);
    .nav-tab__icon-wrapper {
      color: var(--primary);
    }
    .nav-tab__label {
      color: var(--primary);
    }
  }
`;

export const NavTabIconWrapper = styled.div`
  color: var(--color);

  font-size: 18px;

  transition: all 0.15s ease-in-out;

  display: flex;
  align-items: center;

  margin-bottom: 4px;

  &.tab--active {
  }
`;

export const NavTabLabel = styled.div`
  color: var(--color);

  transition: all 0.15s ease-in-out;

  font-size: 0.5em;

  text-align: center;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;

  font-weight: bolder;
`;
