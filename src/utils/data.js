const nairaFormatter = new Intl.NumberFormat("en-NG", {
  style: "currency",
  currency: "NGN",
  maximumFractionDigits: 0
});

export const companyName = "DanAuto";

export function formatNaira(value) {
  return nairaFormatter.format(value);
}

export const heroMetrics = [
  { label: "Inspection Focus", value: "Docs + condition checks", delay: 0.1 },
  { label: "Vehicle Types", value: "8 popular body styles", delay: 0.2 },
  { label: "Support", value: "Sales, service, and fleet", delay: 0.3 }
];

export const carTypes = [
  "All",
  "Luxury Sedan",
  "Executive SUV",
  "Performance Coupe",
  "Roadster",
  "Urban Crossover",
  "Performance EV",
  "Premium Pickup",
  "Executive Van"
];

export const vehicleTypeTabs = [
  "All",
  "Sedan",
  "Hatchback",
  "Coupe",
  "Convertible",
  "SUV",
  "Crossover (CUV)",
  "Pickup Truck",
  "Minivan",
  "Van",
  "Bus",
  "Electric Vehicles (EV)",
  "Hybrid Vehicles",
  "Plug-in Hybrid (PHEV)",
  "Sports Cars",
  "Supercars",
  "Hypercars",
  "Off-road vehicles",
  "Commercial trucks",
  "Emergency vehicles"
];

export const vehicleTypeGroups = [
  {
    title: "Passenger Cars",
    types: ["Sedan", "Hatchback", "Coupe", "Convertible"]
  },
  {
    title: "Utility Vehicles",
    types: ["SUV", "Crossover (CUV)", "Pickup Truck"]
  },
  {
    title: "Larger Vehicles",
    types: ["Minivan", "Van", "Bus"]
  },
  {
    title: "Electric & Hybrid Vehicles",
    types: ["Electric Vehicles (EV)", "Hybrid Vehicles", "Plug-in Hybrid (PHEV)"]
  },
  {
    title: "Performance Vehicles",
    types: ["Sports Cars", "Supercars", "Hypercars"]
  },
  {
    title: "Specialized Vehicles",
    types: ["Off-road vehicles", "Commercial trucks", "Emergency vehicles"]
  }
];

export const brandGroups = [
  {
    title: "Popular & Luxury Brands",
    brands: [
      "Toyota",
      "Honda",
      "Nissan",
      "Hyundai",
      "Kia",
      "Ford",
      "Chevrolet",
      "Volkswagen",
      "Peugeot",
      "Renault"
    ]
  },
  {
    title: "Luxury Brands",
    brands: [
      "Mercedes-Benz",
      "BMW",
      "Audi",
      "Lexus",
      "Jaguar",
      "Land Rover",
      "Porsche",
      "Bentley",
      "Rolls-Royce"
    ]
  },
  {
    title: "Electric & Hybrid Brands",
    brands: ["Tesla", "Rivian", "Lucid Motors", "BYD", "NIO"]
  },
  {
    title: "Sports & Exotic Brands",
    brands: ["Ferrari", "Lamborghini", "McLaren", "Bugatti", "Aston Martin"]
  }
];

const catalogTypeImageMap = {
  Sedan:
    "https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=1200&q=80",
  Hatchback:
    "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?auto=format&fit=crop&w=1200&q=80",
  Coupe:
    "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1200&q=80",
  Convertible:
    "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&w=1200&q=80",
  SUV:
    "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?auto=format&fit=crop&w=1200&q=80",
  "Crossover (CUV)":
    "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?auto=format&fit=crop&w=1200&q=80",
  "Pickup Truck":
    "https://images.unsplash.com/photo-1559416523-140ddc3d238c?auto=format&fit=crop&w=1200&q=80",
  Minivan:
    "https://images.unsplash.com/photo-1542282088-fe8426682b8f?auto=format&fit=crop&w=1200&q=80",
  Van:
    "https://images.unsplash.com/photo-1542282088-fe8426682b8f?auto=format&fit=crop&w=1200&q=80",
  Bus:
    "https://images.unsplash.com/photo-1542282088-fe8426682b8f?auto=format&fit=crop&w=1200&q=80",
  "Electric Vehicles (EV)":
    "https://images.unsplash.com/photo-1553440569-bcc63803a83d?auto=format&fit=crop&w=1200&q=80",
  "Hybrid Vehicles":
    "https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=1200&q=80",
  "Plug-in Hybrid (PHEV)":
    "https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=1200&q=80",
  "Sports Cars":
    "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80",
  Supercars:
    "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?auto=format&fit=crop&w=1200&q=80",
  Hypercars:
    "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?auto=format&fit=crop&w=1200&q=80",
  "Off-road vehicles":
    "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?auto=format&fit=crop&w=1200&q=80",
  "Commercial trucks":
    "https://images.unsplash.com/photo-1559416523-140ddc3d238c?auto=format&fit=crop&w=1200&q=80",
  "Emergency vehicles":
    "https://images.unsplash.com/photo-1542282088-fe8426682b8f?auto=format&fit=crop&w=1200&q=80"
};

const brandAccentMap = {
  Toyota: "from-luxury-blue/18 via-transparent to-luxury-gold/12",
  Honda: "from-luxury-gold/16 via-transparent to-luxury-blue/14",
  Nissan: "from-luxury-blue/14 via-transparent to-luxury-gold/14",
  Hyundai: "from-luxury-blue/16 via-transparent to-luxury-gold/12",
  Kia: "from-luxury-gold/12 via-transparent to-luxury-blue/16",
  Ford: "from-luxury-blue/18 via-transparent to-luxury-gold/16",
  Chevrolet: "from-luxury-gold/18 via-transparent to-luxury-blue/12",
  Volkswagen: "from-luxury-blue/18 via-transparent to-luxury-gold/10",
  Peugeot: "from-luxury-gold/14 via-transparent to-luxury-blue/16",
  Renault: "from-luxury-blue/16 via-transparent to-luxury-gold/14",
  "Mercedes-Benz": "from-luxury-blue/18 via-transparent to-luxury-gold/18",
  BMW: "from-luxury-blue/20 via-transparent to-luxury-gold/12",
  Audi: "from-luxury-blue/16 via-transparent to-luxury-gold/16",
  Lexus: "from-luxury-gold/18 via-transparent to-luxury-blue/16",
  Jaguar: "from-luxury-gold/18 via-transparent to-luxury-blue/18",
  "Land Rover": "from-luxury-blue/14 via-transparent to-luxury-gold/18",
  Porsche: "from-luxury-gold/20 via-transparent to-luxury-blue/16",
  Bentley: "from-luxury-gold/20 via-transparent to-white/10",
  "Rolls-Royce": "from-white/10 via-transparent to-luxury-gold/20",
  Tesla: "from-luxury-blue/24 via-transparent to-white/10",
  Rivian: "from-luxury-blue/14 via-transparent to-luxury-gold/20",
  "Lucid Motors": "from-luxury-gold/18 via-transparent to-luxury-blue/14",
  BYD: "from-luxury-blue/18 via-transparent to-luxury-gold/14",
  NIO: "from-luxury-blue/18 via-transparent to-white/10",
  Ferrari: "from-luxury-gold/18 via-transparent to-luxury-blue/12",
  Lamborghini: "from-luxury-gold/22 via-transparent to-luxury-blue/14",
  McLaren: "from-luxury-blue/18 via-transparent to-luxury-gold/18",
  Bugatti: "from-luxury-blue/22 via-transparent to-luxury-gold/16",
  "Aston Martin": "from-luxury-gold/18 via-transparent to-luxury-blue/16"
};

