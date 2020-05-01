import styled from "styled-components";

export const LoaderWrapper = styled.div`
  position: fixed;
  top: 0%;
  left: 0%;

  height: 4px;
  width: 0%;

  background: var(--primary);

  &.loader__loading {
    animation: loader 1s ease-in-out 0s infinite;
  }
  &.loader__static {
    animation: none;
  }
  @keyframes loader {
    0% {
      width: 0%;
      left: 0%;
    }
    50% {
      width: 100%;
    }
    100% {
      width: 0%;
      left: 100%;
    }
  }
`;
