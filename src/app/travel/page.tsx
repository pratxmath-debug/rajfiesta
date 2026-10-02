"use client";

import React, { useState } from "react";
import { FLIGHTS, TRAINS, BUSES, CAB_SERVICES } from "@/data/travelHotelsData";
import { useApp } from "@/context/AppContext";
import {
  Plane,
  Train,
  Bus,
  Car,
  Search,
  ArrowRight,
  ExternalLink,
  Clock,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  Calendar,
  Users
} from "lucide-react";

export default function TravelPage() {
  const { addToast } = useApp();
  const [activeTab, setActiveTab] = useState<"flights" | "trains" | "buses" | "cabs">("flights");

  // Flight search states
  const [flightFrom, setFlightFrom] = useState("New Delhi (DEL)");
  const [flightTo, setFlightTo] = useState("Jaipur (JAI)");

  // Train search states
  const [trainFrom, setTrainFrom] = useState("New Delhi (DEC)");
  const [trainTo, setTrainTo] = useState("Jaipur (JP)");

  // Booking Confirmation Modal
  const [bookingSuccessItem, setBookingSuccessItem] = useState<string | null>(null);

  const handleSimulateBook = (title: string, provider: string) => {
    setBookingSuccessItem(`${title} (${provider})`);
    addToast(`Booking initiated with ${provider}! 🎫`, "royal");
  };

  return (
    <div className="min-h-screen bg-[#FDFBF7] py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto">
        <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-amber-100 text-[#780016] text-xs font-bold uppercase tracking-wider border border-amber-300 mb-3">
          <Plane className="w-3.5 h-3.5 text-[#C85A32]" />
          <span>Intercity Rajasthan Transit Portal</span>
        </div>
        <h1 className="font-serif font-black text-3xl sm:text-5xl text-[#0F2C59]">
          Travel Booking Hub
        </h1>
        <p className="mt-3 text-sm sm:text-base text-stone-600 leading-relaxed">
          Book seamless transit to and across Rajasthan: scheduled flights to Jaipur and Udaipur, legendary express trains like Vande Bharat, intercity sleeper buses, and royal chauffeur cabs.
        </p>

        {/* Travel Category Tabs */}
        <div className="flex items-center justify-center space-x-2 sm:space-x-4 mt-8">
          {[
            { id: "flights", label: "✈️ Flights", icon: <Plane className="w-4 h-4" /> },
            { id: "trains", label: "🚆 Trains & Royal Rail", icon: <Train className="w-4 h-4" /> },
            { id: "buses", label: "🚌 Buses", icon: <Bus className="w-4 h-4" /> },
            { id: "cabs", label: "🚕 Cabs & Chauffeurs", icon: <Car className="w-4 h-4" /> }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as typeof activeTab)}
              className={`flex items-center space-x-2 px-4 sm:px-6 py-3 rounded-2xl font-bold text-xs sm:text-sm transition-all ${
                activeTab === tab.id
                  ? "bg-[#0F2C59] text-amber-100 shadow-xl scale-105"
                  : "bg-white text-stone-700 border border-stone-200 hover:bg-stone-50"
              }`}
            >
              <span>{tab.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* 1. FLIGHTS TAB */}
      {activeTab === "flights" && (
        <div className="space-y-8 animate-in fade-in duration-200">
          {/* Flight Search Widget */}
          <div className="bg-white rounded-3xl border border-[#E8DCCB] p-6 shadow-md grid grid-cols-1 md:grid-cols-4 gap-4">
            <div>
              <label className="text-[11px] font-bold uppercase tracking-wider text-stone-500 block mb-1">
                From City
              </label>
              <select
                value={flightFrom}
                onChange={(e) => setFlightFrom(e.target.value)}
                className="w-full p-2.5 bg-stone-50 border border-stone-200 rounded-xl text-xs font-semibold text-stone-800 focus:outline-none"
              >
                <option value="New Delhi (DEL)">New Delhi (DEL)</option>
                <option value="Mumbai (BOM)">Mumbai (BOM)</option>
                <option value="Bengaluru (BLR)">Bengaluru (BLR)</option>
              </select>
            </div>
            <div>
              <label className="text-[11px] font-bold uppercase tracking-wider text-stone-500 block mb-1">
                To Rajasthan
              </label>
              <select
                value={flightTo}
                onChange={(e) => setFlightTo(e.target.value)}
                className="w-full p-2.5 bg-stone-50 border border-stone-200 rounded-xl text-xs font-semibold text-stone-800 focus:outline-none"
              >
                <option value="Jaipur (JAI)">Jaipur (JAI)</option>
                <option value="Udaipur (UDR)">Udaipur (UDR)</option>
                <option value="Jodhpur (JDH)">Jodhpur (JDH)</option>
                <option value="Jaisalmer (JSA)">Jaisalmer (JSA)</option>
              </select>
            </div>
            <div>
              <label className="text-[11px] font-bold uppercase tracking-wider text-stone-500 block mb-1">
                Departure Date
              </label>
              <input
                type="date"
                defaultValue="2026-10-15"
                className="w-full p-2 bg-stone-50 border border-stone-200 rounded-xl text-xs font-semibold text-stone-800 focus:outline-none"
              />
            </div>
            <div className="flex items-end">
              <button
                onClick={() => addToast("Showing live scheduled flights", "info")}
                className="w-full py-2.5 bg-[#0F2C59] hover:bg-[#1A365D] text-amber-100 font-bold text-xs rounded-xl transition-colors shadow flex items-center justify-center space-x-1.5"
              >
                <Search className="w-4 h-4" />
                <span>Search Flights</span>
              </button>
            </div>
          </div>

          {/* Flights Available */}
          <div className="space-y-4">
            <h3 className="font-serif font-bold text-xl text-[#0F2C59]">Popular Direct Flight Routes</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {FLIGHTS.map((flight) => (
                <div
                  key={flight.id}
                  className="bg-white rounded-2xl border border-stone-200 p-5 shadow-sm hover:shadow-md transition-shadow flex items-center justify-between"
                >
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <span className="font-serif font-bold text-base text-stone-900">{flight.airline}</span>
                      <span className="text-xs text-stone-400">({flight.flightNumber})</span>
                      <span className="text-[10px] px-2 py-0.5 bg-emerald-50 text-emerald-700 font-semibold rounded">
                        {flight.stops}
                      </span>
                    </div>
                    <div className="flex items-center space-x-4 text-xs text-stone-600">
                      <div>
                        <strong>{flight.departure}</strong> {flight.from.split(" ")[0]}
                      </div>
                      <ArrowRight className="w-3.5 h-3.5 text-stone-400" />
                      <div>
                        <strong>{flight.arrival}</strong> {flight.to.split(" ")[0]}
                      </div>
                      <span className="text-stone-400 text-[11px]">({flight.duration})</span>
                    </div>
                  </div>

                  <div className="text-right space-y-1.5">
                    <div className="font-serif font-bold text-lg text-[#780016]">
                      ₹{flight.price.toLocaleString()}
                    </div>
                    <button
                      onClick={() => handleSimulateBook(`${flight.airline} Flight ${flight.flightNumber}`, "MakeMyTrip")}
                      className="px-4 py-1.5 bg-[#0F2C59] hover:bg-[#1A365D] text-amber-100 font-bold text-xs rounded-xl shadow transition-colors flex items-center space-x-1"
                    >
                      <span>Book Flight</span>
                      <ExternalLink className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* 2. TRAINS TAB */}
      {activeTab === "trains" && (
        <div className="space-y-8 animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl border border-[#E8DCCB] p-6 shadow-md grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="text-[11px] font-bold uppercase tracking-wider text-stone-500 block mb-1">
                From Station
              </label>
              <select
                value={trainFrom}
                onChange={(e) => setTrainFrom(e.target.value)}
                className="w-full p-2.5 bg-stone-50 border border-stone-200 rounded-xl text-xs font-semibold text-stone-800 focus:outline-none"
              >
                <option value="New Delhi (DEC)">New Delhi / Delhi Cantt</option>
                <option value="Old Delhi (DLI)">Old Delhi (DLI)</option>
              </select>
            </div>
            <div>
              <label className="text-[11px] font-bold uppercase tracking-wider text-stone-500 block mb-1">
                To Station
              </label>
              <select
                value={trainTo}
                onChange={(e) => setTrainTo(e.target.value)}
                className="w-full p-2.5 bg-stone-50 border border-stone-200 rounded-xl text-xs font-semibold text-stone-800 focus:outline-none"
              >
                <option value="Jaipur (JP)">Jaipur Junction (JP)</option>
                <option value="Jodhpur (JU)">Jodhpur Junction (JU)</option>
                <option value="Udaipur (UDZ)">Udaipur City (UDZ)</option>
              </select>
            </div>
            <div className="flex items-end">
              <a
                href="https://www.irctc.co.in"
                target="_blank"
                rel="noreferrer"
                className="w-full py-2.5 bg-[#780016] hover:bg-[#881337] text-white font-bold text-xs rounded-xl transition-colors shadow flex items-center justify-center space-x-1.5"
              >
                <Search className="w-4 h-4" />
                <span>Search Live on IRCTC</span>
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-serif font-bold text-xl text-[#0F2C59]">Featured Heritage & Express Trains</h3>
            <div className="space-y-4">
              {TRAINS.map((train) => (
                <div
                  key={train.id}
                  className="bg-white rounded-2xl border border-stone-200 p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col md:flex-row md:items-center justify-between gap-6"
                >
                  <div className="space-y-2 max-w-xl">
                    <div className="flex items-center space-x-3">
                      <span className="font-serif font-bold text-lg text-[#0F2C59]">{train.name}</span>
                      <span className="text-xs px-2 py-0.5 bg-amber-100 text-[#780016] rounded-md font-bold">
                        #{train.trainNumber}
                      </span>
                    </div>
                    <div className="text-xs text-stone-600 flex items-center space-x-3">
                      <span><strong>Dep:</strong> {train.departure}</span>
                      <span>•</span>
                      <span><strong>Arr:</strong> {train.arrival}</span>
                      <span>•</span>
                      <span>Duration: {train.duration}</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-3">
                    {train.classes.map((cls, i) => (
                      <div
                        key={i}
                        className="p-3 bg-stone-50 rounded-xl border border-stone-200 text-center min-w-[120px]"
                      >
                        <span className="font-bold text-xs text-stone-800 block">{cls.className}</span>
                        <span className="font-serif font-bold text-sm text-[#780016] block mt-0.5">
                          ₹{cls.fare.toLocaleString()}
                        </span>
                        <span className="text-[10px] text-emerald-700 font-semibold">{cls.availability}</span>
                      </div>
                    ))}
                    <button
                      onClick={() => handleSimulateBook(`Train #${train.trainNumber}`, "IRCTC")}
                      className="px-4 py-3 bg-[#780016] text-amber-100 font-bold text-xs rounded-xl shadow hover:bg-[#881337] transition-colors"
                    >
                      Book Ticket
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* 3. BUSES TAB */}
      {activeTab === "buses" && (
        <div className="space-y-6 animate-in fade-in duration-200">
          <div className="flex items-center justify-between">
            <h3 className="font-serif font-bold text-xl text-[#0F2C59]">Intercity Volvo & Sleeper Buses</h3>
            <a
              href="https://www.redbus.in"
              target="_blank"
              rel="noreferrer"
              className="text-xs font-bold text-[#780016] flex items-center space-x-1"
            >
              <span>Explore All on RedBus</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {BUSES.map((bus) => (
              <div
                key={bus.id}
                className="bg-white rounded-2xl border border-stone-200 p-5 shadow-sm hover:shadow-md transition-shadow flex items-center justify-between"
              >
                <div className="space-y-1.5">
                  <div className="flex items-center space-x-2">
                    <span className="font-serif font-bold text-base text-stone-900">{bus.operator}</span>
                    <span className="text-[10px] px-2 py-0.5 bg-emerald-100 text-emerald-800 font-bold rounded">
                      ★ {bus.rating}
                    </span>
                  </div>
                  <div className="text-xs text-[#C85A32] font-semibold">{bus.busType}</div>
                  <div className="text-xs text-stone-500">
                    {bus.from} → {bus.to} ({bus.duration})
                  </div>
                </div>

                <div className="text-right space-y-1.5">
                  <div className="font-serif font-bold text-lg text-[#780016]">
                    ₹{bus.price.toLocaleString()}
                  </div>
                  <button
                    onClick={() => handleSimulateBook(`${bus.operator} Bus`, "RedBus")}
                    className="px-4 py-1.5 bg-[#0F2C59] text-amber-100 font-bold text-xs rounded-xl shadow hover:bg-[#1A365D]"
                  >
                    Select Seats
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 4. CABS TAB */}
      {activeTab === "cabs" && (
        <div className="space-y-6 animate-in fade-in duration-200">
          <div className="text-center max-w-xl mx-auto">
            <h3 className="font-serif font-bold text-2xl text-[#0F2C59]">
              Chauffeur-Driven Heritage Cabs
            </h3>
            <p className="text-xs text-stone-600 mt-1">
              Private intercity transit with verified chauffeurs knowledgeable in local Rajasthan routes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {CAB_SERVICES.map((cab) => (
              <div
                key={cab.id}
                className="bg-white rounded-2xl border border-[#E8DCCB] overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
              >
                <div>
                  <div className="h-44 overflow-hidden bg-stone-100">
                    <img src={cab.image} alt={cab.vehicleType} className="w-full h-full object-cover" />
                  </div>
                  <div className="p-5 space-y-3">
                    <h4 className="font-serif font-bold text-lg text-stone-900">{cab.vehicleType}</h4>
                    <p className="text-xs text-[#C85A32] font-semibold">{cab.model}</p>
                    <p className="text-xs text-stone-500">{cab.capacity}</p>

                    <div className="space-y-1 pt-2 border-t border-stone-100 text-xs text-stone-600">
                      {cab.features.map((feat, i) => (
                        <div key={i} className="flex items-center space-x-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-5 pt-0 flex items-center justify-between border-t border-stone-100 mt-4">
                  <div>
                    <span className="text-[10px] text-stone-400 font-bold uppercase block">Rate</span>
                    <span className="font-serif font-bold text-base text-[#780016]">
                      ₹{cab.perKmRate} <span className="text-xs font-sans text-stone-500 font-normal">/ km</span>
                    </span>
                  </div>
                  <button
                    onClick={() => handleSimulateBook(cab.vehicleType, "RajFiesta Chauffeur")}
                    className="px-4 py-2 bg-[#0F2C59] text-amber-100 font-bold text-xs rounded-xl shadow hover:bg-[#1A365D]"
                  >
                    Reserve Cab
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Booking Feedback Modal */}
      {bookingSuccessItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-900/60 backdrop-blur-sm animate-in fade-in">
          <div className="bg-white rounded-3xl p-8 max-w-md w-full shadow-2xl border border-[#D4AF37] text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 mx-auto flex items-center justify-center shadow-inner">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="font-serif font-bold text-2xl text-stone-900">Transit Inquired!</h3>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
              Your inquiry for <strong>{bookingSuccessItem}</strong> has been logged. In the live version, you are redirected to the provider for real-time ticket confirmation.
            </p>
            <button
              onClick={() => setBookingSuccessItem(null)}
              className="w-full py-3 bg-[#0F2C59] text-amber-100 font-bold text-sm rounded-xl shadow"
            >
              Done & Return
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
