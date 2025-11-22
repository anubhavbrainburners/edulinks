"use client";

import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const router = useRouter();

    // Check if user is authenticated on mount
    useEffect(() => {
        checkAuth();
    }, []);

    const checkAuth = async () => {
        try {
            const token = localStorage.getItem("authToken");
            const user = JSON.parse(localStorage.getItem("userData"));

            if (!token || !user) {
                setLoading(false);
                return;
            }

            // we already have userData from verify OTP
            setUser(user);
            setIsAuthenticated(true);
        } catch (error) {
            console.error("Auth check failed:", error);
            localStorage.removeItem("authToken");
            localStorage.removeItem("userData");
            setUser(null);
            setIsAuthenticated(false);
        } finally {
            setLoading(false);
        }
    };


    const login = async (email) => {
        try {
            const response = await axios.post(
                "https://edulink.primedepthlabs.com/v1/auth/login",
                { email }
            );

            // Success means -> OTP sent, NOT logged in yet
            if (response?.data?.success) {
                return { success: true };
            }

            return {
                success: false,
                error: response?.data?.message || "Login failed",
            };
        } catch (error) {
            console.error("Login error:", error);
            return {
                success: false,
                error: error.response?.data?.message || "Login failed",
            };
        }
    };

    const signup = async (userData) => {
        try {
            const response = await axios.post(
                "https://edulink.primedepthlabs.com/v1/auth/register",
                userData
            );

            if (response?.data?.success) {
                return {
                    success: true,
                    data: response.data,
                };
            }

            return {
                success: false,
                error: response?.data?.message || "Signup failed",
            };

        } catch (error) {
            // Match old React error handling
            const apiMessage = error?.response?.data?.message;
            const code = error?.response?.data?.code;

            return {
                success: false,
                error: apiMessage || "Signup failed",
                code,
            };
        }
    };

    const logout = () => {
        localStorage.removeItem("authToken");
        localStorage.removeItem("selectedTest");
        localStorage.removeItem("selectedSection");
        localStorage.removeItem("selectedDifficulty");
        localStorage.removeItem("generatedQuestions");

        setUser(null);
        setIsAuthenticated(false);
        router.push("/login");
    };

    const updateUser = (updatedUser) => {
        setUser(updatedUser);
    };

    return (
        <AuthContext.Provider
            value={{
                user,
                loading,
                isAuthenticated,
                login,
                signup,
                logout,
                updateUser,
                checkAuth,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
};