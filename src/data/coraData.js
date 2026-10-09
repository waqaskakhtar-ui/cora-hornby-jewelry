export const BRAND_INFO = {
  name: "CORA HORNBY",
  shortName: "HORNBY",
  studioName: "Cora Hornby Jewelry",
  tagline: "Traveling the World for Inspiration and Materials",
  subtitle: "Hand-crafted on the coast of Maine using hammered metals, leather, freshwater pearls, semi-precious stones, druzies and crystals.",
  origin: "Cape Elizabeth, Maine, USA",
  coordinates: "43° 35' 12\" N, 70° 12' 44\" W",
  contact: {
    email: "corahornby@corahornby.com",
    phone: "518 · 469 · 8981",
    location: "Cape Elizabeth, Maine · Studio"
  },
  statement: "I TRAVEL TO GATHER. I RETURN TO COMPOSE.",
  bio: "Cora Hornby produces handcrafted jewelry designs from her coastal Maine studio. Inspired by decades of world travel—from the Andean highlands of Peru and Guatemala to the sun-bleached coastlines of Greece, Namibia, Brazil, and Indonesia—each piece weaves together raw druzies, Austrian crystals, semi-precious stones, hand-dyed leather, and sculptural metals sourced directly from global artisans or inspired by world cultures."
};

