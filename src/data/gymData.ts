import { GymConfig, FacilityItem, GalleryPhoto, MembershipPlan } from '../types';

export const DEFAULT_GYM_CONFIG: GymConfig = {
  name: "Pro Ultimate Gyms - Saket",
  tagline: "India's Premier Fitness Destination · Saket, New Delhi",
  locationCity: "Saket, South Delhi",
  state: "Delhi",
  country: "India",
  address: "316/275, Westend Marg, near Saket Metro Station, Saidulajab, Sainik Farm, New Delhi, Delhi 110030",
  metroNearby: "Near Saket Metro Station (Yellow Line)",
  phone: "+91 80111 11142",
  whatsappNumber: "+918011111142",
  email: "saket@proultimategyms.com",
  weekdayHours: "Monday – Saturday: 5:30 AM – 11:00 PM",
  sundayHours: "Sunday: 6:00 AM – 8:00 PM",
  googleMapsQuery: "Pro Ultimate Gyms Saket, Westend Marg, Saidulajab, New Delhi",
  isPlaceholderPhone: false,
  rating: 4.8,
  reviewCount: 898,
  amenities: [
    "Sauna Room",
    "Showers & Changing Rooms",
    "On-site Parking",
    "Spacious Workout Floor",
    "Air Conditioned & Cleaned Daily",
    "Personal Locker Facilities",
  ],
  chainLocations: [
    "Delhi (Saket & Janakpuri)",
    "Zirakpur (VIP Road)",
    "Ludhiana",
    "Nabha",
    "Sangrur",
    "Lucknow (Coming Soon)",
  ],
  reviews: [
    {
      author: "Verified Google Member",
      rating: 5,
      role: "Regular Member · 898+ Google Reviews",
      date: "Google Review",
      text: "Top equipment, good service with friendly staff and clean gym. Zain I found your training very helpful. I would definitely recommend you as a personal trainer because of the dedication and technique guidance.",
    },
    {
      author: "Verified Member",
      rating: 5,
      role: "Crossfit & Weight Training",
      date: "Google Review",
      text: "Fantastic gym with top-notch equipment and friendly staff! The floor is spacious and never suffocating.",
    },
    {
      author: "Saket Fitness Enthusiast",
      rating: 5,
      role: "Strength & Sauna",
      date: "Google Review",
      text: "Great gym with clean equipment and a motivating environment. The steam, sauna and shower facilities are maintained in pristine condition.",
    },
    {
      author: "Verified Athlete",
      rating: 5,
      role: "HIIT & Free Weights",
      date: "Google Review",
      text: "Very well-equipped with modern machines, heavy dumbbells, kickboxing and cardio studio. Right on Westend Marg near Saket Metro Station with convenient parking.",
    },
  ],
};

export const GYM_IMAGES = {
  hero: "/src/assets/images/gym_hero_cinematic_1792138125676.jpg",
  strength: "/src/assets/images/gym_strength_training_1792138126597.jpg",
  cardio: "/src/assets/images/gym_cardio_row_1792138126981.jpg",
  trainer: "/src/assets/images/gym_personal_trainer_1792138127806.jpg",
  functional: "/src/assets/images/gym_functional_floor_1792138127460.jpg",
};

export const ALL_SERVICES_LIST = [
  "Weight Training & Heavy Free Weights",
  "Personal Training & Form Correction (Coach Zain & Team)",
  "Crossfit & Functional Power",
  "HIIT Exercise Classes",
  "Kickboxing & Combat Conditioning",
  "Zumba & Dance Fitness Classes",
  "Aerobics & Stamina Conditioning",
  "Yoga Classes & Mobility",
  "Cycling & Spin Studio",
  "Spa, Sauna & Steam Facilities",
  "Nutrition & Dietary Consulting",
];

export const FACILITIES_DATA: FacilityItem[] = [
  {
    id: "strength",
    title: "STRENGTH & WEIGHT TRAINING",
    category: "strength",
    description: "Equipped with heavy-duty Olympic barbell platforms, precision power cages, calibrated dumbbells up to 50kg, and bio-mechanical plate-loaded machines.",
    features: [
      "Olympic Barbells & Bumper Plates",
      "Power Cages & Squat Stations",
      "Full Dumbbell Rack up to 50kg",
      "Plate-Loaded & Cable Isolation Stations",
    ],
    imageSrc: GYM_IMAGES.strength,
    accentText: "Heavy Lifting Zone",
  },
  {
    id: "conditioning",
    title: "CARDIO & CONDITIONING DECK",
    category: "cardio",
    description: "Row of commercial incline treadmills, spin bikes, elliptical cross-trainers, and assault conditioning machines with live calorie & heart-rate telemetry.",
    features: [
      "Commercial High-Incline Treadmills",
      "Spin Studio Bikes & Assault Pacing",
      "Elliptical Cross-Trainers & Stairmasters",
      "Heart-Rate & Calorie Tracking",
    ],
    imageSrc: GYM_IMAGES.cardio,
    accentText: "Endurance Deck",
  },
  {
    id: "personal-training",
    title: "EXPERT PERSONAL TRAINING",
    category: "personal-training",
    description: "1-on-1 coaching by renowned fitness trainers (such as Coach Zain and team) focused on biomechanical form correction, injury prevention, and structured split progression.",
    features: [
      "1-on-1 Form & Posture Correction",
      "Tailored Muscle Gain & Fat Loss Regimen",
      "Dedicated Spotting & Progressive Overload",
      "Weekly Body Composition & Metric Tracking",
    ],
    imageSrc: GYM_IMAGES.trainer,
    accentText: "1-on-1 Coaching",
  },
  {
    id: "functional",
    title: "CROSSFIT, TURF & KICKBOXING",
    category: "functional",
    description: "Dedicated open sprint turf area for functional HIIT circuits, battle ropes, kettlebells, plyometrics, and high-intensity kickboxing conditioning.",
    features: [
      "Sled Turf Lane & Battle Ropes",
      "Cast Iron Kettlebells & Plyo Boxes",
      "Kickboxing & Combat Striking Pads",
      "Agility Ladders & Core Slam Balls",
    ],
    imageSrc: GYM_IMAGES.functional,
    accentText: "Athletic Power",
  },
];

