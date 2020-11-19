import React, { useState } from "react";
import { Link } from "react-router-dom";

import map from "../../styles/pictures/greece_map.png";
import "../../styles/css/Map/Map.css";

const nbFraction = 225;
const fractionArray = [];
for (let i = 0; i < nbFraction; i++) {
  fractionArray.push("");
}

const Map = () => {
  return (
    <section className=" map_page_container">
      <h3>Click on the map to see which monsters are in that location :</h3>
      <div className="map_container">
        <img src={map} alt="Ancient Greece" className="map" />
        <div className="map_fraction">
          {fractionArray.map((element, index) => (
            <Link to="/list" id={index}>
              <div
                to="#map_monsters_list"
                className={`fraction ${index+1}`}
                id={index + 1}
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Map;
