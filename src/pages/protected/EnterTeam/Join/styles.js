import styled from "styled-components";

export const JoinWrapper = styled.section`
  flex: 1;

  display: flex;
  justify-content: center;
`;

export const JoinContainer = styled.form`
  width: 100%;
  height: 100%;

  max-width: 1100px;

  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 1rem;
`;

export const JoinInputField = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;

  margin-bottom: 3rem;
`;

export const JoinImage = styled.img`
  width: 50px;
  margin: 2rem 0;
  margin-bottom: 0.8rem;
`;

export const JoinTitle = styled.h1`
  font-size: var(--font-big);
  color: var(--color-light);

  padding: 2rem 1.5rem;
  padding-top: 0;

  text-align: center;
`;

export const JoinSubmitButton = styled.div`
  width: 100%;
  max-width: 350px;

  display: flex;
`;