export const WHY_CHOOSE_US = [
  {
    title: "4.8 ★ Rated with 898+ Reviews",
    description: "Highest rated premium gym on Westend Marg, celebrated for cleanliness, equipment diversity, and elite coaching.",
    stat: "4.8 ★",
    statLabel: "898+ Google Reviews",
  },
  {
    title: "Sauna, Showers & Spa Recovery",
    description: "Relax after heavy training with hygienic sauna suites, hot water showers, and spacious sanitized changing rooms.",
    stat: "Full Spa",
    statLabel: "Sauna & Showers",
  },
  {
    title: "Top-Tier Bio-mechanical Machines",
    description: "Imported commercial grade resistance machines and heavy dumbbells up to 50kg for serious bodybuilding and athletic progress.",
    stat: "100%",
    statLabel: "Commercial Spec",
  },
  {
    title: "Prime Saket Metro Connectivity",
    description: "Located on Westend Marg right near Saket Metro Station (Saidulajab / Sainik Farm) with dedicated on-site parking.",
    stat: "Metro",
    statLabel: "Near Saket Station",
  },
  {
    title: "Diverse Group Fitness Studio",
    description: "Exciting group sessions every week including Zumba, Kickboxing, Aerobics, Crossfit, and Yoga led by master instructors.",
    stat: "10+ Daily",
    statLabel: "Group Class Formats",
  },
  {
    title: "India's Biggest Gym Chain",
    description: "Proud part of Pro Ultimate Gyms with premier centers across Delhi (Saket, Janakpuri), Punjab, and UP.",
    stat: "Pan-India",
    statLabel: "Pro Ultimate Network",
  },
];

export const GALLERY_ITEMS: GalleryPhoto[] = [
  {
    id: "g1",
    title: "Main Pro Ultimate Gym Floor - Saket",
    category: "Club Floor",
    description: "Spacious training floor equipped with imported commercial machines and Olympic lifting platforms on Westend Marg, Saket.",
    imageSrc: GYM_IMAGES.hero,
  },
  {
    id: "g2",
    title: "Heavy Free Weights & Barbell Racks",
    category: "Strength Zone",
    description: "Calibrated dumbbells up to 50kg, power cages, and Olympic bumper plates for heavy compound lifts.",
    imageSrc: GYM_IMAGES.strength,
  },
  {
    id: "g3",
    title: "Cardio & Endurance Arena",
    category: "Cardio",
    description: "Row of high-tech commercial incline treadmills, cross-trainers, and spin bikes with live telemetry.",
    imageSrc: GYM_IMAGES.cardio,
  },
  {
    id: "g4",
    title: "Personal Training & Form Guidance",
    category: "Coaching",
    description: "Certified trainers providing biomechanical form correction, safety spotting, and personalized progression.",
    imageSrc: GYM_IMAGES.trainer,
  },
  {
    id: "g5",
    title: "Functional Turf, Crossfit & Kickboxing",
    category: "Turf Area",
    description: "High-density turf lane equipped with battle ropes, kettlebells, and kickboxing striking targets.",
    imageSrc: GYM_IMAGES.functional,
  },
];

export const MEMBERSHIP_PLANS: MembershipPlan[] = [
  {
    id: "plan-1m",
    duration: "1 Month Trial & Fitness",
    tagline: "Ideal for testing your consistency and exploring our gym, classes, and sauna facilities.",
    benefits: [
      "Full access to Free Weights & Cardio Deck",
      "Access to Sauna, Steam & Shower Rooms",
      "Complimentary locker and on-site parking",
      "Trainer floor guidance and orientation",
    ],
  },
  {
    id: "plan-3m",
    duration: "3 Months Transformation",
    tagline: "Our most popular package for steady muscle gain, fat loss, and group studio classes.",
    popular: true,
    benefits: [
      "Full gym floor, studio classes & cardio access",
      "Baseline body composition and measurement audit",
      "Custom progressive overload training split",
      "Full sauna, showers & locker access",
      "Access to Zumba, Yoga & Kickboxing sessions",
    ],
  },
  {
    id: "plan-6m",
    duration: "6 Months Elite Progress",
    tagline: "For dedicated lifters and athletes seeking substantial athletic transformation.",
    benefits: [
      "Unrestricted gym & functional turf access",
      "Bi-weekly body fat & metric tracking",
      "Diet & nutritional guidance consulting",
      "Special discount on 1-on-1 Personal Training",
      "Complimentary guest workout trial passes",
    ],
  },
  {
    id: "plan-12m",
    duration: "12 Months (Annual Pro)",
    tagline: "Ultimate value for continuous year-round fitness at India's biggest gym chain.",
    benefits: [
      "Unrestricted 365-day access to Saket facility",
      "Full fitness profiling and mobility screening",
      "Unlimited group classes (Zumba, Crossfit, Yoga)",
      "Full sauna, steam and luxury locker privileges",
      "Free membership freeze privilege (up to 45 days)",
    ],
  },
];
