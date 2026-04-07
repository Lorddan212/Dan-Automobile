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
  { label: "AI Driving Stack", value: "DanAI Sense 4.0", delay: 0.1 },
  { label: "Vehicle Types", value: "8 premium body styles", delay: 0.2 },
  { label: "Fast Charging", value: "15 mins to 80%", delay: 0.3 }
];

export const carTypes = [
  "All",
  "Luxury Sedan",
  "Executive SUV",
  "Performance Coupe",
  "Roadster",
  "Urban Crossover",
  "Hyper EV",
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
    title: "Electric & Future Brands",
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
  Audi: "Modern premium mobility with technical styling and strong utility options.",
  Lexus: "Quiet luxury focused on comfort, reliability, and premium SUV ownership.",
  Jaguar: "Elegant premium touring with sharp styling and heritage appeal.",
  "Land Rover": "Luxury off-road capability and commanding SUV presence.",
  Porsche: "Precision performance and premium sports-car culture.",
  Bentley: "Ultra-luxury craftsmanship with grand touring presence.",
  "Rolls-Royce": "The highest tier of handcrafted luxury motoring.",
  Tesla: "Electric-first product design built around software and EV performance.",
  Rivian: "Adventure-ready electric utility and off-road future mobility.",
  "Lucid Motors": "Advanced luxury EV architecture with range and premium interior focus.",
  BYD: "Electric and future-focused mobility at global scale.",
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
  "Electric & Future Brands": 58000000,
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
    id: "echelon-s",
    name: "DanAuto Echelon S",
    type: "Luxury Sedan",
    category: "Flagship Sedan",
    price: 138000000,
    acceleration: "3.4s",
    topSpeed: "250 km/h",
    range: "640 km",
    horsepower: "780 hp",
    seats: "5 Seats",
    drivetrain: "Dual-Motor AWD",
    shortDescription:
      "An ultra-refined executive sedan blending silent torque, lounge comfort, and predictive AI assistance.",
    description:
      "DanAuto Echelon S is the signature luxury sedan in the lineup, created for founders, executives, and families who want elegance without sacrificing performance. The cabin is wrapped in adaptive lighting, active noise control, and a panoramic AI cockpit that learns your route, mood, and drive preferences over time.",
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
      { label: "Price", value: formatNaira(138000000) },
      { label: "Horsepower", value: "780 hp" },
      { label: "Top Speed", value: "250 km/h" },
      { label: "Range", value: "640 km" },
      { label: "Drivetrain", value: "Dual-Motor AWD" },
      { label: "Charging", value: "18 mins to 80%" }
    ],
    features: [
      "DanAI Concierge",
      "Massaging Rear Lounge",
      "Smart Glass Roof",
      "Adaptive Air Suspension"
    ],
    highlights: [
      "Rear executive suite with climate-separated seating and privacy glass.",
      "Predictive AI adjusts ride, drive mode, and route based on traffic conditions.",
      "Cabin acoustic engineering keeps the interior whisper-quiet in city and highway driving."
    ]
  },
  {
    id: "dominion-x",
    name: "DanAuto Dominion X",
    type: "Executive SUV",
    category: "Luxury SUV",
    price: 162000000,
    acceleration: "3.8s",
    topSpeed: "240 km/h",
    range: "610 km",
    horsepower: "820 hp",
    seats: "7 Seats",
    drivetrain: "Tri-Motor AWD",
    shortDescription:
      "A high-command SUV built for presence, all-terrain confidence, and elite family comfort.",
    description:
      "Dominion X combines commanding road presence with advanced all-wheel-drive intelligence and a polished lounge-style interior. It is designed for premium family mobility, VIP movement, and long-distance confidence across city roads and challenging terrain.",
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
      { label: "Price", value: formatNaira(162000000) },
      { label: "Horsepower", value: "820 hp" },
      { label: "Top Speed", value: "240 km/h" },
      { label: "Range", value: "610 km" },
      { label: "Drivetrain", value: "Tri-Motor AWD" },
      { label: "Charging", value: "19 mins to 80%" }
    ],
    features: [
      "Terrain AI Control",
      "7-Seat Cabin",
      "360 Guardian Cameras",
      "Smart Cargo Lift"
    ],
    highlights: [
      "AI traction model adapts instantly to rain, gravel, and rough urban roads.",
      "Large family cabin with layered ambient lighting and multi-zone comfort profiles.",
      "Safety suite maps blind spots, pedestrian zones, and fatigue in real time."
    ]
  },
  {
    id: "velocity-c8",
    name: "DanAuto Velocity C8",
    type: "Performance Coupe",
    category: "Sport Coupe",
    price: 149000000,
    acceleration: "2.9s",
    topSpeed: "285 km/h",
    range: "580 km",
    horsepower: "910 hp",
    seats: "4 Seats",
    drivetrain: "Dual-Motor AWD",
    shortDescription:
      "A sharp grand coupe tuned for immersive handling, sculpted aerodynamics, and thrilling speed.",
    description:
      "Velocity C8 is DanAuto's performance coupe built for drivers who want emotion, precision, and daily usability in one machine. Every angle channels airflow, every surface supports stability, and every drive is amplified by AI-assisted handling intelligence.",
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
      { label: "Price", value: formatNaira(149000000) },
      { label: "Horsepower", value: "910 hp" },
      { label: "Top Speed", value: "285 km/h" },
      { label: "Range", value: "580 km" },
      { label: "Drivetrain", value: "Dual-Motor AWD" },
      { label: "Charging", value: "17 mins to 80%" }
    ],
    features: [
      "Torque Vector AI",
      "Track Data Overlay",
      "Aero Blade Diffuser",
      "Immersive Driver Pod"
    ],
    highlights: [
      "Cornering system predicts yaw demand and reshapes torque split before turn-in.",
      "Slim, cocooned cockpit gives the coupe a true grand-tourer atmosphere.",
      "3D instrument cluster projects live apex, braking, and traction guidance."
    ]
  },
  {
    id: "halo-r7",
    name: "DanAuto Halo R7",
    type: "Roadster",
    category: "Open-Air Performance",
    price: 174000000,
    acceleration: "2.7s",
    topSpeed: "290 km/h",
    range: "540 km",
    horsepower: "960 hp",
    seats: "2 Seats",
    drivetrain: "Dual-Motor AWD",
    shortDescription:
      "A low-slung electric roadster designed for expressive open-air touring and sculptural drama.",
    description:
      "Halo R7 transforms every coastal drive and city night run into an event. The open-air architecture, active aero deck, and emotional lighting signature turn the roadster into a futuristic luxury statement.",
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
      { label: "Price", value: formatNaira(174000000) },
      { label: "Horsepower", value: "960 hp" },
      { label: "Top Speed", value: "290 km/h" },
      { label: "Range", value: "540 km" },
      { label: "Drivetrain", value: "Dual-Motor AWD" },
      { label: "Charging", value: "16 mins to 80%" }
    ],
    features: [
      "Open Sky Mode",
      "Adaptive Rear Aero",
      "DanAI Touring Maps",
      "3D Sound Canopy"
    ],
    highlights: [
      "Convertible roof system stores away in seconds without stealing trunk space.",
      "Directional audio creates a private concert effect inside the two-seat cockpit.",
      "A predictive touring assistant recommends scenic routes and charging stops."
    ]
  },
  {
    id: "pulse-q5",
    name: "DanAuto Pulse Q5",
    type: "Urban Crossover",
    category: "Smart Crossover",
    price: 94000000,
    acceleration: "4.9s",
    topSpeed: "210 km/h",
    range: "510 km",
    horsepower: "540 hp",
    seats: "5 Seats",
    drivetrain: "Dual-Motor AWD",
    shortDescription:
      "A sleek city crossover created for premium urban mobility, smart parking, and AI convenience.",
    description:
      "Pulse Q5 makes daily premium driving easy. It packs AI-guided parking, intuitive voice workflows, and elegant proportions into a crossover designed for Lagos traffic, modern family movement, and agile city life.",
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
      { label: "Price", value: formatNaira(94000000) },
      { label: "Horsepower", value: "540 hp" },
      { label: "Top Speed", value: "210 km/h" },
      { label: "Range", value: "510 km" },
      { label: "Drivetrain", value: "Dual-Motor AWD" },
      { label: "Charging", value: "20 mins to 80%" }
    ],
    features: [
      "Auto-Park AI",
      "Urban Navigation Brain",
      "Family Safety Assist",
      "Smart Frunk Storage"
    ],
    highlights: [
      "Designed for premium city living with compact agility and elevated seating.",
      "AI traffic prediction continuously reroutes to preserve time and battery range.",
      "Interior finishes deliver luxury feel without sacrificing practicality."
    ]
  },
  {
    id: "zenith-gt",
    name: "DanAuto Zenith GT",
    type: "Hyper EV",
    category: "Halo Hypercar",
    price: 285000000,
    acceleration: "1.9s",
    topSpeed: "330 km/h",
    range: "500 km",
    horsepower: "1,280 hp",
    seats: "2 Seats",
    drivetrain: "Quad-Motor Vectoring",
    shortDescription:
      "DanAuto's halo hyper EV pairing aerospace-inspired design with uncompromising electric aggression.",
    description:
      "Zenith GT exists to define the future of African luxury performance. It is the most aggressive machine in the DanAuto family, combining 3D aero channels, quad-motor intelligence, and a cockpit built like a private jet instrument bay.",
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
      { label: "Price", value: formatNaira(285000000) },
      { label: "Horsepower", value: "1,280 hp" },
      { label: "Top Speed", value: "330 km/h" },
      { label: "Range", value: "500 km" },
      { label: "Drivetrain", value: "Quad-Motor Vectoring" },
      { label: "Charging", value: "15 mins to 80%" }
    ],
    features: [
      "DanAI Race Brain",
      "3D Aero Tunnels",
      "Carbon Monocoque",
      "Telemetry Cloud Sync"
    ],
    highlights: [
      "Quad-motor setup monitors wheel slip with millisecond torque balancing.",
      "A carbon architecture keeps the car brutally fast yet visually elegant.",
      "Every drive can be analyzed through a cloud telemetry suite built for enthusiasts."
    ]
  },
  {
    id: "terrain-px",
    name: "DanAuto Terrain PX",
    type: "Premium Pickup",
    category: "Lifestyle Utility",
    price: 117000000,
    acceleration: "4.6s",
    topSpeed: "210 km/h",
    range: "560 km",
    horsepower: "620 hp",
    seats: "5 Seats",
    drivetrain: "Dual-Motor AWD",
    shortDescription:
      "A futuristic premium pickup engineered for business, adventure, and powerful utility with comfort.",
    description:
      "Terrain PX brings DanAuto's luxury DNA to utility driving. It is built for founders, creators, and explorers who need load flexibility, off-road confidence, and a cabin that still feels premium and intelligent.",
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
      { label: "Price", value: formatNaira(117000000) },
      { label: "Horsepower", value: "620 hp" },
      { label: "Top Speed", value: "210 km/h" },
      { label: "Range", value: "560 km" },
      { label: "Drivetrain", value: "Dual-Motor AWD" },
      { label: "Charging", value: "21 mins to 80%" }
    ],
    features: [
      "Load-Balance AI",
      "Adaptive Bed Lighting",
      "Off-Road Camera Grid",
      "Tool Storage Vault"
    ],
    highlights: [
      "Adaptive payload software stabilizes braking and ride comfort under heavy load.",
      "Bed architecture supports work, travel, and premium adventure use cases.",
      "Interior durability is paired with soft-touch finishes and premium displays."
    ]
  },
  {
    id: "aerovan-l7",
    name: "DanAuto AeroVan L7",
    type: "Executive Van",
    category: "VIP Shuttle",
    price: 154000000,
    acceleration: "5.2s",
    topSpeed: "195 km/h",
    range: "590 km",
    horsepower: "500 hp",
    seats: "6 Seats",
    drivetrain: "Dual-Motor AWD",
    shortDescription:
      "A premium people-mover with private-jet seating, AI fleet control, and refined business-class comfort.",
    description:
      "AeroVan L7 is built for executives, hotels, embassies, and luxury logistics. The cabin is arranged like a mobile suite with lounge seating, rear productivity screens, and smart fleet intelligence for dispatch and route efficiency.",
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
      { label: "Price", value: formatNaira(154000000) },
      { label: "Horsepower", value: "500 hp" },
      { label: "Top Speed", value: "195 km/h" },
      { label: "Range", value: "590 km" },
      { label: "Drivetrain", value: "Dual-Motor AWD" },
      { label: "Charging", value: "22 mins to 80%" }
    ],
    features: [
      "VIP Lounge Seats",
      "Fleet AI Routing",
      "Privacy Display Glass",
      "Conference Cabin Mode"
    ],
    highlights: [
      "Designed for hospitality, embassy, and corporate fleet mobility at the highest standard.",
      "Smart route planning reduces downtime and charging friction across busy schedules.",
      "The rear cabin shifts from relaxation to mobile office in seconds."
    ]
  }
];

