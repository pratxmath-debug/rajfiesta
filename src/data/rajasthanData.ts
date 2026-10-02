export interface City {
  id: string;
  name: string;
  slug: string;
  nickname: string;
  tagline: string;
  district: string;
  coordinates: { lat: number; lng: number };
  mapPosition: { x: number; y: number }; // Relative position on 1000x850 SVG map
  image: string;
  description: string;
  history: string;
  bestTime: string;
  idealDays: string;
  mustVisitIds: string[];
  hiddenGemIds: string[];
  localFood: { name: string; description: string; bestPlace: string }[];
  howToReach: {
    flight: string;
    train: string;
    bus: string;
    cab: string;
  };
  nearbyExcursions: { name: string; distance: string; highlight: string }[];
}

export interface Destination {
  id: string;
  name: string;
  slug: string;
  cityId: string;
  cityName: string;
  category: "fort" | "palace" | "temple" | "lake" | "wildlife" | "hidden-gem" | "museum" | "market" | "stepwell";
  coordinates: { lat: number; lng: number };
  mapPosition: { x: number; y: number };
  image: string;
  description: string;
  history: string;
  architecture: string;
  legends: string;
  openingTime: string;
  closingTime: string;
  entryFee: {
    indian: number;
    foreigner: number;
    camera?: number;
  };
  rating: number;
  reviewsCount: number;
  bestTime: string;
  isHiddenGem: boolean;
  tags: string[];
}

