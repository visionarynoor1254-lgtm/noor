import React from 'react';
import { ArrowUpRight, Award, ShieldCheck, Dumbbell, Star, MessageSquare } from 'lucide-react';
import { TRAINER_PROFILES } from '../data/classesAndTrainers';
import { GymConfig, ThemeColors } from '../types';

interface TrainersSectionProps {
  gymConfig: GymConfig;
  theme: ThemeColors;
  onEnquireTrainer: (trainerName: string) => void;
}

export const TrainersSection: React.FC<TrainersSectionProps> = ({
  gymConfig,
  theme,
  onEnquireTrainer,
}) => {
  return (
    <section id="trainers" className="py-20 md:py-28 bg-[#050505] border-t border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <div
              className="text-xs font-bold uppercase tracking-widest mb-2 font-display"
              style={{ color: theme.primary }}
            >
              CERTIFIED COACHING STAFF
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white uppercase tracking-tight font-display">
              Meet The Elite Trainers
            </h2>
            <p className="mt-3 text-slate-300 text-base leading-relaxed font-sans">
              Our trainers don't just count reps; they analyze your biomechanics, correct joint alignment, and program progressive overload for lifelong results.
            </p>
          </div>

          <div className="p-3 bg-[#0a0a0a] border border-white/10 flex items-center gap-3 self-start md:self-auto">
            <div className="w-9 h-9 bg-amber-400/10 border border-amber-400/30 flex items-center justify-center text-amber-400 shrink-0">
              <Star className="w-5 h-5 fill-amber-400" />
            </div>
            <div className="text-xs">
              <div className="font-bold text-white uppercase font-display">Celebrated in 898+ Reviews</div>
              <div className="text-slate-400 font-sans">Highlighting form correction & dedication</div>
            </div>
          </div>
        </div>

        {/* Trainers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {TRAINER_PROFILES.map((trainer) => (
            <div
              key={trainer.id}
              className="bg-[#0a0a0a] border border-white/10 hover:border-white/30 transition-all flex flex-col justify-between group overflow-hidden"
            >
              <div>
                {/* Trainer Photo Container */}
                <div className="relative aspect-[3/3.8] overflow-hidden bg-black">
                  <img
                    src={trainer.imageSrc}
                    alt={`${trainer.name} at Pro Ultimate Gyms Saket`}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 brightness-90 group-hover:brightness-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent" />
                  
                  {/* Experience badge */}
                  <div className="absolute top-3 right-3 px-2.5 py-1 bg-black/85 border border-white/15 text-[10px] font-bold text-white uppercase font-display">
                    {trainer.experience}
                  </div>
                </div>

                {/* Trainer Info */}
                <div className="p-5">
                  <h3 className="text-2xl font-black text-white uppercase font-display tracking-wide mb-1">
                    {trainer.name}
                  </h3>
                  <div
                    className="text-xs font-bold uppercase tracking-wider font-display mb-3"
                    style={{ color: theme.primary }}
                  >
                    {trainer.role}
                  </div>

                  <p className="text-xs text-slate-300 font-sans leading-relaxed mb-4">
                    {trainer.specialty}
                  </p>

                  <div className="p-3 bg-black/60 border border-white/5 text-[11px] text-slate-400 font-sans italic border-l-2 mb-2"
                       style={{ borderLeftColor: theme.primary }}>
                    "{trainer.quote}"
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="p-5 pt-0">
                <button
                  type="button"
                  onClick={() => onEnquireTrainer(trainer.name)}
                  className="w-full py-2.5 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-extrabold text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 transition-colors cursor-pointer font-display rounded-none"
                >
                  <span>Train with {trainer.name.split(' ')[1] || trainer.name}</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
