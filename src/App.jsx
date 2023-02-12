/* eslint-disable import/no-unresolved */
import React from 'react';
import Shop from './Container/Shop';
import Todo from './Container/Todo';
import './App.css';

function App() {
  return (
    <div className="App">
      <Shop />
      <Todo />

      <footer>
        this react app is made with ❤️ by Ruddy Marc
      </footer>
    </div>
  );
}

export default App;
