export type DesignTheme = 'iron-red' | 'electric-volt' | 'stealth-gold' | 'cobalt-ice';

export interface ThemeColors {
  primary: string;
  primaryHover: string;
  glow: string;
  accentBg: string;
  accentBorder: string;
  badgeBg: string;
  name: string;
  vibe: string;
}

export interface GymReview {
  author: string;
  rating: number;
  text: string;
  role?: string;
  date?: string;
}

export interface ClassSession {
  id: string;
  title: string;
  category: 'HIIT' | 'Zumba' | 'Kickboxing' | 'Yoga' | 'Crossfit' | 'Cycling';
  time: string;
  trainer: string;
  duration: string;
  intensity: 'High' | 'Moderate' | 'Advanced';
  room: string;
  days: string[];
}

export interface TrainerProfile {
  id: string;
  name: string;
  role: string;
  specialty: string;
  experience: string;
  certifications: string;
  imageSrc: string;
  quote: string;
}

export interface GymConfig {
  name: string;
  tagline: string;
  locationCity: string;
  state: string;
  country: string;
  address: string;
  metroNearby: string;
  phone: string;
  whatsappNumber: string;
  email: string;
  weekdayHours: string;
  sundayHours: string;
  googleMapsQuery: string;
  isPlaceholderPhone: boolean;
  rating: number;
  reviewCount: number;
  amenities: string[];
  chainLocations: string[];
  reviews: GymReview[];
}

export interface FacilityItem {
  id: string;
  title: string;
  category: 'strength' | 'cardio' | 'personal-training' | 'functional' | 'classes' | 'spa';
  description: string;
  features: string[];
  imageSrc: string;
  accentText: string;
}

export interface GalleryPhoto {
  id: string;
  title: string;
  category: string;
  description: string;
  imageSrc: string;
}

export interface MembershipPlan {
  id: string;
  duration: string;
  tagline: string;
  benefits: string[];
  popular?: boolean;
}
