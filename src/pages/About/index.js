import React, { useState, useEffect } from 'react';

import { Link } from 'react-tiger-transition';

function About() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    setMessage('About page!');
  }, []);

  return (
    <>
      <h1>{message}</h1>
      <Link to="/" transition="glide-right">
        To home page
      </Link>
    </>
  );
}

export default About;
