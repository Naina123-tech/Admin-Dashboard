import { createContext, useContext, useState } from "react";

// Create Authentication Context
const AuthContext = createContext();

// Authentication Provider
export const AuthProvider = ({ children }) => {

    // Stores whether admin is logged in or not
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    // Login function
    const login = () => {
        setIsAuthenticated(true);
    };

    // Logout function
    const logout = () => {
        setIsAuthenticated(false);
    };

    return (
        <AuthContext.Provider
            value={{
                isAuthenticated,
                login,
                logout
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

// Custom hook to use authentication
export const useAuth = () => {
    return useContext(AuthContext);
};