"use client";

import React, { useState } from "react";
import { RAJASTHANI_DISHES, CULTURAL_TRADITIONS, Dish, CulturalTradition } from "@/data/cuisineCultureData";
import {
  UtensilsCrossed,
  Sparkles,
  Music,
  MapPin,
  Flame,
  CheckCircle2,
  Layers,
  Heart
} from "lucide-react";

export default function FoodCulturePage() {
  const [activeTab, setActiveTab] = useState<"food" | "culture">("food");
  const [selectedDish, setSelectedDish] = useState<Dish | null>(null);

  return (
    <div className="min-h-screen bg-[#FDFBF7] py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12">
      {/* Page Header */}
      <div className="text-center max-w-3xl mx-auto">
        <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-amber-100 text-[#780016] text-xs font-bold uppercase tracking-wider border border-amber-300 mb-3">
          <UtensilsCrossed className="w-3.5 h-3.5 text-[#C85A32]" />
          <span>Living Gastronomy & Desert Arts</span>
        </div>
        <h1 className="font-serif font-black text-3xl sm:text-5xl text-[#0F2C59]">
          Food & Culture of Rajasthan
        </h1>
        <p className="mt-3 text-sm sm:text-base text-stone-600 leading-relaxed">
          From the slow wood-fired baatis soaked in golden ghee to the hypnotic pirouettes of Ghoomar dancers and the haunting string melodies of Manganiyar bards.
        </p>

        {/* Category Switcher Tabs */}
        <div className="flex items-center justify-center space-x-3 mt-8">
          <button
            onClick={() => setActiveTab("food")}
            className={`px-6 py-3 rounded-2xl font-bold text-xs sm:text-sm transition-all ${
              activeTab === "food"
                ? "bg-[#780016] text-amber-100 shadow-xl scale-105"
                : "bg-white text-stone-700 border border-stone-200 hover:bg-stone-50"
            }`}
          >
            🍛 Rajasthani Royal Cuisine
          </button>
          <button
            onClick={() => setActiveTab("culture")}
            className={`px-6 py-3 rounded-2xl font-bold text-xs sm:text-sm transition-all ${
              activeTab === "culture"
                ? "bg-[#0F2C59] text-amber-100 shadow-xl scale-105"
                : "bg-white text-stone-700 border border-stone-200 hover:bg-stone-50"
            }`}
          >
            🎭 Folk Dance, Music & Crafts
          </button>
        </div>
      </div>

      {/* 1. FOOD & CUISINE SECTION */}
      {activeTab === "food" && (
        <div className="space-y-10 animate-in fade-in duration-200">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {RAJASTHANI_DISHES.map((dish) => (
              <div
                key={dish.id}
                id={dish.id}
                className="bg-white rounded-3xl border border-[#E8DCCB] overflow-hidden shadow-sm hover:shadow-xl transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="relative h-56 overflow-hidden bg-stone-900">
                    <img
                      src={dish.image}
                      alt={dish.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-stone-900/80 text-amber-300 font-bold text-xs rounded-full backdrop-blur-sm">
                        {dish.category}
                      </span>
                    </div>
                    <div className="absolute top-4 right-4">
                      <span className="px-2.5 py-1 bg-amber-500 text-white font-bold text-xs rounded-full shadow flex items-center space-x-1">
                        <Flame className="w-3.5 h-3.5 fill-current" />
                        <span>{dish.spiceLevel}</span>
                      </span>
                    </div>
                    <div className="absolute bottom-4 left-4 text-white">
                      <span className="text-xs text-amber-300 font-semibold">{dish.regionalOrigin}</span>
                    </div>
                  </div>

                  <div className="p-5 space-y-3">
                    <h3 className="font-serif font-bold text-xl text-stone-900 group-hover:text-[#780016]">
                      {dish.name}
                    </h3>
                    <p className="text-xs text-stone-600 leading-relaxed">
                      {dish.description}
                    </p>

                    <div className="p-3 bg-amber-50/70 rounded-xl border border-amber-200/60 text-xs text-stone-700">
                      <strong className="text-[#780016] block mb-0.5">Historical Origin:</strong>
                      <p className="text-[11px] text-stone-600 line-clamp-3 leading-relaxed">
                        {dish.historicalBackstory}
                      </p>
                    </div>

                    <div className="text-xs space-y-1">
                      <span className="text-[10px] font-bold uppercase text-stone-400 block">Key Ingredients</span>
                      <div className="flex flex-wrap gap-1">
                        {dish.keyIngredients.map((ing, i) => (
                          <span key={i} className="px-2 py-0.5 bg-stone-100 text-stone-600 text-[10px] rounded">
                            {ing}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-5 pt-0 border-t border-stone-100 mt-2">
                  <div className="text-xs text-[#C85A32] font-semibold pt-2">
                    📍 Must Try At: <strong>{dish.mustTryAt.spot}</strong> ({dish.mustTryAt.city})
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 2. CULTURAL TRADITIONS SECTION */}
      {activeTab === "culture" && (
        <div className="space-y-10 animate-in fade-in duration-200">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {CULTURAL_TRADITIONS.map((tradition) => (
              <div
                key={tradition.id}
                className="bg-white rounded-3xl border border-[#E8DCCB] overflow-hidden shadow-sm hover:shadow-xl transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="relative h-64 overflow-hidden bg-stone-900">
                    <img
                      src={tradition.image}
                      alt={tradition.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-[#0F2C59] text-amber-200 font-bold text-xs rounded-full shadow">
                        {tradition.category}
                      </span>
                    </div>
                    <div className="absolute bottom-4 left-4 text-white">
                      <span className="text-xs text-amber-300 font-semibold">{tradition.origin}</span>
                    </div>
                  </div>

                  <div className="p-6 space-y-4">
                    <h3 className="font-serif font-bold text-2xl text-stone-900 group-hover:text-[#780016]">
                      {tradition.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
                      {tradition.description}
                    </p>

                    <div className="p-4 bg-stone-50 rounded-2xl border border-stone-200 text-xs">
                      <strong className="text-[#0F2C59] block mb-1">Cultural Significance:</strong>
                      <p className="text-stone-600 leading-relaxed">{tradition.culturalSignificance}</p>
                    </div>

                    <div className="text-xs space-y-1.5">
                      <span className="text-[10px] font-bold uppercase text-stone-400 block">
                        Instruments / Signature Materials
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {tradition.notableInstrumentsOrMaterials.map((mat, i) => (
                          <span
                            key={i}
                            className="px-2.5 py-1 bg-amber-50 text-[#780016] font-semibold text-[11px] rounded-lg border border-amber-200"
                          >
                            {mat}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
