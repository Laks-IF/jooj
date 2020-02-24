import styled from 'styled-components';
import { animated as a } from 'react-spring';

export const CardWrapper = styled.div`
  position: relative;
  height: ${(props) => props.height}px;
`;

export const Card = styled(a.div)`
  position: absolute;
  width: 100%;
  cursor: pointer;
  will-change: transform, opacity;
  border-radius: 12px;
  background-size: cover;
  height: 100%;
`;
