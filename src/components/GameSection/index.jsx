import "./GameSection.css";
import Board from "../Board";
import ControlSection from "../ControlSection";

import { useState } from "react";

import { TURNS } from "../../constants";

function GameSection() {
  const [controlTurn, setControlTurn] = useState(TURNS.X);

  return (
    <section className="game">
      <Board controlTurn={controlTurn} setControlTurn={setControlTurn} />
      <ControlSection controlTurn={controlTurn} />
    </section>
  );
}

export default GameSection;
