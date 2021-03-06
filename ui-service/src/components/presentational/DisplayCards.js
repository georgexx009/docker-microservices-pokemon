import React from 'react';
import Card from '../presentational/Card';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

// displays cards with info

const CardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const DisplayCards = ({ pokemonsData }) => {
  const filter = useSelector(state => state.filterSearch);

  return (
    <CardsContainer>
      {pokemonsData
        .filter(pokemon => {
          if (pokemon.name.startsWith(filter)) {
            return pokemon;
          }
        })
        .map((pokemon, i) => (
          <Card key={i} id={pokemon.id} name={pokemon.name} />
        ))}
    </CardsContainer>
  );
};

export default DisplayCards;
