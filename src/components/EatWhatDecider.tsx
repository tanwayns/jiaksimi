import React, { useState } from 'react';
import { Sparkles, Dices, Utensils, ArrowRight, RotateCw, Check, Flame } from 'lucide-react';
import { Logo } from './Logo';

export interface DeciderDish {
  id: string;
  name: string;
  nameZh: string;
  tagline: string;
  category: string;
  searchQuery: string;
  vibe: string;
  badge: string;
}

export const ICONIC_DISHES: DeciderDish[] = [
  {
    id: 'chili-crab',
    name: 'Singapore Chili Crab & Mantou',
    nameZh: '新加坡国宝辣椒螃蟹',
    tagline: 'Sweet, savory, and spicy egg ribbon sambal with golden mantou',
    category: 'seafood',
    searchQuery: 'chili crab',
    vibe: '🦀 Iconic Feast',
    badge: 'National Dish'
  },
  {
    id: 'char-kway-teow',
    name: 'Char Kway Teow with Wok Hei',
    nameZh: '镬气爆棚炒粿条',
    tagline: 'Smoky flat noodles charred over intense flame with lap cheong & cockles',
    category: 'wokhei',
    searchQuery: 'wok hei',
    vibe: '🥢 High-Heat Wok Hei',
    badge: 'Hawker Legend'
  },
  {
    id: 'peranakan-rempah',
    name: '36-Ingredient Peranakan Rempah',
    nameZh: '土生华人娘惹古法咖喱',
    tagline: 'Slow-simmered buah keluak, blue pea rice, lemongrass & wild spices',
    category: 'peranakan',
    searchQuery: 'peranakan',
    vibe: '🌺 Heritage Spice',
    badge: 'Michelin Favorite'
  },
  {
    id: 'satay-charcoal',
    name: 'Mangrove Charcoal Satay',
    nameZh: '红树林炭烤沙爹肉串',
    tagline: 'Skewers kissed by glowing coals, accompanied by chunky pineapple peanut sauce',
    category: 'grill',
    searchQuery: 'satay',
    vibe: '🥩 Charcoal Grilled',
    badge: 'Smoky & Tender'
  },
  {
    id: 'chicken-rice',
    name: 'Hainanese Chicken Rice',
    nameZh: '海南文昌白斩鸡饭',
    tagline: 'Velvety poached chicken with ginger chili dip & fragrant chicken-fat rice',
    category: 'all',
    searchQuery: 'chicken rice',
    vibe: '🍗 Comfort Classic',
    badge: 'Straits Heritage'
  },
  {
    id: 'moonlight-hor-fun',
    name: 'Moonlight Egg Hor Fun',
    nameZh: '月光生蛋生炒牛河',
    tagline: 'Sizzling hot wok noodles crowned with a rich silky raw yolk and sliced beef',
    category: 'wokhei',
    searchQuery: 'hor fun',
    vibe: '🥢 Silky Umami',
    badge: 'Late Night Crave'
  },
  {
    id: 'katong-laksa',
    name: 'Rich Coconut Katong Laksa',
    nameZh: '加东浓郁椰香叻沙',
    tagline: 'Short spoon-eaten rice noodles in aromatic coconut broth with fresh cockles & laksa leaves',
    category: 'peranakan',
    searchQuery: 'laksa',
    vibe: '🍜 Creamy & Spicy',
    badge: 'Soupy Craving'
  },
  {
    id: 'kaya-toast',
    name: 'Charcoal Kaya Toast & Kopi',
    nameZh: '炭烤咖椰牛油吐司配南洋咖啡',
    tagline: 'Crispy charcoal-toasted bread with chilled French butter, pandan kaya, and half-boiled eggs',
    category: 'cafe',
    searchQuery: 'kaya toast',
    vibe: '☕ Traditional Kopitiam',
    badge: 'Morning & Tea Time'
  }
];

interface EatWhatDeciderProps {
  onSelectDishQuery: (query: string) => void;
  onOpenBrandGuide?: () => void;
}

