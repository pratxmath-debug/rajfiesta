"use client";

import React, { useState } from "react";
import Link from "next/link";
import { HISTORICAL_STORIES, HistoricalStory } from "@/data/storiesData";
import { DESTINATIONS, Destination } from "@/data/rajasthanData";
import { AudioStoryPlayer } from "@/components/AudioStoryPlayer";
import {
  Landmark,
  Crown,
  Sparkles,
  BookOpen,
  ArrowRight,
  ShieldAlert,
  ChevronRight,
  Calendar,
  Layers,
  MapPin
} from "lucide-react";

export default function HeritagePage() {
  const [selectedStory, setSelectedStory] = useState<HistoricalStory>(HISTORICAL_STORIES[0]);
  const [categoryFilter, setCategoryFilter] = useState<"all" | "fort" | "palace" | "temple" | "stepwell">("all");

  const heritageDestinations = DESTINATIONS.filter((d) => {
    if (categoryFilter === "all") return ["fort", "palace", "temple", "stepwell"].includes(d.category);
    return d.category === categoryFilter;
  });

  return (
    <div className="min-h-screen bg-[#FDFBF7] py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-16">
      {/* 1. PAGE HEADER */}
      <div className="text-center max-w-3xl mx-auto">
        <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-rose-100 text-[#780016] text-xs font-bold uppercase tracking-wider border border-rose-300 mb-3">
          <Crown className="w-3.5 h-3.5 text-[#780016]" />
          <span>Interactive Digital Museum</span>
        </div>
        <h1 className="font-serif font-black text-3xl sm:text-5xl text-[#0F2C59]">
          Heritage & Sagas of Rajasthan
        </h1>
        <p className="mt-3 text-sm sm:text-base text-stone-600 leading-relaxed">
          Walk through eight centuries of Rajput chivalry, heroic sieges, and architectural genius. Experience our interactive storytelling chronicles featuring verified timelines, royal legends, and audio narration.
        </p>
      </div>

      {/* 2. FLAGSHIP INTERACTIVE STORYTELLING EXPERIENCE */}
      <section className="bg-white rounded-3xl border border-[#E8DCCB] shadow-xl overflow-hidden p-6 sm:p-10 space-y-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-stone-100 pb-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#C85A32]">
              Interactive Storyteller
            </span>
            <h2 className="font-serif font-bold text-2xl sm:text-3xl text-[#0F2C59] mt-0.5">
              {selectedStory.title}
            </h2>
            <p className="text-xs sm:text-sm text-stone-500 mt-1">{selectedStory.subtitle}</p>
          </div>

          {/* Story Selector Pills */}
          <div className="flex items-center space-x-2 overflow-x-auto pb-1">
            {HISTORICAL_STORIES.map((story) => (
              <button
                key={story.id}
                onClick={() => setSelectedStory(story)}
                className={`text-xs px-3.5 py-2 rounded-xl font-bold whitespace-nowrap transition-all ${
                  selectedStory.id === story.id
                    ? "bg-[#780016] text-amber-100 shadow-md scale-105"
                    : "bg-stone-100 text-stone-700 hover:bg-stone-200"
                }`}
              >
                {story.title.split(":")[0]}
              </button>
            ))}
          </div>
        </div>

        {/* Audio Story Narration Player */}
        <AudioStoryPlayer
          title={selectedStory.title}
          storyScript={selectedStory.audioNarrationText}
        />

        {/* Story Overview & Visual Hero */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-5 relative h-72 rounded-2xl overflow-hidden shadow-lg">
            <img
              src={selectedStory.heroImage}
              alt={selectedStory.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 text-white">
              <span className="px-2.5 py-1 bg-[#D4AF37] text-[#0F2C59] font-bold text-xs rounded-md">
                Period: {selectedStory.historicalPeriod}
              </span>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-4">
            <h3 className="font-serif font-bold text-xl text-stone-900">Historical Chronicle</h3>
            <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
              {selectedStory.overview}
            </p>

            {/* Figures */}
            <div className="pt-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-stone-500 mb-2">
                Prominent Historical Figures
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                {selectedStory.figures.map((fig, idx) => (
                  <div key={idx} className="p-3 bg-amber-50/70 rounded-xl border border-amber-200/60">
                    <span className="font-serif font-bold text-[#780016] block">{fig.name}</span>
                    <span className="text-[11px] text-stone-500 font-medium">{fig.title}</span>
                    <p className="text-stone-600 text-[11px] mt-1">{fig.legacy}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Interactive Chronological Timeline */}
        <div className="pt-6 border-t border-stone-100">
          <h3 className="font-serif font-bold text-xl text-[#0F2C59] mb-6">
            Chronological Evolution of the Citadel
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {selectedStory.timeline.map((item, idx) => (
              <div
                key={idx}
                className="p-4 bg-stone-50 rounded-2xl border border-stone-200/80 hover:border-[#D4AF37] transition-colors relative flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between text-xs mb-1.5">
                    <span className="font-serif font-bold text-base text-[#780016]">{item.year}</span>
                    <span className="text-[10px] font-semibold text-stone-400 bg-white px-2 py-0.5 rounded border">
                      {item.era}
                    </span>
                  </div>
                  <h4 className="font-serif font-bold text-sm text-stone-900">{item.title}</h4>
                  <p className="text-xs text-stone-600 mt-1.5 leading-relaxed">{item.description}</p>
                </div>
                <div className="mt-3 pt-2 border-t border-stone-200/60 text-[11px] text-[#C85A32] font-semibold">
                  Hero: {item.keyFigure}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Legends & Architectural Marvels */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
          <div className="p-6 bg-amber-50/50 rounded-2xl border border-amber-200/70 space-y-3">
            <h4 className="font-serif font-bold text-lg text-[#780016] flex items-center space-x-2">
              <Sparkles className="w-4 h-4 text-[#D4AF37]" />
              <span>Legends & Prophecies</span>
            </h4>
            <div className="space-y-3">
              {selectedStory.legends.map((leg, i) => (
                <div key={i} className="text-xs space-y-1">
                  <strong className="text-stone-900">{leg.title}:</strong>
                  <p className="text-stone-600 italic leading-relaxed">&quot;{leg.tale}&quot;</p>
                </div>
              ))}
            </div>
          </div>

          <div className="p-6 bg-stone-50 rounded-2xl border border-stone-200 space-y-3">
            <h4 className="font-serif font-bold text-lg text-[#0F2C59] flex items-center space-x-2">
              <Crown className="w-4 h-4 text-[#D4AF37]" />
              <span>Architectural Highlights</span>
            </h4>
            <div className="space-y-3">
              {selectedStory.architecturalHighlights.map((arch, i) => (
                <div key={i} className="text-xs space-y-0.5">
                  <strong className="text-stone-900">{arch.title}</strong>
                  <p className="text-stone-600">{arch.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. FORTS, PALACES, TEMPLES & STEPWELLS CATALOGUE */}
      <section className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h2 className="font-serif font-bold text-2xl sm:text-3xl text-[#0F2C59]">
              Forts, Palaces & Monuments Directory
            </h2>
            <p className="text-xs sm:text-sm text-stone-600 mt-1">
              Select categories to inspect architectural masterpieces across Rajasthan.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center space-x-1.5 overflow-x-auto pb-1 text-xs">
            {(["all", "fort", "palace", "temple", "stepwell"] as const).map((cat) => (
              <button
                key={cat}
                onClick={() => setCategoryFilter(cat)}
                className={`px-3 py-1.5 rounded-xl font-bold capitalize transition-colors ${
                  categoryFilter === cat
                    ? "bg-[#0F2C59] text-amber-100 shadow"
                    : "bg-white text-stone-600 border border-stone-200 hover:bg-stone-50"
                }`}
              >
                {cat === "all" ? "All Heritage Sites" : `${cat}s`}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {heritageDestinations.map((dest) => (
            <div
              key={dest.id}
              className="bg-white rounded-2xl border border-[#E8DCCB] overflow-hidden shadow-sm hover:shadow-lg transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="relative h-48 overflow-hidden bg-stone-900">
                  <img
                    src={dest.image}
                    alt={dest.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-3 left-3 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-stone-900/80 text-amber-300 capitalize">
                    {dest.category}
                  </span>
                  <span className="absolute top-3 right-3 px-2 py-0.5 rounded-full text-xs font-bold bg-amber-400 text-[#0F2C59]">
                    ★ {dest.rating}
                  </span>
                </div>
                <div className="p-5 space-y-2">
                  <div className="text-[11px] text-[#C85A32] font-semibold flex items-center">
                    <MapPin className="w-3 h-3 mr-1" /> {dest.cityName}
                  </div>
                  <h3 className="font-serif font-bold text-lg text-stone-900 group-hover:text-[#780016]">
                    {dest.name}
                  </h3>
                  <p className="text-xs text-stone-600 line-clamp-2">
                    {dest.description}
                  </p>
                </div>
              </div>
              <div className="p-5 pt-0">
                <Link
                  href={`/destinations/${dest.slug}`}
                  className="w-full py-2 bg-amber-50 group-hover:bg-[#0F2C59] text-[#780016] group-hover:text-amber-100 font-bold text-xs rounded-xl transition-colors flex items-center justify-center space-x-1"
                >
                  <span>Explore Monument History</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
