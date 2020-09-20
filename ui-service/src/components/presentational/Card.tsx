import React from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2), 0 6px 20px rgba(0, 0, 0, 0.19);
  padding: 10px 20px;
  margin: 20px;
  flex: 0 1 350px;
`;
// flex: grow shrink basis

type CardProps = {
  name: string;
  id: number;
};

const Card = ({ name, id }: CardProps) => {
  console.log('render card tsx');
  return (
    <CardContainer>
      <h4>{name}</h4>
      <p>{id}</p>
    </CardContainer>
  );
};

export default Card;
