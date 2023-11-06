import { useState } from "react";

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export default function GameBoard() {
const [gameBoard, setGameBoard] = useState(initialGameBoard);

function handleSelectSqaure(rowIdex,colIndex) {
    setGameBoard((prevGameBoard)=>{
        const updatedGameBoard = [...prevGameBoard.map((item)=>[...item])];
        updatedGameBoard[rowIdex][colIndex] = 'X';
        return updatedGameBoard;
    });
}


  return (
    <ol id="game-board">
      {gameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button onClick={()=>handleSelectSqaure(rowIndex, colIndex )}>{playerSymbol}</button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
