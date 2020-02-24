import React from 'react';

import Layout from '@/components/Layout';
import RpgCard from '@/components/RpgCard';
import RpgWrapper from '@/components/RpgWrapper';
import Hero from '@/components/Hero';

import team from '@/utils/team';

// import * as S from './styles';

function Home() {
  return (
    <>
      <Hero />

      <Layout>
        <RpgWrapper>
          {team.map((member) => (
            <RpgCard {...member} key={member.id} />
          ))}
        </RpgWrapper>
      </Layout>
    </>
  );
}

export default Home;
