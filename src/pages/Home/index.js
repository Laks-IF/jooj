import React from 'react';

import { Link } from 'react-router-dom';
// import * as S from './styles';

function Home() {
  return (
    <>
      <h1>Home Page</h1>
      <Link to="/about">Ir para a About</Link>
    </>
  );
}

export default Home;
