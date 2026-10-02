export interface Dish {
  id: string;
  name: string;
  regionalOrigin: string;
  category: "Main Course" | "Snack" | "Dessert" | "Bread & Chutney";
  spiceLevel: "Mild" | "Medium" | "Fiery Royal";
  image: string;
  description: string;
  historicalBackstory: string;
  keyIngredients: string[];
  mustTryAt: { city: string; spot: string };
}

export interface CulturalTradition {
  id: string;
  title: string;
  category: "Folk Dance" | "Desert Music" | "Handicraft & Art" | "Textiles";
  image: string;
  origin: string;
  description: string;
  culturalSignificance: string;
  notableInstrumentsOrMaterials: string[];
}

export const RAJASTHANI_DISHES: Dish[] = [
  {
    id: "dal-baati-churma",
    name: "Dal Baati Churma",
    regionalOrigin: "Mewar & Marwar",
    category: "Main Course",
    spiceLevel: "Medium",
    image: "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=800&q=80",
    description: "The crown jewel of Rajasthani cuisine: hard wheat balls (baatis) traditionally baked over cow-dung or charcoal embers, crushed and drowned in hot aromatic desi ghee, accompanied by panchmel dal and sweet powdered churma.",
    historicalBackstory: "Conceived during the reign of Bappa Rawal of Mewar. Rajput soldiers left dough balls buried beneath hot desert sands before riding into battle; upon return at dusk, the scorching sands had perfectly baked the loaves.",
    keyIngredients: ["Whole wheat flour", "Pure Desi Ghee", "Panchmel Dal (5 lentils)", "Saffron", "Cardamom", "Jaggery / Bura sugar"],
    mustTryAt: { city: "Jaipur / Jodhpur", spot: "LMB Jaipur & Bawarchi Udaipur" }
  },
  {
    id: "laal-maas",
    name: "Laal Maas (Royal Crimson Mutton)",
    regionalOrigin: "Mewar Royalty",
    category: "Main Course",
    spiceLevel: "Fiery Royal",
    image: "https://images.unsplash.com/photo-1545247181-516773cae754?auto=format&fit=crop&w=800&q=80",
    description: "A rich, deep red slow-cooked mutton curry prepared exclusively with indigenous Mathania dried red chillies, garlic, whole spices, and smoked with burning charcoal cloves (Dhungar technique).",
    historicalBackstory: "Created by royal khansamas (court chefs) during Mewar shikar (hunting expeditions) to mask the pungent gamey flavor of wild boar and deer using abundant red chillies and garlic without green vegetables.",
    keyIngredients: ["Tender bone-in mutton", "Mathania whole red chillies", "Garlic cloves", "Mustard oil", "Curd", "Cinnamon & cloves"],
    mustTryAt: { city: "Udaipur / Jodhpur", spot: "1559 AD (Udaipur) & On The Rocks (Jodhpur)" }
  },
  {
    id: "ker-sangri",
    name: "Ker Sangri (Desert Beans & Berries)",
    regionalOrigin: "Thar Desert",
    category: "Main Course",
    spiceLevel: "Medium",
    image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=800&q=80",
    description: "A cherished dry delicacy combining dried Ker berries (caper bushes) and slender Sangri pods (Khejri tree) cooked in mustard oil with dry red chillies, amchur (dry mango powder), and yoghurt.",
    historicalBackstory: "During prolonged famines in the arid Thar desert, survival depended on the deep-rooted wild Khejri tree (Prosopis cineraria). Locals discovered that dried pods could be preserved for years without spoiling.",
    keyIngredients: ["Ker desert berries", "Sangri khejri pods", "Mustard oil", "Whole red chillies", "Amchur", "Raisins & cashews"],
    mustTryAt: { city: "Jaisalmer / Bikaner", spot: "Chandan Shree Jaisalmer" }
  },
  {
    id: "gatte-ki-sabzi",
    name: "Shahi Gatte Ki Sabzi",
    regionalOrigin: "Marwar",
    category: "Main Course",
    spiceLevel: "Medium",
    image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=800&q=80",
    description: "Steamed gram flour (besan) cylindrical dumplings simmered in a spiced, velvety yogurt and coriander gravy tempered with cumin, fennel, and asafoetida.",
    historicalBackstory: "Born out of Rajasthan's arid geography where fresh green leafy vegetables were scarce, Marwari households ingeniously transformed dry gram flour and homemade buttermilk into royal curries.",
    keyIngredients: ["Gram flour (Besan)", "Whisked fresh curd", "Ajwain (Carom seeds)", "Kashmiri red chilli", "Kasuri methi"],
    mustTryAt: { city: "Jaipur / Jodhpur", spot: "Gypsy Dining Hall Jodhpur" }
  },
  {
    id: "pyaaz-kachori",
    name: "Pyaaz Ki Kachori",
    regionalOrigin: "Jodhpur & Jaipur",
    category: "Snack",
    spiceLevel: "Medium",
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=800&q=80",
    description: "Flaky, golden-crusted deep-fried pastry pocket packed with a mouthwatering spiced mixture of slow-caramelized onions, crushed coriander seeds, fennel, and potatoes.",
    historicalBackstory: "Perfected in the royal bazaars as an energizing morning breakfast for merchants setting off across the desert trade routes.",
    keyIngredients: ["Refined flour (Maida)", "Finely chopped onions", "Coarsely ground coriander seeds", "Fennel seeds", "Garam masala"],
    mustTryAt: { city: "Jaipur", spot: "Rawat Mishtan Bhandar" }
  },
  {
    id: "ghewar",
    name: "Royal Malai Ghewar",
    regionalOrigin: "Jaipur",
    category: "Dessert",
    spiceLevel: "Mild",
    image: "https://images.unsplash.com/photo-1599831104321-4f1131102905?auto=format&fit=crop&w=800&q=80",
    description: "A porous, honeycomb-like crispy dessert disc fried in pure ghee, drenched in fragrant saffron sugar syrup, and crowned with a thick layer of creamy Rabri, silver vark, and slivered pistachios.",
    historicalBackstory: "Synonymous with the Teej and Raksha Bandhan monsoon festivals. The ambient humidity of the monsoon is traditionally believed to give Ghewar its ideal airy lattice texture.",
    keyIngredients: ["All-purpose flour", "Pure Desi Ghee", "Saffron (Kesar)", "Cardamom", "Rabri", "Edible Silver Leaf (Vark)"],
    mustTryAt: { city: "Jaipur", spot: "Sambhar Fini & Ghewar Wale / LMB" }
  }
];

