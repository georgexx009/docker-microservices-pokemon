import axios from 'axios';

export const getPokemonsData = async () => {
  const res = await axios.get('http://localhost:3000/pokemons');
  const pokeData = res.data;
  return pokeData;
};
