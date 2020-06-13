import styled from "styled-components";

export const CallToButton = styled.button`
  flex: 1;

  display: flex;
  align-items: center;
  justify-content: ${(props) => (props.center ? "center" : "flex-start")};

  padding: 1rem 2rem;
  margin: 4px;
  border-radius: 4px;
  box-shadow: var(--box-shadow);

  background: ${(props) => props.background};

  overflow: hidden;
  position: relative;

  color: ${(props) => props.color};

  font-size: var(--font-normal);

  transition: var(--transition);

  &:hover {
    filter: brightness(80%);
  }

  * {
    color: ${(props) => props.color};
  }
  @media screen and (max-width: 379px) {
    padding: 14px;
    min-width: 50px;
  }
`;
export const CallToButtonText = styled.span`
  font-weight: normal;
  font-size: var(--font-normal);
  @media screen and (max-width: 379px) {
    display: none;
  }
`;

export const CallToIconWrapper = styled.div`
  margin-right: 14px;

  display: flex;
  align-items: center;

  font-size: 15px;

  @media screen and (max-width: 379px) {
    margin-right: 0px;
  }
`;
