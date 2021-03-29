import React, { useState } from 'react';
import Title from './comps/Title/Title';
import SubTitle from './comps/SubTitle/SubTitle';
import Feature from './comps/Feature/Feature';
import Button from './comps/Button/Button';
import Modal from './comps/Landing/Modal';
import './App.css';

function App() {
  const [popUpModal, setModalState] = useState(false);
  const renderModal = () => {
    if (popUpModal) {
      return (
        <div className="modal-wrapper">
          <Modal popUpState={setModalState} />
        </div>
      );
    }
    return;
  };
  return (
    <div className="App">
      <Title />
      <SubTitle />
      <div className="content-wrapper">
        <div className="feature-wrapper">
          <Feature image="./assets/left.jpg">100% Wool threads</Feature>
          <Feature image="./assets/middle.jpg">Moisture wicking</Feature>
          <Feature image="./assets/cute-sock.jpg">Designed by Artists</Feature>
        </div>
        <div className="contact-wrapper">
          <h3>
            We are so glad you dropped by! Here is a special offer just for you.
          </h3>
          <Button pad={10} width={15} popUpState={setModalState}>
            View Offer
          </Button>
        </div>
      </div>
      {renderModal()}
    </div>
  );
}

export default App;
