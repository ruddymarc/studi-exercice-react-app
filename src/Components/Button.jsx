/* eslint-disable import/no-unresolved */
import React from 'react';
import styled from 'styled-components/macro';

const ButtonStyled = styled.button`
  padding: 1rem 2rem;
  margin: 4rem;
  background-color: #ff4757;
  color: #ffffff;
  border: 0;
  border-radius: 6px;
  font-size: 0.8rem;
  font-weight: bold;
  text-transform: uppercase;
`;

function Button() {
  return (
    <ButtonStyled>
      Click me
    </ButtonStyled>
  );
}

export default Button;
