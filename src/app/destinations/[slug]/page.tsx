import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { DESTINATIONS, CITIES } from "@/data/rajasthanData";
import { HISTORICAL_STORIES } from "@/data/storiesData";
import { AudioStoryPlayer } from "@/components/AudioStoryPlayer";
import {
  MapPin,
  Clock,
  Ticket,
  Camera,
  Star,
  ShieldCheck,
  Calendar,
  Compass,
  ArrowRight,
  Heart,
  Landmark,
  Crown,
  Sparkles,
  Info
} from "lucide-react";

export function generateStaticParams() {
  return DESTINATIONS.map((d) => ({ slug: d.slug }));
}

export default async function DestinationDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const destination = DESTINATIONS.find((d) => d.slug === slug);

  if (!destination) {
    notFound();
  }

  const city = CITIES.find((c) => c.id === destination.cityId);
  const story = HISTORICAL_STORIES.find((s) => s.destinationId === destination.id);
  const relatedDestinations = DESTINATIONS.filter(
    (d) => d.cityId === destination.cityId && d.id !== destination.id
  ).slice(0, 3);

  return (
    <div className="min-h-screen bg-[#FDFBF7] pb-24">
      {/* 1. HERO BANNER */}
      <section className="relative h-[65vh] min-h-[440px] flex items-end justify-start bg-stone-900 overflow-hidden">
        <img
          src={destination.image}
          alt={destination.name}
          className="absolute inset-0 w-full h-full object-cover opacity-80 transform hover:scale-105 transition-transform duration-1000"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1A1412] via-[#0F2C59]/40 to-black/30" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 w-full text-white">
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span className="px-3 py-1 bg-amber-400 text-[#0F2C59] font-bold text-xs uppercase tracking-widest rounded-full">
              {destination.category}
            </span>
            {destination.isHiddenGem && (
              <span className="px-3 py-1 bg-purple-700 text-white font-bold text-xs uppercase tracking-widest rounded-full">
                Hidden Gem
              </span>
            )}
            <span className="px-3 py-1 bg-black/50 backdrop-blur-md text-amber-200 text-xs rounded-full flex items-center space-x-1">
              <MapPin className="w-3 h-3" />
              <span>{destination.cityName}</span>
            </span>
          </div>

          <h1 className="font-serif font-black text-3xl sm:text-5xl md:text-6xl text-amber-50 drop-shadow-lg">
            {destination.name}
          </h1>

          <div className="flex flex-wrap items-center gap-4 mt-4 text-xs sm:text-sm text-amber-200/90">
            <div className="flex items-center text-amber-400 font-bold">
              <Star className="w-4 h-4 fill-current mr-1" />
              <span>{destination.rating} / 5.0</span>
              <span className="text-stone-300 ml-1.5 font-normal">({destination.reviewsCount} reviews)</span>
            </div>
            <span>•</span>
            <span>📍 {city?.district} District, Rajasthan</span>
          </div>
        </div>
      </section>

      {/* 2. AUDIO STORYTELLER BANNER */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-20">
        <AudioStoryPlayer
          title={`Chronicle of ${destination.name}`}
          storyScript={
            story?.audioNarrationText ||
            `${destination.name} is situated in ${destination.cityName}, Rajasthan. ${destination.description} ${destination.history}`
          }
        />
      </div>

      {/* 3. MAIN CONTENT GRID */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* Left 8 Cols: Overview, Architecture, Legends, Timeline */}
        <div className="lg:col-span-8 space-y-10">
          {/* Overview */}
          <div className="bg-white rounded-3xl border border-[#E8DCCB] p-6 sm:p-8 shadow-sm space-y-4">
            <h2 className="font-serif font-bold text-2xl text-[#0F2C59]">Historical Overview</h2>
            <p className="text-sm sm:text-base text-stone-700 leading-relaxed">
              {destination.description}
            </p>
            <div className="p-4 bg-amber-50/70 rounded-2xl border border-amber-200/60 text-xs sm:text-sm text-stone-700 leading-relaxed">
              {destination.history}
            </div>
          </div>

          {/* Architecture & Engineering */}
          <div className="bg-white rounded-3xl border border-[#E8DCCB] p-6 sm:p-8 shadow-sm space-y-4">
            <div className="flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-[#C85A32]">
              <Crown className="w-4 h-4" />
              <span>Rajput-Mughal Masterpiece</span>
            </div>
            <h2 className="font-serif font-bold text-2xl text-[#0F2C59]">Architectural Wonders</h2>
            <p className="text-sm text-stone-700 leading-relaxed">
              {destination.architecture}
            </p>

            {story?.architecturalHighlights && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                {story.architecturalHighlights.map((arch, idx) => (
                  <div key={idx} className="p-4 bg-stone-50 rounded-2xl border border-stone-200">
                    <h4 className="font-serif font-bold text-sm text-[#780016]">{arch.title}</h4>
                    <p className="text-xs text-stone-600 mt-1">{arch.description}</p>
                    <p className="text-[11px] text-stone-400 mt-1 italic">{arch.detail}</p>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Legends & Folklore */}
          {destination.legends && (
            <div className="bg-gradient-to-br from-[#FAF5EE] to-[#FDFBF7] rounded-3xl border border-amber-200 p-6 sm:p-8 shadow-sm space-y-3">
              <div className="flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-[#780016]">
                <Sparkles className="w-4 h-4 text-[#D4AF37]" />
                <span>Desert Folklore & Oral Traditions</span>
              </div>
              <h2 className="font-serif font-bold text-2xl text-[#0F2C59]">The Legends of {destination.name}</h2>
              <p className="text-sm text-stone-700 leading-relaxed italic">
                &quot;{destination.legends}&quot;
              </p>

              {story?.legends && (
                <div className="space-y-3 pt-3">
                  {story.legends.map((leg, i) => (
                    <div key={i} className="p-4 bg-white rounded-2xl border border-amber-200/80">
                      <h4 className="font-serif font-bold text-sm text-[#780016]">{leg.title}</h4>
                      <p className="text-xs text-stone-600 mt-1">{leg.tale}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Interactive Timeline */}
          {story?.timeline && (
            <div className="bg-white rounded-3xl border border-[#E8DCCB] p-6 sm:p-8 shadow-sm space-y-6">
              <h2 className="font-serif font-bold text-2xl text-[#0F2C59]">Chronological Timeline</h2>
              <div className="relative border-l-2 border-[#D4AF37]/50 ml-4 space-y-8 pl-6">
                {story.timeline.map((node, idx) => (
                  <div key={idx} className="relative group">
                    <div className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-[#780016] border-2 border-white shadow" />
                    <span className="font-serif font-bold text-sm text-[#780016]">{node.year}</span>
                    <span className="text-xs text-stone-400 ml-2">({node.era})</span>
                    <h4 className="font-serif font-bold text-base text-stone-900 mt-0.5">{node.title}</h4>
                    <p className="text-xs text-stone-600 mt-1 leading-relaxed">{node.description}</p>
                    <div className="mt-1 text-[11px] text-[#C85A32] font-semibold">
                      Key Figure: {node.keyFigure}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Right 4 Cols: Practical Guide & Booking / Plan Widget */}
        <div className="lg:col-span-4 space-y-6">
          {/* Practical Visitor Guide */}
          <div className="bg-white rounded-3xl border border-[#E8DCCB] p-6 shadow-md space-y-5">
            <h3 className="font-serif font-bold text-xl text-[#0F2C59] border-b border-stone-100 pb-3">
              Visitor Information
            </h3>

            <div className="space-y-4 text-xs">
              <div className="flex items-start space-x-3">
                <Clock className="w-4 h-4 text-[#C85A32] mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-bold text-stone-800 block">Timings</span>
                  <span className="text-stone-600">{destination.openingTime} – {destination.closingTime}</span>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Ticket className="w-4 h-4 text-[#780016] mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-bold text-stone-800 block">Entry Ticket</span>
                  <span className="text-stone-600">
                    Indian: {destination.entryFee.indian === 0 ? "Free" : `₹${destination.entryFee.indian}`}
                  </span>
                  <span className="text-stone-600 block">
                    Foreigner: {destination.entryFee.foreigner === 0 ? "Free" : `₹${destination.entryFee.foreigner}`}
                  </span>
                </div>
              </div>

              {destination.entryFee.camera !== undefined && (
                <div className="flex items-start space-x-3">
                  <Camera className="w-4 h-4 text-stone-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-bold text-stone-800 block">Photography Fee</span>
                    <span className="text-stone-600">₹{destination.entryFee.camera} per camera</span>
                  </div>
                </div>
              )}

              <div className="flex items-start space-x-3">
                <Calendar className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-bold text-stone-800 block">Best Time of Day</span>
                  <span className="text-stone-600">{destination.bestTime}</span>
                </div>
              </div>
            </div>

            {/* Tags */}
            <div className="pt-3 border-t border-stone-100">
              <span className="text-[10px] uppercase font-bold text-stone-400 block mb-2">Category Tags</span>
              <div className="flex flex-wrap gap-1.5">
                {destination.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 bg-amber-50 text-[#780016] rounded-lg text-xs font-medium border border-amber-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* AI Trip Planner Hook */}
            <div className="pt-3 border-t border-stone-100">
              <Link
                href={`/planner?add=${destination.id}`}
                className="w-full py-3 bg-gradient-to-r from-[#D4AF37] to-[#E5A93C] hover:from-[#E5A93C] hover:to-[#F59E0B] text-[#0F2C59] font-bold text-xs rounded-xl shadow-md transition-all flex items-center justify-center space-x-2"
              >
                <Sparkles className="w-4 h-4 text-[#780016]" />
                <span>Add {destination.name} to AI Trip</span>
              </Link>
            </div>
          </div>

          {/* Related Destinations in City */}
          {relatedDestinations.length > 0 && (
            <div className="bg-white rounded-3xl border border-[#E8DCCB] p-6 shadow-sm space-y-4">
              <h3 className="font-serif font-bold text-base text-[#0F2C59]">
                More in {destination.cityName}
              </h3>
              <div className="space-y-3">
                {relatedDestinations.map((rel) => (
                  <Link
                    key={rel.id}
                    href={`/destinations/${rel.slug}`}
                    className="flex items-center space-x-3 p-2.5 rounded-xl hover:bg-amber-50 transition-colors group"
                  >
                    <img src={rel.image} alt={rel.name} className="w-12 h-12 rounded-lg object-cover" />
                    <div>
                      <div className="font-serif font-bold text-xs text-stone-900 group-hover:text-[#780016]">
                        {rel.name}
                      </div>
                      <div className="text-[11px] text-[#C85A32] capitalize">{rel.category}</div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
