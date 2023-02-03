/* eslint-disable import/no-unresolved */
import React from 'react';
import { ThemeProvider } from 'styled-components/macro';
import Barker from './Components/Barker';
import theme from './assets/theme';
import './App.css';

function App() {
  return (
    <div className="App">
      <ThemeProvider>
        <Barker />
      </ThemeProvider>

      <footer>
        this react app is made with ❤️ by Ruddy Marc
      </footer>
    </div>
  );
}

ThemeProvider.defaultProps = { theme };

export default App;