// ==========================================
// 1. THE 8 TRAVEL INSPIRATIONS (CLIENT'S OFFICIAL BRIEF)
// ==========================================
export const TRAVEL_DESTINATIONS = [
  {
    id: "greece",
    country: "Greece",
    type: "Design Inspiration",
    isMaterialSource: false,
    tagline: "Spirals, coils, and domes, found in museums and mountaintops.",
    sourceNotes: "Ancient Aegean spirals, coiled bronze armor, and meander borders translated into hammered discs and kinetic jewelry.",
    heroImage: "/travel_inspirations/greece-hero.jpg",
    heroAlt: "A monastery built on top of a sandstone pillar at Meteora, Greece",
    themeColors: {
      bg: "#2a2418",
      ink: "#f4ecd8",
      title: "#9dc3f0",
      accent: "#9dc3f0"
    },
    pairs: [
      {
        id: "greece-1",
        travelImage: "/travel_inspirations/greece-pair-1-inspiration.jpg",
        travelAlt: "Ancient bronze spiral discs and bead strands in a museum case",
        jewelryImage: "/travel_inspirations/greece-pair-1-jewelry.jpg",
        jewelryAlt: "Concentric spiral silver pendant on a braided leather cord",
        title: "Aegean Spiral Pendant",
        caption: "Flat bronze spirals wound ring on ring, echoed in a hammered silver disc."
      },
      {
        id: "greece-2",
        travelImage: "/travel_inspirations/greece-pair-2-inspiration.jpg",
        travelAlt: "Rows of coiled bronze bracelets displayed in a museum",
        jewelryImage: "/travel_inspirations/greece-pair-2-jewelry.jpg",
        jewelryAlt: "Mixed-metal wrapped bangles stacked on a display cone",
        title: "Mixed-Metal Wrapped Bangles",
        caption: "Bronze bracelets coiled and hung in rows, reimagined as hammered bangles wrapped in mixed metal."
      },
      {
        id: "greece-3",
        travelImage: "/travel_inspirations/greece-pair-3-inspiration.jpg",
        travelAlt: "An ancient gold-decorated shield with a meander border, lit in a dark museum case",
        jewelryImage: "/travel_inspirations/greece-pair-3-jewelry.jpg",
        jewelryAlt: "Silver dome earrings hanging from chain",
        title: "Meander Silver Dome Drops",
        caption: "A gold-trimmed shield with a meander border inspired these raised silver domes on chain."
      }
    ]
  },
  {
    id: "namibia",
    country: "Namibia & South Africa",
    type: "Design Inspiration",
    isMaterialSource: false,
    tagline: "Color, bone and bead, and a lot of sun.",
    sourceNotes: "Deadvlei sun-baked trees against red dunes, wildlife encounters, and African trade market beads.",
    heroImage: "/travel_inspirations/namibia-hero.jpg",
    heroAlt: "Mural of a young woman in a mask flexing her arm, Cape Town",
    themeColors: {
      bg: "#17132b",
      ink: "#f3e9d8",
      title: "#f09a6b",
      accent: "#f09a6b"
    },
    pairs: [
      {
        id: "namibia-1",
        travelImage: "/travel_inspirations/namibia-pair-1-inspiration.jpg",
        travelAlt: "Dead tree in Deadvlei, Namibia",
        jewelryImage: "/travel_inspirations/namibia-pair-1-jewelry.jpg",
        jewelryAlt: "Long dark bone earrings wrapped in brass wire",
        title: "Deadvlei Dark Bone Drops",
        caption: "Deadvlei, Namibia. Sun-baked wood against red dunes became long earrings of dark bone, wrapped in brass wire."
      },
      {
        id: "namibia-2",
        travelImage: "/travel_inspirations/namibia-pair-2-inspiration.jpg",
        travelAlt: "Woman wearing a python around her shoulders",
        jewelryImage: "/travel_inspirations/namibia-pair-2-jewelry.jpg",
        jewelryAlt: "Snake-head clasp on a dark leather necklace",
        title: "Twin Serpent Leather Talisman",
        caption: "Cora, face to face with a python. Two gold snake heads meet at a gunmetal ring on a leather necklace."
      },
      {
        id: "namibia-3",
        travelImage: "/travel_inspirations/namibia-pair-3-inspiration.jpg",
        travelAlt: "Strands of African glass and bone trade beads in a wooden bowl",
        jewelryImage: "/travel_inspirations/namibia-pair-3-jewelry.jpg",
        jewelryAlt: "Bone bead necklace and earrings set with brass accents",
        title: "African Bone & Brass Set",
        caption: "Beads of the market. A bone bead necklace and earrings set, finished with brass accents."
      }
    ]
  },
  {
    id: "brazil",
    country: "Brazil",
    type: "Material Source & Inspiration",
    isMaterialSource: true,
    tagline: "The earth gives the stones. The streets give the color, Copacabana.",
    sourceNotes: "Direct ethical source of untreated raw amethyst and crystalline citrine, paired with Copacabana street mosaic motifs.",
    heroImage: "/travel_inspirations/brazil-hero.jpg",
    heroAlt: "Wave-patterned pavement on Copacabana beach",
    themeColors: {
      bg: "#605c57",
      ink: "#f6f0e4",
      title: "#f3cf86",
      accent: "#f3cf86"
    },
    pairs: [
      {
        id: "brazil-1",
        travelImage: "/travel_inspirations/brazil-pair-1-inspiration.jpg",
        travelAlt: "Brass hand-shaped handle gripping a wrought-iron door",
        jewelryImage: "/travel_inspirations/brazil-pair-1-jewelry.jpg",
        jewelryAlt: "Silver handshake clasp on a dark leather cord necklace",
        title: "Silver Handshake Leather Talisman",
        caption: "A brass hand grips the door, answered in two clasped hands on a leather cord."
      },
      {
        id: "brazil-2",
        travelImage: "/travel_inspirations/brazil-pair-2-inspiration.jpg",
        travelAlt: "A staircase and walls of broken-tile mosaic in blue, green and white",
        jewelryImage: "/travel_inspirations/brazil-pair-2-jewelry.jpg",
        jewelryAlt: "Raw amethyst ring wrapped in gold wire",
        title: "Raw Brazilian Amethyst Ring",
        caption: "Broken tile pieced whole in color, echoed in raw amethyst mined in Brazil and wrapped in gold wire."
      },
      {
        id: "brazil-3",
        travelImage: "/travel_inspirations/brazil-pair-3-inspiration.jpg",
        travelAlt: "Amber beads and silver facets in fringe on a wooden table",
        jewelryImage: "/travel_inspirations/brazil-pair-3-jewelry.jpg",
        jewelryAlt: "Raw citrine necklace with silver and gold spacers",
        title: "Raw Citrine & Silver Armature",
        caption: "Amber beads and silver facets catching the light inspired this raw citrine, mined in Brazil, set with silver."
      }
    ]
  },
  {
    id: "guatemala",
    country: "Guatemala",
    type: "Material Source & Inspiration",
    isMaterialSource: true,
    tagline: "Jade, woven cloth and night sky, carried home in wire and stone.",
    sourceNotes: "Direct source of rare natural jadeite (mottled green, pink, and black). Hand-shaped in highland artisan workshops.",
    heroImage: "/travel_inspirations/guatemala-hero.jpg",
    heroAlt: "Oil painting of a sun woman and moon woman in Guatemalan textiles",
    themeColors: {
      bg: "#0f2f3d",
      ink: "#f4ecd8",
      title: "#e8a93a",
      accent: "#e8a93a"
    },
    pairs: [
      {
        id: "guatemala-1",
        travelImage: "/travel_inspirations/guatemala-pair-1-inspiration.jpg",
        travelAlt: "Rough jade hearts at the workshop",
        jewelryImage: "/travel_inspirations/guatemala-pair-1-jewelry.jpg",
        jewelryAlt: "Bag charms with wire-wrapped stones",
        title: "Wire-Wrapped Jade Bag Charms",
        caption: "Rough jade hearts at the workshop, answered in bag charms with wire-wrapped stones."
      },
      {
        id: "guatemala-2",
        travelImage: "/travel_inspirations/guatemala-pair-2-inspiration.jpg",
        travelAlt: "Descent from the Cross, life-size figures",
        jewelryImage: "/travel_inspirations/guatemala-pair-2-jewelry.jpg",
        jewelryAlt: "Teardrops wrapped in black with silver accent",
        title: "Nocturne Wrapped Teardrop Drops",
        caption: "Life-size figures in a Descent from the Cross, echoed in teardrops wrapped in black with a silver accent."
      },
      {
        id: "guatemala-3",
        travelImage: "/travel_inspirations/guatemala-pair-3-inspiration.jpg",
        travelAlt: "Teaching a young artisan at the workshop",
        jewelryImage: "/travel_inspirations/guatemala-pair-3-jewelry.jpg",
        jewelryAlt: "Hammered half-moons with wire-wrapped jade",
        title: "Media Luna Guatemalan Jade Earrings",
        caption: "Cora teaching a young artisan at the workshop, remembered in hammered half-moons with wire-wrapped jade."
      }
    ]
  },
  {
    id: "germany",
    country: "Germany & the Netherlands",
    type: "Design Inspiration",
    isMaterialSource: false,
    tagline: "Walls, mirrors and masterpieces, turned into jewelry.",
    sourceNotes: "Bauhaus architectural geometry, the Reichstag mirrored dome, East Side Gallery murals, and Vermeer's pearls at the Rijksmuseum.",
    heroImage: "/travel_inspirations/germany-hero.jpg",
    heroAlt: "East Side Gallery mural on the Berlin Wall",
    themeColors: {
      bg: "#1d1a18",
      ink: "#f0e9e2",
      title: "#d98a5f",
      accent: "#d98a5f"
    },
    pairs: [
      {
        id: "germany-1",
        travelImage: "/travel_inspirations/germany-pair-1-inspiration.jpg",
        travelAlt: "Reichstag Dome, Berlin",
        jewelryImage: "/travel_inspirations/germany-pair-1-jewelry.jpg",
        jewelryAlt: "Black & Copper Geometric Drops",
        title: "Reichstag Black & Copper Drops",
        caption: "The Reichstag Dome folds the Berlin sky into one mirrored cone, echoed in a matte black diamond, a hammered copper ring and a round black post."
      },
      {
        id: "germany-2",
        travelImage: "/travel_inspirations/germany-pair-2-inspiration.jpg",
        travelAlt: "East Side Gallery, Berlin",
        jewelryImage: "/travel_inspirations/germany-pair-2-jewelry.jpg",
        jewelryAlt: "Cubist Line-Art Face Earrings",
        title: "Cubist Line-Art Face Earrings",
        caption: "A Guernica-style mural painted on the Berlin Wall, answered in mirrored line-art faces finished with curved brass posts."
      },
      {
        id: "germany-3",
        travelImage: "/travel_inspirations/germany-pair-3-inspiration.jpg",
        travelAlt: "Rijksmuseum, Amsterdam",
        jewelryImage: "/travel_inspirations/germany-pair-3-jewelry.jpg",
        jewelryAlt: "'Be That Girl' Freshwater Pearl Earrings",
        title: "Vermeer Baroque Pearl Huggies",
        caption: "Vermeer’s pearl on a banner over the Rijksmuseum entrance inspired real freshwater pearls and crystal rondelles on gold huggies."
      }
    ]
  },
  {
    id: "indonesia",
    country: "Papua, Indonesia",
    type: "Design Inspiration",
    isMaterialSource: false,
    tagline: "Painted skin, carved wood, living reef.",
    sourceNotes: "Asmat carved river shields, ceremonial body paint, and Raja Ampat coral reef formations reflected in bold sculptural brass.",
    heroImage: "/travel_inspirations/indonesia-hero.jpg",
    heroAlt: "Portrait in a feathered headdress with a carved shell nose ornament",
    themeColors: {
      bg: "#17201b",
      ink: "#efe9de",
      title: "#d98a5f",
      accent: "#d98a5f"
    },
    pairs: [
      {
        id: "indonesia-1",
        travelImage: "/travel_inspirations/indonesia-pair-1-inspiration.jpg",
        travelAlt: "Man in white body paint holding a spear",
        jewelryImage: "/travel_inspirations/indonesia-pair-1-jewelry.jpg",
        jewelryAlt: "Concentric disc earrings with a striped blue bead",
        title: "Ceremonial Disc & Bead Drops",
        caption: "Chalk-white rings and swirls painted on skin, answered in textured brass discs."
      },
      {
        id: "indonesia-2",
        travelImage: "/travel_inspirations/indonesia-pair-2-inspiration.jpg",
        travelAlt: "Carved shield standing in a canoe",
        jewelryImage: "/travel_inspirations/indonesia-pair-2-jewelry.jpg",
        jewelryAlt: "Black trapezoid earrings with cream teardrops",
        title: "River Shield Trapezoid Earrings",
        caption: "A carved river shield, tall and ovaled; cream and dark shapes, stacked."
      },
      {
        id: "indonesia-3",
        travelImage: "/travel_inspirations/indonesia-pair-3-inspiration.jpg",
        travelAlt: "Brain coral and branching coral underwater",
        jewelryImage: "/travel_inspirations/indonesia-pair-3-jewelry.jpg",
        jewelryAlt: "Brass hoop earrings with a ring of beads",
        title: "Reef Beaded Brass Hoops",
        caption: "Reef coral folded in rings and beads; a beaded circle in brass."
      }
    ]
  },
  {
    id: "belize",
    country: "Belize",
    type: "Design Inspiration",
    isMaterialSource: false,
    tagline: "Warm wood, gold light, and old stone.",
    sourceNotes: "Stacked limestone steps of Altun Ha Mayan ruins, vibrant bougainvillea, and palm wood Caribbean textures.",
    heroImage: "/travel_inspirations/belize-hero.jpg",
    heroAlt: "Woman in a striped headwrap, detail from a vintage-style Belize sign",
    themeColors: {
      bg: "#0c3c3e",
      ink: "#f4ecd8",
      title: "#e8a93a",
      accent: "#e8a93a"
    },
    pairs: [
      {
        id: "belize-1",
        travelImage: "/travel_inspirations/belize-pair-1-inspiration.jpg",
        travelAlt: "Altun Ha temple steps in stacked stone",
        jewelryImage: "/travel_inspirations/belize-pair-1-jewelry.jpg",
        jewelryAlt: "Pyrite cube earrings with gold beads",
        title: "Altun Ha Pyrite Cube Earrings",
        caption: "Stacked stone temple steps at Altun Ha inspired these pyrite cube earrings, which stack the same way with gold beads between."
      },
      {
        id: "belize-2",
        travelImage: "/travel_inspirations/belize-pair-2-inspiration.jpg",
        travelAlt: "Bougainvillea in peach and rose",
        jewelryImage: "/travel_inspirations/belize-pair-2-jewelry.jpg",
        jewelryAlt: "Hammered brass leaf earrings with pearl and carnelian",
        title: "Bougainvillea Brass Leaf & Carnelian Drops",
        caption: "Peach and rose bougainvillea is echoed in hammered brass leaf earrings set with pearl and carnelian."
      },
      {
        id: "belize-3",
        travelImage: "/travel_inspirations/belize-pair-3-inspiration.jpg",
        travelAlt: "Cooking class table with spices and produce",
        jewelryImage: "/travel_inspirations/belize-pair-3-jewelry.jpg",
        jewelryAlt: "Palm wood and gold-etched black bead bracelet",
        title: "Palm Wood & Etched Gold Bracelet",
        caption: "The warm wood and spices of a cooking class table come home in this bracelet of palm wood and gold-etched black beads."
      }
    ]
  },
  {
    id: "india",
    country: "India",
    type: "Design Inspiration",
    isMaterialSource: false,
    tagline: "Color, pattern and gold, carried home.",
    sourceNotes: "Palace ceilings in lapis and gold, foiled artisan lampwork glass beads, and regal brass elephant talisman clasps.",
    heroImage: "/travel_inspirations/india-hero.jpg",
    heroAlt: "Man wrapped in orange cloth with an orange turban, looking toward the camera",
    themeColors: {
      bg: "#b05a24",
      ink: "#ffffff",
      title: "#d3e0a8",
      accent: "#fff1d6"
    },
    pairs: [
      {
        id: "india-1",
        travelImage: "/travel_inspirations/india-pair-1-inspiration.jpg",
        travelAlt: "Elephants standing together in shallow water",
        jewelryImage: "/travel_inspirations/india-pair-1-jewelry.jpg",
        jewelryAlt: "CoraHornby piece: elephant necklace on a leather cord",
        title: "Regal Elephant Leather Talisman",
        caption: "Elephants gathered at the water, echoed in antique brass elephant heads that close a leather necklace."
      },
      {
        id: "india-2",
        travelImage: "/travel_inspirations/india-pair-2-inspiration.jpg",
        travelAlt: "India lampwork glass beads in assorted colors and foil patterns",
        jewelryImage: "/travel_inspirations/india-pair-2-jewelry.jpg",
        jewelryAlt: "CoraHornby piece: cairn lampwork bead earrings",
        title: "Foiled Cairn Lampwork Earrings",
        caption: "Foiled lampwork beads, so common across India, inspired this cairn earring design."
      },
      {
        id: "india-3",
        travelImage: "/travel_inspirations/india-pair-3-inspiration.jpg",
        travelAlt: "India travel photo: painted ceiling",
        jewelryImage: "/travel_inspirations/india-pair-3-jewelry.jpg",
        jewelryAlt: "CoraHornby piece: teal glass earrings",
        title: "Jaipur Painted Ceiling Leaf Drops",
        caption: "A painted ceiling in lapis, jade and gold, reimagined as teal glass over carved brass leaf discs."
      }
    ]
  }
];

