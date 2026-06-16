export const categories = [
  {
    name: "Dining Tables",
    description: "Statement dining sets for family meals, hosting, and refined everyday living.",
    image: "https://images.unsplash.com/photo-1617103996702-96ff29b1c467?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Living Room Seats",
    description: "Elegant sofas and lounge sets built for comfort, scale, and presence.",
    image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Chairs",
    description: "Accent, dining, and office chairs with tailored finishes and modern silhouettes.",
    image: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Bedroom Beds",
    description: "Custom bed frames, headboards, and bedroom concepts with hotel-level polish.",
    image: "https://images.unsplash.com/photo-1615874694520-474822394e73?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Side Tables",
    description: "Compact pieces with rich texture, useful storage, and graceful detail.",
    image: "https://images.unsplash.com/photo-1532372576444-dda954194ad0?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Office Furniture",
    description: "Desks, executive chairs, shelving, and reception pieces for polished workspaces.",
    image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Custom Interior Designs",
    description: "Room concepts, finish palettes, and bespoke furniture for complete transformations.",
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=900&q=85",
  },
];

export const products = [
  {
    id: "royal-comfort-sofa",
    name: "Royal Comfort 7-Seater Sofa",
    category: "Living Room Seats",
    description: "A generous lounge set with deep cushions, tailored arms, and custom fabric options.",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=900&q=85",
    startingPrice: "Request Quote",
    customizable: true,
    availableColors: ["Beige", "Charcoal", "Forest", "Brown"],
    availableSizes: ["5-seater", "7-seater", "L-shaped"],
    availableMaterials: ["Fabric", "Leather", "Velvet"],
  },
  {
    id: "marble-dining-set",
    name: "Modern Marble Dining Set",
    category: "Dining Tables",
    description: "A sculptural dining centerpiece with premium finishes and flexible chair counts.",
    image: "https://images.unsplash.com/photo-1617104678098-de229db51175?auto=format&fit=crop&w=900&q=85",
    startingPrice: "From UGX 2.8M",
    customizable: true,
    availableColors: ["White", "Walnut", "Black"],
    availableSizes: ["4 chairs", "6 chairs", "8 chairs"],
    availableMaterials: ["Wood", "Glass", "Marble finish"],
  },
  {
    id: "tufted-king-bed",
    name: "Elegant Tufted King Bed",
    category: "Bedroom Beds",
    description: "A plush statement bed with a soft upholstered headboard and custom dimensions.",
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=85",
    startingPrice: "From UGX 1.9M",
    customizable: true,
    availableColors: ["Beige", "Ash", "Navy", "Custom"],
    availableSizes: ["Queen", "King"],
    availableMaterials: ["Fabric", "Velvet", "Leather"],
  },
  {
    id: "minimal-side-table",
    name: "Minimalist Side Table",
    category: "Side Tables",
    description: "A refined companion piece for bedrooms, lounges, and reception spaces.",
    image: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=900&q=85",
    startingPrice: "From UGX 350K",
    customizable: true,
    availableColors: ["Oak", "Walnut", "Black", "White"],
    availableSizes: ["Small", "Medium", "Large"],
    availableMaterials: ["Wood", "Metal", "Glass"],
  },
  {
    id: "executive-accent-chair",
    name: "Executive Accent Chair",
    category: "Chairs",
    description: "A confident accent chair for reading corners, lounges, offices, and bedrooms.",
    image: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&w=900&q=85",
    startingPrice: "Request Quote",
    customizable: true,
    availableColors: ["Camel", "Olive", "Ivory", "Black"],
    availableSizes: ["Standard", "Wide"],
    availableMaterials: ["Leather", "Fabric", "Velvet"],
  },
  {
    id: "luxury-bedroom-set",
    name: "Luxury Bedroom Set",
    category: "Bedroom Designs",
    description: "A complete bedroom proposal with bed, side tables, finishes, and storage planning.",
    image: "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=900&q=85",
    startingPrice: "Request Quote",
    customizable: true,
    availableColors: ["Warm beige", "Walnut", "Cream", "Custom"],
    availableSizes: ["Queen", "King", "Full room"],
    availableMaterials: ["Wood", "Fabric", "Velvet"],
  },
];

