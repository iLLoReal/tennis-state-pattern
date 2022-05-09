import React from 'react';
import logo from './logo.svg';
import './App.css';

import Game from './context/Game';

function App() {
  return (
    <div className="App">
      <Game nameP1='P1' nameP2='P2' wins={['P1']}/>
    </div>
  );
}

export default App;
