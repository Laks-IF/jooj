import styled from "styled-components";

export const InviteWrapper = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  padding: 2rem;
`;

export const InviteContainer = styled.div`
  width: 100%;
  max-width: 500px;

  background: var(--background-light);

  border-radius: 8px;
  overflow: hidden;
`;

export const InviteHeader = styled.div`
  cursor: pointer;

  background: var(--background-light);
  color: #f1f1f1;

  display: flex;
  align-items: center;

  padding: 2rem;

  @media screen and (max-width: 640px) {
    padding: 1rem;
  }
`;

export const InviteLoadingWrapper = styled.div`
  height: 362px;
  padding: 2rem;

  display: grid;
  place-items: center center;
`;

export const InviteLoadingImg = styled.img`
  width: 100%;
  max-width: 75px;

  animation: logo_initial_load 1s ease-in-out 0s infinite;

  @keyframes logo_initial_load {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

export const InviteBody = styled.div`
  padding: 2rem;
  color: var(--color);

  @media screen and (max-width: 640px) {
    padding: 1rem;
  }
`;

export const InviteLeaderPhotoWrapper = styled.div`
  padding: 2rem;
  padding-top: 0;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const InviteLeaderImg = styled.img`
  width: 100%;
  max-width: 75px;
  border-radius: 50%;
  border: 2px solid var(--primary);
`;

export const InviteLeader = styled.p`
  color: var(--color);
  font-size: 10px;

  text-align: center;
`;

export const InviteTitle = styled.h2`
  color: var(--color-light);
  font-size: 1.2em;
  text-align: center;
  padding: 1.5rem 0;
`;

export const InviteTeamDateWrapper = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;

  margin-bottom: 2rem;
`;

export const InviteTeamDate = styled.div`
  color: var(--color);
  font-size: 10px;

  background: var(--background-dark);
  border-radius: 36px;
  padding: 0.3rem 0.5rem;
  border: 2px solid var(--background);

  position: relative;

  &::after {
    content: "";

    position: absolute;
    top: 0;
    right: 0;

    transform: translate(40%, -40%);
    border: 2px solid var(--background);

    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: ${(props) => props.circleColor};
  }
`;

export const InviteButton = styled.button`
  padding: 1rem 2rem;

  text-align: center;

  width: 100%;

  color: #f1f1f1;
  background: var(--primary);

  border-radius: 4px;

  transition: all 0.2s ease-in-out;

  font-weight: bold;

  &:hover {
    filter: brightness(80%);
  }
`;
