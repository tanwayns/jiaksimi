import React from 'react';
import { Compass, MapPin, Sparkles, Bookmark, User } from 'lucide-react';

export type NavTab = 'explore' | 'map' | 'crave' | 'saved' | 'profile';

interface BottomNavProps {
  activeTab: NavTab;
  onTabChange: (tab: NavTab) => void;
  savedCount: number;
  activeReservationsCount: number;
}

export const BottomNav: React.FC<BottomNavProps> = ({
  activeTab,
  onTabChange,
  savedCount,
  activeReservationsCount,
}) => {
  const tabs = [
    { id: 'explore' as NavTab, label: 'Explore', icon: Compass },
    { id: 'map' as NavTab, label: 'Map', icon: MapPin },
    { id: 'crave' as NavTab, label: 'Crave AI', icon: Sparkles, badge: 'AI' },
    { id: 'saved' as NavTab, label: 'Saved', icon: Bookmark, count: savedCount },
    { id: 'profile' as NavTab, label: 'Passport', icon: User, count: activeReservationsCount },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-[#EFE9E0] shadow-[0_-4px_20px_rgba(45,49,57,0.04)] pb-[env(safe-area-inset-bottom)]">
      <div className="max-w-lg mx-auto flex items-center justify-around h-16 px-2">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;

          return (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              className={`relative flex flex-col items-center justify-center flex-1 h-full py-1 transition-all duration-200 group ${
                isActive ? 'text-[#F4511E]' : 'text-[#60646C] hover:text-[#2D3139]'
              }`}
            >
              <div className="relative">
                <Icon
                  size={22}
                  strokeWidth={isActive ? 2.3 : 1.8}
                  className={`transition-transform duration-200 ${
                    isActive ? 'scale-110' : 'group-hover:scale-105'
                  }`}
                />
                {tab.badge && (
                  <span className="absolute -top-1.5 -right-3 px-1 py-0.2 text-[9px] font-bold bg-[#FF6E40] text-white rounded-full leading-none">
                    {tab.badge}
                  </span>
                )}
                {typeof tab.count === 'number' && tab.count > 0 && (
                  <span className="absolute -top-1 -right-2 min-w-3.5 h-3.5 px-0.5 text-[9px] font-bold bg-[#F4511E] text-white rounded-full flex items-center justify-center leading-none">
                    {tab.count}
                  </span>
                )}
              </div>

              <span
                className={`text-[11px] mt-1 tracking-tight font-medium ${
                  isActive ? 'font-bold text-[#F4511E]' : 'text-[#60646C]'
                }`}
              >
                {tab.label}
              </span>

              {/* Active micro-dot indicator specified in design system */}
              {isActive && (
                <span className="w-1.5 h-1.5 rounded-full bg-[#F4511E] absolute bottom-1.5 shadow-[0_1px_4px_rgba(244,81,30,0.5)]" />
              )}
            </button>
          );
        })}
      </div>
    </nav>
  );
};