// ==========================================
// 2. THE 5 COLLECTIONS (CLIENT'S OFFICIAL BRIEF)
// ==========================================
export const COLLECTIONS = [
  { id: "mixed-metals", name: "Mixed Metals", slug: "mixed-metals", count: 18, desc: "Tension and harmony between hammered brass, solid sterling silver, oxidized copper, and gunmetal." },
  { id: "geometrics", name: "Geometrics", slug: "geometrics", count: 24, desc: "Architectural studies in frame, space, and mineral forms. Bauhaus squares, crescents, and clean stone cuts." },
  { id: "mayan-sol", name: "Mayan Sol", slug: "mayan-sol", count: 12, desc: "Signature hand-buffed radiant brass discs paired with vivid natural turquoise and ancient solar motifs." },
  { id: "pearls", name: "Pearls", slug: "pearls", count: 22, desc: "Baroque, coin, and freshwater pearls set in modern architectural wire armatures and hammered caps." },
  { id: "black-is-back", name: "Black is Back", slug: "black-is-back", count: 16, desc: "Porous black lava stones, dark carved bone, hematite top hats, black leather, and gunmetal druzies." }
];

// ==========================================
// 3. THE 5 PRODUCT CATEGORIES (CLIENT'S OFFICIAL BRIEF)
// ==========================================
export const PRODUCT_CATEGORIES = [
  { id: "earrings", name: "Earrings", count: 38 },
  { id: "necklaces", name: "Necklaces", count: 24 },
  { id: "bracelets", name: "Bracelets", count: 14 },
  { id: "rings", name: "Rings", count: 8 },
  { id: "bag-charms", name: "Bag Charms", count: 6 }
];

