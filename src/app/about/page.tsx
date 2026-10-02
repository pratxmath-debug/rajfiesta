import React from "react";
import Link from "next/link";
import { Crown, Sparkles, MapPin, Landmark, Heart, ShieldCheck, ArrowRight } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#FDFBF7] py-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto space-y-16">
      {/* Brand Vision */}
      <div className="text-center space-y-4">
        <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-amber-100 text-[#780016] text-xs font-bold uppercase tracking-wider border border-amber-300">
          <Crown className="w-3.5 h-3.5 text-[#C85A32]" />
          <span>The Vision Behind RajFiesta</span>
        </div>
        <h1 className="font-serif font-black text-3xl sm:text-5xl text-[#0F2C59]">
          Where Rajasthan Comes Alive
        </h1>
        <p className="font-serif italic text-lg text-[#C85A32]">
          &quot;Discover Rajasthan beyond the tourist brochure.&quot;
        </p>
        <p className="text-sm sm:text-base text-stone-600 max-w-2xl mx-auto leading-relaxed">
          RajFiesta turns Rajasthan&apos;s medieval history into an interactive journey. Combining a digital heritage museum, interactive spatial atlas, and an AI-powered trip architect, we empower travelers to experience living heritage, secret stepwells, and royal cuisines.
        </p>
      </div>

      {/* Core Differentiators Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-6 bg-white rounded-3xl border border-[#E8DCCB] shadow-sm space-y-3">
          <div className="w-12 h-12 rounded-2xl bg-rose-50 text-[#780016] flex items-center justify-center">
            <Landmark className="w-6 h-6" />
          </div>
          <h3 className="font-serif font-bold text-lg text-stone-900">Historical Storytelling</h3>
          <p className="text-xs text-stone-600 leading-relaxed">
            Not just &quot;Built in 1459&quot;, but an interactive narrative featuring verified chronologies, oral legends, and voice-narrated audio chronicles.
          </p>
        </div>

        <div className="p-6 bg-white rounded-3xl border border-[#E8DCCB] shadow-sm space-y-3">
          <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-800 flex items-center justify-center">
            <MapPin className="w-6 h-6" />
          </div>
          <h3 className="font-serif font-bold text-lg text-stone-900">Spatial Atlas & Hidden Gems</h3>
          <p className="text-xs text-stone-600 leading-relaxed">
            From the Thar dunes of Jaisalmer to the 3,500 geometric steps of Chand Baori. Unveil destinations tourists usually miss.
          </p>
        </div>

        <div className="p-6 bg-white rounded-3xl border border-[#E8DCCB] shadow-sm space-y-3">
          <div className="w-12 h-12 rounded-2xl bg-sky-50 text-[#0F2C59] flex items-center justify-center">
            <Sparkles className="w-6 h-6" />
          </div>
          <h3 className="font-serif font-bold text-lg text-stone-900">AI Trip Architect</h3>
          <p className="text-xs text-stone-600 leading-relaxed">
            &quot;I have ₹20,000, 5 days, starting from Delhi, and love forts.&quot; RajFiesta calculates transit timings, fees, and hour-by-hour schedules instantly.
          </p>
        </div>
      </div>

      {/* Heritage Mission Statement */}
      <div className="bg-gradient-to-r from-[#0F2C59] to-[#780016] text-amber-50 rounded-3xl p-8 sm:p-12 shadow-xl border border-[#D4AF37]/50 text-center space-y-4">
        <h2 className="font-serif font-bold text-2xl sm:text-3xl text-amber-100">
          Dedicated to Rajasthan&apos;s Living Artisans & Custodians
        </h2>
        <p className="text-xs sm:text-sm text-amber-200/90 max-w-xl mx-auto leading-relaxed">
          RajFiesta supports local desert musicians, puppeteers, block-printers, and heritage haveli preservationists by connecting travelers directly to authentic cultural roots.
        </p>
        <div className="pt-2">
          <Link
            href="/explore"
            className="inline-flex items-center space-x-2 px-6 py-3 bg-[#D4AF37] text-[#0F2C59] font-bold text-xs rounded-xl shadow hover:bg-[#E5A93C] transition-colors"
          >
            <span>Begin Exploring the Map</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
