import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import Signal from "./Signal";

import map from "../../styles/pictures/greece_map.png";
import "../../styles/css/Map/Map.css";

const nbFraction = 225;
const fractionArray = [];
for (let i = 0; i < nbFraction; i++) {
  fractionArray.push("");
}

const Map = () => {
  const [mostWanted, setMostWanted] = useState();
  const [idSignal, setIdSignal] = useState();
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    (async () => {
      const monsters = await axios.get(
        `${process.env.REACT_APP_MYTH_API_URL}/api/monsters`
      );
      const { data } = monsters;
      const wanted = data.filter((monster) => monster.wanted === 1);
      setMostWanted(wanted);
    })();
  }, [refresh]);

  const handleRefresh = () => {
    setRefresh(!refresh);
  };

  const handleFocus = (i) => {
    setIdSignal(i + 1);
  };

  return (
    <section className=" map_page_container">
      <h3>Click on the map to see which monsters are in that location :</h3>
      <Signal idSignal={idSignal} />
      <button onClick={() => handleRefresh()}>OK</button>
      <div className="map_container">
        <img src={map} alt="Ancient Greece" className="map" />
        <div className="map_fraction">
          {mostWanted &&
            fractionArray.map((element, i) => {
              if (mostWanted.find((wanted) => wanted.lastseen == i + 1)) {
                return (
                  <button
                    type="button"
                    // to="/list"
                    id={i + 1}
                    className="fraction_wanted"
                    onClick={() => handleFocus(i)}
                  />
                );
              } else {
                return (
                  <button
                    type="button"
                    // to="/list"
                    id={i + 1}
                    className="fraction"
                    onClick={() => handleFocus(i)}
                  />
                );
              }
            })}
        </div>
      </div>
    </section>
  );
};

export default Map;
