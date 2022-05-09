import State from "./State";
import { Player } from "../context/GameContext";

class WinState extends State {
  incrementScore = () => {
    return;
  };
  formatScore = () => {
    const players: Player[] = this.gameState.getPlayers();
    let displayScore = "";
    if (players[0].score > players[1].score) displayScore = players[0].name;
    else displayScore = players[1].name;
    displayScore += " WINS !";

    this.gameState.setScoreDisplay(displayScore);
  };
}

export default WinState;
