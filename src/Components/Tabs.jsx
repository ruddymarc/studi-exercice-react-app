/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable import/no-unresolved */
import React, { useState } from 'react';
import styles from './Tabs.module.css';

import ESC from './istockphoto-534129348-1024x1024.jpg';

function Tabs() {
  const [tabs] = useState([
    {
      id: Math.random(),
      label: 'Description du produit',
      content: (
        <div>
          <p>
            {
            `T-Motor revient avec une version actualisée de son ESC 4 en 1, cette fois-ci avec 
            un système de dissipateur de chaleur pour permettre des pointes jusqu'à 75A.`
            }
          </p>
        </div>
      ),
    },
    {
      id: Math.random(),
      label: 'Image',
      content: (
        <div>
          <img src={ESC} alt="ESC 4 en 1" />
        </div>
      ),
    },
    {
      id: Math.random(),
      label: 'Commentaires',
      content: (
        <div>
          <ul>
            <li>Super produit !</li>
            <li>Livraison rapide, belle finition.</li>
            <li>Une marque qui a fait ses preuves.</li>
          </ul>
        </div>
      ),
    },
  ]);
  const [activeTab, setActiveTab] = useState(tabs[0]);
  const handleTabClick = (tab) => setActiveTab(tab);

  return (
    <div className={styles.Wrapper}>
      <ul className={styles.Tabs}>
        { tabs.map((tab) => (
          <li
            key={tab.id}
            onClick={() => handleTabClick(tab)}
            className={[styles.Tab, tab.id === activeTab.id ? styles.ActiveTab : null].join(' ')}
          >
            {tab.label}
          </li>
        )) }
      </ul>
      <div className={styles.ActiveTabContent}>
        {activeTab.content}
      </div>
    </div>
  );
}

export default Tabs;
