import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import AdminLogin from "./pages/auth/AdminLogin";
import AdminDashboard from "./pages/admin/AdminDashboard";

import { useAuth } from "./context/AuthContext";
import Users from "./pages/admin/Users";

// Protected Route
const ProtectedRoute = ({ children }) => {

    const { isAuthenticated } = useAuth();

    if (!isAuthenticated) {
        // Admin is not logged in
        alert("Please login first to access the Admin Dashboard.");

        return <Navigate to="/admin-login" replace />;
    }

    // Admin is authenticated
    return children;
};


function App() {

    return (
        <BrowserRouter>

            <Routes>

                {/* Admin Login */}
                <Route
                    path="/admin-login"
                    element={<AdminLogin />}
                />

                {/* Protected Admin Dashboard */}
                <Route
                    path="/admin-dashboard"
                    element={
                        <ProtectedRoute>
                            <AdminDashboard />
                        </ProtectedRoute>
                    }
                />

                {/* Default route */}
                <Route
                    path="/"
                    element={<Navigate to="/admin-login" replace />}
                />

                {/* Unknown URL */}
                <Route
                    path="*"
                    element={<Navigate to="/admin-login" replace />}
                />
                <Route path="/users"
                element={<ProtectedRoute>
                    <Users/>
                </ProtectedRoute>}
                />

            </Routes>

        </BrowserRouter>
    );
}

export default App;