import State from "./State";
import LoveState from "./LoveState";
import WinState from "./WinState";

import { Player } from "../context/GameContext";
import { scoresAreEqual, oneScoreIsOverForty } from "../context/Utils";

class RegularState extends State {
  incrementScore = (playerIndex: number) => {
    this.gameState.increasePlayerScore(playerIndex);
    const players: Player[] = this.gameState.getPlayers();

    if (scoresAreEqual(players)) {
      this.gameState.changeState(new LoveState(this.gameState));
    } else if (oneScoreIsOverForty(players)) {
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