export const CITIES: City[] = [
  {
    id: "jaipur",
    name: "Jaipur",
    slug: "jaipur",
    nickname: "The Pink City",
    tagline: "India's Royal Capital of Palaces & Jharokhas",
    district: "Jaipur",
    coordinates: { lat: 26.9124, lng: 75.7873 },
    mapPosition: { x: 670, y: 390 },
    image: "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1200&q=80",
    description: "Founded in 1727 by Maharaja Sawai Jai Singh II, Jaipur is a UNESCO World Heritage city renowned for its terracotta-pink walls, grand hill forts, celestial observatories, and vibrant bazaars.",
    history: "Planned according to ancient Vastu Shastra and Shilpa Shastra under the visionary architect Vidyadhar Bhattacharya, Jaipur was painted pink in 1876 to welcome the Prince of Wales, a color symbolizing warm Rajput hospitality.",
    bestTime: "October to March (15°C – 28°C)",
    idealDays: "2 – 3 Days",
    mustVisitIds: ["amber-fort", "hawa-mahal", "city-palace-jaipur", "jantar-mantar-jaipur", "nahargarh-fort"],
    hiddenGemIds: ["chand-baori", "bhangarh-fort", "panna-meena-kund", "galta-ji-temple"],
    localFood: [
      { name: "Pyaaz Kachori", description: "Crisp golden pastry stuffed with spicy caramelised onions.", bestPlace: "Rawat Mishtan Bhandar" },
      { name: "Dal Baati Churma", description: "Wood-fired wheat dough balls soaked in pure desi ghee with spiced lentils and sweetened powdered wheat.", bestPlace: "LMB (Laxmi Mishtan Bhandar)" },
      { name: "Ghewar", description: "Honeycomb disc sweet soaked in saffron sugar syrup and topped with rabri.", bestPlace: "Sambhar Fini & Ghewar Wale" }
    ],
    howToReach: {
      flight: "Jaipur International Airport (JAI) connects directly to all major Indian metro hubs and Dubai/Sharjah.",
      train: "Jaipur Junction is a primary hub serviced by Vande Bharat, Shatabdi, and Superfast express trains from Delhi, Mumbai, and Kolkata.",
      bus: "RSRTC operates premium Volvo AC buses from Delhi ISBT (4.5 hrs) and all Rajasthan district capitals.",
      cab: "NH48 Delhi-Jaipur Expressway offers a smooth 4-5 hour drive with modern wayside amenities."
    },
    nearbyExcursions: [
      { name: "Abhaneri (Chand Baori)", distance: "95 km", highlight: "1,200-year-old geometric 3,500-step labyrinth" },
      { name: "Bhangarh Fort", distance: "85 km", highlight: "Legendary 17th-century ruined fort enveloped in desert folklore" },
      { name: "Samode Palace", distance: "42 km", highlight: "Exquisite frescoed palace nestled in the Aravalli hills" }
    ]
  },
  {
    id: "jodhpur",
    name: "Jodhpur",
    slug: "jodhpur",
    nickname: "The Blue City",
    tagline: "The Sun City of Marwar & Impregnable Citadel",
    district: "Jodhpur",
    coordinates: { lat: 26.2389, lng: 73.0243 },
    mapPosition: { x: 380, y: 460 },
    image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=1200&q=80",
    description: "Sprawled beneath the colossal cliff-top ramparts of Mehrangarh Fort, Jodhpur gleams in cobalt and indigo hues. It is the heart of Marwar's chivalry, Polo traditions, and desert craftsmanship.",
    history: "Founded in 1459 by Rao Jodha of the Rathore clan, Jodhpur prospered on the overland Silk Route trading opium, copper, and fine textiles. The indigo-painted houses originally denoted Brahmin residences and kept interiors cool under the scorching sun.",
    bestTime: "November to February (12°C – 26°C)",
    idealDays: "2 – 3 Days",
    mustVisitIds: ["mehrangarh-fort", "jaswant-thada", "umaid-bhawan-palace", "mandore-gardens"],
    hiddenGemIds: ["toorji-ka-jhalra", "osian-temples", "khimsar-dunes"],
    localFood: [
      { name: "Makhaniya Lassi", description: "Ultra-thick saffron-cardamom yogurt drink topped with a dollop of white butter (makhan).", bestPlace: "Shri Mishrilal Hotel, Clock Tower" },
      { name: "Mirchi Bada", description: "Large Bhavnagri chili stuffed with spiced potato mix, battered in gram flour and fried to golden crunch.", bestPlace: "Choudhary Mirchi Bada" },
      { name: "Mawa Kachori", description: "Sweet puffed kachori filled with sweetened condensed milk (mawa) and dry fruits, dipped in sugar syrup.", bestPlace: "Jodhpur Sweets" }
    ],
    howToReach: {
      flight: "Jodhpur Airport (JDH) offers regular daily flights from Delhi, Mumbai, Bengaluru, and Ahmedabad.",
      train: "Connected via Mandore Express, Suryanagari Express, and Jodhpur Vande Bharat Express.",
      bus: "Frequent overnight sleeper buses connect Jodhpur to Jaipur, Udaipur, Jaisalmer, and Ahmedabad.",
      cab: "Excellent 4-lane highway connects Jaipur to Jodhpur (330 km, 5.5 hours)."
    },
    nearbyExcursions: [
      { name: "Osian Desert Oasis", distance: "65 km", highlight: "8th-century sand-dune temples and desert camel safaris" },
      { name: "Khimsar Fort & Dunes", distance: "90 km", highlight: "Private sand dune oasis with eco-huts and blackbuck herds" },
      { name: "Bishnoi Village Safari", distance: "25 km", highlight: "Centuries-old wildlife conservation community and potters" }
    ]
  },
  {
    id: "udaipur",
    name: "Udaipur",
    slug: "udaipur",
    nickname: "The City of Lakes",
    tagline: "Venice of the East & Jewel of Mewar",
    district: "Udaipur",
    coordinates: { lat: 24.5854, lng: 73.7125 },
    mapPosition: { x: 420, y: 670 },
    image: "https://images.unsplash.com/photo-1615836245337-f5b9b2303f10?auto=format&fit=crop&w=1200&q=80",
    description: "Framed by the tranquil waters of Lake Pichola and the jagged purple ridges of the Aravalli hills, Udaipur is an ethereal romantic paradise of white marble palaces, ghats, and royal courtyards.",
    history: "Founded in 1559 by Maharana Udai Singh II as the new capital of the Mewar Kingdom after the siege of Chittorgarh, Mewar was the proudest Rajput clan that resisted Mughal suzerainty for generations under Maharana Pratap.",
    bestTime: "September to March (14°C – 29°C)",
    idealDays: "3 – 4 Days",
    mustVisitIds: ["city-palace-udaipur", "lake-pichola", "jag-mandir", "saheliyon-ki-bari", "monsoon-palace"],
    hiddenGemIds: ["kumbhalgarh-fort", "ranakpur-jain-temple", "bahubali-hills", "badi-lake"],
    localFood: [
      { name: "Laal Maas", description: "Fiery mutton curry simmered with authentic Mathania red chillies, garlic, and slow-cooked in curd.", bestPlace: "1559 AD & Tribute Restaurant" },
      { name: "Kachori & Jalebi with Kadhi", description: "Crisp lentil kachori broken into sour buttermilk kadhi accompanied by spiral sweet jalebis.", bestPlace: "Jagdish Mishthan Bhandar" },
      { name: "Daal Baati Thali", description: "Authentic Mewari thali with 5 types of chutneys and dry fruit churma.", bestPlace: "Krishna Dal Bati Restro" }
    ],
    howToReach: {
      flight: "Maharana Pratap Airport (UDR) located 22 km from city center with direct flights to Delhi, Mumbai, Jaipur, Bengaluru.",
      train: "Udaipur City Station has regular trains including Mewar Express and Chetak Express from Delhi.",
      bus: "Direct AC sleeper coaches from Ahmedabad (4 hrs), Jaipur (7 hrs), and Mumbai.",
      cab: "Scenic highway drive from Ahmedabad (250 km) or Mount Abu (160 km)."
    },
    nearbyExcursions: [
      { name: "Kumbhalgarh Fort", distance: "85 km", highlight: "Birthplace of Maharana Pratap with the 36-km Great Wall of India" },
      { name: "Ranakpur Jain Temple", distance: "93 km", highlight: "1,444 uniquely hand-carved marble pillars in peaceful valley" },
      { name: "Eklingji & Nagda", distance: "22 km", highlight: "1,300-year-old Shiva complex and 10th-century Sas-Bahu temples" }
    ]
  },
  {
    id: "jaisalmer",
    name: "Jaisalmer",
    slug: "jaisalmer",
    nickname: "The Golden City",
    tagline: "The Living Citadel in the Great Thar Desert",
    district: "Jaisalmer",
    coordinates: { lat: 26.9157, lng: 70.9083 },
    mapPosition: { x: 170, y: 440 },
    image: "https://images.unsplash.com/photo-1577717903315-1691ae25ab3f?auto=format&fit=crop&w=1200&q=80",
    description: "Rising like a golden mirage from the sandy ripples of the Thar Desert, Jaisalmer is dominated by Sonar Qila—one of the world's very few surviving 'living forts' where one-fourth of the old city's population still resides.",
    history: "Founded in 1156 AD by the Bhati Rajput ruler Rawal Jaisal on Trikuta Hill. Jaisalmer amassed enormous wealth by levying tolls on camel caravans carrying silk, spices, and indigo between Persia, Arabia, and Delhi.",
    bestTime: "October to March (9°C – 25°C)",
    idealDays: "2 – 3 Days",
    mustVisitIds: ["jaisalmer-fort", "patwon-ki-haveli", "gadisar-lake", "sam-sand-dunes"],
    hiddenGemIds: ["kuldhara-village", "tanot-mata-temple", "khaba-fort", "bada-bagh"],
    localFood: [
      { name: "Ker Sangri", description: "Desert bean and berry preparation cooked with mustard oil and whole red chillies, quintessential desert food.", bestPlace: "Chandan Shree Restaurant" },
      { name: "Ghotua Laddoos", description: "Silky melt-in-the-mouth gram flour laddoos infused with saffron and green cardamom.", bestPlace: "Dhanraj Ranmal Bhatia Sweets" },
      { name: "Bajre ki Roti with Lehsun Chutney", description: "Pearl millet flatbread charred over cow-dung embers with spicy garlic-chili relish.", bestPlace: "Desert Boys Dhani" }
    ],
    howToReach: {
      flight: "Jaisalmer Civil Airport (JSA) operates seasonal commercial flights during tourist winter months from Delhi, Mumbai, and Jaipur.",
      train: "Jaisalmer Railway Station connected via Jaisalmer Express and Delhi-Jaisalmer Runicha Express.",
      bus: "Frequent Deluxe and Sleeper buses from Jodhpur (5 hrs) and Bikaner (6 hrs).",
      cab: "Smooth wide desert highway NH11 connecting Jodhpur to Jaisalmer (280 km, 4.5 hrs)."
    },
    nearbyExcursions: [
      { name: "Sam Sand Dunes", distance: "42 km", highlight: "Dramatic 40-meter sand dunes, camel caravans, and Rajasthani campfire nights" },
      { name: "Kuldhara Ghost Village", distance: "18 km", highlight: "13th-century abandoned Paliwal Brahmin village cursed overnight" },
      { name: "Tanot Mata Temple & Indo-Pak Border", distance: "120 km", highlight: "Miraculous border shrine where unexploded 1965 war shells are displayed" }
    ]
  },
  {
    id: "bikaner",
    name: "Bikaner",
    slug: "bikaner",
    nickname: "The Camel Capital",
    tagline: "Land of Junagarh, Usta Art & Savory Bhujia",
    district: "Bikaner",
    coordinates: { lat: 28.0229, lng: 73.3119 },
    mapPosition: { x: 420, y: 260 },
    image: "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=1200&q=80",
    description: "Nestled in the desert wilderness, Bikaner was an impregnable oasis founded in 1488. It features Junagarh Fort—one of the few major Rajasthan forts not built on a hill—and world-famous savoury snacks.",
    history: "Rao Bika, a daring Rathore prince and second son of Jodhpur's Rao Jodha, struck out into the northern wilderness to carve his own sovereign kingdom, creating an opulent empire renowned for cavalry and camel corps.",
    bestTime: "October to March (10°C – 27°C)",
    idealDays: "1 – 2 Days",
    mustVisitIds: ["junagarh-fort", "lalgarh-palace", "national-camel-research-centre"],
    hiddenGemIds: ["karni-mata-temple", "kolayat-lake", "gajner-palace"],
    localFood: [
      { name: "Bikaneri Bhujia", description: "World-renowned crispy spicy snack made from moth beans, gram flour, and black pepper.", bestPlace: "Bhikharam Chandmal" },
      { name: "Rasgulla & Rajbhog", description: "Spongy cottage cheese dumplings infused with saffron strands.", bestPlace: "Chhappan Bhog Bikaner" },
      { name: "Khata with Bajra Khichdi", description: "Savory tempered spiced yogurt gravy served over piping hot pearl millet porridge.", bestPlace: "Lalji Restaurant" }
    ],
    howToReach: {
      flight: "Bikaner Nal Airport (BKB) has direct connections to Delhi.",
      train: "Bikaner Junction connects to Delhi, Kolkata, Mumbai, and Jaipur via Bikaner Superfast Express.",
      bus: "Connected by regular state and private buses to Jaipur (330 km) and Jodhpur (250 km).",
      cab: "NH52 and NH11 provide smooth 5-hour highway connections from Jaipur."
    },
    nearbyExcursions: [
      { name: "Deshnoke Karni Mata Temple", distance: "30 km", highlight: "Famous 600-year-old temple home to over 25,000 revered sacred rats (Kabbas)" },
      { name: "Gajner Palace & Wildlife Sanctuary", distance: "32 km", highlight: "Lakeside hunting lodge of Maharajas on the edge of private woods" },
      { name: "Kolayat Sacred Lake", distance: "51 km", highlight: "Tranquil marble-ghat lake where sage Kapila Muni meditated" }
    ]
  },
  {
    id: "pushkar",
    name: "Pushkar",
    slug: "pushkar",
    nickname: "The Sacred Oasis",
    tagline: "Holy Lake, Brahma's Lotus & Vibrant Camel Fair",
    district: "Ajmer",
    coordinates: { lat: 26.4899, lng: 74.5511 },
    mapPosition: { x: 550, y: 440 },
    image: "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1200&q=80",
    description: "Clustered around a tranquil sacred lake with 52 bathing ghats and over 400 temples, Pushkar is an ancient spiritual town. It is home to one of the world's very few temples dedicated to Lord Brahma.",
    history: "According to Hindu mythology, Lord Brahma dropped a celestial lotus (pushpa) from heaven; wherever its petals fell, holy water sprang forth (kar), giving birth to the sacred lake.",
    bestTime: "October to March (especially during the Kartik Purnima Camel Fair in November)",
    idealDays: "1 – 2 Days",
    mustVisitIds: ["brahma-temple-pushkar", "pushkar-lake-ghats", "savitri-temple"],
    hiddenGemIds: ["varaha-temple", "desert-rose-gardens", "ajaypal-ji"],
    localFood: [
      { name: "Pushkar Malpua", description: "Pancake sweet fried in pure ghee, soaked in saffron syrup, served crisp at the edges and soft inside.", bestPlace: "Halwai Gali (Radhey Ji)" },
      { name: "Falafel & Hummus", description: "Authentic Israeli street food popularized by backpackers along the lake promenade.", bestPlace: "La Pizzeria & Falafel Corner" },
      { name: "Gulkand Lassi", description: "Creamy rose-petal preserve yogurt drink topped with pistachios.", bestPlace: "Pushkar Lassi Corner" }
    ],
    howToReach: {
      flight: "Nearest airport is Kishangarh (Ajmer) Airport (45 km) or Jaipur International Airport (145 km).",
      train: "Ajmer Junction (14 km away) is the main railway terminus with Shatabdi and Vande Bharat connectivity.",
      bus: "Buses run every 15 minutes between Ajmer Bus Stand and Pushkar across the scenic Nag Pahar snake pass.",
      cab: "Direct cab from Jaipur takes roughly 2.5 to 3 hours (145 km)."
    },
    nearbyExcursions: [
      { name: "Ajmer Sharif Dargah", distance: "14 km", highlight: "Sufi shrine of Khwaja Moinuddin Chishti revered across faiths" },
      { name: "Taragarh Fort Ajmer", distance: "18 km", highlight: "One of India's oldest hill citadels built atop Nag Pahar" },
      { name: "Kishangarh Marble Slurry Snow Dumping Yard", distance: "45 km", highlight: "Surreal white expanse dubbed Rajasthan's 'Moonland' for photoshoots" }
    ]
  },
  {
    id: "ajmer",
    name: "Ajmer",
    slug: "ajmer",
    nickname: "The Heart of Rajasthan",
    tagline: "Spiritual Harmony, Ana Sagar & British Heritage",
    district: "Ajmer",
    coordinates: { lat: 26.4499, lng: 74.6399 },
    mapPosition: { x: 570, y: 450 },
    image: "https://images.unsplash.com/photo-1596405835955-4532a63c17a1?auto=format&fit=crop&w=1200&q=80",
    description: "Cradled by the Aravalli mountains, Ajmer is a center of spiritual devotion celebrated for the world-renowned Sufi shrine of Khwaja Moinuddin Chishti, the historic artificial lake Ana Sagar, and Mayo College.",
    history: "Founded in the late 7th century AD by Raja Ajaypal Chauhan, Ajmer was the capital of the Chauhan dynasty until Prithviraj Chauhan's legendary rule in 1192 AD.",
    bestTime: "October to March",
    idealDays: "1 – 2 Days",
    mustVisitIds: ["ajmer-sharif-dargah", "ana-sagar-lake", "adhai-din-ka-jhonpra"],
    hiddenGemIds: ["nasiyan-jain-temple", "taragarh-fort", "foy-sagar-lake"],
    localFood: [
      { name: "Sohan Halwa", description: "Dense caramelised wheat-malt sweet studded with dry fruits.", bestPlace: "Azad Sweets Dargah Bazar" },
      { name: "Kadhi Kachori", description: "Lentil kachori served drowned in tangy spiced yogurt curry.", bestPlace: "Shankar Chaat Corner" },
      { name: "Biryani & Mutton Korma", description: "Aromatic slow-simmered deg biryani served in the bustling alleys of Dargah Bazaar.", bestPlace: "Madina Restaurant" }
    ],
    howToReach: {
      flight: "Kishangarh Airport (KQH) is 28 km away with flights to Delhi, Hyderabad, and Mumbai.",
      train: "Ajmer Junction is a key railway junction on the Delhi-Ahmedabad main line.",
      bus: "Frequent buses from Jaipur, Jodhpur, Udaipur, and Delhi.",
      cab: "135 km from Jaipur on NH48 (2.5 hours)."
    },
    nearbyExcursions: [
      { name: "Pushkar Holy Town", distance: "14 km", highlight: "Sacred lake and Lord Brahma temple across Nag Pahar pass" },
      { name: "Kishangarh Fort & Miniature Art", distance: "30 km", highlight: "Birthplace of the famous Bani Thani royal miniature painting school" }
    ]
  },
  {
    id: "mount-abu",
    name: "Mount Abu",
    slug: "mount-abu",
    nickname: "The Hill Oasis",
    tagline: "Rajasthan's Sole Hill Station & Dilwara Marbles",
    district: "Sirohi",
    coordinates: { lat: 24.5926, lng: 72.7156 },
    mapPosition: { x: 300, y: 730 },
    image: "https://images.unsplash.com/photo-1590766940554-634a7ed41450?auto=format&fit=crop&w=1200&q=80",
    description: "Perched at 1,220 meters above sea level amidst lush pine and cedar hills, Mount Abu is a serene plateau sanctuary featuring the legendary Dilwara marble Jain temples, Nakki Lake, and panoramic sunset viewpoints.",
    history: "In Puranic legend, Mount Abu was known as Arbudaranya. It served as the retreat of sage Vashistha who performed the fire sacrifice (Yajna) creating the four Agnikula Rajput clans (Chauhan, Paramara, Solanki, Pratihara).",
    bestTime: "September to April (Pleasant throughout summer 20°C – 32°C, cool winters 8°C – 22°C)",
    idealDays: "2 Days",
    mustVisitIds: ["dilwara-temples", "nakki-lake", "guru-shikhar", "sunset-point-mount-abu"],
    hiddenGemIds: ["achalgarh-fort", "trevor-crocodile-tank", "gaumukh-temple"],
    localFood: [
      { name: "Rabdi & Ghewar", description: "Creamy condensed milk simmered on iron skillets and sprinkled with pistachios.", bestPlace: "Arbuda Sweets, Nakki Lake" },
      { name: "Dal Baati Churma with Garlic Dip", description: "Fresh hill-station version with generous desi ghee.", bestPlace: "Shree Arbuda Restaurant" },
      { name: "Roasted Spiced Sweetcorn (Bhutta)", description: "Charcoal-grilled corn cob rubbed with lemon and black salt around foggy Nakki Lake.", bestPlace: "Nakki Lake Promenade" }
    ],
    howToReach: {
      flight: "Nearest airport is Udaipur Maharana Pratap Airport (185 km, 3.5 hrs drive) or Ahmedabad Airport (225 km, 4.5 hrs).",
      train: "Abu Road Railway Station (28 km downhill) is well linked to Delhi, Mumbai, Ahmedabad, and Jaipur.",
      bus: "Direct buses run from Ahmedabad, Udaipur, Jodhpur, and Surat.",
      cab: "Cab ascent from Abu Road station takes 45 minutes along winding scenic hairpins."
    },
    nearbyExcursions: [
      { name: "Guru Shikhar Peak", distance: "15 km", highlight: "Highest peak in the Aravalli Range at 1,722 meters with Dattatreya temple" },
      { name: "Achalgarh Fort & Shiva Footprint", distance: "11 km", highlight: "Fort built by Rana Kumbha with natural toe-print of Lord Shiva" },
      { name: "Ambaji Temple (Gujarat border)", distance: "50 km", highlight: "Major 51 Shaktipeeth pilgrimage shrine" }
    ]
  },
  {
    id: "chittorgarh",
    name: "Chittorgarh",
    slug: "chittorgarh",
    nickname: "Citadel of Valor",
    tagline: "The Epic Hill Fort of Sacrifice, Padmini & Maharana Pratap",
    district: "Chittorgarh",
    coordinates: { lat: 24.8887, lng: 74.6269 },
    mapPosition: { x: 530, y: 640 },
    image: "https://images.unsplash.com/photo-1609137144822-42173f4588df?auto=format&fit=crop&w=1200&q=80",
    description: "Spread over an 700-acre fish-shaped plateau, Chittorgarh Fort is India's largest fort complex. It resonates with immortal sagas of Rajput heroism, the devotion of poet-saint Meerabai, and the legendary Jouhars of Rani Padmini and Rani Karnavati.",
    history: "Capital of Mewar for over 800 years until sack by Akbar in 1568. Besieged three times by Alauddin Khilji (1303), Bahadur Shah of Gujarat (1535), and Emperor Akbar (1567-68), yet never surrendered in spirit.",
    bestTime: "October to March",
    idealDays: "1 – 2 Days",
    mustVisitIds: ["chittorgarh-fort", "vijay-stambh", "kirti-stambh", "padmini-palace"],
    hiddenGemIds: ["gaumukh-reservoir", "meerabai-temple", "bassi-wildlife-sanctuary"],
    localFood: [
      { name: "Chittori Laal Maas", description: "Rustic country-style preparation with crushed whole spices and garlic.", bestPlace: "Chinar Garden Restaurant" },
      { name: "Moong Dal Halwa", description: "Rich winter sweet cooked in slow flame with khoya and cardamom.", bestPlace: "Sanwariya Sweets" },
      { name: "Bikaneri Bhujia & Poha", description: "Morning breakfast staple of beaten rice with lemon and crunchy namkeen.", bestPlace: "Fort Road Stalls" }
    ],
    howToReach: {
      flight: "Udaipur Airport is closest (90 km, 1.5 hrs drive).",
      train: "Chittorgarh Junction connects directly to Jaipur, Delhi, Kota, and Indore.",
      bus: "Well served on the Golden Quadrilateral highway with buses from Udaipur, Kota, and Bhilwara.",
      cab: "NH27 and NH48 make it an easy day excursion from Udaipur (110 km, 2 hrs)."
    },
    nearbyExcursions: [
      { name: "Menal Waterfalls & Shiva Temples", distance: "88 km", highlight: "Dramatic 150-foot waterfall and 11th-century temple complex in rocky gorge" },
      { name: "Sanwaliya Ji Temple (Mandaphiya)", distance: "35 km", highlight: "Famous Krishna temple where millions offer devotion" }
    ]
  },
  {
    id: "bundi-kota",
    name: "Bundi & Kota",
    slug: "bundi-kota",
    nickname: "City of Stepwells & Palaces",
    tagline: "Hadoti's Painted Marvels, River Chambal & Ancient Baoris",
    district: "Bundi / Kota",
    coordinates: { lat: 25.4415, lng: 75.6429 },
    mapPosition: { x: 670, y: 550 },
    image: "https://images.unsplash.com/photo-1599831104321-4f1131102905?auto=format&fit=crop&w=1200&q=80",
    description: "The rugged Hadoti heartland: Bundi is a storybook town of over 50 ornate subterranean stepwells (baoris) and the hillside Garh Palace adorned with the famed Chitrashala frescoes. Nearby Kota boasts the majestic Chambal River gorge and Jagmandir Palace.",
    history: "Ruled by the Hada Chauhan clan since 1342. Rudyard Kipling was so captivated by Bundi's Garh Palace that he described it as 'such a palace as men build for themselves in uneven dreams, the work of goblins rather than of men.'",
    bestTime: "October to March",
    idealDays: "2 Days",
    mustVisitIds: ["taragarh-fort-bundi", "raniji-ki-baori", "garh-palace-bundi", "seven-wonders-park-kota"],
    hiddenGemIds: ["chitrashala-frescoes", "nawal-sagar", "garadia-mahadev"],
    localFood: [
      { name: "Kota Kachori", description: "Ultra-crispy hing (asafoetida) and urad dal kachori known throughout North India.", bestPlace: "Ratan Sev Bhandar Kota" },
      { name: "Bundi Ke Laddoo", description: "Golden fried chickpea droplets soaked in rose-cardamom syrup.", bestPlace: "Bundi Mishthan Corner" }
    ],
    howToReach: {
      flight: "Jaipur Airport (210 km) or Indore Airport (240 km).",
      train: "Kota Junction is a major A-1 category hub on the Mumbai-Delhi Rajdhani main line. Bundi is 35 km away.",
      bus: "Frequent buses ply between Jaipur, Kota, Bundi, and Ajmer.",
      cab: "NH52 directly links Jaipur to Bundi in 4 hours."
    },
    nearbyExcursions: [
      { name: "Garadia Mahadev Temple", distance: "28 km from Kota", highlight: "Breathtaking horseshoe canyon overlook of Chambal River known as India's Grand Canyon" },
      { name: "Mukundra Hills Tiger Reserve", distance: "50 km", highlight: "Dense forest sanctuary harboring leopards, wolves, and tigers" }
    ]
  }
];

