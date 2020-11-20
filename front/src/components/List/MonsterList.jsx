import React, { useState, useEffect } from "react";
import axios from "axios";
import MonsterCard from "./MonsterCard";
import "../../styles/css/List/MonsterList.css";

function MonsterList() {
  const [monsters, setMonsters] = useState([]);
  const [showMonsters, setShowMonsters] = useState(monsters);
  const [refresh, setRefresh] = useState(false);
  const [initialMonsterList, setInitialMonsterList] = useState(monsters);

  useEffect(() => {
    (async () => {
      await handleAxios();
      setShowMonsters(monsters);
    })();
  }, []);

  useEffect(() => {
    setShowMonsters(monsters);
  }, [monsters]);

  const handleAxios = async () => {
    const allMonsters = await axios.get(
      `https://cannotread.herokuapp.com/api/monsters`
    );
    const { data } = allMonsters;
    setMonsters(data.sort((a, b) => a.name.localeCompare(b.name)));
  };

  const handleChange = (e) => {
    setRefresh(!refresh);
    if (e.target.value === "all") {
      handleAxios();
    }
    if (e.target.value === "danger_asc") {
      setShowMonsters(monsters.sort((acc, curr) => acc.danger - curr.danger));
    }
    if (e.target.value === "danger_desc") {
      setShowMonsters(monsters.sort((acc, curr) => curr.danger - acc.danger));
    }
    if (e.target.value === "location") {
      setShowMonsters(monsters.sort((acc, curr) => acc.location.localeCompare(curr.location)));
    }
  };

  return (
    <div className="monster_list_container">
      <div className="monster_list_select_container">
        <select className="monster_list_select" onClick={handleChange}>
          <option value="all">All monsters</option>
          <option value="danger_asc">Order by danger level (ascending)</option>
          <option value="danger_desc">
            Order by danger level (descending)
          </option>
          <option value="location">
            Order by origin location
          </option>
        </select>
      </div>
      <div className="monster_cards_list_container">
        {showMonsters &&
          showMonsters.map((monster) => (
            <MonsterCard key={monster.name} {...monster} />
          ))}
      </div>
    </div>
  );
}

export default MonsterList;
