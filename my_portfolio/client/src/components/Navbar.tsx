import React from 'react';
import { Link } from 'react-router-dom';
<<<<<<< HEAD
import { NavLink } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import './Navbar.css';

const Navbar: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

=======
import './Navbar.css';
import {NavLink} from 'react-router-dom';

const Navbar: React.FC = () => {
>>>>>>> 141e9be54f6220e14431bd7378ce7cb90bf863d1
  return (
    <nav className="navbar">
      <h1 className="navbar-title">My App</h1>
      <ul className="navbar-links">
        <li><Link to="/">Dashboard</Link></li>
<<<<<<< HEAD
        <li><NavLink to="/login">login</NavLink></li>
        <li><Link to="/register">Register</Link></li>
        <li>
          <button 
            className="theme-toggle" 
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          >
            {theme === 'dark' ? '☀️' : '🌙'}
          </button>
        </li>
=======
        {/* Corrected closing tag below */}
        <li><NavLink to="/login">login</NavLink></li>
        <li><Link to="/register">Register</Link></li>
>>>>>>> 141e9be54f6220e14431bd7378ce7cb90bf863d1
      </ul>
    </nav>
  );
};

export default Navbar;
