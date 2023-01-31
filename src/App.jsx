/* eslint-disable import/no-unresolved */
import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components/macro';
import Button from './Components/Button';
import Image from './Components/Image';
import Modal from './Components/Modal';
import theme from './theme';
import './App.css';

function App() {
  const revertTheme = ({ brand, neutral0 }) => ({ brand: neutral0, neutral0: brand });
  // Show or hide Modal
  const [showModal, setShowModal] = useState(false);
  const closeModal = () => setShowModal(false);
  const toogleShowModal = () => setShowModal(!showModal);
  // Modal Acttions
  const modalActions = (
    <>
      <ThemeProvider theme={revertTheme}>
        <Button />
      </ThemeProvider>
      <Button />
    </>
  );
  return (
    <div className="App">
      <ThemeProvider>
        <div className="Page-wrapper">
          <Button
            label={[showModal ? 'Close' : 'Open', 'modal'].join(' ')}
            onClick={toogleShowModal}
          />
          { showModal && (
          <Modal title="Lorem ipsut amen" actions={modalActions} onClose={closeModal}>
            <Image url="https://dummyimage.com/350" />
            {`Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem hic assumenda enim,
           maxime numquam dolores doloremque quo? Praesentium, laudantium autem accusantium culpa
           quasi commodi, laboriosam unde saepe iure rerum ex?`}
          </Modal>
          ) }
        </div>

        <footer>
          this react app is made with ❤️ by Ruddy Marc
        </footer>

      </ThemeProvider>
    </div>
  );
}

ThemeProvider.defaultProps = { theme };

export default App;
