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

export const AuthButtonsWrapper = styled.div`
  display: flex;
  flex-direction: column;
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
`;

export const AuthIconWrapper = styled.div`
  color: #fff;

  margin-right: 12px;

  font-weight: bolder;

  display: flex;
  align-items: center;
`;

export const AuthTitle = styled.h1`
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
