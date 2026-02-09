import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import {NavLink} from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <h1 className="navbar-title">My App</h1>
      <ul className="navbar-links">
        <li><Link to="/">Dashboard</Link></li>
        {/* Corrected closing tag below */}
        <li><NavLink to="/login">login</NavLink></li>
        <li><Link to="/register">Register</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
