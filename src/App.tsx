import React, { useState, useMemo, useEffect } from 'react';
import { 
  Sparkles, 
  Flame, 
  MapPin, 
  SlidersHorizontal, 
  ArrowRight, 
  Compass, 
  BookOpen, 
  Clock, 
  Award,
  ChevronRight,
  TrendingUp,
  Heart,
  Navigation,
  Loader2,
  Utensils,
  ArrowUpDown,
  Activity,
  CheckCircle2,
  AlertCircle
} from 'lucide-react';
import { Header } from './components/Header';
import { BottomNav, NavTab } from './components/BottomNav';
import { RestaurantCard } from './components/RestaurantCard';
import { InteractiveMap } from './components/InteractiveMap';
import { RestaurantModal } from './components/RestaurantModal';
import { CraveConcierge } from './components/CraveConcierge';
import { SavedScreen } from './components/SavedScreen';
import { ProfileScreen } from './components/ProfileScreen';
import { FilterModal } from './components/FilterModal';
import { ReservationSuccessModal } from './components/ReservationSuccessModal';
import { ApiHealthModal } from './components/ApiHealthModal';
import { EatWhatDecider } from './components/EatWhatDecider';

import { 
  RESTAURANTS_DATA, 
  INITIAL_USER_PROFILE, 
  TASTING_GUIDES 
} from './data/restaurants';
import { Restaurant, Reservation, FilterState, SortOption } from './types/restaurant';
import { 
  UserLocationState, 
  DEFAULT_USER_LOCATION, 
  REGIONAL_HUBS, 
  calculateDistance, 
  formatDistance, 
  formatTravelTime, 
  requestBrowserLocation 
} from './utils/geo';

