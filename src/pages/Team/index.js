import React from 'react';

import { Link } from 'react-tiger-transition';

import Layout from '@/components/Layout';
// import * as S from './styles';

function Team() {
  return (
    <Layout>
      <h1 style={{ color: 'var(--color)' }}>Team Page</h1>
      <Link
        style={{ color: 'var(--color)' }}
        to="/contact"
        transition="flip-left"
      >
        Ir para a contato
      </Link>
    </Layout>
  );
}

export default Team;
