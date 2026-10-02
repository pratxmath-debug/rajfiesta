export interface Hotel {
  id: string;
  name: string;
  cityId: string;
  cityName: string;
  type: "Luxury Palace" | "Heritage Haveli" | "Desert Camp" | "Boutique & Hostel";
  pricePerNight: number;
  rating: number;
  reviewsCount: number;
  image: string;
  description: string;
  amenities: string[];
  address: string;
  features: string[];
  bookingUrl: string;
}

export interface FlightRoute {
  id: string;
  from: string;
  to: string;
  airline: string;
  flightNumber: string;
  departure: string;
  arrival: string;
  duration: string;
  price: number;
  stops: "Non-stop" | "1 Stop";
}

export interface TrainRoute {
  id: string;
  trainNumber: string;
  name: string;
  from: string;
  to: string;
  departure: string;
  arrival: string;
  duration: string;
  classes: { className: string; fare: number; availability: string }[];
  runsOn: string[];
}

export interface BusRoute {
  id: string;
  operator: string;
  busType: string;
  from: string;
  to: string;
  departure: string;
  arrival: string;
  duration: string;
  price: number;
  rating: number;
}

export interface CabService {
  id: string;
  vehicleType: string;
  model: string;
  capacity: string;
  perKmRate: number;
  baseFare: number;
  image: string;
  features: string[];
}

