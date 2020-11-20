import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import Signal from "./Signal";
import MonsterCard from "../List/MonsterCard";
import bell from "../../styles/pictures/bell.png";

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
  const [idSignal, setIdSignal] = useState();
  const [refresh, setRefresh] = useState(false);
  const [idLocation, setIdLocation] = useState(0);
  const [monsterAtLocation, setMonsterAtLocation] = useState();
  const [toggle, setToggle] = useState(false);
  console.log(idLocation, monsterAtLocation);

  useEffect(() => {
    (async () => {
      const monsters = await axios.get(
        `${process.env.REACT_APP_MYTH_API_URL}/api/monsters`
      );
      const { data } = monsters;
      setMonsterAtLocation(
        data.filter((monster) => +monster.lastseen === idLocation)
      );
      const wanted = data.filter((monster) => monster.wanted === 1);
      setMostWanted(wanted);
    })();
  }, [idLocation, refresh]);

  const handleRefresh = () => {
    setRefresh(!refresh);
  };

  const handleFocus = (i) => {
    setIdSignal(i + 1);
    setIdLocation(i + 1);
  };

  return (
    <section className=" map_page_container">
      <div className="map_title_container">
        {toggle ? (
          <h3>
            If you saw a monster recently, please select its last position on
            the map and identify him by selecting its name:
          </h3>
        ) : (
          <h3>Click on the map to see which monsters are in that location :</h3>
        )}
      </div>
      <div className="map_container">
        <div className="alert_container">
          <button className="alert_btn" onClick={() => setToggle(!toggle)}>
            <img className="alert_btn_pic" src={bell} />
          </button>

          {toggle && (
            <button className="confirm_btn" onClick={() => handleRefresh()}>
              GIVE THE ALERT
            </button>
          )}
          {toggle && <Signal idSignal={idSignal} />}
        </div>
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
          {!toggle &&
            monsterAtLocation.map((monster) => (
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
