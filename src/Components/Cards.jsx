/* eslint-disable import/no-unresolved */
import React, { useState } from 'react';
import Card from './Card';
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
        <Card
          key={card.id}
          picture={card.pucture}
          name={card.name}
          description={card.description}
          onAbort={() => {}}
        />
      )) }
    </div>
  );
}

export default Cards;
