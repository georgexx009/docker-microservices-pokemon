import React from 'react';
import { shallow } from 'enzyme';
import DisplayCards from './DisplayCards';
import Card from './Card';

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

describe('DisplayCards Component', () => {
  it('renders the cards pass as props', () => {
    const wrapper = shallow(<DisplayCards pokemonsData={pokemonsDataTest} />);
    const result = wrapper.find(Card).length;
    expect(result).toBeGreaterThan(1);
  });

  it('renders the charmander card', () => {
    const wrapper = shallow(<DisplayCards pokemonsData={pokemonsDataTest} />);
    const result = wrapper.contains(<Card name="charmander" id={4} />);
    expect(result).toEqual(true);
  });
});
