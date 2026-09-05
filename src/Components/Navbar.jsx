import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import "./Navbar.css";

function Navbar() {

  // Get logout function from AuthContext
  const { logout } = useAuth();

  // Used to navigate to another page
  const navigate = useNavigate();

  // Handle logout
  const handleLogout = () => {
    logout();
    navigate("/admin-login");
  };

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


        {/* Logout Button */}
        <button
          className="logout-button"
          onClick={handleLogout}
        >
          Logout
        </button>

      </div>

    </header>
  );
}

export default Navbar;