"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

export interface UserProfile {
  id: string;
  name: string;
  email: string;
  role: "tourist" | "admin";
  avatar: string;
  joinedDate: string;
}

export interface SavedTrip {
  id: string;
  title: string;
  startCity: string;
  days: number;
  travelStyle: string;
  totalBudget: number;
  companions: string;
  createdAt: string;
  itinerary: {
    day: number;
    city: string;
    activities: { time: string; title: string; cost: number; notes: string }[];
  }[];
}

interface ToastMessage {
  id: string;
  message: string;
  type: "success" | "info" | "royal";
}

interface AppContextType {
  user: UserProfile | null;
  login: (email: string, name?: string, role?: "tourist" | "admin") => void;
  logout: () => void;
  savedPlaceIds: string[];
  toggleSavePlace: (id: string, name?: string) => void;
  isPlaceSaved: (id: string) => boolean;
  visitedPlaceIds: string[];
  toggleVisitedPlace: (id: string) => void;
  isPlaceVisited: (id: string) => boolean;
  trips: SavedTrip[];
  saveTrip: (trip: SavedTrip) => void;
  deleteTrip: (id: string) => void;
  toasts: ToastMessage[];
  addToast: (message: string, type?: "success" | "info" | "royal") => void;
  removeToast: (id: string) => void;
  isSearchModalOpen: boolean;
  setIsSearchModalOpen: (open: boolean) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

const DEFAULT_USER: UserProfile = {
  id: "user-yashi",
  name: "Yashi Sharma",
  email: "yashi.sharma@rajfiesta.in",
  role: "tourist",
  avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
  joinedDate: "October 2026"
};

const INITIAL_TRIPS: SavedTrip[] = [
  {
    id: "trip-royal-circuit",
    title: "5-Day Royal Golden Triangle & Marwar",
    startCity: "New Delhi",
    days: 5,
    travelStyle: "Heritage & Palaces",
    totalBudget: 24500,
    companions: "Friends",
    createdAt: "2026-09-28",
    itinerary: [
      {
        day: 1,
        city: "Jaipur",
        activities: [
          { time: "09:00 AM", title: "Explore Amber Fort & Maota Lake", cost: 100, notes: "Early morning to avoid heat and catch elephant paths" },
          { time: "01:30 PM", title: "Royal Lunch at LMB (Dal Baati Churma)", cost: 650, notes: "Authentic Marwari ghee indulgence" },
          { time: "04:00 PM", title: "Hawa Mahal & Rooftop Photography", cost: 50, notes: "View from Wind View Cafe opposite" },
          { time: "07:00 PM", title: "Stroll through Johari & Bapu Bazaars", cost: 0, notes: "Blue pottery and lac bangles shopping" }
        ]
      },
      {
        day: 2,
        city: "Jaipur → Pushkar",
        activities: [
          { time: "08:30 AM", title: "City Palace & Jantar Mantar celestial instruments", cost: 300, notes: "Vidyadhar architectural wonders" },
          { time: "01:00 PM", title: "Scenic drive across Nag Pahar pass to Pushkar", cost: 400, notes: "En route stop for hot Malpua in Halwai Gali" },
          { time: "05:30 PM", title: "Sunset Maha Aarti on Pushkar Lake Ghats", cost: 0, notes: "52 holy bathing ghats with floating diyas" }
        ]
      },
      {
        day: 3,
        city: "Pushkar → Jodhpur",
        activities: [
          { time: "07:00 AM", title: "Morning blessing at Lord Brahma Temple", cost: 0, notes: "Rare sanctum in the world" },
          { time: "11:00 AM", title: "Express transit to the Blue City (Jodhpur)", cost: 500, notes: "Check-in at heritage haveli" },
          { time: "03:30 PM", title: "Mehrangarh Fort ramparts & Daulat Khana", cost: 100, notes: "Golden hour over indigo rooftops" },
          { time: "07:30 PM", title: "Makhaniya Lassi at Clock Tower", cost: 80, notes: "Mishrilal's iconic cream-layered lassi" }
        ]
      }
    ]
  }
];

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<UserProfile | null>(DEFAULT_USER);
  const [savedPlaceIds, setSavedPlaceIds] = useState<string[]>(["mehrangarh-fort", "amber-fort", "chand-baori", "city-palace-udaipur", "jaisalmer-fort"]);
  const [visitedPlaceIds, setVisitedPlaceIds] = useState<string[]>(["amber-fort", "hawa-mahal"]);
  const [trips, setTrips] = useState<SavedTrip[]>(INITIAL_TRIPS);
  const [toasts, setToasts] = useState<ToastMessage[]>([]);
  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);

  // Initialize from LocalStorage
  useEffect(() => {
    try {
      const storedSaved = localStorage.getItem("rajfiesta_saved_places");
      if (storedSaved) setSavedPlaceIds(JSON.parse(storedSaved));

      const storedVisited = localStorage.getItem("rajfiesta_visited_places");
      if (storedVisited) setVisitedPlaceIds(JSON.parse(storedVisited));

      const storedTrips = localStorage.getItem("rajfiesta_trips");
      if (storedTrips) setTrips(JSON.parse(storedTrips));

      const storedUser = localStorage.getItem("rajfiesta_user");
      if (storedUser) setUser(JSON.parse(storedUser));
    } catch {
      // LocalStorage access fallback
    }
  }, []);

  const addToast = (message: string, type: "success" | "info" | "royal" = "royal") => {
    const id = Date.now().toString() + Math.random().toString(36).substr(2, 4);
    setToasts((prev) => [...prev, { id, message, type }]);
    setTimeout(() => {
      removeToast(id);
    }, 4000);
  };

  const removeToast = (id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  const login = (email: string, name = "Traveler", role: "tourist" | "admin" = "tourist") => {
    const loggedUser: UserProfile = {
      id: "user-" + Date.now(),
      name,
      email,
      role,
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
      joinedDate: "October 2026"
    };
    setUser(loggedUser);
    try {
      localStorage.setItem("rajfiesta_user", JSON.stringify(loggedUser));
    } catch {}
    addToast(`Padharo Mhare Desh! Welcome back, ${name} 🙏`, "royal");
  };

  const logout = () => {
    setUser(null);
    try {
      localStorage.removeItem("rajfiesta_user");
    } catch {}
    addToast("Signed out successfully. Khamma Ghani!", "info");
  };

  const toggleSavePlace = (id: string, name?: string) => {
    setSavedPlaceIds((prev) => {
      let updated: string[];
      if (prev.includes(id)) {
        updated = prev.filter((item) => item !== id);
        addToast(`Removed ${name || "destination"} from your saved list`, "info");
      } else {
        updated = [...prev, id];
        addToast(`Added ${name || "destination"} to your Royal Wishlist ✨`, "royal");
      }
      try {
        localStorage.setItem("rajfiesta_saved_places", JSON.stringify(updated));
      } catch {}
      return updated;
    });
  };

  const isPlaceSaved = (id: string) => savedPlaceIds.includes(id);

  const toggleVisitedPlace = (id: string) => {
    setVisitedPlaceIds((prev) => {
      const updated = prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id];
      try {
        localStorage.setItem("rajfiesta_visited_places", JSON.stringify(updated));
      } catch {}
      addToast(
        prev.includes(id) ? "Marked as unvisited" : "Splendid! Marked as visited in your Rajasthan Passport 🚩",
        "royal"
      );
      return updated;
    });
  };

  const isPlaceVisited = (id: string) => visitedPlaceIds.includes(id);

  const saveTrip = (newTrip: SavedTrip) => {
    setTrips((prev) => {
      const updated = [newTrip, ...prev];
      try {
        localStorage.setItem("rajfiesta_trips", JSON.stringify(updated));
      } catch {}
      return updated;
    });
    addToast(`Itinerary "${newTrip.title}" saved to your trips! 🏰`, "royal");
  };

  const deleteTrip = (id: string) => {
    setTrips((prev) => {
      const updated = prev.filter((t) => t.id !== id);
      try {
        localStorage.setItem("rajfiesta_trips", JSON.stringify(updated));
      } catch {}
      return updated;
    });
    addToast("Trip itinerary deleted", "info");
  };

  return (
    <AppContext.Provider
      value={{
        user,
        login,
        logout,
        savedPlaceIds,
        toggleSavePlace,
        isPlaceSaved,
        visitedPlaceIds,
        toggleVisitedPlace,
        isPlaceVisited,
        trips,
        saveTrip,
        deleteTrip,
        toasts,
        addToast,
        removeToast,
        isSearchModalOpen,
        setIsSearchModalOpen
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useApp must be used within an AppProvider");
  }
  return context;
};