export const HOTELS: Hotel[] = [
  {
    id: "umaid-bhawan-palace",
    name: "Umaid Bhawan Palace",
    cityId: "jodhpur",
    cityName: "Jodhpur",
    type: "Luxury Palace",
    pricePerNight: 42000,
    rating: 4.9,
    reviewsCount: 1250,
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80",
    description: "One of the world's largest private royal residences, designed by Edwardian architect Henry Lanchester in golden Chittar sandstone, offering world-class Taj hospitality.",
    amenities: ["Palace Gardens", "Subterranean Zodiac Pool", "Polo Bar", "Royal Spa", "Fine Dining", "Butler Service"],
    address: "Circuit House Rd, Cantt Area, Jodhpur",
    features: ["Former Maharaja's residence", "64 Art Deco rooms", "Museum inside"],
    bookingUrl: "https://www.booking.com"
  },
  {
    id: "taj-lake-palace",
    name: "Taj Lake Palace",
    cityId: "udaipur",
    cityName: "Udaipur",
    type: "Luxury Palace",
    pricePerNight: 48000,
    rating: 4.9,
    reviewsCount: 1840,
    image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80",
    description: "An 18th-century floating white marble island palace anchored in the serene waters of Lake Pichola, reached exclusively by private royal speedboat.",
    amenities: ["Private Boat Transfer", "Jharokha Lake Views", "Jiva Spa Boat", "Rooftop Restaurant", "Pool"],
    address: "Pichola, Udaipur, Rajasthan",
    features: ["Built in 1746 by Maharana Jagat Singh II", "Filmed in James Bond Octopussy"],
    bookingUrl: "https://www.booking.com"
  },
  {
    id: "rambagh-palace",
    name: "Rambagh Palace",
    cityId: "jaipur",
    cityName: "Jaipur",
    type: "Luxury Palace",
    pricePerNight: 45000,
    rating: 4.9,
    reviewsCount: 1530,
    image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80",
    description: "The 'Jewel of Jaipur', former residence of the Maharaja of Jaipur surrounded by 47 acres of Mughal manicured gardens with roaming peacocks.",
    amenities: ["Mughal Gardens", "Vintage Car Arrival", "Polo Lounge", "Indoor Heated Pool", "Steam Bath"],
    address: "Bhawani Singh Rd, Rambagh, Jaipur",
    features: ["Ranked No. 1 Hotel in the World by TripAdvisor", "Peacock lawns"],
    bookingUrl: "https://www.booking.com"
  },
  {
    id: "alsisar-haveli",
    name: "Alsisar Haveli Heritage Hotel",
    cityId: "jaipur",
    cityName: "Jaipur",
    type: "Heritage Haveli",
    pricePerNight: 6500,
    rating: 4.7,
    reviewsCount: 890,
    image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1200&q=80",
    description: "An authentic 1892 Rajput noble haveli tucked in the heart of the walled Pink City, featuring frescoed alcoves and peaceful courtyards.",
    amenities: ["Central Courtyard Pool", "Traditional Dining", "Reading Library", "Folk Performances", "WiFi"],
    address: "Sansar Chandra Rd, Sindhi Camp, Jaipur",
    features: ["Antique four-poster beds", "Hand-painted frescoes", "Walking distance to bazaars"],
    bookingUrl: "https://www.booking.com"
  },
  {
    id: "samode-haveli",
    name: "Samode Haveli",
    cityId: "jaipur",
    cityName: "Jaipur",
    type: "Heritage Haveli",
    pricePerNight: 12000,
    rating: 4.8,
    reviewsCount: 670,
    image: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&w=1200&q=80",
    description: "A 225-year-old regal mansion restored into a luxurious urban sanctuary, famous for its Moorish-style pool and exquisite private dining verandahs.",
    amenities: ["Moorish Swimming Pool", "Ayurvedic Spa", "Open-air Dining", "Lush Courtyards", "Bar"],
    address: "Near Jorawar Singh Gate, Gangapole, Jaipur",
    features: ["Hand-painted ceiling murals", "Jacuzzi", "Heritage architectural arches"],
    bookingUrl: "https://www.booking.com"
  },
  {
    id: "jodhpur-heritage-haveli",
    name: "Pal Haveli Heritage Stay",
    cityId: "jodhpur",
    cityName: "Jodhpur",
    type: "Heritage Haveli",
    pricePerNight: 4500,
    rating: 4.6,
    reviewsCount: 920,
    image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=1200&q=80",
    description: "A living 18th-century aristocratic haveli directly opposite the Clock Tower, featuring a rooftop terrace with panoramic Mehrangarh views.",
    amenities: ["Rooftop Restaurant with Fort View", "Heritage Furniture", "Free High-Speed WiFi", "Walking Tours"],
    address: "Gulab Sagar, Clock Tower, Jodhpur",
    features: ["Rooftop view of illuminated fort", "Traditional Marwari thali"],
    bookingUrl: "https://www.booking.com"
  },
  {
    id: "sam-sand-dunes-camp",
    name: "Royal Desert Camp & Luxury Swiss Tents",
    cityId: "jaisalmer",
    cityName: "Jaisalmer",
    type: "Desert Camp",
    pricePerNight: 3500,
    rating: 4.6,
    reviewsCount: 1140,
    image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=1200&q=80",
    description: "Swiss luxury tents pitched amidst the golden ripples of Sam Sand Dunes, with evening Kalbelia dance performances, camel safaris, and campfires.",
    amenities: ["Camel Dune Safari", "Campfire & Folk Music", "Buffet Dinner", "Attached Bathroom", "Jeep Dune Bashing"],
    address: "Sam Sand Dunes, Jaisalmer",
    features: ["Stargazing under clear desert sky", "Live Manganiyar melodies", "Sunset camel rides"],
    bookingUrl: "https://www.booking.com"
  },
  {
    id: "zostel-jodhpur",
    name: "Zostel Jodhpur",
    cityId: "jodhpur",
    cityName: "Jodhpur",
    type: "Boutique & Hostel",
    pricePerNight: 850,
    rating: 4.8,
    reviewsCount: 2100,
    image: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=1200&q=80",
    description: "Vibrant backpacker hub located in the heart of the Old Blue City, offering both social dorms and private heritage rooms with rooftop fort views.",
    amenities: ["Rooftop Cafe", "Common Gaming Room", "Travel Desk", "Free WiFi", "AC Dorms"],
    address: "Makrana Mohalla, Jodhpur",
    features: ["Ideal for solo and budget travelers", "Daily Blue City walking tours", "Cafe with fort view"],
    bookingUrl: "https://www.zostel.com"
  },
  {
    id: "moustache-jaipur",
    name: "Moustache Jaipur",
    cityId: "jaipur",
    cityName: "Jaipur",
    type: "Boutique & Hostel",
    pricePerNight: 950,
    rating: 4.7,
    reviewsCount: 1980,
    image: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1200&q=80",
    description: "A trendy boutique hostel adorned with Rajasthani street art, private balconies, and a vibrant social terrace community.",
    amenities: ["Rooftop Cafe", "Coworking Space", "Community Kitchen", "City Tours", "Luggage Storage"],
    address: "Park House Link Rd, MI Road, Jaipur",
    features: ["Boutique private rooms", "Weekly cultural events", "Craft workshops"],
    bookingUrl: "https://www.moustachescapes.com"
  }
];

