import React from 'react';
import { MapPin, Phone, MessageSquare, Clock, ArrowUp, Dumbbell } from 'lucide-react';
import { GymConfig } from '../types';

interface FooterProps {
  gymConfig: GymConfig;
}

export const Footer: React.FC<FooterProps> = ({ gymConfig }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#000000] border-t border-white/10 text-slate-400 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Col 1: Brand & Bio */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5 text-2xl font-black text-white tracking-wider font-display uppercase">
              <div className="w-7 h-7 bg-[#e52e2e] flex items-center justify-center text-white shrink-0">
                <Dumbbell className="w-3.5 h-3.5" />
              </div>
              <span>BODY FITNESS CLUB</span>
            </div>
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-sm font-sans">
              Premier fitness facility in Daltonganj, Jharkhand. Dedicated to progressive strength training, cardio conditioning, and practical trainer guidance in a clean, motivating environment.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href={`https://wa.me/${gymConfig.whatsappNumber.replace(/[^0-9]/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-1.5 bg-white/5 hover:bg-emerald-600/20 text-emerald-400 border border-white/10 hover:border-emerald-500/30 rounded-none text-xs font-semibold uppercase tracking-wider transition-colors inline-flex items-center gap-1.5 font-display"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>WhatsApp</span>
              </a>
              <a
                href={`tel:${gymConfig.phone.replace(/[^0-9+]/g, '')}`}
                className="px-3.5 py-1.5 bg-white/5 hover:bg-white/10 text-slate-300 border border-white/10 rounded-none text-xs font-semibold uppercase tracking-wider transition-colors inline-flex items-center gap-1.5 font-display"
              >
                <Phone className="w-3.5 h-3.5 text-[#e52e2e]" />
                <span>Call Desk</span>
              </a>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="lg:col-span-3 space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-white font-display">
              Quick Navigation
            </div>
            <ul className="space-y-2 text-xs uppercase tracking-wide font-display">
              <li>
                <a href="#home" className="hover:text-[#e52e2e] transition-colors">Home</a>
              </li>
              <li>
                <a href="#about" className="hover:text-[#e52e2e] transition-colors">About Club</a>
              </li>
              <li>
                <a href="#facilities" className="hover:text-[#e52e2e] transition-colors">Facilities & Equipment</a>
              </li>
              <li>
                <a href="#why-us" className="hover:text-[#e52e2e] transition-colors">Why Choose Us</a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-[#e52e2e] transition-colors">Gym Gallery</a>
              </li>
              <li>
                <a href="#training" className="hover:text-[#e52e2e] transition-colors">Membership Plans</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#e52e2e] transition-colors">Location & Contact</a>
              </li>
            </ul>
          </div>

          {/* Col 3: Hours & Address */}
          <div className="lg:col-span-4 space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-white font-display">
              Club Hours & Address
            </div>
            <div className="space-y-2 text-xs text-slate-400 leading-relaxed font-sans">
              <div className="flex items-start gap-2">
                <Clock className="w-3.5 h-3.5 text-[#e52e2e] shrink-0 mt-0.5" />
                <div>
                  <div className="text-slate-200">{gymConfig.weekdayHours}</div>
                  <div className="text-slate-400">{gymConfig.sundayHours}</div>
                </div>
              </div>
              <div className="flex items-start gap-2 pt-1">
                <MapPin className="w-3.5 h-3.5 text-[#e52e2e] shrink-0 mt-0.5" />
                <span>{gymConfig.address}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar with Back to Top */}
        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400 font-sans">
          <p>© {new Date().getFullYear()} {gymConfig.name}. All rights reserved. Medininagar (Daltonganj), Jharkhand, India.</p>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-slate-400 hover:text-[#e52e2e] transition-colors cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
