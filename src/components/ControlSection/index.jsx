import "./ControlSection.css";
import Player from "../Player";
import Button from "../Button";

import { TURNS } from "../../constants";

function ControlSection(props) {
  const { controlTurn, pointsX, tiePoints, pointsO, resetPoints } = props;

  return (
    <section className="control">
      <div className="control-points">
        <Player
          turn={TURNS.X}
          points={pointsX}
          selected={controlTurn === TURNS.X}
        />
        <Player turn="-" points={tiePoints} selected={false} />
        <Player
          turn={TURNS.O}
          points={pointsO}
          selected={controlTurn === TURNS.O}
        />
      </div>
      <Button
        functionButton={resetPoints}
        text="Limpiar puntajes"
        styles="button-reset-points"
      />
    </section>
  );
}

export default ControlSection;
