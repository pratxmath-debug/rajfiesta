"use client";

import React, { useState } from "react";
import { DESTINATIONS, Destination, CITIES } from "@/data/rajasthanData";
import { HOTELS, Hotel } from "@/data/travelHotelsData";
import { FESTIVALS, Festival } from "@/data/festivalsData";
import { useApp } from "@/context/AppContext";
import {
  ShieldAlert,
  Plus,
  Trash2,
  Edit3,
  Landmark,
  Bed,
  Calendar,
  Sparkles,
  CheckCircle2,
  X,
  Search,
  MapPin
} from "lucide-react";

export default function AdminPage() {
  const { addToast } = useApp();

  const [destinationsList, setDestinationsList] = useState<Destination[]>(DESTINATIONS);
  const [hotelsList, setHotelsList] = useState<Hotel[]>(HOTELS);
  const [activeTab, setActiveTab] = useState<"destinations" | "hotels" | "festivals">("destinations");

  // Add Destination Modal State
  const [isAddDestModalOpen, setIsAddDestModalOpen] = useState(false);
  const [newName, setNewName] = useState("");
  const [newCityId, setNewCityId] = useState("jaipur");
  const [newCategory, setNewCategory] = useState<Destination["category"]>("fort");
  const [newDesc, setNewDesc] = useState("");
  const [newEntryFee, setNewEntryFee] = useState("100");
  const [newImage, setNewImage] = useState(
    "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1200&q=80"
  );
  const [isNewHiddenGem, setIsNewHiddenGem] = useState(false);

  const handleCreateDestination = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newName.trim()) return;

    const matchedCity = CITIES.find((c) => c.id === newCityId);
    const newDest: Destination = {
      id: "dest-" + Date.now(),
      name: newName,
      slug: newName.toLowerCase().replace(/[^a-z0-9]+/g, "-"),
      cityId: newCityId,
      cityName: matchedCity?.name || "Jaipur",
      category: newCategory,
      coordinates: matchedCity ? matchedCity.coordinates : { lat: 26.9124, lng: 75.7873 },
      mapPosition: matchedCity ? matchedCity.mapPosition : { x: 500, y: 400 },
      image: newImage,
      description: newDesc,
      history: "Documented by RajFiesta Royal Heritage Curators in 2026.",
      architecture: "Classic Rajput sandstone masonry with vaulted arches.",
      legends: "Passed down through oral desert traditions.",
      openingTime: "09:00 AM",
      closingTime: "05:00 PM",
      entryFee: {
        indian: parseInt(newEntryFee) || 0,
        foreigner: (parseInt(newEntryFee) || 0) * 5
      },
      rating: 4.8,
      reviewsCount: 1,
      bestTime: "Morning hours",
      isHiddenGem: isNewHiddenGem,
      tags: ["Heritage", "Curated"]
    };

    setDestinationsList([newDest, ...destinationsList]);
    setIsAddDestModalOpen(false);
    setNewName("");
    setNewDesc("");
    addToast(`Destination "${newName}" created successfully! 🏰`, "royal");
  };

  const handleDeleteDestination = (id: string, name: string) => {
    setDestinationsList(destinationsList.filter((d) => d.id !== id));
    addToast(`Destination "${name}" removed from catalogue.`, "info");
  };

  return (
    <div className="min-h-screen bg-[#FDFBF7] py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-10">
      {/* Admin Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#E8DCCB] pb-6">
        <div>
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-rose-100 text-[#780016] text-xs font-bold uppercase tracking-wider mb-2">
            <ShieldAlert className="w-3.5 h-3.5" />
            <span>Curator Administration Portal</span>
          </div>
          <h1 className="font-serif font-black text-3xl sm:text-4xl text-[#0F2C59]">
            RajFiesta Management Studio
          </h1>
          <p className="text-xs sm:text-sm text-stone-500 mt-1">
            Create, update, and manage heritage destinations, palace hotels, and festival schedules.
          </p>
        </div>

        <button
          onClick={() => setIsAddDestModalOpen(true)}
          className="px-5 py-3 bg-[#780016] hover:bg-[#881337] text-amber-100 font-bold text-xs rounded-xl shadow-md transition-transform active:scale-95 flex items-center space-x-2"
        >
          <Plus className="w-4 h-4" />
          <span>Add New Destination</span>
        </button>
      </div>

      {/* Metric Counters */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <div className="p-5 bg-white rounded-2xl border border-stone-200 shadow-sm">
          <span className="text-[10px] text-stone-400 font-bold uppercase block">Destinations</span>
          <span className="font-serif font-bold text-2xl text-[#0F2C59] block mt-1">
            {destinationsList.length}
          </span>
          <span className="text-stone-500 text-xs">Monuments & Forts</span>
        </div>

        <div className="p-5 bg-white rounded-2xl border border-stone-200 shadow-sm">
          <span className="text-[10px] text-stone-400 font-bold uppercase block">Partner Stays</span>
          <span className="font-serif font-bold text-2xl text-[#780016] block mt-1">
            {hotelsList.length}
          </span>
          <span className="text-stone-500 text-xs">Palaces & Havelis</span>
        </div>

        <div className="p-5 bg-white rounded-2xl border border-stone-200 shadow-sm">
          <span className="text-[10px] text-stone-400 font-bold uppercase block">Festivals</span>
          <span className="font-serif font-bold text-2xl text-amber-600 block mt-1">
            {FESTIVALS.length}
          </span>
          <span className="text-stone-500 text-xs">Annual Celebrations</span>
        </div>

        <div className="p-5 bg-white rounded-2xl border border-stone-200 shadow-sm">
          <span className="text-[10px] text-stone-400 font-bold uppercase block">Curated Cities</span>
          <span className="font-serif font-bold text-2xl text-purple-700 block mt-1">
            {CITIES.length}
          </span>
          <span className="text-stone-500 text-xs">Royal Districts</span>
        </div>
      </div>

      {/* Admin Tabs */}
      <div className="flex items-center space-x-2 border-b border-stone-200 pb-2 text-xs font-bold">
        <button
          onClick={() => setActiveTab("destinations")}
          className={`px-4 py-2 rounded-xl transition-colors ${
            activeTab === "destinations" ? "bg-[#0F2C59] text-amber-100" : "text-stone-600 hover:bg-stone-100"
          }`}
        >
          Destinations Management ({destinationsList.length})
        </button>
        <button
          onClick={() => setActiveTab("hotels")}
          className={`px-4 py-2 rounded-xl transition-colors ${
            activeTab === "hotels" ? "bg-[#0F2C59] text-amber-100" : "text-stone-600 hover:bg-stone-100"
          }`}
        >
          Hotels & Havelis ({hotelsList.length})
        </button>
        <button
          onClick={() => setActiveTab("festivals")}
          className={`px-4 py-2 rounded-xl transition-colors ${
            activeTab === "festivals" ? "bg-[#0F2C59] text-amber-100" : "text-stone-600 hover:bg-stone-100"
          }`}
        >
          Festival Calendar ({FESTIVALS.length})
        </button>
      </div>

      {/* TAB A: DESTINATIONS LIST TABLE */}
      {activeTab === "destinations" && (
        <div className="bg-white rounded-3xl border border-[#E8DCCB] shadow-md overflow-hidden">
          <div className="p-4 border-b border-stone-100 flex items-center justify-between text-xs">
            <span className="font-bold text-stone-800">All Registered Rajasthan Destinations</span>
            <span className="text-stone-400">{destinationsList.length} items</span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-stone-50 border-b border-stone-200 text-stone-500 font-bold uppercase tracking-wider">
                <tr>
                  <th className="p-4">Monument</th>
                  <th className="p-4">City</th>
                  <th className="p-4">Category</th>
                  <th className="p-4">Entry Fee</th>
                  <th className="p-4">Hidden Gem</th>
                  <th className="p-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-100">
                {destinationsList.map((dest) => (
                  <tr key={dest.id} className="hover:bg-amber-50/50 transition-colors">
                    <td className="p-4 font-semibold text-stone-900 flex items-center space-x-3">
                      <img src={dest.image} alt={dest.name} className="w-9 h-9 rounded-lg object-cover" />
                      <span>{dest.name}</span>
                    </td>
                    <td className="p-4 text-stone-600">{dest.cityName}</td>
                    <td className="p-4">
                      <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-amber-100 text-[#780016] capitalize">
                        {dest.category}
                      </span>
                    </td>
                    <td className="p-4 font-mono font-medium">₹{dest.entryFee.indian}</td>
                    <td className="p-4">
                      {dest.isHiddenGem ? (
                        <span className="text-purple-700 font-bold">Yes (Secret)</span>
                      ) : (
                        <span className="text-stone-400">Standard</span>
                      )}
                    </td>
                    <td className="p-4 text-right">
                      <button
                        onClick={() => handleDeleteDestination(dest.id, dest.name)}
                        className="p-1.5 text-stone-400 hover:text-rose-600 transition-colors"
                        title="Delete Destination"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* TAB B: HOTELS LIST */}
      {activeTab === "hotels" && (
        <div className="bg-white rounded-3xl border border-[#E8DCCB] shadow-md overflow-hidden">
          <div className="p-4 border-b border-stone-100 flex items-center justify-between text-xs">
            <span className="font-bold text-stone-800">Hotels & Havelis Directory</span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-stone-50 border-b border-stone-200 text-stone-500 font-bold uppercase tracking-wider">
                <tr>
                  <th className="p-4">Hotel Name</th>
                  <th className="p-4">City</th>
                  <th className="p-4">Type</th>
                  <th className="p-4">Tariff / Night</th>
                  <th className="p-4">Rating</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-100">
                {hotelsList.map((hotel) => (
                  <tr key={hotel.id} className="hover:bg-amber-50/50 transition-colors">
                    <td className="p-4 font-semibold text-stone-900 flex items-center space-x-3">
                      <img src={hotel.image} alt={hotel.name} className="w-9 h-9 rounded-lg object-cover" />
                      <span>{hotel.name}</span>
                    </td>
                    <td className="p-4 text-stone-600">{hotel.cityName}</td>
                    <td className="p-4">{hotel.type}</td>
                    <td className="p-4 font-serif font-bold text-[#780016]">
                      ₹{hotel.pricePerNight.toLocaleString()}
                    </td>
                    <td className="p-4 text-emerald-700 font-bold">★ {hotel.rating}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* TAB C: FESTIVALS LIST */}
      {activeTab === "festivals" && (
        <div className="bg-white rounded-3xl border border-[#E8DCCB] shadow-md p-6 space-y-4">
          <h3 className="font-serif font-bold text-lg text-[#0F2C59]">Active Rajasthan Festivals</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {FESTIVALS.map((fest) => (
              <div key={fest.id} className="p-4 bg-stone-50 rounded-2xl border border-stone-200 space-y-1 text-xs">
                <span className="font-bold text-stone-900 text-sm block">{fest.name}</span>
                <span className="text-[#C85A32] font-semibold block">📍 {fest.location}</span>
                <span className="text-stone-500 block">Dates: {fest.nextDates}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Add Destination Modal */}
      {isAddDestModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-900/60 backdrop-blur-sm animate-in fade-in">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-[#D4AF37] relative max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setIsAddDestModalOpen(false)}
              className="absolute top-4 right-4 p-1.5 text-stone-400 hover:text-stone-700 rounded-full"
            >
              <X className="w-5 h-5" />
            </button>

            <form onSubmit={handleCreateDestination} className="space-y-4">
              <div>
                <h3 className="font-serif font-bold text-2xl text-stone-900">Add New Destination</h3>
                <p className="text-xs text-stone-500">Record a new palace, fort, or hidden baori into RajFiesta.</p>
              </div>

              <div className="space-y-3 text-xs">
                <div>
                  <label className="font-bold text-stone-700 block mb-1">Monument Name</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Nahargarh Biological Park"
                    value={newName}
                    onChange={(e) => setNewName(e.target.value)}
                    className="w-full p-2.5 bg-stone-50 border border-stone-200 rounded-xl focus:outline-none"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="font-bold text-stone-700 block mb-1">City Hub</label>
                    <select
                      value={newCityId}
                      onChange={(e) => setNewCityId(e.target.value)}
                      className="w-full p-2.5 bg-stone-50 border border-stone-200 rounded-xl focus:outline-none"
                    >
                      {CITIES.map((c) => (
                        <option key={c.id} value={c.id}>
                          {c.name}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="font-bold text-stone-700 block mb-1">Category</label>
                    <select
                      value={newCategory}
                      onChange={(e) => setNewCategory(e.target.value as Destination["category"])}
                      className="w-full p-2.5 bg-stone-50 border border-stone-200 rounded-xl focus:outline-none"
                    >
                      <option value="fort">Fort</option>
                      <option value="palace">Palace</option>
                      <option value="temple">Temple</option>
                      <option value="stepwell">Stepwell</option>
                      <option value="lake">Lake</option>
                      <option value="hidden-gem">Hidden Gem</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="font-bold text-stone-700 block mb-1">Description & Architecture</label>
                  <textarea
                    rows={3}
                    required
                    placeholder="Provide historical overview..."
                    value={newDesc}
                    onChange={(e) => setNewDesc(e.target.value)}
                    className="w-full p-2.5 bg-stone-50 border border-stone-200 rounded-xl focus:outline-none"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="font-bold text-stone-700 block mb-1">Entry Fee (₹)</label>
                    <input
                      type="number"
                      value={newEntryFee}
                      onChange={(e) => setNewEntryFee(e.target.value)}
                      className="w-full p-2.5 bg-stone-50 border border-stone-200 rounded-xl focus:outline-none"
                    />
                  </div>
                  <div className="flex items-center pt-5">
                    <label className="flex items-center space-x-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={isNewHiddenGem}
                        onChange={(e) => setIsNewHiddenGem(e.target.checked)}
                        className="w-4 h-4 accent-[#780016]"
                      />
                      <span className="font-bold text-stone-700">Mark as Hidden Gem</span>
                    </label>
                  </div>
                </div>

                <div>
                  <label className="font-bold text-stone-700 block mb-1">High-Res Image URL</label>
                  <input
                    type="url"
                    value={newImage}
                    onChange={(e) => setNewImage(e.target.value)}
                    className="w-full p-2.5 bg-stone-50 border border-stone-200 rounded-xl focus:outline-none"
                  />
                </div>
              </div>

              <div className="pt-3">
                <button
                  type="submit"
                  className="w-full py-3 bg-[#0F2C59] text-amber-100 font-bold text-xs rounded-xl shadow hover:bg-[#1A365D]"
                >
                  Save & Publish Destination
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
