import type { FC } from "react";
import "./header.css";

const Header: FC = () => {
  return (
    <header className="header">
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <h1>Dashboard</h1>
        <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
          <div style={{
            width: "40px",
            height: "40px",
            borderRadius: "50%",
            background: "linear-gradient(135deg, #3b82f6 0%, #10b981 100%)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "white",
            fontWeight: "bold",
          }}>
            AD
          </div>
          <span style={{ color: "#6b7280", fontWeight: "500" }}>Admin User</span>
        </div>
      </div>
    </header>
  );
};

export default Header;