export const services = [
  {
    title: "Vehicle Sales & Leasing",
    metric: "Flexible Ownership",
    description:
      "Buy brand new or certified pre-owned DanAuto vehicles with flexible payment plans, lease-to-own options, and fleet purchase support.",
    icon: "sales"
  },
  {
    title: "Maintenance & Repairs",
    metric: "Full Workshop Care",
    description:
      "Routine servicing, diagnostics, mechanical and electrical repairs, tire care, bodywork, detailing, and refurbishing under one premium service system.",
    icon: "maintenance"
  },
  {
    title: "Premium EV & Custom Services",
    metric: "Future-Ready",
    description:
      "Battery checks, charging setup, interactive 3D configuration, interior upgrades, exterior kits, and vehicle inspection services for premium owners.",
    icon: "premium"
  },
  {
    title: "Customer Support & Mobility Care",
    metric: "Always Available",
    description:
      "Test drive booking, delivery, pickup and drop-off, insurance assistance, warranties, roadside support, and towing services.",
    icon: "support"
  },
  {
    title: "Fleet Management",
    metric: "Operational Control",
    description:
      "Vehicle tracking, preventive maintenance scheduling, corporate fleet reporting, and mobility planning for business operations.",
    icon: "fleet"
  },
  {
    title: "Driving School & Training",
    metric: "Skill Building",
    description:
      "Beginner driving lessons, advanced driving training, and practical driver confidence programs supported by modern learning tools.",
    icon: "training"
  }
];

