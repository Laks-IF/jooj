import React from 'react';

import Toast from '@/utils/toast';

import * as S from './styles';

function Home() {
  Toast.success('Hello, dev! How are you?');
  return <h1>Funcinou sim</h1>;
}

export default Home;
