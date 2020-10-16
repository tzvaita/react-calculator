import React from 'react';
import '../App.css';
import Display from './display';
import ButtonCont from './buttonCont';
import calculate from '../logic/calculate';

function App() {
  return (
    <div className="app">
      <h1> Hello and welcome to my React calculator </h1>
      <Display result={calculate} />
      <ButtonCont />
    </div>
  );
}

export default App;
