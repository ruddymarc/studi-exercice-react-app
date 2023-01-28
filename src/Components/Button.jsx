/* eslint-disable react/prop-types */
/* eslint-disable import/no-unresolved */
import React from 'react';
import styled from 'styled-components/macro';

const ButtonStyled = styled.button`
  padding: 1rem 2rem;
  margin: 4rem;
  border: 0;
  border-radius: 6px;
  font-size: 0.8rem;
  font-weight: bold;
  text-transform: uppercase;
  background-color: ${(props) => (props.isLight ? '#E5E5E5' : '#404040')};
  color: ${(props) => (props.isLight ? '#404040' : 'white')};
`;

function Button({ isLight }) {
  return (
    <ButtonStyled isLight={isLight}>
      Click me
    </ButtonStyled>
  );
}

export default Button;
