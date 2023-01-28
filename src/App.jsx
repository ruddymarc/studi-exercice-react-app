/* eslint-disable import/no-unresolved */
import React from 'react';
import Button from './Components/Button';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="Page-wrapper">
        <Button />
        <Button isLight />
      </div>

      <footer>
        this react app is made with ❤️ by Ruddy Marc
      </footer>
    </div>
  );
}

export default App;
