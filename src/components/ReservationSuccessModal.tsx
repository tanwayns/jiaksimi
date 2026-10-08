import React from 'react';
import { Check, Calendar, Users, MapPin, Sparkles, X } from 'lucide-react';
import { Reservation } from '../types/restaurant';

interface ReservationSuccessModalProps {
  reservation: Reservation | null;
  onClose: () => void;
  onViewPassport: () => void;
}

export const ReservationSuccessModal: React.FC<ReservationSuccessModalProps> = ({
  reservation,
  onClose,
  onViewPassport
}) => {
  if (!reservation) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex justify-center items-center p-4 animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl max-w-sm w-full border border-[#EFE9E0] shadow-2xl overflow-hidden p-6 text-center space-y-4 animate-in zoom-in-95 duration-200 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-[#8E929A] hover:text-[#181c23]"
        >
          <X size={18} />
        </button>

        {/* Success Icon */}
        <div className="w-16 h-16 rounded-full bg-[#ECFDF5] text-[#10B981] flex items-center justify-center mx-auto shadow-inner">
          <Check size={32} strokeWidth={2.5} />
        </div>

        <div className="space-y-1">
          <span className="text-[11px] font-bold uppercase tracking-wider text-[#10B981]">
            Table Confirmed
          </span>
          <h2 className="text-xl font-extrabold text-[#181c23]">
            You're In!
          </h2>
          <p className="text-xs text-[#60646C]">
            Your table at <strong>{reservation.restaurantName}</strong> has been booked and synced to your profile.
          </p>
        </div>

        {/* Booking Card Details */}
        <div className="p-4 rounded-2xl bg-[#FDFBF7] border border-[#EFE9E0] text-left space-y-2 text-xs">
          <div className="flex items-center gap-2">
            <Calendar size={14} className="text-[#F4511E]" />
            <span className="font-bold text-[#181c23]">{reservation.date}</span>
            <span className="text-[#8E929A]">·</span>
            <span className="font-bold text-[#F4511E]">{reservation.time}</span>
          </div>

          <div className="flex items-center gap-2 text-[#60646C]">
            <Users size={14} className="text-[#8E929A]" />
            <span>{reservation.guests} Guests ({reservation.seatingArea})</span>
          </div>

          {reservation.specialRequests && (
            <div className="text-[11px] text-[#8E929A] pt-1 border-t border-[#EFE9E0]">
              Note: "{reservation.specialRequests}"
            </div>
          )}
        </div>

        {/* Actions */}
        <div className="space-y-2 pt-2">
          <button
            onClick={() => {
              onClose();
              onViewPassport();
            }}
            className="w-full py-3 rounded-full bg-[#F4511E] hover:bg-[#d63c05] text-white font-bold text-xs shadow-md transition-all"
          >
            View in Taste Passport
          </button>

          <button
            onClick={onClose}
            className="w-full py-2.5 rounded-full bg-[#F7F5F0] hover:bg-[#EFE9E0] text-[#2D3139] font-bold text-xs transition-colors"
          >
            Keep Exploring
          </button>
        </div>
      </div>
    </div>
  );
};