export const FLIGHTS: FlightRoute[] = [
  {
    id: "fl-1",
    from: "New Delhi (DEL)",
    to: "Jaipur (JAI)",
    airline: "IndiGo",
    flightNumber: "6E-2051",
    departure: "07:15 AM",
    arrival: "08:10 AM",
    duration: "55m",
    price: 2450,
    stops: "Non-stop"
  },
  {
    id: "fl-2",
    from: "Mumbai (BOM)",
    to: "Jaipur (JAI)",
    airline: "Air India",
    flightNumber: "AI-611",
    departure: "09:30 AM",
    arrival: "11:20 AM",
    duration: "1h 50m",
    price: 4300,
    stops: "Non-stop"
  },
  {
    id: "fl-3",
    from: "New Delhi (DEL)",
    to: "Udaipur (UDR)",
    airline: "IndiGo",
    flightNumber: "6E-2124",
    departure: "11:45 AM",
    arrival: "01:05 PM",
    duration: "1h 20m",
    price: 3600,
    stops: "Non-stop"
  },
  {
    id: "fl-4",
    from: "Mumbai (BOM)",
    to: "Jodhpur (JDH)",
    airline: "IndiGo",
    flightNumber: "6E-5319",
    departure: "01:10 PM",
    arrival: "02:40 PM",
    duration: "1h 30m",
    price: 4800,
    stops: "Non-stop"
  },
  {
    id: "fl-5",
    from: "New Delhi (DEL)",
    to: "Jaisalmer (JSA)",
    airline: "SpiceJet",
    flightNumber: "SG-2983",
    departure: "08:50 AM",
    arrival: "10:35 AM",
    duration: "1h 45m",
    price: 5200,
    stops: "Non-stop"
  }
];

export const TRAINS: TrainRoute[] = [
  {
    id: "tr-1",
    trainNumber: "20978",
    name: "Delhi Cantt – Ajmer Vande Bharat Express",
    from: "New Delhi (DEC)",
    to: "Jaipur (JP) / Ajmer (AII)",
    departure: "06:10 AM",
    arrival: "10:05 AM (Jaipur) / 12:15 PM (Ajmer)",
    duration: "3h 55m",
    runsOn: ["Mon", "Tue", "Thu", "Fri", "Sat", "Sun"],
    classes: [
      { className: "Chair Car (CC)", fare: 1050, availability: "Available 48" },
      { className: "Exec Chair Car (EC)", fare: 1980, availability: "Available 12" }
    ]
  },
  {
    id: "tr-2",
    trainNumber: "12461",
    name: "Mandore Superfast Express",
    from: "Old Delhi (DLI)",
    to: "Jodhpur (JU)",
    departure: "09:20 PM",
    arrival: "07:50 AM",
    duration: "10h 30m",
    runsOn: ["Daily"],
    classes: [
      { className: "1st AC (1A)", fare: 2650, availability: "Available 4" },
      { className: "2nd AC (2A)", fare: 1580, availability: "Available 18" },
      { className: "3rd AC (3A)", fare: 1120, availability: "Available 36" },
      { className: "Sleeper (SL)", fare: 420, availability: "Available 75" }
    ]
  },
  {
    id: "tr-3",
    trainNumber: "20473",
    name: "Chetak Express",
    from: "Delhi Sarai Rohilla (DEE)",
    to: "Udaipur City (UDZ)",
    departure: "07:40 PM",
    arrival: "07:50 AM",
    duration: "12h 10m",
    runsOn: ["Daily"],
    classes: [
      { className: "2nd AC (2A)", fare: 1720, availability: "Available 14" },
      { className: "3rd AC (3A)", fare: 1210, availability: "Available 42" },
      { className: "Sleeper (SL)", fare: 450, availability: "RAC 12" }
    ]
  },
  {
    id: "tr-4",
    trainNumber: "ROYAL-01",
    name: "Palace on Wheels (Luxury Heritage Rail)",
    from: "New Delhi (Safdarjung)",
    to: "Jaipur – Sawai Madhopur – Chittorgarh – Udaipur – Jaisalmer – Jodhpur – Bharatpur – Agra",
    departure: "04:30 PM (Wednesdays)",
    arrival: "07-Night Royal Circuit",
    duration: "7 Nights / 8 Days",
    runsOn: ["Weekly"],
    classes: [
      { className: "Deluxe Cabin", fare: 54000, availability: "Inquire Now" },
      { className: "Super Deluxe Suite", fare: 95000, availability: "2 Suites Left" }
    ]
  }
];

