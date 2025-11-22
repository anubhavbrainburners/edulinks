"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useAuth } from "@/components/AuthContext";

export default function VerifyMail() {
    const [otp, setOtp] = useState(["", "", "", ""]);
    const [loading, setLoading] = useState(false);
    const [email, setEmail] = useState("");

    const router = useRouter();
    const { checkAuth } = useAuth();  // 👈 IMPORTANT

    useEffect(() => {
        if (typeof window !== "undefined") {
            const params = new URLSearchParams(window.location.search);
            const emailFromUrl = params.get("email");

            if (emailFromUrl) {
                setEmail(emailFromUrl);
            } else {
                router.push("/signup");
            }
        }
    }, []);

    const handleChange = (value, index) => {
        if (/[^0-9]/.test(value)) return;

        const updated = [...otp];
        updated[index] = value;
        setOtp(updated);

        if (value && index < 3) {
            document.getElementById(`otp-${index + 1}`).focus();
        }
    };

    const handleKeyDown = (e, index) => {
        if (e.key === "Backspace" && !otp[index] && index > 0) {
            document.getElementById(`otp-${index - 1}`).focus();
        }
    };

    const handleVerify = async () => {
        const otpValue = otp.join("");
        if (otpValue.length !== 4) {
            alert("Please enter a valid 4-digit OTP");
            return;
        }

        setLoading(true);

        try {
            const response = await axios.get(
                `https://edulink.primedepthlabs.com/v1/auth/verify-otp?otp=${otpValue}&email=${email}`
            );

            if (response?.data?.success) {

                // Save token + complete userData
                localStorage.setItem(
                    "authToken",
                    response.data.token.access.token
                );
                localStorage.setItem(
                    "userData",
                    JSON.stringify(response.data.userData)
                );

                // Update AuthContext
                await checkAuth();

                router.push("/");
            }
            else {
                alert("Invalid OTP");
            }
        } catch (error) {
            alert("Something went wrong. Try again.");
        }

        setLoading(false);
    };

    const handleResend = async () => {
        const formData = JSON.parse(localStorage.getItem("signupData"));

        await axios.post("https://edulink.primedepthlabs.com/v1/auth/register", formData);

        alert("OTP sent again!");
    };

    return (
        <div className="w-full min-h-screen flex flex-col items-center justify-center bg-[#F8FDFD] px-4">
            <h1 className="text-3xl font-bold mb-2 text-[#1A4D4F]">Verify Email</h1>
            <p className="text-gray-600 mb-6">OTP sent to <b>{email}</b></p>

            <div className="flex gap-4 mb-6">
                {otp.map((digit, index) => (
                    <input
                        key={index}
                        id={`otp-${index}`}
                        maxLength={1}
                        value={digit}
                        onChange={(e) => handleChange(e.target.value, index)}
                        onKeyDown={(e) => handleKeyDown(e, index)}
                        className="w-14 h-14 text-center border-2 rounded-xl text-2xl font-bold"
                    />
                ))}
            </div>

            <button
                onClick={handleVerify}
                disabled={loading}
                className="w-full max-w-xs bg-[#37D7D9] text-white font-bold py-3 rounded-xl"
            >
                {loading ? "Verifying..." : "Verify OTP"}
            </button>

            <button
                onClick={handleResend}
                className="mt-4 text-[#37D7D9] underline"
            >
                Resend OTP
            </button>
        </div>
    );
}
