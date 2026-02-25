import React from 'react';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import './Navbar.css';

const Navbar: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="navbar">
      <h1 className="navbar-title">My App</h1>
      <ul className="navbar-links">
        <li><Link to="/">Dashboard</Link></li>
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
      </ul>
    </nav>
  );
};

export default Navbar;
