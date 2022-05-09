import GameContext from "./GameContext";

interface GameProps {
  nameP1: string;
  nameP2: string;
  wins: string[];
}

const Game = ({nameP1, nameP2, wins}: GameProps) => {
  const gameState = new GameContext(
    { name: nameP1, score: 0 },
    { name: nameP2, score: 0 }
  );

  wins.forEach((win) => {
    gameState.incrementScore(win === nameP1 ? 0 : 1);
  });
  gameState.formatScore();

  return (
    <div>
      {gameState.getScoreDisplay()}
    </div>
  );
};

export default Game;