import State from "./State";
import AdvancedState from "./AdvancedState";

class DeuceState extends State {
  incrementScore = (playerIndex: number) => {
    console.log(this.gameState.getPlayers()[playerIndex].score);
    this.gameState.increasePlayerScore(playerIndex);
    this.gameState.changeState(new AdvancedState(this.gameState));
  };
  formatScore = () => {
    this.gameState.setScoreDisplay("DEUCE");
  };
}

export default DeuceState;