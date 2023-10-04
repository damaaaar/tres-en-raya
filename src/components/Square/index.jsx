import "./Square.css";

function Square(props) {
  const { value, updateSquare } = props;

  return (
    <div className="square" onClick={updateSquare}>
      {value}
    </div>
  );
}

export default Square;
