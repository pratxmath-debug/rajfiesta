"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useApp } from "@/context/AppContext";
import { DESTINATIONS } from "@/data/rajasthanData";
import { HOTELS } from "@/data/travelHotelsData";
import {
  User,
  Heart,
  Calendar,
  Sparkles,
  MapPin,
  Trash2,
  CheckCircle2,
  Compass,
  ArrowRight,
  ShieldCheck,
  Award,
  LogOut,
  ExternalLink
} from "lucide-react";

export default function DashboardPage() {
  const {
    user,
    savedPlaceIds,
    toggleSavePlace,
    trips,
    deleteTrip,
    visitedPlaceIds,
    toggleVisitedPlace,
    logout
  } = useApp();

  const [activeTab, setActiveTab] = useState<"trips" | "saved" | "visited" | "profile">("trips");

  // Handle URL hash navigation like #saved
  useEffect(() => {
    if (typeof window !== "undefined" && window.location.hash) {
      if (window.location.hash === "#saved") setActiveTab("saved");
      if (window.location.hash === "#trips") setActiveTab("trips");
    }
  }, []);

  const savedDestinations = DESTINATIONS.filter((d) => savedPlaceIds.includes(d.id));
  const visitedDestinations = DESTINATIONS.filter((d) => visitedPlaceIds.includes(d.id));

  const totalHeritageMonuments = DESTINATIONS.length;
  const explorationPercentage = Math.round((visitedPlaceIds.length / totalHeritageMonuments) * 100);

  return (
    <div className="min-h-screen bg-[#FDFBF7] py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-10">
      {/* 1. WELCOME HERO CARD */}
      <div className="bg-gradient-to-r from-[#0F2C59] via-[#1A365D] to-[#780016] text-amber-50 rounded-3xl p-6 sm:p-10 shadow-2xl border border-[#D4AF37]/50 flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="flex items-center space-x-5">
          <div className="relative">
            <img
              src={
                user?.avatar ||
                "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80"
              }
              alt={user?.name || "User"}
              className="w-16 h-16 sm:w-20 sm:h-20 rounded-full object-cover border-2 border-[#D4AF37] shadow-lg"
            />
            <span className="absolute bottom-0 right-0 p-1 bg-[#D4AF37] rounded-full text-[#0F2C59]">
              <Award className="w-4 h-4" />
            </span>
          </div>
          <div>
            <div className="text-xs text-amber-300 font-semibold uppercase tracking-wider">
              Rajasthan Heritage Passport
            </div>
            <h1 className="font-serif font-black text-2xl sm:text-4xl text-amber-100">
              Welcome back, {user?.name || "Traveler"} 👋
            </h1>
            <p className="text-xs sm:text-sm text-amber-200/80 mt-1">
              Member since {user?.joinedDate || "October 2026"} • {user?.email || "guest@rajfiesta.in"}
            </p>
          </div>
        </div>

        {/* Quick Metric Badges */}
        <div className="flex items-center space-x-3 sm:space-x-4">
          <div className="px-4 py-3 bg-white/10 rounded-2xl border border-white/20 text-center min-w-[90px]">
            <span className="text-[10px] text-amber-200 uppercase font-bold block">Saved</span>
            <span className="font-serif font-bold text-2xl text-amber-100">{savedPlaceIds.length}</span>
          </div>
          <div className="px-4 py-3 bg-white/10 rounded-2xl border border-white/20 text-center min-w-[90px]">
            <span className="text-[10px] text-amber-200 uppercase font-bold block">Trips</span>
            <span className="font-serif font-bold text-2xl text-amber-100">{trips.length}</span>
          </div>
          <div className="px-4 py-3 bg-white/10 rounded-2xl border border-white/20 text-center min-w-[90px]">
            <span className="text-[10px] text-amber-200 uppercase font-bold block">Explored</span>
            <span className="font-serif font-bold text-2xl text-amber-100">{explorationPercentage}%</span>
          </div>
        </div>
      </div>

      {/* 2. DASHBOARD TABS NAVIGATION */}
      <div className="flex items-center space-x-2 border-b border-stone-200 pb-2 overflow-x-auto text-xs sm:text-sm font-semibold">
        <button
          onClick={() => setActiveTab("trips")}
          className={`flex items-center space-x-2 px-4 py-2.5 rounded-xl transition-all whitespace-nowrap ${
            activeTab === "trips"
              ? "bg-[#0F2C59] text-amber-100 shadow"
              : "text-stone-600 hover:text-stone-900 hover:bg-stone-100"
          }`}
        >
          <Calendar className="w-4 h-4 text-[#D4AF37]" />
          <span>My AI Itineraries ({trips.length})</span>
        </button>

        <button
          onClick={() => setActiveTab("saved")}
          className={`flex items-center space-x-2 px-4 py-2.5 rounded-xl transition-all whitespace-nowrap ${
            activeTab === "saved"
              ? "bg-[#0F2C59] text-amber-100 shadow"
              : "text-stone-600 hover:text-stone-900 hover:bg-stone-100"
          }`}
        >
          <Heart className="w-4 h-4 text-[#780016]" />
          <span>Saved Places & Wishlist ({savedDestinations.length})</span>
        </button>

        <button
          onClick={() => setActiveTab("visited")}
          className={`flex items-center space-x-2 px-4 py-2.5 rounded-xl transition-all whitespace-nowrap ${
            activeTab === "visited"
              ? "bg-[#0F2C59] text-amber-100 shadow"
              : "text-stone-600 hover:text-stone-900 hover:bg-stone-100"
          }`}
        >
          <Award className="w-4 h-4 text-emerald-500" />
          <span>Heritage Passport Check-off ({visitedDestinations.length})</span>
        </button>
      </div>

      {/* 3. TAB CONTENT */}
      {/* TAB A: ITINERARIES */}
      {activeTab === "trips" && (
        <div className="space-y-6 animate-in fade-in">
          <div className="flex items-center justify-between">
            <h3 className="font-serif font-bold text-2xl text-[#0F2C59]">Your Curated Trips</h3>
            <Link
              href="/planner"
              className="px-4 py-2 bg-gradient-to-r from-[#D4AF37] to-[#E5A93C] text-[#0F2C59] font-bold text-xs rounded-xl shadow hover:scale-105 transition-all flex items-center space-x-1"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Create New AI Trip</span>
            </Link>
          </div>

          {trips.length > 0 ? (
            <div className="space-y-6">
              {trips.map((trip) => (
                <div
                  key={trip.id}
                  className="bg-white rounded-3xl border border-[#E8DCCB] p-6 sm:p-8 shadow-md space-y-6"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-stone-100 pb-4">
                    <div>
                      <div className="flex items-center space-x-2 text-xs text-stone-500">
                        <span>Created on {trip.createdAt}</span>
                        <span>•</span>
                        <span>Starts from {trip.startCity}</span>
                      </div>
                      <h4 className="font-serif font-bold text-xl text-[#0F2C59] mt-0.5">{trip.title}</h4>
                      <p className="text-xs text-[#C85A32] font-semibold mt-0.5">
                        {trip.days} Days • {trip.travelStyle} Style • {trip.companions}
                      </p>
                    </div>

                    <div className="flex items-center space-x-3">
                      <div className="text-right">
                        <span className="text-[10px] text-stone-400 block uppercase font-bold">Estimated Budget</span>
                        <span className="font-serif font-bold text-lg text-[#780016]">
                          ₹{trip.totalBudget.toLocaleString()}
                        </span>
                      </div>
                      <button
                        onClick={() => deleteTrip(trip.id)}
                        className="p-2 text-stone-400 hover:text-rose-600 rounded-xl transition-colors hover:bg-rose-50"
                        title="Delete Trip"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  {/* Days Preview */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
                    {trip.itinerary.map((d) => (
                      <div key={d.day} className="p-4 bg-stone-50 rounded-2xl border border-stone-200 space-y-2">
                        <div className="flex items-center justify-between font-bold text-[#780016]">
                          <span>Day {d.day}</span>
                          <span className="text-stone-700">{d.city}</span>
                        </div>
                        <div className="space-y-1 text-stone-600">
                          {d.activities.slice(0, 3).map((act, idx) => (
                            <div key={idx} className="line-clamp-1 text-[11px]">
                              • {act.title}
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="bg-white rounded-3xl p-12 text-center border border-[#E8DCCB] space-y-3">
              <Compass className="w-12 h-12 text-[#D4AF37] mx-auto opacity-70" />
              <h4 className="font-serif font-bold text-xl text-stone-900">No Saved Trips Yet</h4>
              <p className="text-xs text-stone-500 max-w-md mx-auto">
                Use our AI Trip Planner to create an hour-by-hour itinerary tailored to your duration and budget.
              </p>
              <Link
                href="/planner"
                className="inline-block mt-2 px-6 py-2.5 bg-[#0F2C59] text-amber-100 font-bold text-xs rounded-xl shadow"
              >
                Launch AI Planner ✨
              </Link>
            </div>
          )}
        </div>
      )}

      {/* TAB B: SAVED PLACES */}
      {activeTab === "saved" && (
        <div className="space-y-6 animate-in fade-in">
          <h3 className="font-serif font-bold text-2xl text-[#0F2C59]">Saved Royal Wishlist</h3>

          {savedDestinations.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {savedDestinations.map((dest) => (
                <div
                  key={dest.id}
                  className="bg-white rounded-2xl border border-[#E8DCCB] overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
                >
                  <div>
                    <div className="relative h-44 overflow-hidden bg-stone-900">
                      <img src={dest.image} alt={dest.name} className="w-full h-full object-cover" />
                      <button
                        onClick={() => toggleSavePlace(dest.id, dest.name)}
                        className="absolute top-3 right-3 p-2 bg-rose-500 text-white rounded-full shadow hover:bg-rose-600"
                        title="Remove from saved"
                      >
                        <Heart className="w-4 h-4 fill-current" />
                      </button>
                      <span className="absolute bottom-3 left-3 px-2 py-0.5 bg-black/60 text-white text-[10px] rounded backdrop-blur-sm">
                        📍 {dest.cityName}
                      </span>
                    </div>

                    <div className="p-4 space-y-1.5">
                      <h4 className="font-serif font-bold text-base text-stone-900">{dest.name}</h4>
                      <p className="text-xs text-stone-600 line-clamp-2">{dest.description}</p>
                    </div>
                  </div>

                  <div className="p-4 pt-0 flex items-center justify-between border-t border-stone-100">
                    <span className="text-xs font-semibold text-amber-600">★ {dest.rating}</span>
                    <Link
                      href={`/destinations/${dest.slug}`}
                      className="text-xs font-bold text-[#0F2C59] hover:underline"
                    >
                      View Details →
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="bg-white rounded-3xl p-12 text-center border border-[#E8DCCB] space-y-2">
              <Heart className="w-12 h-12 text-rose-300 mx-auto" />
              <h4 className="font-serif font-bold text-lg text-stone-900">Your Wishlist is Empty</h4>
              <p className="text-xs text-stone-500">
                Browse our interactive map or destinations to save your favorite monuments.
              </p>
              <Link href="/explore" className="inline-block mt-2 text-xs font-bold text-[#780016] underline">
                Explore Monuments →
              </Link>
            </div>
          )}
        </div>
      )}

      {/* TAB C: HERITAGE PASSPORT / VISITED TRACKER */}
      {activeTab === "visited" && (
        <div className="space-y-6 animate-in fade-in">
          <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-3xl border border-amber-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h4 className="font-serif font-bold text-xl text-[#780016]">
                Rajasthan Heritage Completion: {explorationPercentage}%
              </h4>
              <p className="text-xs text-stone-600 mt-1">
                You have visited {visitedPlaceIds.length} of {totalHeritageMonuments} recorded state monuments. Check off locations you have explored in real life!
              </p>
            </div>
            <div className="w-36 bg-stone-200 h-3 rounded-full overflow-hidden">
              <div
                className="bg-gradient-to-r from-[#D4AF37] to-[#780016] h-full transition-all duration-500"
                style={{ width: `${explorationPercentage}%` }}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {DESTINATIONS.map((dest) => {
              const visited = visitedPlaceIds.includes(dest.id);
              return (
                <div
                  key={dest.id}
                  onClick={() => toggleVisitedPlace(dest.id)}
                  className={`p-4 rounded-2xl border transition-all cursor-pointer flex items-center justify-between ${
                    visited
                      ? "bg-emerald-50/70 border-emerald-300 shadow-sm"
                      : "bg-white border-stone-200 hover:border-amber-300"
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <div
                      className={`w-6 h-6 rounded-full flex items-center justify-center ${
                        visited ? "bg-emerald-600 text-white" : "border-2 border-stone-300 text-transparent"
                      }`}
                    >
                      <CheckCircle2 className="w-4 h-4 fill-current" />
                    </div>
                    <div>
                      <div className="font-serif font-bold text-xs text-stone-900">{dest.name}</div>
                      <div className="text-[10px] text-stone-500">📍 {dest.cityName}</div>
                    </div>
                  </div>
                  <span className={`text-[10px] font-bold uppercase ${visited ? "text-emerald-700" : "text-stone-400"}`}>
                    {visited ? "Visited ✓" : "Unvisited"}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
