"use client";

import React, { useState } from "react";
import Link from "next/link";
import { CITIES } from "@/data/rajasthanData";
import { MapPin, Search, ArrowRight, Calendar, Compass, Sparkles } from "lucide-react";

export default function CitiesPage() {
  const [search, setSearch] = useState("");

  const filteredCities = CITIES.filter(
    (c) =>
      c.name.toLowerCase().includes(search.toLowerCase()) ||
      c.nickname.toLowerCase().includes(search.toLowerCase()) ||
      c.district.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-[#FDFBF7] py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Page Header */}
      <div className="text-center max-w-3xl mx-auto mb-10">
        <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-amber-100 text-[#780016] text-xs font-bold uppercase tracking-wider border border-amber-300 mb-3">
          <MapPin className="w-3.5 h-3.5 text-[#C85A32]" />
          <span>Crown Cities of the Desert Realm</span>
        </div>
        <h1 className="font-serif font-black text-3xl sm:text-5xl text-[#0F2C59]">
          Destinations & Cities of Rajasthan
        </h1>
        <p className="mt-3 text-sm sm:text-base text-stone-600 leading-relaxed">
          From the vibrant terracotta-pink facades of Jaipur to the cobalt alleyways of Jodhpur and the golden bastions of Jaisalmer. Discover the unique heritage, food, and culture of each royal city.
        </p>

        {/* City Search Bar */}
        <div className="mt-6 max-w-md mx-auto relative">
          <Search className="w-5 h-5 text-stone-400 absolute left-3.5 top-1/2 transform -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search by city name or nickname..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-11 pr-4 py-2.5 bg-white rounded-2xl border border-stone-200 focus:outline-none focus:border-[#D4AF37] text-sm text-stone-900 shadow-sm"
          />
        </div>
      </div>

      {/* Cities Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredCities.map((city) => (
          <div
            key={city.id}
            className="jharokha-card rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all flex flex-col justify-between group"
          >
            <div>
              {/* Image & Nickname */}
              <div className="relative h-60 overflow-hidden bg-stone-900">
                <img
                  src={city.image}
                  alt={city.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-95"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-amber-400/90 text-[#0F2C59] font-bold text-xs rounded-full shadow-sm backdrop-blur-sm">
                    {city.nickname}
                  </span>
                </div>
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h3 className="font-serif font-bold text-2xl text-amber-50">{city.name}</h3>
                  <p className="text-xs text-amber-200/90 mt-0.5 line-clamp-1">{city.tagline}</p>
                </div>
              </div>

              {/* Body */}
              <div className="p-5 space-y-4">
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed line-clamp-3">
                  {city.description}
                </p>

                {/* Practical details */}
                <div className="p-3 bg-amber-50/70 rounded-xl border border-amber-200/60 grid grid-cols-2 gap-2 text-xs">
                  <div>
                    <span className="text-[10px] text-stone-400 uppercase font-semibold block">Ideal Time</span>
                    <span className="font-semibold text-stone-800">{city.bestTime.split("(")[0]}</span>
                  </div>
                  <div>
                    <span className="text-[10px] text-stone-400 uppercase font-semibold block">Recommended Stay</span>
                    <span className="font-semibold text-[#780016]">{city.idealDays}</span>
                  </div>
                </div>

                {/* Local Food highlights */}
                <div className="text-xs text-stone-600">
                  <strong className="text-stone-800 block mb-1">Famous Food:</strong>
                  <div className="flex flex-wrap gap-1.5">
                    {city.localFood.map((food, i) => (
                      <span key={i} className="px-2 py-0.5 bg-stone-100 text-stone-700 rounded-md text-[11px]">
                        {food.name}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="p-5 pt-0">
              <Link
                href={`/cities/${city.slug}`}
                className="w-full py-3 bg-[#0F2C59] hover:bg-[#1A365D] text-amber-100 font-bold text-xs sm:text-sm rounded-xl transition-colors flex items-center justify-center space-x-2 shadow-md group-hover:scale-[1.01]"
              >
                <span>Explore {city.name} City Guide</span>
                <ArrowRight className="w-4 h-4 text-[#D4AF37]" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
