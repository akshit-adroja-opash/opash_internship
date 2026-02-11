import type { FC } from "react";
import { useState, useContext } from "react";
import { FiMoon,  FiUser,  FiAlertTriangle } from "react-icons/fi";
import { ThemeContext } from "../contexts/ThemeContextType";
import "./settings.css";

const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return { darkMode: context.darkMode, toggleDarkMode: context.toggleDarkMode };
};

const Settings: FC = () => {
  const { darkMode, toggleDarkMode } = useTheme();
  const [notifications, setNotifications] = useState(true);
  const [emailUpdates, setEmailUpdates] = useState(true);

  return (
    <div className="settings-view">
      <header className="settings-header">
        <h1>Account Settings</h1>
        <p>Manage your profile, notifications, and app preferences.</p>
      </header>

      <div className="settings-grid">
        {/* Appearance Section */}
        <section className="settings-card">
          <div className="section-title">
            <FiMoon className="section-icon" />
            <h2>Preferences</h2>
          </div>
          
          <div className="setting-item">
            <div className="setting-info">
              <label>Dark Mode</label>
              <p>Adjust the appearance of the interface.</p>
            </div>
            <label className="switch">
              <input type="checkbox" checked={darkMode} onChange={toggleDarkMode} />
              <span className="slider round"></span>
            </label>
          </div>

          <div className="setting-item">
            <div className="setting-info">
              <label>Push Notifications</label>
              <p>Receive alerts about new orders.</p>
            </div>
            <label className="switch">
              <input type="checkbox" checked={notifications} onChange={(e) => setNotifications(e.target.checked)} />
              <span className="slider round"></span>
            </label>
          </div>

          <div className="setting-item">
            <div className="setting-info">
              <label>Email Reports</label>
              <p>Weekly summary of sales and traffic.</p>
            </div>
            <label className="switch">
              <input type="checkbox" checked={emailUpdates} onChange={(e) => setEmailUpdates(e.target.checked)} />
              <span className="slider round"></span>
            </label>
          </div>
        </section>

        {/* Profile Section */}
        <section className="settings-card">
          <div className="section-title">
            <FiUser className="section-icon" />
            <h2>Profile Details</h2>
          </div>
          <div className="form-stack">
            <div className="input-group">
              <label>Email Address</label>
              <input type="email" placeholder="admin@gmail.com" />
            </div>
            <div className="input-group">
              <label>Current Password</label>
              <input type="password" placeholder="••••••••" />
            </div>
            <div className="action-buttons">
              <button className="save-btn">Save Changes</button>
              <button className="ghost-btn">Reset</button>
            </div>
          </div>
        </section>

        {/* Danger Zone */}
        <section className="settings-card danger-zone">
          <div className="section-title">
            <FiAlertTriangle className="section-icon red" />
            <h2>Danger Zone</h2>
          </div>
          <p className="danger-text">Once you delete all data, there is no going back. Please be certain.</p>
          <button className="danger-btn">Delete Data</button>
        </section>
      </div>
    </div>
  );
};

export default Settings;