const brandCatalogDescriptions = {
  Toyota: "Reliable global mobility with practical sedans, SUVs, and rugged icons.",
  Honda: "Smart engineering, balanced performance, and everyday usability.",
  Nissan: "Urban-friendly crossovers and dependable passenger vehicles.",
  Hyundai: "Modern design-led vehicles spanning sedans, SUVs, and family transport.",
  Kia: "Value-forward styling with practical family-focused body styles.",
  Ford: "Global utility, everyday passenger cars, and pickup capability.",
  Chevrolet: "Mainstream passenger and utility vehicles with broad appeal.",
  Volkswagen: "European-inspired everyday cars and refined utility vehicles.",
  Peugeot: "French design character across practical and family-oriented vehicles.",
  Renault: "Compact mobility and efficient passenger-car engineering.",
  "Mercedes-Benz": "Luxury sedans and SUVs defined by prestige and refinement.",
  BMW: "Driver-focused premium sedans and SUVs with performance DNA.",
  Audi: "Modern premium vehicles with technical styling and strong utility options.",
  Lexus: "Quiet luxury focused on comfort, reliability, and premium SUV ownership.",
  Jaguar: "Elegant premium touring with sharp styling and heritage appeal.",
  "Land Rover": "Luxury off-road capability and commanding SUV presence.",
  Porsche: "Precision performance and premium sports-car culture.",
  Bentley: "Ultra-luxury craftsmanship with grand touring presence.",
  "Rolls-Royce": "The highest tier of handcrafted luxury motoring.",
  Tesla: "Electric-first product design built around software and EV performance.",
  Rivian: "Adventure-ready electric utility vehicles with off-road capability.",
  "Lucid Motors": "Advanced luxury EV architecture with range and premium interior focus.",
  BYD: "Electric and plug-in hybrid vehicles with strong global scale.",
  NIO: "Software-led EV innovation and premium electric design.",
  Ferrari: "Heritage performance, emotional design, and exotic engineering.",
  Lamborghini: "Extreme supercar theatre and dramatic design language.",
  McLaren: "Technical supercar performance shaped by motorsport thinking.",
  Bugatti: "Hypercar excess, speed, and rarity at the top of the market.",
  "Aston Martin": "British grand touring elegance with sports-car pedigree."
};

