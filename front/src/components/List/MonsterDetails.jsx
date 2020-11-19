import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';
import "../../styles/css/MonsterList/MonsterDetails.css";

const MonsterDetails = ({ match, location }) => {
  const { id } = match.params;
  const [monster, setMonster] = useState({});

  useEffect(() => {
    axios
      .get(`https://cannotread.herokuapp.com/api/monsters/${id}`)
      .then((response) => setMonster(response.data[0]));
  }, [id]);

  return (
    <div>
      <NavBar />
      <div className="monster_details_container">
        <Link to={"/MonsterList"}>
          <button className="monster_details_button">Return to List</button>
        </Link>
        <div className="monster_details intel">
          <img
            className="monster_details_image"
            src={monster.image}
            alt={monster.name}
          />
          <h2>{monster.name}</h2>
          <p>Can be found at {monster.location}</p>
          <p>Danger rating : {monster.danger}/10</p>
          <p>{monster.description}</p> 
          <p>Weakness : {monster.weakness}</p> 
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MonsterDetails;
