import React, { useState, useEffect } from 'react';

import { getPokemonsData } from '../../service/getPokemonsData';

const CardsContainer = ({ render }) => {
  const [pokemonsData, setPokemonsData] = useState([]);

  useEffect(() => {
    (async () => {
      const res = await getPokemonsData();
      setPokemonsData(res);
    })();
  }, []);

  return <>{render(pokemonsData)}</>;
};

export default CardsContainer;
