import type { FC } from "react";
import { useState } from "react";
import { useTheme } from "../contexts/useTheme";
import "./settings.css";

const Settings: FC = () => {
  const { darkMode, toggleDarkMode } = useTheme();
  const [notifications, setNotifications] = useState(true);
  const [emailUpdates, setEmailUpdates] = useState(true);

  return (
    <div className="settings-container">
      <h1>⚙️ Settings</h1>

      <div className="settings-section">
        <h2>Preferences</h2>
        
        <div className="settings-group">
          <label>
            <input
              type="checkbox"
              checked={notifications}
              onChange={(e) => setNotifications(e.target.checked)}
            />
            Enable Notifications
          </label>
          <span style={{ color: notifications ? "#10b981" : "#ef4444" }}>
            {notifications ? "ON" : "OFF"}
          </span>
        </div>

        <div className="settings-group">
          <label>
            <input
              type="checkbox"
              checked={darkMode}
              onChange={toggleDarkMode}
            />
            Dark Mode
          </label>
          <span style={{ color: darkMode ? "#10b981" : "#ef4444" }}>
            {darkMode ? "ON" : "OFF"}
          </span>
        </div>

        <div className="settings-group">
          <label>
            <input
              type="checkbox"
              checked={emailUpdates}
              onChange={(e) => setEmailUpdates(e.target.checked)}
            />
            Email Updates
          </label>
          <span style={{ color: emailUpdates ? "#10b981" : "#ef4444" }}>
            {emailUpdates ? "ON" : "OFF"}
          </span>
        </div>
      </div>

      <div className="settings-section">
        <h2>Account</h2>
        
        <div className="form-group">
          <label>Email Address</label>
          <input type="email" placeholder="admin@example.com" />
        </div>

        <div className="form-group">
          <label>Password</label>
          <input type="password" placeholder="••••••••" />
        </div>

        <div style={{ display: "flex", gap: "1rem" }}>
          <button>Save Changes</button>
          <button className="warning">Reset Password</button>
        </div>
      </div>

      <div className="settings-section">
        <h2>Danger Zone</h2>
        <p style={{ marginBottom: "1rem", color: "#ef4444" }}>
          Careful! These actions cannot be undone.
        </p>
        <button className="danger">Delete All Data</button>
      </div>
    </div>
  );
};

export default Settings;