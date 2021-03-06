import React from 'react';
import CardsContainer from './components/container/CardsContainer';
import styled from 'styled-components';
import DisplayCards from './components/presentational/DisplayCards';
import Navbar from './components/presentational/Navbar';
import GlobalStyle from './globalStyle';

const AppContainer = styled.div`
  font-family: 'Montserrat', 'Work Sans', -apple-system, BlinkMacSystemFont,
    'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans',
    'Droid Sans', 'Helvetica Neue', sans-serif;
`;

const App = () => {
  return (
    <AppContainer>
      <GlobalStyle />
      <Navbar />
      <CardsContainer
        render={pokemonsData => <DisplayCards pokemonsData={pokemonsData} />}
      />
    </AppContainer>
  );
};

export default App;
