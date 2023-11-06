import { useState } from "react";

export default function Player({initialName, symbol}) {
    const [isEditing, setIsEditing] =useState(false)
    const [playerName, setPlayerName] = useState(initialName);
    //PlayerNameTag = "span";
    function clickhandler(){
        setIsEditing((editing) => !editing);
    }

    function handleChange(event) {
        setPlayerName(event.target.value);
    
    }

    let editableplayerName = <span className={!isEditing && "player-name" }>{playerName}</span>
    let btnCaption = 'Edit'
    if (isEditing){
        editableplayerName = <input type = "text" required value = {playerName} onChange={handleChange}/>;
        btnCaption = 'Save';
    }

  return (
    <li>
      <span className="player">

        {editableplayerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={clickhandler}>{btnCaption}</button>
    </li>
  );
}
