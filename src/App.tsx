import { useState } from 'react';
import './App.css';

import Game from './context/Game';


const App = () => {
  const [ wins, setWins ] = useState<string[]>([]);
  const [ nameP1, setNameP1 ] = useState('P1');
  const [ nameP2, setNameP2 ] = useState('P2');

  const handleAddP1Click = () => {
    console.log('Added p1');
    wins.push(nameP1);
    setWins([...wins]);
  }
  const handleAddP2Click = () => {
    wins.push(nameP2);
    setWins([...wins]);
  }
  
  return (
    <div className="App">
      <Game nameP1={nameP1} nameP2={nameP2} wins={wins}/>
      <button onClick={handleAddP1Click}>add p1 win exchange</button>
      <button onClick={handleAddP2Click}>add p2 win exchange</button>
    </div>
  );
}

export default App;
