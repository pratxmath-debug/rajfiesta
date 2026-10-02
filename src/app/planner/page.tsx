"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useApp, SavedTrip } from "@/context/AppContext";
import {
  Sparkles,
  Calendar,
  Wallet,
  Users,
  Compass,
  MapPin,
  Clock,
  ArrowRight,
  Printer,
  Share2,
  Check,
  CheckCircle2,
  Utensils,
  Car,
  Landmark,
  ShieldCheck,
  Info
} from "lucide-react";

interface Activity {
  time: string;
  title: string;
  category?: string;
  cost: number;
  notes: string;
}

interface DayPlan {
  day: number;
  city: string;
  date: string;
  routeLeg: string;
  transitHours: string;
  hotelRecommendation: string;
  activities: Activity[];
}

interface GeneratedPlan {
  title: string;
  startCity: string;
  days: number;
  travelStyle: string;
  companions: string;
  pace: string;
  totalDistanceKm: number;
  totalEstimatedBudget: number;
  budgetBreakdown: {
    accommodation: number;
    transportation: number;
    foodDining: number;
    monumentTickets: number;
    contingencyBuffer: number;
  };
  culturalTips: string[];
  itinerary: DayPlan[];
}

export default function PlannerPage() {
  const { saveTrip, addToast } = useApp();

  // User input states
  const [startCity, setStartCity] = useState("New Delhi");
  const [days, setDays] = useState(5);
  const [budget, setBudget] = useState(25000);
  const [travelStyle, setTravelStyle] = useState("Heritage");
  const [companions, setCompanions] = useState("Couple");
  const [pace, setPace] = useState("Balanced");
  const [isLoading, setIsLoading] = useState(false);
  const [generatedPlan, setGeneratedPlan] = useState<GeneratedPlan | null>(null);

  const travelStyles = [
    { id: "Heritage", label: "🏰 Forts & Heritage", desc: "Palaces, stepwells & ancient history" },
    { id: "Food", label: "🍛 Food & Flavors", desc: "Street sweets, thalis & royal feasts" },
    { id: "Hidden Gems", label: "💎 Secret Rajasthan", desc: "Ghost villages & offbeat baoris" },
    { id: "Photography", label: "📸 Photography", desc: "Golden hour viewpoints & color alleys" },
    { id: "Luxury", label: "👑 Royal Luxury", desc: "Heritage havelis & palace dining" },
    { id: "Budget", label: "🎒 Smart Backpacker", desc: "Boutique hostels & shared transit" }
  ];

  const companionOptions = ["Solo", "Couple", "Family", "Friends"];
  const paceOptions = ["Relaxed", "Balanced", "Fast-paced"];

  const handleGenerate = async () => {
    setIsLoading(true);
    try {
      const res = await fetch("/api/ai/planner", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          startCity,
          days,
          budget,
          travelStyle,
          companions,
          pace
        })
      });

      if (res.ok) {
        const data = await res.json();
        if (data.plan) {
          setGeneratedPlan(data.plan);
          addToast("AI Itinerary generated successfully! ✨", "royal");
          setIsLoading(false);
          return;
        }
      }
    } catch {
      // Local fallback logic
    }

    // High quality local generation fallback
    const accommodation = Math.round(budget * 0.42);
    const transportation = Math.round(budget * 0.28);
    const food = Math.round(budget * 0.18);
    const tickets = Math.round(budget * 0.07);
    const buffer = budget - (accommodation + transportation + food + tickets);

    const fallbackPlan: GeneratedPlan = {
      title: `${days}-Day Royal ${travelStyle} Circuit`,
      startCity,
      days,
      travelStyle,
      companions,
      pace,
      totalDistanceKm: days * 140,
      totalEstimatedBudget: budget,
      budgetBreakdown: {
        accommodation,
        transportation,
        foodDining: food,
        monumentTickets: tickets,
        contingencyBuffer: buffer
      },
      culturalTips: [
        "Dress respectfully when entering temples (shoulders and knees covered).",
        "Remove footwear before stepping onto temple marble sanctums.",
        "Carry a lightweight cotton stole/scarf for desert dust and direct sun.",
        "Bargain politely in traditional bazaars; start around 60-70% of quoted price."
      ],
      itinerary: [
        {
          day: 1,
          city: "Jaipur (The Pink City)",
          date: "Day 1",
          routeLeg: `Arrival from ${startCity} → Jaipur`,
          transitHours: "Arrival flight / train",
          hotelRecommendation: "Alsisar Haveli / Heritage Hotel",
          activities: [
            { time: "09:00 AM", title: "Amber Fort & Sheesh Mahal", cost: 100, notes: "Early morning to witness elephant paths and soft light on Maota lake." },
            { time: "01:30 PM", title: "Royal Lunch at LMB (Dal Baati Churma)", cost: 550, notes: "Authentic Marwari ghee indulgence." },
            { time: "04:00 PM", title: "Hawa Mahal & Rooftop Photography", cost: 50, notes: "Panoramic view from Wind View Cafe opposite." },
            { time: "07:00 PM", title: "Stroll through Johari & Bapu Bazaars", cost: 0, notes: "Blue pottery and lac bangles shopping." }
          ]
        },
        {
          day: 2,
          city: "Jaipur → Pushkar",
          date: "Day 2",
          routeLeg: "Jaipur → Pushkar Oasis",
          transitHours: "2.5 hrs scenic highway",
          hotelRecommendation: "Pushkar Desert Camp & Resort",
          activities: [
            { time: "08:30 AM", title: "City Palace & Jantar Mantar", cost: 300, notes: "Vidyadhar architectural wonders and world's largest sundial." },
            { time: "01:30 PM", title: "Drive through Nag Pahar Pass", cost: 400, notes: "Stop at Halwai Gali for hot saffron Malpua." },
            { time: "05:30 PM", title: "Sunset Maha Aarti on Pushkar Lake", cost: 0, notes: "52 holy bathing ghats with floating oil lamps." }
          ]
        },
        {
          day: 3,
          city: "Pushkar → Jodhpur (The Blue City)",
          date: "Day 3",
          routeLeg: "Pushkar → Jodhpur",
          transitHours: "3.5 hrs express road/train",
          hotelRecommendation: "Pal Haveli / Heritage Stay",
          activities: [
            { time: "07:30 AM", title: "Blessing at 14th-century Lord Brahma Temple", cost: 0, notes: "One of the rare sanctums in the world." },
            { time: "02:30 PM", title: "Mehrangarh Fort & Daulat Khana Museum", cost: 100, notes: "Towering 410 feet above the Blue City with royal palanquins." },
            { time: "06:30 PM", title: "Makhaniya Lassi at Clock Tower", cost: 80, notes: "Mishrilal's iconic cream-layered saffron lassi." }
          ]
        }
      ]
    };

    setGeneratedPlan(fallbackPlan);
    addToast("Personalized itinerary created! 🏰", "royal");
    setIsLoading(false);
  };

  const handleSaveToDashboard = () => {
    if (!generatedPlan) return;
    const tripToSave: SavedTrip = {
      id: "trip-" + Date.now(),
      title: generatedPlan.title,
      startCity: generatedPlan.startCity,
      days: generatedPlan.days,
      travelStyle: generatedPlan.travelStyle,
      totalBudget: generatedPlan.totalEstimatedBudget,
      companions: generatedPlan.companions,
      createdAt: new Date().toISOString().split("T")[0],
      itinerary: generatedPlan.itinerary.map((d) => ({
        day: d.day,
        city: d.city,
        activities: d.activities
      }))
    };
    saveTrip(tripToSave);
  };

  const handleShare = () => {
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      addToast("Itinerary link copied to clipboard! 🔗", "info");
    }
  };

  const handlePrint = () => {
    if (typeof window !== "undefined") {
      window.print();
    }
  };

  return (
    <div className="min-h-screen bg-[#FDFBF7] py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12">
      {/* 1. PLANNER HEADER */}
      <div className="text-center max-w-3xl mx-auto">
        <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-amber-100 text-[#780016] text-xs font-bold uppercase tracking-wider border border-amber-300 mb-3">
          <Sparkles className="w-3.5 h-3.5 text-[#C85A32]" />
          <span>Intelligent Travel Engine</span>
        </div>
        <h1 className="font-serif font-black text-3xl sm:text-5xl text-[#0F2C59]">
          AI Trip Planner
        </h1>
        <p className="mt-3 text-sm sm:text-base text-stone-600 leading-relaxed">
          Tell RajFiesta where you begin, your available days, and your travel style. Our AI calculates transit timings, ticket costs, authentic havelis, and culinary stops to create your dream itinerary.
        </p>
      </div>

      {/* 2. INPUT FORM CARD */}
      <div className="bg-white rounded-3xl border border-[#E8DCCB] shadow-xl p-6 sm:p-10 space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {/* Starting City */}
          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-wider text-stone-700 flex items-center space-x-1">
              <MapPin className="w-4 h-4 text-[#C85A32]" />
              <span>Where are you starting from?</span>
            </label>
            <select
              value={startCity}
              onChange={(e) => setStartCity(e.target.value)}
              className="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-2xl text-sm font-semibold text-stone-800 focus:outline-none focus:border-[#D4AF37]"
            >
              <option value="New Delhi">New Delhi (DEL)</option>
              <option value="Mumbai">Mumbai (BOM)</option>
              <option value="Jaipur">Jaipur (JAI)</option>
              <option value="Jodhpur">Jodhpur (JDH)</option>
              <option value="Udaipur">Udaipur (UDR)</option>
              <option value="Ahmedabad">Ahmedabad (AMD)</option>
              <option value="Bengaluru">Bengaluru (BLR)</option>
              <option value="International / Other">International / Other</option>
            </select>
          </div>

          {/* Number of Days */}
          <div className="space-y-2">
            <div className="flex items-center justify-between text-xs font-bold uppercase tracking-wider text-stone-700">
              <span className="flex items-center space-x-1">
                <Calendar className="w-4 h-4 text-[#780016]" />
                <span>How many days?</span>
              </span>
              <span className="text-[#780016] font-extrabold text-sm font-serif">{days} Days</span>
            </div>
            <input
              type="range"
              min="2"
              max="14"
              value={days}
              onChange={(e) => setDays(parseInt(e.target.value))}
              className="w-full accent-[#780016] h-2 bg-stone-200 rounded-lg cursor-pointer"
            />
            <div className="flex justify-between text-[11px] text-stone-400 font-medium">
              <span>2 Days (Weekend)</span>
              <span>7 Days (Golden Circuit)</span>
              <span>14 Days (Grand Odyssey)</span>
            </div>
          </div>

          {/* Estimated Budget */}
          <div className="space-y-2">
            <div className="flex items-center justify-between text-xs font-bold uppercase tracking-wider text-stone-700">
              <span className="flex items-center space-x-1">
                <Wallet className="w-4 h-4 text-emerald-700" />
                <span>Approximate Budget?</span>
              </span>
              <span className="text-emerald-800 font-extrabold text-sm font-serif">₹{budget.toLocaleString()}</span>
            </div>
            <input
              type="range"
              min="10000"
              max="150000"
              step="5000"
              value={budget}
              onChange={(e) => setBudget(parseInt(e.target.value))}
              className="w-full accent-emerald-700 h-2 bg-stone-200 rounded-lg cursor-pointer"
            />
            <div className="flex justify-between text-[11px] text-stone-400 font-medium">
              <span>₹10,000 (Budget)</span>
              <span>₹50,000 (Comfort)</span>
              <span>₹1,50,000+ (Royal)</span>
            </div>
          </div>
        </div>

        {/* Travel Style Selector */}
        <div className="space-y-3">
          <label className="text-xs font-bold uppercase tracking-wider text-stone-700 block">
            What is your preferred travel style?
          </label>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {travelStyles.map((style) => (
              <button
                key={style.id}
                type="button"
                onClick={() => setTravelStyle(style.id)}
                className={`p-3.5 rounded-2xl border text-left transition-all ${
                  travelStyle === style.id
                    ? "bg-[#0F2C59] text-white border-[#0F2C59] shadow-md scale-[1.02]"
                    : "bg-stone-50 hover:bg-stone-100 border-stone-200 text-stone-800"
                }`}
              >
                <div className="font-bold text-xs">{style.label}</div>
                <div className={`text-[10px] mt-1 line-clamp-1 ${travelStyle === style.id ? "text-amber-200" : "text-stone-400"}`}>
                  {style.desc}
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Companions & Pace */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
          {/* Companions */}
          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-wider text-stone-700 block">
              Who are you travelling with?
            </label>
            <div className="grid grid-cols-4 gap-2">
              {companionOptions.map((comp) => (
                <button
                  key={comp}
                  type="button"
                  onClick={() => setCompanions(comp)}
                  className={`py-2.5 text-xs font-bold rounded-xl border transition-all ${
                    companions === comp
                      ? "bg-[#780016] text-amber-100 border-[#780016] shadow"
                      : "bg-stone-50 text-stone-700 border-stone-200 hover:bg-stone-100"
                  }`}
                >
                  {comp}
                </button>
              ))}
            </div>
          </div>

          {/* Travel Pace */}
          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-wider text-stone-700 block">
              Travel Pace
            </label>
            <div className="grid grid-cols-3 gap-2">
              {paceOptions.map((p) => (
                <button
                  key={p}
                  type="button"
                  onClick={() => setPace(p)}
                  className={`py-2.5 text-xs font-bold rounded-xl border transition-all ${
                    pace === p
                      ? "bg-[#780016] text-amber-100 border-[#780016] shadow"
                      : "bg-stone-50 text-stone-700 border-stone-200 hover:bg-stone-100"
                  }`}
                >
                  {p}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Submit Action Button */}
        <div className="pt-4 border-t border-stone-100 flex justify-center">
          <button
            onClick={handleGenerate}
            disabled={isLoading}
            className="w-full sm:w-auto px-10 py-4 bg-gradient-to-r from-[#D4AF37] via-[#E5A93C] to-[#F59E0B] text-[#0F2C59] font-black text-base rounded-2xl shadow-xl hover:shadow-2xl hover:scale-105 active:scale-95 transition-all flex items-center justify-center space-x-2"
          >
            {isLoading ? (
              <>
                <Sparkles className="w-5 h-5 animate-spin" />
                <span>Architecting Royal Plan...</span>
              </>
            ) : (
              <>
                <Sparkles className="w-5 h-5 fill-current text-[#780016]" />
                <span>Generate Royal Itinerary ✨</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* 3. GENERATED ITINERARY DISPLAY */}
      {generatedPlan && (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
          {/* Plan Header Card */}
          <div className="bg-gradient-to-r from-[#0F2C59] via-[#1A365D] to-[#780016] text-amber-50 rounded-3xl p-6 sm:p-10 shadow-2xl border border-[#D4AF37]/50 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <div className="inline-flex items-center space-x-2 px-3 py-1 bg-amber-400/20 text-amber-200 text-xs font-bold rounded-full border border-amber-300/40 mb-2">
                <span>Personalized Royal Plan</span>
                <span>•</span>
                <span>{generatedPlan.companions} Trip</span>
              </div>
              <h2 className="font-serif font-black text-2xl sm:text-4xl text-amber-100">
                {generatedPlan.title}
              </h2>
              <p className="text-xs sm:text-sm text-amber-200/90 mt-1">
                Starting from <strong>{generatedPlan.startCity}</strong> • Total Estimated Route: <strong>~{generatedPlan.totalDistanceKm} km</strong>
              </p>
            </div>

            {/* Action Bar */}
            <div className="flex flex-wrap items-center gap-2.5">
              <button
                onClick={handleSaveToDashboard}
                className="px-4 py-2.5 bg-[#D4AF37] hover:bg-[#E5A93C] text-[#0F2C59] font-bold text-xs rounded-xl shadow transition-transform active:scale-95 flex items-center space-x-1.5"
              >
                <CheckCircle2 className="w-4 h-4" />
                <span>Save to My Trips</span>
              </button>
              <button
                onClick={handlePrint}
                className="p-2.5 bg-white/10 hover:bg-white/20 text-white rounded-xl transition-colors"
                title="Print Itinerary"
              >
                <Printer className="w-4 h-4" />
              </button>
              <button
                onClick={handleShare}
                className="p-2.5 bg-white/10 hover:bg-white/20 text-white rounded-xl transition-colors"
                title="Share Itinerary Link"
              >
                <Share2 className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Budget Breakdown Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-4">
            <div className="p-4 bg-white rounded-2xl border border-stone-200 shadow-sm text-xs">
              <span className="text-stone-400 block text-[10px] uppercase font-bold">Accommodation</span>
              <span className="font-serif font-bold text-lg text-stone-900 block mt-1">
                ₹{generatedPlan.budgetBreakdown.accommodation.toLocaleString()}
              </span>
              <span className="text-stone-500 text-[11px]">Haveli & Palace stays</span>
            </div>
            <div className="p-4 bg-white rounded-2xl border border-stone-200 shadow-sm text-xs">
              <span className="text-stone-400 block text-[10px] uppercase font-bold">Transportation</span>
              <span className="font-serif font-bold text-lg text-stone-900 block mt-1">
                ₹{generatedPlan.budgetBreakdown.transportation.toLocaleString()}
              </span>
              <span className="text-stone-500 text-[11px]">Train, Cab & transfers</span>
            </div>
            <div className="p-4 bg-white rounded-2xl border border-stone-200 shadow-sm text-xs">
              <span className="text-stone-400 block text-[10px] uppercase font-bold">Food & Feasts</span>
              <span className="font-serif font-bold text-lg text-stone-900 block mt-1">
                ₹{generatedPlan.budgetBreakdown.foodDining.toLocaleString()}
              </span>
              <span className="text-stone-500 text-[11px]">Thalis & street sweets</span>
            </div>
            <div className="p-4 bg-white rounded-2xl border border-stone-200 shadow-sm text-xs">
              <span className="text-stone-400 block text-[10px] uppercase font-bold">Monument Tickets</span>
              <span className="font-serif font-bold text-lg text-stone-900 block mt-1">
                ₹{generatedPlan.budgetBreakdown.monumentTickets.toLocaleString()}
              </span>
              <span className="text-stone-500 text-[11px]">Fort & museum entries</span>
            </div>
            <div className="p-4 bg-emerald-50 rounded-2xl border border-emerald-200 shadow-sm text-xs col-span-2 sm:col-span-1">
              <span className="text-emerald-800 block text-[10px] uppercase font-bold">Contingency Buffer</span>
              <span className="font-serif font-bold text-lg text-emerald-900 block mt-1">
                ₹{generatedPlan.budgetBreakdown.contingencyBuffer.toLocaleString()}
              </span>
              <span className="text-emerald-700 text-[11px]">Shopping & unexpected</span>
            </div>
          </div>

          {/* Day-by-Day Detailed Schedule */}
          <div className="space-y-6">
            <h3 className="font-serif font-bold text-2xl text-[#0F2C59]">
              Day-by-Day Schedule & Route Progression
            </h3>

            {generatedPlan.itinerary.map((day) => (
              <div
                key={day.day}
                className="bg-white rounded-3xl border border-[#E8DCCB] shadow-md overflow-hidden"
              >
                {/* Day Header */}
                <div className="p-5 bg-gradient-to-r from-stone-50 to-amber-50/50 border-b border-stone-100 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div className="flex items-center space-x-3">
                    <span className="w-10 h-10 rounded-2xl bg-[#780016] text-amber-100 font-serif font-bold text-base flex items-center justify-center shadow">
                      {day.day}
                    </span>
                    <div>
                      <h4 className="font-serif font-bold text-lg text-stone-900">{day.city}</h4>
                      <p className="text-xs text-[#C85A32] font-semibold">{day.routeLeg}</p>
                    </div>
                  </div>
                  <div className="text-xs text-stone-500 flex items-center space-x-4">
                    <span>🚗 Transit: <strong>{day.transitHours}</strong></span>
                    <span>🏨 Stay: <strong>{day.hotelRecommendation}</strong></span>
                  </div>
                </div>

                {/* Day Activities List */}
                <div className="p-6 divide-y divide-stone-100 space-y-4">
                  {day.activities.map((act, i) => (
                    <div key={i} className={`pt-4 first:pt-0 flex items-start space-x-4`}>
                      <span className="px-2.5 py-1 bg-stone-100 text-stone-700 font-bold text-xs rounded-lg whitespace-nowrap mt-0.5">
                        {act.time}
                      </span>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <h5 className="font-serif font-bold text-base text-stone-900">{act.title}</h5>
                          {act.cost > 0 && (
                            <span className="text-xs font-semibold text-stone-500">
                              ~₹{act.cost}
                            </span>
                          )}
                        </div>
                        <p className="text-xs text-stone-600 mt-1 leading-relaxed">{act.notes}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Cultural Etiquette & Tips */}
          <div className="p-6 sm:p-8 bg-amber-50/60 rounded-3xl border border-amber-200/80 space-y-3">
            <h4 className="font-serif font-bold text-lg text-[#780016] flex items-center space-x-2">
              <ShieldCheck className="w-5 h-5 text-[#C85A32]" />
              <span>Cultural Etiquette & Insider Travel Tips</span>
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-stone-700">
              {generatedPlan.culturalTips.map((tip, idx) => (
                <div key={idx} className="flex items-start space-x-2">
                  <span className="text-[#C85A32] font-bold">•</span>
                  <span>{tip}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
