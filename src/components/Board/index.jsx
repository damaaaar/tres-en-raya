import { useState } from "react";
import { TURNS } from "../../constants.js";
import { checkWinner, checkTie } from "../../functions.js";
import { savePointsX, savePointsO, savePointsTie } from "../../functions.js";
import confetti from "canvas-confetti";

import "./Board.css";
import Square from "../Square";
import Winner from "../Winner/index.jsx";

function Board(props) {
  const { controlTurn, setControlTurn, pointsX, pointsO, setPointsX, setPointsO, tiePoints, setTiePoints, } = props;

  const [board, setBoard] = useState(Array(9).fill(null));
  const [turn, setTurn] = useState(TURNS.X);
  const [winner, setWinner] = useState(null);

  const handleTurn = (i) => {
    const newBoard = [...board];

    if (newBoard[i] || winner) {
      return;
    }

    newBoard[i] = turn;
    setBoard(newBoard);
    turn === TURNS.X ? setTurn(TURNS.O) : setTurn(TURNS.X);
    controlTurn === TURNS.X ? setControlTurn(TURNS.O) : setControlTurn(TURNS.X);

    const newWinner = checkWinner(newBoard);

    if (newWinner) {
      if (newWinner === TURNS.X) {
        const newPointX = pointsX + 1;
        setPointsX(newPointX);
        savePointsX(newPointX);
      } else if (newWinner === TURNS.O) {
        const newPointO = pointsO + 1;
        setPointsO(newPointO);
        savePointsO(newPointO);
      }

      console.log(window.localStorage);
      setWinner(newWinner);
      confetti();
    } else if (checkTie(newBoard)) {
      const newTiePoints = tiePoints + 1;
      setTiePoints(newTiePoints);
      savePointsTie(newTiePoints);
      setWinner(false);
    }
  };

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setTurn(TURNS.X);
    setWinner(null);
    setControlTurn(TURNS.X);
  };

  return (
    <article className="game-board">
      {board.map((_, index) => {
        return (
          <Square
            key={index}
            value={board[index]}
            updateSquare={() => {
              handleTurn(index);
            }}
          />
        );
      })}
      <Winner winner={winner} functionButton={resetGame} />
    </article>
  );
}

export default Board;
