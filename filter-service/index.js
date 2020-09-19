const express = require('express');
const app = express();
const axios = require('axios');
const filterData = require('./filterData');
const setHeaders = require('./setHeaders');

// set headers for cross origin policy
app.use(setHeaders);

app.get('/', (req, res) => {
  res.send('Hello from filter servide');
});

app.get('/pokemons', async (req, res) => {
  const pokemonsData = await axios.get(
    'https://pokeapi.co/api/v2/pokemon?limit=151'
  );

  const filteredData = pokemonsData.data.results.map(pokemon => {
    const urlDivided = pokemon.url.split('/');
    return {
      id: urlDivided[6],
      name: pokemon.name,
    };
  });

  res.send(filteredData);
});

app.get('/pokemons/main', async (req, res) => {
  const pokemonsMainData = await Promise.all(
    [1, 2, 3].map(async id => {
      const pokemonData = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${id}`
      );
      return filterData(pokemonData);
    })
  );
  res.send(pokemonsMainData);
});

app.get('/pokemons/:name', async (req, res) => {
  const pokemonData = await axios.get(
    `https://pokeapi.co/api/v2/pokemon/${req.params.name}`
  );
  const filteredData = filterData(pokemonData);
  res.send(filteredData);
});

app.listen(3000, () => {
  console.log('app running');
});
