"use client";

import React, { useState } from "react";
import { FESTIVALS, Festival } from "@/data/festivalsData";
import { useApp } from "@/context/AppContext";
import {
  Calendar,
  MapPin,
  Sparkles,
  ArrowRight,
  Clock,
  Compass,
  CheckCircle2,
  Info
} from "lucide-react";

export default function FestivalsPage() {
  const { addToast } = useApp();
  const [selectedFestival, setSelectedFestival] = useState<Festival | null>(null);

  return (
    <div className="min-h-screen bg-[#FDFBF7] py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto">
        <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-rose-100 text-[#780016] text-xs font-bold uppercase tracking-wider border border-rose-300 mb-3">
          <Calendar className="w-3.5 h-3.5 text-[#780016]" />
          <span>Annual Celebration Calendar</span>
        </div>
        <h1 className="font-serif font-black text-3xl sm:text-5xl text-[#0F2C59]">
          Festivals & Fairs of Rajasthan
        </h1>
        <p className="mt-3 text-sm sm:text-base text-stone-600 leading-relaxed">
          From the sacred full-moon camel gatherings of Pushkar to the golden desert turban pageants of Jaisalmer and the intellectual gatherings of the Jaipur Literature Festival.
        </p>
      </div>

      {/* Festivals Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {FESTIVALS.map((fest) => (
          <div
            key={fest.id}
            id={fest.id}
            className="bg-white rounded-3xl border border-[#E8DCCB] overflow-hidden shadow-md hover:shadow-xl transition-all flex flex-col justify-between group"
          >
            <div>
              {/* Image */}
              <div className="relative h-64 overflow-hidden bg-stone-900">
                <img
                  src={fest.image}
                  alt={fest.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-amber-400 text-[#0F2C59] font-bold text-xs rounded-full shadow">
                    {fest.monthSeason}
                  </span>
                </div>
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="text-xs text-amber-300 font-semibold flex items-center">
                    <MapPin className="w-3.5 h-3.5 mr-1" /> {fest.location}
                  </span>
                  <h3 className="font-serif font-bold text-2xl text-amber-50 mt-0.5">{fest.name}</h3>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <div className="p-3 bg-amber-50/70 rounded-xl border border-amber-200/60 text-xs flex items-center justify-between">
                  <span className="text-stone-500 font-medium">Next Confirmed Dates:</span>
                  <strong className="text-[#780016] font-bold">{fest.nextDates}</strong>
                </div>

                <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
                  {fest.about}
                </p>

                {/* History */}
                <div className="p-3.5 bg-stone-50 rounded-2xl border border-stone-200 text-xs">
                  <strong className="text-[#0F2C59] block mb-1">Historical Significance:</strong>
                  <p className="text-stone-600 leading-relaxed">{fest.history}</p>
                </div>

                {/* What to Expect */}
                <div className="space-y-1.5 text-xs">
                  <strong className="text-stone-800 block">What to Expect:</strong>
                  {fest.whatToExpect.map((exp, i) => (
                    <div key={i} className="flex items-start space-x-2 text-stone-600">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span>{exp}</span>
                    </div>
                  ))}
                </div>

                {/* Insider Tip */}
                <div className="p-3 bg-rose-50 rounded-xl border border-rose-200 text-xs text-rose-900">
                  <strong>Insider Tip:</strong> {fest.insiderTip}
                </div>
              </div>
            </div>

            {/* Bottom Button */}
            <div className="p-6 pt-0">
              <button
                onClick={() => {
                  setSelectedFestival(fest);
                  addToast(`Reminder set for ${fest.name}! 📅`, "royal");
                }}
                className="w-full py-3 bg-[#0F2C59] hover:bg-[#1A365D] text-amber-100 font-bold text-xs rounded-xl shadow transition-colors flex items-center justify-center space-x-2"
              >
                <span>Save to Festival Calendar</span>
                <Calendar className="w-4 h-4 text-[#D4AF37]" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
