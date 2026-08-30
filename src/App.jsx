import React from "react";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import StatCard from "./components/StatCard";

function App() {
  return (
    <div>

      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div style={{ marginLeft: "250px" }}>

        {/* Navbar */}
        <Navbar />

        {/* Dashboard Content */}
        <main style={{ padding: "25px" }}>

          <h1>Welcome to Suraksha Setu</h1>
          <p>Admin Dashboard</p>

          {/* Statistics Cards */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: "20px",
              marginTop: "25px"
            }}
          >

            <StatCard
              title="Total Users"
              value="1250"
              icon="👥"
            />

            <StatCard
              title="Total Reports"
              value="342"
              icon="📋"
            />

            <StatCard
              title="Pending Reports"
              value="48"
              icon="⏳"
            />

            <StatCard
              title="Resolved Reports"
              value="294"
              icon="✅"
            />

          </div>

        </main>

      </div>

    </div>
  );
}

export default App;