// ==========================================
// 4. UNIFIED PRODUCT INVENTORY (THREE-WAY TAXONOMY)
// ==========================================
export const PRODUCTS = [
  {
    id: "prod-mayan-sol",
    name: "Mayan Sol Turquoise Earrings",
    category: "Earrings",
    productType: "Earrings",
    collection: "Mayan Sol",
    travelCountry: "Guatemala",
    isMaterialSource: true,
    material: "Natural untreated turquoise bars, hammered radiant brass discs, silver spacers",
    price: "$95.00",
    dimensions: "Drop: 2.2\" · Weight: 6.2g per earring",
    description: "The signature Cora Hornby earrings shown in our studio exhibition. Natural vivid turquoise paired with hand-hammered radiant brass discs echoing ancestral solar symbols seen throughout Central America.",
    origin: "Turquoise & Studio Fabricated in Maine",
    image: "https://images.squarespace-cdn.com/content/v1/5b882c0b365f0225b70e3aa1/e7ab7a3a-c133-4b24-b004-9266589ac8f5/IMG_7358.jpeg",
    altImage: "https://images.squarespace-cdn.com/content/v1/5b882c0b365f0225b70e3aa1/4c23058a-77eb-44b2-8be6-aaba007e9cd0/IMG_7374.jpeg",
    modelImage: "/travel_inspirations/belize-pair-2-jewelry.jpg",
    featured: true
  },
  {
    id: "prod-zebra",
    name: "African Zebra Jasper & Silver Cube Bracelet",
    category: "Bracelets",
    productType: "Bracelets",
    collection: "Mixed Metals",
    travelCountry: "Namibia & South Africa",
    isMaterialSource: false,
    material: "Hand-cut African zebra jasper cubes, solid sterling silver square spacers, magnetic clasp",
    price: "$145.00",
    dimensions: "Length: 7.5\" · Cube: 10mm · Magnetic Closure",
    description: "A monumental studio creation. Individually cut cubic black and white African zebra jasper stones separated by mirror-polished sterling silver square spacers. Fastened with Cora's high-strength magnetic closure.",
    origin: "African Jasper · Studio Forged in Cape Elizabeth, Maine",
    image: "/hero-zebra-jasper-3d.png",
    altImage: "/travel_inspirations/namibia-pair-3-jewelry.jpg",
    modelImage: "https://images.squarespace-cdn.com/content/v1/5b882c0b365f0225b70e3aa1/1786657175661-H3MP7IZ64SJDBIXNNAL1/https%3A%2F%2Fi.etsystatic.com%2F24076881%2Fr%2Fil%2Ff84fda%2F5999280529%2Fil_fullxfull.5999280529_2eqo.jpg",
    featured: true
  },
  {
    id: "prod-cleo",
    name: "The Cleo Architectural Pendant",
    category: "Necklaces",
    productType: "Necklaces",
    collection: "Geometrics",
    travelCountry: "Germany & the Netherlands",
    isMaterialSource: false,
    material: "Cold-forged hammered brass, precision pierced geometry, brass chain",
    price: "$150.00",
    dimensions: "Pendant: 2.8\" × 1.4\" · Chain: 28\" adjustable",
    description: "Cold-forged in Cora's Cape Elizabeth studio. The Cleo explores Bauhaus architectural balance and negative space, allowing hand-hammered brass to reflect warm light across skin and textile.",
    origin: "Cape Elizabeth, Maine Studio",
    image: "https://images.squarespace-cdn.com/content/v1/5b882c0b365f0225b70e3aa1/1786657275999-NO6EK65SN16E85AOD73A/https%3A%2F%2Fi.etsystatic.com%2F24076881%2Fr%2Fil%2Fec8df4%2F3451414898%2Fil_fullxfull.3451414898_qvov.jpg",
    altImage: "https://images.squarespace-cdn.com/content/v1/5b882c0b365f0225b70e3aa1/1786657280394-FPLTX9TK8WK0R0U8HHUE/https%3A%2F%2Fi.etsystatic.com%2F24076881%2Fr%2Fil%2F3b01d0%2F3451407740%2Fil_fullxfull.3451407740_3mlk.jpg",
    modelImage: "https://images.squarespace-cdn.com/content/v1/5b882c0b365f0225b70e3aa1/1786657287352-1BZW6UYBIRV3EN9HT7A5/https%3A%2F%2Fi.etsystatic.com%2F24076881%2Fr%2Fil%2F30c173%2F3451524516%2Fil_fullxfull.3451524516_pvxa.jpg",
    featured: true
  },
  {
    id: "prod-hands",
    name: "Interlocking Hands Friendship Necklace",
    category: "Necklaces",
    productType: "Necklaces",
    collection: "Mixed Metals",
    travelCountry: "Brazil",
    isMaterialSource: false,
    material: "Cast brass hands, high-strength magnetic lock, vegetable-tanned leather cord",
    price: "$128.00",
    dimensions: "Cord: 18\" or 22\" · Clasp: 1.6\" span",
    description: "An intimate and sculptural talisman. Two cast brass hands meet and lock together via a concealed neodymium magnet. Inspired by ancient clasps and architectural door handles discovered in Brazil.",
    origin: "Handcrafted in Cape Elizabeth, Maine",
    image: "https://images.squarespace-cdn.com/content/v1/5b882c0b365f0225b70e3aa1/1786657498458-HJTG503LRACQUA64T85C/https%3A%2F%2Fi.etsystatic.com%2F24076881%2Fr%2Fil%2Fa28eb1%2F5212634801%2Fil_fullxfull.5212634801_qriz.jpg",
    altImage: "https://images.squarespace-cdn.com/content/v1/5b882c0b365f0225b70e3aa1/1786657502206-90R2T3PDRQ71E2J0ZPXB/https%3A%2F%2Fi.etsystatic.com%2F24076881%2Fr%2Fil%2F76b2ea%2F5212629247%2Fil_fullxfull.5212629247_58tg.jpg",
    modelImage: "/travel_inspirations/brazil-pair-1-jewelry.jpg",
    featured: true
  },
  {
    id: "prod-amphora",
    name: "Amphora Baroque Pearl Earrings",
    category: "Earrings",
    productType: "Earrings",
    collection: "Pearls",
    travelCountry: "Greece",
    isMaterialSource: false,
    material: "Ringed baroque freshwater pearl, textured gold vase-shaped cap, 14k gold-fill earwires",
    price: "$110.00",
    dimensions: "Length: 1.8\" · Pearl: 14mm baroque drop",
    description: "A luminous ringed baroque pearl beneath a textured gold vase-shaped cap, inspired by the ancient clay amphorae excavated across the Aegean and Turkish coastlines.",
    origin: "Aegean Aegean Inspiration · Maine Studio Fabricated",
    image: "/travel_inspirations/greece-pair-3-jewelry.jpg",
    altImage: "https://images.squarespace-cdn.com/content/v1/5b882c0b365f0225b70e3aa1/1786657238506-6LEWEBIT3G60N0SN591Z/https%3A%2F%2Fi.etsystatic.com%2F24076881%2Fr%2Fil%2F4f934d%2F2482699713%2Fil_fullxfull.2482699713_os33.jpg",
    modelImage: "/travel_inspirations/germany-pair-3-jewelry.jpg",
    featured: true
  },
  {
    id: "prod-bauhaus-pearl",
    name: "Bauhaus Square Pearl Earrings",
    category: "Earrings",
    productType: "Earrings",
    collection: "Pearls",
    travelCountry: "Germany & the Netherlands",
    isMaterialSource: false,
    material: "Black enamel disc, gold bar, square baroque pearl",
    price: "$105.00",
    dimensions: "Length: 2.1\" · Width: 0.75\"",
    description: "A black enamel disc, a gold bar, and a square baroque pearl: the Bauhaus alphabet of circle, line, and square. A striking synthesis of organic luster and modern constructivism.",
    origin: "Bauhaus Inspired · Handcrafted in Maine",
    image: "/travel_inspirations/germany-pair-1-jewelry.jpg",
    altImage: "/travel_inspirations/germany-pair-2-jewelry.jpg",
    modelImage: "/travel_inspirations/germany-pair-3-jewelry.jpg",
    featured: false
  },
  {
    id: "prod-citrine-armature",
    name: "Raw Citrine Points & Silver Armature",
    category: "Necklaces",
    productType: "Necklaces",
    collection: "Mixed Metals",
    travelCountry: "Brazil",
    isMaterialSource: true,
    material: "Untreated golden citrine points from Brazil, oxidized sterling silver wrapping, copper beads",
    price: "$175.00",
    dimensions: "Center Cluster: 3.1\" width · Silver chain: 20\"",
    description: "Selected for their crystalline amber warmth. Naturally faceted raw citrine points bound in an oxidized wire matrix that allows direct sunlight to pierce through the mineral.",
    origin: "Citrine Mined in Brazil · Wrapped in Maine",
    image: "https://images.squarespace-cdn.com/content/v1/5b882c0b365f0225b70e3aa1/1597610631173-G0Z9BIUTKGQQA79JAPI3/Citrine+points+silver.jpg",
    altImage: "https://images.squarespace-cdn.com/content/v1/5b882c0b365f0225b70e3aa1/1537476309953-DV5JOAJARNACFY2W1DDX/modeling-citrine-necklace.JPG",
    modelImage: "/travel_inspirations/brazil-pair-3-jewelry.jpg",
    featured: true
  },
  {
    id: "prod-caldera",
    name: "Caldera Lava Stone & Brass Crescent Earrings",
    category: "Earrings",
    productType: "Earrings",
    collection: "Black is Back",
    travelCountry: "Guatemala",
    isMaterialSource: false,
    material: "Porous black lava stone discs, coral red spacer, sweeping brass crescent",
    price: "$88.00",
    dimensions: "Length: 2.0\" · Width: 1.0\" · Essential Oil Diffuser Capable",
    description: "Black volcanic lava stone discs with a crimson spacer, the lower disc cradled in a sweeping brass crescent. The porous lava stone also naturally holds a drop of essential oil.",
    origin: "Guatemalan Volcanic Inspiration · Studio Assembled",
    image: "https://images.squarespace-cdn.com/content/v1/5b882c0b365f0225b70e3aa1/1786657407786-RFXK8MW4PWVJ10M80Z19/https%3A%2F%2Fi.etsystatic.com%2F24076881%2Fr%2Fil%2F923bab%2F5999251349%2Fil_fullxfull.5999251349_s24p.jpg",
    altImage: "/travel_inspirations/guatemala-pair-2-jewelry.jpg",
    modelImage: "/travel_inspirations/namibia-pair-1-jewelry.jpg",
    featured: false
  },
  {
    id: "prod-jade-charms",
    name: "Highland Rough Jade Wire Bag Charms",
    category: "Bag Charms",
    productType: "Bag Charms",
    collection: "Geometrics",
    travelCountry: "Guatemala",
    isMaterialSource: true,
    material: "Untreated rough Guatemalan jadeite, hand-spun solid brass wire, swivel clip",
    price: "$65.00",
    dimensions: "Total Drop: 4.5\" · Jade: 1.4\" irregular stone",
    description: "Rough jade hearts gathered directly from lapidaries in Antigua and the highlands, wrapped in heavy sculptural brass wire to accompany your favorite tote or leather bag.",
    origin: "Jadeite Mined in Guatemala · Fabricated in Maine",
    image: "/travel_inspirations/guatemala-pair-1-jewelry.jpg",
    altImage: "https://images.squarespace-cdn.com/content/v1/5b882c0b365f0225b70e3aa1/1786657259059-5GTQGNKEM1U8YGL711M1/https%3A%2F%2Fi.etsystatic.com%2F24076881%2Fr%2Fil%2Fc7c458%2F2414877150%2Fil_fullxfull.2414877150_fq4y.jpg",
    modelImage: "/travel_inspirations/guatemala-pair-3-jewelry.jpg",
    featured: false
  },
  {
    id: "prod-altun-ha",
    name: "Altun Ha Pyrite Cube Earrings",
    category: "Earrings",
    productType: "Earrings",
    collection: "Geometrics",
    travelCountry: "Belize",
    isMaterialSource: false,
    material: "Faceted natural iron pyrite cubes, micro gold beads, 14k gold-fill posts",
    price: "$92.00",
    dimensions: "Drop: 1.5\" · Cube: 6mm",
    description: "Stacked limestone temple steps at Altun Ha inspired these shimmering pyrite cube earrings, which step down with gold beads between each natural mineral stone.",
    origin: "Altun Ha Maya Inspiration · Bench Forged in Maine",
    image: "/travel_inspirations/belize-pair-1-jewelry.jpg",
    altImage: "/travel_inspirations/belize-pair-2-jewelry.jpg",
    modelImage: "/travel_inspirations/belize-pair-3-jewelry.jpg",
    featured: false
  },
  {
    id: "prod-elephant-talisman",
    name: "Jaipur Elephant Brass Talisman",
    category: "Necklaces",
    productType: "Necklaces",
    collection: "Mixed Metals",
    travelCountry: "India",
    isMaterialSource: false,
    material: "Antique carved brass elephant heads, oiled black leather cord, magnetic closure",
    price: "$135.00",
    dimensions: "Cord: 20\" · Elephant Clasp: 2.2\" span",
    description: "Elephants gathered in golden water outside Amber Fort, echoed in cast antique brass elephant heads that interlock around supple oiled leather.",
    origin: "India Expedition · Cape Elizabeth Studio",
    image: "/travel_inspirations/india-pair-1-jewelry.jpg",
    altImage: "/travel_inspirations/india-pair-2-jewelry.jpg",
    modelImage: "/travel_inspirations/india-pair-3-jewelry.jpg",
    featured: false
  },
  {
    id: "prod-coin-pearl-ring",
    name: "Crafted Coin Pearl Studio Ring",
    category: "Rings",
    productType: "Rings",
    collection: "Pearls",
    travelCountry: "Greece",
    isMaterialSource: false,
    material: "Luminous white freshwater coin pearl, hand-hammered sterling silver band",
    price: "$85.00",
    dimensions: "Sizes 6, 7, 8 available · Coin Pearl: 12mm",
    description: "A flush-set iridescent freshwater coin pearl rests on a wide, organically textured sterling silver band cold-hammered on the studio anvil.",
    origin: "Cape Elizabeth, Maine Studio",
    image: "https://images.squarespace-cdn.com/content/v1/5b882c0b365f0225b70e3aa1/1786657181197-OSX439JGIW9HWFHD0OAN/https%3A%2F%2Fi.etsystatic.com%2F24076881%2Fr%2Fil%2F837825%2F5999270815%2Fil_fullxfull.5999270815_4ui8.jpg",
    altImage: "/travel_inspirations/greece-pair-1-jewelry.jpg",
    modelImage: "https://images.squarespace-cdn.com/content/v1/5b882c0b365f0225b70e3aa1/1786657175661-H3MP7IZ64SJDBIXNNAL1/https%3A%2F%2Fi.etsystatic.com%2F24076881%2Fr%2Fil%2Ff84fda%2F5999280529%2Fil_fullxfull.5999280529_2eqo.jpg",
  }
];

