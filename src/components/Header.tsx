import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, MessageSquare, ArrowUpRight, Dumbbell, Star, Palette } from 'lucide-react';
import { GymConfig } from '../types';

interface HeaderProps {
  gymConfig: GymConfig;
  onJoinClick: () => void;
}

export const Header: React.FC<HeaderProps> = ({ gymConfig, onJoinClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'HOME', href: '#home' },
    { label: 'ABOUT', href: '#about' },
    { label: 'TRAINING', href: '#facilities' },
    { label: 'SCHEDULE', href: '#schedule' },
    { label: 'COACHES', href: '#trainers' },
    { label: 'REVIEWS', href: '#reviews' },
    { label: 'CALCULATOR', href: '#calculator' },
    { label: 'PRICING', href: '#training' },
    { label: 'CONTACT', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-black/95 backdrop-blur-md border-b border-white/10 py-3 shadow-2xl'
          : 'bg-gradient-to-b from-black/95 to-transparent py-4 border-b border-white/5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Bar Contract: 3 zones separated by gap-8 */}
        <div className="flex items-center justify-between gap-4 lg:gap-8">
          
          {/* Zone 1: Brand Wordmark with sharp red geometric icon */}
          <a
            href="#home"
            className="flex items-center gap-2.5 text-lg sm:text-2xl font-black tracking-wider text-white uppercase font-display whitespace-nowrap shrink-0 transition-opacity hover:opacity-90"
          >
            <div className="w-8 h-8 bg-[var(--color-primary,#e52e2e)] flex items-center justify-center text-white shrink-0 shadow-[0_0_15px_rgba(229,46,46,0.5)]">
              <Dumbbell className="w-4 h-4" />
            </div>
            <span>PRO ULTIMATE GYMS</span>
            <span className="hidden xl:inline text-xs font-bold text-slate-400 font-sans normal-case tracking-normal pl-1">
              · Saket
            </span>
          </a>

          {/* Zone 2: Navigation Links */}
          <nav className="hidden xl:flex items-center gap-5 text-xs font-bold text-slate-300 tracking-wider">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="whitespace-nowrap shrink-0 transition-colors hover:text-[var(--color-primary,#e52e2e)] font-display uppercase tracking-widest text-[12px]"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: Primary Action - Red Button matching reference */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            <a
              href={`tel:${gymConfig.phone.replace(/[^0-9+]/g, '')}`}
              className="text-xs font-bold text-slate-300 hover:text-white uppercase font-display tracking-wider hidden 2xl:flex items-center gap-1.5"
            >
              <Phone className="w-3.5 h-3.5 text-[var(--color-primary,#e52e2e)]" />
              <span>{gymConfig.phone}</span>
            </a>
            <button
              onClick={onJoinClick}
              className="px-5 py-2.5 bg-[var(--color-primary,#e52e2e)] hover:opacity-90 text-white font-extrabold text-xs uppercase tracking-wider transition-all shadow-[0_0_20px_rgba(229,46,46,0.35)] whitespace-nowrap shrink-0 cursor-pointer flex items-center gap-1.5 rounded-none group"
            >
              <span className="font-display tracking-widest">START TRAINING</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 xl:hidden">
            <button
              onClick={onJoinClick}
              className="px-3 py-1.5 bg-[var(--color-primary,#e52e2e)] text-white font-extrabold text-[11px] uppercase tracking-wider rounded-none hover:opacity-90 transition-colors whitespace-nowrap cursor-pointer flex items-center gap-1"
            >
              <span>JOIN</span>
              <ArrowUpRight className="w-3 h-3" />
            </button>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
              className="p-2 text-slate-300 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary,#e52e2e)] cursor-pointer"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-[#0c0c0c] border-b border-white/10 px-6 pt-4 pb-6 space-y-4 shadow-2xl animate-in slide-in-from-top-4 duration-200">
          <div className="pb-2 border-b border-white/10 text-xs text-slate-400">
            <span className="text-white font-bold font-display uppercase">Pro Ultimate Gyms - Saket</span>
            <div className="text-[11px] text-amber-400 flex items-center gap-1 mt-0.5">
              <Star className="w-3 h-3 fill-amber-400" />
              <span>4.8 Rating (898 Google Reviews)</span>
            </div>
          </div>

          <nav className="flex flex-col space-y-2.5 max-h-[60vh] overflow-y-auto">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-slate-200 hover:text-[var(--color-primary,#e52e2e)] text-sm font-bold uppercase tracking-widest py-1 border-b border-white/5 transition-colors font-display"
              >
                {link.label}
              </a>
            ))}
          </nav>
          
          <div className="pt-2 flex flex-col gap-2.5">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onJoinClick();
              }}
              className="w-full py-3 bg-[var(--color-primary,#e52e2e)] text-white font-extrabold text-xs uppercase tracking-widest text-center hover:opacity-90 transition-colors shadow-md rounded-none flex items-center justify-center gap-1.5"
            >
              <span>START TRAINING NOW</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
            <div className="grid grid-cols-2 gap-2 pt-1">
              <a
                href={`https://wa.me/${gymConfig.whatsappNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(
                  'Hello Pro Ultimate Gyms Saket, I would like to inquire about gym membership, sauna, and trial sessions.'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-1.5 py-2.5 px-3 bg-emerald-600/20 text-emerald-400 border border-emerald-500/30 text-xs font-semibold"
              >
                <MessageSquare className="w-4 h-4" />
                WhatsApp
              </a>
              <a
                href={`tel:${gymConfig.phone.replace(/[^0-9+]/g, '')}`}
                className="flex items-center justify-center gap-1.5 py-2.5 px-3 bg-white/5 text-slate-200 border border-white/10 text-xs font-semibold"
              >
                <Phone className="w-4 h-4" />
                Call Desk
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