export const BUSES: BusRoute[] = [
  {
    id: "bus-1",
    operator: "RSRTC Royal Goldline",
    busType: "Volvo Multi-Axle AC Sleeper",
    from: "Delhi Kashmere Gate",
    to: "Jaipur Sindhi Camp",
    departure: "06:30 AM",
    arrival: "11:15 AM",
    duration: "4h 45m",
    price: 650,
    rating: 4.6
  },
  {
    id: "bus-2",
    operator: "Jain Travels",
    busType: "Bharat Benz AC Sleeper (2+1)",
    from: "Jaipur Sindhi Camp",
    to: "Jodhpur Paota Circle",
    departure: "11:00 PM",
    arrival: "05:00 AM",
    duration: "6h 00m",
    price: 800,
    rating: 4.7
  },
  {
    id: "bus-3",
    operator: "Shrinath Travels",
    busType: "Scania Multi-Axle AC Sleeper",
    from: "Jodhpur",
    to: "Jaisalmer Gadisar Chauraha",
    departure: "07:00 AM",
    arrival: "11:45 AM",
    duration: "4h 45m",
    price: 550,
    rating: 4.5
  },
  {
    id: "bus-4",
    operator: "Rishabh Travels",
    busType: "Volvo AC Sleeper",
    from: "Udaipur Paras Circle",
    to: "Ahmedabad Geeta Mandir",
    departure: "02:00 PM",
    arrival: "06:30 PM",
    duration: "4h 30m",
    price: 500,
    rating: 4.8
  }
];

export const CAB_SERVICES: CabService[] = [
  {
    id: "cab-sedan",
    vehicleType: "Sedan (AC)",
    model: "Dzire / Etios / Aura",
    capacity: "4 Passengers + 2 Bags",
    perKmRate: 11,
    baseFare: 2200,
    image: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=600&q=80",
    features: ["Air Conditioned", "Experienced Chauffeur", "Toll & State Taxes included", "24x7 Support"]
  },
  {
    id: "cab-suv",
    vehicleType: "SUV / MPV (AC)",
    model: "Innova Crysta / Ertiga",
    capacity: "6-7 Passengers + 4 Bags",
    perKmRate: 16,
    baseFare: 3600,
    image: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=600&q=80",
    features: ["Captain Recliner Seats", "High-altitude luggage carrier", "Desert certified driver", "Chilled bottled water"]
  },
  {
    id: "cab-tempo",
    vehicleType: "Royal Maharaja Tempo Traveller",
    model: "Force Traveller (12-Seater)",
    capacity: "12-16 Passengers + Large Luggage",
    perKmRate: 24,
    baseFare: 5500,
    image: "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?auto=format&fit=crop&w=600&q=80",
    features: ["Pushback Luxury Seats", "LED TV & Audio System", "Family & Group Tour Specialist", "First Aid Kit"]
  }
];