const brandModelMap = {
  Toyota: [
    { name: "Corolla", types: ["Sedan"] },
    { name: "Camry", types: ["Sedan"] },
    { name: "RAV4", types: ["SUV", "Crossover (CUV)"] },
    { name: "Highlander", types: ["SUV"] },
    { name: "Land Cruiser", types: ["SUV", "Off-road vehicles"] }
  ],
  Honda: [
    { name: "Civic", types: ["Sedan", "Hatchback"] },
    { name: "Accord", types: ["Sedan"] },
    { name: "CR-V", types: ["SUV", "Crossover (CUV)"] },
    { name: "Pilot", types: ["SUV"] },
    { name: "HR-V", types: ["Crossover (CUV)"] }
  ],
  "Mercedes-Benz": [
    { name: "C-Class", types: ["Sedan"] },
    { name: "E-Class", types: ["Sedan"] },
    { name: "S-Class", types: ["Sedan"] },
    { name: "GLE", types: ["SUV"] },
    { name: "G-Wagon", types: ["SUV", "Off-road vehicles"] }
  ],
  BMW: [
    { name: "3 Series", types: ["Sedan"] },
    { name: "5 Series", types: ["Sedan"] },
    { name: "7 Series", types: ["Sedan"] },
    { name: "X5", types: ["SUV"] },
    { name: "X6", types: ["SUV", "Sports Cars"] }
  ],
  Tesla: [
    { name: "Model S", types: ["Electric Vehicles (EV)", "Sedan"] },
    { name: "Model 3", types: ["Electric Vehicles (EV)", "Sedan"] },
    { name: "Model X", types: ["Electric Vehicles (EV)", "SUV"] },
    { name: "Model Y", types: ["Electric Vehicles (EV)", "Crossover (CUV)"] }
  ],
  Ford: [
    { name: "Focus", types: ["Hatchback"] },
    { name: "Fusion", types: ["Sedan"] },
    { name: "Explorer", types: ["SUV"] },
    { name: "Escape", types: ["Crossover (CUV)"] },
    { name: "F-150", types: ["Pickup Truck", "Commercial trucks"] }
  ],
  Hyundai: [
    { name: "Elantra", types: ["Sedan"] },
    { name: "Sonata", types: ["Sedan"] },
    { name: "Tucson", types: ["SUV", "Crossover (CUV)"] },
    { name: "Santa Fe", types: ["SUV"] }
  ],
  Kia: [
    { name: "Rio", types: ["Hatchback"] },
    { name: "Sportage", types: ["SUV", "Crossover (CUV)"] },
    { name: "Sorento", types: ["SUV"] },
    { name: "Telluride", types: ["SUV"] }
  ],
  Lexus: [
    { name: "RX", types: ["SUV"] },
    { name: "ES", types: ["Sedan"] },
    { name: "GX", types: ["SUV", "Off-road vehicles"] },
    { name: "LX", types: ["SUV", "Off-road vehicles"] }
  ],
  Nissan: [
    { name: "Altima", types: ["Sedan"] },
    { name: "Maxima", types: ["Sedan"] },
    { name: "Rogue", types: ["Crossover (CUV)"] },
    { name: "Pathfinder", types: ["SUV"] }
  ],
  Chevrolet: [
    { name: "Spark", types: ["Hatchback"] },
    { name: "Aveo", types: ["Sedan"] },
    { name: "Malibu", types: ["Sedan"] },
    { name: "Impala", types: ["Sedan"] },
    { name: "Camaro", types: ["Sports Cars", "Coupe"] },
    { name: "Corvette", types: ["Sports Cars", "Supercars"] },
    { name: "Equinox", types: ["SUV", "Crossover (CUV)"] },
    { name: "Traverse", types: ["SUV"] },
    { name: "Tahoe", types: ["SUV"] },
    { name: "Suburban", types: ["SUV"] },
    { name: "Silverado", types: ["Pickup Truck", "Commercial trucks"] }
  ],
  Volkswagen: [
    { name: "Polo", types: ["Hatchback"] },
    { name: "Golf", types: ["Hatchback"] },
    { name: "Jetta", types: ["Sedan"] },
    { name: "Passat", types: ["Sedan"] },
    { name: "Arteon", types: ["Sedan"] },
    { name: "Tiguan", types: ["SUV", "Crossover (CUV)"] },
    { name: "Touareg", types: ["SUV"] },
    { name: "T-Cross", types: ["Crossover (CUV)"] },
    { name: "Taos", types: ["Crossover (CUV)"] }
  ],
  Peugeot: [
    { name: "108", types: ["Hatchback"] },
    { name: "208", types: ["Hatchback"] },
    { name: "308", types: ["Hatchback"] },
    { name: "408", types: ["Sedan"] },
    { name: "508", types: ["Sedan"] },
    { name: "2008", types: ["Crossover (CUV)"] },
    { name: "3008", types: ["SUV", "Crossover (CUV)"] },
    { name: "5008", types: ["SUV"] },
    { name: "Landtrek", types: ["Pickup Truck", "Commercial trucks"] }
  ],
  Audi: [
    { name: "A3", types: ["Sedan"] },
    { name: "A4", types: ["Sedan"] },
    { name: "A6", types: ["Sedan"] },
    { name: "A8", types: ["Sedan"] },
    { name: "Q3", types: ["SUV", "Crossover (CUV)"] },
    { name: "Q5", types: ["SUV"] },
    { name: "Q7", types: ["SUV"] },
    { name: "Q8", types: ["SUV"] },
    { name: "e-tron", types: ["Electric Vehicles (EV)", "SUV"] },
    { name: "TT", types: ["Sports Cars", "Coupe"] },
    { name: "R8", types: ["Supercars"] }
  ],
  Jaguar: [
    { name: "XE", types: ["Sedan"] },
    { name: "XF", types: ["Sedan"] },
    { name: "XJ", types: ["Sedan"] },
    { name: "F-Type", types: ["Sports Cars", "Coupe"] },
    { name: "E-PACE", types: ["Crossover (CUV)"] },
    { name: "F-PACE", types: ["SUV"] },
    { name: "I-PACE", types: ["Electric Vehicles (EV)", "SUV"] }
  ],
  Renault: [
    { name: "Kwid", types: ["Hatchback"] },
    { name: "Clio", types: ["Hatchback"] },
    { name: "Megane", types: ["Hatchback"] },
    { name: "Talisman", types: ["Sedan"] },
    { name: "Duster", types: ["SUV", "Off-road vehicles"] },
    { name: "Captur", types: ["Crossover (CUV)"] },
    { name: "Koleos", types: ["SUV"] },
    { name: "Triber", types: ["Minivan"] }
  ],
  "Land Rover": [
    { name: "Defender", types: ["SUV", "Off-road vehicles"] },
    { name: "Discovery", types: ["SUV", "Off-road vehicles"] },
    { name: "Discovery Sport", types: ["SUV"] },
    { name: "Range Rover", types: ["SUV"] },
    { name: "Range Rover Sport", types: ["SUV", "Sports Cars"] },
    { name: "Range Rover Velar", types: ["SUV"] },
    { name: "Range Rover Evoque", types: ["SUV", "Crossover (CUV)"] }
  ],
  Porsche: [
    { name: "718 Cayman", types: ["Sports Cars", "Coupe"] },
    { name: "718 Boxster", types: ["Sports Cars", "Convertible"] },
    { name: "911", types: ["Sports Cars", "Coupe"] },
    { name: "Panamera", types: ["Sedan"] },
    { name: "Macan", types: ["SUV", "Crossover (CUV)"] },
    { name: "Cayenne", types: ["SUV"] },
    { name: "Taycan", types: ["Electric Vehicles (EV)", "Sedan"] }
  ],
  Bentley: [
    { name: "Continental GT", types: ["Coupe", "Sports Cars"] },
    { name: "Flying Spur", types: ["Sedan"] },
    { name: "Bentayga", types: ["SUV"] },
    { name: "Mulsanne", types: ["Sedan"] }
  ],
  "Rolls-Royce": [
    { name: "Phantom", types: ["Sedan"] },
    { name: "Ghost", types: ["Sedan"] },
    { name: "Wraith", types: ["Coupe"] },
    { name: "Dawn", types: ["Convertible"] },
    { name: "Cullinan", types: ["SUV"] },
    { name: "Boat Tail", types: ["Convertible", "Supercars"] }
  ],
  Rivian: [
    { name: "R1T", types: ["Electric Vehicles (EV)", "Pickup Truck"] },
    { name: "R1S", types: ["Electric Vehicles (EV)", "SUV"] }
  ],
  "Lucid Motors": [
    { name: "Lucid Air Pure", types: ["Electric Vehicles (EV)", "Sedan"] },
    { name: "Lucid Air Touring", types: ["Electric Vehicles (EV)", "Sedan"] },
    { name: "Lucid Air Grand Touring", types: ["Electric Vehicles (EV)", "Sedan"] },
    { name: "Lucid Air Dream Edition", types: ["Electric Vehicles (EV)", "Sedan"] }
  ],
  BYD: [
    { name: "Tang", types: ["Electric Vehicles (EV)", "SUV"] },
    { name: "Han", types: ["Electric Vehicles (EV)", "Sedan"] },
    { name: "Atto 3", types: ["Electric Vehicles (EV)", "Crossover (CUV)"] },
    { name: "Dolphin", types: ["Electric Vehicles (EV)", "Hatchback"] },
    { name: "Seal", types: ["Electric Vehicles (EV)", "Sedan"] }
  ],
  Ferrari: [
    { name: "296 GTB", types: ["Supercars"] },
    { name: "F8 Tributo", types: ["Supercars"] },
    { name: "Roma", types: ["Sports Cars", "Coupe"] },
    { name: "SF90 Stradale", types: ["Hypercars"] },
    { name: "Portofino M", types: ["Convertible", "Sports Cars"] },
    { name: "812 Superfast", types: ["Supercars"] }
  ],
  NIO: [
    { name: "ES6", types: ["Electric Vehicles (EV)", "SUV"] },
    { name: "ES8", types: ["Electric Vehicles (EV)", "SUV"] },
    { name: "EC6", types: ["Electric Vehicles (EV)", "Crossover (CUV)"] },
    { name: "ET7", types: ["Electric Vehicles (EV)", "Sedan"] },
    { name: "ET5", types: ["Electric Vehicles (EV)", "Sedan"] }
  ],
  Lamborghini: [
    { name: "Aventador", types: ["Hypercars"] },
    { name: "Huracan", types: ["Supercars"] },
    { name: "Urus", types: ["SUV"] },
    { name: "Gallardo", types: ["Sports Cars", "Coupe"] },
    { name: "Sian", types: ["Hypercars"] }
  ],
  McLaren: [
    { name: "570S", types: ["Sports Cars", "Coupe"] },
    { name: "600LT", types: ["Supercars"] },
    { name: "720S", types: ["Supercars"] },
    { name: "GT", types: ["Sports Cars", "Coupe"] },
    { name: "Artura", types: ["Plug-in Hybrid (PHEV)", "Supercars"] }
  ],
  Bugatti: [
    { name: "Chiron", types: ["Hypercars"] },
    { name: "Veyron", types: ["Hypercars"] },
    { name: "Divo", types: ["Hypercars"] },
    { name: "Centodieci", types: ["Hypercars"] },
    { name: "La Voiture Noire", types: ["Hypercars"] }
  ],
  "Aston Martin": [
    { name: "Vantage", types: ["Sports Cars", "Coupe"] },
    { name: "DB11", types: ["Sports Cars", "Coupe"] },
    { name: "DBX", types: ["SUV"] },
    { name: "DBS Superleggera", types: ["Supercars"] },
    { name: "Valkyrie", types: ["Hypercars"] }
  ]
};

