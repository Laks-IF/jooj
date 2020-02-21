import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

export default function Footer() {
  const history = useHistory();
  const [route, setRoute] = useState(null);
  useEffect(() => {
    history.listen((currentRoute) => console.log(currentRoute));
  }, []);
  return (
    <>
      <h1>Header component!</h1>
      <h1>{route}</h1>
    </>
  );
}
