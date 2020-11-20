import React, { useState, useEffect } from "react";
import axios from "axios";

import MonsterCard from "../List/MonsterCard";

import "../../styles/css/Home/Home.css";

const Home = () => {
  const [mostWanted, setMostWanted] = useState([]);
  const [lastReward, setLastReward] = useState([]);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_MYTH_API_URL}/api/monsters?wanted=1`)
      .then((response) =>
        setMostWanted(response.data.filter((monster) => monster.danger >= 10))
      );
    axios
      .get(`${process.env.REACT_APP_MYTH_API_URL}/api/monsters?wanted=1`)
      .then((response) =>
        setLastReward(
          response.data.slice(Math.max(response.data.length - 6, 0))
        )
      );
  }, []);
  return (
    <>
      <section className="home_container">
        <marquee className="home_marquee">
          {lastReward.map((monster) => (
            <span className="home_marquee_monster_name">
              <strong>GREEK NEWS !</strong> Recently seen:{" "}
              <strong>{monster.name.toUpperCase()}</strong> near{" "}
              <strong>{monster.location}</strong>, local authorities asked for
              people to <strong>stay at home</strong> !{" "}
            </span>
          ))}
        </marquee>
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
    </>
  );
};

export default Home;
