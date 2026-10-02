"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Sparkles, Send, ShieldCheck, Heart, MapPin, Phone, Mail } from "lucide-react";
import { useApp } from "@/context/AppContext";

export const Footer: React.FC = () => {
  const { addToast } = useApp();
  const [email, setEmail] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    addToast("Padharo! You are now subscribed to royal Rajasthan chronicles 📜", "royal");
    setEmail("");
  };

  return (
    <footer className="w-full bg-[#1A1412] text-stone-300 border-t-4 border-[#D4AF37] pt-16 pb-24 md:pb-12 relative overflow-hidden">
      {/* Decorative Jharokha arch background pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none bg-[radial-gradient(#D4AF37_1px,transparent_1px)] [background-size:24px_24px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-stone-800">
          {/* Brand Vision Column */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-[#780016] via-[#0F2C59] to-[#D4AF37] p-0.5">
                <div className="w-full h-full rounded-[14px] bg-[#1A1412] flex items-center justify-center">
                  <span className="font-serif font-black text-xl text-[#D4AF37]">R</span>
                </div>
              </div>
              <span className="font-serif font-bold text-2xl text-amber-100">
                Raj<span className="text-[#C85A32]">Fiesta</span>
              </span>
            </div>
            <p className="text-xs leading-relaxed text-stone-400 max-w-sm">
              Discover Rajasthan beyond the tourist brochure. An immersive digital heritage museum, interactive atlas, and AI-powered trip architect turning medieval history into personal journeys.
            </p>
            <div className="pt-2 text-xs text-amber-200/90 italic font-serif">
              &quot;Explore. Experience. Remember Rajasthan.&quot;
            </div>

            {/* Helpline badges */}
            <div className="pt-3 flex flex-wrap items-center gap-3 text-xs text-stone-400">
              <div className="flex items-center space-x-1.5 px-3 py-1.5 rounded-xl bg-stone-900 border border-stone-800">
                <Phone className="w-3.5 h-3.5 text-[#E5A93C]" />
                <span>Tourism Helpline: <strong className="text-amber-100">1363</strong></span>
              </div>
              <div className="flex items-center space-x-1.5 px-3 py-1.5 rounded-xl bg-stone-900 border border-stone-800">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>Emergency: <strong className="text-amber-100">112</strong></span>
              </div>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="space-y-3">
            <h4 className="font-serif font-bold text-sm uppercase tracking-wider text-[#D4AF37]">
              Explore
            </h4>
            <ul className="space-y-2 text-xs text-stone-400">
              <li>
                <Link href="/explore" className="hover:text-amber-200 transition-colors">
                  Interactive Map Atlas
                </Link>
              </li>
              <li>
                <Link href="/cities" className="hover:text-amber-200 transition-colors">
                  All 10 Historic Cities
                </Link>
              </li>
              <li>
                <Link href="/hidden-gems" className="hover:text-amber-200 transition-colors">
                  Hidden Rajasthan Gems
                </Link>
              </li>
              <li>
                <Link href="/heritage" className="hover:text-amber-200 transition-colors">
                  Forts & Palaces Directory
                </Link>
              </li>
              <li>
                <Link href="/destinations/mehrangarh-fort" className="hover:text-amber-200 transition-colors">
                  Mehrangarh Fort Chronicle
                </Link>
              </li>
            </ul>
          </div>

          {/* Travel & Stay Column */}
          <div className="space-y-3">
            <h4 className="font-serif font-bold text-sm uppercase tracking-wider text-[#D4AF37]">
              Travel & Stays
            </h4>
            <ul className="space-y-2 text-xs text-stone-400">
              <li>
                <Link href="/planner" className="hover:text-amber-200 transition-colors flex items-center space-x-1">
                  <span>AI Trip Planner</span>
                  <Sparkles className="w-3 h-3 text-[#E5A93C]" />
                </Link>
              </li>
              <li>
                <Link href="/hotels" className="hover:text-amber-200 transition-colors">
                  Palace Hotels & Havelis
                </Link>
              </li>
              <li>
                <Link href="/travel?tab=flights" className="hover:text-amber-200 transition-colors">
                  Flights to Rajasthan
                </Link>
              </li>
              <li>
                <Link href="/travel?tab=trains" className="hover:text-amber-200 transition-colors">
                  Vande Bharat & Royal Rail
                </Link>
              </li>
              <li>
                <Link href="/travel?tab=cabs" className="hover:text-amber-200 transition-colors">
                  Intercity Cab Chauffeurs
                </Link>
              </li>
            </ul>
          </div>

          {/* Cultural Heritage & Newsletter */}
          <div className="space-y-3">
            <h4 className="font-serif font-bold text-sm uppercase tracking-wider text-[#D4AF37]">
              Royal Newsletter
            </h4>
            <p className="text-xs text-stone-400 leading-relaxed">
              Receive seasonal festival notices, secret haveli discoveries, and curated stories directly to your inbox.
            </p>
            <form onSubmit={handleSubscribe} className="space-y-2">
              <div className="flex items-center bg-stone-900 rounded-xl border border-stone-700 overflow-hidden focus-within:border-[#D4AF37]">
                <input
                  type="email"
                  placeholder="Enter your email..."
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="px-3 py-2 text-xs bg-transparent text-white placeholder:text-stone-500 focus:outline-none w-full"
                />
                <button
                  type="submit"
                  className="p-2 text-[#D4AF37] hover:text-white transition-colors"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </form>
            <div className="pt-2 flex items-center space-x-3 text-xs text-stone-500">
              <Link href="/food-culture" className="hover:text-amber-200">Cuisine</Link>
              <span>•</span>
              <Link href="/festivals" className="hover:text-amber-200">Festivals</Link>
              <span>•</span>
              <Link href="/about" className="hover:text-amber-200">About Us</Link>
            </div>
          </div>
        </div>

        {/* Bottom Credits & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-stone-500 gap-4">
          <p>© {new Date().getFullYear()} RajFiesta. All rights reserved. Crafted with devotion to Rajasthan's heritage.</p>
          <div className="flex items-center space-x-4">
            <span>Jaipur • Jodhpur • Udaipur • Jaisalmer • Bikaner</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
