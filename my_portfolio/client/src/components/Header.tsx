/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { NavLink } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import './Navbar.css'; // Reuse existing styles, extend as needed

const Header: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className={`bg-[#0c0e11] border-b border-[#23262a]/30 shadow-2xl shadow-black/50 fixed top-0 z-50 flex justify-between items-center w-full px-10 py-4 h-20 font-['Manrope'] antialiased tracking-tight`}>
      {/* Left: Brand + Nav */}
      <div className="flex items-center gap-8">
        <h1 className="text-2xl font-black tracking-tighter text-[#f9f9fd]">PRECISION.IO</h1>
        <nav className="hidden md:flex gap-6">
          <NavLink 
            to="/" 
            className={({ isActive }) => `text-[#aaabaf] hover:text-[#5bff49] transition-colors ${isActive ? 'text-[#5bff49] border-b-2 border-[#5bff49] pb-1 font-bold' : ''}`}
          >
            Analytics
          </NavLink>
          <NavLink 
            to="/portfolio" 
            className={({ isActive }) => `text-[#aaabaf] hover:text-[#5bff49] transition-colors ${isActive ? 'text-[#5bff49] border-b-2 border-[#5bff49] pb-1 font-bold' : ''}`}
          >
            Portfolio
          </NavLink>
          <a className="text-[#aaabaf] hover:text-[#5bff49] transition-colors" href="#">Markets</a>
        </nav>
      </div>

      {/* Right: Search + Icons + Theme */}
      <div className="flex items-center gap-4">
        <div className="relative hidden sm:block">
          <input 
            className="bg-[#171a1d] border border-[#23262a]/30 rounded-lg pl-10 pr-4 py-2 text-sm focus:ring-1 focus:ring-[#5bff49] w-64 placeholder:text-[#aaabaf]" 
            placeholder="Search assets..." 
            type="text"
          />
          <span className="material-symbols-outlined absolute left-3 top-2.5 text-[#aaabaf] text-sm">search</span>
        </div>
        <button className="p-2 text-[#aaabaf] hover:bg-[#23262a] transition-all duration-300 rounded-lg active:scale-95">
          <span className="material-symbols-outlined">notifications</span>
        </button>
        <button className="p-2 text-[#aaabaf] hover:bg-[#23262a] transition-all duration-300 rounded-lg active:scale-95">
          <span className="material-symbols-outlined">account_circle</span>
        </button>
        <button
          className="theme-toggle p-2 text-[#aaabaf] hover:bg-[#23262a] transition-all duration-300 rounded-lg active:scale-95" 
          onClick={toggleTheme}
          aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
        >
          {theme === 'dark' ? '☀️' : '🌙'}
        </button>
      </div>
    </header>
  );
};

export default Header;
