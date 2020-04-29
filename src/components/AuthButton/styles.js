import styled from "styled-components";

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
