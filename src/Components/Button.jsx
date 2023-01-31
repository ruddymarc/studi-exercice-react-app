/* eslint-disable import/no-unresolved */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/macro';

const ButtonStyled = styled.button`
  padding: 1rem 2rem;
  margin: 4rem;
  border: 0;
  border-radius: 6px;
  font-size: 0.8rem;
  font-weight: bold;
  text-transform: uppercase;
  background-color: ${(props) => props.theme.brand};
  border: thin solid ${(props) => props.theme.neutral0};
  color: ${(props) => props.theme.neutral0};
`;

function Button({ label, onClick }) {
  return (
    <ButtonStyled label={label} onClick={onClick}>
      { label }
    </ButtonStyled>
  );
}

Button.defaultProps = {
  label: 'Click me',
  onClick: null,
};

Button.propTypes = {
  label: PropTypes.string,
  onClick: PropTypes.func,
};

export default Button;
