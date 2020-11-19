import React, { useState, useEffect } from "react";
import axios from "axios";

<<<<<<< HEAD
import NavBar from '../../components/NavBar/NavBar';
import Footer from '../Footer/Footer';
=======
>>>>>>> 743f26346bb1a03dfcf602b7a30966b9bb15421f
import MonsterCard from "./MonsterCard";
import "../../styles/css/List/MonsterList.css";

function MonsterList() {
  const [monsters, setMonsters] = useState([]);

  useEffect(() => {
    handleAxios();
  }, []);

  const handleAxios = () => {
    axios
      .get(`https://cannotread.herokuapp.com/api/monsters`)
      .then((response) => setMonsters(response.data));
  };

  return (
    <div>
      <div className="monster_list_container">
        {monsters.map((monster) => (
          <MonsterCard key={monster.name} {...monster} />
        ))}
      </div>
    </div>
  );
}

export default MonsterList;