// Enrich products with all travel pairs so every single curated travel piece has a full product page!
TRAVEL_DESTINATIONS.forEach(dest => {
  dest.pairs.forEach((pair, idx) => {
    const existing = PRODUCTS.find(p => p.id === pair.id || p.name.toLowerCase() === pair.title.toLowerCase());
    if (!existing) {
      let cat = "Earrings";
      const titleLower = pair.title.toLowerCase();
      if (titleLower.includes("necklace") || titleLower.includes("pendant") || titleLower.includes("collar") || titleLower.includes("choker") || titleLower.includes("talisman") || titleLower.includes("strand")) {
        cat = "Necklaces";
      } else if (titleLower.includes("bracelet") || titleLower.includes("bangle") || titleLower.includes("cuff") || titleLower.includes("set")) {
        cat = "Bracelets";
      } else if (titleLower.includes("ring")) {
        cat = "Rings";
      } else if (titleLower.includes("charm")) {
        cat = "Bag Charms";
      }

      let col = "Mixed Metals";
      if (titleLower.includes("pearl")) col = "Pearls";
      else if (titleLower.includes("jade") || titleLower.includes("sol")) col = "Mayan Sol";
      else if (titleLower.includes("black") || titleLower.includes("bone") || titleLower.includes("lava") || titleLower.includes("dark")) col = "Black is Back";
      else if (titleLower.includes("geometric") || titleLower.includes("cube") || titleLower.includes("spiral") || titleLower.includes("dome") || titleLower.includes("face")) col = "Geometrics";

      PRODUCTS.push({
        id: pair.id,
        name: pair.title,
        category: cat,
        productType: cat,
        collection: col,
        travelCountry: dest.country,
        countryId: dest.id,
        isMaterialSource: dest.isMaterialSource,
        material: "Cold-worked hammered metals, wire armature wrapping, natural minerals and hand-selected travel elements",
        price: idx === 0 ? "$145.00" : idx === 1 ? "$120.00" : "$95.00",
        dimensions: "Studio custom bench scale · One-of-a-kind edition",
        description: pair.caption,
        origin: `${dest.country} ${dest.isMaterialSource ? 'Material Sourcing' : 'Design Inspiration'} · Cape Elizabeth Studio`,
        image: pair.jewelryImage,
        altImage: pair.travelImage,
        modelImage: dest.heroImage,
        featured: false
      });
    }
  });
});

