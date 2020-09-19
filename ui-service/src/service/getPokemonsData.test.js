import { getPokemonsData } from './getPokemonsData';
import axios from 'axios';

jest.mock('axios');

const serverRes = {
  status: 200,
  data: [
    {
      name: 'name',
    },
  ],
};

describe('get pokemons data service', () => {
  axios.get.mockImplementationOnce(() => Promise.resolve(serverRes));

  it('returns only the data without call respond', async () => {
    const result = await getPokemonsData();
    expect(result).toEqual(expect.arrayContaining(serverRes.data));
  });
});
