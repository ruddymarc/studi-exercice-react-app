/* eslint-disable import/no-unresolved */
import React from 'react';
import Tag from './Components/Tag';
import Tabs from './Components/Tabs';
import Toasts from './Components/Toasts';
import './App.css';

function App() {
  return (
    <div className="App">
      <Tag label="Twich" backgroundColor="rgb(127, 127, 255)" />
      <Tag label="Youtube" backgroundColor="hsl(180, 50%, 50%)" />
      <Tag label="instagram" backgroundColor="#FECADA" color="rgba(0, 0, 0, 0.7)" />

      <Tabs />

      <Toasts />
      <footer>
        this react app is made with ❤️ by Ruddy Marc
      </footer>
    </div>
  );
}

export default App;
