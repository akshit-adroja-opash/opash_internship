import type { FC } from "react";
import { NavLink } from "react-router-dom";
import { FiGrid, FiUsers, FiSettings, FiShoppingBag, FiLogOut } from "react-icons/fi"; // Modern thinner icons
import "./sidebar.css";

const Sidebar: FC = () => {
  return (
    <aside className="sidebar">
      <div className="sidebar-brand">
        <div className="logo-icon">A</div>
        <span className="brand-name">Admin Akshit</span>
      </div>

      <nav className="sidebar-nav">
        <p className="nav-label">Main Menu</p>
        <ul className="nav-list">
          <li className="nav-item">
            <NavLink to="/" className={({ isActive }) => (isActive ? "active-link" : "nav-link")}>
              <FiGrid className="nav-icon" />
              <span>Dashboard</span>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/users" className={({ isActive }) => (isActive ? "active-link" : "nav-link")}>
              <FiUsers className="nav-icon" />
              <span>Users</span>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/Product" className={({ isActive }) => (isActive ? "active-link" : "nav-link")}>
              <FiShoppingBag className="nav-icon" />
              <span>Products</span>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/settings" className={({ isActive }) => (isActive ? "active-link" : "nav-link")}>
              <FiSettings className="nav-icon" />
              <span>Settings</span>
            </NavLink>
          </li>
        </ul>
      </nav>

      <div className="sidebar-footer">
        <button className="logout-btn">
          <FiLogOut />
          <span>Logout</span>
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;