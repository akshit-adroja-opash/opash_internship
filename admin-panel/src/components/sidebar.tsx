import type { FC } from "react";
import { NavLink } from "react-router-dom";
import { FaChartLine, FaUsers, FaCog } from "react-icons/fa";

const Sidebar: FC = () => {
  return (
    <aside className="sidebar">
      <h2>📊 Admin Panel</h2>
      <ul style={{ listStyle: "none", padding: 0 }}>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active-link" : "")}
          >
            <FaChartLine style={{ marginRight: "0.5rem" }} />
            Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/users"
            className={({ isActive }) => (isActive ? "active-link" : "")}
          >
            <FaUsers style={{ marginRight: "0.5rem" }} />
            Users
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/settings"
            className={({ isActive }) => (isActive ? "active-link" : "")}
          >
            <FaCog style={{ marginRight: "0.5rem" }} />
            Settings
          </NavLink>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