function slugify(value) {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

export const fuelTypeOptions = [
  "All Fuel Types",
  "Petrol",
  "Diesel",
  "Hybrid",
  "Electric"
];

export const priceRangeOptions = [
  { label: "All Prices", value: "all", min: 0, max: Number.POSITIVE_INFINITY },
  { label: "Under ₦30M", value: "under-30", min: 0, max: 30000000 },
  { label: "₦30M - ₦60M", value: "30-60", min: 30000000, max: 60000000 },
  { label: "₦60M - ₦120M", value: "60-120", min: 60000000, max: 120000000 },
  { label: "₦120M+", value: "120-plus", min: 120000000, max: Number.POSITIVE_INFINITY }
];

const electricBrandSet = new Set(["Tesla", "Rivian", "Lucid Motors", "BYD", "NIO"]);
const premiumBrandBasePrice = {
  "Popular & Luxury Brands": 22000000,
  "Luxury Brands": 60000000,
  "Electric & Hybrid Brands": 58000000,
  "Sports & Exotic Brands": 150000000
};
const typePriceAdjustments = {
  Sedan: 8000000,
  Hatchback: 2000000,
  Coupe: 30000000,
  Convertible: 42000000,
  SUV: 28000000,
  "Crossover (CUV)": 18000000,
  "Pickup Truck": 34000000,
  Minivan: 26000000,
  Van: 28000000,
  Bus: 36000000,
  "Electric Vehicles (EV)": 18000000,
  "Hybrid Vehicles": 12000000,
  "Plug-in Hybrid (PHEV)": 22000000,
  "Sports Cars": 50000000,
  Supercars: 110000000,
  Hypercars: 220000000,
  "Off-road vehicles": 35000000,
  "Commercial trucks": 40000000,
  "Emergency vehicles": 45000000
};

function inferFuelType(brand, modelName, types) {
  if (electricBrandSet.has(brand) || types.includes("Electric Vehicles (EV)")) {
    return "Electric";
  }

  if (types.includes("Plug-in Hybrid (PHEV)")) {
    return "Hybrid";
  }

  if (
    ["Toyota", "Lexus", "Hyundai", "Kia", "Honda"].includes(brand) &&
    (types.includes("Sedan") || types.includes("SUV") || types.includes("Crossover (CUV)"))
  ) {
    return "Hybrid";
  }

  if (
    types.includes("Pickup Truck") ||
    types.includes("Commercial trucks") ||
    types.includes("Off-road vehicles")
  ) {
    return "Diesel";
  }

  return "Petrol";
}

function estimateCatalogPrice(group, types, index) {
  const groupBase = premiumBrandBasePrice[group] || 25000000;
  const typeModifier = types.reduce(
    (total, type) => total + (typePriceAdjustments[type] || 0),
    0
  );

  return groupBase + typeModifier + index * 3500000;
}

function estimateRange(fuelType, types, index) {
  if (fuelType === "Electric") {
    return `Up to ${480 + index * 18} km`;
  }

  if (fuelType === "Hybrid") {
    return `Up to ${760 + index * 12} km combined`;
  }

  if (types.includes("Hypercars")) {
    return `High-performance touring range`;
  }

  return `Long-distance touring ready`;
}

function estimateHorsepower(group, types, index) {
  const isExotic = group === "Sports & Exotic Brands";
  const isLuxury = group === "Luxury Brands";
  const isElectric = types.includes("Electric Vehicles (EV)");

  if (types.includes("Hypercars")) {
    return `${1100 + index * 40} hp`;
  }

  if (types.includes("Supercars")) {
    return `${680 + index * 30} hp`;
  }

  if (isElectric) {
    return `${420 + index * 25} hp`;
  }

  if (isExotic) {
    return `${560 + index * 25} hp`;
  }

  if (isLuxury) {
    return `${320 + index * 15} hp`;
  }

  return `${180 + index * 12} hp`;
}

function buildCatalogDescription(brand, modelName, types, fuelType) {
  return `${modelName} is one of the ${brand} models in the integrated catalog, positioned around ${types.join(", ")} buyers with a ${fuelType.toLowerCase()} powertrain profile.`;
}

function buildModelHighlight(brand, fuelType, range) {
  if (fuelType === "Electric") {
    return `${brand} EV highlights include intelligent battery systems, fast charging, and ${range.toLowerCase()}.`;
  }

  if (fuelType === "Hybrid") {
    return `${brand} hybrid-ready mobility blends fuel efficiency, refined cruising, and ${range.toLowerCase()}.`;
  }

  return `${brand} continues to stand out with balanced performance, recognizable design, and broad body-style options.`;
}

export const automotiveBrands = brandGroups.flatMap((group) =>
  group.brands.map((brand) => {
    const models = brandModelMap[brand] || [];

    return {
      id: slugify(brand),
      name: brand,
      group: group.title,
      description: brandCatalogDescriptions[brand],
      accent: brandAccentMap[brand] || "from-luxury-blue/18 via-transparent to-luxury-gold/14",
      modelCount: models.length
    };
  })
);

export const automotiveCatalogModels = automotiveBrands.flatMap((brand) => {
  const models = brandModelMap[brand.name] || [];

  return models.map((model, index) => {
    const primaryType = model.types[0];
    const previewImage =
      catalogTypeImageMap[primaryType] || catalogTypeImageMap.Sedan;
    const fuelType = inferFuelType(brand.name, model.name, model.types);
    const estimatedPrice = estimateCatalogPrice(brand.group, model.types, index);
    const range = estimateRange(fuelType, model.types, index);
    const horsepower = estimateHorsepower(brand.group, model.types, index);

    return {
      id: `${brand.id}-${slugify(model.name)}`,
      brandId: brand.id,
      brand: brand.name,
      name: model.name,
      displayName: `${brand.name} ${model.name}`,
      group: brand.group,
      types: model.types,
      previewImage,
      accent: brand.accent,
      fuelType,
      estimatedPrice,
      formattedPrice: formatNaira(estimatedPrice),
      horsepower,
      range,
      isElectric: fuelType === "Electric",
      shortDescription: buildCatalogDescription(brand.name, model.name, model.types, fuelType),
      highlight: buildModelHighlight(brand.name, fuelType, range),
      statA: model.types[0],
      statB: fuelType,
      statC: range,
      order: index
    };
  });
});

export const cars = [
  {
    id: "mercedes-e300",
    name: "Mercedes-Benz E 300 AMG Line",
    type: "Luxury Sedan",
    category: "Executive Sedan",
    price: 124000000,
    acceleration: "6.1s",
    topSpeed: "250 km/h",
    range: "650 km est.",
    horsepower: "255 hp",
    seats: "5 Seats",
    drivetrain: "Rear-Wheel Drive",
    shortDescription:
      "A refined executive sedan request with strong cabin comfort, brand presence, and manageable daily ownership.",
    description:
      "The Mercedes-Benz E 300 AMG Line is a common executive shortlist for clients who want a premium sedan with a quiet cabin, modern driver assistance, strong resale interest, and everyday comfort. DanAuto helps confirm trim, mileage, duty status, service history, and condition before purchase.",
    heroImage:
      "https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=1600&q=80",
    previewImage:
      "https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=1600&q=80"
    ],
    accent: "from-luxury-gold/20 via-transparent to-luxury-blue/16",
    specs: [
      { label: "Price", value: formatNaira(124000000) },
      { label: "Horsepower", value: "255 hp" },
      { label: "Top Speed", value: "250 km/h" },
      { label: "Range", value: "650 km est." },
      { label: "Drivetrain", value: "Rear-Wheel Drive" },
      { label: "Service Focus", value: "Diagnostics + history" }
    ],
    features: [
      "AMG Line Trim",
      "Digital Cockpit",
      "Driver Assistance",
      "Executive Cabin"
    ],
    highlights: [
      "A strong fit for executive commuting, client meetings, and family use.",
      "Inspection should confirm service records, suspension condition, and electronic systems.",
      "DanAuto can compare Nigerian-used, foreign-used, and available import options."
    ]
  },
  {
    id: "lexus-rx350",
    name: "Lexus RX 350 F Sport",
    type: "Executive SUV",
    category: "Luxury SUV",
    price: 118000000,
    acceleration: "7.6s",
    topSpeed: "200 km/h",
    range: "690 km est.",
    horsepower: "275 hp",
    seats: "5 Seats",
    drivetrain: "AWD",
    shortDescription:
      "A premium SUV shortlist for clients who want comfort, reliability, and a manageable service profile.",
    description:
      "The Lexus RX 350 F Sport is often requested by clients who want a comfortable SUV with strong reliability, premium finishing, and reasonable day-to-day running expectations. DanAuto helps verify trim level, service history, accident status, and market price before inspection.",
    heroImage:
      "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?auto=format&fit=crop&w=1600&q=80",
    previewImage:
      "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?auto=format&fit=crop&w=1600&q=80"
    ],
    accent: "from-luxury-blue/18 via-transparent to-luxury-gold/20",
    specs: [
      { label: "Price", value: formatNaira(118000000) },
      { label: "Horsepower", value: "275 hp" },
      { label: "Top Speed", value: "200 km/h" },
      { label: "Range", value: "690 km est." },
      { label: "Drivetrain", value: "AWD" },
      { label: "Service Focus", value: "Suspension + history" }
    ],
    features: [
      "F Sport Trim",
      "Premium Cabin",
      "Safety Assist",
      "Family-Friendly Space"
    ],
    highlights: [
      "A balanced option for school runs, executive movement, and weekend travel.",
      "Inspection should cover suspension health, infotainment, tires, and service records.",
      "DanAuto can compare RX trims against Mercedes-Benz GLE, BMW X5, and Toyota Land Cruiser options."
    ]
  },
  {
    id: "porsche-911-carrera",
    name: "Porsche 911 Carrera",
    type: "Performance Coupe",
    category: "Sport Coupe",
    price: 185000000,
    acceleration: "4.2s",
    topSpeed: "293 km/h",
    range: "560 km est.",
    horsepower: "379 hp",
    seats: "4 Seats",
    drivetrain: "Rear-Wheel Drive",
    shortDescription:
      "A driver-focused sports coupe request for clients who want performance, collectability, and daily usability.",
    description:
      "The Porsche 911 Carrera remains a benchmark performance coupe for clients who want a proper sports-car feel without giving up day-to-day usability. DanAuto focuses on service history, accident inspection, tire condition, trim details, and import documentation before recommending a unit.",
    heroImage:
      "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1600&q=80",
    previewImage:
      "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1542282088-fe8426682b8f?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&w=1600&q=80"
    ],
    accent: "from-luxury-gold/18 via-transparent to-luxury-blue/22",
    specs: [
      { label: "Price", value: formatNaira(185000000) },
      { label: "Horsepower", value: "379 hp" },
      { label: "Top Speed", value: "293 km/h" },
      { label: "Range", value: "560 km est." },
      { label: "Drivetrain", value: "Rear-Wheel Drive" },
      { label: "Service Focus", value: "History + tires" }
    ],
    features: [
      "Flat-Six Engine",
      "Sport Chrono Check",
      "Leather Interior",
      "Driver-Focused Cabin"
    ],
    highlights: [
      "A strong shortlist for weekend driving, private collections, and brand-conscious buyers.",
      "Inspection should confirm accident history, underbody condition, tires, brakes, and service intervals.",
      "DanAuto can compare Carrera, Carrera S, and used 911 alternatives based on budget."
    ]
  },
  {
    id: "bmw-z4-m40i",
    name: "BMW Z4 M40i Roadster",
    type: "Roadster",
    category: "Open-Air Performance",
    price: 98000000,
    acceleration: "4.5s",
    topSpeed: "250 km/h",
    range: "570 km est.",
    horsepower: "382 hp",
    seats: "2 Seats",
    drivetrain: "Rear-Wheel Drive",
    shortDescription:
      "A compact premium roadster request for open-top driving, weekend use, and expressive city presence.",
    description:
      "The BMW Z4 M40i Roadster is a practical performance choice for clients who want open-air driving without stepping into exotic maintenance territory. DanAuto reviews roof operation, service history, electronics, tires, and import status before shortlisting.",
    heroImage:
      "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&w=1600&q=80",
    previewImage:
      "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1600&q=80"
    ],
    accent: "from-luxury-blue/24 via-transparent to-luxury-gold/18",
    specs: [
      { label: "Price", value: formatNaira(98000000) },
      { label: "Horsepower", value: "382 hp" },
      { label: "Top Speed", value: "250 km/h" },
      { label: "Range", value: "570 km est." },
      { label: "Drivetrain", value: "Rear-Wheel Drive" },
      { label: "Service Focus", value: "Roof + electronics" }
    ],
    features: [
      "Soft-Top Roof",
      "M Sport Tuning",
      "Two-Seat Cabin",
      "Driver Assistance"
    ],
    highlights: [
      "Best suited to buyers who want a second car, weekend toy, or stylish daily driver.",
      "Inspection should test roof movement, water seals, infotainment, suspension, and tire wear.",
      "DanAuto can compare it against Porsche Boxster, Mercedes-Benz SLK/SLC, and Audi TT options."
    ]
  },
  {
    id: "tesla-model-y-long-range",
    name: "Tesla Model Y Long Range",
    type: "Urban Crossover",
    category: "Electric Crossover",
    price: 76000000,
    acceleration: "5.0s",
    topSpeed: "217 km/h",
    range: "533 km est.",
    horsepower: "384 hp",
    seats: "5 Seats",
    drivetrain: "Dual-Motor AWD",
    shortDescription:
      "A practical EV crossover request for clients comparing charging, range, and family usability.",
    description:
      "The Tesla Model Y Long Range is a frequent EV shortlist because it combines cabin space, strong range, and low routine maintenance needs. DanAuto helps clients check charging plans, battery condition indicators, software status, import documents, and realistic ownership fit.",
    heroImage:
      "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?auto=format&fit=crop&w=1600&q=80",
    previewImage:
      "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1606016159991-13f7f1f3cd3d?auto=format&fit=crop&w=1600&q=80"
    ],
    accent: "from-luxury-blue/18 via-transparent to-luxury-gold/14",
    specs: [
      { label: "Price", value: formatNaira(76000000) },
      { label: "Horsepower", value: "384 hp" },
      { label: "Top Speed", value: "217 km/h" },
      { label: "Range", value: "533 km est." },
      { label: "Drivetrain", value: "Dual-Motor AWD" },
      { label: "Fast Charging", value: "27 mins 10-80%" }
    ],
    features: [
      "Long Range Battery",
      "Glass Roof",
      "Large Cargo Space",
      "EV Ownership Review"
    ],
    highlights: [
      "A strong choice for clients who can plan home or workplace charging.",
      "Inspection should review battery indicators, suspension, tires, screen function, and charging accessories.",
      "DanAuto can compare it with BYD, Mercedes-Benz EQ, BMW iX, and hybrid alternatives."
    ]
  },
  {
    id: "porsche-taycan-4s",
    name: "Porsche Taycan 4S",
    type: "Performance EV",
    category: "Performance EV",
    price: 142000000,
    acceleration: "4.0s",
    topSpeed: "250 km/h",
    range: "470 km est.",
    horsepower: "522 hp",
    seats: "4 Seats",
    drivetrain: "Dual-Motor AWD",
    shortDescription:
      "A performance EV request for clients who want Porsche handling with electric running costs.",
    description:
      "The Porsche Taycan 4S is a premium EV choice for buyers who want performance, badge strength, and a more engaging drive than many electric SUVs. DanAuto reviews battery health indicators, charging hardware, suspension, tires, brakes, software, and service records.",
    heroImage:
      "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?auto=format&fit=crop&w=1600&q=80",
    previewImage:
      "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1600&q=80"
    ],
    accent: "from-luxury-gold/18 via-transparent to-luxury-blue/28",
    specs: [
      { label: "Price", value: formatNaira(142000000) },
      { label: "Horsepower", value: "522 hp" },
      { label: "Top Speed", value: "250 km/h" },
      { label: "Range", value: "470 km est." },
      { label: "Drivetrain", value: "Dual-Motor AWD" },
      { label: "Fast Charging", value: "23 mins 5-80%" }
    ],
    features: [
      "800V EV Platform",
      "Air Suspension Check",
      "Performance Brakes",
      "Battery Review"
    ],
    highlights: [
      "A strong fit for buyers who want an EV that still feels like a performance car.",
      "Inspection should confirm charging behavior, brake wear, tire condition, and suspension health.",
      "DanAuto can compare Taycan trims against Tesla Model S, Mercedes-Benz EQS, and BMW i models."
    ]
  },
  {
    id: "toyota-hilux-gr-sport",
    name: "Toyota Hilux GR Sport",
    type: "Premium Pickup",
    category: "Lifestyle Utility",
    price: 76000000,
    acceleration: "10.7s",
    topSpeed: "175 km/h",
    range: "760 km est.",
    horsepower: "201 hp",
    seats: "5 Seats",
    drivetrain: "4x4",
    shortDescription:
      "A durable pickup request for clients who need work capability, road presence, and proven dependability.",
    description:
      "The Toyota Hilux GR Sport is often shortlisted for business owners, site visits, security support, and mixed road conditions. DanAuto checks frame condition, suspension, tires, service history, customs documents, and accessory quality before recommending a unit.",
    heroImage:
      "https://images.unsplash.com/photo-1559416523-140ddc3d238c?auto=format&fit=crop&w=1600&q=80",
    previewImage:
      "https://images.unsplash.com/photo-1559416523-140ddc3d238c?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1559416523-140ddc3d238c?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?auto=format&fit=crop&w=1600&q=80"
    ],
    accent: "from-luxury-blue/20 via-transparent to-luxury-gold/18",
    specs: [
      { label: "Price", value: formatNaira(76000000) },
      { label: "Horsepower", value: "201 hp" },
      { label: "Top Speed", value: "175 km/h" },
      { label: "Range", value: "760 km est." },
      { label: "Drivetrain", value: "4x4" },
      { label: "Service Focus", value: "Frame + suspension" }
    ],
    features: [
      "Diesel Engine",
      "4x4 Capability",
      "Bed Utility",
      "Fleet Ready"
    ],
    highlights: [
      "Useful for businesses that need a premium-looking pickup without giving up durability.",
      "Inspection should confirm chassis condition, previous commercial use, suspension wear, and tire age.",
      "DanAuto can compare Hilux, Ford Ranger, Isuzu D-Max, and Toyota Tacoma options."
    ]
  },
  {
    id: "mercedes-v-class",
    name: "Mercedes-Benz V-Class Exclusive",
    type: "Executive Van",
    category: "VIP Shuttle",
    price: 132000000,
    acceleration: "9.1s",
    topSpeed: "195 km/h",
    range: "720 km est.",
    horsepower: "237 hp",
    seats: "6 Seats",
    drivetrain: "Rear-Wheel Drive",
    shortDescription:
      "A VIP van request for hospitality, executive movement, airport transfer, and family chauffeur use.",
    description:
      "The Mercedes-Benz V-Class Exclusive is a frequent request from hotels, executives, embassies, and large families who need a comfortable people-mover with a premium cabin. DanAuto checks seating layout, air-conditioning, sliding doors, service history, mileage, and fleet-use records.",
    heroImage:
      "https://images.unsplash.com/photo-1542282088-fe8426682b8f?auto=format&fit=crop&w=1600&q=80",
    previewImage:
      "https://images.unsplash.com/photo-1542282088-fe8426682b8f?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1542282088-fe8426682b8f?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1553440569-bcc63803a83d?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1606016159991-13f7f1f3cd3d?auto=format&fit=crop&w=1600&q=80"
    ],
    accent: "from-luxury-gold/16 via-transparent to-luxury-blue/18",
    specs: [
      { label: "Price", value: formatNaira(132000000) },
      { label: "Horsepower", value: "237 hp" },
      { label: "Top Speed", value: "195 km/h" },
      { label: "Range", value: "720 km est." },
      { label: "Drivetrain", value: "Rear-Wheel Drive" },
      { label: "Service Focus", value: "A/C + doors" }
    ],
    features: [
      "Captain Seats",
      "Rear A/C",
      "Sliding Door Check",
      "Fleet Support"
    ],
    highlights: [
      "Designed for hospitality, embassy, corporate, and premium family movement.",
      "Inspection should test air-conditioning performance, sliding doors, interior wear, and service records.",
      "DanAuto can help plan chauffeur use, maintenance schedules, and replacement timelines for fleets."
    ]
  }
];

