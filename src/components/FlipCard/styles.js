import styled from 'styled-components';
import { animated as a } from 'react-spring';

export const CardWrapper = styled.div`
  position: relative;
`;

export const Card = styled(a.div)`
  position: absolute;
  width: 100%;
  height: 50ch;
  cursor: pointer;
  will-change: transform, opacity;
  border-radius: 12px;
  background-size: cover;
`;

export const CardContent = styled.div`
  width: 100%;
  height: 100%;
  background: lightgreen;
  display: flex;
  justify-content: center;
  align-items: center;
`;
