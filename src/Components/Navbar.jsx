import React from "react";
import "./Navbar.css";
function Navbar() {
  return (
    <header className="navbar">

      {/* Left Side */}
      <div className="navbar-left">
        <button className="menu-button">
          ☰
        </button>

        <h2>Admin Dashboard</h2>
      </div>

      {/* Right Side */}
      <div className="navbar-right">

        {/* Notification */}
        <button className="notification-button">
          🔔
          <span className="notification-badge">3</span>
        </button>

        {/* Admin Profile */}
        <div className="admin-profile">

          <div className="profile-icon">
            👤
          </div>

          <div className="profile-info">
            <strong>Admin</strong>
            <small>Administrator</small>
          </div>

        </div>

      </div>

    </header>
  );
}

export default Navbar;