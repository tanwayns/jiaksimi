import React, { useState } from 'react';
import { 
  MapPin, 
  ChevronDown, 
  SlidersHorizontal, 
  Search, 
  Activity, 
  Navigation, 
  Loader2, 
  Check, 
  Compass,
  Sparkles
} from 'lucide-react';
import { REGIONAL_HUBS } from '../utils/geo';
import { Logo } from './Logo';

interface HeaderProps {
  currentCity: string;
  onCityChange: (city: string) => void;
  onOpenFilter: () => void;
  onSearchClick?: () => void;
  searchQuery: string;
  onSearchChange: (q: string) => void;
  isDesktopLayout: boolean;
  onToggleDesktopLayout: () => void;
  onUseCurrentLocation: () => void;
  isLocating: boolean;
  isLiveGps: boolean;
  onOpenApiHealth: () => void;
  activeFilterCount: number;
}

export const Header: React.FC<HeaderProps> = ({
  currentCity,
  onCityChange,
  onOpenFilter,
  searchQuery,
  onSearchChange,
  isDesktopLayout,
  onToggleDesktopLayout,
  onUseCurrentLocation,
  isLocating,
  isLiveGps,
  onOpenApiHealth,
  activeFilterCount
}) => {
  const [showCityPicker, setShowCityPicker] = useState(false);

  return (
    <header className="sticky top-0 z-30 bg-[#FDFBF7]/95 backdrop-blur-md border-b border-[#EFE9E0] px-3 sm:px-4 py-2 sm:py-2.5 transition-colors">
      <div className="max-w-6xl mx-auto flex flex-col gap-2">
        {/* Top Row: Brand Logo, Location Selector, GPS Locate Me, and Actions */}
        <div className="flex items-center justify-between gap-2 sm:gap-3">
          {/* Brand Logo with "吃什么！" */}
          <Logo size="sm" showSubtitle={true} className="shrink-0" />

          {/* Location Selector & GPS Trigger */}
          <div className="relative flex-1 min-w-0 max-w-[210px] sm:max-w-xs ml-auto">
            <button
              onClick={() => setShowCityPicker(!showCityPicker)}
              className="w-full flex items-center gap-1.5 p-1 sm:p-1.5 rounded-full bg-white border border-[#EFE9E0] hover:border-[#F4511E] text-left group focus:outline-none transition-all shadow-2xs"
            >
              <div className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 transition-all ${
                isLiveGps 
                  ? 'bg-[#10B981] text-white shadow-xs'
                  : 'bg-[#FBE9E7] text-[#F4511E]'
              }`}>
                {isLiveGps ? <Navigation size={12} className="fill-white" /> : <MapPin size={13} />}
              </div>

              <div className="min-w-0 flex-1 pr-1">
                <div className="flex items-center gap-1 text-xs font-bold text-[#181c23] group-hover:text-[#F4511E] transition-colors truncate">
                  <span className="truncate">{currentCity.split(',')[0]}</span>
                  <ChevronDown size={13} className={`shrink-0 transition-transform duration-200 ${showCityPicker ? 'rotate-180 text-[#F4511E]' : 'text-[#8E929A]'}`} />
                </div>
              </div>
            </button>

            {/* Location Selector Menu */}
            {showCityPicker && (
              <>
                <div
                  className="fixed inset-0 z-40"
                  onClick={() => setShowCityPicker(false)}
                />
                <div className="absolute top-10 right-0 z-50 w-80 max-w-[90vw] bg-white rounded-2xl shadow-2xl border border-[#EFE9E0] p-2 animate-in fade-in zoom-in-95 duration-150">
                  {/* GPS Locate Me Action Inside Picker */}
                  <div className="p-1 border-b border-[#EFE9E0] mb-1">
                    <button
                      onClick={() => {
                        onUseCurrentLocation();
                        setShowCityPicker(false);
                      }}
                      className="w-full flex items-center gap-2.5 p-2.5 rounded-xl bg-[#FBE9E7] text-[#F4511E] hover:bg-[#F4511E] hover:text-white transition-all text-xs font-bold"
                    >
                      {isLocating ? (
                        <Loader2 size={16} className="animate-spin" />
                      ) : (
                        <Navigation size={16} />
                      )}
                      <div className="text-left flex-1">
                        <div className="font-extrabold">Use My Exact GPS Location</div>
                        <div className="text-[10px] opacity-80 font-normal">Detect current device coordinates</div>
                      </div>
                    </button>
                  </div>

                  <div className="px-3 py-1.5 text-[10px] font-bold text-[#8E929A] uppercase tracking-wider">
                    🇸🇬 Singapore Regional Hubs
                  </div>
                  {REGIONAL_HUBS.filter(h => h.region === 'SG').map((hub) => (
                    <button
                      key={hub.id}
                      onClick={() => {
                        onCityChange(hub.name);
                        setShowCityPicker(false);
                      }}
                      className={`w-full text-left px-3 py-2 rounded-xl text-xs font-medium flex items-center justify-between transition-colors ${
                        currentCity.includes(hub.name)
                          ? 'bg-[#FBE9E7] text-[#F4511E] font-bold'
                          : 'text-[#2D3139] hover:bg-[#F7F5F0]'
                      }`}
                    >
                      <div>
                        <div>{hub.name}</div>
                        <div className="text-[10px] text-[#8E929A]">{hub.district}</div>
                      </div>
                      {currentCity.includes(hub.name) && <Check size={14} className="text-[#F4511E]" />}
                    </button>
                  ))}

                  <div className="px-3 py-1.5 text-[10px] font-bold text-[#8E929A] uppercase tracking-wider mt-1 border-t border-[#EFE9E0] pt-2">
                    🇲🇾 Malaysia Regional Hubs
                  </div>
                  {REGIONAL_HUBS.filter(h => h.region === 'MY').map((hub) => (
                    <button
                      key={hub.id}
                      onClick={() => {
                        onCityChange(hub.name);
                        setShowCityPicker(false);
                      }}
                      className={`w-full text-left px-3 py-2 rounded-xl text-xs font-medium flex items-center justify-between transition-colors ${
                        currentCity.includes(hub.name)
                          ? 'bg-[#FBE9E7] text-[#F4511E] font-bold'
                          : 'text-[#2D3139] hover:bg-[#F7F5F0]'
                      }`}
                    >
                      <div>
                        <div>{hub.name}</div>
                        <div className="text-[10px] text-[#8E929A]">{hub.district}</div>
                      </div>
                      {currentCity.includes(hub.name) && <Check size={14} className="text-[#F4511E]" />}
                    </button>
                  ))}
                </div>
              </>
            )}
          </div>

          {/* Quick Header Right Tools */}
          <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
            {/* Quick GPS "Near Me" Button */}
            <button
              onClick={onUseCurrentLocation}
              disabled={isLocating}
              title="Use current GPS position"
              className={`flex items-center gap-1 px-2.5 py-1.5 rounded-full text-xs font-bold border transition-all ${
                isLiveGps
                  ? 'bg-[#ECFDF5] text-[#10B981] border-[#10B981]/40'
                  : 'bg-white text-[#2D3139] border-[#EFE9E0] hover:border-[#F4511E] hover:text-[#F4511E]'
              }`}
            >
              {isLocating ? (
                <Loader2 size={13} className="animate-spin text-[#F4511E]" />
              ) : (
                <Navigation size={13} className={isLiveGps ? 'text-[#10B981]' : 'text-[#F4511E]'} />
              )}
              <span className="hidden xs:inline sm:inline">
                {isLiveGps ? 'GPS On' : 'Near Me'}
              </span>
            </button>

            {/* API Health Monitor Button */}
            <button
              onClick={onOpenApiHealth}
              title="Monitor API status (/api/health.js)"
              className="p-2 rounded-full bg-white border border-[#EFE9E0] text-[#2D3139] hover:border-[#10B981] hover:text-[#10B981] transition-colors shadow-xs relative"
              aria-label="API Health Monitor"
            >
              <Activity size={16} />
              <span className="absolute top-1 right-1 w-2 h-2 rounded-full bg-[#10B981]" />
            </button>

            {/* Desktop Mode Toggle for tablet/desktop */}
            <button
              onClick={onToggleDesktopLayout}
              title="Toggle View Mode"
              className="hidden md:flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-full bg-white border border-[#EFE9E0] text-[#2D3139] hover:border-[#F4511E] hover:text-[#F4511E] transition-colors shadow-xs"
            >
              <span>{isDesktopLayout ? '💻 Split' : '📱 Feed'}</span>
            </button>

            {/* Filter Trigger Button */}
            <button
              onClick={onOpenFilter}
              className={`p-2 rounded-full border transition-colors shadow-xs relative ${
                activeFilterCount > 0
                  ? 'bg-[#FBE9E7] text-[#F4511E] border-[#F4511E]'
                  : 'bg-white border border-[#EFE9E0] text-[#2D3139] hover:border-[#F4511E] hover:text-[#F4511E]'
              }`}
              aria-label="Filter restaurants"
            >
              <SlidersHorizontal size={16} />
              {activeFilterCount > 0 && (
                <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-[#F4511E] text-white text-[9px] font-bold flex items-center justify-center">
                  {activeFilterCount}
                </span>
              )}
            </button>
          </div>
        </div>

        {/* Floating Search Bar (Level 2 Elevation, 46px-48px height) */}
        <div className="relative flex items-center">
          <div className="w-full flex items-center bg-white rounded-full h-[46px] sm:h-[48px] px-3.5 sm:px-4 border border-[#EFE9E0] shadow-[0_4px_16px_rgba(45,49,57,0.05)] focus-within:border-[#F4511E] focus-within:ring-2 focus-within:ring-[#F4511E]/10 transition-all">
            <Search size={17} className="text-[#8E929A] shrink-0 mr-2 sm:mr-3" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder="吃什么？Search Laksa, Chili Crab, Hor Fun, Satay, Kaya Toast..."
              className="w-full bg-transparent text-xs sm:text-sm text-[#2D3139] placeholder:text-[#8E929A] focus:outline-none"
            />
            {searchQuery && (
              <button
                onClick={() => onSearchChange('')}
                className="text-xs text-[#8E929A] hover:text-[#2D3139] px-2 py-1 shrink-0"
              >
                Clear
              </button>
            )}
            <div className="h-4 w-px bg-[#EFE9E0] mx-1.5 sm:mx-2 shrink-0" />
            <button
              onClick={onOpenFilter}
              className="text-xs font-bold text-[#F4511E] hover:text-[#FF6E40] flex items-center gap-1 shrink-0 px-1"
            >
              Filters
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
