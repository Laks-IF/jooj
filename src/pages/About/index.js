import React, { useState, useEffect } from 'react';

import { Link, glide } from 'react-tiger-transition';

function About() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    setMessage('About page!');
    glide({
      name: 'glide-right',
      direction: 'right',
    });
  }, []);

  return (
    <>
      <h1>{message}</h1>
      <Link to="/" transition="glide-right" />
    </>
  );
}

export default About;
