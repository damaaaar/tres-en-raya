import "./ControlSection.css";
import Player from "../Player";
import { TURNS } from "../../constants";

function ControlSection(props) {
  const { controlTurn } = props;

  return (
    <section className="control">
      <div className="control-points">
        <Player turn={TURNS.X} value={0} selected={controlTurn === TURNS.X} />
        <Player turn={TURNS.O} value={0} selected={controlTurn === TURNS.O} />
      </div>
    </section>
  );
}

export default ControlSection;
