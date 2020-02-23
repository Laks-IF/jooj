import React from 'react';

import Layout from '@/components/Layout';
import FlipCard from '@/components/FlipCard';
import FullView from '@/components/FullView';
import Hero from '@/components/Hero';

// import * as S from './styles';

function Home() {
  return (
    <>
      <Hero />
      <Layout>
        <FlipCard />
        <FullView />
      </Layout>
    </>
  );
}

export default Home;
