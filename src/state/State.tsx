import GameContext from "../context/GameContext";

abstract class State {
  protected gameState: GameContext;

  constructor(gameState: GameContext) {
    this.gameState = gameState;
  }

  abstract formatScore(): void;
  abstract incrementScore(playerIndex: number): void;
}
export default State;