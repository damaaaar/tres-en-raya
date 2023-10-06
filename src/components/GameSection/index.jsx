import "./GameSection.css";
import Board from "../Board";
import ControlSection from "../ControlSection";

import { useState } from "react";

import { TURNS } from "../../constants";

function GameSection() {
  const [controlTurn, setControlTurn] = useState(TURNS.X);
  const [pointsX, setPointsX] = useState(0);
  const [tiePoints, setTiePoints] = useState(0);
  const [pointsO, setPointsO] = useState(0);

  return (
    <section className="game">
      <Board
        controlTurn={controlTurn}
        setControlTurn={setControlTurn}
        pointsX={pointsX}
        pointsO={pointsO}
        setPointsX={setPointsX}
        setPointsO={setPointsO}
        tiePoints={tiePoints}
        setTiePoints={setTiePoints}
      />
      <ControlSection
        controlTurn={controlTurn}
        pointsX={pointsX}
        tiePoints={tiePoints}
        pointsO={pointsO}
      />
    </section>
  );
}

export default GameSection;
