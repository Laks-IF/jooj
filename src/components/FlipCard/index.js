import React, { useState } from 'react';
import { useSpring } from 'react-spring';
import * as S from './styles';

export default function FlipCard() {
  const [flipped, setFlipped] = useState(false);
  const { transform, opacity } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
    config: { mass: 5, tension: 500, friction: 80 },
  });

  return (
    <S.CardWrapper onClick={() => setFlipped((state) => !state)}>
      <S.Card
        url="https://images.unsplash.com/photo-1544511916-0148ccdeb877?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1901&q=80i&auto=format&fit=crop"
        style={{ opacity: opacity.interpolate((o) => 1 - o), transform }}
      >
        <S.CardContent>A</S.CardContent>
      </S.Card>
      <S.Card
        url="https://images.unsplash.com/photo-1540206395-68808572332f?ixlib=rb-1.2.1&w=1181&q=80&auto=format&fit=crop"
        style={{
          opacity,
          transform: transform.interpolate((t) => `${t} rotateX(180deg)`),
        }}
      >
        <S.CardContent>B</S.CardContent>
      </S.Card>
    </S.CardWrapper>
  );
}
