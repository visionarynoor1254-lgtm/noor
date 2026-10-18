import React, { useState } from 'react';
import { ArrowUpRight, Dumbbell, Activity, UserCheck, Flame, Waves, Sparkles } from 'lucide-react';
import { GymConfig } from '../types';
import { GYM_IMAGES } from '../data/gymData';

interface FacilitiesProps {
  gymConfig: GymConfig;
  onEnquireFacility: (facilityTitle: string) => void;
}

export const Facilities: React.FC<FacilitiesProps> = ({ gymConfig, onEnquireFacility }) => {
  const [selectedFilter, setSelectedFilter] = useState<'all' | 'strength' | 'conditioning' | 'pt' | 'turf'>('all');

  const programs = [
    {
      id: 'strength',
      title: 'STRENGTH',
      subtitle: 'Build muscle. Lift heavy. Get results.',
      imageSrc: GYM_IMAGES.strength,
      alt: 'Heavy barbell and dumbbell strength training at Pro Ultimate Gyms Saket',
      icon: Dumbbell,
      tag: 'Strength',
    },
    {
      id: 'conditioning',
      title: 'CONDITIONING',
      subtitle: 'Increase endurance. Push your limits.',
      imageSrc: GYM_IMAGES.cardio,
      alt: 'Cardio conditioning deck and treadmills at Pro Ultimate Gyms Saket',
      icon: Activity,
      tag: 'Conditioning',
    },
    {
      id: 'pt',
      title: 'PERSONAL TRAINING',
      subtitle: '1-on-1 coaching. 100% focused on you.',
      imageSrc: GYM_IMAGES.trainer,
      alt: 'Certified trainer coaching athlete with proper form and spotting',
      icon: UserCheck,
      tag: 'Personal Training',
    },
    {
      id: 'turf',
      title: 'FUNCTIONAL TURF',
      subtitle: 'Crossfit, kickboxing & athletic power.',
      imageSrc: GYM_IMAGES.functional,
      alt: 'Functional turf arena with kettlebells and battle ropes',
      icon: Flame,
      tag: 'Functional Turf',
    },
  ];

  const visiblePrograms = selectedFilter === 'all'
    ? programs
    : programs.filter((p) => p.id === selectedFilter);

  return (
    <section id="facilities" className="py-20 md:py-24 bg-[#050505] border-y border-white/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-stretch">
          
          {/* Left Column: Heading, Athletic Brush Underline, Intro & CTA */}
          <div className="lg:col-span-4 flex flex-col justify-between space-y-8">
            <div>
              {/* Category Kicker */}
              <div className="text-xs font-bold uppercase tracking-widest text-[#e52e2e] font-display mb-2">
                TRAINING & DISCIPLINES
              </div>

              {/* Main Headline with Brush Underline Accent */}
              <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white uppercase tracking-tight font-display leading-[0.9] mb-6">
                STRONGER<br />
                <span className="relative inline-block">
                  EVERYDAY
                  <span className="text-[#e52e2e]">.</span>
                  {/* Subtle red brush-stroke accent underline */}
                  <svg
                    className="absolute -bottom-2.5 left-0 w-full h-3 text-[#e52e2e]"
                    viewBox="0 0 200 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="M3 6.5C50 3.5 130 2 197 7.5C140 4.5 70 5.5 3 6.5Z"
                      fill="currentColor"
                    />
                  </svg>
                </span>
              </h2>

              {/* Supporting Text */}
              <p className="text-sm sm:text-base text-slate-400 leading-relaxed max-w-md font-sans">
                World-class equipment, elite coaching and a community that pushes you to be your best right here on Westend Marg, Saket.
              </p>
            </div>

            {/* Filter Pills & Primary Action */}
            <div className="space-y-5 pt-4">
              {/* Quick filter pills */}
              <div className="flex flex-wrap gap-1.5">
                {[
                  { id: 'all', label: 'All (4)' },
                  { id: 'strength', label: 'Strength' },
                  { id: 'conditioning', label: 'Conditioning' },
                  { id: 'pt', label: '1-on-1 PT' },
                  { id: 'turf', label: 'Crossfit / Turf' },
                ].map((tab) => (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => setSelectedFilter(tab.id as any)}
                    className={`px-3 py-1 text-[11px] font-bold uppercase tracking-wider transition-colors cursor-pointer rounded-none font-display ${
                      selectedFilter === tab.id
                        ? 'bg-[#e52e2e] text-white shadow-sm'
                        : 'bg-white/5 text-slate-400 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* Boxed Explore CTA matching reference */}
              <div>
                <button
                  type="button"
                  onClick={() => onEnquireFacility('Training Programs')}
                  className="w-full sm:w-auto inline-flex items-center justify-between sm:justify-start gap-4 px-6 py-3.5 bg-black hover:bg-neutral-900 text-white font-extrabold text-xs uppercase tracking-wider border border-white/20 hover:border-white/40 transition-all cursor-pointer group rounded-none"
                >
                  <span className="font-display tracking-widest text-sm">EXPLORE PROGRAMS</span>
                  <ArrowUpRight className="w-4 h-4 text-[#e52e2e] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </button>
              </div>
            </div>

          </div>

          {/* Right Column: 3-4 Vertical Cards Matching Reference Photo */}
          <div className="lg:col-span-8">
            <div className={`grid gap-4 sm:gap-5 ${
              visiblePrograms.length <= 3
                ? 'grid-cols-1 sm:grid-cols-3'
                : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4'
            }`}>
              {visiblePrograms.map((program) => {
                const Icon = program.icon;
                return (
                  <div
                    key={program.id}
                    onClick={() => onEnquireFacility(program.title)}
                    className="group relative rounded-none overflow-hidden bg-[#0c0c0c] border border-white/10 hover:border-[#e52e2e]/60 transition-all duration-300 cursor-pointer flex flex-col justify-end aspect-[3/4.2] shadow-xl"
                  >
                    {/* Background Photography with Zoom Hover */}
                    <img
                      src={program.imageSrc}
                      alt={program.alt}
                      referrerPolicy="no-referrer"
                      className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 brightness-90 group-hover:brightness-100"
                    />

                    {/* Gradient Overlay for Contrast */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-95 group-hover:opacity-90 transition-opacity" />

                    {/* Top-Left Floating Red Square Badge with Icon */}
                    <div className="absolute top-4 left-4 z-10 w-9 h-9 bg-[#e52e2e] flex items-center justify-center text-white shadow-md">
                      <Icon className="w-4 h-4" />
                    </div>

                    {/* Card Content at Bottom */}
                    <div className="relative z-10 p-5 flex items-end justify-between">
                      <div className="pr-2">
                        <h3 className="text-xl sm:text-2xl font-black text-white uppercase font-display tracking-wide leading-tight group-hover:text-white transition-colors">
                          {program.title}
                        </h3>
                        <p className="text-xs text-slate-300 font-sans mt-1 line-clamp-2 leading-relaxed">
                          {program.subtitle}
                        </p>
                      </div>

                      {/* Red Corner Arrow ↗ */}
                      <div className="shrink-0 mb-0.5">
                        <ArrowUpRight className="w-5 h-5 text-[#e52e2e] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>

        {/* Studio Classes & Sauna Strip */}
        <div className="mt-12 p-4 sm:p-5 bg-[#0a0a0a] border border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 bg-[#e52e2e] flex items-center justify-center text-white shrink-0">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs sm:text-sm font-bold text-white uppercase font-display">
                Studio Classes & Spa Amenities Included
              </div>
              <div className="text-xs text-slate-400 font-sans">
                Zumba, Kickboxing, Crossfit, Aerobics, Yoga, Cycling, Sauna & Hot Shower suites on Westend Marg.
              </div>
            </div>
          </div>

          <button
            onClick={() => onEnquireFacility('Studio Classes & Sauna Access')}
            className="px-5 py-2.5 bg-white/10 hover:bg-white/15 text-white border border-white/15 text-xs font-bold uppercase tracking-wider whitespace-nowrap transition-colors cursor-pointer rounded-none font-display"
          >
            Schedule Free Trial Class
          </button>
        </div>

      </div>
    </section>
  );
};
