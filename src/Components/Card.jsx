import React from 'react';
import PropTypes from 'prop-types';
import styles from './Card.module.css';

function Card({
  picture, name, description, onAbout,
}) {
  return (
    <div className={styles.Card}>
      <img src={picture} alt="" />
      <div className={styles.CardContent}>
        <h3 className={styles.CardHeading}>{name}</h3>
        <p className="CardDescription">{description}</p>

        <button type="button" onClick={onAbout}>en savoir plus</button>
      </div>
    </div>
  );
}

Card.propTypes = {
  picture: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  onAbout: PropTypes.func.isRequired,
};

export default Card;
