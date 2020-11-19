import React from "react";

import "../../styles/css/Header/Header.css";
import logo_left from "../../styles/pictures/logo_left.png";
import logo_right from "../../styles/pictures/logo_right.png";

const title = "MYTHOLODEX";

const Header = () => {
  return (
    <header className="header">
      <img src={logo_left} alt="logo" className="logo" />
      <h1 className="site_title">{title}</h1>
      <img src={logo_right} alt="logo" className="logo" />
    </header>
  );
};

export default Header;
