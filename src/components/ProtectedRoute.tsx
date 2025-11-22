"use client";

import { useEffect } from "react";
import { useAuth } from "@/components/AuthContext";
import { useRouter } from "next/navigation";

export default function ProtectedRoute({ children }) {
    const { isAuthenticated, loading } = useAuth();
    const router = useRouter();

    useEffect(() => {
        if (!loading && !isAuthenticated) {
            router.push("/login");
        }
    }, [loading, isAuthenticated]);

    if (loading) {
        return (
            <div className="w-full h-screen flex items-center justify-center">
                Checking authentication...
            </div>
        );
    }

    if (!isAuthenticated && loading) return null;

    return children;
}