export const CULTURAL_TRADITIONS: CulturalTradition[] = [
  {
    id: "dance-ghoomar",
    title: "Ghoomar: The Royal Grace of Twirling Skirts",
    category: "Folk Dance",
    image: "https://images.unsplash.com/photo-1574169208507-84376144848b?auto=format&fit=crop&w=800&q=80",
    origin: "Mewar & Marwar Royal Courts",
    description: "Originally developed by the Bhil tribe and later embraced by Rajput royalty, Ghoomar is characterized by graceful pirouettes ('Ghoomna') where women in vibrant 80-kali flowing lehengas spin harmoniously in circles.",
    culturalSignificance: "Performed during auspicious events, weddings, and the spring festival of Gangaur to invoke the blessings of Goddess Gauri.",
    notableInstrumentsOrMaterials: ["Dholak", "Nagada", "Manjira", "Embroidered Ghagra-Choli with translucent Odhani"]
  },
  {
    id: "dance-kalbelia",
    title: "Kalbelia: The Serpent Dance of the Desert Nomads",
    category: "Folk Dance",
    image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=800&q=80",
    origin: "Thar Desert Nomadic Tribes",
    description: "Inscribed on UNESCO's Representative List of Intangible Cultural Heritage, Kalbelia is the rhythmic snake dance where women in black swirling gowns replicate the sinuous, mesmerizing movements of a cobra.",
    culturalSignificance: "Transmitted orally through generations by the nomadic snake-charmer community as celebration of their bond with wildlife.",
    notableInstrumentsOrMaterials: ["Poongi (Woodwind gourd pipe)", "Khanjari", "Dholak", "Mirror-work black Angrakhi"]
  },
  {
    id: "music-manganiyar",
    title: "Manganiyar & Langa: Desert Bard Ballads",
    category: "Desert Music",
    image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=800&q=80",
    origin: "Jaisalmer & Barmer Borderlands",
    description: "Hereditary Muslim desert bards who have sung for Hindu Rajput patrons for eight centuries. Their haunting melodies echo across the sand dunes, narrating chivalric epics of kings and poignant songs of longing.",
    culturalSignificance: "Custodians of Thar oral history, performing at births, weddings, and camel fairs without written musical scores.",
    notableInstrumentsOrMaterials: ["Kamayacha (17-string bowed goat-skin lute)", "Sarangi", "Morchang (Jaw harp)", "Khartal (Teak wood castanets)"]
  },
  {
    id: "craft-blue-pottery",
    title: "Jaipur Blue Pottery",
    category: "Handicraft & Art",
    image: "https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?auto=format&fit=crop&w=800&q=80",
    origin: "Jaipur Royal Workshops",
    description: "Turquoise and cobalt glaze ceramics made without clay, utilizing ground quartz stone powder, Fuller's earth, glass, and natural gum, fired at low kiln temperatures.",
    culturalSignificance: "Introduced via Turko-Persian artisans under Maharaja Sawai Ram Singh II in the 19th century, unique for never developing surface cracks.",
    notableInstrumentsOrMaterials: ["Quartz powder", "Glass cullet", "Cobalt oxide (Blue)", "Copper oxide (Turquoise)", "Charcoal kiln"]
  },
  {
    id: "craft-kathputli",
    title: "Kathputli: The Puppet Theater of Rajasthan",
    category: "Handicraft & Art",
    image: "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=800&q=80",
    origin: "Nagaur & Marwar Bhat Community",
    description: "String marionettes carved from mango wood ('Kath') and dressed in bright silk textiles ('Putli'), operated by master puppeteers who whistle through a bamboo reed (Boli) to give voice to heroes.",
    culturalSignificance: "Over 1,000 years old, performing heroic folk epics of Amar Singh Rathore and Raja Vikramaditya in village squares.",
    notableInstrumentsOrMaterials: ["Carved mango wood", "Wire and cotton strings", "Bamboo Boli whistle", "Dholak rhythms"]
  }
];