export const EatWhatDecider: React.FC<EatWhatDeciderProps> = ({
  onSelectDishQuery,
  onOpenBrandGuide
}) => {
  const [selectedDish, setSelectedDish] = useState<DeciderDish | null>(null);
  const [isSpinning, setIsSpinning] = useState(false);
  const [spinCount, setSpinCount] = useState(0);

  const handleSpin = () => {
    if (isSpinning) return;
    setIsSpinning(true);
    let counter = 0;
    const totalSpins = 14 + Math.floor(Math.random() * 6);
    const speed = 70;

    const interval = setInterval(() => {
      counter++;
      const randomIndex = Math.floor(Math.random() * ICONIC_DISHES.length);
      setSelectedDish(ICONIC_DISHES[randomIndex]);

      if (counter >= totalSpins) {
        clearInterval(interval);
        setIsSpinning(false);
        setSpinCount(prev => prev + 1);
      }
    }, speed);
  };

  return (
    <div className="rounded-3xl bg-gradient-to-br from-[#FFF5F2] via-[#FDFBF7] to-[#FFF0EB] border border-[#FFDCD2] p-4 sm:p-5 shadow-xs relative overflow-hidden transition-all">
      {/* Decorative Wok & Spice background glows */}
      <div className="absolute -top-12 -right-12 w-48 h-48 bg-[#F4511E]/10 rounded-full blur-2xl pointer-events-none" />
      <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-[#FF6E40]/10 rounded-full blur-2xl pointer-events-none" />

      <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-4">
        {/* Left Side: Brand Logo Lockup & Decider Pitch */}
        <div className="space-y-2 min-w-0 flex-1">
          <div className="flex items-center gap-3 flex-wrap">
            {/* Clickable Brand Logo with "吃什么！" */}
            <Logo size="md" showSubtitle={true} clickable={true} onBrandClick={onOpenBrandGuide} />

            <span className="hidden sm:inline-block px-2.5 py-0.5 rounded-full text-[11px] font-extrabold bg-[#FBE9E7] text-[#F4511E] border border-[#F4511E]/20">
              吃货必问 · Jiak Simi Decider
            </span>
          </div>

          <p className="text-xs sm:text-sm text-[#4A4E57] max-w-xl leading-relaxed">
            Every day in Singapore & Malaysia begins with the eternal question: <strong className="text-[#181c23]">"吃什么！"</strong> Can't decide between chili crab, smoky hor fun, or rich laksa? Tap below to let fate decide your feast!
          </p>
        </div>

        {/* Right Side: Interactive Randomizer Trigger */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 shrink-0">
          <button
            onClick={handleSpin}
            disabled={isSpinning}
            className={`px-5 py-3 rounded-2xl font-black text-xs sm:text-sm transition-all flex items-center justify-center gap-2 shadow-sm ${
              isSpinning
                ? 'bg-[#EFE9E0] text-[#8E929A] cursor-not-allowed'
                : 'bg-[#F4511E] hover:bg-[#D84315] text-white hover:shadow-md hover:scale-102 cursor-pointer'
            }`}
          >
            <Dices size={18} className={isSpinning ? 'animate-spin' : ''} />
            <span>
              {isSpinning ? '旋转挑选美味中...' : '不知道吃什么？帮我挑！'}
            </span>
          </button>
        </div>
      </div>

      {/* Selected Dish Spotlight Card (Appears after roll) */}
      {selectedDish && (
        <div className="mt-4 pt-4 border-t border-[#FFDCD2] animate-in fade-in slide-in-from-bottom-2 duration-300">
          <div className="bg-white rounded-2xl p-3.5 sm:p-4 border border-[#FFDCD2] shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="flex items-start sm:items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-[#FFF5F2] text-[#F4511E] flex items-center justify-center shrink-0 border border-[#FFDCD2] font-black text-lg">
                🍲
              </div>
              <div className="min-w-0">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-xs px-2 py-0.5 rounded-full bg-[#FBE9E7] text-[#F4511E] font-extrabold text-[10px]">
                    {selectedDish.badge}
                  </span>
                  <span className="text-xs text-[#8E929A] font-semibold">
                    {selectedDish.vibe}
                  </span>
                </div>
                <div className="flex items-baseline gap-2 mt-0.5">
                  <h4 className="text-sm sm:text-base font-black text-[#181c23]">
                    {selectedDish.name}
                  </h4>
                  <span className="text-xs font-bold text-[#F4511E]">
                    {selectedDish.nameZh}
                  </span>
                </div>
                <p className="text-xs text-[#60646C] line-clamp-1 mt-0.5">
                  {selectedDish.tagline}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 self-end sm:self-auto shrink-0">
              <button
                onClick={handleSpin}
                disabled={isSpinning}
                className="px-3 py-1.5 rounded-xl border border-[#EFE9E0] bg-[#FDFBF7] hover:bg-[#EFE9E0] text-xs font-bold text-[#60646C] flex items-center gap-1.5 transition-colors"
                title="Spin again"
              >
                <RotateCw size={12} className={isSpinning ? 'animate-spin' : ''} />
                <span>换一个</span>
              </button>

              <button
                onClick={() => onSelectDishQuery(selectedDish.searchQuery)}
                className="px-4 py-1.5 rounded-xl bg-[#F4511E] hover:bg-[#D84315] text-white text-xs font-bold flex items-center gap-1.5 shadow-2xs hover:shadow-xs transition-all"
              >
                <span>一键找附近餐厅</span>
                <ArrowRight size={13} />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
