import React from 'react';
//import Card from '../presentational/Card';
import styled from 'styled-components';
import Card from './Card';

// displays cards with info

const CardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

type DisplayCardsProps = {
  pokemonsData: any;
};

type pokemonType = {
  id: number;
  name: string;
};

const DisplayCards = ({ pokemonsData }: DisplayCardsProps) => (
  <CardsContainer>
    {pokemonsData.map((pokemon: pokemonType, i: number) => (
      <Card key={i} id={pokemon.id} name={pokemon.name} />
    ))}
  </CardsContainer>
);

export default DisplayCards;
