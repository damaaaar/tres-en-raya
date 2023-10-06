import "./ControlSection.css";
import Player from "../Player";
import { TURNS } from "../../constants";

function ControlSection(props) {
  const { controlTurn, pointsX, pointsO } = props;

  return (
    <section className="control">
      <div className="control-points">
        <Player
          turn={TURNS.X}
          points={pointsX}
          selected={controlTurn === TURNS.X}
        />
        <Player
          turn={TURNS.O}
          points={pointsO}
          selected={controlTurn === TURNS.O}
        />
      </div>
    </section>
  );
}

export default ControlSection;
