"use client";

import React, { useState } from "react";
import { HOTELS, Hotel } from "@/data/travelHotelsData";
import { CITIES } from "@/data/rajasthanData";
import { useApp } from "@/context/AppContext";
import {
  Bed,
  MapPin,
  Star,
  Search,
  CheckCircle2,
  Calendar,
  Users,
  Sparkles,
  ExternalLink,
  Crown,
  Heart,
  X
} from "lucide-react";

export default function HotelsPage() {
  const { addToast } = useApp();
  const [selectedCity, setSelectedCity] = useState("all");
  const [selectedType, setSelectedType] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  // Booking Modal States
  const [activeBookingHotel, setActiveBookingHotel] = useState<Hotel | null>(null);
  const [guestName, setGuestName] = useState("Yashi Sharma");
  const [checkIn, setCheckIn] = useState("2026-10-18");
  const [checkOut, setCheckOut] = useState("2026-10-21");
  const [guestsCount, setGuestsCount] = useState("2 Guests");
  const [isBookedSuccess, setIsBookedSuccess] = useState(false);
  const [bookingRefId, setBookingRefId] = useState("");

  const filteredHotels = HOTELS.filter((h) => {
    if (selectedCity !== "all" && h.cityId !== selectedCity) return false;
    if (selectedType !== "all" && h.type !== selectedType) return false;
    if (
      searchQuery.trim() &&
      !h.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
      !h.cityName.toLowerCase().includes(searchQuery.toLowerCase())
    ) {
      return false;
    }
    return true;
  });

  const handleConfirmReservation = (e: React.FormEvent) => {
    e.preventDefault();
    const ref = "RAJ-" + Math.floor(100000 + Math.random() * 900000);
    setBookingRefId(ref);
    setIsBookedSuccess(true);
    addToast(`Reservation confirmed at ${activeBookingHotel?.name}! 🏨`, "royal");
  };

  return (
    <div className="min-h-screen bg-[#FDFBF7] py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto">
        <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-amber-100 text-[#780016] text-xs font-bold uppercase tracking-wider border border-amber-300 mb-3">
          <Crown className="w-3.5 h-3.5 text-[#C85A32]" />
          <span>Royal Palaces & Authentic Haveli Stays</span>
        </div>
        <h1 className="font-serif font-black text-3xl sm:text-5xl text-[#0F2C59]">
          Rajasthan Hotels & Havelis
        </h1>
        <p className="mt-3 text-sm sm:text-base text-stone-600 leading-relaxed">
          Awake to the call of peacocks in centuries-old royal suites, sleep under desert stars in Sam luxury camps, or stay in vibrant backpacker havelis.
        </p>
      </div>

      {/* Search & Filter Toolbar */}
      <div className="bg-white rounded-3xl border border-[#E8DCCB] p-6 shadow-md grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div>
          <label className="text-[11px] font-bold uppercase tracking-wider text-stone-500 block mb-1">
            Destination City
          </label>
          <select
            value={selectedCity}
            onChange={(e) => setSelectedCity(e.target.value)}
            className="w-full p-2.5 bg-stone-50 border border-stone-200 rounded-xl text-xs font-semibold text-stone-800 focus:outline-none"
          >
            <option value="all">All Rajasthan Cities</option>
            {CITIES.map((c) => (
              <option key={c.id} value={c.id}>
                {c.name}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="text-[11px] font-bold uppercase tracking-wider text-stone-500 block mb-1">
            Stay Category
          </label>
          <select
            value={selectedType}
            onChange={(e) => setSelectedType(e.target.value)}
            className="w-full p-2.5 bg-stone-50 border border-stone-200 rounded-xl text-xs font-semibold text-stone-800 focus:outline-none"
          >
            <option value="all">All Stay Types</option>
            <option value="Luxury Palace">Luxury Palace</option>
            <option value="Heritage Haveli">Heritage Haveli</option>
            <option value="Desert Camp">Desert Camp</option>
            <option value="Boutique & Hostel">Boutique & Hostel</option>
          </select>
        </div>

        <div>
          <label className="text-[11px] font-bold uppercase tracking-wider text-stone-500 block mb-1">
            Keyword Search
          </label>
          <div className="relative">
            <Search className="w-4 h-4 text-stone-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search hotel name..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-2 bg-stone-50 border border-stone-200 rounded-xl text-xs text-stone-800 focus:outline-none"
            />
          </div>
        </div>

        <div className="flex items-end">
          <button
            onClick={() => {
              setSelectedCity("all");
              setSelectedType("all");
              setSearchQuery("");
            }}
            className="w-full py-2.5 bg-stone-100 hover:bg-stone-200 text-stone-700 font-bold text-xs rounded-xl transition-colors"
          >
            Reset Filters
          </button>
        </div>
      </div>

      {/* Hotels Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredHotels.map((hotel) => (
          <div
            key={hotel.id}
            className="jharokha-card rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all flex flex-col justify-between group"
          >
            <div>
              {/* Image */}
              <div className="relative h-60 overflow-hidden bg-stone-900">
                <img
                  src={hotel.image}
                  alt={hotel.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-stone-900/80 text-amber-200 font-bold text-xs rounded-full backdrop-blur-sm">
                    {hotel.type}
                  </span>
                </div>
                <div className="absolute top-4 right-4">
                  <span className="px-2.5 py-1 bg-emerald-600 text-white font-bold text-xs rounded-full flex items-center space-x-1 shadow">
                    <Star className="w-3.5 h-3.5 fill-current" />
                    <span>{hotel.rating}</span>
                  </span>
                </div>
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="text-xs text-amber-300 font-semibold flex items-center">
                    <MapPin className="w-3.5 h-3.5 mr-1" /> {hotel.cityName}
                  </span>
                </div>
              </div>

              {/* Info */}
              <div className="p-5 space-y-3">
                <h3 className="font-serif font-bold text-xl text-stone-900 group-hover:text-[#780016]">
                  {hotel.name}
                </h3>
                <p className="text-xs text-stone-600 leading-relaxed line-clamp-2">
                  {hotel.description}
                </p>

                {/* Amenities pills */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {hotel.amenities.slice(0, 3).map((amenity, i) => (
                    <span
                      key={i}
                      className="px-2 py-0.5 bg-stone-100 text-stone-600 text-[11px] rounded-md"
                    >
                      ✓ {amenity}
                    </span>
                  ))}
                </div>

                <div className="pt-2 text-[11px] text-stone-400">
                  📍 {hotel.address}
                </div>
              </div>
            </div>

            {/* Bottom Booking Row */}
            <div className="p-5 pt-0 border-t border-stone-100 mt-2 flex items-center justify-between">
              <div>
                <span className="text-[10px] uppercase font-bold text-stone-400 block">Nightly Tariff</span>
                <span className="font-serif font-bold text-lg text-[#780016]">
                  ₹{hotel.pricePerNight.toLocaleString()}{" "}
                  <span className="text-xs font-sans text-stone-500 font-normal">/ night</span>
                </span>
              </div>

              <button
                onClick={() => {
                  setActiveBookingHotel(hotel);
                  setIsBookedSuccess(false);
                }}
                className="px-5 py-2.5 bg-[#0F2C59] hover:bg-[#1A365D] text-amber-100 font-bold text-xs rounded-xl shadow transition-colors"
              >
                Book Stay
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Interactive Reservation Modal */}
      {activeBookingHotel && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-900/60 backdrop-blur-sm animate-in fade-in">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-[#D4AF37] relative max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setActiveBookingHotel(null)}
              className="absolute top-4 right-4 p-1.5 text-stone-400 hover:text-stone-700 rounded-full"
            >
              <X className="w-5 h-5" />
            </button>

            {!isBookedSuccess ? (
              <form onSubmit={handleConfirmReservation} className="space-y-4">
                <div>
                  <span className="text-xs font-bold text-[#C85A32] uppercase tracking-wider block">
                    Royal Reservation
                  </span>
                  <h3 className="font-serif font-bold text-2xl text-stone-900">
                    {activeBookingHotel.name}
                  </h3>
                  <p className="text-xs text-stone-500">📍 {activeBookingHotel.cityName} • {activeBookingHotel.type}</p>
                </div>

                <div className="p-4 bg-amber-50/70 rounded-2xl border border-amber-200/70 text-xs flex items-center justify-between">
                  <div>
                    <span className="text-stone-500 block">Nightly Tariff</span>
                    <strong className="text-base text-[#780016] font-serif">
                      ₹{activeBookingHotel.pricePerNight.toLocaleString()}
                    </strong>
                  </div>
                  <span className="px-2.5 py-1 bg-emerald-100 text-emerald-800 font-bold rounded-lg">
                    ★ {activeBookingHotel.rating} Rated
                  </span>
                </div>

                <div className="space-y-3 text-xs">
                  <div>
                    <label className="font-bold text-stone-700 block mb-1">Primary Guest Name</label>
                    <input
                      type="text"
                      required
                      value={guestName}
                      onChange={(e) => setGuestName(e.target.value)}
                      className="w-full p-2.5 bg-stone-50 border border-stone-200 rounded-xl focus:outline-none"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="font-bold text-stone-700 block mb-1">Check-in Date</label>
                      <input
                        type="date"
                        required
                        value={checkIn}
                        onChange={(e) => setCheckIn(e.target.value)}
                        className="w-full p-2.5 bg-stone-50 border border-stone-200 rounded-xl focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="font-bold text-stone-700 block mb-1">Check-out Date</label>
                      <input
                        type="date"
                        required
                        value={checkOut}
                        onChange={(e) => setCheckOut(e.target.value)}
                        className="w-full p-2.5 bg-stone-50 border border-stone-200 rounded-xl focus:outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="font-bold text-stone-700 block mb-1">Guests & Rooms</label>
                    <select
                      value={guestsCount}
                      onChange={(e) => setGuestsCount(e.target.value)}
                      className="w-full p-2.5 bg-stone-50 border border-stone-200 rounded-xl focus:outline-none"
                    >
                      <option value="1 Guest">1 Guest (Single Room)</option>
                      <option value="2 Guests">2 Guests (Double Royal Bed)</option>
                      <option value="3 Guests">3 Guests (Suite with Extra Bed)</option>
                      <option value="4+ Family">Family Suite (4 Guests)</option>
                    </select>
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-3.5 bg-gradient-to-r from-[#D4AF37] to-[#E5A93C] text-[#0F2C59] font-black text-sm rounded-xl shadow-lg transition-transform hover:scale-[1.01]"
                  >
                    Confirm Reservation Voucher
                  </button>
                  <p className="text-[11px] text-stone-400 text-center mt-2">
                    Zero cancellation fee up to 48 hours before check-in.
                  </p>
                </div>
              </form>
            ) : (
              /* Success Confirmation Voucher */
              <div className="text-center space-y-4 py-4 animate-in zoom-in-95">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 mx-auto flex items-center justify-center shadow-inner">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-serif font-bold text-2xl text-stone-900">
                  Padharo! Booking Confirmed
                </h3>
                <p className="text-xs text-stone-600">
                  Your stay at <strong>{activeBookingHotel.name}</strong> is confirmed.
                </p>

                <div className="p-4 bg-stone-50 rounded-2xl border border-stone-200 text-left text-xs space-y-2">
                  <div className="flex justify-between border-b pb-1.5 border-stone-200">
                    <span className="text-stone-500">Booking Reference</span>
                    <strong className="font-mono text-[#780016]">{bookingRefId}</strong>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-stone-500">Guest Name</span>
                    <strong>{guestName}</strong>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-stone-500">Dates</span>
                    <span>{checkIn} to {checkOut}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-stone-500">Guests</span>
                    <span>{guestsCount}</span>
                  </div>
                </div>

                <button
                  onClick={() => setActiveBookingHotel(null)}
                  className="w-full py-3 bg-[#0F2C59] text-amber-100 font-bold text-xs rounded-xl shadow"
                >
                  Close & View More Stays
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
