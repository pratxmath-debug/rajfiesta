"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useApp } from "@/context/AppContext";
import {
  Crown,
  Mail,
  Lock,
  Phone,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  CheckCircle2
} from "lucide-react";

export default function LoginPage() {
  const router = useRouter();
  const { login } = useApp();

  const [authMode, setAuthMode] = useState<"email" | "otp">("email");
  const [emailOrPhone, setEmailOrPhone] = useState("yashi.sharma@rajfiesta.in");
  const [password, setPassword] = useState("••••••••");
  const [otpSent, setOtpSent] = useState(false);
  const [otpCode, setOtpCode] = useState("");

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    login(emailOrPhone, "Yashi Sharma", "tourist");
    router.push("/dashboard");
  };

  const handleGoogleLogin = () => {
    login("yashi.google@rajfiesta.in", "Yashi Sharma", "tourist");
    router.push("/dashboard");
  };

  const handleSendOtp = () => {
    setOtpSent(true);
  };

  return (
    <div className="relative min-h-[92vh] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 overflow-hidden bg-stone-900">
      {/* Cinematic Full-Screen Rajasthan Backdrop */}
      <img
        src="https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=2000&q=85"
        alt="Rajasthan Palace Heritage"
        className="absolute inset-0 w-full h-full object-cover object-center opacity-45 scale-105 filter blur-[1px]"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-[#0F2C59]/60" />

      {/* Royal Palace Jharokha Arch Card */}
      <div className="relative z-10 w-full max-w-md bg-[#FDFBF7]/95 backdrop-blur-md rounded-3xl border-2 border-[#D4AF37] p-8 sm:p-10 shadow-2xl text-stone-900 space-y-6">
        {/* Brand Crest */}
        <div className="text-center space-y-2">
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-[#780016] via-[#0F2C59] to-[#D4AF37] p-0.5 mx-auto shadow-lg">
            <div className="w-full h-full rounded-[14px] bg-[#FDFBF7] flex items-center justify-center border border-[#D4AF37]">
              <Crown className="w-7 h-7 text-[#780016]" />
            </div>
          </div>
          <h1 className="font-serif font-black text-3xl tracking-tight text-[#0F2C59]">
            RAJFIESTA
          </h1>
          <p className="text-xs font-serif italic text-[#C85A32]">
            Where Rajasthan Comes Alive
          </p>
        </div>

        {/* Tab Switcher: Email vs Phone OTP */}
        <div className="flex rounded-xl bg-stone-200/80 p-1 text-xs font-bold">
          <button
            type="button"
            onClick={() => setAuthMode("email")}
            className={`flex-1 py-2 rounded-lg transition-colors ${
              authMode === "email" ? "bg-white text-[#780016] shadow" : "text-stone-600 hover:text-stone-900"
            }`}
          >
            Email & Password
          </button>
          <button
            type="button"
            onClick={() => setAuthMode("otp")}
            className={`flex-1 py-2 rounded-lg transition-colors ${
              authMode === "otp" ? "bg-white text-[#780016] shadow" : "text-stone-600 hover:text-stone-900"
            }`}
          >
            Phone OTP Login
          </button>
        </div>

        {/* Login Form */}
        <form onSubmit={handleLoginSubmit} className="space-y-4 text-xs">
          {authMode === "email" ? (
            <>
              <div>
                <label className="font-bold uppercase tracking-wider text-stone-600 block mb-1">
                  Email / Phone
                </label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 transform -translate-y-1/2" />
                  <input
                    type="text"
                    required
                    value={emailOrPhone}
                    onChange={(e) => setEmailOrPhone(e.target.value)}
                    placeholder="name@domain.com or phone"
                    className="w-full pl-10 pr-3 py-3 bg-white rounded-xl border border-stone-300 text-stone-800 text-xs focus:outline-none focus:border-[#D4AF37] shadow-sm"
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-1">
                  <label className="font-bold uppercase tracking-wider text-stone-600">Password</label>
                  <a href="#forgot" className="text-[#C85A32] hover:underline text-[11px] font-semibold">
                    Forgot Password?
                  </a>
                </div>
                <div className="relative">
                  <Lock className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 transform -translate-y-1/2" />
                  <input
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter password"
                    className="w-full pl-10 pr-3 py-3 bg-white rounded-xl border border-stone-300 text-stone-800 text-xs focus:outline-none focus:border-[#D4AF37] shadow-sm"
                  />
                </div>
              </div>
            </>
          ) : (
            <>
              <div>
                <label className="font-bold uppercase tracking-wider text-stone-600 block mb-1">
                  Mobile Number (India)
                </label>
                <div className="relative flex">
                  <span className="inline-flex items-center px-3 text-xs bg-stone-100 border border-r-0 border-stone-300 rounded-l-xl text-stone-600 font-bold">
                    +91
                  </span>
                  <input
                    type="tel"
                    required
                    placeholder="98765 43210"
                    className="w-full px-3 py-3 bg-white rounded-r-xl border border-stone-300 text-stone-800 text-xs focus:outline-none focus:border-[#D4AF37] shadow-sm"
                  />
                </div>
              </div>

              {!otpSent ? (
                <button
                  type="button"
                  onClick={handleSendOtp}
                  className="w-full py-2.5 bg-amber-100 text-[#780016] font-bold rounded-xl border border-amber-300"
                >
                  Send OTP Code
                </button>
              ) : (
                <div>
                  <label className="font-bold uppercase tracking-wider text-stone-600 block mb-1">
                    Enter 6-Digit OTP
                  </label>
                  <input
                    type="text"
                    maxLength={6}
                    placeholder="Enter 123456"
                    value={otpCode}
                    onChange={(e) => setOtpCode(e.target.value)}
                    className="w-full p-3 bg-white rounded-xl border border-stone-300 text-stone-800 text-center font-mono text-base tracking-widest focus:outline-none"
                  />
                </div>
              )}
            </>
          )}

          {/* Login Submit Button */}
          <button
            type="submit"
            className="w-full py-3.5 bg-gradient-to-r from-[#0F2C59] via-[#1A365D] to-[#780016] text-amber-100 font-bold text-sm rounded-xl shadow-lg hover:opacity-95 transition-opacity"
          >
            LOGIN
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center space-x-3 text-stone-400 text-xs">
          <div className="flex-1 h-px bg-stone-200" />
          <span>OR</span>
          <div className="flex-1 h-px bg-stone-200" />
        </div>

        {/* Google Login Simulation */}
        <button
          type="button"
          onClick={handleGoogleLogin}
          className="w-full py-3 bg-white hover:bg-stone-50 text-stone-800 font-semibold text-xs rounded-xl border border-stone-300 shadow-sm transition-colors flex items-center justify-center space-x-2"
        >
          <svg className="w-4 h-4" viewBox="0 0 24 24">
            <path
              fill="#4285F4"
              d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
            />
            <path
              fill="#34A853"
              d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
            />
            <path
              fill="#FBBC05"
              d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
            />
            <path
              fill="#EA4335"
              d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
            />
          </svg>
          <span>Continue with Google</span>
        </button>

        {/* Footer Link */}
        <div className="text-center text-xs text-stone-600">
          Don&apos;t have an account?{" "}
          <Link href="/signup" className="text-[#780016] font-bold hover:underline">
            Create Account
          </Link>
        </div>
      </div>
    </div>
  );
}
