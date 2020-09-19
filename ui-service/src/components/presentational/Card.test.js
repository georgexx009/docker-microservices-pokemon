import React from 'react';
import { shallow } from 'enzyme';
import Card from './Card';

describe('Card component', () => {
  it('props are correctly passed', () => {
    const wrapper = shallow(<Card name="charmander" id="4" />);
    expect(wrapper.find('h4').text()).toEqual('charmander');
  });
});
