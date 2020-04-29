import styled from "styled-components";

export const AuthWrapper = styled.div`
  width: 100vw;
  height: 100vh;

  background: var(--background);

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 1rem;
`;

export const AuthButton = styled.button`
  width: 100%;
  max-width: 500px;

  padding: 1rem 2rem;
  margin: 4px;
  border-radius: 4px;
  box-shadow: var(--box-shadow);

  background: var(--background-light);

  text-align: center;

  overflow: hidden;
  position: relative;

  color: var(--color);
`;
