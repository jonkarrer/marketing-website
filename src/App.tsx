import React from 'react';
import Title from './comps/Title/Title';
import SubTitle from './comps/SubTitle/SubTitle';
import Feature from './comps/Feature/Feature';
import Button from './comps/Button/Button';
import './App.css';

function App() {
  return (
    <div className="App">
      <Title />
      <SubTitle />
      <div className="feature-wrapper">
        <Feature image="./assets/left.jpg">Made with 80% wool</Feature>
        <Feature image="./assets/middle.jpg">Moisture wicking</Feature>
        <Feature image="./assets/cute-sock.jpg">Artist designed prints</Feature>
      </div>
      <div className="contact-wrapper">
        <h3>
          We are so glad you dropped by! Here is a special offer just for you.
        </h3>
        <Button pad={10} width={200}>
          View Offer
        </Button>
      </div>
    </div>
  );
}

export default App;
