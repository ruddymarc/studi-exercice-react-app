/* eslint-disable import/no-unresolved */
import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <ul className="Nav inline sticky">
        <li>Lien 1</li>
        <li>Lien 2</li>
        <li style={{ marginLeft: 'auto' }}>Lien 3</li>
      </ul>

      <div className="Page-wrapper">
        <header className="Wrapper">
          <div className="Row-wrapper">
            <img
              className="rounded"
              src="https://via.placeholder.com/350/efefef"
              alt="via-placeholder"
            />
            <div className="__content">
              <h2 className="__heading">React app - Exemple</h2>
              <span>A simple app with react</span>
            </div>
          </div>
        </header>
        <main className="Page-wrapper">
          <div className="Row-wrapper">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="64"
              height="64"
              fill="currentColor"
              className="bi bi-person-circle"
              viewBox="0 0 16 16"
            >
              <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
              <path
                fillRule="evenodd"
                d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
              />
            </svg>
            <div style={{ width: 'calc(100% - 6em)' }} className="__content">
              <div className="Row-wrapper">
                <h3 className="__heading">Post</h3>
                <span>By Ruddy Marc</span>
              </div>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
              has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown
              printer took a galley of type and scrambled it to make a type specimen book.
            </div>
          </div>
          <img
            className="rounded"
            src="https://via.placeholder.com/350/efefef"
            alt="via-placeholder"
          />
        </main>
      </div>

      <footer>
        this react app is made with ❤️ by Ruddy Marc
      </footer>
    </div>
  );
}

export default App;
