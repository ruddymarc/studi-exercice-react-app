/* eslint-disable no-nested-ternary */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable import/no-unresolved */
import React, { useState, useEffect } from 'react';

function BuyQuick() {
  const [itemPurchaed, setItemPurchaed] = useState(false);
  const [timeLeft, setTimeLeft] = useState(10);
  const handleBuy = () => setItemPurchaed(true);

  useEffect(() => {
    document.title = 'OFFRE PROMOTIONNELLE';

    // Mise en place du timer pour l'offre promotionnelle
    const timer = setInterval(() => {
      setTimeLeft(timeLeft - 1);
    }, (1000));

    // Si fin de l'offre promotionnelle
    if (timeLeft <= 0) {
      document.title = "Fin de l'offre promotionnelle";
    }

    return () => {
      // Nettoyage du timer lors de la phase de démontage
      clearInterval(timer);
    };

    // Seulement si l'état local timeLeft à muter
  }, [timeLeft]);

  return (
    <div className="App-main">
      { itemPurchaed ? ( // Produit acheter
        <>
          <h1>Bravo vous venez d'acheter:</h1>
          <h3>
            <span role="img" aria-label="canard"> </span>
            Magnifique canard de bain
          </h3>
        </>
      ) : timeLeft > 0 ? ( // Promotion en cours
        <>
          <h1>
            <span role="img" aria-label="lightning"> </span>
            Offre promotionnelle limitée !
            <span role="img" aria-label="lightning"> </span>
          </h1>
          <h2>
            Vite, il vous reste
            {' '}
            <strong>
              {timeLeft}
              s
            </strong>
            {' '}
            pour acheter
          </h2>
          <h3>
            <button type="button" className="App-button" onClick={handleBuy}>
              Acheter
            </button>
          </h3>
        </>
      ) : ( // Promotion terminert
        <h1>
          Fin de l'offre promotionnelle
          <span role="img" aria-label="sad"> </span>
        </h1>
      ) }
    </div>
  );
}

export default BuyQuick;
