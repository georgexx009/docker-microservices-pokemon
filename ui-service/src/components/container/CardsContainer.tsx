import React, { useState, useEffect } from 'react';

import { getPokemonsData } from '../../service/getPokemonsData';

type CardsContainerProps = {
  render: any;
};

const CardsContainer = ({ render }: CardsContainerProps) => {
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
