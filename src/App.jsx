import { useState } from "react";
import Player from "./components/Player";
import Gameboard from "./components/Gameboard";
import Log from "./components/Log";

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

  const [activePlayer, setActivePlayer] = useState("X");

  function handleSelectSquire(rowIndex, colIndex) {
    setActivePlayer((curActivePlayer) => (curActivePlayer === "X" ? "O" : "X"));
    setGameTurns(prevTurns=>{
      let currentPlayer ='X'

      if (prevTurns.length > 0 && prevTurns[0].player ==="X"){
        currentPlayer = 'O';
      }


      const updatedTurns = [{square : {row : rowIndex, col: colIndex }, player: currentPlayer },  ...prevTurns]

      return updatedTurns
    })
  }

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
        <Gameboard
          onSelectSqure={handleSelectSquire}
          turns={gameTurns}
        />{" "}

      </div>
      <Log />
    </main>
  );
}

export default App;
