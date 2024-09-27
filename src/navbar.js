import React from 'react';
import { NavLink } from 'react-router-dom';
import './navbar.css';
import logo from './ryom.jpg';

function Navbar() {
  return (
    <nav className="navbar">
      <img 
        src={logo} 
        alt="alemania Programming Logo" 
        className="logo" 
        onClick={() => { window.location.href = '/home'; }} 
      />
      <span className="header-title">Tiago</span>
      <ul className="nav-links">
        <li className="nav-link">
          <NavLink exact to="/home" activeClassName="active">Home</NavLink>
        </li>
        <li className="nav-link">
          <NavLink to="/about" activeClassName="active">About</NavLink>
        </li>
        <li className="nav-link">
          <NavLink to="/contact" activeClassName="active">Contact Us</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;