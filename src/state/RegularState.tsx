import State from "./State";
import { Player } from "../context/GameContext";
import LoveState from "./LoveState";
import WinState from "./WinState";

class RegularState extends State {
  incrementScore = (playerIndex: number) => {
    this.gameState.increasePlayerScore(playerIndex);
    const players: Player[] = this.gameState.getPlayers();

    if (players[0].score === players[1].score) {
      this.gameState.changeState(new LoveState(this.gameState));
    } else if (players[0].score > 3 || players[1].score > 3) {
      this.gameState.changeState(new WinState(this.gameState));
    }
  };
  formatScore = () => {
    const players: Player[] = this.gameState.getPlayers();
    const scoreTables: number[] = this.gameState.getScoreTable();

    this.gameState.setScoreDisplay(
      `${players[0].name} ${scoreTables[players[0].score]} -  ${
        players[1].name
      } ${scoreTables[players[1].score]}`
    );
  };
}

export default RegularState;