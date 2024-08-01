
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faCog } from '@fortawesome/free-solid-svg-icons';
import './Navbar.css';

function Navbar() {
  return (
    <div className="navbar">
      <input type="text" placeholder="Search Here..." />
      <div className="navbar-icons">
        <FontAwesomeIcon icon={faCog} className="icon" />
        <FontAwesomeIcon icon={faBell} className="icon" />
        <img src="pic.avif" alt="Profile" />
      </div>
    </div>
  );
}

export default Navbar;
