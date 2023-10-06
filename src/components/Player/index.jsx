import "./Player.css";

function Player(props) {
  const { turn, selected, points } = props;

  const className = selected ? "player-turn player-turn-turn" : "player-turn";

  return (
    <article className="player">
      <div className={className}>{turn}</div>
      <div className="player-counter">{points}</div>
    </article>
  );
}

export default Player;
