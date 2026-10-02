export interface StoryTimelineNode {
  year: string;
  title: string;
  description: string;
  keyFigure: string;
  era: string;
}

export interface HistoricalStory {
  id: string;
  slug: string;
  destinationId: string;
  title: string;
  subtitle: string;
  heroImage: string;
  historicalPeriod: string;
  overview: string;
  audioNarrationText: string;
  timeline: StoryTimelineNode[];
  architecturalHighlights: { title: string; description: string; detail: string }[];
  legends: { title: string; tale: string }[];
  figures: { name: string; title: string; legacy: string }[];
}

export const HISTORICAL_STORIES: HistoricalStory[] = [
  {
    id: "story-mehrangarh",
    slug: "story-mehrangarh",
    destinationId: "mehrangarh-fort",
    title: "The Citadel of the Sun: Sagas of Mehrangarh",
    subtitle: "From a cursed hermit's cliff to India's most formidable Rathore citadel",
    heroImage: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=1200&q=80",
    historicalPeriod: "1459 AD – Present Day",
    overview: "Built perpendicular above the Thar desert upon the rocky throne of Bhakurcheeria, Mehrangarh Fort has withstood sieges by Jaipur, Bikaner, and Mughal armies. Rudyard Kipling described it as 'a palace for angels, fairies, and giants.'",
    audioNarrationText: "Welcome to Mehrangarh, the Citadel of the Sun. In the year 1459, Rao Jodha, the fifteenth ruler of the Rathore clan, looked upon this steep isolated cliff. To lay its cornerstone, a great hermit was displaced, and legend tells of a chilling curse: that the citadel would always suffer scarcity of water. For six centuries, through deafening cannonades and royal coronations, its impregnable walls sheltered the spirit of Marwar.",
    timeline: [
      {
        year: "1459 AD",
        title: "Foundation on the Mountain of Birds",
        description: "Rao Jodha relocates the Marwar capital from vulnerable Mandore to the towering cliff of Bhakurcheeria, laying the foundation of Mehrangarh.",
        keyFigure: "Rao Jodha (1416–1489)",
        era: "Early Rathore Dynasty"
      },
      {
        year: "1544 AD",
        title: "The Defiance of Maldeo Rathore",
        description: "Rao Maldeo Rathore fiercely resists the Afghan Emperor Sher Shah Suri in the Battle of Sammel, consolidating Marwar's reputation for warrior prowess.",
        keyFigure: "Rao Maldeo Rathore",
        era: "Imperial Warfare"
      },
      {
        year: "1638 AD",
        title: "The Golden Era of Maharaja Jaswant Singh I",
        description: "Construction of the Phool Mahal and extensive royal private courtyards, integrating delicate Mughal aesthetics with bold Rajput sandstone carving.",
        keyFigure: "Maharaja Jaswant Singh I",
        era: "Artistic Renaissance"
      },
      {
        year: "1806 AD",
        title: "The Siege of Jai Pol",
        description: "Maharaja Man Singh builds the grand Jai Pol (Victory Gate) after repulsing the combined armies of Jaipur and Bikaner. Cannonball scars remain visible in the ramparts today.",
        keyFigure: "Maharaja Man Singh",
        era: "Sieges of the 19th Century"
      },
      {
        year: "1972 AD – Present",
        title: "The Living Museum of Mehrangarh Trust",
        description: "Maharaja Gaj Singh II transforms the fort into an internationally acclaimed museum, preserving palanquins, royal costumes, and musical archives.",
        keyFigure: "H.H. Maharaja Gaj Singh II",
        era: "Modern Living Heritage"
      }
    ],
    architecturalHighlights: [
      {
        title: "Phool Mahal (Palace of Flowers)",
        description: "An opulent chamber conceived as an intimate royal concert room with ceilings adorned in pure 24-carat gold leaf imported from Europe.",
        detail: "Features authentic portraits of Rathore rulers and floral arabesques created by master court painters."
      },
      {
        title: "Sheesh Mahal (Hall of Mirrors)",
        description: "Intricate mirror mosaics reflecting oil lamps in convex glass discs set into stucco relief.",
        detail: "Depicts episodes from the Ramayana, Bhagavata Purana, and Krishna Leela under timber ceilings."
      },
      {
        title: "The Seven Imperial Pols (Gates)",
        description: "Series of fortified checkpoints designed with sharp angles to prevent war elephants from building momentum to batter iron-spiked doors.",
        detail: "Loha Pol bears the poignant handprints (sati marks) of 31 royal queens before their final journey."
      }
    ],
    legends: [
      {
        title: "The Curse of Hermit Cheeria Nathji",
        tale: "When Rao Jodha forced the ascetic Cheeria Nathji to leave his rocky eyrie, the hermit cursed him: 'Jodha! May your citadel suffer ever from water drought!' Rao Jodha attempted to appease him by building a temple and cave sanctuary within the fortress grounds."
      },
      {
        title: "The Sacrifice of Raja Ram Meghwal",
        tale: "To counter the hermit's ill omen, astrologers advised that a man of noble heart must willingly sacrifice his life in the fort's bedrock. Raja Ram Meghwal voluntarily stepped forward, and his descendants were granted royal stipends and honors for generations."
      }
    ],
    figures: [
      { name: "Rao Jodha", title: "Founder of Jodhpur", legacy: "Unified the disparate Marwar clans and envisioned the impregnable citadel." },
      { name: "Maharani Toor Ji", title: "Queen of Marwar", legacy: "Architectural patron who commissioned subterranean stepwells across Jodhpur." },
      { name: "Maharaja Jaswant Singh II", title: "Modernizer of Marwar", legacy: "Commissioned the marble memorial Jaswant Thada, the Taj of Marwar." }
    ]
  },
  {
    id: "story-chittorgarh",
    slug: "story-chittorgarh",
    destinationId: "chittorgarh-fort",
    title: "Chittorgarh: The Immortal Citadel of Valor & Sacrifice",
    subtitle: "Three legendary Jouhars and the everlasting spirit of Mewar",
    heroImage: "https://images.unsplash.com/photo-1609137144822-42173f4588df?auto=format&fit=crop&w=1200&q=80",
    historicalPeriod: "7th Century AD – 1568 AD",
    overview: "Spanning 700 acres atop an isolated hill, Chittorgarh is the supreme symbol of Rajput honor. Rather than capitulate to imperial conquerors, its warriors rode out in saffron robes (Saka) while thousands of royal women embraced fire (Jouhar).",
    audioNarrationText: "Here atop the plateau of Chittorgarh, stone whispers of an era when honor was held dearer than life itself. When the armies of Alauddin Khilji and later Emperor Akbar surrounded these ancient battlements, the defenders made an immortal pact. Chittorgarh was taken three times, yet its royal soul was never conquered.",
    timeline: [
      {
        year: "728 AD",
        title: "Establishment of the Guhila Dynasty",
        description: "Bappa Rawal captures the fort from the Mori Rajputs, establishing the legendary Sisodia Mewar dynasty that claimed lineage from the Sun.",
        keyFigure: "Bappa Rawal",
        era: "Foundational Era"
      },
      {
        year: "1303 AD",
        title: "The Siege by Alauddin Khilji & First Jouhar",
        description: "Sultan Alauddin Khilji besieges the citadel. Rani Padmini leads over 16,000 women into the sacred sacrificial pyre while Rawal Ratan Singh falls on the battlefield.",
        keyFigure: "Rani Padmini & Rawal Ratan Singh",
        era: "First Epic Siege"
      },
      {
        year: "1448 AD",
        title: "Erection of Vijay Stambh (Tower of Victory)",
        description: "Rana Kumbha builds the soaring 9-storey Victory Tower to commemorate his triumph over the combined Sultanates of Malwa and Gujarat.",
        keyFigure: "Rana Kumbha",
        era: "Architectural Climax"
      },
      {
        year: "1535 AD",
        title: "Second Jouhar under Rani Karnavati",
        description: "Bahadur Shah of Gujarat attacks. Rani Karnavati sends a sacred Rakhi to Mughal Emperor Humayun pleading for sisterly protection before entering the flames.",
        keyFigure: "Rani Karnavati",
        era: "Second Epic Siege"
      },
      {
        year: "1567–1568 AD",
        title: "The Final Siege of Akbar",
        description: "Emperor Akbar lays siege with heavy artillery. Young heroes Jaimal and Patta fight to their last breath, prompting Akbar to install statues in their honor at Agra Fort.",
        keyFigure: "Jaimal Rathore & Patta Sisodia",
        era: "Fall of the Capital"
      }
    ],
    architecturalHighlights: [
      {
        title: "Vijay Stambh (Tower of Victory)",
        description: "A 37-meter, 9-storey architectural masterpiece covered from plinth to spire with intricately sculpted figures of Hindu deities.",
        detail: "Dedicated to Lord Vishnu, built over ten painstaking years between 1440 and 1448."
      },
      {
        title: "Gaumukh Reservoir",
        description: "A deep rock pool fed by a perennial natural underground spring that gushes through a stone cow-mouth spout.",
        detail: "Historically sustained thousands of soldiers and citizens during multi-month military sieges."
      },
      {
        title: "Padmini's Summer Palace",
        description: "A delicate three-storey pavilion set amidst an artificial water pool with pavilion windows overlooking the moat.",
        detail: "Where the fateful mirror reflection of the queen was famously shared with the Delhi Sultan."
      }
    ],
    legends: [
      {
        title: "The Legend of Rani Padmini's Mirror Reflection",
        tale: "Desiring a glimpse of the queen whose beauty was famous across the subcontinent, Khilji agreed to view only her reflection in a mirror across the water pool. Stunned by her grace, he broke the truce and captured King Ratan Singh, sparking the war of Chittor."
      },
      {
        title: "Saint Meerabai's Poisoned Cup",
        tale: "The royal mystic poetess Meerabai dedicated her heart exclusively to Lord Krishna. When the angry Rana sent her a golden chalice of lethal poison, legend says the liquid transformed into sweet nectar as it touched her lips."
      }
    ],
    figures: [
      { name: "Rana Kumbha", title: "Polymath Ruler & Builder", legacy: "Erected 32 of Mewar's 84 forts and authored scholarly treatises on music and drama." },
      { name: "Rani Padmini", title: "Queen of Mewar", legacy: "Immortal symbol of Rajput feminine dignity and sacrifice." },
      { name: "Meerabai", title: "Mystic Bhakti Saint", legacy: "Composed immortal bhajans celebrating divine love that are sung across India today." }
    ]
  },
  {
    id: "story-sonar-qila",
    slug: "story-sonar-qila",
    destinationId: "jaisalmer-fort",
    title: "Sonar Qila: The Golden Living Citadel of the Thar",
    subtitle: "Caravans, sandstone laces, and eight centuries of desert life",
    heroImage: "https://images.unsplash.com/photo-1577717903315-1691ae25ab3f?auto=format&fit=crop&w=1200&q=80",
    historicalPeriod: "1156 AD – Present Day",
    overview: "Rising like a colossal sandcastle on Trikuta Hill, Sonar Qila is one of the world's few surviving living medieval forts. Within its 99 bastions, generations of families, weavers, silversmiths, and priests continue life as their ancestors did eight hundred years ago.",
    audioNarrationText: "Look closely at the golden ramparts of Sonar Qila. At dawn, the Jurassic limestone blushes pale honey; by noon, it burns like molten gold. Founded in 1156 by Rawal Jaisal, this was the great tollgate of the Silk Route, where thousand-camel caravans carrying silks and musk rested before trekking to Persia and Byzantium.",
    timeline: [
      {
        year: "1156 AD",
        title: "Rawal Jaisal's Dream on Trikuta Hill",
        description: "Bhati Rajput ruler Rawal Jaisal selects Trikuta Hill on the prophetic counsel of sage Eesul, who recounted Lord Krishna's ancient prophecy that a descendant of the Yadu race would build an empire here.",
        keyFigure: "Rawal Jaisal",
        era: "Desert Founding"
      },
      {
        year: "1294 AD",
        title: "The Seven-Year Siege by Alauddin Khilji",
        description: "Khilji attacks following caravan raids. The Bhati Rajputs defend the hilltop for seven relentless years before enacting Saka and Jouhar.",
        keyFigure: "Rawal Duda",
        era: "Medieval Defiance"
      },
      {
        year: "15th Century",
        title: "Construction of the Seven Jain Temples",
        description: "Affluent merchant families finance seven exquisitely sculpted marble and sandstone Jain sanctuaries connected by secret tunnels.",
        keyFigure: "Jain Merchant Guilds",
        era: "Spiritual Renaissance"
      },
      {
        year: "18th–19th Century",
        title: "The Golden Age of Havelis",
        description: "Opulent prime ministers and traders erect Patwon ki Haveli, Salim Singh ki Haveli, and Nathmal ki Haveli with stone filigree as delicate as silk lace.",
        keyFigure: "Guman Chand Patwa",
        era: "Architectural Splendor"
      }
    ],
    architecturalHighlights: [
      {
        title: "99 Sandstone Bastions",
        description: "Curved semicircular defensive watchtowers built without mortar, interlocking through precise masonry friction.",
        detail: "Cannon balls placed on the ramparts could be rolled downhill into approaching enemy ranks."
      },
      {
        title: "Jain Temple Underground Library (Gyan Bhandar)",
        description: "Ancient subterranean manuscripts vault preserving some of India's oldest surviving palm-leaf texts dating back to the 11th century.",
        detail: "Protected by airtight stone vaults from desert heat and invasions."
      }
    ],
    legends: [
      {
        title: "Lord Krishna's Prophecy to Arjuna",
        tale: "In the Mahabharata, Lord Krishna and Arjuna stopped at Trikuta Hill when Arjuna was parched with thirst. Krishna struck the rock with his Sudarshana Chakra, causing sweet water to gush forth, and prophesied that a scion of his Yaduvanshi clan would establish a golden throne here."
      }
    ],
    figures: [
      { name: "Rawal Jaisal", title: "Founder of Jaisalmer", legacy: "Shifted the Bhati dynasty from vulnerable Lodurva to the golden heights of Trikuta Hill." },
      { name: "Salim Singh", title: "Notorious Prime Minister", legacy: "Feared minister who constructed the Peacock Haveli and drove the Paliwals from Kuldhara." }
    ]
  }
];
