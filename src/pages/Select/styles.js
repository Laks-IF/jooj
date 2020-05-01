import styled from "styled-components";

export const SelectWrapper = styled.div`
  width: 100%;
  height: max(656px, 100vh);

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ButtonsWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr;
`;
export const Button = styled.button`
  background: ${(props) => props.background};

  color: ${(props) => props.color};

  font-size: var(--font-normal);

  position: relative;
  overflow: hidden;

  padding: 1.5rem;

  border-radius: 6px;
  margin: 6px;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

export const SelectIconWrapper = styled.div`
  font-size: var(--font-normal);
  margin-right: 12px;
  align-items: center;
`;

export const SelectButtonText = styled.p``;
