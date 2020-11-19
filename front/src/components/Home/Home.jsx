import React, { useState, useEffect } from "react";
import axios from "axios";

import "../../styles/css/Home/Home.css";

const Home = () => {
  const [wanted, setWanted] = useState([]);

  useEffect(() => {
    axios
      .get(`https://cannotread.herokuapp.com/api/monsters?wanted=1`)
      .then((response) =>
        setWanted(response.data.filter((monster) => monster.wanted === 1))
      );
    
  }, []);
  console.log(wanted);
  return (
    <section className="home_container">
      <h2>Most wanted monsters :</h2>
      <div className="most_wanted_container">
        {wanted.map((monster) => (
          <div className="wanted_monster">
            <div className="monster_info">
              <h3>{monster.name}</h3>
              <span>Danger : {monster.danger}</span>
              <span>Description : {monster.description}</span>
              <span>Weakness : {monster.weakness}</span>
            </div>
            <img src={monster.image} className="monster_portrait" />
          </div>
        ))}
      </div>
      <div className="last_rewards">
        <h2>Last rewards :</h2>
      </div>
    </section>
  );
};

export default Home;
