

export default function GameBoard( {onSelectSqure,board}) {



// const [gameBoard, setGameBoard] = useState(initialGameBoard);

// function handleSelectSqaure(rowIdex,colIndex) {
//     setGameBoard((prevGameBoard)=>{
//         const updatedGameBoard = [...prevGameBoard.map((item)=>[...item])];
//         updatedGameBoard[rowIdex][colIndex] = activePlayerSymbol;
//         return updatedGameBoard;
//     });

//     onSelectSqure();
// }


  return (
    <ol id="game-board">
      {board.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button onClick={()=>onSelectSqure(rowIndex,colIndex)} disabled={playerSymbol!==null}>{playerSymbol}</button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