export const getProductById = (id) => {
  return PRODUCTS.find(p => p.id === id || p.id === `prod-${id}` || (id && p.id.includes(id))) || PRODUCTS[0];
};

export const getCountryById = (countryId) => {
  if (!countryId) return TRAVEL_DESTINATIONS[0];
  const cleaned = countryId.toLowerCase().trim();
  return TRAVEL_DESTINATIONS.find(d => d.id === cleaned || d.country.toLowerCase().includes(cleaned)) || TRAVEL_DESTINATIONS[0];
};

export const getCollectionBySlug = (slug) => {
  if (!slug) return COLLECTIONS[0];
  const cleaned = slug.toLowerCase().trim();
  return COLLECTIONS.find(c => c.slug === cleaned || c.id === cleaned || c.name.toLowerCase().replace(/\s+/g, '-') === cleaned) || COLLECTIONS[0];
};

// Masterpiece for spotlight
export const FEATURED_MASTERPIECE = {
  id: "cleo-masterpiece",
  name: "The Cleo Architectural Pendant",
  subtitle: "ANATOMICAL ATELIER SPECIFICATION · ONE OF ONE",
  price: "$150.00",
  category: "Architectural Statement",
  collection: "Geometrics",
  origin: "Cape Elizabeth, Maine Studio",
  dimensions: "Pendant: 2.8\" × 1.4\" · Adjustable 28\" chain",
  material: "Hand-hammered brass, sculptural pierced geometry, unlacquered natural patina",
  mainImage: "https://images.squarespace-cdn.com/content/v1/5b882c0b365f0225b70e3aa1/1786657275999-NO6EK65SN16E85AOD73A/https%3A%2F%2Fi.etsystatic.com%2F24076881%2Fr%2Fil%2Fec8df4%2F3451414898%2Fil_fullxfull.3451414898_qvov.jpg",
  annotations: [
    { id: 1, number: "01", title: "COLD-FORGED BRASS", detail: "Hammered on an antique iron anvil to produce micro-faceted light play." },
    { id: 2, number: "02", title: "NEGATIVE SPACE", detail: "Precision pierced geometric cutout revealing the wearer's neckline." },
    { id: 3, number: "03", title: "KINETIC BALANCE", detail: "Weighted for a smooth, flush rest against the collarbone without twisting." },
    { id: 4, number: "04", title: "TIMELESS PATINA", detail: "Unlacquered natural metal that deepens in warmth through daily skin contact." }
  ]
};

