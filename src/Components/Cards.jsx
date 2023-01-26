/* eslint-disable import/no-unresolved */
import React, { useState } from 'react';
import Card from './Card';
import CardDetail from './CardDetail';
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
  // Show or hide CardDetail
  const [showModal, setShowModal] = useState(false);
  const [activeCard, setActiveCard] = useState(cards[0]);

  const closeAboutModal = () => setShowModal(false);
  const showAboutModal = (cardItem) => {
    setActiveCard(cardItem);
    setShowModal(true);
  };

  return (
    <div className={styles.Wrapper}>
      { showModal && <CardDetail card={activeCard} onClose={closeAboutModal} /> }
      <div className={styles.Cards}>
        { cards.map((card) => (
          <Card
            key={card.id}
            picture={card.pucture}
            name={card.name}
            description={card.description}
            onAbort={() => showAboutModal(card)}
          />
        )) }
      </div>
    </div>
  );
}

export default Cards;
