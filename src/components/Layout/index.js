import React from 'react';

import * as S from './styles';

export default function Layout({ children }) {
  return (
    <S.LayoutWrapper>
      <S.LayoutContainer>{children}</S.LayoutContainer>
    </S.LayoutWrapper>
  );
}
