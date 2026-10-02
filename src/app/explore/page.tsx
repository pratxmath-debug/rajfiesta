"use client";

import React from "react";
import { RajasthanMap } from "@/components/RajasthanMap";
import { Compass, Sparkles, MapPin, Landmark, Bed, UtensilsCrossed } from "lucide-react";
import Link from "next/link";
import { CITIES } from "@/data/rajasthanData";

export default function ExplorePage() {
  return (
    <div className="min-h-screen bg-[#FDFBF7] py-10 md:py-14 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header Banner */}
      <div className="text-center max-w-3xl mx-auto mb-10">
        <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-amber-100 text-[#780016] text-xs font-bold uppercase tracking-wider border border-amber-300 mb-3">
          <Compass className="w-3.5 h-3.5 text-[#C85A32]" />
          <span>Interactive Geographic Explorer</span>
        </div>
        <h1 className="font-serif font-black text-3xl sm:text-5xl text-[#0F2C59] tracking-tight">
          Explore Rajasthan
        </h1>
        <p className="mt-3 text-sm sm:text-base text-stone-600 leading-relaxed">
          Navigate through Rajasthan&apos;s 10 royal districts, 35+ monumental fortresses, subterranean stepwells, and living heritage stays. Click any pin or filter to reveal chronicled sagas and travel logistics.
        </p>

        {/* Quick City Jump Bar */}
        <div className="flex flex-wrap items-center justify-center gap-2 mt-6">
          {CITIES.map((c) => (
            <Link
              key={c.id}
              href={`/cities/${c.slug}`}
              className="text-xs px-3 py-1.5 bg-white hover:bg-[#0F2C59] hover:text-white text-stone-700 font-medium rounded-xl border border-stone-200 transition-colors shadow-sm"
            >
              📍 {c.name}
            </Link>
          ))}
        </div>
      </div>

      {/* Main Map Component */}
      <RajasthanMap />

      {/* Extra Travel Tips Grid */}
      <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-6 bg-white rounded-2xl border border-[#E8DCCB] shadow-sm">
          <div className="w-10 h-10 rounded-xl bg-amber-100 text-[#780016] flex items-center justify-center mb-3">
            <Landmark className="w-5 h-5" />
          </div>
          <h3 className="font-serif font-bold text-lg text-stone-900">Hill Forts of Rajasthan</h3>
          <p className="text-xs text-stone-600 mt-1 leading-relaxed">
            Six magnificent forts are collectively designated as a UNESCO World Heritage Site: Amber, Chittorgarh, Kumbhalgarh, Jaisalmer, Ranthambore, and Gagron.
          </p>
          <Link href="/heritage" className="inline-block mt-3 text-xs font-bold text-[#780016] hover:underline">
            Read Fort Histories →
          </Link>
        </div>

        <div className="p-6 bg-white rounded-2xl border border-[#E8DCCB] shadow-sm">
          <div className="w-10 h-10 rounded-xl bg-purple-100 text-purple-800 flex items-center justify-center mb-3">
            <Sparkles className="w-5 h-5" />
          </div>
          <h3 className="font-serif font-bold text-lg text-stone-900">Offbeat Stepwells</h3>
          <p className="text-xs text-stone-600 mt-1 leading-relaxed">
            Discover subterranean engineering marvels designed centuries ago to harvest desert rainwater, such as Chand Baori and Raniji Ki Baori.
          </p>
          <Link href="/hidden-gems" className="inline-block mt-3 text-xs font-bold text-purple-800 hover:underline">
            View Hidden Gems →
          </Link>
        </div>

        <div className="p-6 bg-white rounded-2xl border border-[#E8DCCB] shadow-sm">
          <div className="w-10 h-10 rounded-xl bg-sky-100 text-sky-800 flex items-center justify-center mb-3">
            <Bed className="w-5 h-5" />
          </div>
          <h3 className="font-serif font-bold text-lg text-stone-900">Authentic Haveli Stays</h3>
          <p className="text-xs text-stone-600 mt-1 leading-relaxed">
            Experience living Rajput hospitality inside 200-year-old frescoed mansions, desert tent camps, or historic Maharaja palaces.
          </p>
          <Link href="/hotels" className="inline-block mt-3 text-xs font-bold text-sky-800 hover:underline">
            Discover Stays →
          </Link>
        </div>
      </div>
    </div>
  );
}
