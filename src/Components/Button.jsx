/* eslint-disable react/prop-types */
/* eslint-disable import/no-unresolved */
import React from 'react';
import styled from 'styled-components/macro';

const ButtonStyled = styled.button`
  padding: 1rem 2rem;
  margin: 4rem;
  color: #ffffff;
  border: 0;
  border-radius: 6px;
  font-size: 0.8rem;
  font-weight: bold;
  text-transform: uppercase;
  background-color: ${(props) => props.backgroundColor || 'gray'};
`;

function Button({ backgroundColor }) {
  return (
    <ButtonStyled backgroundColor={backgroundColor}>
      Click me
    </ButtonStyled>
  );
}

export default Button;
