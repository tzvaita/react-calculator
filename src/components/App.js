import React from 'react';
import '../App.css';
import Display from './display';
import ButtonCont from './buttonCont';

function App() {
  return (
    <div className="app">
      <h1> Hello and welcome to my React calculator </h1>
      <Display />
      <ButtonCont />
    </div>
  );
}

export default App;
