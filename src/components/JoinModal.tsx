import React, { useState } from 'react';
import { X, MessageSquare, Phone, CheckCircle2, ArrowUpRight } from 'lucide-react';
import { GymConfig } from '../types';

interface JoinModalProps {
  isOpen: boolean;
  onClose: () => void;
  gymConfig: GymConfig;
  initialPlan?: string;
}

export const JoinModal: React.FC<JoinModalProps> = ({
  isOpen,
  onClose,
  gymConfig,
  initialPlan,
}) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleWhatsApp = () => {
    const text = `Hi Body Fitness Club, I would like to join the gym in Daltonganj! ${
      initialPlan ? `Interested plan: ${initialPlan}.` : ''
    } Please let me know how to get started and when I can visit for a floor session.`;
    const cleanNumber = gymConfig.whatsappNumber.replace(/[^0-9]/g, '');
    window.open(`https://wa.me/${cleanNumber}?text=${encodeURIComponent(text)}`, '_blank', 'noopener,noreferrer');
    onClose();
  };

  const handleCall = () => {
    window.location.href = `tel:${gymConfig.phone.replace(/[^0-9+]/g, '')}`;
    onClose();
  };

  const handleCallbackSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) return;
    setSubmitted(true);
    setTimeout(() => {
      onClose();
      setSubmitted(false);
      setName('');
      setPhone('');
    }, 2200);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      onClick={onClose}
      className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-[#0c0c0c] border border-white/20 rounded-none max-w-lg w-full p-6 sm:p-8 shadow-2xl relative text-white"
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-5 right-5 text-slate-400 hover:text-white transition-colors p-1 hover:bg-white/5 cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="mb-6">
          <div className="text-xs font-bold uppercase text-[#e52e2e] font-display tracking-wider mb-1">
            MEMBERSHIP ENROLLMENT
          </div>
          <h3 className="text-3xl sm:text-4xl font-black uppercase font-display">
            Join Body Fitness Club
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 mt-1 font-sans">
            {initialPlan
              ? `You selected: ${initialPlan}. Connect with our desk to activate.`
              : 'Take the first step towards building strength and confidence in Daltonganj.'}
          </p>
        </div>

        {submitted ? (
          <div className="p-6 bg-[#141414] border border-[#e52e2e]/40 text-center space-y-3">
            <CheckCircle2 className="w-10 h-10 text-[#e52e2e] mx-auto" />
            <h4 className="text-xl font-bold uppercase font-display">Callback Request Received!</h4>
            <p className="text-xs text-slate-300 font-sans">
              Our Daltonganj desk will call you shortly at <span className="text-white font-semibold">{phone}</span>.
            </p>
          </div>
        ) : (
          <div className="space-y-4">
            {/* Direct Connect Options */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <button
                type="button"
                onClick={handleWhatsApp}
                className="py-3.5 px-4 bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-md cursor-pointer rounded-none font-display text-sm"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Chat on WhatsApp</span>
              </button>

              <button
                type="button"
                onClick={handleCall}
                className="py-3.5 px-4 bg-white/10 hover:bg-white/15 text-white border border-white/15 font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer rounded-none font-display text-sm"
              >
                <Phone className="w-4 h-4 text-[#e52e2e]" />
                <span>Call Desk Now</span>
              </button>
            </div>

            {/* Divider */}
            <div className="relative my-4">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-white/10" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-[#0c0c0c] px-3 text-slate-400 font-bold font-display">
                  Or request a callback
                </span>
              </div>
            </div>

            {/* Callback form */}
            <form onSubmit={handleCallbackSubmit} className="space-y-3">
              <div>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your Name"
                  className="w-full px-3.5 py-2.5 bg-[#000000] border border-white/15 rounded-none text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#e52e2e] font-sans"
                />
              </div>
              <div>
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="Your 10-digit Phone Number"
                  className="w-full px-3.5 py-2.5 bg-[#000000] border border-white/15 rounded-none text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#e52e2e] font-sans"
                />
              </div>
              <button
                type="submit"
                className="w-full py-3.5 bg-[#e52e2e] hover:bg-[#d02222] text-white font-extrabold text-xs uppercase tracking-widest transition-colors flex items-center justify-center gap-1.5 cursor-pointer rounded-none font-display text-sm"
              >
                <span>Request Front Desk Call</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
