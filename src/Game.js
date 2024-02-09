import { Square } from "./Square";
import "./Game.css";
import { usePlayerStore, useGameStore } from "./Store";

export const Game = () => {
  const setPlayer1Name = usePlayerStore((state) => state.setPlayer1Name);
  const player1Name = usePlayerStore((state) => state.player1Name);

  const setPlayer2Name = usePlayerStore((state) => state.setPlayer2Name);
  const player2Name = usePlayerStore((state) => state.player2Name);

  const onPlayer1NameChange = (event) => {
    setPlayer1Name(event.target.value);
  };

  const onPlayer2NameChange = (event) => {
    setPlayer2Name(event.target.value);
  };

  return (
    <>
      <div>
        <p>Tic tac toe</p>
        <div>
          <label>
            Player 1:
            <input value={player1Name} onChange={onPlayer1NameChange} />
          </label>
        </div>
        <div>
          <label>
            Player 2:
            <input value={player2Name} onChange={onPlayer2NameChange} />
          </label>
        </div>
        <GamePlayArea />
      </div>
    </>
  );
};

const GamePlayArea = () => {
  const gameState = useGameStore((state) => state.gameState);
  const onSquareClicked = () => {};

  const renderColumns = (columns, ver) => {
    return columns.map((_column, hor) => {
      return (
        <td key={hor}>
          <Square
            currentValue={gameState[hor][ver]}
            onSquareClicked={onSquareClicked}
          />
        </td>
      );
    });
  };

  const renderRows = (rows) => {
    return rows.map((row, ver) => {
      return <tr key={ver}>{renderColumns(row, ver)}</tr>;
    });
  };
  return (
    <table>
      <tbody>{renderRows(gameState)}</tbody>
    </table>
  );
};
