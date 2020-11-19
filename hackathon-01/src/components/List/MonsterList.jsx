import React, { useState, useEffect } from "react";
import axios from "axios";

import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';
import MonsterCard from "./MonsterCard";
import "../../styles/css/MonsterList/MonsterList.css";

function MonsterList() {
  const [monsters, setMonsters] = useState([]);

  useEffect(() => {
    handleAxios();
  }, []);

  const handleAxios = () => {
    axios.get(`https://cannotread.herokuapp.com/api/monsters`)
      .then((response) => setMonsters(response.data));
  };

  return (
    <div>
      <NavBar />
      <div className="monster_list_container">
        {monsters.map((monster) => (
          <MonsterCard key={monster.name} {...monster} />
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default MonsterList;
