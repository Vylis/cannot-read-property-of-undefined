import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import MonsterCard from "../List/MonsterCard";

import map from "../../styles/pictures/greece_map.png";
import "../../styles/css/Map/Map.css";

const nbFraction = 225;
const fractionArray = [];
for (let i = 0; i < nbFraction; i++) {
  fractionArray.push("");
}

const noMonsterAlert = "No monster in this area !";

const Map = () => {
  const [mostWanted, setMostWanted] = useState();
  const [idLocation, setIdLocation] = useState(0);
  const [monsterAtLocation, setMonsterAtLocation] = useState();

  useEffect(() => {
    (async () => {
      const monsterLocated = await axios.get(
        `${process.env.REACT_APP_MYTH_API_URL}/api/monsters`
      );
      const { data } = monsterLocated;
      setMonsterAtLocation(data.filter((monster) => +(monster.lastseen) === idLocation));
    })();
  }, [idLocation]);

  useEffect(() => {
    (async () => {
      const monsters = await axios.get(
        `${process.env.REACT_APP_MYTH_API_URL}/api/monsters`
      );
      const { data } = monsters;
      const wanted = data.filter((monster) => monster.wanted === 1);
      setMostWanted(wanted);
    })();
  }, []);

  const handleFocus = (i) => {
    setIdLocation(i + 1);
  };

  return (
    <section className=" map_page_container">
      <h3>Click on the map to see which monsters are in that location :</h3>
      <div className="map_container">
        <img src={map} alt="Ancient Greece" className="map" />
        <div className="map_fraction">
          {mostWanted &&
            fractionArray.map((element, i) => {
              if (mostWanted.find((wanted) => wanted.lastseen == i + 1)) {
                return (
                  <button
                    type="button"
                    id={i + 1}
                    className="fraction fraction_wanted"
                    onClick={() => handleFocus(i)}
                  />
                );
              } else {
                return (
                  <button
                    type="button"
                    id={i + 1}
                    className="fraction"
                    onClick={() => handleFocus(i)}
                  />
                );
              }
            })}
        </div>
      </div>
      {idLocation === 0 ? (
        ""
      ) : (
        <div className="monster_ located_container">
          {monsterAtLocation.map((monster) => (
            <div className="monster_located">
              <MonsterCard {...monster} />
              <p>{monster.description}</p>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default Map;