// ==========================================
// 5. CORA'S CUSTOMERS (REAL ETSY REVIEWS & PHOTOS)
// ==========================================
export const CUSTOMER_STORIES = [
  {
    id: "cust-1",
    author: "Elena Rostova",
    location: "Portland, ME",
    quote: "I bought the Mayan Sol Turquoise earrings and I get stopped everywhere I go. The weight is surprisingly light for such solid metalwork, and the turquoise has incredible character.",
    piece: "Mayan Sol Turquoise Earrings",
    rating: 5,
    date: "Verified Etsy Collector · May 2026",
    photo: "https://images.squarespace-cdn.com/content/v1/5b882c0b365f0225b70e3aa1/1593920126047-TJDE8V45MWZW4M0KCUIF/Model+look+right.jpg"
  },
  {
    id: "cust-2",
    author: "Claire D'Agostino",
    location: "Boston, MA",
    quote: "Receiving the Cleo pendant was an experience in itself. The black studio box with Cora's logo and the handwritten note made it feel like a private gallery commission.",
    piece: "The Cleo Architectural Pendant",
    rating: 5,
    date: "Verified Etsy Collector · April 2026",
    photo: "https://images.squarespace-cdn.com/content/v1/5b882c0b365f0225b70e3aa1/1537476309953-DV5JOAJARNACFY2W1DDX/modeling-citrine-necklace.JPG"
  },
  {
    id: "cust-3",
    author: "Sarah Lindgren",
    location: "Seattle, WA",
    quote: "The magnetic handshake clasp is absolute genius. I struggle with small lobster clasps, but this snaps together effortlessly and stays securely locked all day.",
    piece: "Interlocking Hands Friendship Necklace",
    rating: 5,
    date: "Verified Etsy Collector · March 2026",
    photo: "https://images.squarespace-cdn.com/content/v1/5b882c0b365f0225b70e3aa1/1786657287352-1BZW6UYBIRV3EN9HT7A5/https%3A%2F%2Fi.etsystatic.com%2F24076881%2Fr%2Fil%2F30c173%2F3451524516%2Fil_fullxfull.3451524516_pvxa.jpg"
  },
  {
    id: "cust-4",
    author: "Miriam Chen",
    location: "Chicago, IL",
    quote: "The baroque pearls with the gold coiled wire are breathtaking. You can immediately see the human hand in every hammer stroke. No duplicate molds—pure artisan integrity.",
    piece: "Amphora Baroque Pearl Drops",
    rating: 5,
    date: "Verified Etsy Collector · February 2026",
    photo: "https://images.squarespace-cdn.com/content/v1/5b882c0b365f0225b70e3aa1/1543638483680-QVI8L5DOF0HBO97S3TLS/IMG_3387+%282%29.JPG"
  }
];

