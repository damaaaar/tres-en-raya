import "./Button.css";

function Button(props) {
  const { functionButton, text, styles } = props;

  const handleClick = () => {
    functionButton();
  };
  return (
    <button className={styles} type="submit" onClick={handleClick}>
      {text}
    </button>
  );
}

export default Button;
