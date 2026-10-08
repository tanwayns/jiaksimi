export type PriceLevel = '$' | '$$' | '$$$' | '$$$$';

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  isMustTry?: boolean;
  dietaryBadge?: string;
}

export interface Review {
  id: string;
  author: string;
  authorAvatar: string;
  role: string;
  rating: number;
  date: string;
  text: string;
  favoriteDish: string;
  photos?: string[];
}

export interface OperatingHours {
  days: string;
  time: string;
}

export interface Restaurant {
  id: string;
  name: string;
  tagline: string;
  cuisine: string;
  neighborhood: string;
  address: string;
  distance: string;
  walkTime: string;
  price: PriceLevel;
  rating: number;
  reviewCount: number;
  matchScore: number;
  matchReason: string;
  isOpen: boolean;
  openStatusText: string;
  heroImage: string;
  gallery: string[];
  category: string;
  vibes: string[];
  dietary: string[];
  hasOutdoor: boolean;
  michelinGuide?: boolean;
  chefHighlight: string;
  lat: number;
  lng: number;
  mapX: number; // 0-100% on the interactive styled map
  mapY: number; // 0-100% on the interactive styled map
  phone: string;
  hours: OperatingHours[];
  menuHighlights: MenuItem[];
  popularDishes?: string[];
  reviews: Review[];
  availableSlots: string[];
  computedDistanceKm?: number;
  computedDistanceText?: string;
  computedTravelTime?: string;
}

export interface Reservation {
  id: string;
  restaurantId: string;
  restaurantName: string;
  restaurantImage: string;
  date: string;
  time: string;
  guests: number;
  seatingArea: 'Indoor Dining Room' | 'Chef Counter' | 'Heated Patio' | 'Bar Table';
  specialRequests?: string;
  status: 'Confirmed' | 'Completed' | 'Cancelled';
  createdAt: string;
}

export type SortOption = 'nearest' | 'match' | 'rating' | 'price';

export interface FilterState {
  searchQuery: string;
  category: string;
  priceLevels: PriceLevel[];
  minRating: number;
  minMatchScore: number;
  openNowOnly: boolean;
  outdoorSeatingOnly: boolean;
  michelinOnly: boolean;
  selectedVibe: string;
  maxDistanceKm: number; // 0 for any distance, or 1, 3, 5, 10
  sortBy: SortOption;
}

export interface UserTasteProfile {
  name: string;
  handle: string;
  avatar: string;
  level: string;
  palateScore: number;
  dna: {
    label: string;
    percentage: number;
    description: string;
  }[];
  stamps: {
    cuisine: string;
    count: number;
    icon: string;
    accent: string;
  }[];
}
