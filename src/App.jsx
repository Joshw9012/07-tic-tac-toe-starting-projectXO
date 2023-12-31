import { useState } from "react";
import Player from "./components/Player";
import Gameboard from "./components/Gameboard";
import Log from "./components/Log";
import { WINNING_COMBINATIONS } from "./winning-combinations";
import GameOver from "./components/GameOver";


const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];


function deriveActivePlayer(gameTurns) {
  let currentPlayer = "X";
  if (gameTurns.length > 0 && gameTurns[0].player === "X") {
    currentPlayer = "O";
  }
  return currentPlayer;
} 

//create a refresh indicator--------------------

const array = Array.from({ length: 100 }, (_, index) => index + 1);
function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}





//-----------------------------------------------

function App() {
  //refresh indicator-------------------------------
  const description = genRandomInt(array.length);
  //--------------------------------
  const [gameTurns, setGameTurns] = useState([]);

  //const [activePlayer, setActivePlayer] = useState("X");
  const activePlayer = deriveActivePlayer(gameTurns);

  let gameBoard = [...initialGameBoard.map((item)=> [...item])]

  for ( const turn of gameTurns ) {
    const {square, player} = turn;
    const {row, col} = square;
  
    gameBoard[row][col] = player;
  }

  let winner;

  for (const combination of WINNING_COMBINATIONS){
    const firstSquareSymbol = gameBoard[combination[0].row][combination[0].column];
    const secondSquareSymbol = gameBoard[combination[1].row][combination[1].column];
    const thirdSquareSymbol = gameBoard[combination[2].row][combination[2].column];
    if(firstSquareSymbol && firstSquareSymbol===secondSquareSymbol && firstSquareSymbol===thirdSquareSymbol)
    {
      winner = firstSquareSymbol
    }
  }

  function handleSelectSquire(rowIndex, colIndex) {
    //setActivePlayer((curActivePlayer) => (curActivePlayer === "X" ? "O" : "X"));
    setGameTurns(prevTurns=>{

      const currentPlayer = deriveActivePlayer(prevTurns);

      const updatedTurns = [{square : {row : rowIndex, col: colIndex }, player: currentPlayer },  ...prevTurns]

      return updatedTurns
    })
  }


  function handleRestar(){
    setGameTurns([]);
  }

  const hasDraw = gameTurns.length ===9 && !winner

  return (
    <main>
      {description}
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            initialName="player 1"
            symbol="X"
            isActive={activePlayer === "X"}
          />{" "}

          <Player
            initialName="player 2"
            symbol="O"
            isActive={activePlayer === "O"}
          />
        </ol>
        {(winner || hasDraw)  && <GameOver winner={winner} onRestart={handleRestar}/>}
        <Gameboard
          onSelectSqure={handleSelectSquire}
          board={gameBoard}
        />

      </div>
      <Log />
    </main>
  );
}

export default App;
