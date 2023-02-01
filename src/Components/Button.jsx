/* eslint-disable import/no-unresolved */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/macro';

const ButtonStyled = styled.button`
  cursor: pointer;
  padding: 1rem 2rem;
  margin: 1rem;
  font-weight: bold;
  text-transform: uppercase;
  font-size: ${(props) => props.theme.fontSize};
  background-color: ${(props) => props.theme.brand};
  color: ${(props) => props.theme.neutral0};
  border-radius: ${(props) => props.theme.rounded};
  border: ${(props) => props.theme.border ?? ['thin', 'solid', props.theme.neutral0].join(' ')};
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
