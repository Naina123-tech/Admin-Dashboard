import React from "react";
import "./Sidebar.css";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="sidebar">
      
      {/* Logo / Project Name */}
      <div className="sidebar-logo">
        🛡️ Suraksha Setu
      </div>

      {/* Navigation Menu */}
      <nav className="sidebar-menu">

        <a href="#" className="menu-item active">
          📊 <span>Dashboard</span>
          
        </a> 

        {/*Users*/}
        <Link to="/users" className="menu-item">
          👥 <span>Users</span>
          </Link>
        

        <a href="#" className="menu-item">
          📋 <span>Incidents</span>
        </a>

        <a href="#" className="menu-item">
          🚨 <span>SOS Alerts</span>
        </a>

        <a href="#" className="menu-item">
          ✅ <span>Verification</span>
        </a>

        <a href="#" className="menu-item">
          📈 <span>Analytics</span>
        </a>

        <a href="#" className="menu-item">
          🔔 <span>Notifications</span>
        </a>

        <a href="#" className="menu-item">
          ⚙️ <span>Settings</span>
        </a>

      </nav>

      {/* Logout */}
      <div className="sidebar-bottom">
        <a href="#" className="menu-item logout">
          🚪 <span>Logout</span>
        </a>
      </div>

    </div>
  );
}

export default Sidebar;