export default function App() {
  // Navigation & Screen State
  const [activeTab, setActiveTab] = useState<NavTab>('explore');
  const [currentCity, setCurrentCity] = useState('Telok Ayer & Amoy St, Singapore');
  const [isDesktopLayout, setIsDesktopLayout] = useState(false);

  // User Location & GPS State (Finding food at user's location)
  const [userLocation, setUserLocation] = useState<UserLocationState>(DEFAULT_USER_LOCATION);
  const [isLocating, setIsLocating] = useState(false);
  const [locationNotice, setLocationNotice] = useState<string | null>(null);

  // Selected Restaurant & Modals
  const [selectedRestaurant, setSelectedRestaurant] = useState<Restaurant | null>(null);
  const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);
  const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);
  const [isApiHealthOpen, setIsApiHealthOpen] = useState(false);
  const [confirmedReservation, setConfirmedReservation] = useState<Reservation | null>(null);

  // Saved Bookmarks
  const [savedIds, setSavedIds] = useState<string[]>(['sg-1', 'sg-2', 'my-1']);

  // Active Reservations
  const [reservations, setReservations] = useState<Reservation[]>([
    {
      id: 'res-101',
      restaurantId: 'sg-1',
      restaurantName: 'Rempah Botanica',
      restaurantImage: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=600&q=80',
      date: 'Tonight, Oct 7',
      time: '7:15 PM',
      guests: 2,
      seatingArea: 'Indoor Dining Room',
      specialRequests: 'Courtyard booth seating in the shophouse atrium',
      status: 'Confirmed',
      createdAt: 'Oct 7, 2026'
    }
  ]);

  // Filters State with distance radius & sorting
  const [filters, setFilters] = useState<FilterState>({
    searchQuery: '',
    category: 'all',
    priceLevels: [],
    minRating: 0,
    minMatchScore: 0,
    openNowOnly: false,
    outdoorSeatingOnly: false,
    michelinOnly: false,
    selectedVibe: 'all',
    maxDistanceKm: 0, // 0 for any distance
    sortBy: 'nearest' // Default to nearest food spots
  });

  // Food tags for 1-tap food search
  const quickFoodChips = [
    { label: 'All Foods', query: '' },
    { label: '🦀 Chili Crab', query: 'chili crab' },
    { label: '🥢 Wok Hei Hor Fun', query: 'hor fun' },
    { label: '🥩 Wagyu Satay', query: 'satay' },
    { label: '🍜 Katong Laksa', query: 'laksa' },
    { label: '🍗 Chicken Rice', query: 'chicken rice' },
    { label: '🌺 Buah Keluak', query: 'buah keluak' },
    { label: '☕ Kaya Toast', query: 'kaya toast' },
    { label: '🦐 Kelong Seafood', query: 'seabass' },
    { label: '🍷 Natural Wine', query: 'natural wine' }
  ];

  // Geolocation trigger: detect user's current GPS location
  const handleUseCurrentLocation = async () => {
    setIsLocating(true);
    setLocationNotice(null);
    try {
      const { coords, accuracy } = await requestBrowserLocation();
      setUserLocation({
        coords,
        name: `Current GPS Location (±${Math.round(accuracy)}m)`,
        isLiveGps: true,
        accuracyMeters: Math.round(accuracy),
        timestamp: Date.now()
      });
      setCurrentCity(`GPS: ${coords.lat.toFixed(4)}, ${coords.lng.toFixed(4)}`);
      setFilters(prev => ({ ...prev, sortBy: 'nearest' }));
      setLocationNotice(`Live location acquired (accuracy ±${Math.round(accuracy)}m). Sorted by closest to you.`);
      setTimeout(() => setLocationNotice(null), 5000);
    } catch (err: any) {
      console.warn('Geolocation detection failed or was dismissed:', err);
      setLocationNotice('GPS access unavailable. Switched to Telok Ayer Central Hub.');
      setTimeout(() => setLocationNotice(null), 4000);
    } finally {
      setIsLocating(false);
    }
  };

  // Change preset regional hub
  const handleSelectRegionalHub = (cityName: string) => {
    setCurrentCity(cityName);
    const matchedHub = REGIONAL_HUBS.find(h => cityName.includes(h.name));
    if (matchedHub) {
      setUserLocation({
        coords: matchedHub.coords,
        name: matchedHub.name,
        isLiveGps: false
      });
    }
  };

  // Toggle Bookmark
  const handleToggleSave = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setSavedIds((prev) => 
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  // Open Details Modal
  const handleOpenDetails = (restaurant: Restaurant) => {
    setSelectedRestaurant(restaurant);
    setIsDetailModalOpen(true);
  };

  // Quick Book Trigger
  const handleQuickBook = (restaurant: Restaurant, e: React.MouseEvent) => {
    e.stopPropagation();
    setSelectedRestaurant(restaurant);
    setIsDetailModalOpen(true);
  };

  // Handle Reservation Confirmation
  const handleConfirmReservation = (newReservation: Reservation) => {
    setReservations((prev) => [newReservation, ...prev]);
    setIsDetailModalOpen(false);
    setConfirmedReservation(newReservation);
  };

  // Compute live distances for all restaurants relative to current user coordinates
  const restaurantsWithDistances = useMemo(() => {
    return RESTAURANTS_DATA.map((r) => {
      const distKm = calculateDistance(
        userLocation.coords.lat,
        userLocation.coords.lng,
        r.lat,
        r.lng
      );
      return {
        ...r,
        computedDistanceKm: distKm,
        computedDistanceText: formatDistance(distKm),
        computedTravelTime: formatTravelTime(distKm)
      };
    });
  }, [userLocation]);

  // Filter & Rank restaurants
  const filteredRestaurants = useMemo(() => {
    const list = restaurantsWithDistances.filter((r) => {
      // Food & Keyword Search query (matches restaurant name, cuisine, tagline, dishes, foods, vibes)
      if (filters.searchQuery) {
        const query = filters.searchQuery.toLowerCase().trim();
        const matchesName = r.name.toLowerCase().includes(query);
        const matchesCuisine = r.cuisine.toLowerCase().includes(query);
        const matchesTagline = r.tagline.toLowerCase().includes(query);
        const matchesVibes = r.vibes.some((v) => v.toLowerCase().includes(query));
        const matchesNeighborhood = r.neighborhood.toLowerCase().includes(query);
        const matchesPopularDishes = r.popularDishes?.some((d) => d.toLowerCase().includes(query));
        const matchesMenuItems = r.menuHighlights.some(
          (m) => m.name.toLowerCase().includes(query) || m.description.toLowerCase().includes(query)
        );

        if (
          !matchesName && 
          !matchesCuisine && 
          !matchesTagline && 
          !matchesVibes && 
          !matchesNeighborhood && 
          !matchesPopularDishes && 
          !matchesMenuItems
        ) {
          return false;
        }
      }

      // Specialty category
      if (filters.category !== 'all' && r.category !== filters.category) {
        return false;
      }

      // Distance radius filter (Find food within X km of current location)
      if (filters.maxDistanceKm > 0 && (r.computedDistanceKm ?? 999) > filters.maxDistanceKm) {
        return false;
      }

      // Price level
      if (filters.priceLevels.length > 0 && !filters.priceLevels.includes(r.price)) {
        return false;
      }

      // Minimum rating
      if (filters.minRating > 0 && r.rating < filters.minRating) {
        return false;
      }

      // Open now
      if (filters.openNowOnly && !r.isOpen) {
        return false;
      }

      // Outdoor seating
      if (filters.outdoorSeatingOnly && !r.hasOutdoor) {
        return false;
      }

      // Michelin Guide
      if (filters.michelinOnly && !r.michelinGuide) {
        return false;
      }

      return true;
    });

    // Sorting
    list.sort((a, b) => {
      if (filters.sortBy === 'nearest') {
        return (a.computedDistanceKm ?? 0) - (b.computedDistanceKm ?? 0);
      }
      if (filters.sortBy === 'match') {
        return b.matchScore - a.matchScore;
      }
      if (filters.sortBy === 'rating') {
        return b.rating - a.rating;
      }
      if (filters.sortBy === 'price') {
        return a.price.length - b.price.length;
      }
      return 0;
    });

    return list;
  }, [restaurantsWithDistances, filters]);

  const savedRestaurants = useMemo(() => {
    return restaurantsWithDistances.filter((r) => savedIds.includes(r.id));
  }, [restaurantsWithDistances, savedIds]);

  // Categories for horizontal chips
  const categoryChips = [
    { id: 'all', label: 'All Specialties' },
    { id: 'peranakan', label: '🌺 Modern Peranakan' },
    { id: 'wokhei', label: '🥢 Wok Hei & Zi Char' },
    { id: 'grill', label: '🥩 Charcoal Satay & Hearth' },
    { id: 'seafood', label: '🦀 Kelong Seafood & Crab' },
    { id: 'spice', label: '🌶️ Modern Spice Atelier' },
    { id: 'wine', label: '🍷 Shophouse Natural Wine' },
    { id: 'cafe', label: '☕ Heritage Kopitiam & Roasters' },
  ];

  // Number of active filters
  const activeFilterCount = useMemo(() => {
    let count = 0;
    if (filters.category !== 'all') count++;
    if (filters.priceLevels.length > 0) count++;
    if (filters.minRating > 0) count++;
    if (filters.openNowOnly) count++;
    if (filters.outdoorSeatingOnly) count++;
    if (filters.michelinOnly) count++;
    if (filters.maxDistanceKm > 0) count++;
    if (filters.sortBy !== 'nearest') count++;
    return count;
  }, [filters]);

  // Curated hero highlight restaurant (closest top match)
  const heroSpotlight = filteredRestaurants[0] || restaurantsWithDistances[0];

  return (
    <div className="min-h-screen bg-[#FDFBF7] text-[#2D3139] flex flex-col font-sans selection:bg-[#F4511E] selection:text-white pb-20">
      {/* Universal Header with Location & Search */}
      <Header
        currentCity={currentCity}
        onCityChange={handleSelectRegionalHub}
        onOpenFilter={() => setIsFilterModalOpen(true)}
        searchQuery={filters.searchQuery}
        onSearchChange={(q) => setFilters((f) => ({ ...f, searchQuery: q }))}
        isDesktopLayout={isDesktopLayout}
        onToggleDesktopLayout={() => setIsDesktopLayout(!isDesktopLayout)}
        onUseCurrentLocation={handleUseCurrentLocation}
        isLocating={isLocating}
        isLiveGps={userLocation.isLiveGps}
        onOpenApiHealth={() => setIsApiHealthOpen(true)}
        activeFilterCount={activeFilterCount}
      />

      {/* Main Tab Routing */}
      <main className="flex-1 w-full">
        {/* TAB 1: EXPLORE FEED */}
        {activeTab === 'explore' && (
          <div className="max-w-6xl mx-auto px-3 sm:px-4 py-3 sm:py-4 space-y-4 sm:space-y-6">
            {/* GPS Location Status & Proximity Bar */}
            <div className="bg-white rounded-2xl p-3 sm:p-3.5 border border-[#EFE9E0] shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-2.5">
              <div className="flex items-center gap-2.5 min-w-0">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${
                  userLocation.isLiveGps ? 'bg-[#ECFDF5] text-[#10B981]' : 'bg-[#FBE9E7] text-[#F4511E]'
                }`}>
                  <Navigation size={16} className={userLocation.isLiveGps ? 'fill-[#10B981]' : ''} />
                </div>
                <div className="min-w-0">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-[#181c23] truncate">
                    <span className="truncate">{userLocation.name}</span>
                    {userLocation.isLiveGps && (
                      <span className="px-1.5 py-0.2 rounded-full text-[9px] font-extrabold bg-[#10B981] text-white shrink-0">
                        GPS Active
                      </span>
                    )}
                  </div>
                  <div className="text-[11px] text-[#60646C]">
                    Distances calculated directly from your current position
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2 shrink-0 self-end sm:self-auto">
                <button
                  onClick={handleUseCurrentLocation}
                  disabled={isLocating}
                  className="px-3 py-1.5 rounded-full text-xs font-bold bg-[#FBE9E7] text-[#F4511E] hover:bg-[#F4511E] hover:text-white transition-all flex items-center gap-1.5 shadow-2xs disabled:opacity-60"
                >
                  {isLocating ? <Loader2 size={13} className="animate-spin" /> : <Navigation size={13} />}
                  <span>{isLocating ? 'Detecting GPS...' : 'Locate Me'}</span>
                </button>

                <button
                  onClick={() => setIsApiHealthOpen(true)}
                  className="px-2.5 py-1.5 rounded-full text-xs font-bold bg-[#FFF5F2] hover:bg-[#FBE9E7] text-[#ac2d00] transition-colors flex items-center gap-1 border border-[#FFDCD2]"
                  title="Geoapify Places API v2 integration (/api/places)"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-pulse" />
                  <span>Geoapify Places API</span>
                </button>

                <button
                  onClick={() => setIsApiHealthOpen(true)}
                  className="px-2.5 py-1.5 rounded-full text-xs font-bold bg-[#F7F5F0] hover:bg-[#EFE9E0] text-[#2D3139] transition-colors flex items-center gap-1 border border-[#EFE9E0]"
                >
                  <Activity size={13} className="text-[#10B981]" />
                  <span>API Status</span>
                </button>
              </div>
            </div>

            {/* Notification alert banner */}
            {locationNotice && (
              <div className="p-3 rounded-2xl bg-[#ECFDF5] border border-[#10B981]/30 text-xs font-semibold text-[#006947] flex items-center gap-2 animate-in fade-in slide-in-from-top-2 duration-200">
                <CheckCircle2 size={15} className="shrink-0 text-[#10B981]" />
                <span>{locationNotice}</span>
              </div>
            )}

            {/* "吃什么！" Brand Decider & Logo Feature Banner */}
            <EatWhatDecider
              onSelectDishQuery={(query) => {
                setFilters((f) => ({ ...f, searchQuery: query }));
              }}
            />

            {/* Quick Food Craving Chips (Finding specific foods at location) */}
            <div className="space-y-1.5">
              <div className="flex items-center justify-between text-xs font-bold text-[#8E929A] uppercase tracking-wider px-1">
                <span className="flex items-center gap-1">
                  <Utensils size={12} className="text-[#F4511E]" />
                  <span>Popular Dishes at Your Location</span>
                </span>
                {filters.searchQuery && (
                  <button
                    onClick={() => setFilters(f => ({ ...f, searchQuery: '' }))}
                    className="text-[#F4511E] text-[11px] font-bold lowercase hover:underline"
                  >
                    clear search
                  </button>
                )}
              </div>

              <div className="flex gap-2 overflow-x-auto no-scrollbar py-1 -mx-3 px-3 sm:-mx-4 sm:px-4">
                {quickFoodChips.map((chip) => {
                  const isSelected = filters.searchQuery.toLowerCase() === chip.query.toLowerCase();
                  return (
                    <button
                      key={chip.label}
                      onClick={() => setFilters((f) => ({ ...f, searchQuery: chip.query }))}
                      className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all whitespace-nowrap shadow-2xs ${
                        isSelected
                          ? 'bg-[#F4511E] text-white shadow-xs ring-2 ring-[#F4511E]/20'
                          : 'bg-white text-[#2D3139] hover:border-[#F4511E] hover:text-[#F4511E] border border-[#EFE9E0]'
                      }`}
                    >
                      {chip.label}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Quick Proximity Radius & Sort Filter Bar on Mobile */}
            <div className="flex items-center justify-between gap-2 overflow-x-auto no-scrollbar py-0.5">
              <div className="flex items-center gap-1.5 shrink-0">
                <span className="text-[11px] font-bold text-[#8E929A] uppercase">Distance:</span>
                {[0, 1, 3, 5].map((dist) => {
                  const isSelected = filters.maxDistanceKm === dist;
                  return (
                    <button
                      key={dist}
                      onClick={() => setFilters(f => ({ ...f, maxDistanceKm: dist }))}
                      className={`px-2.5 py-1 rounded-full text-xs font-bold transition-all ${
                        isSelected
                          ? 'bg-[#181c23] text-white shadow-2xs'
                          : 'bg-white text-[#60646C] border border-[#EFE9E0] hover:text-[#181c23]'
                      }`}
                    >
                      {dist === 0 ? 'All' : `< ${dist} km`}
                    </button>
                  );
                })}
              </div>

              <div className="flex items-center gap-1.5 shrink-0">
                <span className="text-[11px] font-bold text-[#8E929A] uppercase">Sort:</span>
                {[
                  { id: 'nearest' as SortOption, label: '📍 Closest' },
                  { id: 'match' as SortOption, label: '✨ Match' },
                  { id: 'rating' as SortOption, label: '⭐ Rated' },
                ].map((sort) => {
                  const isSelected = filters.sortBy === sort.id;
                  return (
                    <button
                      key={sort.id}
                      onClick={() => setFilters(f => ({ ...f, sortBy: sort.id }))}
                      className={`px-2.5 py-1 rounded-full text-xs font-bold transition-all ${
                        isSelected
                          ? 'bg-[#F4511E] text-white shadow-2xs'
                          : 'bg-white text-[#60646C] border border-[#EFE9E0] hover:text-[#181c23]'
                      }`}
                    >
                      {sort.label}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Specialty Category Filter Pills */}
            <div className="flex gap-2 overflow-x-auto no-scrollbar py-1 -mx-3 px-3 sm:-mx-4 sm:px-4">
              {categoryChips.map((chip) => {
                const isSelected = filters.category === chip.id;
                return (
                  <button
                    key={chip.id}
                    onClick={() => setFilters((f) => ({ ...f, category: chip.id }))}
                    className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all whitespace-nowrap shadow-xs ${
                      isSelected
                        ? 'bg-[#F4511E] text-white shadow-[0_2px_8px_rgba(244,81,30,0.3)]'
                        : 'bg-white text-[#60646C] hover:text-[#181c23] border border-[#EFE9E0]'
                    }`}
                  >
                    {chip.label}
                  </button>
                );
              })}
            </div>

            {/* Split Screen View on Desktop OR Standard Layout */}
            {isDesktopLayout ? (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                {/* Left Feed Panel (5 cols) */}
                <div className="lg:col-span-5 space-y-4 max-h-[calc(100vh-140px)] overflow-y-auto no-scrollbar pr-2">
                  <div className="flex items-center justify-between">
                    <div>
                      <h2 className="text-base font-extrabold text-[#181c23]">
                        Foods Near You ({filteredRestaurants.length})
                      </h2>
                      <p className="text-xs text-[#60646C]">Sorted by closest proximity</p>
                    </div>
                    <span className="text-xs text-[#10B981] font-bold">● Live Availability</span>
                  </div>

                  <div className="space-y-4">
                    {filteredRestaurants.map((restaurant) => (
                      <RestaurantCard
                        key={restaurant.id}
                        restaurant={restaurant}
                        onSelect={handleOpenDetails}
                        isSaved={savedIds.includes(restaurant.id)}
                        onToggleSave={handleToggleSave}
                        onQuickBook={handleQuickBook}
                      />
                    ))}
                  </div>
                </div>

                {/* Right Interactive Map Canvas (7 cols) */}
                <div className="lg:col-span-7 sticky top-24 rounded-3xl overflow-hidden border border-[#EFE9E0] shadow-md h-[calc(100vh-140px)]">
                  <InteractiveMap
                    restaurants={filteredRestaurants}
                    selectedRestaurant={selectedRestaurant || filteredRestaurants[0]}
                    onSelectRestaurant={(r) => setSelectedRestaurant(r)}
                    onOpenDetails={handleOpenDetails}
                    onQuickBook={handleQuickBook}
                    savedIds={savedIds}
                    onToggleSave={handleToggleSave}
                    userLocation={userLocation}
                    onCenterUserLocation={handleUseCurrentLocation}
                  />
                </div>
              </div>
            ) : (
              /* Standard Responsive Feed View */
              <div className="space-y-6 sm:space-y-7">
                {/* Curated AI Recommendation Spotlight Hero Banner */}
                {heroSpotlight && !filters.searchQuery && filters.category === 'all' && (
                  <div
                    onClick={() => handleOpenDetails(heroSpotlight)}
                    className="group cursor-pointer relative rounded-3xl overflow-hidden bg-[#181c23] text-white border border-[#EFE9E0] shadow-[0_8px_24px_-4px_rgba(244,81,30,0.12)] hover:shadow-xl transition-all"
                  >
                    <div className="relative aspect-21/9 min-h-[260px] sm:min-h-[300px] w-full">
                      <img
                        src={heroSpotlight.heroImage}
                        alt={heroSpotlight.name}
                        className="w-full h-full object-cover opacity-85 group-hover:scale-105 transition-transform duration-700 ease-out"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#181c23] via-[#181c23]/40 to-transparent" />

                      {/* Top Badges */}
                      <div className="absolute top-4 left-4 flex items-center gap-2">
                        <div className="flex items-center gap-1.5 px-3 py-1 bg-[#FF6E40] text-white text-xs font-bold rounded-full shadow-lg">
                          <Sparkles size={13} className="fill-white" />
                          <span>Closest Top Match · {heroSpotlight.matchScore}% Match</span>
                        </div>
                        <div className="px-2.5 py-1 bg-white/20 backdrop-blur-md rounded-full text-[11px] font-bold text-white flex items-center gap-1">
                          <Navigation size={11} className="fill-white" />
                          <span>{heroSpotlight.computedDistanceText || heroSpotlight.distance}</span>
                        </div>
                      </div>

                      {/* Bottom Copy */}
                      <div className="absolute bottom-5 left-5 right-5 space-y-2">
                        <span className="text-xs font-bold uppercase tracking-wider text-[#FF6E40]">
                          {heroSpotlight.cuisine} · {heroSpotlight.neighborhood}
                        </span>
                        <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight leading-tight">
                          {heroSpotlight.name}
                        </h2>
                        <p className="text-xs sm:text-sm text-[#DFE2ED] max-w-xl line-clamp-2">
                          "{heroSpotlight.matchReason}"
                        </p>

                        <div className="pt-2 flex items-center justify-between">
                          <div className="flex items-center gap-2 text-xs font-semibold">
                            <span className="w-2 h-2 rounded-full bg-[#10B981] animate-ping" />
                            <span className="text-[#10B981]">{heroSpotlight.openStatusText}</span>
                            <span className="text-white/60">· {heroSpotlight.computedTravelTime || heroSpotlight.walkTime}</span>
                          </div>

                          <span className="inline-flex items-center gap-1 text-xs font-bold text-white group-hover:translate-x-1 transition-transform">
                            Explore Food & Tables <ChevronRight size={15} />
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Editorial Tasting Guides Tray */}
                {!filters.searchQuery && filters.category === 'all' && (
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div>
                        <h2 className="text-lg font-extrabold text-[#181c23] tracking-tight">
                          Curated Tasting Guides
                        </h2>
                        <p className="text-xs text-[#60646C]">Handcrafted routes by resident gastronomes</p>
                      </div>
                      <span className="text-xs font-bold text-[#F4511E] hover:underline cursor-pointer">
                        See All Guides
                      </span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      {TASTING_GUIDES.map((guide) => (
                        <div
                          key={guide.id}
                          className="group cursor-pointer bg-white rounded-2xl border border-[#EFE9E0] overflow-hidden shadow-xs hover:shadow-md hover:border-[#FF6E40]/40 transition-all flex flex-col justify-between"
                        >
                          <div className="relative aspect-16/9 overflow-hidden bg-[#F7F5F0]">
                            <img
                              src={guide.image}
                              alt={guide.title}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                            <div className="absolute top-2 left-2 px-2 py-0.5 rounded-full bg-[#181c23]/80 backdrop-blur-xs text-white text-[10px] font-bold">
                              {guide.spotsCount} Handpicked Stops
                            </div>
                          </div>

                          <div className="p-3.5 space-y-1">
                            <h3 className="text-sm font-bold text-[#181c23] group-hover:text-[#F4511E] transition-colors leading-snug">
                              {guide.title}
                            </h3>
                            <p className="text-xs text-[#60646C] line-clamp-2">
                              {guide.subtitle}
                            </p>
                            <p className="text-[11px] text-[#8E929A] pt-2">
                              {guide.curator}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Main Restaurant Discovery Cards Feed */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h2 className="text-lg font-extrabold text-[#181c23] tracking-tight flex items-center gap-2">
                        <span>Restaurants & Foods Near You</span>
                        <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-[#FBE9E7] text-[#F4511E]">
                          {filteredRestaurants.length} Found
                        </span>
                      </h2>
                      <p className="text-xs text-[#60646C]">
                        {filters.sortBy === 'nearest'
                          ? `Ranked closest to ${userLocation.name}`
                          : `Filtered by ${filters.sortBy}`}
                      </p>
                    </div>

                    <button
                      onClick={() => setActiveTab('map')}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white border border-[#EFE9E0] text-xs font-bold text-[#2D3139] hover:text-[#F4511E] hover:border-[#F4511E] transition-colors shadow-xs"
                    >
                      <MapPin size={13} className="text-[#F4511E]" />
                      <span>View on Map</span>
                    </button>
                  </div>

                  {filteredRestaurants.length === 0 ? (
                    <div className="text-center py-12 px-4 bg-white rounded-3xl border border-[#EFE9E0] space-y-3">
                      <p className="text-sm font-bold text-[#181c23]">
                        No food spots found matching "{filters.searchQuery || 'these filters'}".
                      </p>
                      <p className="text-xs text-[#60646C]">
                        Try expanding your distance radius or search for popular foods like Laksa, Chili Crab, Hor Fun, Satay, or Kaya Toast.
                      </p>
                      <button
                        onClick={() => setFilters({
                          searchQuery: '',
                          category: 'all',
                          priceLevels: [],
                          minRating: 0,
                          minMatchScore: 0,
                          openNowOnly: false,
                          outdoorSeatingOnly: false,
                          michelinOnly: false,
                          selectedVibe: 'all',
                          maxDistanceKm: 0,
                          sortBy: 'nearest'
                        })}
                        className="px-4 py-2 rounded-full bg-[#F4511E] text-white text-xs font-bold shadow-sm"
                      >
                        Reset All Filters
                      </button>
                    </div>
                  ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
                      {filteredRestaurants.map((restaurant) => (
                        <RestaurantCard
                          key={restaurant.id}
                          restaurant={restaurant}
                          onSelect={handleOpenDetails}
                          isSaved={savedIds.includes(restaurant.id)}
                          onToggleSave={handleToggleSave}
                          onQuickBook={handleQuickBook}
                        />
                      ))}
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        )}

        {/* TAB 2: INTERACTIVE MAP SCREEN */}
        {activeTab === 'map' && (
          <InteractiveMap
            restaurants={filteredRestaurants}
            selectedRestaurant={selectedRestaurant || filteredRestaurants[0]}
            onSelectRestaurant={(r) => setSelectedRestaurant(r)}
            onOpenDetails={handleOpenDetails}
            onQuickBook={handleQuickBook}
            savedIds={savedIds}
            onToggleSave={handleToggleSave}
            userLocation={userLocation}
            onCenterUserLocation={handleUseCurrentLocation}
          />
        )}

        {/* TAB 3: CRAVE AI CONCIERGE SCREEN */}
        {activeTab === 'crave' && (
          <CraveConcierge
            restaurants={restaurantsWithDistances}
            onSelectRestaurant={handleOpenDetails}
            onQuickBook={handleQuickBook}
          />
        )}

        {/* TAB 4: SAVED BUCKET LIST SCREEN */}
        {activeTab === 'saved' && (
          <SavedScreen
            savedRestaurants={savedRestaurants}
            onSelectRestaurant={handleOpenDetails}
            onRemoveSaved={(id) => setSavedIds((s) => s.filter((item) => item !== id))}
            onQuickBook={handleQuickBook}
            onGoToExplore={() => setActiveTab('explore')}
          />
        )}

        {/* TAB 5: PROFILE & TASTE PASSPORT SCREEN */}
        {activeTab === 'profile' && (
          <ProfileScreen
            profile={INITIAL_USER_PROFILE}
            reservations={reservations}
            onCancelReservation={(id) => setReservations((r) => r.filter((res) => res.id !== id))}
          />
        )}
      </main>

      {/* Primary Fixed Bottom Navigation */}
      <BottomNav
        activeTab={activeTab}
        onTabChange={(tab) => setActiveTab(tab)}
        savedCount={savedIds.length}
        activeReservationsCount={reservations.length}
      />

      {/* Venue Detail Modal */}
      <RestaurantModal
        restaurant={isDetailModalOpen ? selectedRestaurant : null}
        onClose={() => setIsDetailModalOpen(false)}
        isSaved={selectedRestaurant ? savedIds.includes(selectedRestaurant.id) : false}
        onToggleSave={handleToggleSave}
        onConfirmReservation={handleConfirmReservation}
      />

      {/* Filter Modal with Distance & Sorting */}
      <FilterModal
        isOpen={isFilterModalOpen}
        onClose={() => setIsFilterModalOpen(false)}
        filters={filters}
        onUpdateFilters={setFilters}
        onResetFilters={() => setFilters({
          searchQuery: '',
          category: 'all',
          priceLevels: [],
          minRating: 0,
          minMatchScore: 0,
          openNowOnly: false,
          outdoorSeatingOnly: false,
          michelinOnly: false,
          selectedVibe: 'all',
          maxDistanceKm: 0,
          sortBy: 'nearest'
        })}
      />

      {/* API Health Monitor Modal */}
      <ApiHealthModal
        isOpen={isApiHealthOpen}
        onClose={() => setIsApiHealthOpen(false)}
      />

      {/* Reservation Confirmed Modal */}
      <ReservationSuccessModal
        reservation={confirmedReservation}
        onClose={() => setConfirmedReservation(null)}
        onViewPassport={() => setActiveTab('profile')}
      />
    </div>
  );
}