export const customizerGroups = {
  beds: {
    label: "Beds",
    product: "Luxury Bed",
    image: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=900&q=85",
    options: {
      size: ["Single", "Double", "Queen", "King"],
      design: ["Minimalist", "Luxury Tufted", "Wooden Frame", "Storage Bed"],
      color: ["Beige", "Brown", "White", "Black", "Custom"],
      material: ["Wood", "Fabric", "Leather", "Velvet"],
    },
  },
  sofas: {
    label: "Sofas",
    product: "Living Room Sofa",
    image: "https://images.unsplash.com/photo-1550254478-ead40cc54513?auto=format&fit=crop&w=900&q=85",
    options: {
      seaters: ["1-seater", "2-seater", "3-seater", "5-seater", "7-seater", "L-shaped"],
      color: ["Cream", "Charcoal", "Brown", "Olive", "Custom"],
      material: ["Fabric", "Leather", "Velvet"],
      cushion: ["Soft plush", "Firm tailored", "Channel stitched"],
      armrest: ["Slim", "Rounded", "Wide block"],
    },
  },
  dining: {
    label: "Dining",
    product: "Dining Table",
    image: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?auto=format&fit=crop&w=900&q=85",
    options: {
      chairs: ["2", "4", "6", "8", "10"],
      shape: ["Round", "Rectangular", "Oval"],
      material: ["Wood", "Glass", "Marble finish"],
      finish: ["Natural oak", "Walnut", "Black", "White"],
    },
  },
  accents: {
    label: "Chairs & Tables",
    product: "Accent Piece",
    image: "https://images.unsplash.com/photo-1540638349517-3abd5afc5847?auto=format&fit=crop&w=900&q=85",
    options: {
      color: ["Ivory", "Walnut", "Black", "Brass", "Custom"],
      style: ["Modern", "Classic", "Executive", "Minimal"],
      material: ["Wood", "Metal", "Leather", "Glass"],
      size: ["Compact", "Standard", "Oversized"],
    },
  },
};

export const galleryImages = [
  {
    title: "Living Room Setup",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1000&q=85",
  },
  {
    title: "Bedroom Setup",
    image: "https://images.unsplash.com/photo-1617325247661-675ab4b64ae2?auto=format&fit=crop&w=1000&q=85",
  },
  {
    title: "Dining Area",
    image: "https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=1000&q=85",
  },
  {
    title: "Office Setup",
    image: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=1000&q=85",
  },
  {
    title: "Side Tables & Decor",
    image: "https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=1000&q=85",
  },
  {
    title: "Custom Furniture",
    image: "https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?auto=format&fit=crop&w=1000&q=85",
  },
];

export const testimonials = [
  {
    quote:
      "Jazira Interiors helped us redesign our living room with beautiful seats that matched our home perfectly.",
    name: "Amina K.",
    location: "Kampala",
  },
  {
    quote:
      "The custom dining set made our house feel complete. The finish, comfort, and guidance were excellent.",
    name: "Daniel M.",
    location: "Entebbe",
  },
  {
    quote:
      "We loved seeing options before ordering. It made choosing materials and colors much easier.",
    name: "Sarah N.",
    location: "Mukono",
  },
];

export const benefits = [
  "Curated furniture for homes and offices",
  "Clear product details before inquiry",
  "Custom sizes, colors, and materials",
  "Friendly WhatsApp quote support",
  "Premium presentation for every category",
  "Flexible payment preferences",
  "Delivery planning for local orders",
  "Comfort-focused furniture selection",
  "Elegant inspiration for complete rooms",
  "Personal support from inquiry to delivery",
];

export const showroomStats = [
  {
    value: "24/7",
    label: "Showroom access",
    detail: "Customers can browse beautiful pieces whenever interest is highest.",
  },
  {
    value: "3 taps",
    label: "Inquiry path",
    detail: "View a piece, customize it, and send a clear WhatsApp quote request.",
  },
  {
    value: "1 brand",
    label: "Premium impression",
    detail: "Every product, room setup, and detail feels consistent and intentional.",
  },
];

export const showroomJourney = [
  "A customer sees Jazira from Instagram, TikTok, referral, or Google.",
  "They land on a refined showroom that immediately builds trust.",
  "They browse collections, compare styles, and customize a preferred piece.",
  "Jazira receives a cleaner inquiry with product, finish, location, and payment preference.",
];
