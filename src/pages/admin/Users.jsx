import React, { useState } from "react";
import "./Users.css";

const Users = () => {

    const [search, setSearch] = useState("");
    const [statusFilter, setStatusFilter] = useState("All");

    const [users, setUsers] = useState([
        {
            id: 1,
            name: "Naina Gupta",
            email: "naina@gmail.com",
            phone: "9876543210",
            role: "User",
            status: "Active",
            joined: "05 Sep 2026"
        },
        {
            id: 2,
            name: "Maithli Singh ",
            email: "maithli@gmail.com",
            phone: "9876543211",
            role: "User",
            status: "Active",
            joined: "04 Sep 2026"
        },
        {
            id: 3,
            name: "Shreya Mishra",
            email: "shreya@gmail.com",
            phone: "9876543212",
            role: "User",
            status: "Inactive",
            joined: "02 Sep 2026"
        },
        {
            id: 4,
            name: "Pallavi Singh",
            email: "pallavi@gmail.com",
            phone: "9876543213",
            role: "User",
            status: "InActive",
            joined: "01 Sep 2026"
        },
        {
            id: 5,
            name: "Mansi Khushwaha",
            email: "mansi@gmail.com",
            phone: "9876774321",
            role: "User",
            status: "InActive",
            joined: "01 Jan 2026"
        }
    ]);

    const filteredUsers = users.filter((user) => {

        const matchesSearch =
            user.name.toLowerCase().includes(search.toLowerCase()) ||
            user.email.toLowerCase().includes(search.toLowerCase());

        const matchesStatus =
            statusFilter === "All" ||
            user.status === statusFilter;

        return matchesSearch && matchesStatus;
    });

    const deleteUser = (id) => {

        const confirmDelete = window.confirm(
            "Are you sure you want to delete this user?"
        );

        if (confirmDelete) {
            setUsers(users.filter((user) => user.id !== id));
        }
    };

    return (
        <div className="users-page">

            {/* Page Header */}
            <div className="users-header">

                <div>
                    <h1>User Management</h1>
                    <p>Manage and monitor registered users</p>
                </div>

                <button className="add-user-btn">
                    + Add User
                </button>

            </div>


            {/* User Statistics */}
            <div className="user-stats">

                <div className="user-stat-card">
                    <h3>{users.length}</h3>
                    <p>Total Users</p>
                </div>

                <div className="user-stat-card">
                    <h3>
                        {users.filter(
                            user => user.status === "Active"
                        ).length}
                    </h3>
                    <p>Active Users</p>
                </div>

                <div className="user-stat-card">
                    <h3>
                        {users.filter(
                            user => user.status === "Inactive"
                        ).length}
                    </h3>
                    <p>Inactive Users</p>
                </div>

            </div>


            {/* Search and Filter */}
            <div className="user-controls">

                <input
                    type="text"
                    placeholder="Search by name or email..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />

                <select
                    value={statusFilter}
                    onChange={(e) => setStatusFilter(e.target.value)}
                >
                    <option value="All">All Users</option>
                    <option value="Active">Active</option>
                    <option value="Inactive">Inactive</option>
                </select>

            </div>


            {/* Users Table */}
            <div className="users-table-container">

                <table className="users-table">

                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>User</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Role</th>
                            <th>Status</th>
                            <th>Joined</th>
                            <th>Actions</th>
                        </tr>
                    </thead>

                    <tbody>

                        {filteredUsers.length > 0 ? (

                            filteredUsers.map((user) => (

                                <tr key={user.id}>

                                    <td>#{user.id}</td>

                                    <td className="user-name">
                                        {user.name}
                                    </td>

                                    <td>
                                        {user.email}
                                    </td>

                                    <td>
                                        {user.phone}
                                    </td>

                                    <td>
                                        <span className="role-badge">
                                            {user.role}
                                        </span>
                                    </td>

                                    <td>

                                        <span
                                            className={
                                                user.status === "Active"
                                                    ? "status active"
                                                    : "status inactive"
                                            }
                                        >
                                            {user.status}
                                        </span>

                                    </td>

                                    <td>
                                        {user.joined}
                                    </td>

                                    <td className="action-buttons">

                                        <button className="view-btn">
                                            View
                                        </button>

                                        <button className="edit-btn">
                                            Edit
                                        </button>

                                        <button
                                            className="delete-btn"
                                            onClick={() =>
                                                deleteUser(user.id)
                                            }
                                        >
                                            Delete
                                        </button>

                                    </td>

                                </tr>

                            ))

                        ) : (

                            <tr>
                                <td
                                    colSpan="8"
                                    className="no-users"
                                >
                                    No users found
                                </td>
                            </tr>

                        )}

                    </tbody>

                </table>

            </div>

        </div>
    );
};

export default Users;