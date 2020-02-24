import React from 'react';

import ReactTypingEffect from 'react-typing-effect';

import { useSpring } from 'react-spring';

import HeroImage from '@/assets/images/img8.jpg';

import * as S from './styles';

const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2];
const trans1 = (x, y) => `translate3d(${x / 10}px,${y / 10}px,0)`;

export default function Hero() {
  const [props, setProps] = useSpring(() => ({
    xy: [0, 0],
    config: { mass: 10, tension: 550, friction: 140 },
  }));

  return (
    <S.Container
      onMouseMove={({ clientX: x, clientY: y }) => setProps({ xy: calc(x, y) })}
    >
      <S.Card style={{ transform: props.xy.interpolate(trans1) }}>
        <S.HeroImg src={HeroImage} alt="Hero Image" />
      </S.Card>
      <S.TypeContainer>
        <S.TypeContent>
          <ReactTypingEffect
            staticText="Servimos..."
            eraseDelay={2500}
            typingDelay={1500}
            speed={75}
            text={[' Festas', ' Casamentos', ' Eventos']}
          />
        </S.TypeContent>
      </S.TypeContainer>
    </S.Container>
  );
}
