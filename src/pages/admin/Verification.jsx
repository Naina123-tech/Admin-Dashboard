import React, { useState } from "react";
import "./Verification.css";

const Verification = () => {

    const [requests, setRequests] = useState([
        {
            id: 1,
            name: "Priya Sharma",
            email: "priya@example.com",
            document: "Aadhaar Card",
            status: "Pending"
        },
        {
            id: 2,
            name: "Rahul Verma",
            email: "rahul@example.com",
            document: "Driving License",
            status: "Pending"
        },
        {
            id: 3,
            name: "Anjali Singh",
            email: "anjali@example.com",
            document: "Passport",
            status: "Pending"
        }
    ]);

    const updateStatus = (id, status) => {
        setRequests(
            requests.map((request) =>
                request.id === id
                    ? { ...request, status }
                    : request
            )
        );
    };

    return (
        <div className="verification-page">

            <div className="page-header">
                <h1>User Verification</h1>
                <p>Review and verify user identity documents</p>
            </div>

            <div className="verification-table-container">

                <table className="verification-table">

                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Document</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>

                    <tbody>

                        {requests.map((request) => (

                            <tr key={request.id}>

                                <td>{request.name}</td>

                                <td>{request.email}</td>

                                <td>{request.document}</td>

                                <td>
                                    <span
                                        className={`status ${request.status.toLowerCase()}`}
                                    >
                                        {request.status}
                                    </span>
                                </td>

                                <td className="action-buttons">

                                    {request.status === "Pending" && (
                                        <>
                                            <button
                                                className="approve-btn"
                                                onClick={() =>
                                                    updateStatus(
                                                        request.id,
                                                        "Approved"
                                                    )
                                                }
                                            >
                                                Approve
                                            </button>

                                            <button
                                                className="reject-btn"
                                                onClick={() =>
                                                    updateStatus(
                                                        request.id,
                                                        "Rejected"
                                                    )
                                                }
                                            >
                                                Reject
                                            </button>
                                        </>
                                    )}

                                </td>

                            </tr>

                        ))}

                    </tbody>

                </table>

            </div>

        </div>
    );
};

export default Verification;