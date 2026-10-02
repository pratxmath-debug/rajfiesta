"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useApp } from "@/context/AppContext";
import {
  Compass,
  Search,
  Heart,
  User,
  Sparkles,
  Menu,
  X,
  ChevronDown,
  ShieldAlert,
  LogOut,
  MapPin,
  Landmark,
  Bed,
  Plane,
  UtensilsCrossed,
  Calendar,
  Layers
} from "lucide-react";

export const Navbar: React.FC = () => {
  const pathname = usePathname();
  const { user, logout, savedPlaceIds, setIsSearchModalOpen } = useApp();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [exploreDropdown, setExploreDropdown] = useState(false);
  const [heritageDropdown, setHeritageDropdown] = useState(false);
  const [travelDropdown, setTravelDropdown] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);

  const isActive = (path: string) => pathname === path;

  return (
    <header className="sticky top-0 z-40 w-full bg-[#FDFBF7]/95 backdrop-blur-md border-b border-[#E8DCCB] transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand Logo & Royal Emblem */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-[#780016] via-[#0F2C59] to-[#780016] p-0.5 shadow-md group-hover:scale-105 transition-transform">
              <div className="w-full h-full rounded-[14px] bg-[#FDFBF7] flex items-center justify-center border border-[#D4AF37]">
                <span className="font-serif font-black text-xl text-[#780016]">R</span>
              </div>
            </div>
            <div>
              <div className="flex items-center space-x-1.5">
                <span className="font-serif font-extrabold text-2xl tracking-tight text-[#0F2C59]">
                  Raj<span className="text-[#780016]">Fiesta</span>
                </span>
                <span className="text-[10px] uppercase font-bold tracking-widest px-1.5 py-0.5 rounded bg-amber-100 text-[#780016] border border-amber-300 hidden sm:inline-block">
                  Rajasthan
                </span>
              </div>
              <p className="text-[11px] font-medium tracking-wide text-stone-500">
                Where Rajasthan Comes Alive
              </p>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1 text-sm font-medium text-stone-700">
            {/* Explore Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setExploreDropdown(true)}
              onMouseLeave={() => setExploreDropdown(false)}
            >
              <button
                className={`flex items-center space-x-1 px-3 py-2 rounded-xl transition-colors ${
                  pathname.startsWith("/explore") || pathname.startsWith("/cities") || pathname.startsWith("/hidden-gems")
                    ? "text-[#780016] font-bold bg-amber-50"
                    : "hover:text-[#780016] hover:bg-stone-100/70"
                }`}
              >
                <span>Explore</span>
                <ChevronDown className="w-3.5 h-3.5" />
              </button>

              {exploreDropdown && (
                <div className="absolute top-full left-0 w-56 bg-white rounded-2xl shadow-xl border border-[#E8DCCB] p-2 space-y-1 animate-in fade-in slide-in-from-top-2 duration-150">
                  <Link
                    href="/explore"
                    className="flex items-center space-x-2.5 p-2 rounded-xl hover:bg-amber-50 text-stone-800 hover:text-[#780016]"
                  >
                    <Compass className="w-4 h-4 text-[#C85A32]" />
                    <div>
                      <div className="font-semibold text-xs">Interactive Map</div>
                      <div className="text-[11px] text-stone-400">Full Rajasthan GIS Atlas</div>
                    </div>
                  </Link>
                  <Link
                    href="/cities"
                    className="flex items-center space-x-2.5 p-2 rounded-xl hover:bg-amber-50 text-stone-800 hover:text-[#780016]"
                  >
                    <MapPin className="w-4 h-4 text-[#780016]" />
                    <div>
                      <div className="font-semibold text-xs">All Cities</div>
                      <div className="text-[11px] text-stone-400">Jaipur, Jodhpur, Udaipur...</div>
                    </div>
                  </Link>
                  <Link
                    href="/hidden-gems"
                    className="flex items-center space-x-2.5 p-2 rounded-xl hover:bg-amber-50 text-stone-800 hover:text-[#780016]"
                  >
                    <Sparkles className="w-4 h-4 text-[#D4AF37]" />
                    <div>
                      <div className="font-semibold text-xs">Hidden Rajasthan</div>
                      <div className="text-[11px] text-stone-400">Secret stepwells & ruins</div>
                    </div>
                  </Link>
                </div>
              )}
            </div>

            {/* Heritage Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setHeritageDropdown(true)}
              onMouseLeave={() => setHeritageDropdown(false)}
            >
              <button
                className={`flex items-center space-x-1 px-3 py-2 rounded-xl transition-colors ${
                  pathname.startsWith("/heritage") || pathname.startsWith("/destinations")
                    ? "text-[#780016] font-bold bg-amber-50"
                    : "hover:text-[#780016] hover:bg-stone-100/70"
                }`}
              >
                <span>Heritage & Stories</span>
                <ChevronDown className="w-3.5 h-3.5" />
              </button>

              {heritageDropdown && (
                <div className="absolute top-full left-0 w-60 bg-white rounded-2xl shadow-xl border border-[#E8DCCB] p-2 space-y-1 animate-in fade-in slide-in-from-top-2 duration-150">
                  <Link
                    href="/heritage"
                    className="flex items-center space-x-2.5 p-2 rounded-xl hover:bg-amber-50 text-stone-800 hover:text-[#780016]"
                  >
                    <Landmark className="w-4 h-4 text-[#780016]" />
                    <div>
                      <div className="font-semibold text-xs">Stories of Rajasthan</div>
                      <div className="text-[11px] text-stone-400">Timelines & Audio chronicles</div>
                    </div>
                  </Link>
                  <Link
                    href="/destinations/mehrangarh-fort"
                    className="flex items-center space-x-2.5 p-2 rounded-xl hover:bg-amber-50 text-stone-800 hover:text-[#780016]"
                  >
                    <Layers className="w-4 h-4 text-[#0F2C59]" />
                    <div>
                      <div className="font-semibold text-xs">Mehrangarh Fort</div>
                      <div className="text-[11px] text-stone-400">Sun City Citadel saga</div>
                    </div>
                  </Link>
                  <Link
                    href="/destinations/amber-fort"
                    className="flex items-center space-x-2.5 p-2 rounded-xl hover:bg-amber-50 text-stone-800 hover:text-[#780016]"
                  >
                    <Layers className="w-4 h-4 text-[#C85A32]" />
                    <div>
                      <div className="font-semibold text-xs">Amber Fort & Palace</div>
                      <div className="text-[11px] text-stone-400">Sheesh Mahal mirror magic</div>
                    </div>
                  </Link>
                </div>
              )}
            </div>

            {/* Travel Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setTravelDropdown(true)}
              onMouseLeave={() => setTravelDropdown(false)}
            >
              <button
                className={`flex items-center space-x-1 px-3 py-2 rounded-xl transition-colors ${
                  pathname.startsWith("/travel")
                    ? "text-[#780016] font-bold bg-amber-50"
                    : "hover:text-[#780016] hover:bg-stone-100/70"
                }`}
              >
                <span>Travel Hub</span>
                <ChevronDown className="w-3.5 h-3.5" />
              </button>

              {travelDropdown && (
                <div className="absolute top-full left-0 w-56 bg-white rounded-2xl shadow-xl border border-[#E8DCCB] p-2 space-y-1 animate-in fade-in slide-in-from-top-2 duration-150">
                  <Link
                    href="/travel?tab=flights"
                    className="flex items-center space-x-2.5 p-2 rounded-xl hover:bg-amber-50 text-stone-800 hover:text-[#780016]"
                  >
                    <Plane className="w-4 h-4 text-sky-600" />
                    <div>
                      <div className="font-semibold text-xs">Flights</div>
                      <div className="text-[11px] text-stone-400">Air routes to Jaipur & Udaipur</div>
                    </div>
                  </Link>
                  <Link
                    href="/travel?tab=trains"
                    className="flex items-center space-x-2.5 p-2 rounded-xl hover:bg-amber-50 text-stone-800 hover:text-[#780016]"
                  >
                    <Layers className="w-4 h-4 text-amber-700" />
                    <div>
                      <div className="font-semibold text-xs">Trains & Royal Rail</div>
                      <div className="text-[11px] text-stone-400">Vande Bharat & Palace on Wheels</div>
                    </div>
                  </Link>
                  <Link
                    href="/travel?tab=buses"
                    className="flex items-center space-x-2.5 p-2 rounded-xl hover:bg-amber-50 text-stone-800 hover:text-[#780016]"
                  >
                    <Compass className="w-4 h-4 text-emerald-600" />
                    <div>
                      <div className="font-semibold text-xs">Buses & Cabs</div>
                      <div className="text-[11px] text-stone-400">Intercity Volvo & Chauffeurs</div>
                    </div>
                  </Link>
                </div>
              )}
            </div>

            <Link
              href="/hotels"
              className={`px-3 py-2 rounded-xl transition-colors ${
                isActive("/hotels") ? "text-[#780016] font-bold bg-amber-50" : "hover:text-[#780016] hover:bg-stone-100/70"
              }`}
            >
              Hotels & Havelis
            </Link>

            <Link
              href="/food-culture"
              className={`px-3 py-2 rounded-xl transition-colors ${
                isActive("/food-culture")
                  ? "text-[#780016] font-bold bg-amber-50"
                  : "hover:text-[#780016] hover:bg-stone-100/70"
              }`}
            >
              Food & Culture
            </Link>

            <Link
              href="/festivals"
              className={`px-3 py-2 rounded-xl transition-colors ${
                isActive("/festivals")
                  ? "text-[#780016] font-bold bg-amber-50"
                  : "hover:text-[#780016] hover:bg-stone-100/70"
              }`}
            >
              Festivals
            </Link>

            {/* AI Trip Planner Highlight CTA */}
            <Link
              href="/planner"
              className="flex items-center space-x-1.5 px-3.5 py-1.5 bg-gradient-to-r from-[#D4AF37] to-[#E5A93C] text-[#0F2C59] font-bold rounded-xl shadow-sm hover:shadow-md transition-all hover:scale-105"
            >
              <Sparkles className="w-4 h-4 fill-current text-[#780016]" />
              <span>AI Planner</span>
            </Link>
          </nav>

          {/* Right Action Icons */}
          <div className="flex items-center space-x-2 sm:space-x-3">
            {/* Quick Search Button */}
            <button
              onClick={() => setIsSearchModalOpen(true)}
              className="flex items-center space-x-2 px-3 py-2 bg-stone-100 hover:bg-stone-200 text-stone-600 rounded-xl transition-colors text-xs"
              title="Search RajFiesta (Cmd+K)"
            >
              <Search className="w-4 h-4 text-[#C85A32]" />
              <span className="hidden md:inline">Search...</span>
              <kbd className="hidden md:inline text-[10px] bg-white px-1.5 py-0.5 rounded border border-stone-300 text-stone-400">
                ⌘K
              </kbd>
            </button>

            {/* Wishlist Heart Icon with counter */}
            <Link
              href="/dashboard#saved"
              className="relative p-2.5 text-stone-700 hover:text-[#780016] hover:bg-amber-50 rounded-xl transition-colors"
              title="Saved Places & Wishlist"
            >
              <Heart className="w-5 h-5 text-[#780016]" />
              {savedPlaceIds.length > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-[#780016] text-amber-200 text-[10px] font-bold rounded-full flex items-center justify-center border-2 border-white shadow">
                  {savedPlaceIds.length}
                </span>
              )}
            </Link>

            {/* User Profile / Login */}
            {user ? (
              <div className="relative">
                <button
                  onClick={() => setUserMenuOpen(!userMenuOpen)}
                  className="flex items-center space-x-2 p-1.5 hover:bg-amber-50 rounded-xl transition-colors"
                >
                  <img
                    src={user.avatar}
                    alt={user.name}
                    className="w-8 h-8 rounded-full object-cover border border-[#D4AF37]"
                  />
                  <span className="text-xs font-semibold text-stone-800 hidden sm:inline max-w-[100px] truncate">
                    {user.name.split(" ")[0]}
                  </span>
                  <ChevronDown className="w-3 h-3 text-stone-400" />
                </button>

                {userMenuOpen && (
                  <div className="absolute right-0 top-full mt-2 w-56 bg-white rounded-2xl shadow-xl border border-[#E8DCCB] p-2 space-y-1 animate-in fade-in duration-150 z-50">
                    <div className="px-3 py-2 border-b border-stone-100">
                      <div className="text-xs font-bold text-stone-900">{user.name}</div>
                      <div className="text-[11px] text-stone-500 truncate">{user.email}</div>
                    </div>
                    <Link
                      href="/dashboard"
                      onClick={() => setUserMenuOpen(false)}
                      className="flex items-center space-x-2 px-3 py-2 text-xs text-stone-700 hover:bg-amber-50 hover:text-[#780016] rounded-xl font-medium"
                    >
                      <User className="w-4 h-4 text-[#0F2C59]" />
                      <span>User Dashboard</span>
                    </Link>
                    <Link
                      href="/admin"
                      onClick={() => setUserMenuOpen(false)}
                      className="flex items-center space-x-2 px-3 py-2 text-xs text-stone-700 hover:bg-amber-50 hover:text-[#780016] rounded-xl font-medium"
                    >
                      <ShieldAlert className="w-4 h-4 text-[#C85A32]" />
                      <span>Admin Management</span>
                    </Link>
                    <button
                      onClick={() => {
                        setUserMenuOpen(false);
                        logout();
                      }}
                      className="w-full flex items-center space-x-2 px-3 py-2 text-xs text-rose-700 hover:bg-rose-50 rounded-xl font-medium"
                    >
                      <LogOut className="w-4 h-4" />
                      <span>Sign Out</span>
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <Link
                href="/login"
                className="px-4 py-2 bg-[#0F2C59] hover:bg-[#1A365D] text-amber-100 text-xs font-semibold rounded-xl shadow transition-colors"
              >
                Log In
              </Link>
            )}

            {/* Mobile Menu Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-stone-700 hover:text-[#780016] rounded-xl"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-[#E8DCCB] bg-[#FDFBF7] px-4 pt-3 pb-6 space-y-3 animate-in slide-in-from-top-3">
          <div className="grid grid-cols-2 gap-2 text-xs font-semibold text-stone-800">
            <Link
              href="/explore"
              onClick={() => setMobileMenuOpen(false)}
              className="p-3 bg-amber-50 rounded-xl flex items-center space-x-2"
            >
              <Compass className="w-4 h-4 text-[#C85A32]" />
              <span>Interactive Map</span>
            </Link>
            <Link
              href="/cities"
              onClick={() => setMobileMenuOpen(false)}
              className="p-3 bg-amber-50 rounded-xl flex items-center space-x-2"
            >
              <MapPin className="w-4 h-4 text-[#780016]" />
              <span>All Cities</span>
            </Link>
            <Link
              href="/heritage"
              onClick={() => setMobileMenuOpen(false)}
              className="p-3 bg-amber-50 rounded-xl flex items-center space-x-2"
            >
              <Landmark className="w-4 h-4 text-[#0F2C59]" />
              <span>Heritage & Stories</span>
            </Link>
            <Link
              href="/hidden-gems"
              onClick={() => setMobileMenuOpen(false)}
              className="p-3 bg-amber-50 rounded-xl flex items-center space-x-2"
            >
              <Sparkles className="w-4 h-4 text-[#D4AF37]" />
              <span>Hidden Gems</span>
            </Link>
            <Link
              href="/travel"
              onClick={() => setMobileMenuOpen(false)}
              className="p-3 bg-stone-100 rounded-xl flex items-center space-x-2"
            >
              <Plane className="w-4 h-4 text-sky-600" />
              <span>Travel Booking</span>
            </Link>
            <Link
              href="/hotels"
              onClick={() => setMobileMenuOpen(false)}
              className="p-3 bg-stone-100 rounded-xl flex items-center space-x-2"
            >
              <Bed className="w-4 h-4 text-stone-700" />
              <span>Hotels & Havelis</span>
            </Link>
            <Link
              href="/food-culture"
              onClick={() => setMobileMenuOpen(false)}
              className="p-3 bg-stone-100 rounded-xl flex items-center space-x-2"
            >
              <UtensilsCrossed className="w-4 h-4 text-amber-700" />
              <span>Food & Culture</span>
            </Link>
            <Link
              href="/festivals"
              onClick={() => setMobileMenuOpen(false)}
              className="p-3 bg-stone-100 rounded-xl flex items-center space-x-2"
            >
              <Calendar className="w-4 h-4 text-rose-700" />
              <span>Festivals</span>
            </Link>
          </div>

          <Link
            href="/planner"
            onClick={() => setMobileMenuOpen(false)}
            className="w-full flex items-center justify-center space-x-2 py-3 bg-gradient-to-r from-[#D4AF37] to-[#E5A93C] text-[#0F2C59] font-bold text-sm rounded-xl shadow-md"
          >
            <Sparkles className="w-4 h-4 fill-current text-[#780016]" />
            <span>AI Trip Planner</span>
          </Link>
        </div>
      )}
    </header>
  );
};
