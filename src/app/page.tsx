"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Compass,
  Sparkles,
  MapPin,
  Landmark,
  Crown,
  ArrowRight,
  Heart,
  ChevronRight,
  Bed,
  Plane,
  UtensilsCrossed,
  Calendar,
  Volume2,
  ShieldCheck,
  Star,
  Search
} from "lucide-react";
import { CITIES, DESTINATIONS } from "@/data/rajasthanData";
import { HISTORICAL_STORIES } from "@/data/storiesData";
import { RAJASTHANI_DISHES } from "@/data/cuisineCultureData";
import { RajasthanMap } from "@/components/RajasthanMap";
import { useApp } from "@/context/AppContext";

export default function HomePage() {
  const { isPlaceSaved, toggleSavePlace, setIsSearchModalOpen } = useApp();
  const [activeStoryIdx, setActiveStoryIdx] = useState(0);

  const featuredCities = CITIES.slice(0, 6);
  const hiddenGems = DESTINATIONS.filter((d) => d.isHiddenGem).slice(0, 4);
  const currentStory = HISTORICAL_STORIES[activeStoryIdx] || HISTORICAL_STORIES[0];

  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. CINEMATIC HERO SECTION */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-stone-900 text-white">
        {/* Background Image with Ambient Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=2000&q=85"
            alt="Majestic Amber Fort Rajasthan"
            className="w-full h-full object-cover object-center scale-105 transform animate-pulse duration-1000 opacity-60"
            style={{ animationDuration: "12s" }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1A1412] via-[#0F2C59]/40 to-black/60" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20 pb-16 flex flex-col items-center">
          {/* Royal Crest Tag */}
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-amber-400/20 border border-[#D4AF37]/60 text-amber-200 text-xs sm:text-sm font-semibold uppercase tracking-widest backdrop-blur-md mb-6 animate-in fade-in slide-in-from-top-4 duration-700">
            <Crown className="w-4 h-4 text-[#D4AF37]" />
            <span>The Royal Heritage of India</span>
          </div>

          {/* Majestic Hero Headline */}
          <h1 className="font-serif font-black text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight text-amber-50 drop-shadow-2xl">
            RAJASTHAN <span className="text-gold-gradient">AWAITS</span>
          </h1>

          <p className="mt-4 font-serif text-lg sm:text-2xl text-amber-100/90 max-w-2xl font-normal drop-shadow">
            Walk through centuries of history. Discover the forts. Hear the legends. Find the places tourists miss.
          </p>

          {/* Quick Search Bar */}
          <div className="mt-8 w-full max-w-2xl">
            <div
              onClick={() => setIsSearchModalOpen(true)}
              className="flex items-center bg-white/95 backdrop-blur-md rounded-2xl p-2.5 shadow-2xl border-2 border-[#D4AF37]/60 hover:border-[#D4AF37] cursor-pointer transition-all hover:scale-[1.01]"
            >
              <Search className="w-5 h-5 text-[#C85A32] ml-3 mr-3 flex-shrink-0" />
              <span className="text-stone-500 text-sm sm:text-base flex-1 text-left">
                Search Mehrangarh, Jodhpur, Dal Baati, Palace Stays...
              </span>
              <kbd className="hidden sm:inline-block px-2.5 py-1 text-xs font-mono font-semibold text-stone-500 bg-stone-100 rounded-lg border border-stone-200 mr-2">
                ⌘K
              </kbd>
              <button className="px-5 py-2.5 bg-gradient-to-r from-[#780016] to-[#0F2C59] text-amber-100 font-bold text-xs sm:text-sm rounded-xl shadow-md">
                Search
              </button>
            </div>
          </div>

          {/* Primary Action Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row items-center gap-4">
            <Link
              href="/explore"
              className="w-full sm:w-auto px-8 py-3.5 bg-gradient-to-r from-[#D4AF37] to-[#E5A93C] hover:from-[#E5A93C] hover:to-[#F59E0B] text-[#0F2C59] font-extrabold text-sm sm:text-base rounded-2xl shadow-xl transition-transform hover:scale-105 active:scale-95 flex items-center justify-center space-x-2"
            >
              <Compass className="w-5 h-5" />
              <span>Explore Rajasthan</span>
            </Link>

            <Link
              href="/planner"
              className="w-full sm:w-auto px-8 py-3.5 bg-white/10 hover:bg-white/20 text-amber-100 font-bold text-sm sm:text-base rounded-2xl border border-white/30 backdrop-blur-md transition-all hover:scale-105 flex items-center justify-center space-x-2"
            >
              <Sparkles className="w-5 h-5 text-amber-300 fill-current" />
              <span>Plan My Trip with AI</span>
            </Link>
          </div>

          {/* Quick Metrics Ticker */}
          <div className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-10 border-t border-white/20 pt-8 w-full max-w-4xl text-amber-100/90 text-center">
            <div>
              <div className="font-serif font-black text-2xl sm:text-3xl text-[#E5A93C]">10+</div>
              <div className="text-xs uppercase tracking-wider text-stone-300 mt-1">Historic Cities</div>
            </div>
            <div>
              <div className="font-serif font-black text-2xl sm:text-3xl text-[#E5A93C]">35+</div>
              <div className="text-xs uppercase tracking-wider text-stone-300 mt-1">Forts & Palaces</div>
            </div>
            <div>
              <div className="font-serif font-black text-2xl sm:text-3xl text-[#E5A93C]">12+</div>
              <div className="text-xs uppercase tracking-wider text-stone-300 mt-1">Hidden Gems</div>
            </div>
            <div>
              <div className="font-serif font-black text-2xl sm:text-3xl text-[#E5A93C]">100%</div>
              <div className="text-xs uppercase tracking-wider text-stone-300 mt-1">AI Trip Tailoring</div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. INTERACTIVE RAJASTHAN MAP SECTION */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="text-center mb-10">
          <div className="inline-flex items-center space-x-1.5 text-xs font-bold uppercase tracking-widest text-[#780016] bg-amber-100/70 px-3.5 py-1 rounded-full mb-3 border border-amber-300">
            <Compass className="w-3.5 h-3.5 text-[#C85A32]" />
            <span>Interactive Geographic Atlas</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-black text-[#0F2C59]">
            The Living Map of Rajasthan
          </h2>
          <p className="mt-2 text-sm sm:text-base text-stone-600 max-w-2xl mx-auto">
            From the Thar dunes of Jaisalmer to the marble lake palaces of Udaipur. Filter by forts, palaces, stepwells, and royal hotels.
          </p>
        </div>

        {/* Embedded Interactive Map Component */}
        <RajasthanMap />
      </section>

      {/* 3. DISCOVER RAJASTHAN'S ICONIC CITIES SECTION */}
      <section className="py-16 md:py-20 bg-[#F7F2EA] border-y border-[#E8DCCB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#C85A32]">
                Royal Destinations
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#0F2C59] mt-1">
                Discover Rajasthan&apos;s Crown Cities
              </h2>
              <p className="text-xs sm:text-sm text-stone-600 mt-1">
                Every city holds its own distinct color, architectural personality, and chivalric legends.
              </p>
            </div>
            <Link
              href="/cities"
              className="inline-flex items-center space-x-1.5 text-sm font-bold text-[#780016] hover:text-[#0F2C59] transition-colors"
            >
              <span>View All 10 Cities</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Cities Grid with Jharokha Arch Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredCities.map((city) => (
              <div
                key={city.id}
                className="jharokha-card rounded-3xl overflow-hidden flex flex-col justify-between group"
              >
                <div>
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={city.image}
                      alt={city.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <span className="text-xs font-bold uppercase tracking-wider text-amber-300">
                        {city.nickname}
                      </span>
                      <h3 className="font-serif font-bold text-2xl text-white">{city.name}</h3>
                    </div>
                  </div>

                  <div className="p-5">
                    <p className="text-xs sm:text-sm text-stone-600 leading-relaxed line-clamp-3">
                      {city.description}
                    </p>

                    {/* Quick highlights */}
                    <div className="mt-4 pt-3 border-t border-stone-100 flex items-center justify-between text-xs text-stone-500">
                      <span>Ideal: <strong>{city.idealDays}</strong></span>
                      <span className="text-[#C85A32] font-semibold">{city.bestTime.split(" ")[0]}</span>
                    </div>
                  </div>
                </div>

                <div className="px-5 pb-5 pt-1">
                  <Link
                    href={`/cities/${city.slug}`}
                    className="w-full py-2.5 bg-amber-50 group-hover:bg-[#0F2C59] text-[#780016] group-hover:text-amber-100 font-bold text-xs rounded-xl transition-colors flex items-center justify-center space-x-1.5 shadow-sm"
                  >
                    <span>Explore {city.name}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. HISTORICAL STORYTELLING & INTERACTIVE TIMELINE TEASER */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Storytelling Pitch & Selector */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <div className="inline-flex items-center space-x-1.5 text-xs font-bold uppercase tracking-widest text-[#780016] bg-rose-50 px-3 py-1 rounded-full border border-rose-200">
                <Crown className="w-3.5 h-3.5 text-[#780016]" />
                <span>What Makes RajFiesta Different</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-serif font-black text-[#0F2C59] mt-3">
                Stories of Rajasthan: History Reimagined
              </h2>
              <p className="mt-3 text-sm text-stone-600 leading-relaxed">
                We do not merely show dates on a stone plaque. Experience Rajasthan through interactive chronological sagas, royal audio narration, and the chivalric sacrifices of Rajput warriors.
              </p>
            </div>

            {/* Story Switcher Tabs */}
            <div className="space-y-2">
              {HISTORICAL_STORIES.map((story, idx) => (
                <button
                  key={story.id}
                  onClick={() => setActiveStoryIdx(idx)}
                  className={`w-full text-left p-3.5 rounded-2xl border transition-all flex items-center justify-between ${
                    activeStoryIdx === idx
                      ? "bg-gradient-to-r from-[#0F2C59] to-[#780016] text-white border-transparent shadow-lg scale-[1.02]"
                      : "bg-white hover:bg-stone-50 border-stone-200 text-stone-800"
                  }`}
                >
                  <div>
                    <div className="font-serif font-bold text-sm">{story.title}</div>
                    <div className={`text-xs ${activeStoryIdx === idx ? "text-amber-200" : "text-stone-400"}`}>
                      {story.historicalPeriod}
                    </div>
                  </div>
                  <ChevronRight className={`w-4 h-4 ${activeStoryIdx === idx ? "text-amber-300" : "text-stone-400"}`} />
                </button>
              ))}
            </div>

            <Link
              href="/heritage"
              className="inline-flex items-center space-x-2 text-sm font-bold text-[#780016] hover:text-[#0F2C59]"
            >
              <span>Browse All Historical Chronicles</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Right Column: Active Story Preview Card */}
          <div className="lg:col-span-7 bg-white rounded-3xl border border-[#E8DCCB] p-6 sm:p-8 shadow-xl space-y-6">
            <div className="relative h-64 sm:h-72 rounded-2xl overflow-hidden">
              <img
                src={currentStory.heroImage}
                alt={currentStory.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="px-2.5 py-1 bg-[#D4AF37] text-[#0F2C59] font-bold text-xs rounded-md">
                  {currentStory.historicalPeriod}
                </span>
                <h3 className="font-serif font-bold text-2xl text-amber-50 mt-2">{currentStory.title}</h3>
                <p className="text-xs text-amber-200/90 mt-1">{currentStory.subtitle}</p>
              </div>
            </div>

            {/* Timeline Highlights */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-stone-500">
                Key Historical Milestones
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                {currentStory.timeline.slice(0, 3).map((node, i) => (
                  <div key={i} className="p-3 bg-amber-50/70 rounded-xl border border-amber-200/70">
                    <span className="font-serif font-bold text-[#780016] block">{node.year}</span>
                    <span className="font-semibold text-stone-900 block mt-0.5">{node.title}</span>
                    <p className="text-stone-600 text-[11px] mt-1 line-clamp-2">{node.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-stone-100">
              <span className="text-xs text-stone-500 italic">
                Includes interactive audio narration & legends
              </span>
              <Link
                href={`/heritage#${currentStory.slug}`}
                className="w-full sm:w-auto px-6 py-2.5 bg-[#0F2C59] hover:bg-[#1A365D] text-amber-100 font-bold text-xs rounded-xl shadow text-center"
              >
                Experience Full Chronicle →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 5. HIDDEN RAJASTHAN GEMS */}
      <section className="py-16 md:py-20 bg-gradient-to-b from-[#FAF5EE] to-[#FDFBF7] border-t border-[#E8DCCB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
            <div>
              <div className="inline-flex items-center space-x-1.5 text-xs font-bold uppercase tracking-widest text-purple-800 bg-purple-100 px-3 py-1 rounded-full mb-2">
                <Sparkles className="w-3.5 h-3.5 text-purple-700" />
                <span>The Persona 3 Experience</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#0F2C59]">
                Hidden Rajasthan: Beyond the Usual Circuit
              </h2>
              <p className="text-xs sm:text-sm text-stone-600 mt-1">
                &quot;I don&apos;t want the usual tourist route.&quot; Explore secret stepwells, ghost desert villages, and forgotten fortresses.
              </p>
            </div>
            <Link
              href="/hidden-gems"
              className="inline-flex items-center space-x-1 text-sm font-bold text-[#780016] hover:text-[#0F2C59]"
            >
              <span>Explore All Hidden Gems</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {hiddenGems.map((dest) => (
              <div
                key={dest.id}
                className="bg-white rounded-2xl border border-[#E8DCCB] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="relative h-48 overflow-hidden bg-stone-200">
                    <img
                      src={dest.image}
                      alt={dest.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <button
                      onClick={() => toggleSavePlace(dest.id, dest.name)}
                      className={`absolute top-3 right-3 p-2 rounded-full backdrop-blur-md transition-colors ${
                        isPlaceSaved(dest.id)
                          ? "bg-rose-500 text-white"
                          : "bg-black/40 text-white hover:bg-black/60"
                      }`}
                      title="Save to Wishlist"
                    >
                      <Heart className={`w-4 h-4 ${isPlaceSaved(dest.id) ? "fill-current" : ""}`} />
                    </button>
                    <span className="absolute bottom-3 left-3 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-[#9333EA] text-white">
                      Hidden Wonder
                    </span>
                  </div>

                  <div className="p-4 space-y-2">
                    <div className="text-[11px] text-[#C85A32] font-semibold flex items-center">
                      <MapPin className="w-3 h-3 mr-1" /> {dest.cityName}
                    </div>
                    <h4 className="font-serif font-bold text-stone-900 text-base group-hover:text-[#780016]">
                      {dest.name}
                    </h4>
                    <p className="text-xs text-stone-600 line-clamp-2">
                      {dest.description}
                    </p>
                  </div>
                </div>

                <div className="p-4 pt-1 border-t border-stone-100 flex items-center justify-between">
                  <span className="text-[11px] text-stone-500 font-medium">★ {dest.rating} Rating</span>
                  <Link
                    href={`/destinations/${dest.slug}`}
                    className="text-xs font-bold text-[#0F2C59] group-hover:text-[#780016] flex items-center space-x-1"
                  >
                    <span>Discover</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. ROYAL CUISINE & FLAVORS TEASER */}
      <section className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#C85A32]">
              Flavors of the Thar
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#0F2C59] mt-1">
              Royal Rajasthani Gastronomy
            </h2>
            <p className="text-xs sm:text-sm text-stone-600 mt-1">
              From fiery Mathania curries to saffron-steeped honeycomb Ghewar.
            </p>
          </div>
          <Link
            href="/food-culture"
            className="inline-flex items-center space-x-1.5 text-sm font-bold text-[#780016] hover:text-[#0F2C59]"
          >
            <span>Explore All Royal Dishes</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {RAJASTHANI_DISHES.slice(0, 4).map((dish) => (
            <div
              key={dish.id}
              className="bg-white rounded-2xl border border-[#E8DCCB] overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="relative h-44 overflow-hidden bg-stone-100">
                  <img
                    src={dish.image}
                    alt={dish.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-3 left-3 px-2 py-0.5 rounded-full text-[10px] font-bold bg-amber-500 text-white">
                    {dish.spiceLevel}
                  </span>
                </div>
                <div className="p-4">
                  <div className="text-[11px] text-stone-400 font-semibold">{dish.regionalOrigin}</div>
                  <h4 className="font-serif font-bold text-stone-900 text-base mt-0.5 group-hover:text-[#780016]">
                    {dish.name}
                  </h4>
                  <p className="text-xs text-stone-600 line-clamp-2 mt-1">
                    {dish.description}
                  </p>
                </div>
              </div>
              <div className="p-4 pt-1 border-t border-stone-100 text-[11px] text-[#C85A32] font-semibold">
                📍 Iconic at: {dish.mustTryAt.spot}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 7. AI TRIP PLANNER BANNER */}
      <section className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="bg-gradient-to-r from-[#0F2C59] via-[#1A365D] to-[#780016] text-amber-50 rounded-3xl p-8 sm:p-12 shadow-2xl border border-[#D4AF37]/50 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="relative z-10 max-w-xl space-y-4">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-amber-400/20 text-amber-200 text-xs font-bold uppercase tracking-wider border border-amber-300/40">
              <Sparkles className="w-3.5 h-3.5 text-[#E5A93C] animate-spin" style={{ animationDuration: "10s" }} />
              <span>Flagship AI Feature</span>
            </div>
            <h2 className="font-serif font-black text-3xl sm:text-4xl text-amber-100">
              Personalized Rajasthan Itinerary in 5 Seconds
            </h2>
            <p className="text-xs sm:text-sm text-amber-200/90 leading-relaxed">
              Tell RajFiesta your duration, starting point, budget, and travel style. Our AI calculates transit routes, monument timings, palace hotels, and delicious food spots into a complete hour-by-hour schedule.
            </p>
            <div className="flex flex-wrap gap-2 text-xs text-amber-100/80">
              <span className="px-2.5 py-1 bg-white/10 rounded-lg">✓ Accurate distance & timing</span>
              <span className="px-2.5 py-1 bg-white/10 rounded-lg">✓ Exact ticket fees</span>
              <span className="px-2.5 py-1 bg-white/10 rounded-lg">✓ Save to Dashboard</span>
            </div>
          </div>

          <div className="relative z-10 flex flex-col items-center sm:items-end w-full md:w-auto">
            <Link
              href="/planner"
              className="px-8 py-4 bg-gradient-to-r from-[#D4AF37] to-[#E5A93C] hover:from-[#E5A93C] hover:to-[#F59E0B] text-[#0F2C59] font-extrabold text-base rounded-2xl shadow-xl transition-transform hover:scale-105 active:scale-95 flex items-center space-x-2"
            >
              <Sparkles className="w-5 h-5 fill-current text-[#780016]" />
              <span>Generate My Trip With AI</span>
            </Link>
            <span className="text-xs text-amber-300/70 mt-2">Free • Instant • Fully Customizable</span>
          </div>
        </div>
      </section>
    </div>
  );
}
