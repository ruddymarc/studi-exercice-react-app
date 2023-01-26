/* eslint-disable import/no-unresolved */
import React from 'react';
import PropTypes from 'prop-types';
import styles from './Toast.module.css';

const alertTypes = ['Info', 'Success', 'Warning', 'Danger'];

function Toast({ label, alertType, onClose }) {
  return (
    <p className={[styles.Toast, styles[alertType]].join(' ')}>
      {label}
      <button type="button" className={styles.CloseToast} onClick={() => { onClose(); }}>
        &times;
      </button>
    </p>
  );
}

Toast.defaultProps = {
  alertType: alertTypes[0],
};

Toast.propTypes = {
  label: PropTypes.string.isRequired,
  alertType: PropTypes.oneOf(alertTypes),
  onClose: PropTypes.func.isRequired,
};

export default Toast;
