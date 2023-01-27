/* eslint-disable import/no-unresolved */
import React from 'react';
import PropTypes from 'prop-types';
import styles from './Modal.module.css';

function Modal({ title, children, onClose }) {
  return (
    <div className={styles.Modal}>
      <button
        type="button"
        className={styles.Close_Modal}
        onClick={onClose}
      >
        &times;
      </button>
      <h2 className={styles.Modal_Heading}>{title}</h2>
      <div className={styles.Modal_Content}>
        {children}
      </div>
    </div>
  );
}

Modal.defaultProps = {
  children: null,
};

Modal.propTypes = {
  title: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node,
};

export default Modal;
