import React, { useState } from 'react';
import { Sparkles, Utensils, Heart, Flame, Compass, ArrowRight, Star, Clock, Check } from 'lucide-react';
import { Restaurant } from '../types/restaurant';

interface CraveConciergeProps {
  restaurants: Restaurant[];
  onSelectRestaurant: (restaurant: Restaurant) => void;
  onQuickBook: (restaurant: Restaurant, e: React.MouseEvent) => void;
}

export const CraveConcierge: React.FC<CraveConciergeProps> = ({
  restaurants,
  onSelectRestaurant,
  onQuickBook
}) => {
  const [selectedFlavor, setSelectedFlavor] = useState<string>('peranakan-rempah');
  const [selectedVibe, setSelectedVibe] = useState<string>('cozy');
  const [selectedOccasion, setSelectedOccasion] = useState<string>('date');
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedResults, setGeneratedResults] = useState<Restaurant[] | null>(null);

  const flavorProfiles = [
    { id: 'peranakan-rempah', label: '🌺 36-Ingredient Rempah & Buah Keluak', sub: 'Slow-braised wagyu ribs, lemongrass & blue pea rice' },
    { id: 'wok-hei', label: '🥢 High-Heat Wok Hei Breath', sub: 'Charred hor fun, moonlight egg yolk & coffee ribs' },
    { id: 'chili-crab', label: '🦀 Coastal Kelong Seafood & Chili Crab', sub: 'Sweet mud crab in egg drop sambal & crispy mantou' },
    { id: 'malaysian-ember', label: '🥩 Mangrove Charcoal & Satay Embers', sub: 'Binchotan-grilled wagyu skewers & peanut sauce' },
    { id: 'spice-atelier', label: '🌶️ Progressive South Indian Spices', sub: 'Crispy pork vindaloo roti & lobster rasam bisque' },
    { id: 'natural-shophouse', label: '🍷 Heritage Shophouse Pet-Nats', sub: 'Chinatown courtyard, orange wine & cincalok duck' },
    { id: 'kaya-kopitiam', label: '☕ Charcoal Kaya Toast & Cold Drip', sub: 'Cultured butter, soft kampung eggs & Liberica coffee' }
  ];

  const vibes = [
    { id: 'cozy', label: '🕯️ Heritage Shophouse Glow' },
    { id: 'lively', label: '✨ Bustling Wok & Open Flame' },
    { id: 'solo', label: '🎧 Intimate Chef Counter' },
    { id: 'late-night', label: '🌙 Late-Night Supper & Cellar' }
  ];

  const occasions = [
    { id: 'date', label: 'Romantic Shophouse Date' },
    { id: 'solo-treat', label: 'Solo Foodie Quest' },
    { id: 'friends', label: 'Zi Char Gathering' },
    { id: 'celebrate', label: 'Milestone Tasting Menu' }
  ];

  const handleGenerate = () => {
    setIsGenerating(true);
    setTimeout(() => {
      // Find top matches according to selected attributes
      let matched = [...restaurants];
      if (selectedFlavor === 'peranakan-rempah') {
        matched = matched.filter(r => r.category === 'peranakan');
      } else if (selectedFlavor === 'wok-hei') {
        matched = matched.filter(r => r.category === 'wokhei');
      } else if (selectedFlavor === 'chili-crab') {
        matched = matched.filter(r => r.category === 'seafood');
      } else if (selectedFlavor === 'malaysian-ember') {
        matched = matched.filter(r => r.category === 'grill');
      } else if (selectedFlavor === 'spice-atelier') {
        matched = matched.filter(r => r.category === 'spice');
      } else if (selectedFlavor === 'natural-shophouse') {
        matched = matched.filter(r => r.category === 'wine');
      } else if (selectedFlavor === 'kaya-kopitiam') {
        matched = matched.filter(r => r.category === 'cafe');
      }

      if (matched.length === 0) matched = restaurants.slice(0, 3);
      setGeneratedResults(matched);
      setIsGenerating(false);
    }, 600);
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-5 space-y-6 pb-28">
      {/* Header Banner */}
      <div className="p-6 rounded-3xl bg-gradient-to-br from-[#181c23] to-[#2c3038] text-white shadow-xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-radial from-[#FF6E40]/25 to-transparent rounded-full blur-2xl pointer-events-none" />
        <div className="relative z-10 space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FF6E40]/20 border border-[#FF6E40]/40 text-[#FF6E40] text-xs font-bold">
            <Sparkles size={13} />
            <span>吃什么！· AI Palate Concierge</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
            今晚吃什么？What are you craving?
          </h1>
          <p className="text-sm text-[#dfe2ed] max-w-xl leading-relaxed">
            Can't decide what to eat in Singapore & Malaysia? Select your sensory mood and flavor craving below. Our Straits AI engine computes textural, thermal, and spice harmonies to match your exact appetite.
          </p>
        </div>
      </div>

      {/* Step 1: Sensory Flavor Profile */}
      <div className="bg-white p-5 rounded-2xl border border-[#EFE9E0] shadow-xs space-y-3">
        <h3 className="text-sm font-bold text-[#181c23] uppercase tracking-wider flex items-center gap-2">
          <span className="w-5 h-5 rounded-full bg-[#FBE9E7] text-[#F4511E] flex items-center justify-center text-xs">1</span>
          Sensory Craving & Texture
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
          {flavorProfiles.map((f) => (
            <button
              key={f.id}
              onClick={() => setSelectedFlavor(f.id)}
              className={`p-3.5 rounded-xl text-left border transition-all ${
                selectedFlavor === f.id
                  ? 'border-[#F4511E] bg-[#FFF5F2] shadow-xs'
                  : 'border-[#EFE9E0] hover:bg-[#FDFBF7]'
              }`}
            >
              <div className="text-sm font-bold text-[#181c23]">{f.label}</div>
              <div className="text-xs text-[#60646C] mt-0.5">{f.sub}</div>
            </button>
          ))}
        </div>
      </div>

      {/* Step 2: Atmospheric Vibe */}
      <div className="bg-white p-5 rounded-2xl border border-[#EFE9E0] shadow-xs space-y-3">
        <h3 className="text-sm font-bold text-[#181c23] uppercase tracking-wider flex items-center gap-2">
          <span className="w-5 h-5 rounded-full bg-[#FBE9E7] text-[#F4511E] flex items-center justify-center text-xs">2</span>
          Room Energy & Atmosphere
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
          {vibes.map((v) => (
            <button
              key={v.id}
              onClick={() => setSelectedVibe(v.id)}
              className={`p-3 rounded-xl text-center text-xs font-bold border transition-all ${
                selectedVibe === v.id
                  ? 'border-[#F4511E] bg-[#FBE9E7] text-[#F4511E]'
                  : 'border-[#EFE9E0] text-[#60646C] hover:bg-[#FDFBF7]'
              }`}
            >
              {v.label}
            </button>
          ))}
        </div>
      </div>

      {/* Step 3: Occasion */}
      <div className="bg-white p-5 rounded-2xl border border-[#EFE9E0] shadow-xs space-y-3">
        <h3 className="text-sm font-bold text-[#181c23] uppercase tracking-wider flex items-center gap-2">
          <span className="w-5 h-5 rounded-full bg-[#FBE9E7] text-[#F4511E] flex items-center justify-center text-xs">3</span>
          Occasion
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
          {occasions.map((o) => (
            <button
              key={o.id}
              onClick={() => setSelectedOccasion(o.id)}
              className={`p-2.5 rounded-xl text-center text-xs font-bold border transition-all ${
                selectedOccasion === o.id
                  ? 'border-[#181c23] bg-[#181c23] text-white'
                  : 'border-[#EFE9E0] text-[#60646C] hover:bg-[#FDFBF7]'
              }`}
            >
              {o.label}
            </button>
          ))}
        </div>
      </div>

      {/* Generate Button with AI Spark Action */}
      <button
        onClick={handleGenerate}
        disabled={isGenerating}
        className="w-full py-4 rounded-full bg-gradient-to-r from-[#FF6E40] to-[#F4511E] text-white font-extrabold text-sm shadow-[0_8px_24px_-4px_rgba(244,81,30,0.4)] hover:shadow-xl transition-all transform active:scale-98 flex items-center justify-center gap-2 disabled:opacity-75"
      >
        <Sparkles size={18} className={isGenerating ? 'animate-spin' : ''} />
        <span>{isGenerating ? 'Synthesizing Taste Harmony...' : 'Find My Perfect Table Matches'}</span>
      </button>

      {/* Generated Matches Display */}
      {generatedResults && (
        <div className="space-y-4 pt-2 animate-in fade-in slide-in-from-bottom-4 duration-300">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-extrabold text-[#181c23] flex items-center gap-2">
              <span>Tailored Culinary Matches</span>
              <span className="px-2 py-0.5 rounded-full bg-[#ECFDF5] text-[#10B981] text-xs font-bold">
                98% Taste Confidence
              </span>
            </h2>
            <span className="text-xs text-[#60646C]">{generatedResults.length} Spots Identified</span>
          </div>

          <div className="space-y-3">
            {generatedResults.map((r, idx) => (
              <div
                key={r.id}
                className="bg-white p-4 rounded-2xl border border-[#EFE9E0] shadow-sm hover:border-[#FF6E40]/40 transition-all flex flex-col sm:flex-row gap-4"
              >
                <div
                  onClick={() => onSelectRestaurant(r)}
                  className="relative w-full sm:w-40 h-32 rounded-xl overflow-hidden shrink-0 cursor-pointer group"
                >
                  <img
                    src={r.heroImage}
                    alt={r.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-2 left-2 px-2 py-0.5 rounded-full bg-[#FF6E40] text-white text-[11px] font-bold">
                    #{idx + 1} Best Match
                  </div>
                </div>

                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-start justify-between">
                      <div>
                        <h3
                          onClick={() => onSelectRestaurant(r)}
                          className="text-base font-bold text-[#181c23] hover:text-[#F4511E] transition-colors cursor-pointer"
                        >
                          {r.name}
                        </h3>
                        <p className="text-xs text-[#60646C]">
                          {r.cuisine} · {r.neighborhood} · {r.price}
                        </p>
                      </div>
                      <div className="flex items-center gap-1 text-xs font-bold text-[#F59E0B]">
                        <Star size={13} className="fill-current" />
                        <span>{r.rating}</span>
                      </div>
                    </div>

                    <div className="mt-2 p-2 rounded-xl bg-[#FDFBF7] border border-[#EFE9E0] text-xs text-[#5b4039]">
                      <strong className="text-[#ac2d00]">Curator Rationale: </strong>
                      {r.matchReason}
                    </div>
                  </div>

                  <div className="mt-3 pt-2 border-t border-[#EFE9E0] flex items-center justify-between">
                    <span className="text-xs text-[#60646C]">
                      Next Table: <strong className="text-[#181c23]">{r.availableSlots[0]}</strong>
                    </span>
                    <div className="flex gap-2">
                      <button
                        onClick={(e) => onQuickBook(r, e)}
                        className="px-3.5 py-1.5 rounded-full bg-[#F4511E] text-white text-xs font-bold hover:bg-[#d63c05] transition-all"
                      >
                        Book Now
                      </button>
                      <button
                        onClick={() => onSelectRestaurant(r)}
                        className="px-3 py-1.5 rounded-full bg-[#F7F5F0] text-[#2D3139] text-xs font-bold hover:bg-[#EFE9E0] transition-colors"
                      >
                        Explore
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
