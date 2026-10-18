import React from 'react';
import { ArrowUpRight, MapPin, Clock, Dumbbell, Star, Crown, Waves, Play } from 'lucide-react';
import { GymConfig } from '../types';
import { GYM_IMAGES } from '../data/gymData';

interface HeroProps {
  gymConfig: GymConfig;
  onJoinClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ gymConfig, onJoinClick }) => {
  return (
    <section id="home" className="relative min-h-[95vh] flex flex-col justify-between pt-24 pb-8 overflow-hidden bg-[#000000]">
      {/* Background Cinematic Media with measured dark scrim */}
      <div className="absolute inset-0 z-0">
        <img
          src={GYM_IMAGES.hero}
          alt="Pro Ultimate Gyms Saket modern gym interior and workout arena on Westend Marg"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center transform scale-105 transition-transform duration-1000 opacity-60"
        />
        {/* Measured Scrim for optimal contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/85 to-black/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/60" />
      </div>

      {/* Main Content Area */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Big Athletic Headline + Subtitle + Action Buttons */}
          <div className="lg:col-span-8 max-w-3xl">
            {/* Location & Status Marker */}
            <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs sm:text-sm font-semibold tracking-wider text-slate-300 uppercase mb-4 font-display">
              <span className="flex items-center text-[#e52e2e]">
                <MapPin className="w-3.5 h-3.5 mr-1 text-[#e52e2e]" />
                Westend Marg · Near Saket Metro Station, Delhi
              </span>
              <span aria-hidden="true" className="text-white/30">·</span>
              <span className="flex items-center text-amber-400 font-bold">
                <Star className="w-3.5 h-3.5 fill-amber-400 mr-1" />
                4.8 / 5.0 (898 Reviews)
              </span>
              <span aria-hidden="true" className="text-white/30">·</span>
              <span className="flex items-center text-slate-300">
                <Clock className="w-3.5 h-3.5 mr-1 text-slate-400" />
                Open Mon–Sat 5:30 AM – 11:00 PM
              </span>
            </div>

            {/* Main Headline matching reference photo style */}
            <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-[6.5rem] font-black text-white tracking-tight uppercase leading-[0.88] mb-5 font-display">
              BUILT<br />
              <span className="relative inline-block text-white">
                DIFFERENT
                <span className="text-[#e52e2e]">.</span>
                {/* Red paint brush-stroke underline matching reference */}
                <svg
                  className="absolute -bottom-3 left-0 w-full h-4 text-[#e52e2e]"
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
            </h1>

            {/* Sub-headline slogan */}
            <div className="mb-4">
              <div className="text-base sm:text-lg font-extrabold uppercase tracking-wider text-[#e52e2e] font-display">
                DISCIPLINE TODAY. DOMINATE TOMORROW.
              </div>
              <p className="text-sm sm:text-base text-slate-300 font-normal leading-relaxed mt-1 max-w-xl font-sans">
                Welcome to Pro Ultimate Gyms - Saket. Experience high-end imported strength machines, Olympic free weights up to 50kg, certified form coaching, sauna recovery suites, and clean locker rooms right on Westend Marg.
              </p>
            </div>

            {/* Call to Actions matching reference */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-3">
              <button
                onClick={onJoinClick}
                className="px-7 py-4 bg-[#e52e2e] hover:bg-[#d02222] text-white font-extrabold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2.5 shadow-[0_0_25px_rgba(229,46,46,0.35)] cursor-pointer group rounded-none"
              >
                <span className="font-display tracking-widest text-sm">START TRAINING</span>
                <ArrowUpRight className="w-4 h-4 text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>

              <a
                href="#facilities"
                className="px-6 py-4 bg-black/60 hover:bg-neutral-900 text-white font-bold text-xs uppercase tracking-wider border border-white/20 hover:border-white/40 transition-all flex items-center justify-center gap-2 text-center rounded-none backdrop-blur-sm"
              >
                <Play className="w-3.5 h-3.5 fill-white text-white" />
                <span className="font-display tracking-widest text-sm">EXPLORE SAKET GYM</span>
              </a>
            </div>
          </div>

          {/* Right Column: Vertical Stats Column matching reference */}
          <div className="lg:col-span-4 lg:pl-10">
            <div className="flex flex-col space-y-6 sm:space-y-8 bg-black/40 sm:bg-transparent p-4 sm:p-0 rounded-none border border-white/10 sm:border-0">
              
              {/* Stat 1 */}
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 flex items-center justify-center text-amber-400">
                  <Star className="w-6 h-6 fill-amber-400" />
                </div>
                <div>
                  <div className="text-3xl sm:text-4xl font-black text-white font-display tabular-nums tracking-tight">
                    4.8 ★
                  </div>
                  <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 font-display">
                    898+ GOOGLE REVIEWS
                  </div>
                </div>
              </div>

              {/* Stat 2 */}
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 flex items-center justify-center text-[#e52e2e]">
                  <Dumbbell className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-3xl sm:text-4xl font-black text-white font-display tabular-nums tracking-tight">
                    50KG+
                  </div>
                  <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 font-display">
                    HEAVY DUMBBELLS & OLYMPIC BARS
                  </div>
                </div>
              </div>

              {/* Stat 3 */}
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 flex items-center justify-center text-[#e52e2e]">
                  <Waves className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-3xl sm:text-4xl font-black text-white font-display tabular-nums tracking-tight">
                    SAUNA
                  </div>
                  <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 font-display">
                    SPA, STEAM & HOT SHOWERS
                  </div>
                </div>
              </div>

              {/* Stat 4 */}
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 flex items-center justify-center text-[#e52e2e]">
                  <Crown className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-3xl sm:text-4xl font-black text-white font-display tabular-nums tracking-tight">
                    #1 CHAIN
                  </div>
                  <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 font-display">
                    INDIA'S BIGGEST GYM BRAND
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* Subtle bottom divider */}
      <div className="relative z-10 w-full border-t border-white/10" />
    </section>
  );
};
