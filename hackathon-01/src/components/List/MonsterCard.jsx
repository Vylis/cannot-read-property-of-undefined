import React from "react";
import { Link } from "react-router-dom";

import "../../styles/css/MonsterList/MonsterCard.css";

function MonsterCard(props) {
  const { id, name, danger, image, location } = props;

  return (
    <div className="monster_card_container">
      <img className="monster_card_image" src={image} alt={name} />
      <div className="monster_card_intel">
        <p>{name}</p>
        <p>{danger}</p>  
        <p>{location}</p>  
        <Link to={`/MonsterList/${id}`}>See more</Link>
      </div>
    </div>
  );
}

export default MonsterCard;
