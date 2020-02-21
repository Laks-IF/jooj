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
      <h1>{message}</h1>
      <Link to="/" transition="glide-right">
        To home page
      </Link>
    </Layout>
  );
}

export default About;
