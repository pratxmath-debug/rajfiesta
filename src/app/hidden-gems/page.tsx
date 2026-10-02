"use client";

import React, { useState } from "react";
import Link from "next/link";
import { DESTINATIONS, Destination } from "@/data/rajasthanData";
import { useApp } from "@/context/AppContext";
import {
  Sparkles,
  MapPin,
  Heart,
  ArrowRight,
  Compass,
  Clock,
  Car,
  Filter,
  CheckCircle2,
  Calendar
} from "lucide-react";

export default function HiddenGemsPage() {
  const { isPlaceSaved, toggleSavePlace } = useApp();
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const hiddenGems = DESTINATIONS.filter((d) => d.isHiddenGem);

  const filteredGems = hiddenGems.filter((g) => {
    if (activeCategory === "all") return true;
    return g.category === activeCategory;
  });

  return (
    <div className="min-h-screen bg-[#FDFBF7] py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto">
        <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-purple-100 text-purple-900 text-xs font-bold uppercase tracking-wider border border-purple-300 mb-3">
          <Sparkles className="w-3.5 h-3.5 text-purple-700" />
          <span>The Persona 3 Destination Vault</span>
        </div>
        <h1 className="font-serif font-black text-3xl sm:text-5xl text-[#0F2C59]">
          Hidden Rajasthan
        </h1>
        <p className="mt-3 text-sm sm:text-base text-stone-600 leading-relaxed">
          &quot;I don&apos;t want the usual Jaipur–Udaipur–Jodhpur trip.&quot; Discover ancient subterranean stepwells, abandoned desert ghost hamlets, and solitary hilltop citadels away from crowded tour buses.
        </p>

        {/* Filter Chips */}
        <div className="flex flex-wrap items-center justify-center gap-2 mt-6">
          {[
            { id: "all", label: "All Secret Spots" },
            { id: "stepwell", label: "Forgotten Stepwells" },
            { id: "hidden-gem", label: "Ghost Hamlets & Ruined Citadels" },
            { id: "temple", label: "Sacred Desert Shrines" }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveCategory(tab.id)}
              className={`text-xs px-3.5 py-2 rounded-xl font-bold transition-all ${
                activeCategory === tab.id
                  ? "bg-purple-800 text-white shadow-md"
                  : "bg-white text-stone-700 border border-stone-200 hover:bg-stone-50"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Hidden Gems List / Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {filteredGems.map((gem) => (
          <div
            key={gem.id}
            className="bg-white rounded-3xl border border-purple-200/80 shadow-md overflow-hidden flex flex-col justify-between group hover:shadow-xl transition-all"
          >
            <div>
              {/* Image Hero */}
              <div className="relative h-64 overflow-hidden bg-stone-900">
                <img
                  src={gem.image}
                  alt={gem.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-purple-700 text-white font-bold text-xs rounded-full shadow">
                    Hidden Wonder
                  </span>
                </div>
                <button
                  onClick={() => toggleSavePlace(gem.id, gem.name)}
                  className={`absolute top-4 right-4 p-2.5 rounded-full backdrop-blur-md transition-colors ${
                    isPlaceSaved(gem.id)
                      ? "bg-rose-500 text-white"
                      : "bg-black/40 text-white hover:bg-black/60"
                  }`}
                  title="Add to Royal Wishlist"
                >
                  <Heart className={`w-4 h-4 ${isPlaceSaved(gem.id) ? "fill-current" : ""}`} />
                </button>
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="text-xs text-amber-300 font-semibold flex items-center">
                    <MapPin className="w-3.5 h-3.5 mr-1" /> {gem.cityName}
                  </span>
                  <h3 className="font-serif font-bold text-2xl text-amber-50 mt-0.5">{gem.name}</h3>
                </div>
              </div>

              {/* Structured Info Box as requested in PRD */}
              <div className="p-6 space-y-4">
                {/* Why Visit? */}
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-purple-900 flex items-center space-x-1">
                    <Sparkles className="w-3.5 h-3.5 text-purple-700" />
                    <span>Why Visit?</span>
                  </h4>
                  <p className="text-xs sm:text-sm text-stone-700 mt-1 leading-relaxed">
                    {gem.description}
                  </p>
                </div>

                {/* Best time & How to reach */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 p-3.5 bg-purple-50/60 rounded-2xl border border-purple-100 text-xs">
                  <div>
                    <span className="text-stone-400 block text-[10px] uppercase font-bold flex items-center">
                      <Calendar className="w-3 h-3 mr-1 text-purple-700" /> Best Time
                    </span>
                    <span className="text-stone-800 font-semibold">{gem.bestTime}</span>
                  </div>
                  <div>
                    <span className="text-stone-400 block text-[10px] uppercase font-bold flex items-center">
                      <Clock className="w-3 h-3 mr-1 text-purple-700" /> Timings
                    </span>
                    <span className="text-stone-800 font-semibold">{gem.openingTime} – {gem.closingTime}</span>
                  </div>
                </div>

                {/* Architecture & Legends tease */}
                <div className="text-xs text-stone-600 bg-stone-50 p-3 rounded-xl border border-stone-200/80">
                  <strong className="text-stone-800 block mb-0.5">Legend & Lore:</strong>
                  <p className="italic text-stone-600 line-clamp-2">&quot;{gem.legends}&quot;</p>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="p-6 pt-0 flex items-center space-x-3">
              <Link
                href={`/destinations/${gem.slug}`}
                className="flex-1 py-3 bg-purple-900 hover:bg-purple-950 text-white font-bold text-xs sm:text-sm rounded-xl text-center shadow transition-colors flex items-center justify-center space-x-2"
              >
                <span>Explore Secret Details</span>
                <ArrowRight className="w-4 h-4 text-amber-300" />
              </Link>
              <button
                onClick={() => toggleSavePlace(gem.id, gem.name)}
                className={`px-4 py-3 rounded-xl border text-xs font-bold transition-colors ${
                  isPlaceSaved(gem.id)
                    ? "bg-rose-50 text-rose-700 border-rose-300"
                    : "bg-white text-stone-700 border-stone-300 hover:bg-stone-50"
                }`}
              >
                {isPlaceSaved(gem.id) ? "Saved in Trip" : "+ Add to Trip"}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
