import React, { useState, useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
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
  Coffee,
  Moon,
  Search,
  Crosshair,
  Layers
} from 'lucide-react';
import { Restaurant, VenueType } from '../types/restaurant';
import { UserLocationState, formatDistance, formatTravelTime } from '../utils/geo';

interface InteractiveMapProps {
  restaurants: Restaurant[];
  selectedRestaurant: Restaurant | null;
  onSelectRestaurant: (restaurant: Restaurant) => void;
  onOpenDetails: (restaurant: Restaurant) => void;
  savedIds: string[];
  onToggleSave: (id: string) => void;
  userLocation?: UserLocationState;
  onTriggerLocation?: () => void;
  isLocating?: boolean;
}

export const InteractiveMap: React.FC<InteractiveMapProps> = ({
  restaurants,
  selectedRestaurant,
  onSelectRestaurant,
  onOpenDetails,
  savedIds,
  onToggleSave,
  userLocation,
  onTriggerLocation,
  isLocating = false,
}) => {
  // Map View Mode: Interactive OpenStreetMap vs Stylized Heritage Art Map
  const [mapMode, setMapMode] = useState<'interactive' | 'stylized'>('interactive');
  const [activeVenueFilter, setActiveVenueFilter] = useState<string>('all');
  const [zoomLevel, setZoomLevel] = useState<number>(14);

  // Leaflet references
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const leafletMapRef = useRef<L.Map | null>(null);
  const markersLayerRef = useRef<L.LayerGroup | null>(null);
  const userMarkerRef = useRef<L.LayerGroup | null>(null);

  // Active selected restaurant
  const active = selectedRestaurant || restaurants[0] || null;

  // Filter restaurants for map
  const displayRestaurants = restaurants.filter(r => {
    if (activeVenueFilter === 'all') return true;
    if (activeVenueFilter === 'hawker') return r.venueType === 'hawker' || r.category === 'hawker';
    if (activeVenueFilter === 'foodcourt') return r.venueType === 'foodcourt' || r.category === 'foodcourt';
    if (activeVenueFilter === 'restaurant') return r.venueType === 'restaurant' || (!r.venueType && r.category !== 'hawker' && r.category !== 'foodcourt');
    if (activeVenueFilter === 'zichar') return r.venueType === 'zichar' || r.category === 'wokhei' || r.category === 'zichar';
    if (activeVenueFilter === 'supper') return r.venueType === 'supper' || r.category === 'supper';
    if (activeVenueFilter === 'cafe') return r.venueType === 'cafe' || r.category === 'cafe';
    return true;
  });

  // Get Venue Type Icon and Colors
  const getVenueBadge = (r: Restaurant) => {
    if (r.venueType === 'hawker' || r.category === 'hawker') {
      return { label: 'Hawker Stall', emoji: '🍢', bg: 'bg-[#FFEDD5] text-[#C2410C]', border: 'border-[#F97316]', color: '#EA580C' };
    }
    if (r.venueType === 'foodcourt' || r.category === 'foodcourt') {
      return { label: 'Food Court', emoji: '🍲', bg: 'bg-[#D1FAE5] text-[#065F46]', border: 'border-[#10B981]', color: '#059669' };
    }
    if (r.venueType === 'zichar' || r.category === 'wokhei' || r.category === 'zichar') {
      return { label: 'Zi Char', emoji: '🔥', bg: 'bg-[#FEE2E2] text-[#991B1B]', border: 'border-[#EF4444]', color: '#DC2626' };
    }
    if (r.venueType === 'cafe' || r.category === 'cafe') {
      return { label: 'Kopitiam & Cafe', emoji: '☕', bg: 'bg-[#FEF3C7] text-[#92400E]', border: 'border-[#F59E0B]', color: '#D97706' };
    }
    if (r.venueType === 'supper' || r.category === 'supper') {
      return { label: 'Late Night Supper', emoji: '🌙', bg: 'bg-[#EDE9FE] text-[#5B21B6]', border: 'border-[#8B5CF6]', color: '#7C3AED' };
    }
    return { label: 'Restaurant', emoji: '🍽️', bg: 'bg-[#FBE9E7] text-[#C2410C]', border: 'border-[#F4511E]', color: '#F4511E' };
  };

  // Initialize Leaflet Map
  useEffect(() => {
    if (mapMode !== 'interactive' || !mapContainerRef.current) return;

    if (!leafletMapRef.current) {
      const initialLat = active?.lat || userLocation?.coords.lat || 1.2804;
      const initialLng = active?.lng || userLocation?.coords.lng || 103.8440;

      const map = L.map(mapContainerRef.current, {
        center: [initialLat, initialLng],
        zoom: zoomLevel,
        zoomControl: false, // Custom controls
        attributionControl: false
      });

      // Free, crisp OpenStreetMap / Carto tiles
      L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
        maxZoom: 19,
        subdomains: 'abcd',
      }).addTo(map);

      // Add attribution minimally in bottom right
      L.control.attribution({ position: 'bottomright', prefix: '© OpenStreetMap · CARTO' }).addTo(map);

      markersLayerRef.current = L.layerGroup().addTo(map);
      userMarkerRef.current = L.layerGroup().addTo(map);
      leafletMapRef.current = map;

      map.on('zoomend', () => {
        setZoomLevel(map.getZoom());
      });
    }

    return () => {
      // Keep map instance mounted if mode doesn't switch
    };
  }, [mapMode]);

  // Update User GPS Marker on Map
  useEffect(() => {
    if (!leafletMapRef.current || !userMarkerRef.current || !userLocation) return;

    userMarkerRef.current.clearLayers();

    const { lat, lng } = userLocation.coords;

    // Pulsating user beacon icon
    const userHtml = `
      <div class="relative flex items-center justify-center w-8 h-8">
        <div class="absolute w-8 h-8 rounded-full bg-blue-500/25 animate-ping"></div>
        <div class="relative w-4 h-4 rounded-full bg-blue-600 border-2 border-white shadow-md flex items-center justify-center">
          <div class="w-1.5 h-1.5 rounded-full bg-white"></div>
        </div>
      </div>
    `;

    const userIcon = L.divIcon({
      html: userHtml,
      className: 'user-gps-marker',
      iconSize: [32, 32],
      iconAnchor: [16, 16],
    });

    const marker = L.marker([lat, lng], { icon: userIcon, zIndexOffset: 1000 });
    marker.bindTooltip(
      `<div class="font-bold text-xs text-blue-900">${userLocation.name}</div><div class="text-[10px] text-gray-600">Your detected position</div>`, 
      { direction: 'top', offset: [0, -12] }
    );
    userMarkerRef.current.addLayer(marker);

    // Optional accuracy circle
    if (userLocation.accuracyMeters && userLocation.accuracyMeters < 500) {
      const circle = L.circle([lat, lng], {
        radius: userLocation.accuracyMeters,
        color: '#3B82F6',
        fillColor: '#93C5FD',
        fillOpacity: 0.15,
        weight: 1
      });
      userMarkerRef.current.addLayer(circle);
    }
  }, [userLocation]);

  // Update Food Spots Pins on Leaflet Map
  useEffect(() => {
    if (!leafletMapRef.current || !markersLayerRef.current) return;

    markersLayerRef.current.clearLayers();

    displayRestaurants.forEach((r) => {
      const isSelected = active?.id === r.id;
      const venueInfo = getVenueBadge(r);

      const markerHtml = `
        <div class="cursor-pointer transition-transform duration-200 hover:scale-110 flex flex-col items-center">
          <div class="px-2 py-0.5 rounded-full text-[10px] font-extrabold shadow-md border flex items-center gap-1 ${
            isSelected 
              ? 'bg-[#181C23] text-white border-white scale-110' 
              : 'bg-white text-[#2D3139] border-[#EFE9E0]'
          }">
            <span>${venueInfo.emoji}</span>
            <span class="max-w-[85px] truncate font-bold">${r.name.split(' ')[0]}</span>
            <span class="text-[#F4511E] font-extrabold">${r.price}</span>
          </div>
          <div class="w-2.5 h-2.5 rotate-45 -mt-1 ${isSelected ? 'bg-[#181C23]' : 'bg-white border-r border-b border-[#EFE9E0]'}"></div>
        </div>
      `;

      const customIcon = L.divIcon({
        html: markerHtml,
        className: 'food-spot-marker',
        iconSize: [110, 32],
        iconAnchor: [55, 30]
      });

      const marker = L.marker([r.lat, r.lng], { icon: customIcon });

      marker.on('click', () => {
        onSelectRestaurant(r);
        if (leafletMapRef.current) {
          leafletMapRef.current.panTo([r.lat, r.lng], { animate: true, duration: 0.5 });
        }
      });

      markersLayerRef.current?.addLayer(marker);
    });
  }, [displayRestaurants, active?.id]);

  // Center on active restaurant when changed
  useEffect(() => {
    if (mapMode === 'interactive' && leafletMapRef.current && active) {
      leafletMapRef.current.panTo([active.lat, active.lng], { animate: true, duration: 0.5 });
    }
  }, [active?.id]);

  // Center on User GPS
  const handleCenterOnUser = () => {
    if (onTriggerLocation) {
      onTriggerLocation();
    }
    if (userLocation && leafletMapRef.current) {
      leafletMapRef.current.flyTo(
        [userLocation.coords.lat, userLocation.coords.lng],
        15,
        { animate: true, duration: 0.8 }
      );
    }
  };

  // Zoom handlers
  const handleZoomIn = () => {
    if (leafletMapRef.current) {
      leafletMapRef.current.zoomIn();
    }
  };

  const handleZoomOut = () => {
    if (leafletMapRef.current) {
      leafletMapRef.current.zoomOut();
    }
  };

  const handleResetView = () => {
    if (leafletMapRef.current) {
      const centerLat = userLocation?.coords.lat || 1.2804;
      const centerLng = userLocation?.coords.lng || 103.8440;
      leafletMapRef.current.flyTo([centerLat, centerLng], 14, { animate: true });
    }
  };

  return (
    <div className="relative w-full h-[620px] sm:h-[680px] bg-[#F4EFE6] rounded-3xl overflow-hidden border border-[#E8E1D5] shadow-inner flex flex-col">
      {/* Top Map Control Bar */}
      <div className="absolute top-3 left-3 right-3 z-[400] flex flex-wrap items-center justify-between gap-2 pointer-events-none">
        {/* Left: View Mode Switcher & Counter */}
        <div className="flex items-center gap-1.5 bg-white/95 backdrop-blur-md p-1 rounded-2xl border border-[#EFE9E0] shadow-sm pointer-events-auto">
          <button
            onClick={() => setMapMode('interactive')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
              mapMode === 'interactive'
                ? 'bg-[#181C23] text-white shadow-xs'
                : 'text-[#60646C] hover:text-[#181C23]'
            }`}
          >
            <span>🗺️</span>
            <span>Live Map</span>
          </button>
          <button
            onClick={() => setMapMode('stylized')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
              mapMode === 'stylized'
                ? 'bg-[#F4511E] text-white shadow-xs'
                : 'text-[#60646C] hover:text-[#181C23]'
            }`}
          >
            <span>🎨</span>
            <span>Heritage Art</span>
          </button>
        </div>

        {/* Right: GPS Status & Locate Me Button */}
        <div className="flex items-center gap-2 pointer-events-auto">
          {userLocation?.isLiveGps && (
            <div className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-2xl bg-white/95 backdrop-blur-md border border-[#10B981]/30 text-[#10B981] text-xs font-extrabold shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse"></span>
              <span className="truncate max-w-[140px]">{userLocation.name.split(',')[0]}</span>
            </div>
          )}

          <button
            onClick={handleCenterOnUser}
            disabled={isLocating}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-2xl bg-white/95 backdrop-blur-md border border-[#EFE9E0] hover:border-[#3B82F6] text-[#181C23] hover:text-[#3B82F6] text-xs font-bold transition-all shadow-sm group"
            title="Detect & Center on My GPS Location"
          >
            <Crosshair size={14} className={`text-[#3B82F6] ${isLocating ? 'animate-spin' : 'group-hover:scale-110'}`} />
            <span>{isLocating ? 'Detecting...' : 'Locate Me'}</span>
          </button>
        </div>
      </div>

      {/* Food Type Category Filters (Floated on Map) */}
      <div className="absolute top-15 left-3 right-3 z-[400] flex items-center gap-1.5 overflow-x-auto no-scrollbar py-1 pointer-events-auto">
        {[
          { id: 'all', label: 'All Foods', icon: '✨' },
          { id: 'hawker', label: 'Hawker Stalls (小贩)', icon: '🍢' },
          { id: 'foodcourt', label: 'Food Courts & Kopitiam (食阁)', icon: '🍲' },
          { id: 'restaurant', label: 'Restaurants (餐厅)', icon: '🍽️' },
          { id: 'zichar', label: 'Zi Char & Wok (煮炒)', icon: '🔥' },
          { id: 'cafe', label: 'Kopitiam & Bakery (咖啡)', icon: '☕' },
          { id: 'supper', label: 'Late Night Supper (深夜)', icon: '🌙' }
        ].map((cat) => {
          const isSelected = activeVenueFilter === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => setActiveVenueFilter(cat.id)}
              className={`shrink-0 px-2.5 py-1 rounded-full text-[11px] font-bold border transition-all shadow-xs flex items-center gap-1 ${
                isSelected
                  ? 'bg-[#181C23] text-white border-[#181C23] shadow-md scale-105'
                  : 'bg-white/95 text-[#4B515D] border-[#EFE9E0] hover:bg-white hover:text-[#181C23]'
              }`}
            >
              <span>{cat.icon}</span>
              <span>{cat.label}</span>
            </button>
          );
        })}
      </div>

      {/* Main Map View Area */}
      <div className="relative flex-1 w-full h-full">
        {mapMode === 'interactive' ? (
          /* Leaflet Interactive Free OpenStreetMap */
          <div ref={mapContainerRef} className="w-full h-full z-10" />
        ) : (
          /* Stylized Illustrated Heritage Canvas Map */
          <div className="relative w-full h-full bg-[#FAF5EB] overflow-hidden flex items-center justify-center">
            {/* Background Cartographic Grid & Waterways */}
            <svg className="absolute inset-0 w-full h-full opacity-40 pointer-events-none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="heritageGrid" width="60" height="60" patternUnits="userSpaceOnUse">
                  <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#D7CEBF" strokeWidth="0.8" strokeDasharray="3 3" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#heritageGrid)" />
              {/* Singapore River / Straits Art Curves */}
              <path d="M-50,340 C150,300 280,380 450,330 C620,280 750,390 950,340 C1100,300 1250,420 1400,360" fill="none" stroke="#93C5FD" strokeWidth="24" strokeLinecap="round" opacity="0.6" />
              <path d="M-50,340 C150,300 280,380 450,330 C620,280 750,390 950,340 C1100,300 1250,420 1400,360" fill="none" stroke="#60A5FA" strokeWidth="6" strokeLinecap="round" opacity="0.7" />
            </svg>

            {/* Stylized District Badges */}
            <div className="absolute top-24 left-10 text-[10px] font-extrabold tracking-widest text-[#B0A593] uppercase">
              Orchard & River Valley
            </div>
            <div className="absolute top-36 right-16 text-[10px] font-extrabold tracking-widest text-[#B0A593] uppercase">
              Bugis & Kampong Glam
            </div>
            <div className="absolute bottom-28 left-16 text-[10px] font-extrabold tracking-widest text-[#B0A593] uppercase">
              Chinatown & Keong Saik
            </div>
            <div className="absolute bottom-20 right-20 text-[10px] font-extrabold tracking-widest text-[#B0A593] uppercase">
              Marina Bay & CBD
            </div>

            {/* Food Place Pins on Stylized Map */}
            {displayRestaurants.map((r) => {
              const isSelected = active?.id === r.id;
              const badge = getVenueBadge(r);
              return (
                <button
                  key={r.id}
                  onClick={() => onSelectRestaurant(r)}
                  style={{ left: `${r.mapX}%`, top: `${r.mapY}%` }}
                  className="absolute -translate-x-1/2 -translate-y-1/2 group z-20 focus:outline-none"
                >
                  <div className={`p-1.5 rounded-full border-2 transition-all flex items-center justify-center shadow-lg ${
                    isSelected
                      ? 'bg-[#181C23] border-white scale-125 text-white ring-4 ring-[#F4511E]/40'
                      : 'bg-white border-[#EFE9E0] text-[#181C23] hover:scale-115'
                  }`}>
                    <span className="text-sm">{badge.emoji}</span>
                  </div>
                  <div className={`mt-1 px-2 py-0.5 rounded-md text-[10px] font-bold whitespace-nowrap shadow-sm border transition-opacity ${
                    isSelected
                      ? 'bg-[#181C23] text-white border-white opacity-100'
                      : 'bg-white/90 text-[#4B515D] border-[#EFE9E0] opacity-80 group-hover:opacity-100'
                  }`}>
                    {r.name.split(' ')[0]}
                  </div>
                </button>
              );
            })}
          </div>
        )}
      </div>

      {/* Floating Bottom Card: Spotlighted Selected Food Spot */}
      {active && (
        <div className="absolute bottom-3 left-3 right-3 sm:left-4 sm:right-auto sm:max-w-md z-[400]">
          <div className="bg-white/98 backdrop-blur-lg rounded-2xl p-3 sm:p-3.5 border border-[#EFE9E0] shadow-xl flex items-center gap-3 animate-in fade-in slide-in-from-bottom-2 duration-150">
            {/* Food Thumbnail */}
            <div className="relative w-20 h-20 sm:w-22 sm:h-22 rounded-xl overflow-hidden shrink-0 border border-[#EFE9E0]">
              <img
                src={active.heroImage}
                alt={active.name}
                className="w-full h-full object-cover"
              />
              <span className="absolute top-1 left-1 px-1.5 py-0.2 rounded-md bg-black/70 backdrop-blur-xs text-[9px] font-bold text-white">
                {active.price}
              </span>
            </div>

            {/* Info details */}
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-1.5">
                <span className={`px-1.5 py-0.5 rounded-md text-[9px] font-extrabold uppercase tracking-wider ${getVenueBadge(active).bg}`}>
                  {getVenueBadge(active).emoji} {getVenueBadge(active).label}
                </span>
                {active.stallNumber && (
                  <span className="px-1.5 py-0.5 rounded-md text-[9px] font-bold bg-[#F3F4F6] text-[#4B5563]">
                    {active.stallNumber}
                  </span>
                )}
                <div className="flex items-center gap-0.5 ml-auto text-amber-500 font-extrabold text-xs">
                  <Star size={11} className="fill-amber-400 text-amber-400" />
                  <span>{active.rating}</span>
                </div>
              </div>

              <h4 className="font-extrabold text-xs sm:text-sm text-[#181C23] truncate mt-1">
                {active.name}
              </h4>

              <div className="text-[11px] text-[#60646C] truncate mt-0.5">
                {active.foodCentreName ? `${active.foodCentreName} · ` : ''}{active.cuisine}
              </div>

              {/* Proximity & Action buttons */}
              <div className="flex items-center justify-between gap-2 mt-2">
                <div className="flex items-center gap-1 text-[10px] font-bold text-[#F4511E] bg-[#FFF5F2] px-2 py-0.5 rounded-lg">
                  <Navigation size={10} />
                  <span>{active.computedDistanceText || active.distance} ({active.computedTravelTime || active.walkTime})</span>
                </div>

                <div className="flex items-center gap-1.5">
                  <button
                    onClick={() => onToggleSave(active.id)}
                    className={`p-1.5 rounded-lg border transition-all ${
                      savedIds.includes(active.id)
                        ? 'bg-[#FFF5F2] border-[#F4511E] text-[#F4511E]'
                        : 'border-[#EFE9E0] text-[#8E929A] hover:text-[#181C23]'
                    }`}
                    title="Bookmark"
                  >
                    <Bookmark size={13} className={savedIds.includes(active.id) ? 'fill-[#F4511E]' : ''} />
                  </button>

                  <button
                    onClick={() => onOpenDetails(active)}
                    className="px-2.5 py-1 rounded-lg bg-[#F4511E] hover:bg-[#D84315] text-white text-[11px] font-extrabold flex items-center gap-1 transition-all shadow-xs"
                  >
                    <span>View Menu</span>
                    <ChevronRight size={12} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Map Zoom Controls (Bottom Right) */}
      <div className="absolute right-3 bottom-4 z-[400] hidden sm:flex flex-col gap-1.5 bg-white/95 backdrop-blur-md p-1 rounded-2xl border border-[#EFE9E0] shadow-md pointer-events-auto">
        <button
          onClick={handleZoomIn}
          className="w-8 h-8 rounded-xl flex items-center justify-center text-[#181C23] hover:bg-[#F7F5F0] transition-colors"
          title="Zoom In"
        >
          <Plus size={16} />
        </button>
        <button
          onClick={handleZoomOut}
          className="w-8 h-8 rounded-xl flex items-center justify-center text-[#181C23] hover:bg-[#F7F5F0] transition-colors"
          title="Zoom Out"
        >
          <Minus size={16} />
        </button>
        <div className="h-[1px] bg-[#EFE9E0] my-0.5"></div>
        <button
          onClick={handleResetView}
          className="w-8 h-8 rounded-xl flex items-center justify-center text-[#60646C] hover:text-[#181C23] hover:bg-[#F7F5F0] transition-colors"
          title="Reset to Center"
        >
          <RotateCcw size={14} />
        </button>
      </div>
    </div>
  );
};
