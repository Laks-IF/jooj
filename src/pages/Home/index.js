import React from 'react';

import { Link } from 'react-tiger-transition';
// import * as S from './styles';

function Home() {
  return (
    <>
      <h1>Home Page</h1>
      <Link to="/about" transition="glide-left">
        Ir para a About
      </Link>
    </>
  );
}

export default Home;
