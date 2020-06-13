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
  max-width: 640px;

  background: var(--background-light);

  border-radius: 8px;
  overflow: hidden;
`;

export const InviteHeader = styled.div`
  height: 100px;

  background: linear-gradient(to right, var(--primary), var(--secondary));
`;

export const InviteBody = styled.div`
  padding: 2rem;
  color: var(--color);

  @media screen and (max-width: 640px) {
    padding: 1rem;
  }
`;

export const InviteTitle = styled.div``;

export const InviteLeader = styled.div``;

export const InviteButton = styled.button`
  padding: 1rem 2rem;

  text-align: center;

  width: 100%;

  color: #f1f1f1;
  background: var(--primary);

  border-radius: 4px;

  transition: all 0.2s ease-in-out;

  font-size: 1em;
  font-weight: bold;

  &:hover {
    filter: brightness(80%);
  }
`;
