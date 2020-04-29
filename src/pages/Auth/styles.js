import styled from "styled-components";

export const AuthWrapper = styled.div`
  width: 100%;
  height: max(656px, 100vh);

  background: var(--background);

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 1rem;

  @media screen and (max-width: 379px) {
    height: max(527px, 100vh);
  }
`;

export const AuthButtonsWrapper = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 379px) {
    flex-flow: row wrap;
  }
`;
export const AuthButton = styled.button`
  flex: 1;

  display: flex;
  align-items: center;

  padding: 1rem 2rem;
  margin: 4px;
  border-radius: 4px;
  box-shadow: var(--box-shadow);

  background: ${(props) => props.color};

  overflow: hidden;
  position: relative;

  color: #fff;

  transition: var(--transition);

  &:hover {
    filter: brightness(80%);
  }

  @media screen and (max-width: 379px) {
    padding: 14px;
  }
`;
export const AuthButtonText = styled.span`
  @media screen and (max-width: 379px) {
    display: none;
  }
`;

export const AuthIconWrapper = styled.div`
  color: #fff;

  margin-right: 14px;

  font-weight: bolder;

  display: flex;
  align-items: center;

  font-size: 18px;

  @media screen and (max-width: 379px) {
    margin-right: 0px;
  }
`;

export const AuthLogo = styled.img`
  height: 80px;
  animation: logo 2.5s ease-in-out 0s infinite;
  @keyframes logo {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;
export const AuthTitle = styled.h1`
  margin-top: 2rem;
  max-width: 500px;
  font-size: var(--font-big);
  color: var(--color-light);
  text-align: center;
`;
export const AuthDescription = styled.p`
  font-size: var(--font-small);
  color: var(--color);
  margin: 2rem 0;
  max-width: 350px;
  text-align: center;
  line-height: 2;
`;
