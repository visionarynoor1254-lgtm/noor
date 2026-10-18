import React from 'react';
import { Dumbbell, Target, Sparkles, HeartPulse, CheckCircle2, ShieldCheck, Waves } from 'lucide-react';
import { GymConfig } from '../types';
import { GYM_IMAGES, ALL_SERVICES_LIST } from '../data/gymData';

interface AboutProps {
  gymConfig: GymConfig;
}

export const About: React.FC<AboutProps> = ({ gymConfig }) => {
  return (
    <section id="about" className="py-20 md:py-28 bg-[#070707] border-t border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-14 max-w-3xl">
          <div className="text-xs font-bold uppercase tracking-widest text-[#e52e2e] mb-2 font-display">
            ABOUT PRO ULTIMATE GYMS - SAKET
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white uppercase tracking-tight font-display">
            South Delhi's Ultimate Fitness Destination
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed font-sans">
            Located on Westend Marg near Saket Metro Station, {gymConfig.name} is a premier training facility designed for people who demand top-tier equipment, pristine cleanliness, and certified coaching. As part of India's biggest gym chain, we combine advanced biomechanical machinery with luxury amenities including sauna suites, hot showers, and studio fitness classes.
          </p>
        </div>

        {/* 2-Column Split: Visual Storytelling & Club Approach */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
          
          {/* Left Column: Authentic Photography & Training Zones */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
            <div className="relative rounded-none overflow-hidden border border-white/10 group h-80 sm:h-96">
              <img
                src={GYM_IMAGES.strength}
                alt="Strength training and Olympic free weights at Pro Ultimate Gyms Saket"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-95"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 p-3.5 bg-black/90 backdrop-blur-md rounded-none border border-white/15">
                <div className="text-xs uppercase font-bold text-[#e52e2e] font-display">Main Strength Arena</div>
                <div className="text-sm font-semibold text-white">Imported bio-mechanical stations & heavy dumbbells up to 50kg</div>
              </div>
            </div>

            {/* Quick Core Commitments */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 bg-[#0c0c0c] border border-white/10 rounded-none">
                <div className="flex items-center gap-2 mb-1.5 text-white font-bold text-sm uppercase font-display">
                  <CheckCircle2 className="w-4 h-4 text-[#e52e2e] shrink-0" />
                  <span>Sauna & Shower Suites</span>
                </div>
                <p className="text-xs text-slate-400 font-sans">
                  Recover with dedicated dry sauna rooms, hot water shower cubicles, and private lockers.
                </p>
              </div>

              <div className="p-4 bg-[#0c0c0c] border border-white/10 rounded-none">
                <div className="flex items-center gap-2 mb-1.5 text-white font-bold text-sm uppercase font-display">
                  <CheckCircle2 className="w-4 h-4 text-[#e52e2e] shrink-0" />
                  <span>On-Site Parking</span>
                </div>
                <p className="text-xs text-slate-400 font-sans">
                  Hassle-free parking right on Westend Marg, seconds away from Saket Metro Station.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Complete Services & Atmosphere */}
          <div className="lg:col-span-6 flex flex-col justify-center space-y-6">
            <div className="p-6 sm:p-8 bg-[#0c0c0c] border border-white/10 rounded-none space-y-6">
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <h3 className="text-xl font-bold uppercase tracking-wide text-white font-display">
                  Comprehensive Services & Disciplines
                </h3>
                <span className="text-xs font-bold text-[#e52e2e] uppercase font-display">
                  4.8 ★ Rated (898 Reviews)
                </span>
              </div>

              {/* Grid of Confirmed Services from User Request */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {ALL_SERVICES_LIST.map((service, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#e52e2e] shrink-0 mt-0.5" />
                    <span className="font-sans leading-snug">{service}</span>
                  </div>
                ))}
              </div>

              {/* Training Environment Pillars */}
              <div className="pt-4 border-t border-white/10 space-y-4">
                <div className="flex items-start gap-3.5">
                  <div className="w-8 h-8 bg-[#e52e2e]/10 border border-[#e52e2e]/30 flex items-center justify-center shrink-0 mt-0.5">
                    <Dumbbell className="w-4 h-4 text-[#e52e2e]" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white uppercase font-display">Elite Form Coaching</h4>
                    <p className="text-xs text-slate-400 mt-0.5 font-sans">
                      Supervised training by certified personal trainers (including Coach Zain and team) focused on injury prevention and progressive overload.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-8 h-8 bg-[#e52e2e]/10 border border-[#e52e2e]/30 flex items-center justify-center shrink-0 mt-0.5">
                    <Waves className="w-4 h-4 text-[#e52e2e]" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white uppercase font-display">Hygienic, Clean & Open Late</h4>
                    <p className="text-xs text-slate-400 mt-0.5 font-sans">
                      Active air exchange systems, sanitized stations throughout the day, and open until 11:00 PM for after-work training sessions.
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
