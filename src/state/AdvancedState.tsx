import State from "./State";
import DeuceState from "./DeuceState";
import WinState from "./WinState";
import { Player } from "../context/GameContext";

class AdvancedState extends State {
  incrementScore = (playerIndex: number) => {
    this.gameState.increasePlayerScore(playerIndex);
    const players: Player[] = this.gameState.getPlayers();

    console.log("Advanced");
    if (players[0].score === players[1].score) {
      this.gameState.changeState(new DeuceState(this.gameState));
    } else {
      this.gameState.changeState(new WinState(this.gameState));
    }
  };
  formatScore = () => {
    const players: Player[] = this.gameState.getPlayers();
    const scoreTables: number[] = this.gameState.getScoreTable();

    if (players[1].score > players[0].score) {
      this.gameState.setScoreDisplay(
        `${players[0].name} ${scoreTables[3]} -  ${
          players[1].name
        } ${scoreTables[3]} Advantage`
      );
    } else {
      this.gameState.setScoreDisplay(
        `${players[0].name} ${scoreTables[3]} Advantage -  ${
          players[1].name
        } ${scoreTables[3]}`
      );
    }
  };
}

export default AdvancedState;