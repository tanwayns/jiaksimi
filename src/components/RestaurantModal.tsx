import React, { useState } from 'react';
import { 
  X, 
  Star, 
  Bookmark, 
  Share2, 
  MapPin, 
  Phone, 
  Clock, 
  Sparkles, 
  Calendar, 
  Users, 
  Check, 
  Navigation, 
  ChevronRight,
  Award,
  Flame,
  Wine,
  Heart
} from 'lucide-react';
import { Restaurant, Reservation } from '../types/restaurant';

interface RestaurantModalProps {
  restaurant: Restaurant | null;
  onClose: () => void;
  isSaved: boolean;
  onToggleSave: (id: string, e: React.MouseEvent) => void;
  onConfirmReservation: (reservation: Reservation) => void;
}

export const RestaurantModal: React.FC<RestaurantModalProps> = ({
  restaurant,
  onClose,
  isSaved,
  onToggleSave,
  onConfirmReservation
}) => {
  if (!restaurant) return null;

  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [selectedDate, setSelectedDate] = useState('Tonight, Oct 7');
  const [selectedGuests, setSelectedGuests] = useState(2);
  const [selectedSlot, setSelectedSlot] = useState(restaurant.availableSlots[0] || '7:00 PM');
  const [selectedSeating, setSelectedSeating] = useState<'Indoor Dining Room' | 'Chef Counter' | 'Heated Patio'>('Indoor Dining Room');
  const [specialNote, setSpecialNote] = useState('');
  const [copyFeedback, setCopyFeedback] = useState(false);
  const [showDirections, setShowDirections] = useState(false);

  const dates = [
    'Tonight, Oct 7',
    'Tomorrow, Oct 8',
    'Friday, Oct 9',
    'Saturday, Oct 10'
  ];

  const handleBook = () => {
    const newReservation: Reservation = {
      id: `res-${Date.now()}`,
      restaurantId: restaurant.id,
      restaurantName: restaurant.name,
      restaurantImage: restaurant.heroImage,
      date: selectedDate,
      time: selectedSlot,
      guests: selectedGuests,
      seatingArea: selectedSeating,
      specialRequests: specialNote,
      status: 'Confirmed',
      createdAt: new Date().toLocaleDateString()
    };
    onConfirmReservation(newReservation);
  };

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopyFeedback(true);
      setTimeout(() => setCopyFeedback(false), 2000);
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex justify-center items-start sm:p-4 animate-in fade-in duration-200">
      {/* Modal Container */}
      <div className="relative w-full max-w-2xl bg-[#FDFBF7] sm:rounded-3xl shadow-2xl overflow-hidden my-0 sm:my-6 min-h-screen sm:min-h-0 border border-[#EFE9E0]">
        {/* Floating Top Nav over Hero */}
        <div className="absolute top-4 left-4 right-4 z-20 flex items-center justify-between">
          <button
            onClick={onClose}
            className="w-10 h-10 rounded-full bg-white/90 backdrop-blur-md text-[#2D3139] hover:bg-white flex items-center justify-center shadow-md transition-transform active:scale-95"
            aria-label="Close modal"
          >
            <X size={20} />
          </button>

          <div className="flex items-center gap-2">
            <button
              onClick={handleShare}
              className="w-10 h-10 rounded-full bg-white/90 backdrop-blur-md text-[#2D3139] hover:bg-white flex items-center justify-center shadow-md transition-colors relative"
              title="Share restaurant"
            >
              {copyFeedback ? <Check size={18} className="text-[#10B981]" /> : <Share2 size={18} />}
              {copyFeedback && (
                <span className="absolute -bottom-8 right-0 bg-[#181c23] text-white text-[10px] font-bold px-2 py-0.5 rounded shadow">
                  Copied!
                </span>
              )}
            </button>

            <button
              onClick={(e) => onToggleSave(restaurant.id, e)}
              className={`w-10 h-10 rounded-full backdrop-blur-md flex items-center justify-center shadow-md transition-colors ${
                isSaved
                  ? 'bg-[#F4511E] text-white'
                  : 'bg-white/90 text-[#2D3139] hover:bg-white hover:text-[#F4511E]'
              }`}
              title="Save to favorites"
            >
              <Bookmark size={18} className={isSaved ? 'fill-white' : ''} />
            </button>
          </div>
        </div>

        {/* Hero Gallery */}
        <div className="relative aspect-16/10 w-full bg-black">
          <img
            src={restaurant.gallery[activeImageIndex] || restaurant.heroImage}
            alt={restaurant.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30 pointer-events-none" />

          {/* AI Match Badge */}
          <div className="absolute bottom-4 left-4 flex items-center gap-1.5 px-3.5 py-1.5 bg-gradient-to-r from-[#FF6E40] to-[#F4511E] text-white text-xs font-bold rounded-full shadow-lg">
            <Sparkles size={14} className="fill-white" />
            <span>{restaurant.matchScore}% Match for Your Palate</span>
          </div>

          {/* Gallery Indicator */}
          <div className="absolute bottom-4 right-4 flex items-center gap-1.5 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-full text-white text-xs font-medium">
            <span>{activeImageIndex + 1} / {restaurant.gallery.length}</span>
          </div>
        </div>

        {/* Thumbnail Selector */}
        <div className="flex gap-2 p-3 bg-white border-b border-[#EFE9E0] overflow-x-auto no-scrollbar">
          {restaurant.gallery.map((img, idx) => (
            <button
              key={idx}
              onClick={() => setActiveImageIndex(idx)}
              className={`relative w-16 h-12 rounded-lg overflow-hidden shrink-0 border-2 transition-all ${
                activeImageIndex === idx ? 'border-[#F4511E] scale-105' : 'border-transparent opacity-70 hover:opacity-100'
              }`}
            >
              <img src={img} alt="" className="w-full h-full object-cover" />
            </button>
          ))}
        </div>

        {/* Venue Content Body */}
        <div className="p-5 sm:p-6 space-y-6">
          {/* Title & Core Metadata */}
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-xs font-bold uppercase tracking-wider text-[#F4511E]">
                {restaurant.cuisine}
              </span>
              <span className="text-[#8E929A]">·</span>
              <span className="text-xs font-semibold text-[#60646C]">{restaurant.neighborhood}</span>
              <span className="text-[#8E929A]">·</span>
              <span className="text-xs font-bold text-[#181c23]">{restaurant.price}</span>
            </div>

            <h1 className="text-2xl sm:text-3xl font-extrabold text-[#181c23] tracking-tight">
              {restaurant.name}
            </h1>
            <p className="text-sm text-[#60646C] mt-1 leading-relaxed">
              {restaurant.tagline}
            </p>

            {/* Rating & Operational Status Bar */}
            <div className="flex items-center flex-wrap gap-3 mt-3 pt-3 border-t border-[#EFE9E0]">
              <div className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-[#FFF9E6] border border-[#FFE8A3]">
                <Star size={14} className="text-[#F59E0B] fill-[#F59E0B]" />
                <span className="text-sm font-bold text-[#92400E]">{restaurant.rating}</span>
                <span className="text-xs text-[#92400E]/80">({restaurant.reviewCount})</span>
              </div>

              <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#ECFDF5] text-[#10B981] text-xs font-bold">
                <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
                <span>{restaurant.openStatusText}</span>
              </div>

              <div className="text-xs text-[#60646C] flex items-center gap-1">
                <Navigation size={13} className="text-[#F4511E]" />
                <span>{restaurant.distance} ({restaurant.walkTime})</span>
              </div>
            </div>
          </div>

          {/* AI Palate Match Rationale Box */}
          <div className="p-4 rounded-2xl bg-gradient-to-br from-[#FFF5F2] to-[#FFFBF9] border border-[#FFDCD2] shadow-xs">
            <div className="flex items-center gap-2 text-[#ac2d00] font-bold text-sm">
              <Sparkles size={16} className="text-[#FF6E40]" />
              <span>Sensory Match Breakdown · {restaurant.matchScore}% Compatibility</span>
            </div>
            <p className="text-xs sm:text-sm text-[#5b4039] mt-2 leading-relaxed">
              {restaurant.matchReason}
            </p>
            <div className="flex flex-wrap gap-1.5 mt-3 pt-2 border-t border-[#FFDCD2]/60">
              {restaurant.vibes.map((vibe) => (
                <span key={vibe} className="text-[11px] font-semibold text-[#872100] bg-[#FFECE5] px-2.5 py-0.5 rounded-full">
                  ✓ {vibe}
                </span>
              ))}
            </div>
          </div>

          {/* Quick Action Buttons Row */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
            <button
              onClick={() => {
                const el = document.getElementById('reserve-section');
                el?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="py-3 px-4 rounded-full bg-[#F4511E] hover:bg-[#d63c05] text-white font-bold text-xs sm:text-sm shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2"
            >
              <Calendar size={16} />
              <span>Reserve Table</span>
            </button>

            <button
              onClick={() => setShowDirections(!showDirections)}
              className="py-3 px-4 rounded-full bg-white hover:bg-[#F7F5F0] border border-[#EFE9E0] text-[#2D3139] font-bold text-xs sm:text-sm transition-colors flex items-center justify-center gap-2"
            >
              <Navigation size={16} className="text-[#F4511E]" />
              <span>{showDirections ? 'Hide Directions' : 'Directions'}</span>
            </button>

            <a
              href={`tel:${restaurant.phone}`}
              className="col-span-2 sm:col-span-1 py-3 px-4 rounded-full bg-white hover:bg-[#F7F5F0] border border-[#EFE9E0] text-[#2D3139] font-bold text-xs sm:text-sm transition-colors flex items-center justify-center gap-2"
            >
              <Phone size={16} className="text-[#10B981]" />
              <span>Call ({restaurant.phone})</span>
            </a>
          </div>

          {/* Directions Panel (Expandable) */}
          {showDirections && (
            <div className="p-4 rounded-2xl bg-white border border-[#EFE9E0] shadow-xs animate-in fade-in duration-200">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold text-[#181c23] uppercase tracking-wider">
                  Walking Route from Your Location
                </span>
                <span className="text-xs font-bold text-[#10B981]">{restaurant.walkTime}</span>
              </div>
              <p className="text-xs text-[#60646C] mb-3">
                {restaurant.address}
              </p>
              <div className="space-y-2 text-xs text-[#2D3139]">
                <div className="flex items-start gap-2">
                  <div className="w-5 h-5 rounded-full bg-[#FBE9E7] text-[#F4511E] flex items-center justify-center text-[10px] font-bold shrink-0">1</div>
                  <span>Alight at nearest MRT / LRT Station, head toward {restaurant.neighborhood.split(',')[0]} (approx. {restaurant.walkTime}).</span>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-5 h-5 rounded-full bg-[#FBE9E7] text-[#F4511E] flex items-center justify-center text-[10px] font-bold shrink-0">2</div>
                  <span>Located at {restaurant.address}, look for the warm architectural lanterns and entrance.</span>
                </div>
              </div>
            </div>
          )}

          {/* Interactive Reservation Drawer / Booking Form */}
          <div id="reserve-section" className="bg-white rounded-2xl border border-[#EFE9E0] p-5 shadow-sm space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-bold text-[#181c23]">Instant Table Reservation</h3>
                <p className="text-xs text-[#60646C]">No booking fees · Instant live confirmation</p>
              </div>
              <div className="px-2.5 py-1 rounded-full bg-[#ECFDF5] text-[#10B981] text-xs font-bold">
                Live Tables Available
              </div>
            </div>

            {/* Date Selector */}
            <div>
              <label className="block text-xs font-bold text-[#60646C] uppercase tracking-wider mb-2">
                Select Date
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {dates.map((d) => (
                  <button
                    key={d}
                    onClick={() => setSelectedDate(d)}
                    className={`py-2 px-3 rounded-xl text-xs font-bold transition-all ${
                      selectedDate === d
                        ? 'bg-[#F4511E] text-white shadow-xs'
                        : 'bg-[#F7F5F0] text-[#2D3139] hover:bg-[#EFE9E0]'
                    }`}
                  >
                    {d}
                  </button>
                ))}
              </div>
            </div>

            {/* Guests Selector */}
            <div>
              <label className="block text-xs font-bold text-[#60646C] uppercase tracking-wider mb-2">
                Party Size
              </label>
              <div className="flex gap-2 overflow-x-auto no-scrollbar">
                {[1, 2, 3, 4, 5, 6, 8].map((g) => (
                  <button
                    key={g}
                    onClick={() => setSelectedGuests(g)}
                    className={`w-11 h-11 rounded-xl font-bold text-sm shrink-0 transition-all ${
                      selectedGuests === g
                        ? 'bg-[#181c23] text-white ring-2 ring-[#F4511E]'
                        : 'bg-[#F7F5F0] text-[#2D3139] hover:bg-[#EFE9E0]'
                    }`}
                  >
                    {g} {g === 1 ? 'p' : 'ppl'}
                  </button>
                ))}
              </div>
            </div>

            {/* Time Slots */}
            <div>
              <label className="block text-xs font-bold text-[#60646C] uppercase tracking-wider mb-2">
                Available Times ({selectedDate})
              </label>
              <div className="flex flex-wrap gap-2">
                {restaurant.availableSlots.map((slot) => (
                  <button
                    key={slot}
                    onClick={() => setSelectedSlot(slot)}
                    className={`py-2 px-3.5 rounded-full text-xs font-bold transition-all ${
                      selectedSlot === slot
                        ? 'bg-[#F4511E] text-white shadow-sm ring-2 ring-[#FF6E40]/50'
                        : 'bg-white border border-[#EFE9E0] text-[#2D3139] hover:border-[#F4511E]'
                    }`}
                  >
                    {slot}
                  </button>
                ))}
              </div>
            </div>

            {/* Seating Preference */}
            <div>
              <label className="block text-xs font-bold text-[#60646C] uppercase tracking-wider mb-2">
                Seating Atmosphere
              </label>
              <div className="grid grid-cols-3 gap-2">
                {(['Indoor Dining Room', 'Chef Counter', 'Heated Patio'] as const).map((seat) => (
                  <button
                    key={seat}
                    onClick={() => setSelectedSeating(seat)}
                    className={`p-2.5 rounded-xl text-left text-xs font-medium border transition-all ${
                      selectedSeating === seat
                        ? 'border-[#F4511E] bg-[#FFF5F2] text-[#ac2d00] font-bold'
                        : 'border-[#EFE9E0] text-[#60646C] hover:bg-[#F7F5F0]'
                    }`}
                  >
                    {seat}
                  </button>
                ))}
              </div>
            </div>

            {/* Confirm CTA */}
            <button
              onClick={handleBook}
              className="w-full py-3.5 rounded-full bg-[#F4511E] hover:bg-[#d63c05] text-white font-bold text-sm shadow-lg hover:shadow-xl transition-all transform active:scale-98 flex items-center justify-center gap-2 mt-2"
            >
              <Check size={18} />
              <span>Confirm Reservation · {selectedDate} at {selectedSlot} ({selectedGuests} Guests)</span>
            </button>
          </div>

          {/* Menu Highlights */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-bold text-[#181c23]">Curated Menu Highlights</h3>
              <span className="text-xs font-semibold text-[#F4511E]">Chef Marco's Picks</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {restaurant.menuHighlights.map((item) => (
                <div
                  key={item.id}
                  className="p-3 bg-white rounded-2xl border border-[#EFE9E0] flex gap-3 hover:border-[#FF6E40]/40 transition-colors"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 rounded-xl object-cover shrink-0"
                  />
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-start justify-between gap-1">
                        <h4 className="text-sm font-bold text-[#181c23] leading-snug">
                          {item.name}
                        </h4>
                        <span className="text-sm font-bold text-[#F4511E] shrink-0">
                          ${item.price}
                        </span>
                      </div>
                      <p className="text-[12px] text-[#60646C] line-clamp-2 mt-1">
                        {item.description}
                      </p>
                    </div>

                    <div className="flex items-center gap-2 mt-1">
                      {item.isMustTry && (
                        <span className="text-[10px] font-bold text-[#ac2d00] bg-[#FFECE5] px-2 py-0.5 rounded-full">
                          ★ Must Try
                        </span>
                      )}
                      {item.dietaryBadge && (
                        <span className="text-[10px] font-medium text-[#006947] bg-[#ECFDF5] px-2 py-0.5 rounded-full">
                          {item.dietaryBadge}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Verified Critic & Foodie Reviews */}
          <div className="space-y-3">
            <h3 className="text-lg font-bold text-[#181c23]">Epicure Community Reviews</h3>
            {restaurant.reviews.map((rev) => (
              <div key={rev.id} className="p-4 bg-white rounded-2xl border border-[#EFE9E0] space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <img
                      src={rev.authorAvatar}
                      alt={rev.author}
                      className="w-9 h-9 rounded-full object-cover border border-[#EFE9E0]"
                    />
                    <div>
                      <h4 className="text-xs font-bold text-[#181c23]">{rev.author}</h4>
                      <p className="text-[11px] text-[#8E929A]">{rev.role}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1">
                    {Array.from({ length: rev.rating }).map((_, i) => (
                      <Star key={i} size={13} className="text-[#F59E0B] fill-[#F59E0B]" />
                    ))}
                  </div>
                </div>
                <p className="text-xs sm:text-sm text-[#2D3139] leading-relaxed">
                  "{rev.text}"
                </p>
                <div className="text-[11px] text-[#60646C] pt-1 border-t border-[#EFE9E0]/60 flex items-center justify-between">
                  <span>Favorite Dish: <strong className="text-[#F4511E]">{rev.favoriteDish}</strong></span>
                  <span>{rev.date}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Operating Hours & Location */}
          <div className="p-4 bg-white rounded-2xl border border-[#EFE9E0] space-y-2">
            <h4 className="text-xs font-bold text-[#181c23] uppercase tracking-wider">
              Hours & Neighborhood
            </h4>
            <div className="space-y-1.5 text-xs text-[#60646C]">
              {restaurant.hours.map((h, i) => (
                <div key={i} className="flex justify-between">
                  <span className="font-medium text-[#2D3139]">{h.days}</span>
                  <span>{h.time}</span>
                </div>
              ))}
            </div>
            <p className="text-xs text-[#8E929A] pt-2 border-t border-[#EFE9E0]">
              📍 {restaurant.address}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
