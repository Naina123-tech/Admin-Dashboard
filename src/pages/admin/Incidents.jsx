import React, { useState } from "react";
import "./Incidents.css";

const incidentsData = [
  {
    id: "INC001",
    type: "Theft",
    location: "Kanpur",
    date: "07 Sep 2026, 10:30 AM",
    priority: "High",
    status: "Pending",
  },
  {
    id: "INC002",
    type: "Accident",
    location: "Unnao",
    date: "07 Sep 2026, 09:15 AM",
    priority: "Critical",
    status: "Investigating",
  },
  {
    id: "INC003",
    type: "Harassment",
    location: "Kanpur",
    date: "06 Sep 2026, 08:45 PM",
    priority: "High",
    status: "Resolved",
  },
  {
    id: "INC004",
    type: "Missing Person",
    location: "Shuklaganj",
    date: "06 Sep 2026, 06:20 PM",
    priority: "Critical",
    status: "Pending",
  },
  {
    id: "INC005",
    type: "Other",
    location: "Kanpur",
    date: "06 Sep 2026, 03:10 PM",
    priority: "Medium",
    status: "Resolved",
  },
];

function Incidents() {
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [typeFilter, setTypeFilter] = useState("All");

  const filteredIncidents = incidentsData.filter((incident) => {
    const matchesSearch =
      incident.id.toLowerCase().includes(search.toLowerCase()) ||
      incident.type.toLowerCase().includes(search.toLowerCase()) ||
      incident.location.toLowerCase().includes(search.toLowerCase());

    const matchesStatus =
      statusFilter === "All" || incident.status === statusFilter;

    const matchesType =
      typeFilter === "All" || incident.type === typeFilter;

    return matchesSearch && matchesStatus && matchesType;
  });

  return (
    <div className="incidents-page">

      {/* Page Header */}
      <div className="incidents-header">
        <div>
          <h1>Incident Management</h1>
          <p>Monitor and manage all reported incidents</p>
        </div>

        <button className="report-btn">
          + Report Incident
        </button>
      </div>

      {/* Statistics */}
      <div className="incident-stats">

        <div className="incident-stat-card">
          <h3>Total Incidents</h3>
          <p>124</p>
        </div>

        <div className="incident-stat-card">
          <h3>Pending</h3>
          <p>32</p>
        </div>

        <div className="incident-stat-card">
          <h3>Investigating</h3>
          <p>18</p>
        </div>

        <div className="incident-stat-card">
          <h3>Resolved</h3>
          <p>74</p>
        </div>

      </div>

      {/* Filters */}
      <div className="incident-filters">

        <input
          type="text"
          placeholder="Search incidents..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
        >
          <option value="All">All Status</option>
          <option value="Pending">Pending</option>
          <option value="Investigating">Investigating</option>
          <option value="Resolved">Resolved</option>
        </select>

        <select
          value={typeFilter}
          onChange={(e) => setTypeFilter(e.target.value)}
        >
          <option value="All">All Types</option>
          <option value="Theft">Theft</option>
          <option value="Accident">Accident</option>
          <option value="Harassment">Harassment</option>
          <option value="Missing Person">Missing Person</option>
          <option value="Other">Other</option>
        </select>

      </div>

      {/* Incident Table */}
      <div className="incident-table-container">

        <table className="incident-table">

          <thead>
            <tr>
              <th>Incident ID</th>
              <th>Type</th>
              <th>Location</th>
              <th>Date & Time</th>
              <th>Priority</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>

            {filteredIncidents.length > 0 ? (
              filteredIncidents.map((incident) => (

                <tr key={incident.id}>

                  <td>
                    <strong>{incident.id}</strong>
                  </td>

                  <td>{incident.type}</td>

                  <td>{incident.location}</td>

                  <td>{incident.date}</td>

                  <td>
                    <span
                      className={`priority ${incident.priority.toLowerCase()}`}
                    >
                      {incident.priority}
                    </span>
                  </td>

                  <td>
                    <span
                      className={`status ${incident.status
                        .toLowerCase()
                        .replace(" ", "-")}`}
                    >
                      {incident.status}
                    </span>
                  </td>

                  <td>
                    <button className="view-btn">
                      View
                    </button>
                  </td>

                </tr>

              ))
            ) : (
              <tr>
                <td colSpan="7" className="no-data">
                  No incidents found
                </td>
              </tr>
            )}

          </tbody>

        </table>

      </div>

    </div>
  );
}

export default Incidents;