// ==========================================
// 6. STUDIO ASSURANCES: PACKAGING, SHIPPING & GUARANTEES
// ==========================================
export const STUDIO_ASSURANCES = {
  packaging: {
    title: "Signature Studio Packaging",
    subtitle: "Prepared by hand in Cape Elizabeth, Maine",
    description: "Every order arrives in our custom rigid black gift box debossed with the signature Cora Hornby logo, tied with grosgrain ribbon, and cushioned in anti-tarnish velvet. Ready for immediate gifting or safe lifelong keeping.",
    features: [
      "Rigid debossed matte-black studio gift box",
      "Protective anti-tarnish micro-fiber velvet pouch",
      "Handwritten provenance card signed by Cora",
      "Sustainable recycled paper and compostable mailers"
    ]
  },
  shipping: {
    title: "Careful Studio Dispatch",
    subtitle: "Insured transit directly from the bench",
    description: "Because every piece is handcrafted, orders are prepared and shipped directly from our Cape Elizabeth studio within 1–2 business days via USPS Priority Mail with tracking and full transit insurance.",
    features: [
      "Complimentary domestic shipping on orders over $100",
      "Fully tracked and insured USPS Priority transit",
      "Express overnight courier option at checkout",
      "International delivery to over 40 countries"
    ]
  },
  guarantees: {
    title: "The Studio Commitment",
    subtitle: "Risk-free collecting & ethical provenance",
    description: "We believe buying handcrafted jewelry should be joyful and completely confident. Every piece is guaranteed for life against bench defects, with a full 30-day money-back guarantee.",
    features: [
      "100% Money-Back Guarantee within 30 days of receipt",
      "Free complimentary chain & cord length adjustments",
      "100% ethically sourced minerals and conflict-free metals",
      "Guaranteed one-of-a-kind uniqueness (no industrial duplication)"
    ]
  }
};

// ==========================================
// 7. MATERIAL FRAGMENTS (EDITORIAL HIGHLIGHTS)
// ==========================================
export const MATERIALS_EDITORIAL = [
  {
    word: "METALS",
    title: "Cold-Forged Hammered Metals",
    subtitle: "MAINE BENCH CRAFT · 01",
    tag: "HAMMERED METALS",
    description: "Solid brass, sterling silver, oxidized copper, and gunmetal cold-hammered on an antique bench anvil to capture micro-facets of coastal Maine light.",
    origin: "Cape Elizabeth Studio Bench",
    image: "/travel_inspirations/greece-pair-2-jewelry.jpg"
  },
  {
    word: "JADE",
    title: "Highland Guatemalan Jade",
    subtitle: "MATERIAL HARVEST · 02",
    tag: "GUATEMALA SOURCED",
    description: "Carved deep mountain jade sourced directly from local artisan workshops in Antigua and the Guatemalan highlands during Cora's travels.",
    origin: "Guatemala Highlands",
    image: "/travel_inspirations/guatemala-pair-1-jewelry.jpg"
  },
  {
    word: "CITRINE",
    title: "Brazilian Citrine & Amethyst",
    subtitle: "MATERIAL HARVEST · 03",
    tag: "BRAZIL SOURCED",
    description: "Golden honey citrine crystals and deep violet amethysts sourced directly from South American lapidaries, preserved in rich crystalline cuts.",
    origin: "Minas Gerais, Brazil",
    image: "/travel_inspirations/brazil-pair-2-jewelry.jpg"
  },
  {
    word: "PEARLS",
    title: "Baroque & Freshwater Pearls",
    subtitle: "DUTCH MASTER LUSTER · 04",
    tag: "FRESHWATER PEARLS",
    description: "Lustrous irregular baroque and coin pearls caged in architectural gold wire and hammered posts, directly inspired by Vermeer's portraits in Amsterdam.",
    origin: "Artisan Cultured",
    image: "/travel_inspirations/germany-pair-3-jewelry.jpg"
  },
  {
    word: "DRUZY",
    title: "Titanium Quartz Druzies & Crystals",
    subtitle: "MINERAL FIRE · 05",
    tag: "DRUZIES & CRYSTALS",
    description: "Uncut quartz druzies, Austrian crystals, and African bone catching natural light across organic micro-geode crystalline faces.",
    origin: "Global Artisan Lapidaries",
    image: "https://images.squarespace-cdn.com/content/v1/5b882c0b365f0225b70e3aa1/e7ab7a3a-c133-4b24-b004-9266589ac8f5/IMG_7358.jpeg"
  }
];
