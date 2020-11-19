import React from 'react'; 
import map from '../../styles/pictures/map.png'

const Map = () => {
  return(
    <section className=" map_container">
      <h3>Click on the map to see which monsters are in that location :</h3>
      <img src={map} alt="Ancient Greece" className="map"/>
    </section>
  )
}

export default Map;