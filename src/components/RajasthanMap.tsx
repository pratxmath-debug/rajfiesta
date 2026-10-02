"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { CITIES, DESTINATIONS, Destination, City } from "@/data/rajasthanData";
import { HOTELS, Hotel } from "@/data/travelHotelsData";
import { RAJASTHANI_DISHES, Dish } from "@/data/cuisineCultureData";
import { useApp } from "@/context/AppContext";
import {
  MapPin,
  Landmark,
  Crown,
  Sparkles,
  Search,
  ExternalLink,
  Heart,
  Check,
  Compass,
  Bed,
  UtensilsCrossed,
  Layers,
  ChevronRight,
  X,
  Clock,
  Ticket
} from "lucide-react";

type MapFilterCategory =
  | "all"
  | "cities"
  | "fort"
  | "palace"
  | "temple"
  | "stepwell"
  | "lake"
  | "hidden-gem"
  | "hotels"
  | "food";

interface MapPinItem {
  id: string;
  name: string;
  category: string;
  cityName: string;
  x: number;
  y: number;
  type: "destination" | "city" | "hotel" | "food";
  originalData: Destination | City | Hotel | Dish;
}

export const RajasthanMap: React.FC = () => {
  const { isPlaceSaved, toggleSavePlace } = useApp();
  const [activeCategory, setActiveCategory] = useState<MapFilterCategory>("all");
  const [selectedCityId, setSelectedCityId] = useState<string>("all");
  const [searchFilter, setSearchFilter] = useState<string>("");
  const [selectedItem, setSelectedItem] = useState<MapPinItem | null>(null);
  const [viewMode, setViewMode] = useState<"map" | "grid">("map");

  // Build unified pin items
  const pinItems: MapPinItem[] = useMemo(() => {
    const items: MapPinItem[] = [];

    // Cities
    CITIES.forEach((city) => {
      items.push({
        id: `city-${city.id}`,
        name: city.name,
        category: "cities",
        cityName: city.name,
        x: city.mapPosition.x,
        y: city.mapPosition.y,
        type: "city",
        originalData: city
      });
    });

    // Destinations
    DESTINATIONS.forEach((dest) => {
      // Offset slightly from city center if needed
      const offsetX = (Math.sin(dest.name.length) * 22);
      const offsetY = (Math.cos(dest.name.length) * 20);
      items.push({
        id: dest.id,
        name: dest.name,
        category: dest.isHiddenGem ? "hidden-gem" : dest.category,
        cityName: dest.cityName,
        x: dest.mapPosition.x + offsetX,
        y: dest.mapPosition.y + offsetY,
        type: "destination",
        originalData: dest
      });
    });

    // Hotels
    HOTELS.forEach((hotel, idx) => {
      const city = CITIES.find((c) => c.id === hotel.cityId);
      if (city) {
        items.push({
          id: hotel.id,
          name: hotel.name,
          category: "hotels",
          cityName: hotel.cityName,
          x: city.mapPosition.x - 25 + (idx % 3) * 16,
          y: city.mapPosition.y + 22 + (idx % 2) * 14,
          type: "hotel",
          originalData: hotel
        });
      }
    });

    // Foods
    RAJASTHANI_DISHES.forEach((dish, idx) => {
      const matchedCity = CITIES.find((c) => dish.mustTryAt.city.toLowerCase().includes(c.name.toLowerCase())) || CITIES[0];
      items.push({
        id: `food-${dish.id}`,
        name: dish.name,
        category: "food",
        cityName: matchedCity.name,
        x: matchedCity.mapPosition.x + 30 + (idx % 2) * 10,
        y: matchedCity.mapPosition.y - 20 - (idx % 3) * 8,
        type: "food",
        originalData: dish
      });
    });

    return items;
  }, []);

  // Filtered pins
  const filteredPins = useMemo(() => {
    return pinItems.filter((pin) => {
      // Category filter
      if (activeCategory === "all") {
        // Show cities and main destinations by default
        if (pin.type === "hotel" || pin.type === "food") return false;
      } else if (activeCategory === "cities") {
        if (pin.type !== "city") return false;
      } else if (activeCategory === "hotels") {
        if (pin.type !== "hotel") return false;
      } else if (activeCategory === "food") {
        if (pin.type !== "food") return false;
      } else if (activeCategory === "hidden-gem") {
        if (pin.type !== "destination") return false;
        const d = pin.originalData as Destination;
        if (!d.isHiddenGem) return false;
      } else {
        if (pin.category !== activeCategory) return false;
      }

      // City filter
      if (selectedCityId !== "all") {
        if (pin.type === "city") {
          const c = pin.originalData as City;
          if (c.id !== selectedCityId) return false;
        } else if (pin.type === "destination") {
          const d = pin.originalData as Destination;
          if (d.cityId !== selectedCityId) return false;
        } else if (pin.type === "hotel") {
          const h = pin.originalData as Hotel;
          if (h.cityId !== selectedCityId) return false;
        }
      }

      // Search filter
      if (searchFilter.trim()) {
        const query = searchFilter.toLowerCase();
        if (
          !pin.name.toLowerCase().includes(query) &&
          !pin.cityName.toLowerCase().includes(query)
        ) {
          return false;
        }
      }

      return true;
    });
  }, [pinItems, activeCategory, selectedCityId, searchFilter]);

  const categories: { id: MapFilterCategory; label: string; icon: React.ReactNode }[] = [
    { id: "all", label: "All Highlights", icon: <Layers className="w-3.5 h-3.5" /> },
    { id: "cities", label: "Major Cities", icon: <MapPin className="w-3.5 h-3.5" /> },
    { id: "fort", label: "Forts", icon: <Landmark className="w-3.5 h-3.5" /> },
    { id: "palace", label: "Palaces", icon: <Crown className="w-3.5 h-3.5" /> },
    { id: "temple", label: "Temples", icon: <Compass className="w-3.5 h-3.5" /> },
    { id: "stepwell", label: "Stepwells", icon: <Layers className="w-3.5 h-3.5" /> },
    { id: "hidden-gem", label: "Hidden Gems", icon: <Sparkles className="w-3.5 h-3.5" /> },
    { id: "hotels", label: "Hotels & Stays", icon: <Bed className="w-3.5 h-3.5" /> },
    { id: "food", label: "Royal Cuisine", icon: <UtensilsCrossed className="w-3.5 h-3.5" /> }
  ];

  const getPinColor = (pin: MapPinItem) => {
    if (pin.type === "city") return "#780016"; // Royal Crimson
    if (pin.category === "fort") return "#C85A32"; // Terracotta
    if (pin.category === "palace") return "#D4AF37"; // Desert Gold
    if (pin.category === "hidden-gem") return "#9333EA"; // Mystic Purple
    if (pin.category === "temple") return "#E65100"; // Saffron
    if (pin.type === "hotel") return "#0F2C59"; // Royal Blue
    if (pin.type === "food") return "#D97706"; // Amber
    return "#0F2C59";
  };

  return (
    <div className="w-full bg-[#FDFBF7] rounded-3xl border border-[#E8DCCB] shadow-xl overflow-hidden flex flex-col">
      {/* Top Header & Map Controls */}
      <div className="p-4 md:p-6 bg-gradient-to-r from-stone-900 via-[#0F2C59] to-[#780016] text-amber-50">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center space-x-2 text-xs uppercase tracking-widest text-[#E5A93C] font-semibold">
              <Compass className="w-4 h-4 text-[#D4AF37] animate-spin" style={{ animationDuration: "14s" }} />
              <span>Interactive Geographic Atlas</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-amber-100 mt-1">
              Explore the Realm of Rajasthan
            </h2>
            <p className="text-xs md:text-sm text-amber-200/80 mt-1">
              Click pins to reveal legends, architectural marvels, entry tickets, and heritage stays.
            </p>
          </div>

          {/* Quick Search & View Switcher */}
          <div className="flex items-center space-x-2.5">
            <div className="relative">
              <Search className="w-4 h-4 text-amber-300 absolute left-3 top-1/2 transform -translate-y-1/2" />
              <input
                type="text"
                placeholder="Filter map pins..."
                value={searchFilter}
                onChange={(e) => setSearchFilter(e.target.value)}
                className="pl-9 pr-3 py-1.5 text-xs bg-white/10 hover:bg-white/15 focus:bg-white/20 text-white placeholder:text-amber-200/60 rounded-xl border border-white/20 focus:outline-none w-40 sm:w-52 transition-colors"
              />
            </div>
            <div className="bg-white/10 p-1 rounded-xl flex items-center border border-white/15">
              <button
                onClick={() => setViewMode("map")}
                className={`text-xs px-3 py-1 rounded-lg font-medium transition-colors ${
                  viewMode === "map" ? "bg-[#D4AF37] text-[#0F2C59] font-bold" : "text-amber-100 hover:text-white"
                }`}
              >
                Map
              </button>
              <button
                onClick={() => setViewMode("grid")}
                className={`text-xs px-3 py-1 rounded-lg font-medium transition-colors ${
                  viewMode === "grid" ? "bg-[#D4AF37] text-[#0F2C59] font-bold" : "text-amber-100 hover:text-white"
                }`}
              >
                List ({filteredPins.length})
              </button>
            </div>
          </div>
        </div>

        {/* Category Filters Bar */}
        <div className="flex items-center space-x-2 overflow-x-auto pt-4 pb-1 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-all duration-200 border ${
                activeCategory === cat.id
                  ? "bg-[#D4AF37] text-[#0F2C59] border-[#D4AF37] font-bold shadow-md transform scale-105"
                  : "bg-white/5 text-amber-100/90 border-white/15 hover:bg-white/15"
              }`}
            >
              {cat.icon}
              <span>{cat.label}</span>
            </button>
          ))}
        </div>

        {/* City Filter Chips */}
        <div className="flex items-center space-x-1.5 overflow-x-auto pt-2 pb-1 text-xs">
          <span className="text-amber-300 font-semibold mr-1 flex-shrink-0">Filter by City:</span>
          <button
            onClick={() => setSelectedCityId("all")}
            className={`px-2.5 py-0.5 rounded-md transition-colors ${
              selectedCityId === "all" ? "bg-amber-400/30 text-amber-200 font-bold" : "text-stone-300 hover:text-white"
            }`}
          >
            All Cities
          </button>
          {CITIES.map((c) => (
            <button
              key={c.id}
              onClick={() => setSelectedCityId(c.id)}
              className={`px-2.5 py-0.5 rounded-md whitespace-nowrap transition-colors ${
                selectedCityId === c.id
                  ? "bg-amber-400/30 text-amber-200 font-bold"
                  : "text-stone-300 hover:text-white"
              }`}
            >
              {c.name}
            </button>
          ))}
        </div>
      </div>

      {/* Main Map Viewport & Drawer Container */}
      <div className="relative w-full min-h-[580px] md:min-h-[660px] bg-[#F7F2EA] flex flex-col md:flex-row overflow-hidden">
        {viewMode === "map" ? (
          <div className="relative flex-1 h-[560px] md:h-[680px] overflow-hidden select-none bg-stone-100">
            {/* SVG Interactive Map of Rajasthan */}
            <svg
              viewBox="0 0 1000 850"
              className="w-full h-full object-contain filter drop-shadow-md"
              style={{ background: "radial-gradient(circle at 45% 55%, #FAF5EE 0%, #EFE5D7 100%)" }}
            >
              {/* Decorative Compass Rose & Scale */}
              <g transform="translate(80, 100)" opacity="0.6">
                <circle cx="0" cy="0" r="34" fill="none" stroke="#D4AF37" strokeWidth="1.5" strokeDasharray="3,3" />
                <path d="M0 -34 L7 -8 L34 0 L8 7 L0 34 L-7 8 L-34 0 L-8 -7 Z" fill="#0F2C59" />
                <path d="M0 -34 L7 -8 L0 0 Z" fill="#D4AF37" />
                <path d="M34 0 L8 7 L0 0 Z" fill="#D4AF37" />
                <path d="M0 34 L-7 8 L0 0 Z" fill="#D4AF37" />
                <path d="M-34 0 L-8 -7 L0 0 Z" fill="#D4AF37" />
                <text x="-4" y="-38" fontSize="12" fontWeight="bold" fill="#780016">N</text>
              </g>

              {/* Desert Dune Waves Illustration (West) */}
              <g opacity="0.25" stroke="#C85A32" strokeWidth="1.5" fill="none">
                <path d="M 80 350 Q 140 330 200 360 T 320 370" />
                <path d="M 60 410 Q 130 390 190 420 T 300 430" />
                <path d="M 90 470 Q 150 450 210 480 T 290 490" />
                <text x="120" y="380" fontSize="14" fill="#B45309" fontWeight="600" opacity="0.5" transform="rotate(-15 120 380)">
                  THAR DESERT
                </text>
              </g>

              {/* Aravalli Range Mountain Shading (Southwest to Northeast) */}
              <g opacity="0.35" stroke="#780016" strokeWidth="2" fill="none">
                <path d="M 280 720 Q 360 620 460 520 T 630 360 T 730 290" strokeDasharray="6,4" />
                <text x="500" y="490" fontSize="13" fill="#780016" fontWeight="bold" opacity="0.6" transform="rotate(-35 500 490)">
                  ARAVALLI RANGE
                </text>
              </g>

              {/* Detailed Rajasthan State Boundary Silhouette Path */}
              <path
                d="M 430 110 
                   C 500 130, 560 170, 640 190 
                   C 680 200, 740 230, 770 280 
                   C 810 320, 840 370, 830 420 
                   C 820 460, 780 490, 770 540 
                   C 760 590, 720 620, 700 660 
                   C 670 700, 630 730, 580 720 
                   C 530 710, 500 750, 450 780 
                   C 380 810, 310 790, 270 750 
                   C 230 700, 260 630, 240 580 
                   C 220 540, 160 510, 120 470 
                   C 70 420, 90 350, 140 300 
                   C 190 250, 280 230, 340 180 
                   Z"
                fill="#FFF9EE"
                stroke="#D4AF37"
                strokeWidth="3.5"
                strokeLinejoin="round"
                className="transition-colors hover:fill-[#FFFDF8]"
              />

              {/* Regional Connective Golden Trails */}
              <g stroke="#D4AF37" strokeWidth="1.5" strokeDasharray="4,4" opacity="0.45">
                {/* Delhi / Jaipur to Ajmer / Pushkar */}
                <line x1="670" y1="390" x2="570" y2="450" />
                {/* Ajmer to Jodhpur */}
                <line x1="570" y1="450" x2="380" y2="460" />
                {/* Jodhpur to Jaisalmer */}
                <line x1="380" y1="460" x2="170" y2="440" />
                {/* Jodhpur to Udaipur */}
                <line x1="380" y1="460" x2="420" y2="670" />
                {/* Udaipur to Chittorgarh */}
                <line x1="420" y1="670" x2="530" y2="640" />
                {/* Chittorgarh to Bundi/Kota */}
                <line x1="530" y1="640" x2="670" y2="550" />
                {/* Jaipur to Bundi */}
                <line x1="670" y1="390" x2="670" y2="550" />
                {/* Bikaner to Jodhpur */}
                <line x1="420" y1="260" x2="380" y2="460" />
              </g>

              {/* Interactive Pins */}
              {filteredPins.map((pin) => {
                const isSelected = selectedItem?.id === pin.id;
                const pinColor = getPinColor(pin);
                const isCity = pin.type === "city";

                return (
                  <g
                    key={pin.id}
                    transform={`translate(${pin.x}, ${pin.y})`}
                    className="cursor-pointer transition-transform duration-300"
                    onClick={() => setSelectedItem(pin)}
                  >
                    {/* Pulsing ring for selected pin */}
                    {isSelected && (
                      <circle
                        cx="0"
                        cy="0"
                        r={isCity ? 26 : 20}
                        fill={pinColor}
                        opacity="0.25"
                        className="animate-ping"
                      />
                    )}

                    {isCity ? (
                      /* City Major Marker */
                      <g>
                        <circle cx="0" cy="0" r="16" fill="#FFFFFF" stroke={pinColor} strokeWidth="3" />
                        <circle cx="0" cy="0" r="9" fill={pinColor} />
                        <text
                          x="0"
                          y="28"
                          textAnchor="middle"
                          fontSize="13"
                          fontWeight="bold"
                          fill="#2C221E"
                          className="drop-shadow-sm select-none"
                        >
                          {pin.name}
                        </text>
                      </g>
                    ) : (
                      /* Destination / Landmark Marker */
                      <g className="hover:scale-125 transition-transform">
                        {/* Map pin teardrop shape */}
                        <path
                          d="M 0 0 C -7 -12, -10 -16, -10 -22 C -10 -28, -5 -33, 0 -33 C 5 -33, 10 -28, 10 -22 C 10 -16, 7 -12, 0 0 Z"
                          fill={pinColor}
                          stroke="#FFFFFF"
                          strokeWidth="2"
                        />
                        <circle cx="0" cy="-22" r="4.5" fill="#FFFFFF" />
                      </g>
                    )}
                  </g>
                );
              })}
            </svg>

            {/* Quick Map Legend in Corner */}
            <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-md p-3 rounded-2xl border border-stone-200/80 shadow-md text-xs space-y-1.5 hidden sm:block">
              <div className="font-semibold text-stone-800 mb-1">Map Legend</div>
              <div className="flex items-center space-x-2">
                <span className="w-3 h-3 rounded-full bg-[#780016] inline-block" />
                <span className="text-stone-600">Royal City Hub</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="w-3 h-3 rounded-full bg-[#C85A32] inline-block" />
                <span className="text-stone-600">Hill Fort & Citadel</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="w-3 h-3 rounded-full bg-[#D4AF37] inline-block" />
                <span className="text-stone-600">Palace & Havelis</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="w-3 h-3 rounded-full bg-[#9333EA] inline-block" />
                <span className="text-stone-600">Hidden Offbeat Gem</span>
              </div>
            </div>
          </div>
        ) : (
          /* Grid / List Mode */
          <div className="flex-1 p-4 md:p-6 overflow-y-auto max-h-[660px]">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredPins.map((pin) => {
                const dest = pin.type === "destination" ? (pin.originalData as Destination) : null;
                const city = pin.type === "city" ? (pin.originalData as City) : null;
                const hotel = pin.type === "hotel" ? (pin.originalData as Hotel) : null;
                const dish = pin.type === "food" ? (pin.originalData as Dish) : null;

                const image = dest?.image || city?.image || hotel?.image || dish?.image || "";

                return (
                  <div
                    key={pin.id}
                    onClick={() => setSelectedItem(pin)}
                    className="bg-white rounded-2xl border border-[#E8DCCB] overflow-hidden hover:shadow-lg transition-all cursor-pointer group flex flex-col justify-between"
                  >
                    <div>
                      <div className="relative h-40 overflow-hidden bg-stone-200">
                        <img
                          src={image}
                          alt={pin.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <span className="absolute top-3 left-3 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-stone-900/80 text-amber-300 backdrop-blur-sm capitalize">
                          {pin.category}
                        </span>
                      </div>
                      <div className="p-4">
                        <div className="text-xs text-[#C85A32] font-semibold flex items-center">
                          <MapPin className="w-3 h-3 mr-1" /> {pin.cityName}
                        </div>
                        <h4 className="font-serif font-bold text-stone-900 text-base mt-1 group-hover:text-[#780016]">
                          {pin.name}
                        </h4>
                        <p className="text-xs text-stone-600 line-clamp-2 mt-1.5">
                          {dest?.description || city?.description || hotel?.description || dish?.description}
                        </p>
                      </div>
                    </div>
                    <div className="px-4 pb-4 pt-1 flex items-center justify-between border-t border-stone-100">
                      <span className="text-xs font-medium text-[#0F2C59]">View Details</span>
                      <ChevronRight className="w-4 h-4 text-[#780016] group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Selected Location Detail Slide-Out / Drawer */}
        {selectedItem && (
          <div className="w-full md:w-96 bg-white border-t md:border-t-0 md:border-l border-[#E8DCCB] shadow-2xl flex flex-col justify-between z-20 animate-in slide-in-from-right duration-300">
            <div>
              {/* Image & Header */}
              <div className="relative h-48 bg-stone-900">
                {(() => {
                  const img =
                    (selectedItem.originalData as Destination).image ||
                    (selectedItem.originalData as City).image ||
                    (selectedItem.originalData as Hotel).image ||
                    (selectedItem.originalData as Dish).image;
                  return (
                    <img
                      src={img}
                      alt={selectedItem.name}
                      className="w-full h-full object-cover opacity-90"
                    />
                  );
                })()}
                <button
                  onClick={() => setSelectedItem(null)}
                  className="absolute top-3 right-3 p-1.5 bg-black/60 hover:bg-black/80 text-white rounded-full transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white text-xs">
                  <span className="px-2.5 py-1 bg-[#780016]/90 rounded-md font-semibold capitalize backdrop-blur-sm">
                    {selectedItem.category}
                  </span>
                  <span className="px-2 py-0.5 bg-black/50 rounded-md backdrop-blur-sm">
                    📍 {selectedItem.cityName}
                  </span>
                </div>
              </div>

              {/* Body Content */}
              <div className="p-5 space-y-4 max-h-[380px] overflow-y-auto">
                <div>
                  <h3 className="font-serif font-bold text-xl text-stone-900">{selectedItem.name}</h3>
                  {selectedItem.type === "city" && (
                    <p className="text-xs text-[#C85A32] font-semibold mt-0.5">
                      {(selectedItem.originalData as City).nickname} — {(selectedItem.originalData as City).tagline}
                    </p>
                  )}
                  {selectedItem.type === "destination" && (
                    <div className="flex items-center space-x-2 mt-1">
                      <div className="flex items-center text-amber-500 text-xs font-bold">
                        ★ {(selectedItem.originalData as Destination).rating}
                      </div>
                      <span className="text-stone-300">•</span>
                      <span className="text-xs text-stone-500">
                        {(selectedItem.originalData as Destination).reviewsCount} reviews
                      </span>
                    </div>
                  )}
                </div>

                {/* Description */}
                <p className="text-xs leading-relaxed text-stone-700">
                  {(selectedItem.originalData as Destination).description ||
                    (selectedItem.originalData as City).description ||
                    (selectedItem.originalData as Hotel).description ||
                    (selectedItem.originalData as Dish).description}
                </p>

                {/* Destination Extra Meta */}
                {selectedItem.type === "destination" && (
                  <div className="grid grid-cols-2 gap-2 p-3 bg-amber-50/60 rounded-xl border border-amber-200/60 text-xs">
                    <div>
                      <span className="text-stone-400 block text-[10px] uppercase font-semibold flex items-center">
                        <Clock className="w-3 h-3 mr-1 text-[#C85A32]" /> Timings
                      </span>
                      <span className="font-semibold text-stone-800">
                        {(selectedItem.originalData as Destination).openingTime} - {(selectedItem.originalData as Destination).closingTime}
                      </span>
                    </div>
                    <div>
                      <span className="text-stone-400 block text-[10px] uppercase font-semibold flex items-center">
                        <Ticket className="w-3 h-3 mr-1 text-[#C85A32]" /> Entry Ticket
                      </span>
                      <span className="font-semibold text-stone-800">
                        {(selectedItem.originalData as Destination).entryFee.indian === 0
                          ? "Free Entry"
                          : `₹${(selectedItem.originalData as Destination).entryFee.indian} (Indian) / ₹${(selectedItem.originalData as Destination).entryFee.foreigner} (Foreign)`}
                      </span>
                    </div>
                  </div>
                )}

                {/* Hotel Extra Meta */}
                {selectedItem.type === "hotel" && (
                  <div className="p-3 bg-amber-50/60 rounded-xl border border-amber-200/60 text-xs flex items-center justify-between">
                    <div>
                      <span className="text-stone-400 block text-[10px] uppercase font-semibold">Starting From</span>
                      <span className="font-serif font-bold text-base text-[#780016]">
                        ₹{(selectedItem.originalData as Hotel).pricePerNight.toLocaleString()}{" "}
                        <span className="text-xs font-sans text-stone-500 font-normal">/ night</span>
                      </span>
                    </div>
                    <span className="text-xs font-semibold px-2.5 py-1 bg-emerald-100 text-emerald-800 rounded-md">
                      ★ {(selectedItem.originalData as Hotel).rating}
                    </span>
                  </div>
                )}
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="p-4 border-t border-stone-200 bg-stone-50/80 flex flex-col space-y-2">
              <div className="flex items-center space-x-2">
                {selectedItem.type === "destination" && (
                  <Link
                    href={`/destinations/${(selectedItem.originalData as Destination).slug}`}
                    className="flex-1 py-2.5 bg-gradient-to-r from-[#0F2C59] to-[#780016] text-amber-100 text-xs font-bold rounded-xl text-center shadow-md hover:opacity-95 transition-opacity"
                  >
                    Read History & Stories →
                  </Link>
                )}

                {selectedItem.type === "city" && (
                  <Link
                    href={`/cities/${(selectedItem.originalData as City).slug}`}
                    className="flex-1 py-2.5 bg-gradient-to-r from-[#0F2C59] to-[#780016] text-amber-100 text-xs font-bold rounded-xl text-center shadow-md hover:opacity-95 transition-opacity"
                  >
                    Explore City Guide →
                  </Link>
                )}

                {selectedItem.type === "hotel" && (
                  <Link
                    href="/hotels"
                    className="flex-1 py-2.5 bg-[#0F2C59] text-amber-100 text-xs font-bold rounded-xl text-center shadow-md hover:bg-[#1A365D] transition-colors"
                  >
                    View Hotel & Book →
                  </Link>
                )}

                {selectedItem.type === "food" && (
                  <Link
                    href="/food-culture"
                    className="flex-1 py-2.5 bg-[#C85A32] text-white text-xs font-bold rounded-xl text-center shadow-md hover:bg-[#B45309] transition-colors"
                  >
                    Explore Cuisine & Spots →
                  </Link>
                )}

                {/* Wishlist toggle button */}
                <button
                  onClick={() => toggleSavePlace(selectedItem.id, selectedItem.name)}
                  className={`p-2.5 rounded-xl border transition-colors ${
                    isPlaceSaved(selectedItem.id)
                      ? "bg-rose-50 text-rose-600 border-rose-300"
                      : "bg-white text-stone-600 border-stone-300 hover:text-stone-900"
                  }`}
                  title={isPlaceSaved(selectedItem.id) ? "Saved in Wishlist" : "Save to Trip"}
                >
                  <Heart className={`w-4 h-4 ${isPlaceSaved(selectedItem.id) ? "fill-current" : ""}`} />
                </button>
              </div>

              {/* Directions External Link */}
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                  `${selectedItem.name} ${selectedItem.cityName} Rajasthan`
                )}`}
                target="_blank"
                rel="noreferrer"
                className="text-[11px] text-stone-500 hover:text-[#780016] text-center flex items-center justify-center space-x-1"
              >
                <span>Get Directions via Google Maps</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
