import { Player } from "./GameContext";

export const scoresAreEqual = (players: Player[]) => players[0].score === players[1].score;
export const oneScoreIsOverForty = (players: Player[]) => players[0].score > 3 || players[1].score > 3;
