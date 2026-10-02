export interface Festival {
  id: string;
  name: string;
  location: string;
  monthSeason: string;
  nextDates: string;
  image: string;
  tagline: string;
  about: string;
  history: string;
  whatToExpect: string[];
  insiderTip: string;
}

export const FESTIVALS: Festival[] = [
  {
    id: "pushkar-camel-fair",
    name: "Pushkar Camel Fair (Pushkar Mela)",
    location: "Pushkar (Ajmer District)",
    monthSeason: "November (Kartik Purnima)",
    nextDates: "November 18 – 26, 2026",
    image: "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1200&q=80",
    tagline: "The World's Largest Livestock & Cultural Extravaganza",
    about: "An awe-inspiring spectacle where over 50,000 adorned camels, horses, and cattle converge on the desert sands alongside sacred full-moon lake dips and carnival festivities.",
    history: "Rooted in ancient religious traditions where pilgrims gathered at the holy Pushkar Lake on the auspicious Kartik Purnima full moon; over the centuries, pastoralists began trading livestock during this annual gathering.",
    whatToExpect: [
      "Camel beauty pageants with intricate hair shears and bead necklaces",
      "Traditional Matka Phod (pot-breaking) and longest moustache competitions",
      "Hot air balloon flights over the desert dunes and tented camps",
      "Dusk Maha Aarti at Varaha and Brahma Ghats with thousands of floating oil diyas"
    ],
    insiderTip: "Arrive 2 to 3 days before the official tourist festival starts: that's when genuine pastoralists trade camels in authentic rustic fashion before crowds gather."
  },
  {
    id: "jaisalmer-desert-festival",
    name: "Jaisalmer Desert Festival (Maru Mahotsav)",
    location: "Sam Sand Dunes & Sonar Qila, Jaisalmer",
    monthSeason: "February (Magh Purnima)",
    nextDates: "February 12 – 15, 2027",
    image: "https://images.unsplash.com/photo-1577717903315-1691ae25ab3f?auto=format&fit=crop&w=1200&q=80",
    tagline: "Golden Sands, Turban Tying & Desert Melodies",
    about: "A vibrant three-day carnival celebrating the rich desert folklore of the Thar against the golden ramparts of Jaisalmer Fort and the windswept dunes of Sam.",
    history: "Organized by the Rajasthan Tourism Department to preserve and celebrate ancient desert arts, martial games, and nomad ballads.",
    whatToExpect: [
      "Mr. Desert and Miss Moomal traditional royal pageants",
      "Camel polo matches and acrobatics by the Indian Border Security Force (BSF)",
      "Turban-tying contests for international travelers",
      "Soul-stirring midnight vocal concerts by Manganiyar musicians under the full moon"
    ],
    insiderTip: "Book Swiss tent stays at Sam Dunes months in advance, and carry heavy woollens as February desert nights drop below 7°C."
  },
  {
    id: "jaipur-literature-festival",
    name: "Jaipur Literature Festival (JLF)",
    location: "Hotel Clarks Amer, Jaipur",
    monthSeason: "January",
    nextDates: "January 22 – 26, 2027",
    image: "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1200&q=80",
    tagline: "The Greatest Literary Show on Earth",
    about: "The world's largest free literary festival bringing Nobel laureates, Booker Prize winners, global statesmen, and artists into vibrant intellectual dialogues.",
    history: "Founded in 2006 by authors William Dalrymple and Namita Gokhale at the historic Diggi Palace, growing into a global pilgrimage for book lovers.",
    whatToExpect: [
      "Over 300 speakers across 5 stages discussing philosophy, politics, poetry, and science",
      "Jaipur Music Stage evening concerts featuring sufi, indie, and world fusion bands",
      "Art installations, artisanal bookshops, and royal Rajasthani food courts"
    ],
    insiderTip: "Register online in advance for the delegate pass if you want access to the private speaker lounge and reserved front seating."
  },
  {
    id: "mewar-festival",
    name: "Mewar Festival & Gangaur Procession",
    location: "Gangaur Ghat & City Palace, Udaipur",
    monthSeason: "March / April (Chaitra Navratri)",
    nextDates: "April 08 – 10, 2027",
    image: "https://images.unsplash.com/photo-1615836245337-f5b9b2303f10?auto=format&fit=crop&w=1200&q=80",
    tagline: "Welcoming Spring to the City of Lakes",
    about: "A joyous festival welcoming the arrival of spring (Vasant) with traditional idol immersions in Lake Pichola, illuminated royal barges, and folk dances.",
    history: "Celebrates the union of Lord Shiva (Isar) and Goddess Parvati (Gauri), symbolizing marital devotion, harvest abundance, and springtime renewal.",
    whatToExpect: [
      "Royal procession of decorated palanquins carrying deity idols from the City Palace to Gangaur Ghat",
      "Transfer of idols onto royal painted boats floating across Pichola at twilight",
      "Breathtaking fireworks lighting up the marble facade of Jag Mandir and Lake Palace",
      "Traditional Ghoomar performances by women in vivid attire along the waterfront"
    ],
    insiderTip: "Secure a rooftop dinner table at Ambrai or Upre near Gangaur Ghat by 05:00 PM to view the floating boat procession as the sun sets over Pichola."
  },
  {
    id: "marwar-festival",
    name: "Marwar Festival",
    location: "Mehrangarh Fort & Mandore Gardens, Jodhpur",
    monthSeason: "October (Sharad Purnima)",
    nextDates: "October 16 – 17, 2026",
    image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=1200&q=80",
    tagline: "Tribute to the Heroes & Ballads of Marwar",
    about: "Held in memory of Rajasthan's martial heroes, this festival brings Jodhpur to life with folk music, dance, and polo beneath the illuminated walls of Mehrangarh.",
    history: "Originally known as the 'Maand Festival' dedicated to the classical Maand singing style of Rajasthan's court musicians.",
    whatToExpect: [
      "Horse and camel polo matches played by royal teams",
      "Mesmerizing Sarangi and Dholak recitals on the open stone ramparts of the fort",
      "Turban-tying and moustache competitions at historic Mandore Gardens"
    ],
    insiderTip: "The Sharad Purnima full moon creates an unforgettable glow on Mehrangarh's cliffside—visit Jaswant Thada at night for panoramic night views."
  }
];
