/* eslint-disable import/no-unresolved */
import React from 'react';
import PropTypes from 'prop-types';
import styles from './Image.module.css';

function Image({ url, sizing, rounded }) {
  const classes = {
    name: styles.Image,
    size: styles[sizing],
    shape: rounded ? styles.Rounded : null,
  };

  return (
    <img src={url} alt="card-img" className={Object.values(classes).join(' ')} />
  );
}

Image.defaultProps = {
  sizing: null,
  rounded: false,
};

Image.propTypes = {
  url: PropTypes.string.isRequired,
  sizing: PropTypes.oneOf([null, 'FullScreen', 'Medium', 'Small']),
  rounded: PropTypes.bool,
};

export default Image;
