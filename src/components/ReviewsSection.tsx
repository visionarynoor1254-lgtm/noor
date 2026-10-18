import React from 'react';
import { Star, ShieldCheck, MapPin, CheckCircle2, ThumbsUp, Sparkles } from 'lucide-react';
import { GymConfig } from '../types';

interface ReviewsSectionProps {
  gymConfig: GymConfig;
}

export const ReviewsSection: React.FC<ReviewsSectionProps> = ({ gymConfig }) => {
  return (
    <section className="py-20 md:py-24 bg-[#050505] border-y border-white/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Grid: Big Rating Score & Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16">
          <div className="lg:col-span-7">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#e52e2e] font-display mb-2">
              <span>GOOGLE REVIEWS & MEMBER REPUTATION</span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white uppercase tracking-tight font-display leading-[0.92]">
              RATED 4.8 / 5.0<br />
              <span className="text-slate-400">BY 898+ ATHLETES & MEMBERS</span>
            </h2>
            <p className="mt-4 text-sm sm:text-base text-slate-300 leading-relaxed font-sans max-w-xl">
              Pro Ultimate Gyms - Saket is recognized across South Delhi for world-class equipment, spotless hygiene, certified coaching, and premium sauna and shower amenities.
            </p>
          </div>

          {/* Right Summary Badge Card */}
          <div className="lg:col-span-5 flex flex-col sm:flex-row items-stretch gap-4 p-6 bg-[#0a0a0a] border border-white/15">
            <div className="flex flex-col items-center justify-center p-4 bg-black border border-white/10 text-center shrink-0 min-w-[130px]">
              <div className="text-5xl font-black text-white font-display tabular-nums">4.8</div>
              <div className="flex items-center gap-1 text-amber-400 my-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                ))}
              </div>
              <div className="text-[11px] font-bold text-slate-400 font-display uppercase tracking-wider">
                898 Reviews
              </div>
            </div>

            <div className="flex flex-col justify-center text-xs text-slate-300 space-y-2">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#e52e2e] shrink-0" />
                <span className="font-semibold text-white">Sauna & Hot Shower Rooms</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#e52e2e] shrink-0" />
                <span className="font-semibold text-white">Dedicated On-site Parking</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#e52e2e] shrink-0" />
                <span className="font-semibold text-white">Near Saket Metro Station (Saidulajab)</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#e52e2e] shrink-0" />
                <span className="font-semibold text-white">Open Mon–Sat until 11:00 PM</span>
              </div>
            </div>
          </div>
        </div>

        {/* Real Reviews Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {gymConfig.reviews.map((rev, idx) => (
            <div
              key={idx}
              className="p-6 bg-[#0a0a0a] border border-white/10 hover:border-[#e52e2e]/40 transition-colors flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-0.5 text-amber-400">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 fill-amber-400" />
                    ))}
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 font-display">
                    {rev.date}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-sans italic">
                  "{rev.text}"
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-white/10 flex items-center justify-between">
                <div>
                  <div className="text-xs font-bold text-white font-display uppercase tracking-wider">
                    {rev.author}
                  </div>
                  <div className="text-[10px] text-slate-400 font-sans">
                    {rev.role}
                  </div>
                </div>
                <div className="w-6 h-6 rounded-full bg-white/5 flex items-center justify-center text-emerald-400">
                  <ShieldCheck className="w-3.5 h-3.5" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Popular Features Pill Strip */}
        <div className="mt-12 p-4 bg-[#0a0a0a] border border-white/10 flex flex-wrap items-center justify-between gap-4 text-xs">
          <div className="flex items-center gap-2 text-white font-bold font-display uppercase tracking-wider">
            <Sparkles className="w-4 h-4 text-[#e52e2e]" />
            <span>Member Tag Highlights:</span>
          </div>
          <div className="flex flex-wrap gap-2 text-slate-300 font-sans text-xs">
            {[
              "Form Correction",
              "Personal Training",
              "Spacious Gym",
              "Clean Facilities",
              "Sauna & Showers",
              "Zumba Classes",
              "Heavy Free Weights",
              "Challenging Workouts",
            ].map((tag, i) => (
              <span
                key={i}
                className="px-2.5 py-1 bg-white/5 border border-white/10 text-slate-300 uppercase tracking-wide text-[11px] font-semibold"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
