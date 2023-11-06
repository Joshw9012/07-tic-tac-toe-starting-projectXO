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

const [activePlayer, setActivePlayer] = useState('X');

function handleSelectSquire(){
  setActivePlayer((curActivePlayer) => curActivePlayer==="X"? "O" :"X")
}





  return (
    <main>
      {description}
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player initialName="player 1" symbol="X" isActive={activePlayer==='X'}/>  {/*setting active boarder*/}
          <Player initialName="player 2" symbol="O" isActive={activePlayer==='O'}/>
        </ol>
        <Gameboard onSelectSqure = {handleSelectSquire}  activePlayerSymbol = {activePlayer} />      {/*setting Symbol*/}
      </div>
      LOG
    </main>
  );
}

export default App;
