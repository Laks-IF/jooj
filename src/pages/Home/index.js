import React from 'react';

import { Link } from 'react-tiger-transition';

import Layout from '@/components/Layout';
// import * as S from './styles';

function Home() {
  return (
    <Layout>
      <h1 style={{ color: '#fff' }}>Home Page</h1>
      <Link style={{ color: '#fff' }} to="/team" transition="glide-left">
        Ir a team page
      </Link>
    </Layout>
  );
}

export default Home;
