import React from "react";
import "./Analytics.css";

const Analytics = () => {
    return (
        <div className="analytics-page">

            <div className="page-header">
                <div>
                    <h1>Analytics</h1>
                    <p>Monitor platform performance and incident statistics</p>
                </div>
            </div>

            {/* Statistics Cards */}
            <div className="analytics-cards">

                <div className="analytics-card">
                    <h3>Total Users</h3>
                    <h2>1,250</h2>
                    <span>+12% this month</span>
                </div>

                <div className="analytics-card">
                    <h3>Total Incidents</h3>
                    <h2>348</h2>
                    <span>+8% this month</span>
                </div>

                <div className="analytics-card">
                    <h3>SOS Alerts</h3>
                    <h2>126</h2>
                    <span>+5% this month</span>
                </div>

                <div className="analytics-card">
                    <h3>Resolved Incidents</h3>
                    <h2>289</h2>
                    <span>83% resolution rate</span>
                </div>

            </div>

            {/* Incident Overview */}
            <div className="analytics-section">

                <h2>Incident Overview</h2>

                <div className="chart-container">

                    <div className="chart-bar">
                        <span>Jan</span>
                        <div style={{ height: "45%" }}></div>
                    </div>

                    <div className="chart-bar">
                        <span>Feb</span>
                        <div style={{ height: "65%" }}></div>
                    </div>

                    <div className="chart-bar">
                        <span>Mar</span>
                        <div style={{ height: "50%" }}></div>
                    </div>

                    <div className="chart-bar">
                        <span>Apr</span>
                        <div style={{ height: "80%" }}></div>
                    </div>

                    <div className="chart-bar">
                        <span>May</span>
                        <div style={{ height: "70%" }}></div>
                    </div>

                    <div className="chart-bar">
                        <span>Jun</span>
                        <div style={{ height: "90%" }}></div>
                    </div>

                </div>

            </div>

            {/* Incident Categories */}
            <div className="analytics-section">

                <h2>Incident Categories</h2>

                <div className="category-list">

                    <div className="category-row">
                        <span>Harassment</span>
                        <strong>95</strong>
                    </div>

                    <div className="category-row">
                        <span>Medical Emergency</span>
                        <strong>82</strong>
                    </div>

                    <div className="category-row">
                        <span>Accident</span>
                        <strong>71</strong>
                    </div>

                    <div className="category-row">
                        <span>Safety Threat</span>
                        <strong>64</strong>
                    </div>

                    <div className="category-row">
                        <span>Other</span>
                        <strong>36</strong>
                    </div>

                </div>

            </div>

        </div>
    );
};

export default Analytics;