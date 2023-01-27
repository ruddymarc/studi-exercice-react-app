/* eslint-disable import/no-unresolved */
import React, { useState } from 'react';
import Picture1 from './capture-studi-defi-1.png';
import Picture2 from './capture-studi-defi-2.png';
import Picture3 from './capture-studi-defi-3.png';
import Image from './Image';
import Card from './Card';
import Modal from './Modal';
import styles from './Cards.module.css';

function Cards() {
  const [cards] = useState([
    {
      id: Math.random(),
      picture: Picture1,
      name: 'Mon premier',
      description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit...',
    },
    {
      id: Math.random(),
      picture: Picture2,
      name: 'Mon second',
      description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit...',
    },
    {
      id: Math.random(),
      picture: Picture3,
      name: 'Mon troisième',
      description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit...',
    },
  ]);
  // Show or hide Modal
  const [showModal, setShowModal] = useState(false);
  const [activeCard, setActiveCard] = useState(cards.at(0));

  const closeAboutModal = () => setShowModal(false);
  const showAboutModal = (cardItem) => {
    setActiveCard(cardItem);
    setShowModal(true);
  };

  return (
    <div className={styles.Wrapper}>
      { showModal && (
        <Modal title={activeCard.name} onClose={closeAboutModal}>
          <Image url={activeCard.picture} sizing="FullScreen" />
        </Modal>
      ) }
      <div className={styles.Cards}>
        { cards.map((card) => (
          <Card
            key={card.id}
            picture={card.picture}
            name={card.name}
            description={card.description}
            onAbout={() => showAboutModal(card)}
          />
        )) }
      </div>
    </div>
  );
}

export default Cards;
