import "./Winner.css";
import Square from "../Square";
import Button from "../Button";

function Winner(props) {
  const { winner, functionButton } = props;

  if (winner === null) {
    return null;
  }

  const texto = winner === false ? "EMPATE" : "GANÓ:";

  return (
    <section className="winner">
      <div className="winner-content">
        <span className="winner-span">{texto}</span>
        {winner && <Square value={winner} />}
        <Button functionButton={functionButton} />
      </div>
    </section>
  );
}

export default Winner;
