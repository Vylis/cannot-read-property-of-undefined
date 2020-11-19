import React from "react";
import { NavLink } from "react-router-dom";

import "../../styles/css/NavBar/NavBar.css";

const NavBar = () => {
  return (
    <nav className="nav_container">
      <NavLink exact to="/" className="nav_btn" activeClassName="selected">
        HOME
      </NavLink>
      <NavLink to="/map" className="nav_btn" activeClassName="selected">
        MAP
      </NavLink>
      <NavLink to="/MonsterList" className="nav_btn" activeClassName="selected">
        LIST
      </NavLink>
    </nav>
  );
};

export default NavBar;
