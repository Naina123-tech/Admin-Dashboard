import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import "./AdminLogin.css";

function AdminLogin() {

    // Store email and password
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    // Store error message
    const [error, setError] = useState("");

    // Get login function from AuthContext
    const { login } = useAuth();

    // Used to navigate to another page
    const navigate = useNavigate();

    // Handle login form submission
    const handleLogin = (e) => {

        // Prevent page refresh
        e.preventDefault();

        // Clear previous error
        setError("");

        // Temporary admin credentials
        const adminEmail = "admin@gmail.com";
        const adminPassword = "admin123";

        // Check credentials
        if (email === adminEmail && password === adminPassword) {

            // Authentication successful
            login();

            // Navigate to Admin Dashboard
            navigate("/admin-dashboard");

        } else {

            // Authentication failed
            setError("Invalid email or password.");
        }
    };

    return (
        <div className="login-container">

            <div className="login-box">

                <h2>Admin Login</h2>

                <p className="login-subtitle">
                    Login to access the Admin Dashboard
                </p>

                <form onSubmit={handleLogin}>

                    {/* Email */}
                    <div className="form-group">
                        <label htmlFor="email">
                            Email
                        </label>

                        <input
                            id="email"
                            type="email"
                            placeholder="Enter admin email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>

                    {/* Password */}
                    <div className="form-group">
                        <label htmlFor="password">
                            Password
                        </label>

                        <input
                            id="password"
                            type="password"
                            placeholder="Enter password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>

                    {/* Error Message */}
                    {error && (
                        <p className="login-error">
                            {error}
                        </p>
                    )}

                    {/* Login Button */}
                    <button type="submit" className="login-button">
                        Login
                    </button>

                </form>

            </div>

        </div>
    );
}

export default AdminLogin;