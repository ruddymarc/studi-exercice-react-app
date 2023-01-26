/* eslint-disable import/no-unresolved */
import React from 'react';
import PropTypes from 'prop-types';
import styles from './Button.module.css';

const types = [null, 'Info', 'Success', 'Warning', 'Danger'];

function Button({
  label, onClick, type, rounded, hoverable,
}) {
  const classes = {
    name: styles.Button,
    type: styles[type],
    shape: rounded ? styles.Rounded : null,
    effect: hoverable ? styles.Hoverable : null,
  };

  return (
    <button
      id={type}
      type="button"
      className={Object.values(classes).join(' ')}
      onClick={onClick}
    >
      {label}
    </button>
  );
}

Button.defaultProps = {
  type: types[0],
  rounded: false,
  hoverable: false,
};

Button.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  type: PropTypes.oneOf(types),
  rounded: PropTypes.bool,
  hoverable: PropTypes.bool,
};

export default Button;
