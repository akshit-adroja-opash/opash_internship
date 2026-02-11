import type { FC } from "react";
import { FiSearch, FiBell, FiChevronDown } from "react-icons/fi"; // Icons add kiye hain professional look ke liye
import "./header.css";

const Header: FC = () => {
  return (
    <header className="header">
      <div className="header-container">
        <div className="header-left">
          <h1 className="page-title">Dashboard</h1>
        </div>

        <div className="header-center">
          <div className="search-wrapper">
            <FiSearch className="search-icon" />
            <input type="text" placeholder="Search data..." />
          </div>
        </div>

        <div className="header-right">
          <button className="icon-btn">
            <FiBell size={20} />
            <span className="notification-dot"></span>
          </button>
          
          <div className="profile-section">
            <div className="avatar">AD</div>
            <div className="user-info">
              <span className="user-name">Admin User</span>
              <span className="user-role">Super Admin</span>
            </div>
            <FiChevronDown className="dropdown-icon" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;