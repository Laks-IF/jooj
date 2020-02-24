import React from 'react';

import getNumber from '@/utils/getRandomInt';

import FlipCard from '../FlipCard';

import * as S from './styles';

function RpgCard({ name, job, description, photo }) {
  return (
    <S.CardContainer>
      <S.PhotoWrapper
        background={`rgb(${getNumber(220, 255)}, ${getNumber(100, 160)}, 0)`}
      >
        <S.PhotoContainer>
          <img src={photo} alt={name} />
        </S.PhotoContainer>
      </S.PhotoWrapper>
      <S.CardContent>
        <S.CardName>{name}</S.CardName>
        <S.CardJob>{job}</S.CardJob>
      </S.CardContent>
      <S.CardFooter>VER PERFIL</S.CardFooter>
    </S.CardContainer>
  );
}
function BackWrapper() {
  return <S.BackWrapper></S.BackWrapper>;
}
export default ({ backface, ...rest }) => (
  <FlipCard height={375} front={<BackWrapper />} back={<RpgCard {...rest} />} />
);