export const services = [
  {
    title: "Vehicle Sourcing & Sales",
    metric: "Verified Options",
    description:
      "Shortlist brand new, foreign-used, and certified pre-owned vehicles with condition checks, price guidance, and document review before purchase.",
    icon: "sales"
  },
  {
    title: "Maintenance & Repairs",
    metric: "Workshop Care",
    description:
      "Routine servicing, diagnostics, mechanical and electrical repairs, tire care, bodywork, detailing, and refurbishing through trusted service partners.",
    icon: "maintenance"
  },
  {
    title: "EV & Hybrid Support",
    metric: "Battery Checks",
    description:
      "Battery health checks, charging advice, hybrid system reviews, ownership cost planning, and service support for modern electric and hybrid vehicles.",
    icon: "premium"
  },
  {
    title: "Customer Support & Mobility Care",
    metric: "Booking Support",
    description:
      "Appointment scheduling, vehicle delivery, pickup and drop-off coordination, insurance assistance, warranty guidance, and roadside support.",
    icon: "support"
  },
  {
    title: "Fleet Management",
    metric: "Business Vehicles",
    description:
      "Fleet acquisition support, maintenance scheduling, vehicle tracking advice, driver coordination, and reporting for growing business operations.",
    icon: "fleet"
  },
  {
    title: "Driver Training & Handover",
    metric: "Confident Use",
    description:
      "New-driver lessons, handover sessions, feature walkthroughs, and practical guidance for owners moving into premium, EV, or larger vehicles.",
    icon: "training"
  }
];

