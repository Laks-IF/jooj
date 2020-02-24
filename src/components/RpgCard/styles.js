import styled from 'styled-components';

export const CardContainer = styled.div`
  border-radius: 12px;
  background: var(--content);

  display: flex;
  flex-direction: column;
  align-items: center;

  box-shadow: 0 2px 20px lightgrey;
  overflow: hidden;
`;
export const PhotoWrapper = styled.div`
  height: 150px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 75px;
  background: ${(props) => props.background};
`;

export const PhotoContainer = styled.div`
  width: 150px;
  height: 150px;
  transform: translateY(50%);

  background: var(--content);
  border-radius: 50%;

  overflow: hidden;

  padding: 8px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    border-radius: 50%;
  }
`;
export const CardContent = styled.div`
  padding: 2rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100px;
  justify-content: center;
`;

export const CardName = styled.h1`
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  font-size: 1.2em;
  color: #7c8e9d;
`;

export const CardJob = styled(CardName)`
  font-size: 1em;
`;

export const CardFooter = styled.div`
  display: flex;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  align-items: center;
  height: 50px;
  width: 100%;
  padding: 1rem;
  background: gold;
  justify-content: center;
  color: #fff;
`;

export const BackWrapper = styled.div`
  background: #242b30;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;

  border-radius: 12px;
`;
