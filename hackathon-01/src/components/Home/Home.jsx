import React from "react";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";

const Home = () => {
  return (
    <section className="home_container">
      <div className="most_wanted_container">
        <h2>Most wanted monsters :</h2>
      </div>
      <div className="last_rewards">
        <h2>Last rewards :</h2>
      </div>
    </section>
  );
};

export default Home;
