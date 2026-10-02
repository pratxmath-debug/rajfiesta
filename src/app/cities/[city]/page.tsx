import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CITIES, DESTINATIONS, City } from "@/data/rajasthanData";
import { HOTELS } from "@/data/travelHotelsData";
import {
  MapPin,
  Landmark,
  UtensilsCrossed,
  Plane,
  Train,
  Bus,
  Car,
  Compass,
  ArrowRight,
  Heart,
  Sparkles,
  Bed,
  CheckCircle2,
  Clock,
  Ticket
} from "lucide-react";

export function generateStaticParams() {
  return CITIES.map((c) => ({ city: c.slug }));
}

export default async function CityDetailPage({
  params,
}: {
  params: Promise<{ city: string }>;
}) {
  const { city: citySlug } = await params;
  const city = CITIES.find((c) => c.slug === citySlug);

  if (!city) {
    notFound();
  }

  // Related destinations
  const mustVisitDestinations = DESTINATIONS.filter((d) => d.cityId === city.id && !d.isHiddenGem);
  const hiddenGemDestinations = DESTINATIONS.filter((d) => d.cityId === city.id && d.isHiddenGem);
  const cityHotels = HOTELS.filter((h) => h.cityId === city.id);

  return (
    <div className="min-h-screen bg-[#FDFBF7] pb-24">
      {/* 1. HERO BANNER */}
      <section className="relative h-[65vh] min-h-[440px] flex items-end justify-start bg-stone-900 overflow-hidden">
        <img
          src={city.image}
          alt={city.name}
          className="absolute inset-0 w-full h-full object-cover opacity-75 transform hover:scale-105 transition-transform duration-1000"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1A1412] via-[#0F2C59]/40 to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 w-full text-white">
          <div className="inline-flex items-center space-x-2 px-3 py-1 bg-amber-400/90 text-[#0F2C59] font-bold text-xs uppercase tracking-widest rounded-full mb-3 backdrop-blur-sm">
            <MapPin className="w-3.5 h-3.5" />
            <span>{city.nickname}</span>
          </div>

          <h1 className="font-serif font-black text-4xl sm:text-6xl md:text-7xl text-amber-50 drop-shadow-lg">
            {city.name}
          </h1>
          <p className="font-serif text-lg sm:text-xl text-amber-200/90 mt-2 max-w-2xl drop-shadow">
            {city.tagline}
          </p>

          <div className="flex flex-wrap items-center gap-4 mt-6 text-xs text-stone-200">
            <span className="px-3 py-1.5 bg-black/40 backdrop-blur-md rounded-xl border border-white/20">
              📅 Best Time: <strong className="text-amber-300">{city.bestTime}</strong>
            </span>
            <span className="px-3 py-1.5 bg-black/40 backdrop-blur-md rounded-xl border border-white/20">
              ⏳ Ideal Duration: <strong className="text-amber-300">{city.idealDays}</strong>
            </span>
            <span className="px-3 py-1.5 bg-black/40 backdrop-blur-md rounded-xl border border-white/20">
              🏛️ District: <strong className="text-amber-300">{city.district}</strong>
            </span>
          </div>
        </div>
      </section>

      {/* 2. ABOUT & HISTORY OVERVIEW */}
      <section className="py-12 md:py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-8 space-y-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#C85A32]">Overview</span>
              <h2 className="font-serif font-bold text-2xl sm:text-3xl text-[#0F2C59] mt-1">
                About {city.name}
              </h2>
              <p className="text-sm sm:text-base text-stone-700 leading-relaxed mt-3">
                {city.description}
              </p>
            </div>

            <div className="p-6 bg-white rounded-3xl border border-[#E8DCCB] shadow-sm space-y-3">
              <h3 className="font-serif font-bold text-lg text-[#780016]">Chronicled History</h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                {city.history}
              </p>
            </div>
          </div>

          {/* Quick AI Itinerary CTA Card */}
          <div className="lg:col-span-4 bg-gradient-to-br from-[#0F2C59] to-[#780016] text-amber-50 rounded-3xl p-6 shadow-xl border border-[#D4AF37]/50 flex flex-col justify-between">
            <div>
              <div className="flex items-center space-x-2 text-xs font-bold text-[#E5A93C] uppercase tracking-wider mb-2">
                <Sparkles className="w-4 h-4" />
                <span>AI Personalized Tour</span>
              </div>
              <h3 className="font-serif font-bold text-xl text-amber-100">
                Plan a {city.name} Itinerary
              </h3>
              <p className="text-xs text-amber-200/80 mt-2 leading-relaxed">
                Let our AI architect craft your exact day-by-day plan for {city.name}, including entry tickets, dining, and transit options.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-white/20">
              <Link
                href={`/planner?city=${city.slug}`}
                className="w-full py-3 bg-[#D4AF37] hover:bg-[#E5A93C] text-[#0F2C59] font-bold text-xs rounded-xl shadow-lg transition-transform hover:scale-105 flex items-center justify-center space-x-2"
              >
                <span>Generate {city.name} Itinerary</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 3. MUST-VISIT PLACES & MONUMENTS */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex items-end justify-between mb-8">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#C85A32]">Iconic Landmarks</span>
            <h2 className="font-serif font-bold text-2xl sm:text-3xl text-[#0F2C59] mt-1">
              Must-Visit Sights in {city.name}
            </h2>
          </div>
          <Link href="/explore" className="text-xs font-bold text-[#780016] hover:underline flex items-center space-x-1">
            <span>View on Map</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mustVisitDestinations.length > 0 ? (
            mustVisitDestinations.map((dest) => (
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
                    <h3 className="font-serif font-bold text-lg text-stone-900 group-hover:text-[#780016]">
                      {dest.name}
                    </h3>
                    <p className="text-xs text-stone-600 line-clamp-2">
                      {dest.description}
                    </p>

                    <div className="pt-2 text-[11px] text-stone-500 flex items-center space-x-3">
                      <span>🕒 {dest.openingTime} - {dest.closingTime}</span>
                      <span>•</span>
                      <span>🎫 {dest.entryFee.indian === 0 ? "Free" : `₹${dest.entryFee.indian}`}</span>
                    </div>
                  </div>
                </div>

                <div className="p-5 pt-0">
                  <Link
                    href={`/destinations/${dest.slug}`}
                    className="w-full py-2 bg-amber-50 group-hover:bg-[#0F2C59] text-[#780016] group-hover:text-amber-100 font-bold text-xs rounded-xl transition-colors flex items-center justify-center space-x-1"
                  >
                    <span>View History & Details</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))
          ) : (
            <p className="text-sm text-stone-500 italic col-span-3">
              Explore the monuments of {city.name} on the interactive map.
            </p>
          )}
        </div>
      </section>

      {/* 4. HIDDEN GEMS */}
      {hiddenGemDestinations.length > 0 && (
        <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-purple-50/50 rounded-3xl border border-purple-200/60 my-6">
          <div className="mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-purple-800">
              Offbeat Secrets
            </span>
            <h2 className="font-serif font-bold text-2xl sm:text-3xl text-purple-950 mt-1">
              Hidden Gems in {city.name}
            </h2>
            <p className="text-xs sm:text-sm text-purple-800/80 mt-1">
              Lesser-known stepwells, ghost hamlets, and serene sanctuaries away from standard crowds.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {hiddenGemDestinations.map((gem) => (
              <div
                key={gem.id}
                className="bg-white rounded-2xl border border-purple-200 overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="relative h-44 overflow-hidden">
                    <img src={gem.image} alt={gem.name} className="w-full h-full object-cover" />
                    <span className="absolute bottom-3 left-3 px-2 py-0.5 rounded-full text-[10px] font-bold bg-purple-700 text-white">
                      Hidden Wonder
                    </span>
                  </div>
                  <div className="p-4 space-y-1.5">
                    <h3 className="font-serif font-bold text-base text-stone-900">{gem.name}</h3>
                    <p className="text-xs text-stone-600 line-clamp-2">{gem.description}</p>
                  </div>
                </div>
                <div className="p-4 pt-0">
                  <Link
                    href={`/destinations/${gem.slug}`}
                    className="text-xs font-bold text-purple-800 hover:underline flex items-center space-x-1"
                  >
                    <span>Discover Secret →</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* 5. LOCAL FOOD & CULINARY DELICACIES */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="mb-8">
          <span className="text-xs font-bold uppercase tracking-wider text-[#C85A32]">Flavors</span>
          <h2 className="font-serif font-bold text-2xl sm:text-3xl text-[#0F2C59] mt-1">
            Famous Food of {city.name}
          </h2>
          <p className="text-xs sm:text-sm text-stone-600 mt-1">
            Authentic culinary specialties and legendary halwai corners you must not miss.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {city.localFood.map((food, idx) => (
            <div
              key={idx}
              className="p-5 bg-white rounded-2xl border border-[#E8DCCB] shadow-sm space-y-3"
            >
              <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center">
                <UtensilsCrossed className="w-5 h-5" />
              </div>
              <h3 className="font-serif font-bold text-lg text-stone-900">{food.name}</h3>
              <p className="text-xs text-stone-600 leading-relaxed">{food.description}</p>
              <div className="pt-2 text-xs text-[#780016] font-semibold border-t border-stone-100">
                📍 Iconic Spot: <strong>{food.bestPlace}</strong>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. RECOMMENDED HOTELS & HAVELIS */}
      {cityHotels.length > 0 && (
        <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="flex items-end justify-between mb-8">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#C85A32]">Where to Stay</span>
              <h2 className="font-serif font-bold text-2xl sm:text-3xl text-[#0F2C59] mt-1">
                Heritage Stays in {city.name}
              </h2>
            </div>
            <Link href="/hotels" className="text-xs font-bold text-[#780016] hover:underline">
              View All Hotels →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cityHotels.map((hotel) => (
              <div
                key={hotel.id}
                className="bg-white rounded-2xl border border-[#E8DCCB] overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="relative h-44 overflow-hidden">
                    <img src={hotel.image} alt={hotel.name} className="w-full h-full object-cover" />
                    <span className="absolute top-3 left-3 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-stone-900/80 text-amber-200">
                      {hotel.type}
                    </span>
                  </div>
                  <div className="p-4 space-y-2">
                    <div className="flex items-center justify-between">
                      <h3 className="font-serif font-bold text-base text-stone-900">{hotel.name}</h3>
                      <span className="text-xs font-semibold text-emerald-700">★ {hotel.rating}</span>
                    </div>
                    <p className="text-xs text-stone-600 line-clamp-2">{hotel.description}</p>
                    <div className="font-serif font-bold text-base text-[#780016]">
                      ₹{hotel.pricePerNight.toLocaleString()}{" "}
                      <span className="text-xs font-sans text-stone-500 font-normal">/ night</span>
                    </div>
                  </div>
                </div>

                <div className="p-4 pt-0">
                  <Link
                    href="/hotels"
                    className="w-full py-2 bg-[#0F2C59] text-amber-100 font-bold text-xs rounded-xl flex items-center justify-center space-x-1"
                  >
                    <span>Check Availability</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* 7. HOW TO REACH SECTION */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="bg-[#FAF5EE] rounded-3xl border border-[#E8DCCB] p-6 sm:p-10">
          <div className="mb-6">
            <span className="text-xs font-bold uppercase tracking-wider text-[#C85A32]">Transit Logistics</span>
            <h2 className="font-serif font-bold text-2xl sm:text-3xl text-[#0F2C59] mt-1">
              How to Reach {city.name}
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-4 bg-white rounded-2xl border border-stone-200 shadow-sm space-y-2">
              <div className="flex items-center space-x-2 text-[#0F2C59] font-bold text-sm">
                <Plane className="w-4 h-4 text-sky-600" />
                <span>By Flight</span>
              </div>
              <p className="text-xs text-stone-600 leading-relaxed">{city.howToReach.flight}</p>
            </div>

            <div className="p-4 bg-white rounded-2xl border border-stone-200 shadow-sm space-y-2">
              <div className="flex items-center space-x-2 text-[#0F2C59] font-bold text-sm">
                <Train className="w-4 h-4 text-amber-700" />
                <span>By Train</span>
              </div>
              <p className="text-xs text-stone-600 leading-relaxed">{city.howToReach.train}</p>
            </div>

            <div className="p-4 bg-white rounded-2xl border border-stone-200 shadow-sm space-y-2">
              <div className="flex items-center space-x-2 text-[#0F2C59] font-bold text-sm">
                <Bus className="w-4 h-4 text-emerald-700" />
                <span>By Bus</span>
              </div>
              <p className="text-xs text-stone-600 leading-relaxed">{city.howToReach.bus}</p>
            </div>

            <div className="p-4 bg-white rounded-2xl border border-stone-200 shadow-sm space-y-2">
              <div className="flex items-center space-x-2 text-[#0F2C59] font-bold text-sm">
                <Car className="w-4 h-4 text-[#C85A32]" />
                <span>By Road / Cab</span>
              </div>
              <p className="text-xs text-stone-600 leading-relaxed">{city.howToReach.cab}</p>
            </div>
          </div>

          {/* Nearby Excursions */}
          {city.nearbyExcursions && city.nearbyExcursions.length > 0 && (
            <div className="mt-8 pt-6 border-t border-stone-200/80">
              <h3 className="font-serif font-bold text-base text-stone-900 mb-3">
                Nearby Excursions from {city.name}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
                {city.nearbyExcursions.map((exc, i) => (
                  <div key={i} className="p-3 bg-white/80 rounded-xl border border-stone-200">
                    <span className="font-semibold text-stone-900 block">{exc.name}</span>
                    <span className="text-[11px] text-[#C85A32] font-medium block">Distance: {exc.distance}</span>
                    <p className="text-stone-500 text-[11px] mt-1">{exc.highlight}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
