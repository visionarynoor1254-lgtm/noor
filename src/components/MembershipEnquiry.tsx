import React, { useState } from 'react';
import { MessageSquare, Phone, Check, ArrowUpRight, ShieldAlert, Users } from 'lucide-react';
import { GymConfig } from '../types';
import { MEMBERSHIP_PLANS, GYM_IMAGES } from '../data/gymData';

interface MembershipEnquiryProps {
  gymConfig: GymConfig;
  onOpenJoinModal: (selectedPlan?: string) => void;
}

export const MembershipEnquiry: React.FC<MembershipEnquiryProps> = ({
  gymConfig,
  onOpenJoinModal,
}) => {
  const [selectedPlanId, setSelectedPlanId] = useState<string>('plan-3m');
  const [selectedGoal, setSelectedGoal] = useState<string>('Muscle Building & Strength');
  const [selectedSlot, setSelectedSlot] = useState<string>('Morning (5:30 AM - 9:30 AM)');

  const goals = [
    'Muscle Building & Strength',
    'Fat Loss & Conditioning',
    'General Fitness & Stamina',
    'Postural Correction & Mobility',
  ];

  const slots = [
    'Morning (5:30 AM - 9:30 AM)',
    'Mid-Day (10:00 AM - 1:00 PM)',
    'Evening (4:00 PM - 10:00 PM)',
  ];

  const currentPlan = MEMBERSHIP_PLANS.find((p) => p.id === selectedPlanId) || MEMBERSHIP_PLANS[1];

  const handleWhatsAppEnquiry = () => {
    const text = `Hi Body Fitness Club (Daltonganj), I would like to enquire about membership details.\n\n• Selected Plan: ${currentPlan.duration}\n• Primary Fitness Goal: ${selectedGoal}\n• Preferred Time Slot: ${selectedSlot}\n\nPlease let me know the current fees, active joining offers, and when I can visit for a trial session!`;
    const cleanNumber = gymConfig.whatsappNumber.replace(/[^0-9]/g, '');
    window.open(`https://wa.me/${cleanNumber}?text=${encodeURIComponent(text)}`, '_blank', 'noopener,noreferrer');
  };

  const handlePhoneCall = () => {
    window.location.href = `tel:${gymConfig.phone.replace(/[^0-9+]/g, '')}`;
  };

  return (
    <section id="training" className="py-20 md:py-28 bg-[#050505] border-t border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-xs font-bold uppercase tracking-widest text-[#e52e2e] mb-2 font-display">
            MEMBERSHIP & ADMISSIONS
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white uppercase tracking-tight font-display">
            READY TO START YOUR FITNESS JOURNEY?
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed font-sans">
            Choose a plan duration that suits your timeline. Speak directly with our front desk team for current seasonal packages, student pricing, and enrollment offers.
          </p>
        </div>

        {/* Membership Duration Tier Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {MEMBERSHIP_PLANS.map((plan) => {
            const isSelected = selectedPlanId === plan.id;
            return (
              <div
                key={plan.id}
                onClick={() => setSelectedPlanId(plan.id)}
                className={`p-6 rounded-none border transition-all duration-300 flex flex-col justify-between cursor-pointer relative ${
                  isSelected
                    ? 'bg-[#101010] border-[#e52e2e] shadow-[0_0_20px_rgba(229,46,46,0.2)] ring-1 ring-[#e52e2e]'
                    : 'bg-[#0a0a0a] border-white/10 hover:border-white/25'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 bg-[#e52e2e] text-white font-extrabold text-[10px] uppercase tracking-wider font-display">
                    Most Popular Choice
                  </div>
                )}

                <div>
                  <div className="text-2xl font-black uppercase text-white font-display mb-1">
                    {plan.duration}
                  </div>
                  <p className="text-xs text-slate-400 mb-6 min-h-[36px] font-sans">
                    {plan.tagline}
                  </p>

                  <div className="space-y-2.5 mb-6 border-t border-white/10 pt-4">
                    {plan.benefits.map((b, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                        <Check className="w-3.5 h-3.5 text-[#e52e2e] shrink-0 mt-0.5" />
                        <span className="font-sans">{b}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-white/10">
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedPlanId(plan.id);
                      onOpenJoinModal(plan.duration);
                    }}
                    className={`w-full py-2.5 rounded-none font-extrabold text-xs uppercase tracking-wider transition-all font-display ${
                      isSelected
                        ? 'bg-[#e52e2e] text-white hover:bg-[#d02222]'
                        : 'bg-white/5 text-slate-200 hover:bg-white/10'
                    }`}
                  >
                    Select & Enquire
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Pricing Transparency & Desk Consultation Notice */}
        <div className="mb-14 p-4 bg-[#0c0c0c] border border-white/10 rounded-none text-center max-w-3xl mx-auto flex items-center justify-center gap-2 text-xs sm:text-sm text-slate-400">
          <ShieldAlert className="w-4 h-4 text-[#e52e2e] shrink-0" />
          <span>
            <strong className="text-white">Fair Pricing Policy:</strong> Official membership fees are confirmed directly at the gym desk with zero hidden charges or surprise registration fees.
          </span>
        </div>

        {/* Interactive Fast Enquiry Panel with Goal & Slot */}
        <div className="bg-[#0c0c0c] border border-white/10 rounded-none p-6 sm:p-10 max-w-4xl mx-auto shadow-2xl mb-16">
          <div className="border-b border-white/10 pb-6 mb-6">
            <div className="text-xs font-bold uppercase tracking-wider text-[#e52e2e] font-display mb-1">
              Quick Plan Customizer
            </div>
            <h3 className="text-2xl sm:text-3xl font-black uppercase text-white font-display">
              Ready to visit? Customize Your Enquiry
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">
              Select your goal and preferred training slot to generate your custom WhatsApp enquiry.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {/* Goal Selector */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 font-display mb-2">
                1. Your Primary Fitness Goal
              </label>
              <div className="space-y-2">
                {goals.map((g) => (
                  <button
                    key={g}
                    type="button"
                    onClick={() => setSelectedGoal(g)}
                    className={`w-full text-left px-3.5 py-2.5 border text-xs sm:text-sm font-medium transition-all flex items-center justify-between cursor-pointer rounded-none ${
                      selectedGoal === g
                        ? 'bg-[#181818] border-[#e52e2e] text-white font-semibold'
                        : 'bg-white/5 border-white/5 text-slate-300 hover:bg-white/10'
                    }`}
                  >
                    <span>{g}</span>
                    {selectedGoal === g && <Check className="w-4 h-4 text-[#e52e2e]" />}
                  </button>
                ))}
              </div>
            </div>

            {/* Slot Selector */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 font-display mb-2">
                2. Preferred Training Window
              </label>
              <div className="space-y-2">
                {slots.map((s) => (
                  <button
                    key={s}
                    type="button"
                    onClick={() => setSelectedSlot(s)}
                    className={`w-full text-left px-3.5 py-2.5 border text-xs sm:text-sm font-medium transition-all flex items-center justify-between cursor-pointer rounded-none ${
                      selectedSlot === s
                        ? 'bg-[#181818] border-[#e52e2e] text-white font-semibold'
                        : 'bg-white/5 border-white/5 text-slate-300 hover:bg-white/10'
                    }`}
                  >
                    <span>{s}</span>
                    {selectedSlot === s && <Check className="w-4 h-4 text-[#e52e2e]" />}
                  </button>
                ))}
              </div>

              {/* Current Summary */}
              <div className="mt-4 p-3 bg-black border border-white/10 text-xs text-slate-300 space-y-1">
                <div>
                  <span className="text-slate-400">Selected Duration:</span>{' '}
                  <strong className="text-white">{currentPlan.duration}</strong>
                </div>
                <div>
                  <span className="text-slate-400">Club:</span>{' '}
                  <span className="text-[#e52e2e] font-semibold">{gymConfig.name}, {gymConfig.locationCity}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
            <button
              onClick={handleWhatsAppEnquiry}
              className="flex-1 py-4 px-6 bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-lg cursor-pointer rounded-none font-display text-sm"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Enquire on WhatsApp</span>
            </button>
            <button
              onClick={handlePhoneCall}
              className="py-4 px-6 bg-white/10 hover:bg-white/15 text-white border border-white/15 font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer rounded-none font-display text-sm"
            >
              <Phone className="w-4 h-4 text-[#e52e2e]" />
              <span>Call the Gym ({gymConfig.phone})</span>
            </button>
          </div>
        </div>

        {/* Bottom Marquee Banner Matching Reference Photo Bottom Section */}
        <div className="relative rounded-none overflow-hidden bg-black border border-white/10 min-h-[380px] sm:min-h-[440px] flex items-center p-6 sm:p-12">
          {/* Background Image with dramatic moody lighting */}
          <img
            src={GYM_IMAGES.functional}
            alt="Body Fitness Club Daltonganj training arena"
            referrerPolicy="no-referrer"
            className="absolute inset-0 w-full h-full object-cover object-center opacity-45 brightness-75 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/85 to-transparent" />

          {/* Banner Content */}
          <div className="relative z-10 max-w-2xl">
            <h3 className="text-5xl sm:text-6xl md:text-7xl font-black text-white uppercase tracking-tight font-display leading-[0.88] mb-4">
              YOUR<br />
              <span className="text-[#e52e2e]">STRONGEST</span><br />
              VERSION<br />
              <span className="relative inline-block text-white">
                STARTS HERE.
                {/* Red paint brush-stroke underline */}
                <svg
                  className="absolute -bottom-2.5 left-0 w-full h-3.5 text-[#e52e2e]"
                  viewBox="0 0 240 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M3 8C60 4 160 2 237 9C170 5.5 85 6.5 3 8Z"
                    fill="currentColor"
                  />
                </svg>
              </span>
            </h3>

            {/* Bottom Row: Red Button + Join 500+ Members */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 pt-6">
              <button
                type="button"
                onClick={() => onOpenJoinModal('Full Membership')}
                className="px-8 py-4 bg-[#e52e2e] hover:bg-[#d02222] text-white font-extrabold text-xs uppercase tracking-widest transition-all flex items-center gap-2 shadow-[0_0_25px_rgba(229,46,46,0.4)] cursor-pointer rounded-none group"
              >
                <span className="font-display tracking-widest text-sm">JOIN NOW</span>
                <ArrowUpRight className="w-4 h-4 text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>

              <div className="flex items-center gap-3">
                {/* Stack of member avatar icons */}
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 rounded-full border-2 border-black bg-neutral-800 flex items-center justify-center text-xs font-bold text-white">
                    R
                  </div>
                  <div className="w-8 h-8 rounded-full border-2 border-black bg-neutral-700 flex items-center justify-center text-xs font-bold text-white">
                    A
                  </div>
                  <div className="w-8 h-8 rounded-full border-2 border-black bg-neutral-600 flex items-center justify-center text-xs font-bold text-white">
                    S
                  </div>
                  <div className="w-8 h-8 rounded-full border-2 border-black bg-[#e52e2e] flex items-center justify-center text-xs font-bold text-white">
                    +
                  </div>
                </div>
                <div className="text-xs uppercase font-bold text-slate-300 font-display tracking-wider">
                  <div>JOIN 500+ MEMBERS</div>
                  <div className="text-[10px] text-slate-400 font-sans normal-case">AND START YOUR JOURNEY TODAY</div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
