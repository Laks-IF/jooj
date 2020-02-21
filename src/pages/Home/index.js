import React from 'react';

import { Link } from 'react-tiger-transition';

import Layout from '@/components/Layout';
// import * as S from './styles';

function Home() {
  return (
    <Layout>
      <h1>Home Page</h1>
      <Link to="/about" transition="glide-left">
        Ir para a About
      </Link>
    </Layout>
  );
}

export default Home;
