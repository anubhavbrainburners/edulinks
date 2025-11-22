"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { useAuth } from "@/components/AuthContext";

export default function Login() {
  const router = useRouter();
  const { login } = useAuth();  // <-- using context login

  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({ email: "" });

  const validate = () => {
    const next = {};
    const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email.trim()) {
      next.email = "Please enter your email address.";
    } else if (!emailRe.test(email)) {
      next.email = "Please enter a valid email address.";
    }

    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!validate()) return;

    setLoading(true);

    const result = await login(email);  // <-- using auth context login

    if (result.success) {
      router.push(`/verify-mail?email=${email}`);
    } else {
      setErrors({ email: result.error || "Login failed" });
    }

    setLoading(false);
  };

  return (
    <main
      className="py-20 min-h-screen"
      style={{ background: "#DFFFFF", paddingTop: "30px" }}
    >
      <div className="max-w-[1200px] mx-auto px-6 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

          {/* Left Section */}
          <section className="pt-20">
            <h1 className="text-3xl lg:text-5xl font-bold text-[#545454] leading-tight">
              Edulinks <br /> AI-Assistant
            </h1>
            <p className="mt-8 text-[#5A7A7C] text-md max-w-md">
              Welcome back! Login to continue your educational journey <br />
              with our AI-powered tools
            </p>

            <div className="mt-14">
              <Image
                src="/images/formImg.png"
                alt="Edulinks Logo"
                width={400}
                height={160}
                className="object-contain"
              />
            </div>
          </section>

          {/* Right Section - Login Form */}
          <aside className="flex justify-center py-8">
            <form
              onSubmit={handleLogin}
              className="w-full max-w-[525px] bg-white mt-8 rounded-4xl px-8 py-10 shadow-[0_8px_40px_rgba(0,0,0,0.30)]"
            >
              <div className="space-y-5">

                {/* Email input */}
                <label className="block text-lg">
                  <input
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      setErrors({ email: "" });
                    }}
                    placeholder="Email address"
                    inputMode="email"
                    className="w-full border border-[#37D7D9] rounded-2xl px-4 py-4 outline-none text-gray-700 placeholder-[#555555]"
                  />
                  {errors.email && (
                    <p className="text-sm text-red-600 mt-1">{errors.email}</p>
                  )}
                </label>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-[#37D7D9] text-white font-bold rounded-[12px] py-3 mt-2 text-lg disabled:opacity-50"
                >
                  {loading ? "Sending OTP..." : "Send Login Link"}
                </button>

                {/* Signup Redirect */}
                <div className="mt-2 px-2 py-5 bg-[#DFFFFF] rounded-xl border border-[#37D7D9] text-center">
                  <p className="text-[#555555] text-xl mb-3">Don't Have An Account?</p>
                  <Link href="/signup">
                    <button
                      type="button"
                      className="bg-[#E4FFFF] px-10 py-1 rounded-full font-black text-[#545454] text-sm"
                    >
                      Sign Up
                    </button>
                  </Link>
                </div>

              </div>
            </form>
          </aside>

        </div>
      </div>
    </main>
  );
}
