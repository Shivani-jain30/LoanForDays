"use client";

import { useState, useRef } from "react";
import { Mail, Lock, Eye, EyeOff, ShieldCheck, Key } from "lucide-react";
import Link from "next/link";

export default function LoginForm() {
  const [activeTab, setActiveTab] = useState("otp"); // otp | password
  const [step, setStep] = useState("email"); // email | otp
  const [showPassword, setShowPassword] = useState(false);
  const inputsRef = useRef([]);

  // OTP focus
  const handleChange = (e, i) => {
    if (e.target.value && i < 5) {
      inputsRef.current[i + 1].focus();
    }
  };

  const handleBackspace = (e, i) => {
    if (e.key === "Backspace" && !e.target.value && i > 0) {
      inputsRef.current[i - 1].focus();
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-[420px] rounded-2xl shadow-xl p-8 border ">

        {/* ICON */}
        <div className="flex justify-center mb-4">
          <div className="bg-green-500 p-4 rounded-full ">
            <Lock />
          </div>
        </div>

        {/* TITLE */}
        <h2 className="text-2xl font-semibold text-center mb-2">
          Welcome Back
        </h2>
        <p className="text-center text-gray-500 mb-6">
          Login to your account
        </p>

        {/* TOGGLE */}
        <div className="flex bg-bg-card rounded-full p-1 mb-6">
          <button
            type="button"
            onClick={() => {
              setActiveTab("otp");
              setStep("email");
            }}
            className={`flex-1 py-2 rounded-full text-sm flex items-center justify-center gap-2 cursor-pointer ${
              activeTab === "otp"
                ? "bg-white text-green-600 shadow"
                : "text-gray-500"
            }`}
          >
            <ShieldCheck size={16} /> OTP Login
          </button>

          <button
            type="button"
            onClick={() => {
              setActiveTab("password");
              setStep("email");
            }}
            className={`flex-1 py-2 rounded-full text-sm flex items-center justify-center gap-2 cursor-pointer ${
              activeTab === "password"
                ? "bg-white text-green-600 shadow"
                : "text-gray-500"
            }`}
          >
            <Key size={16} /> Password Login
          </button>
        </div>

        {/* ================= OTP LOGIN ================= */}
        {activeTab === "otp" && (
          <>
            {/* EMAIL STEP */}
            {step === "email" && (
              <>
                <div className="mb-4">
                  <label className="text-sm">Email Address</label>
                  <div className="flex items-center border rounded-lg px-3 py-2 mt-1">
                    <Mail className="w-4 h-4 text-gray-400 mr-2" />
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="w-full outline-none"
                    />
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => {
                    console.log("OTP CLICKED");
                    setStep("otp");
                  }}
                  className="w-full bg-green-600 text-white py-3 rounded-lg cursor-pointer"
                >
                  Send OTP →
                </button>
              </>
            )}

            {/* OTP STEP */}
            {step === "otp" && (
              <>
                <p className="text-center text-gray-500 mb-4">
                  Enter OTP sent to your email
                </p>

                <div className="flex justify-center gap-3 mb-6">
                  {[...Array(6)].map((_, i) => (
                    <input
                      key={i}
                      maxLength={1}
                      ref={(el) => (inputsRef.current[i] = el)}
                      onChange={(e) => handleChange(e, i)}
                      onKeyDown={(e) => handleBackspace(e, i)}
                      className="w-12 h-12 text-center border rounded-lg"
                    />
                  ))}
                </div>

                <button
                  type="button"
                  className="w-full bg-green-600 text-white py-3 rounded-lg cursor-pointer"
                >
                  Verify & Login →
                </button>

                <div className="flex justify-between mt-4 text-sm">
                  <span
                    onClick={() => setStep("email")}
                    className="cursor-pointer text-gray-500"
                  >
                    ← Change email
                  </span>

                  <span className="text-green-600 cursor-pointer">
                    Resend OTP
                  </span>
                </div>
              </>
            )}
          </>
        )}

        {/* ================= PASSWORD LOGIN ================= */}
        {activeTab === "password" && (
          <>
            <div className="mb-4">
              <label className="text-sm">Email Address</label>
              <div className="flex items-center border rounded-lg px-3 py-2 mt-1">
                <Mail className="w-4 h-4 text-gray-400 mr-2" />
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full outline-none"
                />
              </div>
            </div>

            <div className="mb-4">
              <label className="text-sm">Password</label>
              <div className="flex items-center border rounded-lg px-3 py-2 mt-1">
                <Lock className="w-4 h-4 text-gray-400 mr-2" />
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter password"
                  className="w-full outline-none"
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <EyeOff className="w-4 h-4 text-gray-400" />
                  ) : (
                    <Eye className="w-4 h-4 text-gray-400" />
                  )}
                </button>
              </div>
            </div>

            <button
              type="button"
              className="w-full bg-green-600 text-white py-3 rounded-lg cursor-pointer"
            >
              Login →
            </button>
          </>
        )}

        {/* FOOTER */}
        <p className="text-center text-sm text-gray-500 mt-6">
          Don't have an account?{" "}
          <Link href="/apply" className="text-green-600">
            Apply Now
          </Link>
        </p>
      </div>
    </div>
  );
}










































































































































































































