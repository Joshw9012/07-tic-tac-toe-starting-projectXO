import { useState } from "react";
import Player from "./components/Player";
import Gameboard from "./components/Gameboard";

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




  return (
    <main>
      {description}
      <div id="game-container">
        <ol id="players">
          <Player initialName="player 1" symbol="X" />
          <Player initialName="player 2" symbol="O" />
        </ol>
        <Gameboard />
      </div>
      LOG
    </main>
  );
}

export default App;