export const DESTINATIONS: Destination[] = [
  {
    id: "mehrangarh-fort",
    name: "Mehrangarh Fort",
    slug: "mehrangarh-fort",
    cityId: "jodhpur",
    cityName: "Jodhpur",
    category: "fort",
    coordinates: { lat: 26.2978, lng: 73.0185 },
    mapPosition: { x: 380, y: 460 },
    image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=1200&q=80",
    description: "Rising sheer and perpendicular 410 feet above the Blue City on a rocky cliff, Mehrangarh is one of the grandest and best-preserved hill fortresses on earth.",
    history: "Founded in 1459 by Rao Jodha, 15th Rathore ruler. Seven colossal gates (Pols) celebrate epic victories, including Jai Pol and Fateh Pol, still bearing cannonball scars from battles with Jaipur and Bikaner armies.",
    architecture: "Intricate sandstone jharokha latticework, Daulat Khana, Phool Mahal (Palace of Flowers with pure gold leaf ceiling), Sheesh Mahal, and Moti Mahal.",
    legends: "Legend holds that to appease a hermit named Cheeria Nathji displaced from the hill, a man named Raja Ram Meghwal voluntarily agreed to be buried alive in the foundations to bless the dynasty.",
    openingTime: "09:00 AM",
    closingTime: "05:00 PM",
    entryFee: { indian: 100, foreigner: 600, camera: 100 },
    rating: 4.9,
    reviewsCount: 3840,
    bestTime: "Morning at 09:00 AM or late afternoon for golden hour sunset over the blue houses.",
    isHiddenGem: false,
    tags: ["UNESCO World Heritage", "Hill Fort", "Museum", "Polo & Weapons", "Royal Palaces"]
  },
  {
    id: "amber-fort",
    name: "Amber Fort & Palace",
    slug: "amber-fort",
    cityId: "jaipur",
    cityName: "Jaipur",
    category: "fort",
    coordinates: { lat: 26.9855, lng: 75.8513 },
    mapPosition: { x: 675, y: 385 },
    image: "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1200&q=80",
    description: "A crowning masterpiece of Rajput-Mughal architecture perched high above Maota Lake, famous for its mirror-studded Sheesh Mahal and grand courtyards.",
    history: "Constructed originally in 1592 by Raja Man Singh I, the trusted general of Mughal Emperor Akbar, and expanded by Mirza Raja Jai Singh and Sawai Jai Singh II.",
    architecture: "Four terraced courtyards built in pale yellow and pink sandstone with white marble. The Sheesh Mahal can be illuminated by a single flickering candle reflecting in thousand Belgian glass concave mirrors.",
    legends: "The subterranean secret escape tunnel stretching 2 km uphill connecting Amber Fort directly to the garrison treasury of Jaigarh Fort.",
    openingTime: "08:00 AM",
    closingTime: "05:30 PM (Night Tourism: 06:30 PM – 09:15 PM)",
    entryFee: { indian: 100, foreigner: 550, camera: 50 },
    rating: 4.8,
    reviewsCount: 4210,
    bestTime: "Early morning to witness elephant paths and soft light on Maota lake.",
    isHiddenGem: false,
    tags: ["UNESCO World Heritage", "Sheesh Mahal", "Maota Lake", "Elephant Gate"]
  },
  {
    id: "hawa-mahal",
    name: "Hawa Mahal (Palace of Winds)",
    slug: "hawa-mahal",
    cityId: "jaipur",
    cityName: "Jaipur",
    category: "palace",
    coordinates: { lat: 26.9239, lng: 75.8267 },
    mapPosition: { x: 672, y: 392 },
    image: "https://images.unsplash.com/photo-1609137144822-42173f4588df?auto=format&fit=crop&w=1200&q=80",
    description: "A five-storey crown-shaped facade of pink and red sandstone boasting 953 honeycomb jharokhas that capture desert breezes.",
    history: "Built in 1799 by Maharaja Sawai Pratap Singh, inspired by the Khetri Mahal of Jhunjhunu and shaped in tribute to Lord Krishna's celestial crown.",
    architecture: "Designed by Lal Chand Ustad, the facade utilizes the Venturi wind tunnel effect so cool breezes circulate through the royal chambers even during 45°C summers.",
    legends: "Royal purdah women sat discreetly behind the tiny filigree jharokha screens to witness festive street processions of Teej and Gangaur without being seen by commoners.",
    openingTime: "09:00 AM",
    closingTime: "05:00 PM",
    entryFee: { indian: 50, foreigner: 200 },
    rating: 4.7,
    reviewsCount: 3950,
    bestTime: "Sunrise from the rooftop cafes opposite (Wind View Cafe / Tattoo Cafe) when morning sun illuminates the pink stone.",
    isHiddenGem: false,
    tags: ["Pink City Icon", "953 Jharokhas", "Wind Palace", "Krishna Crown"]
  },
  {
    id: "city-palace-udaipur",
    name: "City Palace Udaipur",
    slug: "city-palace-udaipur",
    cityId: "udaipur",
    cityName: "Udaipur",
    category: "palace",
    coordinates: { lat: 24.5764, lng: 73.6835 },
    mapPosition: { x: 420, y: 670 },
    image: "https://images.unsplash.com/photo-1615836245337-f5b9b2303f10?auto=format&fit=crop&w=1200&q=80",
    description: "Rajasthan's largest royal palace complex, soaring above Lake Pichola with an ensemble of 11 palaces built over four centuries by 22 successive Maharanas.",
    history: "Initiated in 1559 by Maharana Udai Singh II on the advice of a hermit on the ridge, remaining the seat of the Mewar royal family to this day.",
    architecture: "Granite and marble blend of Rajasthani, Mughal, and European design with the famous Peacock Courtyard (Mor Chowk) adorned with 5,000 glass mosaic tiles.",
    legends: "The Sun emblem (Surya) displayed on the balconies honors the Mewar rulers' claim to be direct descendants of the Sun God (Suryavanshi).",
    openingTime: "09:00 AM",
    closingTime: "09:00 PM",
    entryFee: { indian: 300, foreigner: 300, camera: 100 },
    rating: 4.9,
    reviewsCount: 4500,
    bestTime: "Mid-afternoon followed by a sunset boat ride on Lake Pichola.",
    isHiddenGem: false,
    tags: ["Mewar Royalty", "Lake Pichola", "Mor Chowk", "Crystal Gallery"]
  },
  {
    id: "jaisalmer-fort",
    name: "Jaisalmer Fort (Sonar Qila)",
    slug: "jaisalmer-fort",
    cityId: "jaisalmer",
    cityName: "Jaisalmer",
    category: "fort",
    coordinates: { lat: 26.9128, lng: 70.9126 },
    mapPosition: { x: 170, y: 440 },
    image: "https://images.unsplash.com/photo-1577717903315-1691ae25ab3f?auto=format&fit=crop&w=1200&q=80",
    description: "A living golden citadel perched on Trikuta Hill, housing over 4,000 residents, ancient havelis, and seven 12th-century Jain temples.",
    history: "Founded in 1156 AD by Rawal Jaisal. Constructed from yellow Jurassic limestone that glows lion-gold by day and amber-honey at twilight.",
    architecture: "Triple ring of defensive bastion walls, 99 semicircular towers, and intricately carved sandstone wooden-style balconied havelis.",
    legends: "Immortalized in Satyajit Ray's celebrated detective novel and film 'Sonar Kella' (The Golden Fortress).",
    openingTime: "Open 24 hours (Museum: 09:00 AM – 06:00 PM)",
    closingTime: "Open 24 hours",
    entryFee: { indian: 0, foreigner: 0, camera: 50 },
    rating: 4.8,
    reviewsCount: 3100,
    bestTime: "Late afternoon wandering the cobblestone labyrinth as temple bells ring.",
    isHiddenGem: false,
    tags: ["UNESCO World Heritage", "Living Fort", "Golden Fortress", "Jain Temples"]
  },
  {
    id: "chittorgarh-fort",
    name: "Chittorgarh Fort",
    slug: "chittorgarh-fort",
    cityId: "chittorgarh",
    cityName: "Chittorgarh",
    category: "fort",
    coordinates: { lat: 24.8879, lng: 74.6453 },
    mapPosition: { x: 530, y: 640 },
    image: "https://images.unsplash.com/photo-1609137144822-42173f4588df?auto=format&fit=crop&w=1200&q=80",
    description: "India's largest hill fortress spanning 700 acres, with 65 historic structures including the 9-storey Victory Tower (Vijay Stambh).",
    history: "Symbol of ultimate Rajput chivalry and defiance where warriors chose death over surrender, marked by the legendary Jouhars of Rani Padmini and Rani Karnavati.",
    architecture: "Vijay Stambh built by Rana Kumbha in 1448, carved with Hindu deities on every inch. Gaumukh reservoir fed by underground natural springs.",
    legends: "The mirror reflection legend of Rani Padmini shown to Sultan Alauddin Khilji, which ignited the fateful siege of 1303.",
    openingTime: "06:00 AM",
    closingTime: "06:00 PM",
    entryFee: { indian: 40, foreigner: 600 },
    rating: 4.9,
    reviewsCount: 3600,
    bestTime: "Early winter morning before tour buses arrive.",
    isHiddenGem: false,
    tags: ["UNESCO World Heritage", "Largest Fort in India", "Vijay Stambh", "Rani Padmini"]
  },
  {
    id: "kumbhalgarh-fort",
    name: "Kumbhalgarh Fort",
    slug: "kumbhalgarh-fort",
    cityId: "udaipur",
    cityName: "Rajsamand / Udaipur",
    category: "fort",
    coordinates: { lat: 25.1479, lng: 73.5872 },
    mapPosition: { x: 410, y: 620 },
    image: "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=1200&q=80",
    description: "The birthplace of Maharana Pratap featuring the second-longest continuous defensive wall in the world (36 km), wide enough for 8 horses to gallop abreast.",
    history: "Constructed in the 15th century by Rana Kumbha. Remained impregnable to hostile armies throughout history and was taken only once due to water poison sabotage.",
    architecture: "Perched at 3,600 feet in the rugged Aravalli crest with Badal Mahal (Cloud Palace) offering panoramic views of the Marwar desert plains.",
    legends: "Rana Kumbha burned massive lamps consuming 100 kg of cotton and 50 kg of ghee daily so local farmers could work safely under light in the valleys below.",
    openingTime: "09:00 AM",
    closingTime: "06:00 PM (Light & Sound: 06:45 PM)",
    entryFee: { indian: 40, foreigner: 600 },
    rating: 4.8,
    reviewsCount: 2900,
    bestTime: "Monsoon when mist shrouds the hilltops and winter afternoons.",
    isHiddenGem: false,
    tags: ["UNESCO World Heritage", "Great Wall of India", "Maharana Pratap Birthplace", "Cloud Palace"]
  },
  {
    id: "chand-baori",
    name: "Chand Baori (Abhaneri Stepwell)",
    slug: "chand-baori",
    cityId: "jaipur",
    cityName: "Dausa / Jaipur",
    category: "stepwell",
    coordinates: { lat: 27.0072, lng: 76.6064 },
    mapPosition: { x: 730, y: 395 },
    image: "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1200&q=80",
    description: "One of the deepest and most visually mesmerizing stepwells on earth: 3,500 narrow steps arranged in perfect geometric symmetry descending 13 storeys (64 feet).",
    history: "Constructed in the 8th to 9th century AD by King Chanda of the Nikumbh dynasty to conserve precious rainwater in the arid semi-desert.",
    architecture: "An engineering marvel of inverted pyramid geometry. The air at the bottom is consistently 5 to 6 degrees cooler than the scorching surface.",
    legends: "Locals believed spirits and ghosts built the 3,500 steps in a single night so that no mortal could ever retrieve a coin dropped down the stairs.",
    openingTime: "07:00 AM",
    closingTime: "06:00 PM",
    entryFee: { indian: 25, foreigner: 300 },
    rating: 4.9,
    reviewsCount: 1950,
    bestTime: "Morning between 08:00 AM and 10:00 AM when sharp geometric shadows cross the stairs.",
    isHiddenGem: true,
    tags: ["Hidden Gem", "Geometry Marvel", "Stepwell", "Ancient Engineering"]
  },
  {
    id: "bhangarh-fort",
    name: "Bhangarh Fort",
    slug: "bhangarh-fort",
    cityId: "jaipur",
    cityName: "Alwar / Jaipur",
    category: "hidden-gem",
    coordinates: { lat: 27.0964, lng: 76.2864 },
    mapPosition: { x: 710, y: 360 },
    image: "https://images.unsplash.com/photo-1590766940554-634a7ed41450?auto=format&fit=crop&w=1200&q=80",
    description: "Ruins of a 17th-century walled kingdom nestled against the Aravalli hills, famously dubbed 'India's most haunted fort' where entry is prohibited after sunset.",
    history: "Built in 1573 by Bhagwant Das for his younger son Madho Singh. The town was suddenly abandoned and destroyed in the 1700s.",
    architecture: "Remarkably preserved town layout with bazaar ruins, Havelis, Gopinath Temple, Someshwar Temple, and the Royal Palace citadel.",
    legends: "Cursed by a black-magic tantrik named Sinhai who fell in love with Princess Ratnavati; his dying curse doomed every roof in the town to collapse.",
    openingTime: "06:00 AM",
    closingTime: "06:00 PM (Strict ASI sunset closure)",
    entryFee: { indian: 25, foreigner: 300 },
    rating: 4.5,
    reviewsCount: 2200,
    bestTime: "Crisp winter morning or early overcast afternoon.",
    isHiddenGem: true,
    tags: ["Hidden Gem", "Haunted Folklore", "Deserted Citadel", "ASI Protected"]
  },
  {
    id: "kuldhara-village",
    name: "Kuldhara Abandoned Village",
    slug: "kuldhara-village",
    cityId: "jaisalmer",
    cityName: "Jaisalmer",
    category: "hidden-gem",
    coordinates: { lat: 26.8711, lng: 70.7878 },
    mapPosition: { x: 155, y: 445 },
    image: "https://images.unsplash.com/photo-1577717903315-1691ae25ab3f?auto=format&fit=crop&w=1200&q=80",
    description: "An evocative deserted ghost village in the Thar desert where 84 prosperous Paliwal Brahmin hamlets vanished without a trace in a single night in 1825.",
    history: "Established in 1291 AD by affluent agricultural Brahmins who mastered desert dry-farming and water conservation systems.",
    architecture: "Roofless golden sandstone dwellings, stepped courtyards, temples, and grid-planned streets standing frozen in desert silence.",
    legends: "Fleeing the tyrannical minister Salim Singh who coveted a village headman's daughter, the villagers cast a curse that no one could ever settle here again.",
    openingTime: "08:00 AM",
    closingTime: "06:00 PM",
    entryFee: { indian: 20, foreigner: 100, camera: 50 },
    rating: 4.6,
    reviewsCount: 1600,
    bestTime: "Sunset or late afternoon as shadows stretch across silent stone alleys.",
    isHiddenGem: true,
    tags: ["Ghost Village", "Hidden Gem", "Desert Ruins", "Paliwal Brahmins"]
  },
  {
    id: "toorji-ka-jhalra",
    name: "Toorji Ka Jhalra (Stepwell)",
    slug: "toorji-ka-jhalra",
    cityId: "jodhpur",
    cityName: "Jodhpur",
    category: "stepwell",
    coordinates: { lat: 26.2974, lng: 73.0245 },
    mapPosition: { x: 382, y: 458 },
    image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=1200&q=80",
    description: "A 1740s royal stepwell in Jodhpur restored to pristine glory, featuring pyramidal stairs, carved dancing elephants, and cool aquamarine spring water.",
    history: "Commissioned by Queen Maharani Toor Ji, consort of Maharaja Abhai Singh, continuing the Marwar tradition of royal women building public water sanctuaries.",
    architecture: "Carved from Jodhpur rose-red sandstone over 200 feet deep, adorned with stone spouts, water deities, and medieval water-drawing pulleys.",
    legends: "Buried under debris for nearly a century until restored in 2016 by the royal trust and local heritage enthusiasts.",
    openingTime: "Open 24 hours",
    closingTime: "Open 24 hours",
    entryFee: { indian: 0, foreigner: 0 },
    rating: 4.8,
    reviewsCount: 1850,
    bestTime: "Late afternoon for boutique cafes overlooking the stepped pool.",
    isHiddenGem: true,
    tags: ["Hidden Gem", "Stepwell", "Old City Jodhpur", "Step Cafe"]
  },
  {
    id: "dilwara-temples",
    name: "Dilwara Jain Temples",
    slug: "dilwara-temples",
    cityId: "mount-abu",
    cityName: "Mount Abu",
    category: "temple",
    coordinates: { lat: 24.6067, lng: 72.7222 },
    mapPosition: { x: 300, y: 730 },
    image: "https://images.unsplash.com/photo-1590766940554-634a7ed41450?auto=format&fit=crop&w=1200&q=80",
    description: "Universally acknowledged as one of the world's most breathtaking marble carving achievements, with translucent marble lace ceilings and filigree arches.",
    history: "Built between the 11th and 13th centuries AD by ministers Vimal Shah and brothers Vastupal and Tejpal.",
    architecture: "Five distinct temple complexes (Luna Vasahi, Vimal Vasahi, Pittalhar, Parshvanatha, Mahavir Swami). Artisans were reputedly paid in gold dust equal in weight to the marble powder they chiselled away.",
    legends: "The marble was transported by elephant trains from Makrana over 300 km away up treacherous hill gradients.",
    openingTime: "12:00 PM",
    closingTime: "05:00 PM (for tourists)",
    entryFee: { indian: 0, foreigner: 0 },
    rating: 4.9,
    reviewsCount: 3100,
    bestTime: "Midday when filtered sunlight illuminates the intricate marble ceilings.",
    isHiddenGem: false,
    tags: ["Marble Wonder", "Jain Architecture", "Sacred Temple", "Mount Abu"]
  },
  {
    id: "brahma-temple-pushkar",
    name: "Jagatpita Brahma Temple",
    slug: "brahma-temple-pushkar",
    cityId: "pushkar",
    cityName: "Pushkar",
    category: "temple",
    coordinates: { lat: 26.4883, lng: 74.5516 },
    mapPosition: { x: 550, y: 440 },
    image: "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1200&q=80",
    description: "One of the only prominent temples in the world consecrated to Lord Brahma, Creator of the Universe, marked by a bright red spire and silver turtle symbol.",
    history: "While the present 14th-century structure was restored by Maharaja Jawat Raj of Ratlam, the holy site dates back over 2,000 years in Puranic texts.",
    architecture: "Constructed of marble stone slabs and stone steeples with pillared mandapas and a life-size four-faced idol of Lord Brahma (Chauranana).",
    legends: "Cursed by Goddess Saraswati that he would never be worshipped anywhere on earth except here in Pushkar.",
    openingTime: "06:00 AM",
    closingTime: "08:30 PM",
    entryFee: { indian: 0, foreigner: 0 },
    rating: 4.7,
    reviewsCount: 2800,
    bestTime: "Morning Aarti around 06:30 AM or Evening Sandhya Aarti with oil lamps.",
    isHiddenGem: false,
    tags: ["Brahma Temple", "Holy Pushkar", "Ancient Sacred", "Pilgrimage"]
  },
  {
    id: "karni-mata-temple",
    name: "Karni Mata Temple (Rat Temple)",
    slug: "karni-mata-temple",
    cityId: "bikaner",
    cityName: "Deshnoke / Bikaner",
    category: "temple",
    coordinates: { lat: 27.7915, lng: 73.3411 },
    mapPosition: { x: 425, y: 285 },
    image: "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=1200&q=80",
    description: "World-famous 600-year-old temple home to over 25,000 revered black rats (Kabbas) that roam freely across marble floors, fed fresh milk and sweets.",
    history: "Dedicated to warrior-sage Karni Mata, revered as an incarnation of Goddess Durga and the patron deity of the Rathore royal house.",
    architecture: "Ornate silver doors presented by Maharaja Ganga Singh, marble facade reliefs depicting mythological triumphs.",
    legends: "Spotting one of the rare white rats is considered an omen of supreme divine blessing and prosperity.",
    openingTime: "04:00 AM",
    closingTime: "10:00 PM",
    entryFee: { indian: 0, foreigner: 0, camera: 30 },
    rating: 4.6,
    reviewsCount: 2400,
    bestTime: "Morning Mangala Aarti at dawn.",
    isHiddenGem: true,
    tags: ["Hidden Gem", "Sacred Kabbas", "Silver Doors", "Deshnoke"]
  },
  {
    id: "lake-pichola",
    name: "Lake Pichola & Jag Mandir",
    slug: "lake-pichola",
    cityId: "udaipur",
    cityName: "Udaipur",
    category: "lake",
    coordinates: { lat: 24.5714, lng: 73.6763 },
    mapPosition: { x: 418, y: 672 },
    image: "https://images.unsplash.com/photo-1615836245337-f5b9b2303f10?auto=format&fit=crop&w=1200&q=80",
    description: "An artificial freshwater lake built in 1362 AD by a gypsy grain banjara, framed by bathing ghats, floating marble palaces, and Aravalli hills.",
    history: "Constructed during the reign of Rana Lakha to allow pack bullocks to cross streams during monsoons; later fortified by Maharana Udai Singh II.",
    architecture: "Hosts the world-famous white marble Lake Palace (Jag Niwas) and Jag Mandir Island Palace.",
    legends: "Mughal Prince Khurram (later Emperor Shah Jahan) sought refuge at Jag Mandir in 1623; its marble dome inspired aspects of the Taj Mahal.",
    openingTime: "06:00 AM",
    closingTime: "08:00 PM (Boating till 06:00 PM)",
    entryFee: { indian: 0, foreigner: 0 },
    rating: 4.9,
    reviewsCount: 4100,
    bestTime: "Sunset boat cruise as city palace turns golden.",
    isHiddenGem: false,
    tags: ["Lake Palace", "Romantic Udaipur", "Sunset Boating", "Jag Mandir"]
  },
  {
    id: "raniji-ki-baori",
    name: "Raniji Ki Baori (Queen's Stepwell)",
    slug: "raniji-ki-baori",
    cityId: "bundi-kota",
    cityName: "Bundi",
    category: "stepwell",
    coordinates: { lat: 25.4452, lng: 75.6397 },
    mapPosition: { x: 672, y: 548 },
    image: "https://images.unsplash.com/photo-1599831104321-4f1131102905?auto=format&fit=crop&w=1200&q=80",
    description: "A 46-meter-deep royal stepwell constructed in 1699, hailed as Bundi's crowning subterranean architectural jewel with high-arched pillars.",
    history: "Commissioned by Queen Rani Nathavati Ji, the younger queen of Rao Raja Anirudh Singh of Bundi.",
    architecture: "Multi-tiered grand archways, slender pillars, and high-relief stone carvings of Lord Vishnu's ten avatars and elephant crests.",
    legends: "Queen Nathavati devoted her life to philanthropic water engineering after the king was summoned away to military campaigns.",
    openingTime: "09:00 AM",
    closingTime: "05:00 PM",
    entryFee: { indian: 50, foreigner: 200 },
    rating: 4.8,
    reviewsCount: 1400,
    bestTime: "Morning hours when sunlight penetrates through the multi-storey arches.",
    isHiddenGem: true,
    tags: ["Subterranean Marvel", "Hidden Gem", "Bundi Stepwells", "Royal Architecture"]
  }
];
