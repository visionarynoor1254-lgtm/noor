import React from 'react';
import { MapPin, Phone, MessageSquare, Clock, Compass, Instagram, Star, Navigation, ShieldCheck, Car, Waves } from 'lucide-react';
import { GymConfig } from '../types';

interface ContactLocationProps {
  gymConfig: GymConfig;
}

export const ContactLocation: React.FC<ContactLocationProps> = ({ gymConfig }) => {
  const handleOpenWhatsApp = () => {
    const text = 'Hi Pro Ultimate Gyms Saket! I would like to visit the gym on Westend Marg near Saket Metro Station today for a workout / membership tour.';
    const cleanNumber = gymConfig.whatsappNumber.replace(/[^0-9]/g, '');
    window.open(`https://wa.me/${cleanNumber}?text=${encodeURIComponent(text)}`, '_blank', 'noopener,noreferrer');
  };

  const handleOpenDirections = () => {
    window.open('https://maps.google.com/?q=Pro+Ultimate+Gyms+Saket+New+Delhi', '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-[#000000] border-t border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="text-xs font-bold uppercase tracking-widest text-[var(--color-primary,#e52e2e)] mb-2 font-display">
            LOCATION & VISIT DESK
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white uppercase tracking-tight font-display">
            Visit Pro Ultimate Gyms - Saket
          </h2>
          <p className="mt-3 text-slate-300 text-base leading-relaxed font-sans">
            Prime South Delhi location on Westend Marg, right near Saket Metro Station. No appointment necessary for floor tours — walk in or connect directly with our front desk below.
          </p>
        </div>

        {/* 2-Column Grid: Contact Information & Direct Action Hub (Form Replaced with Direct Connect) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Official Club Address & Google Maps Embed */}
          <div className="lg:col-span-6 space-y-6 flex flex-col justify-between">
            <div className="p-6 sm:p-8 bg-[#0c0c0c] border border-white/10 space-y-6 shadow-xl flex-1">
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <h3 className="text-xl font-bold uppercase text-white font-display">
                  Official Club Details
                </h3>
                <span className="text-xs font-bold text-amber-400 font-display flex items-center gap-1">
                  <Star className="w-3.5 h-3.5 fill-amber-400" />
                  <span>4.8 ★ (898 Reviews)</span>
                </span>
              </div>

              <div className="space-y-4">
                {/* Address */}
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 bg-white/5 border border-white/10 flex items-center justify-center shrink-0 mt-0.5 text-[var(--color-primary,#e52e2e)]">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-bold uppercase text-slate-400 font-display">Full Club Address</div>
                    <div className="text-sm font-semibold text-white mt-0.5 leading-snug font-sans">
                      {gymConfig.address}
                    </div>
                    <div className="text-xs text-[var(--color-primary,#e52e2e)] font-semibold mt-1 flex items-center gap-1 font-display uppercase tracking-wide">
                      <Compass className="w-3.5 h-3.5" />
                      <span>Near Saket Metro Station (Yellow Line) · Gate 2</span>
                    </div>
                  </div>
                </div>

                {/* Operating Hours & Live Crowd Status */}
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 bg-white/5 border border-white/10 flex items-center justify-center shrink-0 mt-0.5 text-[var(--color-primary,#e52e2e)]">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-bold uppercase text-slate-400 font-display">Operating Hours</div>
                    <div className="text-sm text-slate-200 mt-0.5 leading-snug font-sans">
                      <div>{gymConfig.weekdayHours}</div>
                      <div className="text-xs text-slate-400 mt-0.5">{gymConfig.sundayHours}</div>
                    </div>
                    <div className="mt-2 inline-flex items-center gap-1.5 px-2.5 py-1 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-[11px] font-semibold font-sans">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                      <span>Live on Google: Less busy than usual · Typical visit 1.5–2.5 hrs</span>
                    </div>
                  </div>
                </div>

                {/* Direct Phone & WhatsApp */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  <div className="p-3 bg-black border border-white/10">
                    <div className="text-[11px] font-bold uppercase text-slate-400 font-display">Direct Desk Phone</div>
                    <a
                      href={`tel:${gymConfig.phone.replace(/[^0-9+]/g, '')}`}
                      className="text-sm font-bold text-white hover:text-[var(--color-primary,#e52e2e)] transition-colors mt-0.5 block font-display tracking-wider"
                    >
                      {gymConfig.phone}
                    </a>
                  </div>

                  <div className="p-3 bg-black border border-white/10">
                    <div className="text-[11px] font-bold uppercase text-slate-400 font-display">Official Instagram</div>
                    <div className="text-xs text-slate-300 font-sans mt-0.5">
                      @pug_saket_delhi
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Map Box */}
            <div className="p-4 bg-[#0c0c0c] border border-white/10 overflow-hidden shadow-xl">
              <div className="text-xs font-bold uppercase text-slate-300 font-display mb-2 flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[var(--color-primary,#e52e2e)]" />
                  <span>Google Maps: 316/275 Westend Marg, Saidulajab</span>
                </div>
                <button
                  onClick={handleOpenDirections}
                  className="text-[11px] text-[var(--color-primary,#e52e2e)] hover:underline font-display uppercase tracking-wider flex items-center gap-1 cursor-pointer"
                >
                  <Navigation className="w-3 h-3" />
                  <span>Get Directions</span>
                </button>
              </div>
              <div className="overflow-hidden h-52 sm:h-64 border border-white/10">
                <iframe
                  title="Pro Ultimate Gyms Saket Google Map"
                  src="https://maps.google.com/maps?q=316%2F275%2C%20Westend%20Marg%2C%20near%20Saket%20Metro%20Station%2C%20Saidulajab%2C%20New%20Delhi&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  className="w-full h-full border-0 grayscale contrast-125 opacity-90 hover:opacity-100 transition-opacity"
                  loading="lazy"
                  allowFullScreen
                />
              </div>
            </div>
          </div>

          {/* Right Column: Direct VIP Actions & Visitor Guidance (Clean, High-Impact Replacement for Cluttered Form) */}
          <div className="lg:col-span-6 space-y-4 flex flex-col justify-between">
            
            {/* Quick 1-Tap Action Card: WhatsApp */}
            <div className="p-6 sm:p-8 bg-[#0c0c0c] border border-white/15 hover:border-[var(--color-primary,#e52e2e)] transition-all shadow-2xl">
              <div className="flex items-start justify-between gap-4 mb-4">
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-[var(--color-primary,#e52e2e)] font-display mb-1">
                    FASTEST RESPONSE · 24/7 WHATSAPP
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-black uppercase text-white font-display">
                    Connect With Front Desk
                  </h3>
                </div>
                <div className="w-12 h-12 bg-emerald-600/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0">
                  <MessageSquare className="w-6 h-6" />
                </div>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 font-sans leading-relaxed mb-6">
                Skip filling out long forms. Chat directly with the Pro Ultimate Gyms Saket team to enquire about current membership deals, book trial passes, or ask about personal training with Coach Zain.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={handleOpenWhatsApp}
                  className="py-4 px-5 bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-xs uppercase tracking-widest flex items-center justify-center gap-2 transition-all cursor-pointer font-display text-sm"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Chat on WhatsApp</span>
                </button>

                <a
                  href={`tel:${gymConfig.phone.replace(/[^0-9+]/g, '')}`}
                  className="py-4 px-5 bg-white/10 hover:bg-white/15 text-white border border-white/20 font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-2 transition-all font-display text-sm"
                >
                  <Phone className="w-4 h-4 text-[var(--color-primary,#e52e2e)]" />
                  <span>Call 080111 11142</span>
                </a>
              </div>
            </div>

            {/* Quick Walk-In Amenities & Route Checklist */}
            <div className="p-6 bg-[#0a0a0a] border border-white/10 space-y-4">
              <div className="text-xs font-bold uppercase tracking-wider text-white font-display border-b border-white/10 pb-2 flex items-center justify-between">
                <span>Everything Ready For Your Visit</span>
                <span className="text-slate-400 font-sans normal-case">Westend Marg, Saket</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-300 font-sans">
                <div className="flex items-start gap-2.5 p-2.5 bg-black border border-white/5">
                  <Car className="w-4 h-4 text-[var(--color-primary,#e52e2e)] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block font-semibold">On-Site Parking</strong>
                    <span className="text-[11px] text-slate-400">Convenient parking space right outside the gym facility.</span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5 p-2.5 bg-black border border-white/5">
                  <Waves className="w-4 h-4 text-[var(--color-primary,#e52e2e)] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block font-semibold">Sauna & Hot Showers</strong>
                    <span className="text-[11px] text-slate-400">Pristine dry sauna suites and sanitized changing rooms.</span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5 p-2.5 bg-black border border-white/5">
                  <Compass className="w-4 h-4 text-[var(--color-primary,#e52e2e)] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block font-semibold">Saket Metro Proximity</strong>
                    <span className="text-[11px] text-slate-400">2-minute walk from Saket Metro (Yellow Line Exit Gate 2).</span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5 p-2.5 bg-black border border-white/5">
                  <ShieldCheck className="w-4 h-4 text-[var(--color-primary,#e52e2e)] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block font-semibold">Free Floor Consultation</strong>
                    <span className="text-[11px] text-slate-400">Complimentary tour with trainer form checks and machine guidance.</span>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="button"
                  onClick={handleOpenDirections}
                  className="w-full py-3.5 bg-white/5 hover:bg-white/10 text-white border border-white/15 font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-colors cursor-pointer font-display"
                >
                  <Navigation className="w-3.5 h-3.5 text-[var(--color-primary,#e52e2e)]" />
                  <span>Open Directions in Google Maps</span>
                </button>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
