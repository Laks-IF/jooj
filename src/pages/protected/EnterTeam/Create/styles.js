import styled from "styled-components";

export const CreateWrapper = styled.section`
  flex: 1;

  display: flex;
  justify-content: center;
`;

export const CreateContainer = styled.div`
  width: 100%;
  height: 100%;

  max-width: 1100px;

  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 1rem;
`;

export const CreateInputField = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;

  margin-bottom: 3rem;
`;

export const CreateImage = styled.img`
  width: 50px;
  margin: 2rem 0;
  margin-bottom: 0.8rem;
`;

export const CreateTitle = styled.h1`
  font-size: var(--font-big);
  color: var(--color-light);

  padding: 2rem 1.5rem;
  padding-top: 0;

  text-align: center;
`;

export const CreateSubmitButton = styled.div`
  width: 100%;
  max-width: 350px;

  display: flex;
`;
