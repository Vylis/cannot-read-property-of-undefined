import React from "react";
import { Link } from "react-router-dom";

import "../../styles/css/MonsterList/MonsterCard.css";

function MonsterCard(props) {
  const { id, name, danger, image, location } = props;

  return (
    <div className="monster_card_container">
      <img className="monster_card_image" src={image} alt={name} />
      <div className="monster_card_intel">
        <p><strong>{name}</strong></p>
        <p>Danger rate : {danger}/10</p>  
        <p>Can be found at {location}</p>  
        <Link to={`/MonsterList/${id}`}><button className="monster_card_button">Learn more</button></Link>
      </div>
    </div>
  );
}

export default MonsterCard;
