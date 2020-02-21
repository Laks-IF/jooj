import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

export default function Footer() {
  const history = useHistory();
  const [route] = useState(null);
  useEffect(() => {
    history.listen((currentRoute) => console.log(currentRoute));
  }, []);
  return (
    <>
      <h1>Header componenta!</h1>
      <h1>{route}</h1>
    </>
  );
}
