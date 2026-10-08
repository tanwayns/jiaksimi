import React, { useState } from 'react';
import { 
  Navigation, 
  Plus, 
  Minus, 
  RotateCcw, 
  Sparkles, 
  Star, 
  Clock, 
  MapPin, 
  ChevronRight, 
  Bookmark, 
  Check, 
  SlidersHorizontal,
  Flame,
  UtensilsCrossed,
  Compass
} from 'lucide-react';
import { Restaurant } from '../types/restaurant';
import { UserLocationState } from '../utils/geo';

interface InteractiveMapProps {
  restaurants: Restaurant[];
  selectedRestaurant: Restaurant | null;
  onSelectRestaurant: (restaurant: Restaurant) => void;
  onOpenDetails: (restaurant: Restaurant) => void;
  onQuickBook: (restaurant: Restaurant, e: React.MouseEvent) => void;
  savedIds: string[];
  onToggleSave: (id: string, e: React.MouseEvent) => void;
  userLocation?: UserLocationState;
  onCenterUserLocation?: () => void;
}

export const InteractiveMap: React.FC<InteractiveMapProps> = ({
  restaurants,
  selectedRestaurant,
  onSelectRestaurant,
  onOpenDetails,
  onQuickBook,
  savedIds,
  onToggleSave,
  userLocation,
  onCenterUserLocation
}) => {
  const [zoomLevel, setZoomLevel] = useState(1);
  const [filterActive, setFilterActive] = useState<'all' | 'sg' | 'my' | 'open' | 'topRated'>('all');
  const [showTasteHeatmap, setShowTasteHeatmap] = useState(false);

  // Filter restaurants for map pins
  const filteredRestaurants = restaurants.filter((r) => {
    if (filterActive === 'sg') return r.id.startsWith('sg');
    if (filterActive === 'my') return r.id.startsWith('my');
    if (filterActive === 'open') return r.isOpen;
    if (filterActive === 'topRated') return r.rating >= 4.9;
    return true;
  });

  const active = selectedRestaurant || (filteredRestaurants.length > 0 ? filteredRestaurants[0] : null);

  // Compute map position for user location beacon (roughly in Singapore central CBD by default)
  const userMapX = userLocation?.coords.lat && userLocation.coords.lat > 2 ? 76 : 46;
  const userMapY = userLocation?.coords.lat && userLocation.coords.lat > 2 ? 30 : 54;

  return (
    <div className="relative w-full h-[calc(100vh-140px)] min-h-[550px] bg-[#F7F5F0] overflow-hidden select-none">
      {/* Top Floating Filter Bar (Level 2 Elevation) */}
      <div className="absolute top-3 left-3 right-3 z-20 flex items-center justify-between pointer-events-none">
        <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar py-1 pointer-events-auto">
          <button
            onClick={() => setFilterActive('all')}
            className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all whitespace-nowrap shadow-xs ${
              filterActive === 'all'
                ? 'bg-[#F4511E] text-white shadow-[0_2px_8px_rgba(244,81,30,0.35)]'
                : 'bg-white/95 text-[#60646C] hover:text-[#181c23] border border-[#EFE9E0]'
            }`}
          >
            All Food Spots ({restaurants.length})
          </button>
          <button
            onClick={() => setFilterActive('sg')}
            className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all whitespace-nowrap shadow-xs flex items-center gap-1 ${
              filterActive === 'sg'
                ? 'bg-[#181c23] text-white shadow-xs'
                : 'bg-white/95 text-[#60646C] hover:text-[#181c23] border border-[#EFE9E0]'
            }`}
          >
            <span>🇸🇬</span>
            Singapore
          </button>
          <button
            onClick={() => setFilterActive('my')}
            className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all whitespace-nowrap shadow-xs flex items-center gap-1 ${
              filterActive === 'my'
                ? 'bg-[#181c23] text-white shadow-xs'
                : 'bg-white/95 text-[#60646C] hover:text-[#181c23] border border-[#EFE9E0]'
            }`}
          >
            <span>🇲🇾</span>
            Malaysia
          </button>
          <button
            onClick={() => setFilterActive('open')}
            className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all whitespace-nowrap shadow-xs flex items-center gap-1 ${
              filterActive === 'open'
                ? 'bg-[#10B981] text-white shadow-[0_2px_8px_rgba(16,185,129,0.35)]'
                : 'bg-white/95 text-[#60646C] hover:text-[#181c23] border border-[#EFE9E0]'
            }`}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            Open Now
          </button>
          <button
            onClick={() => setFilterActive('topRated')}
            className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all whitespace-nowrap shadow-xs flex items-center gap-1 ${
              filterActive === 'topRated'
                ? 'bg-[#F4511E] text-white'
                : 'bg-white/95 text-[#60646C] hover:text-[#181c23] border border-[#EFE9E0]'
            }`}
          >
            <Star size={11} className="fill-current" />
            4.9+ Rated
          </button>
        </div>

        {/* Heatmap toggle */}
        <button
          onClick={() => setShowTasteHeatmap(!showTasteHeatmap)}
          className={`pointer-events-auto ml-2 p-2 rounded-full border shadow-xs transition-colors shrink-0 ${
            showTasteHeatmap
              ? 'bg-[#FF6E40] text-white border-[#FF6E40]'
              : 'bg-white/90 text-[#60646C] border-[#EFE9E0] hover:text-[#F4511E]'
          }`}
          title="Toggle Taste Match Heatmap"
        >
          <Flame size={16} />
        </button>
      </div>

      {/* Styled Map Background Canvas */}
      <div 
        className="w-full h-full relative transition-transform duration-300 ease-out"
        style={{ transform: `scale(${zoomLevel})`, transformOrigin: 'center center' }}
      >
        {/* Geometric Stylized Cartographic SVG Map */}
        <svg
          viewBox="0 0 1000 700"
          className="w-full h-full object-cover"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="waterGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#D2E3EB" />
              <stop offset="100%" stopColor="#BED3DE" />
            </linearGradient>
            <linearGradient id="parkGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#DFEADE" />
              <stop offset="100%" stopColor="#CFDECة" />
            </linearGradient>
            <radialGradient id="heatGlow1" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#F4511E" stopOpacity="0.35" />
              <stop offset="70%" stopColor="#FF6E40" stopOpacity="0.15" />
              <stop offset="100%" stopColor="#FDFBF7" stopOpacity="0" />
            </radialGradient>
          </defs>

          {/* Base Ground */}
          <rect width="1000" height="700" fill="#F4EFE6" />

          {/* Marina Bay & Singapore Basin (East Waterfront) */}
          <path
            d="M 1000,120 Q 820,200 840,420 T 720,700 L 1000,700 Z"
            fill="url(#waterGrad)"
          />

          {/* Singapore River Winding Through Clarke Quay & Boat Quay */}
          <path
            d="M 50,220 Q 220,240 380,200 T 640,240 Q 760,260 840,320"
            fill="none"
            stroke="#C4D7E2"
            strokeWidth="38"
            strokeLinecap="round"
          />
          <path
            d="M 50,220 Q 220,240 380,200 T 640,240 Q 760,260 840,320"
            fill="none"
            stroke="#D8E8F0"
            strokeWidth="30"
            strokeLinecap="round"
          />

          {/* District Ground Polygons */}
          <polygon points="120,40 480,30 460,340 140,320" fill="#F8F5EE" stroke="#EFE9E0" strokeWidth="2" />
          <polygon points="480,30 820,40 760,340 460,340" fill="#FAF7F0" stroke="#EFE9E0" strokeWidth="2" />
          <polygon points="140,320 460,340 430,680 90,680" fill="#F7F3EB" stroke="#EFE9E0" strokeWidth="2" />
          <polygon points="460,340 780,340 720,680 430,680" fill="#F9F6EE" stroke="#EFE9E0" strokeWidth="2" />

          {/* Fort Canning Green Park */}
          <rect x="240" y="80" width="180" height="90" rx="16" fill="url(#parkGrad)" stroke="#B8D7B8" strokeWidth="1.5" />
          <circle cx="330" cy="125" r="22" fill="#CFDECة" />
          <text x="330" y="130" fontSize="10" fontWeight="700" fill="#4B6B4B" textAnchor="middle" letterSpacing="0.8">FORT CANNING PARK</text>

          {/* Gardens by the Bay / Marina Green */}
          <path
            d="M 880,480 Q 940,490 960,620 L 880,680 Z"
            fill="url(#parkGrad)"
            stroke="#B8D7B8"
            strokeWidth="1.5"
          />
          <text x="920" y="580" fontSize="9" fontWeight="700" fill="#4B6B4B" textAnchor="middle">GARDENS BY THE BAY</text>

          {/* Hong Lim Park */}
          <rect x="290" y="270" width="80" height="50" rx="6" fill="url(#parkGrad)" stroke="#B8D7B8" strokeWidth="1" />

          {/* Major Roads (Robinson Rd, Shenton Way, Cecil St, South Bridge Rd) */}
          <line x1="520" y1="0" x2="480" y2="700" stroke="#FFFFFF" strokeWidth="20" />
          <line x1="520" y1="0" x2="480" y2="700" stroke="#FED7AA" strokeWidth="3" />

          <line x1="610" y1="0" x2="570" y2="700" stroke="#FFFFFF" strokeWidth="16" />
          <line x1="390" y1="0" x2="360" y2="700" stroke="#FFFFFF" strokeWidth="16" />
          <line x1="260" y1="0" x2="230" y2="700" stroke="#FFFFFF" strokeWidth="14" />
          <line x1="720" y1="0" x2="680" y2="700" stroke="#FFFFFF" strokeWidth="18" />

          {/* Heritage Cross Streets: Cross St, Upper Cross St, Amoy St, Telok Ayer St */}
          <line x1="100" y1="360" x2="900" y2="360" stroke="#FFFFFF" strokeWidth="16" />
          <line x1="100" y1="460" x2="900" y2="460" stroke="#FFFFFF" strokeWidth="14" />
          <line x1="100" y1="560" x2="900" y2="560" stroke="#FFFFFF" strokeWidth="14" />
          <line x1="100" y1="640" x2="900" y2="640" stroke="#FFFFFF" strokeWidth="12" />

          {/* Diagonal Keong Saik & Tanjong Pagar shophouse cut */}
          <path
            d="M 180,480 L 320,680"
            fill="none"
            stroke="#FFFFFF"
            strokeWidth="14"
          />

          {/* District Labels */}
          <text x="440" y="440" fontSize="18" fontWeight="800" fill="#71757D" opacity="0.4" letterSpacing="4">TELOK AYER</text>
          <text x="260" y="590" fontSize="15" fontWeight="800" fill="#8E929A" letterSpacing="2.5">KEONG SAIK</text>
          <text x="590" y="580" fontSize="14" fontWeight="800" fill="#8E929A" letterSpacing="2">TANJONG PAGAR</text>
          <text x="730" y="400" fontSize="16" fontWeight="800" fill="#8E929A" letterSpacing="3">MARINA BAY</text>
          <text x="210" y="340" fontSize="14" fontWeight="800" fill="#8E929A" letterSpacing="2">CHINATOWN</text>
          <text x="520" y="220" fontSize="12" fontWeight="800" fill="#8E929A" letterSpacing="1.5">BOAT QUAY</text>
          <text x="640" y="140" fontSize="13" fontWeight="800" fill="#8E929A" letterSpacing="2">BUGIS & HAJI LANE</text>

          {/* Street Name Labels */}
          <text x="470" y="380" fontSize="9" fontWeight="600" fill="#A8ADB7" letterSpacing="1">CROSS ST</text>
          <text x="450" y="480" fontSize="9" fontWeight="600" fill="#A8ADB7" letterSpacing="1">AMOY ST</text>
          <text x="430" y="580" fontSize="9" fontWeight="600" fill="#A8ADB7" letterSpacing="1">TELOK AYER ST</text>
          <text x="580" y="500" fontSize="9" fontWeight="600" fill="#A8ADB7" letterSpacing="1">ROBINSON RD</text>
          <text x="230" y="630" fontSize="9" fontWeight="600" fill="#A8ADB7" letterSpacing="1">KEONG SAIK RD</text>

          {/* Optional Taste Heatmap Overlay */}
          {showTasteHeatmap && (
            <>
              <circle cx="420" cy="520" r="140" fill="url(#heatGlow1)" />
              <circle cx="280" cy="620" r="110" fill="url(#heatGlow1)" />
              <circle cx="620" cy="280" r="120" fill="url(#heatGlow1)" />
            </>
          )}
        </svg>

        {/* Live User Location Beacon Pin (Blue GPS Beacon) */}
        <div
          style={{
            left: `${userMapX}%`,
            top: `${userMapY}%`,
          }}
          className="absolute -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none"
        >
          <div className="relative flex flex-col items-center">
            {/* Pulsing GPS Radar Ring */}
            <div className="w-10 h-10 rounded-full bg-blue-500/25 animate-ping absolute -inset-2" />
            <div className="w-6 h-6 rounded-full bg-blue-600 border-2 border-white shadow-lg flex items-center justify-center">
              <div className="w-2.5 h-2.5 rounded-full bg-white animate-pulse" />
            </div>
            <div className="mt-1 px-2 py-0.5 rounded-full bg-blue-900/90 text-white text-[9px] font-extrabold whitespace-nowrap shadow-md">
              {userLocation?.isLiveGps ? '📍 You Are Here' : '📍 Current Center'}
            </div>
          </div>
        </div>

        {/* Interactive Persimmon Location Pins */}
        {filteredRestaurants.map((restaurant) => {
          const isSelected = active?.id === restaurant.id;
          const displayDist = restaurant.computedDistanceText || restaurant.distance;

          return (
            <div
              key={restaurant.id}
              onClick={() => onSelectRestaurant(restaurant)}
              style={{
                left: `${restaurant.mapX}%`,
                top: `${restaurant.mapY}%`,
              }}
              className="absolute -translate-x-1/2 -translate-y-full cursor-pointer z-10 transition-all duration-300 group"
            >
              {/* Outer Selection Pulse Ring */}
              {isSelected && (
                <div className="absolute inset-0 -m-3 rounded-full bg-[#F4511E]/20 animate-ping" />
              )}

              {/* Pin Container */}
              <div
                className={`relative flex flex-col items-center transition-transform duration-200 ${
                  isSelected ? 'scale-115 -translate-y-1' : 'hover:scale-105'
                }`}
              >
                {/* Floating Distance/Rating Pill Tag over Pin */}
                <div
                  className={`px-2 py-0.5 rounded-full text-[11px] font-bold shadow-md flex items-center gap-1 mb-1 transition-colors whitespace-nowrap ${
                    isSelected
                      ? 'bg-[#181c23] text-white shadow-[0_4px_12px_rgba(24,28,35,0.4)]'
                      : 'bg-white text-[#2D3139] border border-[#EFE9E0]'
                  }`}
                >
                  <Navigation size={9} className="text-[#F4511E] fill-[#F4511E]" />
                  <span>{displayDist}</span>
                  <span className="opacity-50">·</span>
                  <span className={isSelected ? 'text-[#FF6E40]' : 'text-[#F4511E]'}>
                    {restaurant.price}
                  </span>
                </div>

                {/* Primary Persimmon Location Pin Head */}
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center shadow-lg border-2 border-white transition-all text-base ${
                    isSelected
                      ? 'bg-[#F4511E] text-white ring-4 ring-[#F4511E]/30 shadow-[0_8px_20px_rgba(244,81,30,0.5)]'
                      : 'bg-[#FF6E40] text-white hover:bg-[#F4511E]'
                  }`}
                >
                  {restaurant.category === 'peranakan' && <span>🌺</span>}
                  {restaurant.category === 'wokhei' && <span>🥢</span>}
                  {restaurant.category === 'grill' && <span>🥩</span>}
                  {restaurant.category === 'wine' && <span>🍷</span>}
                  {restaurant.category === 'seafood' && <span>🦀</span>}
                  {restaurant.category === 'spice' && <span>🌶️</span>}
                  {restaurant.category === 'cafe' && <span>☕</span>}
                </div>

                {/* Bottom Pointer Arrow */}
                <div
                  className={`w-0 h-0 border-x-[6px] border-x-transparent border-t-[8px] -mt-0.5 ${
                    isSelected ? 'border-t-[#F4511E]' : 'border-t-[#FF6E40]'
                  }`}
                />
              </div>
            </div>
          );
        })}
      </div>

      {/* Map Control Floating Buttons (Right Side) */}
      <div className="absolute right-4 top-16 z-20 flex flex-col gap-2">
        <button
          onClick={() => setZoomLevel((z) => Math.min(z + 0.2, 1.8))}
          className="w-10 h-10 rounded-full bg-white/95 backdrop-blur-md border border-[#EFE9E0] text-[#2D3139] shadow-md flex items-center justify-center hover:bg-white hover:text-[#F4511E] transition-colors"
          title="Zoom In"
        >
          <Plus size={18} />
        </button>
        <button
          onClick={() => setZoomLevel((z) => Math.max(z - 0.2, 0.8))}
          className="w-10 h-10 rounded-full bg-white/95 backdrop-blur-md border border-[#EFE9E0] text-[#2D3139] shadow-md flex items-center justify-center hover:bg-white hover:text-[#F4511E] transition-colors"
          title="Zoom Out"
        >
          <Minus size={18} />
        </button>
        <button
          onClick={() => {
            setZoomLevel(1);
            if (restaurants[0]) onSelectRestaurant(restaurants[0]);
          }}
          className="w-10 h-10 rounded-full bg-white/95 backdrop-blur-md border border-[#EFE9E0] text-[#2D3139] shadow-md flex items-center justify-center hover:bg-white hover:text-[#F4511E] transition-colors"
          title="Reset View"
        >
          <RotateCcw size={16} />
        </button>
      </div>

      {/* Floating Re-Center FAB (Level 4 Elevation with subtle pulse) */}
      <button
        onClick={() => {
          if (onCenterUserLocation) {
            onCenterUserLocation();
          } else if (restaurants[0]) {
            onSelectRestaurant(restaurants[0]);
          }
        }}
        className="absolute left-4 bottom-32 z-20 flex items-center gap-2 px-3.5 py-2.5 rounded-full bg-[#181c23] text-white text-xs font-bold shadow-[0_12px_28px_-6px_rgba(24,28,35,0.4)] hover:bg-[#2D3139] transition-all hover:scale-105 active:scale-95 border border-white/10"
      >
        <Navigation size={14} className="text-[#FF6E40]" />
        <span>Find Closest Foods Near Me</span>
      </button>

      {/* Bottom Sheet Drawer / Peek Card (Level 3 Elevation) */}
      {active && (
        <div className="absolute bottom-2 left-3 right-3 sm:left-6 sm:right-auto sm:w-[380px] z-30 animate-in slide-in-from-bottom-6 duration-200">
          <div className="bg-white rounded-2xl border border-[#EFE9E0] p-3.5 shadow-[0_-8px_32px_-4px_rgba(45,49,57,0.14)] flex flex-col gap-2.5">
            {/* Top Sheet Pull Bar */}
            <div className="w-9 h-1 rounded-full bg-[#DFE2ED] mx-auto -mt-1 sm:hidden" />

            <div className="flex gap-3">
              {/* Thumbnail */}
              <div
                onClick={() => onOpenDetails(active)}
                className="relative w-24 h-24 rounded-xl overflow-hidden shrink-0 bg-[#F7F5F0] cursor-pointer group"
              >
                <img
                  src={active.heroImage}
                  alt={active.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-1 left-1 px-1.5 py-0.5 rounded-full bg-[#FF6E40] text-white text-[10px] font-bold">
                  {active.matchScore}%
                </div>
              </div>

              {/* Info Column */}
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between">
                  <div onClick={() => onOpenDetails(active)} className="cursor-pointer">
                    <h4 className="text-[16px] font-bold text-[#181c23] hover:text-[#F4511E] transition-colors truncate">
                      {active.name}
                    </h4>
                    <p className="text-xs text-[#60646C] truncate mt-0.5">
                      {active.cuisine} · {active.price}
                    </p>
                  </div>
                  <button
                    onClick={(e) => onToggleSave(active.id, e)}
                    className="p-1.5 text-[#60646C] hover:text-[#F4511E] transition-colors"
                  >
                    <Bookmark
                      size={18}
                      className={savedIds.includes(active.id) ? 'fill-[#F4511E] text-[#F4511E]' : ''}
                    />
                  </button>
                </div>

                <div className="flex items-center gap-1.5 text-xs mt-1">
                  <span className="font-extrabold text-[#F4511E] flex items-center gap-0.5">
                    <Navigation size={10} className="fill-[#F4511E]" />
                    {active.computedDistanceText || active.distance}
                  </span>
                  <span className="text-[#8E929A]">·</span>
                  <span className="text-[#60646C]">{active.computedTravelTime || active.walkTime}</span>
                  <span className="text-[#8E929A]">·</span>
                  <span className="text-[#10B981] font-semibold">
                    {active.isOpen ? 'Open' : 'Closed'}
                  </span>
                </div>

                {active.popularDishes && active.popularDishes.length > 0 && (
                  <p className="text-[11px] text-[#ac2d00] font-semibold truncate mt-1">
                    🍴 {active.popularDishes.slice(0, 2).join(', ')}
                  </p>
                )}
              </div>
            </div>

            {/* Quick Actions in Bottom Sheet */}
            <div className="flex items-center gap-2 pt-1">
              <button
                onClick={(e) => onQuickBook(active, e)}
                className="flex-1 py-2 rounded-full bg-[#F4511E] hover:bg-[#d63c05] text-white text-xs font-bold transition-transform active:scale-98 shadow-sm flex items-center justify-center gap-1.5"
              >
                <span>Book Table</span>
                <span className="text-[10px] opacity-80">({active.availableSlots[0]})</span>
              </button>

              <button
                onClick={() => onOpenDetails(active)}
                className="px-4 py-2 rounded-full bg-[#F7F5F0] hover:bg-[#EFE9E0] text-[#2D3139] text-xs font-bold transition-colors flex items-center gap-1"
              >
                <span>Details</span>
                <ChevronRight size={14} />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
