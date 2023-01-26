/* eslint-disable import/no-unresolved */
import React, { useState } from 'react';
import styles from './Cards.module.css';

const Picture = 'https://via.placeholder.com/350';

function Cards() {
  const [cards] = useState([
    {
      id: Math.random(),
      pucture: Picture,
      name: 'Mon premier',
      description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit...',
    },
    {
      id: Math.random(),
      pucture: Picture,
      name: 'Mon second',
      description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit...',
    },
    {
      id: Math.random(),
      pucture: Picture,
      name: 'Mon troisième',
      description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit...',
    },
  ]);

  return (
    <div className={styles.Cards}>
      { cards.map((card) => (
        <div className="Card">
          <img src={card.pucture} alt="card-img" />
          <div className="CardContainer">
            <h3 className="CardHeading">{card.name}</h3>
            <p className="CardDescription">
              {card.description}
            </p>
            <button type="button">en savoir plus</button>
          </div>
        </div>
      )) }
    </div>
  );
}

export default Cards;
