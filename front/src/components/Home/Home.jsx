import React, { useState, useEffect } from "react";
import axios from "axios";

import MonsterCard from "../List/MonsterCard";

import "../../styles/css/Home/Home.css";

const Home = () => {
  const [mostWanted, setMostWanted] = useState([]);
  const [lastReward, setLastReward] = useState([]);

  useEffect(() => {
    axios
      .get(`https://cannotread.herokuapp.com/api/monsters?wanted=1`)
      .then((response) =>
        setMostWanted(response.data.filter((monster) => monster.wanted === 1))
      );
    axios
      .get(`https://cannotread.herokuapp.com/api/monsters?wanted=1`)
      .then((response) => setLastReward(response.data));
  }, []);
  return (
    <section className="home_container">
      <h2>Most wanted monsters :</h2>
      <div className="most_wanted_container">
        {mostWanted.map((monster) => (
          <MonsterCard {...monster} />
        ))}
      </div>
      <h2>Last rewards :</h2>
      <div className="last_reward_container">
        {lastReward.map((monster) => (
          <MonsterCard {...monster} />
        ))}
      </div>
    </section>
  );
};

export default Home;
