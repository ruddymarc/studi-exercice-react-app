/* eslint-disable import/no-unresolved */
import React from 'react';
import Barker from './Components/Barker';
import Trend from './Components/Trend';
import logo from './logo.svg';
import data from './data.json';
import './App.css';

function App() {
  const { barks, trends } = data;
  const trendAction = () => { };

  return (
    <div className="App">
      <header>
        <img src={logo} alt="logo barker" className="AppLogo" />
        <h1>Welcome to Barker</h1>
      </header>
      <main>
        { barks.map((bark) => (
          <Barker
            key={bark.id}
            author={bark.author}
            posted={bark.posted}
            content={bark.content}
          />
        )) }
      </main>
      <aside>
        <h2>Trends for you</h2>
        { trends.map((trend) => (
          <Trend
            key={trend.id}
            category={trend.category}
            hashtag={trend.hashtag}
            barks={trend.barks}
            action={trendAction}
          />
        )) }
      </aside>
      <footer>
        this react app is made with ❤️ by Ruddy Marc
      </footer>
    </div>
  );
}

export default App;
