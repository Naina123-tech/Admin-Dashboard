import React, { useState } from "react";
import "./SOSAlerts.css";

const SOSAlerts = () => {
    const [search, setSearch] = useState("");
    const [statusFilter, setStatusFilter] = useState("All");

    const [alerts, setAlerts] = useState([
        {
            id: "SOS001",
            user: "Rahul Sharma",
            phone: "9876543210",
            location: "Kanpur, Uttar Pradesh",
            time: "10:30 AM",
            priority: "High",
            status: "Active",
        },
        {
            id: "SOS002",
            user: "Priya Singh",
            phone: "9123456780",
            location: "Lucknow, Uttar Pradesh",
            time: "11:15 AM",
            priority: "Medium",
            status: "Responded",
        },
        {
            id: "SOS003",
            user: "Aman Verma",
            phone: "9988776655",
            location: "Unnao, Uttar Pradesh",
            time: "12:05 PM",
            priority: "High",
            status: "Resolved",
        },
        {
            id: "SOS004",
            user: "Neha Gupta",
            phone: "9001122334",
            location: "Kanpur, Uttar Pradesh",
            time: "01:20 PM",
            priority: "High",
            status: "Active",
        },
    ]);

    const handleStatusChange = (id, newStatus) => {
        setAlerts(
            alerts.map((alert) =>
                alert.id === id
                    ? { ...alert, status: newStatus }
                    : alert
            )
        );
    };

    const filteredAlerts = alerts.filter((alert) => {
        const matchesSearch =
            alert.id.toLowerCase().includes(search.toLowerCase()) ||
            alert.user.toLowerCase().includes(search.toLowerCase()) ||
            alert.location.toLowerCase().includes(search.toLowerCase());

        const matchesStatus =
            statusFilter === "All" ||
            alert.status === statusFilter;

        return matchesSearch && matchesStatus;
    });

    const activeCount = alerts.filter(
        (alert) => alert.status === "Active"
    ).length;

    const respondedCount = alerts.filter(
        (alert) => alert.status === "Responded"
    ).length;

    const resolvedCount = alerts.filter(
        (alert) => alert.status === "Resolved"
    ).length;

    return (
        <div className="sos-page">

            <div className="sos-header">
                <div>
                    <h1>SOS Monitoring</h1>
                    <p>Monitor and manage emergency SOS alerts</p>
                </div>
            </div>

            {/* Statistics */}

            <div className="sos-stats">

                <div className="sos-stat-card">
                    <h3>{alerts.length}</h3>
                    <p>Total SOS Alerts</p>
                </div>

                <div className="sos-stat-card active-card">
                    <h3>{activeCount}</h3>
                    <p>Active SOS</p>
                </div>

                <div className="sos-stat-card responded-card">
                    <h3>{respondedCount}</h3>
                    <p>Responded</p>
                </div>

                <div className="sos-stat-card resolved-card">
                    <h3>{resolvedCount}</h3>
                    <p>Resolved</p>
                </div>

            </div>

            {/* Filters */}

            <div className="sos-controls">

                <input
                    type="text"
                    placeholder="Search by ID, user or location..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />

                <select
                    value={statusFilter}
                    onChange={(e) =>
                        setStatusFilter(e.target.value)
                    }
                >
                    <option value="All">All Status</option>
                    <option value="Active">Active</option>
                    <option value="Responded">Responded</option>
                    <option value="Resolved">Resolved</option>
                </select>

            </div>

            {/* SOS Table */}

            <div className="sos-table-container">

                <table className="sos-table">

                    <thead>
                        <tr>
                            <th>SOS ID</th>
                            <th>User</th>
                            <th>Phone</th>
                            <th>Location</th>
                            <th>Time</th>
                            <th>Priority</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>

                    <tbody>

                        {filteredAlerts.map((alert) => (

                            <tr key={alert.id}>

                                <td>
                                    <strong>{alert.id}</strong>
                                </td>

                                <td>{alert.user}</td>

                                <td>{alert.phone}</td>

                                <td>{alert.location}</td>

                                <td>{alert.time}</td>

                                <td>
                                    <span
                                        className={`priority ${alert.priority.toLowerCase()}`}
                                    >
                                        {alert.priority}
                                    </span>
                                </td>

                                <td>
                                    <span
                                        className={`status ${alert.status.toLowerCase()}`}
                                    >
                                        {alert.status}
                                    </span>
                                </td>

                                <td>

                                    {alert.status === "Active" && (
                                        <button
                                            className="respond-btn"
                                            onClick={() =>
                                                handleStatusChange(
                                                    alert.id,
                                                    "Responded"
                                                )
                                            }
                                        >
                                            Respond
                                        </button>
                                    )}

                                    {alert.status === "Responded" && (
                                        <button
                                            className="resolve-btn"
                                            onClick={() =>
                                                handleStatusChange(
                                                    alert.id,
                                                    "Resolved"
                                                )
                                            }
                                        >
                                            Resolve
                                        </button>
                                    )}

                                    {alert.status === "Resolved" && (
                                        <span className="completed">
                                            Completed
                                        </span>
                                    )}

                                </td>

                            </tr>

                        ))}

                    </tbody>

                </table>

                {filteredAlerts.length === 0 && (
                    <p className="no-alerts">
                        No SOS alerts found.
                    </p>
                )}

            </div>

        </div>
    );
};

export default SOSAlerts;