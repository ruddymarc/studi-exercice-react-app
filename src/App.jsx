/* eslint-disable import/no-unresolved */
import React from 'react';
import Albums from './Components/Albums';
import './App.css';

function App() {
  return (
    <div className="App">
      <ul className="Nav inline sticky">
        <li>Lien 1</li>
        <li>Lien 2</li>
        <li style={{ marginLeft: 'auto' }}>Lien 3</li>
      </ul>

      <Albums />

      <footer>
        this react app is made with ❤️ by Ruddy Marc
      </footer>
    </div>
  );
}

export default App;
