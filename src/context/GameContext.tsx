import State from "../state/State";
import LoveState from "../state/LoveState";

export interface Player {
  name: string;
  score: number;
}

class GameContext {
  protected state: State;
  protected players: Player[];
  protected scoreDisplay: string;
  protected scoreTable = [0, 15, 30, 40];

  constructor(playerOne: Player, playerTwo: Player) {
    this.players = [playerOne, playerTwo];
    this.scoreDisplay = "0 a";
    this.state = new LoveState(this);
  }

  changeState = (state: State) => {
    this.state = state;
  };

  formatScore = () => {
    this.state.formatScore();
  };

  incrementScore = (playerIndex: number) => {
    this.state.incrementScore(playerIndex);
  };

  setScoreDisplay = (scoreDisplay: string) => {
    this.scoreDisplay = scoreDisplay;
  };

  getPlayers = () => {
    return this.players;
  };

  increasePlayerScore = (playerIndex: number) => {
    this.players[playerIndex].score += 1;
  };

  getScoreTable = () => {
    return this.scoreTable;
  };

  getScoreDisplay = () => {
    return this.scoreDisplay;
  };
}

export default GameContext;