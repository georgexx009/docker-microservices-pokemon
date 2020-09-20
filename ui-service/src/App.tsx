import React from 'react';
import CardsContainer from './components/container/CardsContainer';
import styled from 'styled-components';
import DisplayCards from './components/presentational/DisplayCards';

const AppContainer = styled.div`
  font-family: 'Montserrat', 'Work Sans', -apple-system, BlinkMacSystemFont,
    'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans',
    'Droid Sans', 'Helvetica Neue', sans-serif;
`;

type pokemonData = {
  id: number;
  name: string;
};

const App = () => {
  return (
    <AppContainer>
      <CardsContainer
        render={(pokemonsData: pokemonData[]) => (
          <DisplayCards pokemonsData={pokemonsData} />
        )}
      />
    </AppContainer>
  );
};

export default App;
