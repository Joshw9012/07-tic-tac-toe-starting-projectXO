import { useState } from "react";
import Player from "./components/Player";

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
          <Player name="player 1" symbol="X" />
          <Player name="player 2" symbol="O" />
        </ol>
        Game Board
      </div>
      LOG
    </main>
  );
}

export default App;
