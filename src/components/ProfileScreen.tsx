import React from 'react';
import { 
  User, 
  Award, 
  Sparkles, 
  Calendar, 
  Clock, 
  Users, 
  MapPin, 
  X, 
  CheckCircle2, 
  ShieldCheck, 
  Utensils 
} from 'lucide-react';
import { UserTasteProfile, Reservation } from '../types/restaurant';

interface ProfileScreenProps {
  profile: UserTasteProfile;
  reservations: Reservation[];
  onCancelReservation: (id: string) => void;
}

export const ProfileScreen: React.FC<ProfileScreenProps> = ({
  profile,
  reservations,
  onCancelReservation,
}) => {
  return (
    <div className="max-w-3xl mx-auto px-4 py-5 space-y-6 pb-28">
      {/* User Hero Banner */}
      <div className="bg-white p-6 rounded-3xl border border-[#EFE9E0] shadow-xs flex flex-col sm:flex-row items-center sm:items-start gap-4 text-center sm:text-left">
        <div className="relative">
          <img
            src={profile.avatar}
            alt={profile.name}
            className="w-20 h-20 rounded-full object-cover border-2 border-[#F4511E] shadow-md"
          />
          <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-[#10B981] border-2 border-white flex items-center justify-center text-white text-[10px]">
            ✓
          </div>
        </div>

        <div className="flex-1 space-y-1">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
            <h1 className="text-xl font-extrabold text-[#181c23]">{profile.name}</h1>
            <span className="inline-block px-3 py-1 rounded-full bg-[#FBE9E7] text-[#F4511E] text-xs font-bold">
              {profile.level}
            </span>
          </div>
          <p className="text-xs text-[#8E929A]">{profile.handle} · Member since 2024</p>
          <div className="flex items-center justify-center sm:justify-start gap-3 pt-2 text-xs text-[#60646C]">
            <span>🎯 <strong>{profile.palateScore}%</strong> Palate Calibration</span>
            <span>·</span>
            <span>✨ <strong>48</strong> Discovered Spots</span>
          </div>
        </div>
      </div>

      {/* Active Reservations Management */}
      <div className="bg-white p-5 rounded-2xl border border-[#EFE9E0] shadow-xs space-y-3">
        <div className="flex items-center justify-between">
          <h2 className="text-sm font-bold text-[#181c23] uppercase tracking-wider flex items-center gap-2">
            <Calendar size={16} className="text-[#F4511E]" />
            <span>Active Reservations ({reservations.length})</span>
          </h2>
          {reservations.length > 0 && (
            <span className="text-[11px] font-semibold text-[#10B981] bg-[#ECFDF5] px-2.5 py-0.5 rounded-full">
              Live Verified
            </span>
          )}
        </div>

        {reservations.length === 0 ? (
          <div className="text-center py-6 text-xs text-[#8E929A]">
            No upcoming table reservations booked yet.
          </div>
        ) : (
          <div className="space-y-3">
            {reservations.map((res) => (
              <div
                key={res.id}
                className="p-4 rounded-xl border border-[#EFE9E0] bg-[#FDFBF7] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3"
              >
                <div className="flex items-center gap-3">
                  <img
                    src={res.restaurantImage}
                    alt=""
                    className="w-14 h-14 rounded-xl object-cover shrink-0"
                  />
                  <div>
                    <h4 className="text-sm font-bold text-[#181c23]">{res.restaurantName}</h4>
                    <div className="flex items-center gap-2 text-xs text-[#60646C] mt-0.5">
                      <span className="font-semibold text-[#F4511E]">{res.date}</span>
                      <span>at</span>
                      <span className="font-semibold text-[#181c23]">{res.time}</span>
                    </div>
                    <div className="text-[11px] text-[#8E929A] mt-0.5">
                      {res.guests} Guests · {res.seatingArea}
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2 w-full sm:w-auto justify-end pt-2 sm:pt-0 border-t sm:border-0 border-[#EFE9E0]">
                  <span className="px-2.5 py-1 rounded-full bg-[#ECFDF5] text-[#10B981] text-xs font-bold flex items-center gap-1">
                    <CheckCircle2 size={12} />
                    Confirmed
                  </span>
                  <button
                    onClick={() => onCancelReservation(res.id)}
                    className="px-3 py-1 rounded-full text-xs font-semibold text-[#ba1a1a] hover:bg-[#FFDAD6] transition-colors"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Taste DNA Breakdown */}
      <div className="bg-white p-5 rounded-2xl border border-[#EFE9E0] shadow-xs space-y-4">
        <div>
          <h2 className="text-sm font-bold text-[#181c23] uppercase tracking-wider flex items-center gap-2">
            <Sparkles size={16} className="text-[#FF6E40]" />
            <span>Taste DNA & Flavor Profile</span>
          </h2>
          <p className="text-xs text-[#60646C] mt-1">
            Algorithmic fingerprint computed from your ratings, bookmark frequency, and flavor affinities.
          </p>
        </div>

        <div className="space-y-3.5">
          {profile.dna.map((d) => (
            <div key={d.label} className="space-y-1">
              <div className="flex justify-between text-xs">
                <span className="font-bold text-[#181c23]">{d.label}</span>
                <span className="font-bold text-[#F4511E]">{d.percentage}%</span>
              </div>
              <div className="w-full h-2 rounded-full bg-[#F7F5F0] overflow-hidden">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-[#FF6E40] to-[#F4511E]"
                  style={{ width: `${d.percentage}%` }}
                />
              </div>
              <p className="text-[11px] text-[#8E929A]">{d.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Culinary Passport Stamps */}
      <div className="bg-white p-5 rounded-2xl border border-[#EFE9E0] shadow-xs space-y-3">
        <h2 className="text-sm font-bold text-[#181c23] uppercase tracking-wider flex items-center gap-2">
          <Award size={16} className="text-[#F4511E]" />
          <span>Culinary Passport Stamps</span>
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5">
          {profile.stamps.map((stamp) => (
            <div
              key={stamp.cuisine}
              className="p-3 rounded-xl border border-[#EFE9E0] bg-[#FDFBF7] text-center flex flex-col items-center justify-center space-y-1 hover:border-[#F4511E] transition-colors"
            >
              <span className="text-2xl">{stamp.icon}</span>
              <span className="text-xs font-bold text-[#181c23] leading-tight">
                {stamp.cuisine}
              </span>
              <span className="text-[10px] text-[#60646C]">
                {stamp.count} spots visited
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
