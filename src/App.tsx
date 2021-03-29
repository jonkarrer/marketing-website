import React from 'react';
import Title from './comps/Title/Title';
import SubTitle from './comps/SubTitle/SubTitle';
import Feature from './comps/Feature/Feature';
import './App.css';

function App() {
  return (
    <div className="App">
      <Title />
      <SubTitle />
      <div className="feature-wrapper">
        <Feature />
        <Feature />
        <Feature />
      </div>
    </div>
  );
}

export default App;
