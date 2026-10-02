"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useApp } from "@/context/AppContext";
import { CITIES, DESTINATIONS } from "@/data/rajasthanData";
import { RAJASTHANI_DISHES } from "@/data/cuisineCultureData";
import { FESTIVALS } from "@/data/festivalsData";
import { HISTORICAL_STORIES } from "@/data/storiesData";
import { Search, X, MapPin, Landmark, UtensilsCrossed, Calendar, BookOpen, ArrowRight } from "lucide-react";

export const SearchModal: React.FC = () => {
  const { isSearchModalOpen, setIsSearchModalOpen } = useApp();
  const [query, setQuery] = useState("");

  // Keyboard shortcut Cmd+K / Ctrl+K and Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setIsSearchModalOpen(true);
      } else if (e.key === "Escape" && isSearchModalOpen) {
        setIsSearchModalOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isSearchModalOpen, setIsSearchModalOpen]);

  if (!isSearchModalOpen) return null;

  const cleanQuery = query.toLowerCase().trim();

  const matchingCities = cleanQuery
    ? CITIES.filter(
        (c) =>
          c.name.toLowerCase().includes(cleanQuery) ||
          c.nickname.toLowerCase().includes(cleanQuery) ||
          c.description.toLowerCase().includes(cleanQuery)
      )
    : [];

  const matchingDestinations = cleanQuery
    ? DESTINATIONS.filter(
        (d) =>
          d.name.toLowerCase().includes(cleanQuery) ||
          d.cityName.toLowerCase().includes(cleanQuery) ||
          d.category.toLowerCase().includes(cleanQuery) ||
          d.tags.some((t) => t.toLowerCase().includes(cleanQuery))
      )
    : [];

  const matchingDishes = cleanQuery
    ? RAJASTHANI_DISHES.filter(
        (dish) =>
          dish.name.toLowerCase().includes(cleanQuery) ||
          dish.regionalOrigin.toLowerCase().includes(cleanQuery)
      )
    : [];

  const matchingFestivals = cleanQuery
    ? FESTIVALS.filter(
        (f) =>
          f.name.toLowerCase().includes(cleanQuery) ||
          f.location.toLowerCase().includes(cleanQuery)
      )
    : [];

  const matchingStories = cleanQuery
    ? HISTORICAL_STORIES.filter(
        (s) =>
          s.title.toLowerCase().includes(cleanQuery) ||
          s.subtitle.toLowerCase().includes(cleanQuery)
      )
    : [];

  const totalResults =
    matchingCities.length +
    matchingDestinations.length +
    matchingDishes.length +
    matchingFestivals.length +
    matchingStories.length;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 md:pt-24 px-4 bg-stone-900/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-[#FDFBF7] rounded-2xl shadow-2xl border border-[#E8DCCB] overflow-hidden flex flex-col max-h-[80vh]">
        {/* Search Input Bar */}
        <div className="flex items-center px-4 py-3.5 border-b border-[#E8DCCB] bg-white">
          <Search className="w-5 h-5 text-[#C85A32] mr-3 flex-shrink-0" />
          <input
            type="text"
            placeholder="Search Jaipur, Mehrangarh Fort, Dal Baati, Pushkar Fair..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            autoFocus
            className="w-full text-base bg-transparent text-stone-900 placeholder:text-stone-400 focus:outline-none"
          />
          {query && (
            <button
              onClick={() => setQuery("")}
              className="p-1 mr-2 text-stone-400 hover:text-stone-600 rounded-full"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={() => setIsSearchModalOpen(false)}
            className="text-xs font-semibold px-2.5 py-1 bg-stone-100 text-stone-600 rounded-md border border-stone-200 hover:bg-stone-200"
          >
            ESC
          </button>
        </div>

        {/* Results Area */}
        <div className="overflow-y-auto p-4 space-y-5 flex-1 divide-y divide-stone-100">
          {!cleanQuery && (
            <div className="py-8 text-center">
              <Landmark className="w-10 h-10 text-[#D4AF37] mx-auto mb-3 opacity-60" />
              <p className="text-sm font-medium text-stone-600">Discover Rajasthan's Wonders</p>
              <p className="text-xs text-stone-400 mt-1">
                Type any city, fort, palace, temple, local dish, or royal story to begin.
              </p>
              <div className="flex flex-wrap justify-center gap-2 mt-4">
                {["Jaipur", "Mehrangarh Fort", "Udaipur", "Dal Baati", "Kumbhalgarh", "Pushkar"].map((sample) => (
                  <button
                    key={sample}
                    onClick={() => setQuery(sample)}
                    className="text-xs px-3 py-1 bg-amber-50 hover:bg-amber-100 text-[#780016] rounded-full border border-amber-200 transition-colors"
                  >
                    {sample}
                  </button>
                ))}
              </div>
            </div>
          )}

          {cleanQuery && totalResults === 0 && (
            <div className="py-12 text-center text-stone-500">
              <p className="font-serif text-lg text-stone-700">No matching heritage sites found</p>
              <p className="text-xs text-stone-400 mt-1">Try searching for &quot;Fort&quot;, &quot;Jodhpur&quot;, or &quot;Lassi&quot;</p>
            </div>
          )}

          {/* Cities Section */}
          {matchingCities.length > 0 && (
            <div className="pt-3">
              <div className="flex items-center text-xs font-bold uppercase tracking-wider text-[#780016] mb-2">
                <MapPin className="w-3.5 h-3.5 mr-1.5" /> Cities ({matchingCities.length})
              </div>
              <div className="space-y-1.5">
                {matchingCities.map((city) => (
                  <Link
                    key={city.id}
                    href={`/cities/${city.slug}`}
                    onClick={() => setIsSearchModalOpen(false)}
                    className="flex items-center justify-between p-2.5 rounded-xl hover:bg-amber-50/70 transition-colors group"
                  >
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 rounded-lg overflow-hidden bg-stone-200 flex-shrink-0">
                        <img src={city.image} alt={city.name} className="w-full h-full object-cover" />
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-stone-900 group-hover:text-[#780016]">
                          {city.name}
                        </div>
                        <div className="text-xs text-[#C85A32]">{city.nickname}</div>
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-stone-400 group-hover:text-[#780016] transform group-hover:translate-x-1 transition-transform" />
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Destinations Section */}
          {matchingDestinations.length > 0 && (
            <div className="pt-3">
              <div className="flex items-center text-xs font-bold uppercase tracking-wider text-[#0F2C59] mb-2">
                <Landmark className="w-3.5 h-3.5 mr-1.5" /> Forts, Palaces & Monuments ({matchingDestinations.length})
              </div>
              <div className="space-y-1.5">
                {matchingDestinations.map((dest) => (
                  <Link
                    key={dest.id}
                    href={`/destinations/${dest.slug}`}
                    onClick={() => setIsSearchModalOpen(false)}
                    className="flex items-center justify-between p-2.5 rounded-xl hover:bg-amber-50/70 transition-colors group"
                  >
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 rounded-lg overflow-hidden bg-stone-200 flex-shrink-0">
                        <img src={dest.image} alt={dest.name} className="w-full h-full object-cover" />
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-stone-900 group-hover:text-[#0F2C59]">
                          {dest.name}
                        </div>
                        <div className="text-xs text-stone-500">
                          📍 {dest.cityName} • <span className="capitalize text-[#C85A32]">{dest.category}</span>
                        </div>
                      </div>
                    </div>
                    <span className="text-xs px-2 py-0.5 bg-amber-100 text-[#780016] rounded-full font-medium">
                      ★ {dest.rating}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Stories Section */}
          {matchingStories.length > 0 && (
            <div className="pt-3">
              <div className="flex items-center text-xs font-bold uppercase tracking-wider text-[#C85A32] mb-2">
                <BookOpen className="w-3.5 h-3.5 mr-1.5" /> Historical Stories ({matchingStories.length})
              </div>
              <div className="space-y-1.5">
                {matchingStories.map((story) => (
                  <Link
                    key={story.id}
                    href={`/heritage#${story.slug}`}
                    onClick={() => setIsSearchModalOpen(false)}
                    className="flex items-center justify-between p-2.5 rounded-xl hover:bg-amber-50/70 transition-colors group"
                  >
                    <div>
                      <div className="text-sm font-semibold text-stone-900 group-hover:text-[#C85A32]">
                        {story.title}
                      </div>
                      <div className="text-xs text-stone-500">{story.subtitle}</div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-stone-400 group-hover:text-[#C85A32]" />
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Dishes Section */}
          {matchingDishes.length > 0 && (
            <div className="pt-3">
              <div className="flex items-center text-xs font-bold uppercase tracking-wider text-amber-800 mb-2">
                <UtensilsCrossed className="w-3.5 h-3.5 mr-1.5" /> Royal Delicacies ({matchingDishes.length})
              </div>
              <div className="space-y-1.5">
                {matchingDishes.map((dish) => (
                  <Link
                    key={dish.id}
                    href={`/food-culture#${dish.id}`}
                    onClick={() => setIsSearchModalOpen(false)}
                    className="flex items-center justify-between p-2.5 rounded-xl hover:bg-amber-50/70 transition-colors group"
                  >
                    <div>
                      <div className="text-sm font-semibold text-stone-900 group-hover:text-amber-800">
                        {dish.name}
                      </div>
                      <div className="text-xs text-stone-500">{dish.category} • {dish.regionalOrigin}</div>
                    </div>
                    <span className="text-xs text-[#C85A32] font-medium">{dish.spiceLevel}</span>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Festivals Section */}
          {matchingFestivals.length > 0 && (
            <div className="pt-3">
              <div className="flex items-center text-xs font-bold uppercase tracking-wider text-rose-800 mb-2">
                <Calendar className="w-3.5 h-3.5 mr-1.5" /> Festivals & Events ({matchingFestivals.length})
              </div>
              <div className="space-y-1.5">
                {matchingFestivals.map((fest) => (
                  <Link
                    key={fest.id}
                    href={`/festivals#${fest.id}`}
                    onClick={() => setIsSearchModalOpen(false)}
                    className="flex items-center justify-between p-2.5 rounded-xl hover:bg-amber-50/70 transition-colors group"
                  >
                    <div>
                      <div className="text-sm font-semibold text-stone-900 group-hover:text-rose-800">
                        {fest.name}
                      </div>
                      <div className="text-xs text-stone-500">📍 {fest.location} • {fest.nextDates}</div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-stone-400 group-hover:text-rose-800" />
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
