import styled from "styled-components";

export const TeamCardWrapper = styled.div`
  display: flex;
  justify-content: center;

  padding: 1rem 2rem;

  margin: 0.5rem 0;

  background: var(--background-light);

  border-left: 2px solid
    ${(props) => (props.renderBorder ? "var(--primary)" : "transparent")};
`;

export const TeamCardContainer = styled.div`
  width: 100%;
  max-width: 650px;

  display: flex;
  align-items: center;
`;

export const TeamCardImg = styled.img`
  width: 100%;
  max-width: 40px;

  border-radius: 50%;
  margin-right: 1rem;
`;

export const TeamCardData = styled.div``;

export const TeamCardName = styled.p`
  color: var(--color-light);
  font-size: 0.8em;

  position: relative;

  &::after {
    content: "";

    position: absolute;
    top: 0;
    right: 0;

    width: 8px;
    height: 8px;

    border: 2px solid var(--background);

    background: ${(props) => props.circleColor};

    transform: translate(120%, -50%);

    border-radius: 50%;
  }
`;

export const TeamCardStatus = styled.p`
  margin-top: 4px;
  color: var(--color);
  font-size: 0.7em;
`;