export const serviceCategories = [
  {
    title: "Sales",
    description:
      "Flexible acquisition and mobility options for individual buyers, executives, and corporate customers.",
    sections: [
      {
        name: "Vehicle Sales",
        items: [
          "Brand new cars",
          "Certified pre-owned vehicles",
          "Fleet sales"
        ]
      },
      {
        name: "Car Leasing & Financing",
        items: [
          "Flexible payment plans",
          "Lease-to-own options",
          "Auto loan assistance"
        ]
      },
      {
        name: "Car Rental Services",
        items: [
          "Short-term rentals",
          "Long-term rentals",
          "Chauffeur services"
        ]
      }
    ]
  },
  {
    title: "Maintenance",
    description:
      "Workshop, service bay, and restoration support designed to keep every vehicle performing and looking its best.",
    sections: [
      {
        name: "Vehicle Maintenance & Servicing",
        items: [
          "Oil change, filters",
          "Routine servicing"
        ]
      },
      {
        name: "Auto Repairs",
        items: [
          "Mechanical, electrical, transmission repairs"
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
      "High-value advanced services tailored for electric mobility, personalization, compliance, and premium ownership.",
    sections: [
      {
        name: "Electric Vehicle (EV) Services",
        items: [
          "Battery checks",
          "Charging system setup"
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
        name: "3D Car Configuration",
        items: [
          "Interactive customization (colors, rims, accessories)"
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
          "Vehicle tracking",
          "Maintenance scheduling"
        ]
      },
      {
        name: "Driving School",
        items: [
          "Beginner driving lessons",
          "Advanced driving training"
        ]
      }
    ]
  },
  {
    title: "Customer Support",
    description:
      "Convenience, assurance, and emergency support services built around the customer experience.",
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
          "Home/office delivery"
        ]
      },
      {
        name: "Pickup & Drop-off Service",
        items: [
          "Vehicle collection & return"
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
    title: "DanAI Sense",
    metric: "Proactive Intelligence",
    description:
      "Our AI stack predicts traffic, driver intent, battery demand, and safety risks to keep every journey seamless."
  },
  {
    icon: "battery",
    title: "800V Energy Platform",
    metric: "Fast Charging",
    description:
      "Long-range electric architecture designed for premium daily use, fast turnaround, and confident touring."
  },
  {
    icon: "shield",
    title: "Guardian Perception",
    metric: "360 Protection",
    description:
      "Advanced camera, radar, and scene analysis deliver intelligent braking, lane awareness, and fatigue support."
  },
  {
    icon: "wind",
    title: "Adaptive Aero Form",
    metric: "3D Surface Flow",
    description:
      "Body surfaces and cooling paths adjust dynamically for lower drag, stronger stability, and futuristic presence."
  }
];

export const testimonials = [
  {
    name: "Ifeoma Okonkwo",
    role: "Investment Executive",
    quote:
      "DanAuto feels international in quality but deeply tuned to the way we actually move and live in Nigeria."
  },
  {
    name: "Tunde Adebayo",
    role: "Luxury Hospitality Founder",
    quote:
      "The AeroVan L7 completely changed how we handle VIP movement. Clients notice the difference instantly."
  },
  {
    name: "Zainab Mahmud",
    role: "Tech Entrepreneur",
    quote:
      "The AI features are not gimmicks. They genuinely make the drive feel calmer, smarter, and more premium."
  }
];

export const brandStats = [
  { value: "8", label: "DanAuto Vehicle Types" },
  { value: "640km", label: "Longest Electric Range" },
  { value: "24/7", label: "Concierge Support" },
  { value: "100%", label: "Electric Premium Lineup" }
];

export const brandPillars = [
  {
    title: "Luxury by Design",
    description:
      "Every DanAuto cabin is designed like an immersive lounge with layered lighting, tactile materials, and calm acoustics."
  },
  {
    title: "AI by Default",
    description:
      "Our software is not an add-on. It powers safety, personalization, maintenance, route intelligence, and customer care."
  },
  {
    title: "Built for Modern Africa",
    description:
      "DanAuto combines global premium design standards with the practical realities of African roads, cities, and mobility needs."
  }
];

export const timeline = [
  {
    year: "2019",
    title: "DanAuto Design Lab Launch",
    description:
      "The brand began as a premium mobility studio focused on intelligent electric platforms."
  },
  {
    year: "2022",
    title: "DanAI Operating Stack Debuts",
    description:
      "Our first proprietary AI cockpit and predictive maintenance layer entered pilot production."
  },
  {
    year: "2024",
    title: "Luxury Lineup Expansion",
    description:
      "DanAuto expanded into SUVs, executive shuttles, and performance coupes for broader premium use cases."
  },
  {
    year: "2026",
    title: "Flagship Experience Centers",
    description:
      "Immersive urban showrooms now provide booking, design consultation, and AI-assisted service support."
  }
];

export const galleryItems = [
  {
    id: "gallery-1",
    title: "Future-facing exterior lines",
    category: "Exterior",
    image:
      "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1400&q=80"
  },
  {
    id: "gallery-2",
    title: "AI cockpit architecture",
    category: "Interior",
    image:
      "https://images.unsplash.com/photo-1553440569-bcc63803a83d?auto=format&fit=crop&w=1400&q=80"
  },
  {
    id: "gallery-3",
    title: "Executive showroom moments",
    category: "Experience",
    image:
      "https://images.unsplash.com/photo-1489824904134-891ab64532f1?auto=format&fit=crop&w=1400&q=80"
  },
  {
    id: "gallery-4",
    title: "Performance form in motion",
    category: "Performance",
    image:
      "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?auto=format&fit=crop&w=1400&q=80"
  },
  {
    id: "gallery-5",
    title: "Luxury SUV command stance",
    category: "Exterior",
    image:
      "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?auto=format&fit=crop&w=1400&q=80"
  },
  {
    id: "gallery-6",
    title: "Night-drive ambient details",
    category: "Interior",
    image:
      "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=1400&q=80"
  },
  {
    id: "gallery-7",
    title: "Premium fleet mobility",
    category: "Experience",
    image:
      "https://images.unsplash.com/photo-1542282088-fe8426682b8f?auto=format&fit=crop&w=1400&q=80"
  },
  {
    id: "gallery-8",
    title: "Adventure-ready utility design",
    category: "Performance",
    image:
      "https://images.unsplash.com/photo-1559416523-140ddc3d238c?auto=format&fit=crop&w=1400&q=80"
  }
];

export function getCarById(carId) {
  return cars.find((car) => car.id === carId);
}
