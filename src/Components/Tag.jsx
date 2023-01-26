/* eslint-disable import/no-unresolved */
/* eslint-disable react/prop-types */
import React from 'react';
import styles from './Tag.module.css';

function Tag({
  label, color, backgroundColor, borderRadius,
}) {
  return (
    <span
      className={styles.Tag}
      style={{ color, backgroundColor, borderRadius }}
    >
      <svg
        className={styles.TagIcon}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 6v6m0 0v6m0-6h6m-6 0H6"
        />
      </svg>
      { label }
    </span>
  );
}

Tag.defaultProps = {
  label: 'Click me',
  color: 'hsl(0, 0%, 100%)',
  backgroundColor: 'hsl(180, 50%, 50%)',
  borderRadius: null,
};

export default Tag;