export const serviceCategories = [
  {
    title: "Sales",
    description:
      "Vehicle acquisition support for individual buyers, executives, families, and corporate customers.",
    sections: [
      {
        name: "Vehicle Sourcing",
        items: [
          "Brand new and foreign-used cars",
          "Certified pre-owned options",
          "Availability and price checks"
        ]
      },
      {
        name: "Payment Planning",
        items: [
          "Deposit and balance planning",
          "Lease-to-own introductions",
          "Auto loan guidance"
        ]
      },
      {
        name: "Corporate Mobility",
        items: [
          "Executive vehicle sourcing",
          "Long-term vehicle supply",
          "Chauffeur service referrals"
        ]
      }
    ]
  },
  {
    title: "Maintenance",
    description:
      "Workshop, service bay, and restoration support designed to keep vehicles performing and looking their best.",
    sections: [
      {
        name: "Vehicle Maintenance & Servicing",
        items: [
          "Oil, filters, and fluids",
          "Scheduled servicing"
        ]
      },
      {
        name: "Auto Repairs",
        items: [
          "Mechanical, electrical, and transmission repairs"
        ]
      },
      {
        name: "Car Diagnostics",
        items: [
          "Fault detection",
          "Performance analysis"
        ]
      },
      {
        name: "Tire Services",
        items: [
          "Replacement",
          "Wheel alignment & balancing"
        ]
      },
      {
        name: "Bodywork & Painting",
        items: [
          "Dent removal",
          "Repainting"
        ]
      },
      {
        name: "Car Detailing & Cleaning",
        items: [
          "Interior cleaning",
          "Exterior polishing"
        ]
      },
      {
        name: "Car Wash",
        items: [
          "Exterior wash",
          "Interior wash",
          "Premium wash packages"
        ]
      },
      {
        name: "Car Refurbishing",
        items: [
          "Full vehicle restoration",
          "Interior & exterior upgrades"
        ]
      }
    ]
  },
  {
    title: "Premium Services",
    description:
      "Higher-touch support for EVs, customization, compliance, and pre-purchase confidence.",
    sections: [
      {
        name: "Electric Vehicle (EV) Services",
        items: [
          "Battery health review",
          "Home and workplace charging advice"
        ]
      },
      {
        name: "Car Customization",
        items: [
          "Interior upgrades",
          "Exterior styling kits"
        ]
      },
      {
        name: "Vehicle Specification Guidance",
        items: [
          "Colors, rims, accessories, and trim choices"
        ]
      },
      {
        name: "Vehicle Inspection",
        items: [
          "Pre-purchase checks",
          "Roadworthiness certification"
        ]
      },
      {
        name: "Fleet Management",
        items: [
          "Vehicle tracking guidance",
          "Maintenance scheduling"
        ]
      },
      {
        name: "Driver Training",
        items: [
          "Beginner driving lessons",
          "Advanced and defensive driving training"
        ]
      }
    ]
  },
  {
    title: "Customer Support",
    description:
      "Convenience, assurance, and emergency support services built around real ownership needs.",
    sections: [
      {
        name: "Test Drive Booking",
        items: [
          "Online & in-person scheduling"
        ]
      },
      {
        name: "Car Delivery Services",
        items: [
          "Home and office delivery"
        ]
      },
      {
        name: "Pickup & Drop-off Service",
        items: [
          "Vehicle collection and return"
        ]
      },
      {
        name: "Auto Insurance Assistance",
        items: [
          "Policy setup",
          "Claims support"
        ]
      },
      {
        name: "Warranty Services",
        items: [
          "Manufacturer & extended warranties"
        ]
      },
      {
        name: "Roadside Assistance",
        items: [
          "Emergency breakdown support",
          "Battery jump-start"
        ]
      },
      {
        name: "Towing Services",
        items: [
          "Emergency towing",
          "Accident recovery"
        ]
      }
    ]
  }
];

