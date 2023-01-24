/* eslint-disable import/no-unresolved */
import React from 'react';
import './App.css';

function App() {
  const currentDate = new Date();
  const user = {
    city: 'Montpellier',
  };
  const userTheme = 'dark'; // light Ou dark

  return (
    <div className={`App ${userTheme}-container`}>
      <h1>
        Vous être connecter depuis
        {' '}
        {user.city}
        , nous somme le
        {' '}
        {currentDate.toLocaleString()}
      </h1>
      <footer>
        this react app is made with ❤️ by Ruddy Marc
      </footer>
    </div>
  );
}

export default App;
