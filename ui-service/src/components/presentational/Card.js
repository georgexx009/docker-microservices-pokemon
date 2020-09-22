import React from 'react';
import styled from 'styled-components';
import Button from './Button';

const CardContainer = styled.div`
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2), 0 6px 20px rgba(0, 0, 0, 0.19);
  padding: 10px 20px;
  margin: 20px;
  flex: 0 1 350px;
`;
// flex: grow shrink basis

const DataContainer = styled.div`
  display: flex;
  align-items: center;

  h4 {
    margin: 0 auto;
  }
`;

const BtnContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const Card = ({ name, id }) => {
  return (
    <CardContainer>
      <DataContainer>
        <p>{id}</p>
        <h4>{name}</h4>
      </DataContainer>
      <BtnContainer>
        <Button>View</Button>
      </BtnContainer>
    </CardContainer>
  );
};

export default Card;