export const technologies = [
  {
    icon: "cpu",
    title: "Diagnostic Scan",
    metric: "OBD Review",
    description:
      "We review key vehicle systems, warning codes, service indicators, and common fault areas before advising on a purchase or repair."
  },
  {
    icon: "battery",
    title: "EV Battery Review",
    metric: "Range Check",
    description:
      "For EVs and hybrids, we look at charging behavior, displayed range, battery condition indicators, and service history."
  },
  {
    icon: "shield",
    title: "Document Verification",
    metric: "Ownership Confidence",
    description:
      "VIN details, registration records, duty documents, service records, and ownership history are reviewed where available."
  },
  {
    icon: "wind",
    title: "Market Comparison",
    metric: "Fair-Price Context",
    description:
      "We compare similar listings, trims, mileage, exchange-rate effects, and import costs so clients understand the price band."
  }
];

export const testimonials = [
  {
    name: "Ifeoma Okonkwo",
    role: "Lekki-Based Business Owner",
    quote:
      "DanAuto helped me compare two SUVs, check the documents, and understand the service costs before I made a decision."
  },
  {
    name: "Tunde Adebayo",
    role: "Hotel Operations Lead",
    quote:
      "We needed three reliable vehicles for guest movement. The team handled sourcing, inspection, and delivery without drama."
  },
  {
    name: "Zainab Mahmud",
    role: "EV Owner",
    quote:
      "The EV guidance was practical. They explained charging, battery checks, and what to watch for before I bought."
  }
];

