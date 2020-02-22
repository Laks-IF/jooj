import React, { useState, useEffect } from 'react';

import { Link } from 'react-tiger-transition';

import Layout from '@/components/Layout';

function About() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    setMessage('About page!');
  }, []);

  return (
    <Layout>
      <h1 style={{ color: '#fff' }}>{message}</h1>
      <Link style={{ color: '#fff' }} to="/" transition="flip-left">
        To home page
      </Link>
    </Layout>
  );
}

export default About;
