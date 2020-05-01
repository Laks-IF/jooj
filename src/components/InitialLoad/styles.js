import styled from "styled-components";

export const LoadWrapper = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;

  padding: 1rem;
`;

export const LoadLogo = styled.img`
  width: 100%;
  max-width: 100px;
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
