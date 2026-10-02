"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useApp } from "@/context/AppContext";
import { Crown, Mail, Lock, User, ArrowRight, Sparkles } from "lucide-react";

export default function SignUpPage() {
  const router = useRouter();
  const { login } = useApp();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = (e: React.FormEvent) => {
    e.preventDefault();
    login(email, name || "Royal Traveler", "tourist");
    router.push("/dashboard");
  };

  return (
    <div className="relative min-h-[92vh] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 overflow-hidden bg-stone-900">
      <img
        src="https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=2000&q=85"
        alt="Rajasthan Jodhpur Blue City"
        className="absolute inset-0 w-full h-full object-cover object-center opacity-45 scale-105 filter blur-[1px]"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-[#0F2C59]/60" />

      <div className="relative z-10 w-full max-w-md bg-[#FDFBF7]/95 backdrop-blur-md rounded-3xl border-2 border-[#D4AF37] p-8 sm:p-10 shadow-2xl text-stone-900 space-y-6">
        <div className="text-center space-y-2">
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-[#780016] via-[#0F2C59] to-[#D4AF37] p-0.5 mx-auto shadow-lg">
            <div className="w-full h-full rounded-[14px] bg-[#FDFBF7] flex items-center justify-center border border-[#D4AF37]">
              <Crown className="w-7 h-7 text-[#780016]" />
            </div>
          </div>
          <h1 className="font-serif font-black text-3xl tracking-tight text-[#0F2C59]">
            Join RajFiesta
          </h1>
          <p className="text-xs font-serif italic text-[#C85A32]">
            Begin your royal journey through Rajasthan
          </p>
        </div>

        <form onSubmit={handleSignUp} className="space-y-4 text-xs">
          <div>
            <label className="font-bold uppercase tracking-wider text-stone-600 block mb-1">
              Your Full Name
            </label>
            <div className="relative">
              <User className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 transform -translate-y-1/2" />
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Yashi Sharma"
                className="w-full pl-10 pr-3 py-3 bg-white rounded-xl border border-stone-300 text-stone-800 text-xs focus:outline-none focus:border-[#D4AF37]"
              />
            </div>
          </div>

          <div>
            <label className="font-bold uppercase tracking-wider text-stone-600 block mb-1">
              Email Address
            </label>
            <div className="relative">
              <Mail className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 transform -translate-y-1/2" />
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="yashi@example.com"
                className="w-full pl-10 pr-3 py-3 bg-white rounded-xl border border-stone-300 text-stone-800 text-xs focus:outline-none focus:border-[#D4AF37]"
              />
            </div>
          </div>

          <div>
            <label className="font-bold uppercase tracking-wider text-stone-600 block mb-1">
              Create Password
            </label>
            <div className="relative">
              <Lock className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 transform -translate-y-1/2" />
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="At least 8 characters"
                className="w-full pl-10 pr-3 py-3 bg-white rounded-xl border border-stone-300 text-stone-800 text-xs focus:outline-none focus:border-[#D4AF37]"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-3.5 bg-gradient-to-r from-[#D4AF37] to-[#E5A93C] text-[#0F2C59] font-black text-sm rounded-xl shadow-lg transition-transform hover:scale-[1.01]"
          >
            Create My Royal Account
          </button>
        </form>

        <div className="text-center text-xs text-stone-600">
          Already have an account?{" "}
          <Link href="/login" className="text-[#780016] font-bold hover:underline">
            Login Here
          </Link>
        </div>
      </div>
    </div>
  );
}
