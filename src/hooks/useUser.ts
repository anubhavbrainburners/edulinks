"use client";

import { useState, useEffect } from "react";
import { useAuth } from "./AuthContext";
import axios from "axios";

export const useUser = () => {
    const { user, isAuthenticated, loading: authLoading, updateUser } = useAuth();
    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (authLoading) {
            return;
        }

        if (!isAuthenticated) {
            setUserData(null);
            setLoading(false);
            return;
        }

        if (user) {
            setUserData(user);
            setLoading(false);
        }
    }, [user, isAuthenticated, authLoading]);

    const fetchUserDetails = async () => {
        if (!isAuthenticated) return;

        try {
            setLoading(true);
            const token = localStorage.getItem("authToken");

            const response = await axios.get("/api/auth/me", {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            if (response.data && response.data.user) {
                setUserData(response.data.user);
                updateUser(response.data.user);
            }
        } catch (err) {
            console.error("Error fetching user details:", err);
            setError(err.response?.data?.message || "Failed to fetch user details");
        } finally {
            setLoading(false);
        }
    };

    const updateUserProfile = async (updates) => {
        try {
            const token = localStorage.getItem("authToken");

            const response = await axios.put("/api/auth/profile", updates, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            if (response.data && response.data.user) {
                setUserData(response.data.user);
                updateUser(response.data.user);
                return { success: true, user: response.data.user };
            }
        } catch (err) {
            console.error("Error updating profile:", err);
            return {
                success: false,
                error: err.response?.data?.message || "Failed to update profile",
            };
        }
    };

    const refreshUser = () => {
        fetchUserDetails();
    };

    return {
        user: userData,
        loading,
        error,
        isAuthenticated,
        fetchUserDetails,
        updateUserProfile,
        refreshUser,
    };
};