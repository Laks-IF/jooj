import React from 'react';

import Layout from '@/components/Layout';
import FlipCard from '@/components/FlipCard';
import Hero from '@/components/Hero';
// import * as S from './styles';

function Home() {
  return (
    <Layout>
      <Hero />
      <FlipCard />
    </Layout>
  );
}

export default Home;
