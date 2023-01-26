/* eslint-disable import/no-unresolved */
import React from 'react';
import PropTypes from 'prop-types';
import styles from './CardDetail.module.css';

function CardDetail({ card, onClose }) {
  return (
    <div className={styles.CardDetail}>
      <button
        type="button"
        className={styles.Close_CardDetail}
        onClick={onClose}
      >
        &times;
      </button>
      <h2 className={styles.CardDetail_Heading}>{card.name}</h2>
      <div className={styles.CardDetail_Content}>
        <img src={card.picture} alt="card-img" />
        {card.description}
      </div>
    </div>
  );
}

CardDetail.propTypes = {
  card: PropTypes.shape({
    picture: PropTypes.string,
    name: PropTypes.string,
    description: PropTypes.string,
  }).isRequired,
  onClose: PropTypes.func.isRequired,
};

export default CardDetail;
