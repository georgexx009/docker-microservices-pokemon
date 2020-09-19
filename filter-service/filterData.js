const filterData = pokemonData => ({
  name: pokemonData.data.name,
  weight: pokemonData.data.weight,
  types: pokemonData.data.types,
  abilities: pokemonData.data.abilities,
});

module.exports = filterData;
