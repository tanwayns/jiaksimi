import React, { useState } from 'react';
import { Bookmark, Plus, Trash2, Calendar, Star, Compass, Check } from 'lucide-react';
import { Restaurant } from '../types/restaurant';

interface SavedScreenProps {
  savedRestaurants: Restaurant[];
  onSelectRestaurant: (restaurant: Restaurant) => void;
  onRemoveSaved: (id: string) => void;
  onQuickBook: (restaurant: Restaurant, e: React.MouseEvent) => void;
  onGoToExplore: () => void;
}

export const SavedScreen: React.FC<SavedScreenProps> = ({
  savedRestaurants,
  onSelectRestaurant,
  onRemoveSaved,
  onQuickBook,
  onGoToExplore,
}) => {
  const [activeList, setActiveList] = useState<string>('all');
  const [customLists, setCustomLists] = useState<string[]>([
    'All Saved',
    'Date Night Wishlist',
    'Solo Dining Bar',
    'Tried & Adored'
  ]);
  const [newListName, setNewListName] = useState('');
  const [showAddList, setShowAddList] = useState(false);

  const handleAddList = (e: React.FormEvent) => {
    e.preventDefault();
    if (newListName.trim() && !customLists.includes(newListName.trim())) {
      setCustomLists([...customLists, newListName.trim()]);
      setActiveList(newListName.trim());
      setNewListName('');
      setShowAddList(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-5 space-y-5 pb-28">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-extrabold text-[#181c23] tracking-tight">
            Saved Culinary Shortlist
          </h1>
          <p className="text-xs text-[#60646C] mt-0.5">
            {savedRestaurants.length} bookmark{savedRestaurants.length === 1 ? '' : 's'} across your custom lists
          </p>
        </div>

        <button
          onClick={() => setShowAddList(!showAddList)}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white border border-[#EFE9E0] text-xs font-bold text-[#F4511E] hover:bg-[#FBE9E7] transition-colors shadow-xs"
        >
          <Plus size={14} />
          <span>New List</span>
        </button>
      </div>

      {/* Add New List Inline Form */}
      {showAddList && (
        <form onSubmit={handleAddList} className="p-3 bg-white rounded-2xl border border-[#EFE9E0] shadow-sm flex gap-2">
          <input
            type="text"
            value={newListName}
            onChange={(e) => setNewListName(e.target.value)}
            placeholder="E.g. Sunday Brunch Spots..."
            className="flex-1 text-xs px-3 py-2 bg-[#F7F5F0] rounded-xl text-[#181c23] focus:outline-none focus:ring-1 focus:ring-[#F4511E]"
            autoFocus
          />
          <button
            type="submit"
            className="px-3.5 py-2 bg-[#F4511E] text-white text-xs font-bold rounded-xl hover:bg-[#d63c05]"
          >
            Create
          </button>
        </form>
      )}

      {/* Custom List Filter Pills */}
      <div className="flex gap-2 overflow-x-auto no-scrollbar py-1">
        {customLists.map((list) => (
          <button
            key={list}
            onClick={() => setActiveList(list)}
            className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all whitespace-nowrap ${
              activeList === list
                ? 'bg-[#181c23] text-white shadow-xs'
                : 'bg-white text-[#60646C] border border-[#EFE9E0] hover:text-[#181c23]'
            }`}
          >
            {list}
          </button>
        ))}
      </div>

      {/* Content List */}
      {savedRestaurants.length === 0 ? (
        <div className="text-center py-16 px-4 bg-white rounded-3xl border border-[#EFE9E0] space-y-3">
          <div className="w-14 h-14 rounded-full bg-[#FBE9E7] text-[#F4511E] flex items-center justify-center mx-auto">
            <Bookmark size={24} />
          </div>
          <h3 className="text-lg font-bold text-[#181c23]">Your bucket list is currently empty</h3>
          <p className="text-xs text-[#60646C] max-w-sm mx-auto leading-relaxed">
            Tap the bookmark icon on any restaurant card or map pin to save it for your next culinary adventure.
          </p>
          <button
            onClick={onGoToExplore}
            className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full bg-[#F4511E] text-white text-xs font-bold shadow-md hover:bg-[#d63c05] transition-all"
          >
            <Compass size={14} />
            <span>Discover Top Spots Now</span>
          </button>
        </div>
      ) : (
        <div className="space-y-3">
          {savedRestaurants.map((restaurant) => (
            <div
              key={restaurant.id}
              className="bg-white p-3.5 rounded-2xl border border-[#EFE9E0] shadow-xs flex flex-col sm:flex-row gap-3 hover:border-[#FF6E40]/40 transition-colors"
            >
              <div
                onClick={() => onSelectRestaurant(restaurant)}
                className="relative w-full sm:w-32 h-28 rounded-xl overflow-hidden shrink-0 cursor-pointer group bg-[#F7F5F0]"
              >
                <img
                  src={restaurant.heroImage}
                  alt={restaurant.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-1.5 left-1.5 px-2 py-0.5 rounded-full bg-[#FF6E40] text-white text-[10px] font-bold">
                  {restaurant.matchScore}% Match
                </div>
              </div>

              <div className="flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-start justify-between">
                    <div>
                      <h3
                        onClick={() => onSelectRestaurant(restaurant)}
                        className="text-base font-bold text-[#181c23] hover:text-[#F4511E] transition-colors cursor-pointer"
                      >
                        {restaurant.name}
                      </h3>
                      <p className="text-xs text-[#60646C]">
                        {restaurant.cuisine} · {restaurant.neighborhood} · {restaurant.price}
                      </p>
                    </div>

                    <button
                      onClick={() => onRemoveSaved(restaurant.id)}
                      className="p-1.5 text-[#8E929A] hover:text-[#ba1a1a] transition-colors"
                      title="Remove from saved"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>

                  <div className="flex items-center gap-2 mt-1.5 text-xs">
                    <div className="flex items-center text-[#F59E0B]">
                      <Star size={12} className="fill-current" />
                      <span className="font-bold text-[#181c23] ml-1">{restaurant.rating}</span>
                    </div>
                    <span className="text-[#8E929A]">·</span>
                    <span className="text-[#10B981] font-semibold">
                      {restaurant.isOpen ? 'Open Now' : 'Closed'}
                    </span>
                    <span className="text-[#8E929A]">·</span>
                    <span className="text-[#60646C]">{restaurant.distance}</span>
                  </div>
                </div>

                <div className="mt-3 pt-2 border-t border-[#EFE9E0] flex items-center justify-between">
                  <span className="text-xs text-[#60646C]">
                    Next opening: <strong>{restaurant.availableSlots[0]}</strong>
                  </span>
                  <div className="flex gap-2">
                    <button
                      onClick={(e) => onQuickBook(restaurant, e)}
                      className="px-3 py-1.5 rounded-full bg-[#F4511E] text-white text-xs font-bold hover:bg-[#d63c05] transition-all"
                    >
                      Book Table
                    </button>
                    <button
                      onClick={() => onSelectRestaurant(restaurant)}
                      className="px-3 py-1.5 rounded-full bg-[#F7F5F0] text-[#2D3139] text-xs font-bold hover:bg-[#EFE9E0] transition-colors"
                    >
                      View
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
