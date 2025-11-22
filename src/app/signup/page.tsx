"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { useAuth } from "@/components/AuthContext"; // <-- using auth context

export default function Signup() {
  const router = useRouter();
  const { signup } = useAuth(); // <-- using signup from context

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const [loading, setLoading] = useState(false);

  // ---------- Input Handlers ----------
  const handleNameChange = (v: string) => {
    const sanitized = v.replace(/[^A-Za-z\s]/g, "");
    setFullName(sanitized);
    setErrors((prev) => ({ ...prev, name: "" }));
  };

  const handleEmailChange = (v: string) => {
    setEmail(v);
    setErrors((prev) => ({ ...prev, email: "" }));
  };

  const handlePhoneChange = (v: string) => {
    const digitsOnly = v.replace(/\D/g, "").slice(0, 10);
    setPhone(digitsOnly);
    setErrors((prev) => ({ ...prev, phone: "" }));
  };

  // ---------- Validation ----------
  const validate = () => {
    const next: any = {};

    if (!fullName.trim()) {
      next.name = "Please enter your full name.";
    }

    const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim()) {
      next.email = "Please enter your email address.";
    } else if (!emailRe.test(email)) {
      next.email = "Please enter a valid email address.";
    }

    if (!phone) {
      next.phone = "Please enter your phone number.";
    } else if (phone.length !== 10) {
      next.phone = "Phone number must be exactly 10 digits.";
    }

    setErrors(next);
    return Object.keys(next).length === 0;
  };

  // ---------- Submit Handler ----------
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);

    const payload = {
      email,
      name: fullName,
      phoneNumber: phone,
    };

    const result = await signup(payload);

    if (result.success) {
      router.push(`/verify-mail?email=${email}`);
    } else {
      setErrors((prev) => ({
        ...prev,
        email: result.error || "Signup failed",
      }));
    }

    setLoading(false);
  };

  return (
    <main
      className="py-11"
      style={{ background: "#DFFFFF", paddingTop: "30px" }}
    >
      <div className="max-w-[1200px] mx-auto px-6 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

          {/* ---------- Left Side UI ---------- */}
          <section>
            <h1 className="text-3xl lg:text-5xl font-bold text-[#545454] leading-tight">
              Edulinks
              <br />
              AI-Assistant
            </h1>
            <p className="mt-8 text-[#5A7A7C] text-md max-w-md">
              Start your educational journey with our AI-powered tools
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

          {/* ---------- Signup Form ---------- */}
          <aside className="flex justify-center py-8">
            <form
              onSubmit={handleSubmit}
              className="w-full max-w-[525px] bg-white mt-8 rounded-4xl px-8 py-10 shadow-[0_8px_40px_rgba(0,0,0,0.30)]"
            >
              <div className="space-y-5">

                {/* Full name */}
                <label className="block text-lg">
                  <input
                    value={fullName}
                    onChange={(e) => handleNameChange(e.target.value)}
                    placeholder="Full name"
                    className="w-full border border-[#37D7D9] rounded-2xl px-4 py-4 outline-none"
                  />
                  {errors.name && (
                    <p className="text-sm text-red-600 mt-1">{errors.name}</p>
                  )}
                </label>

                {/* Email */}
                <label className="block text-lg">
                  <input
                    value={email}
                    onChange={(e) => handleEmailChange(e.target.value)}
                    placeholder="Email address"
                    className="w-full border border-[#37D7D9] rounded-2xl px-4 py-4 outline-none"
                  />
                  {errors.email && (
                    <p className="text-sm text-red-600 mt-1">{errors.email}</p>
                  )}
                </label>

                {/* Phone */}
                <label className="block text-lg">
                  <input
                    value={phone}
                    onChange={(e) => handlePhoneChange(e.target.value)}
                    placeholder="Phone number"
                    maxLength={10}
                    className="w-full border border-[#37D7D9] rounded-2xl px-4 py-4 outline-none"
                  />
                  {errors.phone && (
                    <p className="text-sm text-red-600 mt-1">{errors.phone}</p>
                  )}
                </label>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-[#37D7D9] text-white font-bold rounded-[12px] py-3 mt-2 text-lg disabled:opacity-50"
                >
                  {loading ? "Sending OTP..." : "Create Account"}
                </button>

                {/* Redirect */}
                <div className="mt-2 px-2 py-5 bg-[#DFFFFF] rounded-xl border border-[#37D7D9] text-center">
                  <p className="text-[#555555] text-xl mb-3">
                    Already Have An Account?
                  </p>
                  <Link href="/login">
                    <button
                      type="button"
                      className="bg-[#E4FFFF] px-10 py-1 rounded-full font-black text-[#545454] text-sm border border-[#37D7D9]"
                    >
                      Sign In
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
