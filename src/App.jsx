/* eslint-disable import/no-unresolved */
import React, { useState } from 'react';
import Button from './Components/Button';
import Image from './Components/Image';
import Modal from './Components/Modal';
import './App.css';

function App() {
  // Show or hide Modal
  const [showModal, setShowModal] = useState(false);
  const closeModal = () => setShowModal(false);
  const toogleShowModal = () => setShowModal(!showModal);
  // Modal Acttions
  const modalActions = (
    <>
      <Button />
      <Button isLight />
    </>
  );
  return (
    <div className="App">
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
    </div>
  );
}

export default App;
