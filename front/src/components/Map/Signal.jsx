import React, { useEffect, useState } from "react";
import Axios from "axios";

import '../../styles/css/Map/Signal.css'

export default function Signal(props) {
  const { idSignal } = props;
  const [search, setSearch] = useState("");
  const [monsters, setMonsters] = useState();

  useEffect(() => {
    (async () => {
      if (search !== "") {
        const allMonsters = await Axios.get(
          `https://cannotread.herokuapp.com/api/monsters`
        );
        const { data } = allMonsters;
        const showMonsters = data.filter((monster) =>
          monster.name.toLowerCase().includes(search.toLowerCase())
        );
        setMonsters(showMonsters);
      } else {
        setMonsters();
      }
    })();
  }, [search]);

  const handleChange = (e) => {
    setSearch(e.target.value);
    monsters.map(async (monster) => {
      if (monster.name.toLowerCase() === search.toLowerCase()) {
        await Axios.put(
          `https://cannotread.herokuapp.com/api/monsters/${monster.id}`,
          { ...monster, lastseen: idSignal }
        );
      }
    });
  };

  return (
    <div className="signal_container">
      <div className="signal_input_container">
        <label htmlFor="search">
          <input
            className="signal_search"
            id="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            autoComplete="off"
          />
        </label>
      </div>
      <div className="signal_list_container">
        {monsters &&
          monsters.map((monster) => (
            <p><button
              className="signal_monster_name"
              value={monster.name}
              onClick={handleChange}
            >
              {monster.name}
            </button></p>
          ))}
      </div>
    </div>
  );
}
