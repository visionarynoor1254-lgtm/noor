import React from 'react';
import { Palette, Check } from 'lucide-react';
import { DesignTheme } from '../types';
import { THEME_CONFIGS } from '../data/themes';

interface ThemeSwitcherProps {
  currentTheme: DesignTheme;
  onSelectTheme: (theme: DesignTheme) => void;
}

export const ThemeSwitcher: React.FC<ThemeSwitcherProps> = ({ currentTheme, onSelectTheme }) => {
  const themes: DesignTheme[] = ['iron-red', 'electric-volt', 'stealth-gold', 'cobalt-ice'];

  return (
    <div className="fixed top-20 right-4 z-40 hidden sm:flex items-center gap-1.5 p-1.5 bg-black/90 backdrop-blur-md border border-white/20 shadow-2xl">
      <div className="flex items-center gap-1.5 px-2 text-[10px] font-extrabold uppercase tracking-wider text-slate-400 font-display">
        <Palette className="w-3.5 h-3.5" />
        <span>Theme:</span>
      </div>

      <div className="flex items-center gap-1">
        {themes.map((t) => {
          const config = THEME_CONFIGS[t];
          const isSelected = currentTheme === t;
          return (
            <button
              key={t}
              onClick={() => onSelectTheme(t)}
              className={`flex items-center gap-1.5 px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider transition-all cursor-pointer font-display ${
                isSelected
                  ? 'text-white border shadow-sm'
                  : 'text-slate-400 hover:text-white border border-transparent'
              }`}
              style={{
                borderColor: isSelected ? config.primary : 'transparent',
                backgroundColor: isSelected ? config.accentBg : 'transparent',
              }}
              title={config.vibe}
            >
              <span
                className="w-2.5 h-2.5 rounded-full inline-block shrink-0 shadow-sm"
                style={{ backgroundColor: config.primary }}
              />
              <span>{config.name}</span>
              {isSelected && <Check className="w-3 h-3 ml-0.5" style={{ color: config.primary }} />}
            </button>
          );
        })}
      </div>
    </div>
  );
};
