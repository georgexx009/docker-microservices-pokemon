import React from 'react';
import { shallow } from 'enzyme';
import CardsContainer from './CardsContainer';
import DisplayCards from '../presentational/DisplayCards';
import axios from 'axios';

const pokemonsDataTest = [
  {
    name: 'charmander',
    id: 4,
  },
  {
    name: 'pikachu',
    id: 10,
  },
];

jest.mock('axios');

describe('Cards Container', () => {
  axios.get.mockImplementationOnce(() => Promise.resolve(pokemonsDataTest));

  it('render the display cards component', () => {
    const wrapper = shallow(
      <CardsContainer render={data => <DisplayCards pokemonsData={data} />} />
    );
    const result = wrapper.find(DisplayCards).length;
    expect(result).toEqual(1);
  });
});
