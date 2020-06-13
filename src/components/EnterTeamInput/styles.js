import styled from "styled-components";

export const EnterTeamInputWrapper = styled.div`
  width: 100%;
  max-width: 560px;
`;

export const EnterTeamLabel = styled.div`
  margin-bottom: 1rem;
  color: var(--color-light);
`;

export const EnterTeamInputContainer = styled.div`
  display: flex;
  align-items: center;

  padding: 0 1rem;

  flex: 1;

  width: 100%;
  max-width: 560px;

  border-radius: 4px;

  background: var(--background-light);
  border: 2px solid var(--background-dark);

  transition: all 0.2s ease-in-out;

  &.focused {
    border: 2px solid var(--primary);
  }
`;

export const EnterTeamInput = styled.input`
  color: var(--color-light);

  min-width: 0;

  flex: 1;

  padding: 1rem;

  &::placeholder {
    color: var(--color);
  }
`;

export const EnterTeamIconWrapper = styled.div`
  padding-right: 1rem;
  color: var(--color-light);
  cursor: ${(props) => (props.cursorPointer ? `pointer` : "normal")};
`;
