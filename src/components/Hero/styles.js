import styled, { keyframes } from 'styled-components';
import { animated as a } from 'react-spring';

export const Container = styled.div`
  margin-top: 70px;
  width: 100%;
  height: 450px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
`;
export const Card = styled(a.div)`
  position: absolute;
  will-change: transform;
  width: 100%;
  height: 100%;
`;
export const HeroImg = styled.img`
  position: absolute;
  width: 130%;
  height: 200%;
  object-fit: cover;
  object-position: center;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const TypeContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.1);
  padding: 1rem 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const TypeContent = styled.div`
  width: 100%;
  max-width: 960px;
  span {
    color: #fff;
    font-size: 1.75em;
    text-align: center;
    @media screen and (max-width: 650px) {
      font-size: 1.5em;
    }
  }
`;
