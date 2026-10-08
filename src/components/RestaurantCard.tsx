import React from 'react';
import { Star, Bookmark, Sparkles, Navigation, Clock, Award, Utensils } from 'lucide-react';
import { Restaurant } from '../types/restaurant';

interface RestaurantCardProps {
  restaurant: Restaurant;
  onSelect: (restaurant: Restaurant) => void;
  isSaved: boolean;
  onToggleSave: (id: string, e: React.MouseEvent) => void;
  onQuickBook?: (restaurant: Restaurant, e: React.MouseEvent) => void;
}

export const RestaurantCard: React.FC<RestaurantCardProps> = ({
  restaurant,
  onSelect,
  isSaved,
  onToggleSave,
  onQuickBook
}) => {
  const displayDistance = restaurant.computedDistanceText || restaurant.distance;
  const displayTravelTime = restaurant.computedTravelTime || restaurant.walkTime;

  return (
    <article
      onClick={() => onSelect(restaurant)}
      className="group cursor-pointer bg-white rounded-[20px] border border-[#EFE9E0] overflow-hidden shadow-[0_2px_8px_-2px_rgba(45,49,57,0.05),0_1px_3px_0_rgba(45,49,57,0.04)] hover:shadow-[0_12px_28px_-6px_rgba(244,81,30,0.12),0_4px_12px_-2px_rgba(45,49,57,0.06)] hover:border-[#FF6E40]/40 transition-all duration-300 flex flex-col"
    >
      {/* Top Half: 16:9 Ratio Photography */}
      <div className="relative aspect-16/10 w-full overflow-hidden bg-[#F7F5F0]">
        <img
          src={restaurant.heroImage}
          alt={restaurant.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
          loading="lazy"
        />

        {/* Subtle Dark Gradient Overlay at Top for Legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/30 pointer-events-none" />

        {/* AI Match Badge (Top-Left) */}
        <div className="absolute top-3 left-3 flex items-center gap-1.5 px-3 py-1 bg-gradient-to-r from-[#FF6E40] to-[#F4511E] text-white text-[12px] font-bold rounded-full shadow-[0_2px_8px_rgba(244,81,30,0.4)] backdrop-blur-xs">
          <Sparkles size={12} className="fill-white" />
          <span>{restaurant.matchScore}% Match</span>
        </div>

        {/* Bookmark Button (Translucent Glass Circle, Top-Right) */}
        <button
          onClick={(e) => onToggleSave(restaurant.id, e)}
          className={`absolute top-3 right-3 w-9 h-9 rounded-full flex items-center justify-center backdrop-blur-md transition-all duration-200 ${
            isSaved
              ? 'bg-[#F4511E] text-white shadow-md'
              : 'bg-white/80 text-[#2D3139] hover:bg-white hover:text-[#F4511E]'
          }`}
          aria-label={isSaved ? 'Remove from saved' : 'Save restaurant'}
        >
          <Bookmark size={16} className={isSaved ? 'fill-white' : ''} />
        </button>

        {/* Live Status & Distance Chip (Bottom-Left of Image) */}
        <div className="absolute bottom-3 left-3 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/95 backdrop-blur-md shadow-xs">
          {restaurant.isOpen ? (
            <>
              <span className="w-2 h-2 rounded-full bg-[#10B981] animate-ping opacity-75" />
              <span className="w-2 h-2 rounded-full bg-[#10B981] -ml-3.5" />
              <span className="text-[11px] font-bold text-[#10B981]">Open</span>
            </>
          ) : (
            <>
              <span className="w-2 h-2 rounded-full bg-[#8E929A]" />
              <span className="text-[11px] font-medium text-[#60646C]">Closed</span>
            </>
          )}
          <span className="text-[11px] text-[#8E929A]">·</span>
          <span className="text-[11px] font-extrabold text-[#F4511E] flex items-center gap-0.5">
            <Navigation size={10} className="fill-[#F4511E]" />
            {displayDistance}
          </span>
          <span className="text-[11px] text-[#60646C]">({displayTravelTime})</span>
        </div>

        {restaurant.michelinGuide && (
          <div className="absolute bottom-3 right-3 flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#1A1A1A]/90 text-[#F5FFF6] text-[10px] font-bold tracking-wide backdrop-blur-md">
            <Award size={12} className="text-[#FF6E40]" />
            <span>Michelin</span>
          </div>
        )}
      </div>

      {/* Bottom Half: Metadata & Hierarchy */}
      <div className="p-4 flex flex-col flex-1 justify-between">
        <div>
          {/* Title and Rating Row */}
          <div className="flex items-start justify-between gap-2">
            <div>
              <h3 className="text-[18px] font-bold text-[#181c23] tracking-tight group-hover:text-[#F4511E] transition-colors leading-snug">
                {restaurant.name}
              </h3>
              <p className="text-[13px] text-[#60646C] line-clamp-1 mt-0.5">
                {restaurant.tagline}
              </p>
            </div>

            {/* Rating pill/box with warm amber star */}
            <div className="flex items-center gap-1 px-2 py-0.5 rounded-lg bg-[#FFF9E6] border border-[#FFE8A3] shrink-0">
              <Star size={13} className="text-[#F59E0B] fill-[#F59E0B]" />
              <span className="text-[13px] font-bold text-[#92400E]">{restaurant.rating}</span>
            </div>
          </div>

          {/* Clean Unboxed Metadata Row */}
          <div className="flex items-center flex-wrap gap-1.5 text-[12px] text-[#60646C] mt-2.5">
            <span className="font-semibold text-[#2D3139]">{restaurant.cuisine}</span>
            <span aria-hidden="true" className="text-[#8E929A]">·</span>
            <span>{restaurant.neighborhood}</span>
            <span aria-hidden="true" className="text-[#8E929A]">·</span>
            <span className="font-semibold text-[#181c23]">{restaurant.price}</span>
            <span aria-hidden="true" className="text-[#8E929A]">·</span>
            <span>({restaurant.reviewCount} reviews)</span>
          </div>

          {/* Popular Foods / Signature Dishes Highlights */}
          {restaurant.popularDishes && restaurant.popularDishes.length > 0 && (
            <div className="mt-2.5 flex items-center gap-1.5 overflow-hidden text-[11px] text-[#60646C]">
              <span className="font-bold text-[#ac2d00] shrink-0 flex items-center gap-1">
                <Utensils size={11} />
                Foods:
              </span>
              <span className="truncate">
                {restaurant.popularDishes.slice(0, 3).join(' · ')}
              </span>
            </div>
          )}

          {/* AI Sensory Match Snippet */}
          <div className="mt-3 p-2.5 rounded-xl bg-[#FDFBF7] border border-[#EFE9E0] text-[12px] text-[#2D3139] flex items-start gap-2">
            <Sparkles size={14} className="text-[#FF6E40] shrink-0 mt-0.5" />
            <p className="line-clamp-2 leading-relaxed text-[#5b4039]">
              <span className="font-semibold text-[#ac2d00]">Why: </span>
              {restaurant.matchReason}
            </p>
          </div>
        </div>

        {/* Quick Action Footer */}
        <div className="mt-4 pt-3 border-t border-[#EFE9E0] flex items-center justify-between gap-2">
          <div className="flex items-center gap-1.5 text-xs text-[#60646C]">
            <Clock size={13} className="text-[#8E929A]" />
            <span className="truncate">Next table: {restaurant.availableSlots[0]}</span>
          </div>

          <div className="flex items-center gap-2">
            {onQuickBook && (
              <button
                onClick={(e) => onQuickBook(restaurant, e)}
                className="px-3.5 py-1.5 rounded-full text-xs font-bold bg-[#FBE9E7] text-[#F4511E] hover:bg-[#F4511E] hover:text-white transition-all shadow-2xs"
              >
                Book
              </button>
            )}
            <span className="text-xs font-semibold text-[#F4511E] group-hover:translate-x-0.5 transition-transform flex items-center gap-0.5">
              Details →
            </span>
          </div>
        </div>
      </div>
    </article>
  );
};
