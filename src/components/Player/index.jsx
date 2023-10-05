import "./Player.css";

function Player(props) {
  const { turn, value, selected } = props;

  const className = selected ? "player-turn player-turn-turn" : "player-turn";

  return (
    <article className="player">
      <div className={className}>{turn}</div>
      <div className="player-counter">{value}</div>
    </article>
  );
}

export default Player;
