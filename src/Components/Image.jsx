/* eslint-disable import/no-unresolved */
import React from 'react';
import PropTypes from 'prop-types';
import styles from './Image.module.css';

function Image({ url }) {
  return (
    <img className={styles.Image} src={url} alt="product-img" />
  );
}

Image.propTypes = {
  url: PropTypes.string.isRequired,
};

export default Image;
