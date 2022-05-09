import GameContext from "../context/GameContext";

abstract class State {
  protected gameState: GameContext;

  constructor(gameState: GameContext) {
    this.gameState = gameState;
  }

  abstract incrementScore(playerIndex: number): void;
  abstract formatScore(): void;
}
export default State;