import "./Square.css";
import { SquareState } from "./Store";
const displayValueMap = {
  [SquareState.Init]: null,
  [SquareState.Exx]: "X",
  [SquareState.Ooo]: "O",
};

export const Square = ({ currentValue, onSquareClicked }) => {
  return (
    <div className="square_wrapper" onClick={onSquareClicked}>
      <p className="x-or-o-wrapper">{displayValueMap[currentValue]}</p>
    </div>
  );
};
