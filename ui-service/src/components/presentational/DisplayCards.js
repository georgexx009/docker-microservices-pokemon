import React from 'react';
import Card from '../presentational/Card';
import styled from 'styled-components';

// displays cards with info

const CardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const DisplayCards = ({ pokemonsData }) => (
  <CardsContainer>
    {pokemonsData.map((pokemon, i) => (
      <Card key={i} id={pokemon.id} name={pokemon.name} />
    ))}
  </CardsContainer>
);

export default DisplayCards;
