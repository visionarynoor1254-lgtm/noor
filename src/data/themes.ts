import { DesignTheme, ThemeColors } from '../types';

export const THEME_CONFIGS: Record<DesignTheme, ThemeColors> = {
  'iron-red': {
    primary: '#e52e2e',
    primaryHover: '#d02222',
    glow: 'rgba(229, 46, 46, 0.4)',
    accentBg: 'rgba(229, 46, 46, 0.12)',
    accentBorder: 'rgba(229, 46, 46, 0.4)',
    badgeBg: 'bg-[#e52e2e]',
    name: 'Iron Red',
    vibe: 'Raw Athletic Strength & Power',
  },
  'electric-volt': {
    primary: '#c6ff00',
    primaryHover: '#b2ea00',
    glow: 'rgba(198, 255, 0, 0.35)',
    accentBg: 'rgba(198, 255, 0, 0.12)',
    accentBorder: 'rgba(198, 255, 0, 0.35)',
    badgeBg: 'bg-[#c6ff00]',
    name: 'Cyber Volt',
    vibe: 'Bio-mechanical High-Tech Sport',
  },
  'stealth-gold': {
    primary: '#eab308',
    primaryHover: '#ca8a04',
    glow: 'rgba(234, 179, 8, 0.35)',
    accentBg: 'rgba(234, 179, 8, 0.12)',
    accentBorder: 'rgba(234, 179, 8, 0.4)',
    badgeBg: 'bg-[#eab308]',
    name: 'Stealth Gold',
    vibe: 'Luxury Wellness, Sauna & Spa',
  },
  'cobalt-ice': {
    primary: '#06b6d4',
    primaryHover: '#0891b2',
    glow: 'rgba(6, 182, 212, 0.35)',
    accentBg: 'rgba(6, 182, 212, 0.12)',
    accentBorder: 'rgba(6, 182, 212, 0.4)',
    badgeBg: 'bg-[#06b6d4]',
    name: 'Cobalt Ice',
    vibe: 'Hyrox Endurance & Precision',
  },
};
