import React from 'react';
import { X, Check, Star, Sparkles, Navigation, ArrowUpDown } from 'lucide-react';
import { FilterState, PriceLevel, SortOption } from '../types/restaurant';

interface FilterModalProps {
  isOpen: boolean;
  onClose: () => void;
  filters: FilterState;
  onUpdateFilters: (filters: FilterState) => void;
  onResetFilters: () => void;
}

export const FilterModal: React.FC<FilterModalProps> = ({
  isOpen,
  onClose,
  filters,
  onUpdateFilters,
  onResetFilters,
}) => {
  if (!isOpen) return null;

  const togglePrice = (price: PriceLevel) => {
    const exists = filters.priceLevels.includes(price);
    const updated = exists
      ? filters.priceLevels.filter((p) => p !== price)
      : [...filters.priceLevels, price];
    onUpdateFilters({ ...filters, priceLevels: updated });
  };

  const venueTypes = [
    { id: 'all', label: 'All Foods', icon: '✨' },
    { id: 'hawker', label: '🍢 Hawker Stalls & Centers', icon: '🍢' },
    { id: 'foodcourt', label: '🍲 Food Courts & Kopitiams', icon: '🍲' },
    { id: 'restaurant', label: '🍽️ Restaurants & Bistros', icon: '🍽️' },
    { id: 'zichar', label: '🔥 Zi Char & Seafood', icon: '🔥' },
    { id: 'cafe', label: '☕ Cafes & Bakeries', icon: '☕' },
    { id: 'supper', label: '🌙 Late Night Supper', icon: '🌙' },
    { id: 'dessert', label: '🍧 Desserts & Drinks', icon: '🍧' },
  ];

  const categories = [
    { id: 'all', label: 'All Specialties' },
    { id: 'hawker', label: '🍢 Hawker Classics' },
    { id: 'foodcourt', label: '🍲 Food Court Favourites' },
    { id: 'zichar', label: '🥢 Wok Hei & Zi Char' },
    { id: 'peranakan', label: '🌺 Modern Peranakan' },
    { id: 'grill', label: '🥩 Charcoal Satay & Hearth' },
    { id: 'seafood', label: '🦀 Kelong Seafood & Crab' },
    { id: 'supper', label: '🌙 Late Night Supper' },
    { id: 'cafe', label: '☕ Heritage Kopitiam' },
  ];

  const sortOptions: { id: SortOption; label: string; icon: string }[] = [
    { id: 'nearest', label: 'Nearest to Me', icon: '📍' },
    { id: 'match', label: 'AI Taste Match', icon: '✨' },
    { id: 'rating', label: 'Highest Rated', icon: '⭐' },
    { id: 'price', label: 'Price Level', icon: '💰' },
  ];

  const distanceRadiusOptions = [
    { value: 0, label: 'Any Distance' },
    { value: 1, label: '< 1 km (Walking)' },
    { value: 3, label: '< 3 km' },
    { value: 5, label: '< 5 km' },
    { value: 10, label: '< 10 km' },
  ];

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/50 backdrop-blur-xs flex justify-center items-center p-4 animate-in fade-in duration-150">
      <div className="bg-white rounded-3xl max-w-md w-full border border-[#EFE9E0] shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-[#EFE9E0]">
          <h2 className="text-base font-extrabold text-[#181c23]">Refine Culinary Search</h2>
          <button
            onClick={onClose}
            className="p-1 rounded-full text-[#8E929A] hover:text-[#181c23] hover:bg-[#F7F5F0] transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {/* Filter Body */}
        <div className="p-5 space-y-5 max-h-[75vh] overflow-y-auto">
          {/* Sort By Ranking */}
          <div>
            <label className="block text-xs font-bold text-[#60646C] uppercase tracking-wider mb-2 flex items-center gap-1.5">
              <ArrowUpDown size={13} className="text-[#F4511E]" />
              <span>Sort By Ranking</span>
            </label>
            <div className="grid grid-cols-2 gap-2">
              {sortOptions.map((opt) => {
                const isSelected = filters.sortBy === opt.id;
                return (
                  <button
                    key={opt.id}
                    onClick={() => onUpdateFilters({ ...filters, sortBy: opt.id })}
                    className={`py-2 px-3 rounded-xl text-xs font-bold border transition-all text-left flex items-center gap-1.5 ${
                      isSelected
                        ? 'border-[#F4511E] bg-[#FFF5F2] text-[#F4511E] shadow-2xs'
                        : 'border-[#EFE9E0] text-[#2D3139] hover:bg-[#FDFBF7]'
                    }`}
                  >
                    <span>{opt.icon}</span>
                    <span>{opt.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Food Venue Type (Hawker, Food Court, Restaurant, etc.) */}
          <div>
            <label className="block text-xs font-bold text-[#60646C] uppercase tracking-wider mb-2 flex items-center gap-1.5">
              <span>Food Venue Type (美食类型)</span>
            </label>
            <div className="grid grid-cols-2 gap-2">
              {venueTypes.map((vt) => {
                const isSelected = (filters.venueType || 'all') === vt.id;
                return (
                  <button
                    key={vt.id}
                    onClick={() => onUpdateFilters({ ...filters, venueType: vt.id })}
                    className={`py-2 px-3 rounded-xl text-xs font-bold border transition-all text-left flex items-center gap-1.5 ${
                      isSelected
                        ? 'border-[#F4511E] bg-[#FFF5F2] text-[#F4511E] shadow-2xs'
                        : 'border-[#EFE9E0] text-[#2D3139] hover:bg-[#FDFBF7]'
                    }`}
                  >
                    <span>{vt.icon}</span>
                    <span className="truncate">{vt.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Distance Radius Filter (Finding Food at User's Location) */}
          <div>
            <label className="block text-xs font-bold text-[#60646C] uppercase tracking-wider mb-2 flex items-center gap-1.5">
              <Navigation size={13} className="text-[#F4511E]" />
              <span>Distance from Location</span>
            </label>
            <div className="flex flex-wrap gap-1.5">
              {distanceRadiusOptions.map((dist) => {
                const isSelected = filters.maxDistanceKm === dist.value;
                return (
                  <button
                    key={dist.value}
                    onClick={() => onUpdateFilters({ ...filters, maxDistanceKm: dist.value })}
                    className={`px-3 py-1.5 rounded-full text-xs font-bold border transition-all ${
                      isSelected
                        ? 'border-[#F4511E] bg-[#F4511E] text-white shadow-xs'
                        : 'border-[#EFE9E0] text-[#60646C] hover:border-[#181c23]'
                    }`}
                  >
                    {dist.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Price Level */}
          <div>
            <label className="block text-xs font-bold text-[#60646C] uppercase tracking-wider mb-2">
              Price Range
            </label>
            <div className="grid grid-cols-4 gap-2">
              {(['$', '$$', '$$$', '$$$$'] as PriceLevel[]).map((p) => {
                const isSelected = filters.priceLevels.includes(p);
                return (
                  <button
                    key={p}
                    onClick={() => togglePrice(p)}
                    className={`py-2 rounded-xl text-xs font-bold border transition-all ${
                      isSelected
                        ? 'border-[#F4511E] bg-[#FFF5F2] text-[#F4511E]'
                        : 'border-[#EFE9E0] text-[#2D3139] hover:bg-[#FDFBF7]'
                    }`}
                  >
                    {p}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Cuisines / Specialties */}
          <div>
            <label className="block text-xs font-bold text-[#60646C] uppercase tracking-wider mb-2">
              Cuisine & Specialty
            </label>
            <div className="flex flex-wrap gap-1.5">
              {categories.map((c) => {
                const isSelected = filters.category === c.id;
                return (
                  <button
                    key={c.id}
                    onClick={() => onUpdateFilters({ ...filters, category: c.id })}
                    className={`px-3 py-1.5 rounded-full text-xs font-semibold border transition-all ${
                      isSelected
                        ? 'border-[#F4511E] bg-[#F4511E] text-white shadow-xs'
                        : 'border-[#EFE9E0] text-[#60646C] hover:border-[#181c23]'
                    }`}
                  >
                    {c.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Availability & Features */}
          <div>
            <label className="block text-xs font-bold text-[#60646C] uppercase tracking-wider mb-2">
              Availability & Features
            </label>
            <div className="space-y-2">
              <label className="flex items-center gap-3 p-2.5 rounded-xl border border-[#EFE9E0] hover:bg-[#FDFBF7] cursor-pointer">
                <input
                  type="checkbox"
                  checked={filters.openNowOnly}
                  onChange={(e) => onUpdateFilters({ ...filters, openNowOnly: e.target.checked })}
                  className="w-4 h-4 rounded text-[#F4511E] focus:ring-[#F4511E] accent-[#F4511E]"
                />
                <span className="text-xs font-bold text-[#2D3139]">Open Right Now</span>
              </label>

              <label className="flex items-center gap-3 p-2.5 rounded-xl border border-[#EFE9E0] hover:bg-[#FDFBF7] cursor-pointer">
                <input
                  type="checkbox"
                  checked={filters.outdoorSeatingOnly}
                  onChange={(e) => onUpdateFilters({ ...filters, outdoorSeatingOnly: e.target.checked })}
                  className="w-4 h-4 rounded text-[#F4511E] focus:ring-[#F4511E] accent-[#F4511E]"
                />
                <span className="text-xs font-bold text-[#2D3139]">Outdoor Patio & Courtyard</span>
              </label>

              <label className="flex items-center gap-3 p-2.5 rounded-xl border border-[#EFE9E0] hover:bg-[#FDFBF7] cursor-pointer">
                <input
                  type="checkbox"
                  checked={filters.michelinOnly}
                  onChange={(e) => onUpdateFilters({ ...filters, michelinOnly: e.target.checked })}
                  className="w-4 h-4 rounded text-[#F4511E] focus:ring-[#F4511E] accent-[#F4511E]"
                />
                <span className="text-xs font-bold text-[#2D3139]">Michelin Guide Recognized</span>
              </label>
            </div>
          </div>

          {/* Minimum Rating */}
          <div>
            <label className="block text-xs font-bold text-[#60646C] uppercase tracking-wider mb-2">
              Minimum Rating
            </label>
            <div className="grid grid-cols-3 gap-2">
              {[0, 4.5, 4.8].map((rate) => (
                <button
                  key={rate}
                  onClick={() => onUpdateFilters({ ...filters, minRating: rate })}
                  className={`py-2 rounded-xl text-xs font-bold border transition-all flex items-center justify-center gap-1 ${
                    filters.minRating === rate
                      ? 'border-[#F4511E] bg-[#FFF5F2] text-[#F4511E]'
                      : 'border-[#EFE9E0] text-[#60646C]'
                  }`}
                >
                  <Star size={12} className={filters.minRating === rate ? 'fill-[#F4511E]' : ''} />
                  <span>{rate === 0 ? 'Any' : `${rate}+`}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 bg-[#FDFBF7] border-t border-[#EFE9E0] flex items-center justify-between gap-3">
          <button
            onClick={onResetFilters}
            className="text-xs font-bold text-[#60646C] hover:text-[#181c23] px-3 py-2"
          >
            Reset All
          </button>
          <button
            onClick={onClose}
            className="px-6 py-2.5 rounded-full bg-[#F4511E] text-white text-xs font-bold shadow-md hover:bg-[#d63c05] transition-all"
          >
            Apply Filters
          </button>
        </div>
      </div>
    </div>
  );
};
