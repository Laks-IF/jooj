import React from 'react';

import { Link } from 'react-tiger-transition';

import Layout from '@/components/Layout';
// import * as S from './styles';

function Contact() {
  return (
    <Layout>
      <h1 style={{ color: '#fff' }}>Contact Page</h1>
      <Link style={{ color: '#fff' }} to="/about" transition="flip-left">
        Ir para a About
      </Link>
    </Layout>
  );
}

export default Contact;
