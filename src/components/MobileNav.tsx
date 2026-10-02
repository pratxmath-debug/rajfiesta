"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useApp } from "@/context/AppContext";
import { Home, Compass, Sparkles, Heart, User } from "lucide-react";

export const MobileNav: React.FC = () => {
  const pathname = usePathname();
  const { savedPlaceIds, user } = useApp();

  const isHome = pathname === "/";
  const isExplore = pathname.startsWith("/explore") || pathname.startsWith("/cities");
  const isPlanner = pathname.startsWith("/planner");
  const isSaved = pathname === "/dashboard#saved" || (pathname === "/dashboard" && typeof window !== "undefined" && window.location.hash === "#saved");
  const isDashboard = pathname.startsWith("/dashboard") || pathname.startsWith("/login");

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-40 bg-[#FDFBF7]/95 backdrop-blur-md border-t border-[#E8DCCB] md:hidden shadow-[0_-4px_20px_rgba(0,0,0,0.06)] px-2 py-1.5 flex items-center justify-around">
      <Link
        href="/"
        className={`flex flex-col items-center py-1 px-2.5 rounded-xl transition-colors ${
          isHome ? "text-[#780016] font-bold" : "text-stone-500 hover:text-stone-800"
        }`}
      >
        <Home className={`w-5 h-5 ${isHome ? "text-[#780016]" : ""}`} />
        <span className="text-[10px] mt-0.5">Home</span>
      </Link>

      <Link
        href="/explore"
        className={`flex flex-col items-center py-1 px-2.5 rounded-xl transition-colors ${
          isExplore ? "text-[#780016] font-bold" : "text-stone-500 hover:text-stone-800"
        }`}
      >
        <Compass className={`w-5 h-5 ${isExplore ? "text-[#780016]" : ""}`} />
        <span className="text-[10px] mt-0.5">Explore</span>
      </Link>

      {/* Floating Center Planner Button */}
      <Link
        href="/planner"
        className="flex flex-col items-center -mt-5"
      >
        <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-[#780016] via-[#0F2C59] to-[#D4AF37] p-0.5 shadow-lg flex items-center justify-center transform active:scale-95 transition-transform">
          <div className="w-full h-full rounded-full bg-gradient-to-r from-[#D4AF37] to-[#E5A93C] flex items-center justify-center">
            <Sparkles className="w-6 h-6 text-[#0F2C59] fill-current" />
          </div>
        </div>
        <span className={`text-[10px] mt-1 font-bold ${isPlanner ? "text-[#780016]" : "text-stone-700"}`}>
          AI Plan
        </span>
      </Link>

      <Link
        href="/dashboard#saved"
        className={`flex flex-col items-center py-1 px-2.5 rounded-xl relative transition-colors ${
          isSaved ? "text-[#780016] font-bold" : "text-stone-500 hover:text-stone-800"
        }`}
      >
        <div className="relative">
          <Heart className={`w-5 h-5 ${isSaved ? "text-[#780016] fill-current" : ""}`} />
          {savedPlaceIds.length > 0 && (
            <span className="absolute -top-1 -right-2 w-4 h-4 bg-[#780016] text-amber-100 text-[9px] font-bold rounded-full flex items-center justify-center">
              {savedPlaceIds.length}
            </span>
          )}
        </div>
        <span className="text-[10px] mt-0.5">Saved</span>
      </Link>

      <Link
        href={user ? "/dashboard" : "/login"}
        className={`flex flex-col items-center py-1 px-2.5 rounded-xl transition-colors ${
          isDashboard ? "text-[#780016] font-bold" : "text-stone-500 hover:text-stone-800"
        }`}
      >
        <User className={`w-5 h-5 ${isDashboard ? "text-[#780016]" : ""}`} />
        <span className="text-[10px] mt-0.5">{user ? "Profile" : "Log In"}</span>
      </Link>
    </nav>
  );
};
