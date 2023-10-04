import { WINNER_COMBO } from "./constants.js";

export const checkWinner = (checkBoard) => {
  for (const COMBO of WINNER_COMBO) {
    const [a, b, c] = COMBO;

    if (
      checkBoard[a] &&
      checkBoard[a] === checkBoard[b] &&
      checkBoard[a] === checkBoard[c]
    ) {
      return checkBoard[a];
    }
  }
};

export const checkTie = (checkBoard) => {
  return checkBoard.every((square) => square !== null);
};
