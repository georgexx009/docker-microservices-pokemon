import React from 'react';
import styled from 'styled-components';

const BtnStyled = styled.button`
  padding: 10px 20px;

  border: none;
  border-radius: 5px;
  background-color: #3b4252;
  color: white;
`;

const Button = ({ children }) => <BtnStyled>{children}</BtnStyled>;

export default Button;
