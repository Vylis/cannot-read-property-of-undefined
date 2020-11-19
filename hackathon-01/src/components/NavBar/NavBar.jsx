import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return(
    <header className='header'>
      <h1>MYTHOLODEX</h1>
      <nav className='nav_container'>
        <button type="button" className='nav_btn'>MAP</button>
        <button type="button" className='nav_btn'>LIST</button>
        {/* <NavLink></NavLink>
        <NavLink></NavLink> */}
      </nav>
    </header>
  )
}

export default NavBar;