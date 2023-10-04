import "./Button.css";

function Button(props) {
  const { functionButton } = props;

  const handleClick = () => {
    functionButton();
  };
  return (
    <button className="button" type="submit" onClick={handleClick}>
      Reiniciar juego
    </button>
  );
}

export default Button;
