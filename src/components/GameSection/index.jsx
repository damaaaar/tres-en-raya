import "./GameSection.css";
import Board from "../Board";
import ControlSection from "../ControlSection";

import { useState } from "react";

import { TURNS } from "../../constants";

function GameSection() {
  const [controlTurn, setControlTurn] = useState(TURNS.X);
  const [pointsX, setPointsX] = useState(() => {
    const pointsXFromStorage = Number(
      window.localStorage.getItem("pointsSaveX")
    );
    return pointsXFromStorage ?? 0;
  });
  const [tiePoints, setTiePoints] = useState(() => {
    const pointsTiesFromStorage = Number(
      window.localStorage.getItem("pointsSaveTie")
    );
    return pointsTiesFromStorage ?? 0;
  });
  const [pointsO, setPointsO] = useState(() => {
    const pointsOFromStorage = Number(
      window.localStorage.getItem("pointsSaveO")
    );
    return pointsOFromStorage ?? 0;
  });

  const resetPoints = () => {
    window.localStorage.removeItem("pointsSaveX");
    window.localStorage.removeItem("pointsSaveO");
    window.localStorage.removeItem("pointsSaveTie");

    setPointsX(0);
    setTiePoints(0);
    setPointsO(0);
  };

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
        resetPoints={resetPoints}
      />
    </section>
  );
}

export default GameSection;
