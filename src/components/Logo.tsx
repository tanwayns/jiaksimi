import React, { useState } from 'react';
import { Sparkles, Utensils, X, Download, Copy, Check, Eye, Flame, Heart, Compass, Share2 } from 'lucide-react';

// Import image assets directly so Vite bundles them with correct paths
import logoPremiumImg from '../assets/images/jiaksimi_logo_premium_1791450590880.jpg';
import brandBannerImg from '../assets/images/jiaksimi_brand_banner_1791450612457.jpg';

interface LogoProps {
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  showSubtitle?: boolean;
  clickable?: boolean;
  variant?: 'default' | 'badge-only' | 'full-lockup' | 'dark';
  className?: string;
  onBrandClick?: () => void;
}

/**
 * Pure scalable SVG Vector Logo Icon for "吃什么！" (Jiak Simi)
 * Crisp on any screen DPI, animated steam lines and wok flame accent.
 */
export const VectorLogoIcon: React.FC<{ sizeClass?: string; className?: string }> = ({
  sizeClass = 'w-10 h-10',
  className = ''
}) => {
  return (
    <svg
      viewBox="0 0 120 120"
      className={`${sizeClass} ${className}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="吃什么！Jiak Simi Logo Icon"
    >
      <defs>
        {/* Warm Persimmon Gradient */}
        <linearGradient id="persimmonGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FF6E40" />
          <stop offset="50%" stopColor="#F4511E" />
          <stop offset="100%" stopColor="#D84315" />
        </linearGradient>

        {/* Golden Turmeric Accent */}
        <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FDE68A" />
          <stop offset="50%" stopColor="#F59E0B" />
          <stop offset="100%" stopColor="#D97706" />
        </linearGradient>

        {/* Soft shadow */}
        <filter id="bowlShadow" x="-10%" y="-10%" width="120%" height="130%" filterUnits="userSpaceOnUse">
          <feDropShadow dx="0" dy="4" stdDeviation="4" floodColor="#D84315" floodOpacity="0.25" />
        </filter>
      </defs>

      {/* Rounded Badge Base */}
      <rect width="120" height="120" rx="32" fill="url(#persimmonGrad)" />

      {/* Subtle Peranakan Decorative Corner Geometry */}
      <circle cx="20" cy="20" r="3" fill="#FFE0B2" opacity="0.6" />
      <circle cx="100" cy="20" r="3" fill="#FFE0B2" opacity="0.6" />
      <circle cx="20" cy="100" r="3" fill="#FFE0B2" opacity="0.6" />
      <circle cx="100" cy="100" r="3" fill="#FFE0B2" opacity="0.6" />
      <path d="M 14 26 Q 26 26 26 14" stroke="#FFE0B2" strokeWidth="1.5" fill="none" opacity="0.4" />
      <path d="M 106 26 Q 94 26 94 14" stroke="#FFE0B2" strokeWidth="1.5" fill="none" opacity="0.4" />

      {/* Rising Steam Curves */}
      <path
        d="M 45 42 Q 41 33 46 25 Q 50 18 45 12"
        stroke="#FFFFFF"
        strokeWidth="3.2"
        strokeLinecap="round"
        fill="none"
        opacity="0.85"
      />
      <path
        d="M 60 38 Q 66 30 62 21 Q 58 14 62 8"
        stroke="#FFF7ED"
        strokeWidth="3.5"
        strokeLinecap="round"
        fill="none"
        opacity="0.95"
      />
      <path
        d="M 75 42 Q 79 33 74 25 Q 70 18 75 12"
        stroke="#FFFFFF"
        strokeWidth="3.2"
        strokeLinecap="round"
        fill="none"
        opacity="0.85"
      />

      {/* Golden Chopsticks lifting noodles */}
      <line x1="28" y1="36" x2="94" y2="24" stroke="url(#goldGrad)" strokeWidth="3.8" strokeLinecap="round" />
      <line x1="26" y1="42" x2="94" y2="30" stroke="url(#goldGrad)" strokeWidth="3.8" strokeLinecap="round" />

      {/* Steaming Noodle Loop on Chopsticks */}
      <path
        d="M 52 38 Q 58 48 64 38 Q 70 48 76 34"
        stroke="#FEF3C7"
        strokeWidth="2.8"
        strokeLinecap="round"
        fill="none"
      />

      {/* Gourmet Ceramic Bowl */}
      <path
        d="M 24 54 C 24 88 42 96 60 96 C 78 96 96 88 96 54 Z"
        fill="#FFFFFF"
        filter="url(#bowlShadow)"
      />

      {/* Bowl Rim Gold Strip */}
      <path
        d="M 23 54 C 23 51.5 25 50 27 50 L 93 50 C 95 50 97 51.5 97 54 C 97 56.5 95 58 93 58 L 27 58 C 25 58 23 56.5 23 54 Z"
        fill="url(#goldGrad)"
      />

      {/* Chinese Character "吃" (Eat) inside Bowl */}
      <g transform="translate(60, 77) scale(0.92)">
        {/* Mouth radical (口) */}
        <rect x="-24" y="-14" width="11" height="14" rx="2" fill="none" stroke="#F4511E" strokeWidth="2.8" />
        {/* Right part (乞) */}
        <path d="M -8 -13 L 20 -13" stroke="#F4511E" strokeWidth="2.8" strokeLinecap="round" />
        <path d="M 6 -13 L 6 -6 L -7 -6" stroke="#F4511E" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M -7 -6 L -7 1 L 18 1 C 21 1 23 3 23 7 C 23 11 19 12 14 12" stroke="#F4511E" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      </g>

      {/* Small Bowl Base Foot */}
      <rect x="46" y="96" width="28" height="5" rx="2" fill="#E2E8F0" />
    </svg>
  );
};

export const Logo: React.FC<LogoProps> = ({
  size = 'md',
  showSubtitle = true,
  clickable = true,
  variant = 'default',
  className = '',
  onBrandClick
}) => {
  const [showBrandModal, setShowBrandModal] = useState(false);
  const [copiedColor, setCopiedColor] = useState<string | null>(null);
  const [activeLogoTab, setActiveLogoTab] = useState<'app' | 'vector' | 'banner'>('app');

  const copyColor = (hex: string) => {
    navigator.clipboard?.writeText(hex);
    setCopiedColor(hex);
    setTimeout(() => setCopiedColor(null), 1800);
  };

  const handleOpenModal = () => {
    if (onBrandClick) {
      onBrandClick();
    }
    if (clickable) {
      setShowBrandModal(true);
    }
  };

  const iconSizes = {
    xs: 'w-7 h-7 rounded-lg',
    sm: 'w-8 h-8 sm:w-9 sm:h-9 rounded-xl',
    md: 'w-10 h-10 sm:w-11 sm:h-11 rounded-2xl',
    lg: 'w-14 h-14 rounded-3xl',
    xl: 'w-20 h-20 rounded-3xl'
  };

  const textSizes = {
    xs: 'text-sm',
    sm: 'text-base sm:text-lg',
    md: 'text-xl sm:text-2xl',
    lg: 'text-3xl sm:text-4xl',
    xl: 'text-4xl sm:text-5xl'
  };

  const isDark = variant === 'dark';

  return (
    <>
      <div
        onClick={handleOpenModal}
        className={`inline-flex items-center gap-2 select-none ${
          clickable ? 'cursor-pointer group' : ''
        } ${className}`}
        title={clickable ? '吃什么！(Jiak Simi) - Click to inspect brand logo identity & story' : undefined}
        role={clickable ? 'button' : undefined}
        tabIndex={clickable ? 0 : undefined}
        onKeyDown={(e) => {
          if (clickable && (e.key === 'Enter' || e.key === ' ')) {
            e.preventDefault();
            handleOpenModal();
          }
        }}
      >
        {/* Logo Badge Icon */}
        <div
          className={`relative overflow-hidden shadow-sm border shrink-0 transition-transform duration-300 ${
            clickable ? 'group-hover:scale-105 group-hover:shadow-md' : ''
          } ${iconSizes[size]} ${
            isDark ? 'border-white/20 bg-[#181c23]' : 'border-[#EFE9E0] bg-[#FBE9E7]'
          }`}
        >
          {/* Real AI-generated logo artwork with pure SVG fallback */}
          <img
            src={logoPremiumImg}
            alt="吃什么！Jiak Simi Logo"
            className="w-full h-full object-cover"
            loading="eager"
            onError={(e) => {
              // Hide broken image so container falls back cleanly
              (e.currentTarget as HTMLElement).style.display = 'none';
            }}
          />
        </div>

        {/* Wordmark: "吃什么！" + "JIAK SIMI" */}
        {variant !== 'badge-only' && (
          <div className="flex flex-col leading-none min-w-0">
            <div className="flex items-baseline gap-0.5 sm:gap-1">
              <span
                className={`font-black tracking-tight transition-colors ${
                  isDark
                    ? 'text-white group-hover:text-[#FF6E40]'
                    : 'text-[#181c23] group-hover:text-[#F4511E]'
                } ${textSizes[size]}`}
                style={{
                  fontFamily: "'Plus Jakarta Sans', system-ui, -apple-system, sans-serif",
                  letterSpacing: '-0.02em'
                }}
              >
                吃什么
              </span>
              <span
                className={`font-black text-[#F4511E] drop-shadow-xs transition-transform duration-200 group-hover:scale-110 ${textSizes[size]}`}
              >
                ！
              </span>
            </div>

            {showSubtitle && (
              <div className="flex items-center gap-1 mt-0.5 leading-none">
                <span className="text-[10px] sm:text-[11px] font-black tracking-wider text-[#F4511E] uppercase">
                  Jiak Simi
                </span>
                <span className="text-[#8E929A] text-[9px]">•</span>
                <span className="text-[9px] sm:text-[10px] font-semibold text-[#60646C] tracking-tight hidden xs:inline truncate">
                  SG & MY Food Finder
                </span>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Brand Identity & Logo Showcase Modal */}
      {showBrandModal && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex justify-center items-center p-3 sm:p-4 animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl max-w-2xl w-full border border-[#EFE9E0] shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200 my-auto">
            {/* Modal Header */}
            <div className="p-4 sm:p-5 border-b border-[#EFE9E0] flex items-center justify-between bg-[#FDFBF7]">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-2xl overflow-hidden shadow-xs border border-[#EFE9E0] shrink-0">
                  <img
                    src={logoPremiumImg}
                    alt="Logo"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-extrabold text-[#181c23] flex items-center gap-2">
                    <span>吃什么！</span>
                    <span className="text-xs px-2.5 py-0.5 rounded-full bg-[#FBE9E7] text-[#F4511E] font-extrabold">
                      Jiak Simi
                    </span>
                  </h3>
                  <p className="text-xs text-[#60646C]">
                    Official Visual Identity & Culinary Logo System · Singapore & Malaysia
                  </p>
                </div>
              </div>

              <button
                onClick={() => setShowBrandModal(false)}
                className="p-2 rounded-full text-[#8E929A] hover:text-[#181c23] hover:bg-[#F7F5F0] transition-colors"
                aria-label="Close brand modal"
              >
                <X size={20} />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-4 sm:p-6 space-y-5 max-h-[78vh] overflow-y-auto no-scrollbar">
              {/* Tab Selector for Logo Assets */}
              <div className="flex items-center justify-between border-b border-[#EFE9E0] pb-2">
                <div className="flex gap-2">
                  {[
                    { id: 'app' as const, label: 'App Emblem' },
                    { id: 'banner' as const, label: 'Full Brand Lockup' },
                    { id: 'vector' as const, label: 'Vector SVG Mark' },
                  ].map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveLogoTab(tab.id)}
                      className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all ${
                        activeLogoTab === tab.id
                          ? 'bg-[#F4511E] text-white shadow-xs'
                          : 'bg-[#F7F5F0] text-[#60646C] hover:text-[#181c23]'
                      }`}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>

                <span className="text-[11px] text-[#8E929A] font-medium hidden sm:inline">
                  Culinary Identity Design
                </span>
              </div>

              {/* Active Tab View */}
              {activeLogoTab === 'app' && (
                <div className="rounded-2xl border border-[#EFE9E0] bg-[#FDFBF7] p-6 flex flex-col items-center justify-center text-center space-y-4">
                  <div className="w-28 h-28 sm:w-36 sm:h-36 rounded-3xl overflow-hidden shadow-lg border-2 border-white ring-4 ring-[#FBE9E7]">
                    <img
                      src={logoPremiumImg}
                      alt="吃什么！Premium App Emblem"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <div className="text-3xl font-black text-[#181c23] tracking-tight flex items-center justify-center gap-1">
                      <span>吃什么</span>
                      <span className="text-[#F4511E]">！</span>
                    </div>
                    <div className="text-xs font-extrabold uppercase tracking-widest text-[#F4511E] mt-1">
                      JIAK SIMI · STRAITS FOOD FINDER
                    </div>
                    <p className="text-xs text-[#60646C] max-w-sm mx-auto mt-2">
                      Modern culinary mark featuring a steaming noodle bowl, golden chopsticks, wok hei energy, and signature Peranakan red lacquer finish.
                    </p>
                  </div>
                </div>
              )}

              {activeLogoTab === 'banner' && (
                <div className="rounded-2xl overflow-hidden border border-[#EFE9E0] shadow-sm bg-[#FDFBF7]">
                  <div className="relative aspect-16/9 w-full bg-[#FBE9E7]">
                    <img
                      src={brandBannerImg}
                      alt="吃什么！Wide Brand Lockup Banner"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-3 bg-white flex items-center justify-between text-xs border-t border-[#EFE9E0]">
                    <span className="font-bold text-[#181c23]">Official Master Brand Lockup</span>
                    <a
                      href={brandBannerImg}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-bold text-[#F4511E] hover:underline flex items-center gap-1 text-[11px]"
                    >
                      <span>Open Full Resolution</span>
                      <Eye size={12} />
                    </a>
                  </div>
                </div>
              )}

              {activeLogoTab === 'vector' && (
                <div className="rounded-2xl border border-[#EFE9E0] bg-[#FDFBF7] p-6 flex flex-col items-center justify-center text-center space-y-4">
                  <VectorLogoIcon sizeClass="w-32 h-32" />
                  <div>
                    <div className="text-2xl font-black text-[#181c23]">
                      Scalable Vector SVG Mark
                    </div>
                    <p className="text-xs text-[#60646C] max-w-md mx-auto mt-1">
                      Ultra-lightweight vector icon rendering with handcrafted Chinese calligraphy "吃" and steaming wok geometry.
                    </p>
                  </div>
                </div>
              )}

              {/* Logo Story & Meaning */}
              <div className="p-4 rounded-2xl bg-[#FFF5F2] border border-[#FFDCD2] space-y-2.5">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#ac2d00] flex items-center gap-1.5">
                  <Sparkles size={15} className="text-[#F4511E]" />
                  <span>The Story of "吃什么！" (Jiak Simi)</span>
                </h4>
                <p className="text-xs text-[#2D3139] leading-relaxed">
                  In Singapore & Malaysia, <strong>"吃什么！"</strong> (pronounced <em>Jiak Simi</em> in Hokkien, <em>Sik Me Yeh</em> in Cantonese) is the most spoken question of every single day.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-1 text-[11px]">
                  <div className="p-2.5 rounded-xl bg-white border border-[#FFDCD2]">
                    <div className="font-bold text-[#181c23]">1. 吃 (Jiak / Eat)</div>
                    <div className="text-[#60646C] text-[10px] mt-0.5">Passion for Straits culinary heritage, hawkers, & shophouse bistros.</div>
                  </div>
                  <div className="p-2.5 rounded-xl bg-white border border-[#FFDCD2]">
                    <div className="font-bold text-[#181c23]">2. 什么 (Simi / What)</div>
                    <div className="text-[#60646C] text-[10px] mt-0.5">Endless gastronomic curiosity: laksa, chili crab, hor fun, or satay?</div>
                  </div>
                  <div className="p-2.5 rounded-xl bg-white border border-[#FFDCD2]">
                    <div className="font-bold text-[#F4511E]">3. ！(The Flame)</div>
                    <div className="text-[#60646C] text-[10px] mt-0.5">Wok hei spirit and celebratory exclamation mark when food arrives!</div>
                  </div>
                </div>
              </div>

              {/* Logo Color Palette */}
              <div className="space-y-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#60646C]">
                  Official Brand Palette (Click to Copy HEX)
                </h4>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {[
                    { name: 'Persimmon Flame', hex: '#F4511E', text: 'white' },
                    { name: 'Radiant Coral', hex: '#FF6E40', text: 'white' },
                    { name: 'Golden Turmeric', hex: '#F59E0B', text: '#181C23' },
                    { name: 'Midnight Charcoal', hex: '#181C23', text: 'white' },
                  ].map((color) => (
                    <button
                      key={color.hex}
                      onClick={() => copyColor(color.hex)}
                      className="p-2.5 rounded-xl text-left border flex flex-col justify-between h-18 transition-all hover:scale-102 cursor-pointer shadow-2xs"
                      style={{
                        backgroundColor: color.hex,
                        color: color.text,
                        borderColor: '#EFE9E0'
                      }}
                    >
                      <span className="text-[10px] font-bold opacity-90">{color.name}</span>
                      <span className="text-xs font-mono font-bold flex items-center justify-between">
                        <span>{color.hex}</span>
                        {copiedColor === color.hex && <Check size={12} />}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-4 bg-[#FDFBF7] border-t border-[#EFE9E0] flex items-center justify-between">
              <span className="text-xs text-[#8E929A]">
                Brand identity: <strong>吃什么！(Jiak Simi)</strong>
              </span>
              <button
                onClick={() => setShowBrandModal(false)}
                className="px-5 py-2 rounded-full bg-[#F4511E] text-white font-bold text-xs hover:bg-[#d63c05] transition-all shadow-xs cursor-pointer"
              >
                Close Brand Guide
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
