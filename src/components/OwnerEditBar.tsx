import React, { useState } from 'react';
import { Settings2, X, Check, RotateCcw, AlertTriangle, Phone, MessageSquare, MapPin } from 'lucide-react';
import { GymConfig } from '../types';
import { DEFAULT_GYM_CONFIG } from '../data/gymData';

interface OwnerEditBarProps {
  gymConfig: GymConfig;
  onUpdateConfig: (newConfig: GymConfig) => void;
}

export const OwnerEditBar: React.FC<OwnerEditBarProps> = ({ gymConfig, onUpdateConfig }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [phone, setPhone] = useState(gymConfig.phone);
  const [whatsapp, setWhatsapp] = useState(gymConfig.whatsappNumber);
  const [address, setAddress] = useState(gymConfig.address);
  const [weekdayHours, setWeekdayHours] = useState(gymConfig.weekdayHours);
  const [savedNotice, setSavedNotice] = useState(false);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    const updated: GymConfig = {
      ...gymConfig,
      phone,
      whatsappNumber: whatsapp,
      address,
      weekdayHours,
      isPlaceholderPhone: false,
    };
    onUpdateConfig(updated);
    setSavedNotice(true);
    setTimeout(() => {
      setSavedNotice(false);
      setIsOpen(false);
    }, 1200);
  };

  const handleReset = () => {
    onUpdateConfig(DEFAULT_GYM_CONFIG);
    setPhone(DEFAULT_GYM_CONFIG.phone);
    setWhatsapp(DEFAULT_GYM_CONFIG.whatsappNumber);
    setAddress(DEFAULT_GYM_CONFIG.address);
    setWeekdayHours(DEFAULT_GYM_CONFIG.weekdayHours);
  };

  return (
    <>
      {/* Discreet review badge at bottom-left */}
      <div className="fixed bottom-4 left-4 z-40 print:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center gap-2 px-3 py-2 bg-black/90 hover:bg-neutral-900 text-slate-200 border border-white/20 shadow-xl text-xs font-semibold backdrop-blur-md transition-all cursor-pointer group rounded-none"
          title="Reviewer & Gym Owner Quick Setup"
        >
          <Settings2 className="w-4 h-4 text-[#e52e2e] group-hover:rotate-45 transition-transform" />
          <span className="hidden sm:inline font-display uppercase tracking-wider">Owner Review: Edit Contact & Address</span>
          <span className="sm:hidden font-display uppercase">Edit Info</span>
          {gymConfig.isPlaceholderPhone && (
            <span className="w-2 h-2 rounded-full bg-[#e52e2e]" title="Using editable placeholder numbers" />
          )}
        </button>
      </div>

      {/* Slide-out configuration drawer */}
      {isOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
        >
          <div className="bg-[#0c0c0c] border border-white/20 rounded-none max-w-lg w-full p-6 shadow-2xl text-white relative">
            <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-5">
              <div className="flex items-center gap-2">
                <Settings2 className="w-5 h-5 text-[#e52e2e]" />
                <h3 className="text-xl font-bold uppercase font-display">
                  Gym Owner Information Setup
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="text-slate-400 hover:text-white p-1 hover:bg-white/5 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-3 bg-red-500/10 border border-red-500/20 text-xs text-red-300 flex items-start gap-2.5 mb-5 font-sans">
              <AlertTriangle className="w-4 h-4 shrink-0 mt-0.5 text-[#e52e2e]" />
              <div>
                <strong>Editable Placeholder Notice:</strong> Enter your verified phone, WhatsApp number, and address below to test direct calling and instant WhatsApp chats with your actual contact number!
              </div>
            </div>

            {savedNotice ? (
              <div className="p-6 bg-emerald-500/10 border border-emerald-500/30 text-center text-emerald-400 space-y-2">
                <Check className="w-8 h-8 mx-auto" />
                <div className="font-bold text-sm">Updated Successfully!</div>
                <div className="text-xs text-slate-300">All call, WhatsApp, and location buttons are now updated.</div>
              </div>
            ) : (
              <form onSubmit={handleSave} className="space-y-4 font-sans">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider font-display mb-1">
                    Direct Phone Number
                  </label>
                  <input
                    type="text"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+91 94311 00000"
                    className="w-full px-3 py-2 bg-[#000000] border border-white/15 rounded-none text-sm text-white focus:outline-none focus:border-[#e52e2e]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider font-display mb-1">
                    WhatsApp Number (with country code e.g. +919431100000)
                  </label>
                  <input
                    type="text"
                    value={whatsapp}
                    onChange={(e) => setWhatsapp(e.target.value)}
                    placeholder="+919431100000"
                    className="w-full px-3 py-2 bg-[#000000] border border-white/15 rounded-none text-sm text-white focus:outline-none focus:border-[#e52e2e]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider font-display mb-1">
                    Full Gym Address
                  </label>
                  <input
                    type="text"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    placeholder="Full street address in Daltonganj..."
                    className="w-full px-3 py-2 bg-[#000000] border border-white/15 rounded-none text-sm text-white focus:outline-none focus:border-[#e52e2e]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider font-display mb-1">
                    Weekday Hours
                  </label>
                  <input
                    type="text"
                    value={weekdayHours}
                    onChange={(e) => setWeekdayHours(e.target.value)}
                    placeholder="Monday – Saturday: 5:30 AM – 10:00 PM"
                    className="w-full px-3 py-2 bg-[#000000] border border-white/15 rounded-none text-sm text-white focus:outline-none focus:border-[#e52e2e]"
                  />
                </div>

                <div className="pt-3 border-t border-white/10 flex items-center justify-between gap-3">
                  <button
                    type="button"
                    onClick={handleReset}
                    className="px-3 py-2 bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white rounded-none text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span>Reset Defaults</span>
                  </button>

                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => setIsOpen(false)}
                      className="px-4 py-2 bg-white/5 hover:bg-white/10 text-slate-300 rounded-none text-xs font-semibold transition-colors cursor-pointer"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="px-5 py-2 bg-[#e52e2e] hover:bg-[#d02222] text-white font-extrabold text-xs uppercase tracking-wider rounded-none transition-colors cursor-pointer font-display"
                    >
                      Save & Apply
                    </button>
                  </div>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </>
  );
};
