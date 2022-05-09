import State from "./State";
import { Player } from "../context/GameContext";
import RegularState from "./RegularState";
import AdvancedState from "./AdvancedState";
import { oneScoreIsOverForty } from "../context/Utils";

class LoveState extends State {
  incrementScore = (playerIndex: number) => {
    this.gameState.increasePlayerScore(playerIndex);
    const players: Player[] = this.gameState.getPlayers();

    if (oneScoreIsOverForty(players)) 
      this.gameState.changeState(new AdvancedState(this.gameState));
    else this.gameState.changeState(new RegularState(this.gameState));
  };
  formatScore = () => {
    const players: Player[] = this.gameState.getPlayers();
    const scoreTables: number[] = this.gameState.getScoreTable();

    this.gameState.setScoreDisplay(`${scoreTables[players[1].score]}a`);
  };
}

export default LoveState;