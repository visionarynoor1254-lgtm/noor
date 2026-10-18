import React from 'react';
import { Dumbbell, Sparkles, UserCheck, MapPin, CreditCard, Flame } from 'lucide-react';
import { WHY_CHOOSE_US } from '../data/gymData';
import { GymConfig } from '../types';

interface WhyChooseUsProps {
  gymConfig: GymConfig;
}

export const WhyChooseUs: React.FC<WhyChooseUsProps> = ({ gymConfig }) => {
  const icons = [
    Dumbbell,
    Sparkles,
    UserCheck,
    MapPin,
    CreditCard,
    Flame,
  ];

  return (
    <section id="why-us" className="py-20 md:py-28 bg-[#000000] border-y border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-xs font-bold uppercase tracking-widest text-[#e52e2e] mb-2 font-display">
            THE DIFFERENCE
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white uppercase tracking-tight font-display">
            Why Train At Body Fitness Club
          </h2>
          <p className="mt-3 text-slate-300 text-base leading-relaxed font-sans">
            We focus on what genuinely drives workout adherence: reliable equipment, safety-first coaching, spotless hygiene, and an encouraging local culture.
          </p>
        </div>

        {/* 6-Card Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {WHY_CHOOSE_US.map((item, index) => {
            const Icon = icons[index % icons.length];
            return (
              <div
                key={item.title}
                className="p-6 sm:p-7 bg-[#0a0a0a] border border-white/10 rounded-none hover:border-[#e52e2e]/50 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="w-12 h-12 rounded-none bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:border-[#e52e2e]/50 transition-colors">
                    <Icon className="w-6 h-6 text-[#e52e2e]" />
                  </div>
                  <h3 className="text-2xl font-bold uppercase text-white font-display tracking-wide mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-400 leading-relaxed font-sans">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/10 flex items-baseline justify-between text-xs">
                  <span className="font-black uppercase tracking-wider text-[#e52e2e] font-display text-base">
                    {item.stat}
                  </span>
                  <span className="text-slate-400 font-medium font-sans">{item.statLabel}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Local Commitment Strip */}
        <div className="mt-12 p-6 sm:p-8 bg-[#0c0c0c] border border-white/10 rounded-none text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="text-2xl font-black uppercase text-white font-display">
              Serving Fitness Enthusiasts Across Daltonganj & Palamu
            </h4>
            <p className="text-xs sm:text-sm text-slate-400 mt-1 max-w-2xl font-sans">
              From beginners lifting their first dumbbell to experienced athletes hitting new PRs, our doors are open to everyone committed to self-improvement.
            </p>
          </div>
          <a
            href="#contact"
            className="px-7 py-3.5 bg-[#e52e2e] hover:bg-[#d02222] text-white font-extrabold text-xs uppercase tracking-widest rounded-none transition-colors whitespace-nowrap shrink-0 font-display"
          >
            Visit Our Floor
          </a>
        </div>
      </div>
    </section>
  );
};