export const brandStats = [
  { value: "8", label: "Vehicle Categories" },
  { value: "40+", label: "Brands Covered" },
  { value: "24h", label: "Response Target" },
  { value: "6", label: "Core Service Areas" }
];

export const brandPillars = [
  {
    title: "Clear Advice",
    description:
      "Clients get plain-language guidance on condition, price, documents, ownership costs, and next steps before committing."
  },
  {
    title: "Proper Checks",
    description:
      "Inspections, diagnostic scans, service-history reviews, and market comparisons help reduce avoidable buying risk."
  },
  {
    title: "Built for Lagos Ownership",
    description:
      "Support covers traffic-heavy daily use, road conditions, documentation, delivery, servicing, and business fleet needs."
  }
];

export const timeline = [
  {
    year: "2019",
    title: "Independent Vehicle Advisory Begins",
    description:
      "DanAuto started by helping private buyers compare imported and locally available premium vehicles."
  },
  {
    year: "2022",
    title: "Workshop and Inspection Network",
    description:
      "The team expanded inspection, diagnostic, detailing, and maintenance support through trusted partners."
  },
  {
    year: "2024",
    title: "Business Fleet Support",
    description:
      "DanAuto added fleet planning, delivery coordination, service scheduling, and vehicle reporting for companies."
  },
  {
    year: "2026",
    title: "Lekki Showroom and Service Desk",
    description:
      "The brand now gives clients one place to start vehicle searches, book inspections, and arrange aftersales support."
  }
];

export const galleryItems = [
  {
    id: "gallery-1",
    title: "Exterior condition walkaround",
    category: "Exterior",
    image:
      "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1400&q=80"
  },
  {
    id: "gallery-2",
    title: "Cabin trim and controls review",
    category: "Interior",
    image:
      "https://images.unsplash.com/photo-1553440569-bcc63803a83d?auto=format&fit=crop&w=1400&q=80"
  },
  {
    id: "gallery-3",
    title: "Showroom appointment preparation",
    category: "Experience",
    image:
      "https://images.unsplash.com/photo-1489824904134-891ab64532f1?auto=format&fit=crop&w=1400&q=80"
  },
  {
    id: "gallery-4",
    title: "Road test and handling notes",
    category: "Performance",
    image:
      "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?auto=format&fit=crop&w=1400&q=80"
  },
  {
    id: "gallery-5",
    title: "SUV shortlist for family use",
    category: "Exterior",
    image:
      "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?auto=format&fit=crop&w=1400&q=80"
  },
  {
    id: "gallery-6",
    title: "Lighting and comfort checks",
    category: "Interior",
    image:
      "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=1400&q=80"
  },
  {
    id: "gallery-7",
    title: "Corporate vehicle handover",
    category: "Experience",
    image:
      "https://images.unsplash.com/photo-1542282088-fe8426682b8f?auto=format&fit=crop&w=1400&q=80"
  },
  {
    id: "gallery-8",
    title: "Pickup and utility inspection",
    category: "Performance",
    image:
      "https://images.unsplash.com/photo-1559416523-140ddc3d238c?auto=format&fit=crop&w=1400&q=80"
  }
];

export function getCarById(carId) {
  return cars.find((car) => car.id === carId);
}
