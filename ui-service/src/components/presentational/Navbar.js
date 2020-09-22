import React, { useState } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { updateFilter } from '../../actions';

const NavbarTitle = styled.span`
  margin-right: 50px;
  font-size: 1.5em;
`;

const StyledNavbar = styled.div`
  padding: 20px 30px;
  background-color: #3b4252;
  color: white;
`;

const StyledInput = styled.input`
  border: none;
  padding: 5px 15px;
  width: 200px;
  border-radius: 15px;
  font-size: 1.3em;
`;

const Navbar = () => {
  const dispatch = useDispatch();
  const [filter, setFilter] = useState('');

  const handleChange = e => {
    e.preventDefault();
    const { value } = e.target;
    setFilter(value);
    dispatch(updateFilter(value));
  };

  return (
    <StyledNavbar>
      <NavbarTitle>Poke Service</NavbarTitle>
      <StyledInput
        placeholder="search"
        value={filter}
        onChange={handleChange}
      />
    </StyledNavbar>
  );
};

export default Navbar;
