import React, { useState } from 'react';
import { Calendar, Clock, MapPin, User, ArrowUpRight, Flame, Sparkles } from 'lucide-react';
import { CLASS_SESSIONS } from '../data/classesAndTrainers';
import { GymConfig, ThemeColors } from '../types';

interface ClassScheduleProps {
  gymConfig: GymConfig;
  theme: ThemeColors;
}

export const ClassSchedule: React.FC<ClassScheduleProps> = ({ gymConfig, theme }) => {
  const [selectedDay, setSelectedDay] = useState<string>('Mon');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  const categories = ['All', 'Crossfit', 'Zumba', 'Kickboxing', 'HIIT', 'Cycling', 'Yoga'];

  const filteredClasses = CLASS_SESSIONS.filter((c) => {
    const matchesDay = c.days.includes(selectedDay);
    const matchesCat = selectedCategory === 'All' || c.category === selectedCategory;
    return matchesDay && matchesCat;
  });

  const handleBookClass = (classTitle: string, time: string) => {
    const text = `Hi Pro Ultimate Gyms Saket! I would like to book a spot/trial for "${classTitle}" on ${selectedDay} at ${time}. Please confirm seat availability.`;
    const cleanNumber = gymConfig.whatsappNumber.replace(/[^0-9]/g, '');
    window.open(`https://wa.me/${cleanNumber}?text=${encodeURIComponent(text)}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="schedule" className="py-20 md:py-28 bg-[#000000] border-t border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div
              className="text-xs font-bold uppercase tracking-widest mb-2 font-display"
              style={{ color: theme.primary }}
            >
              WEEKLY TIMETABLE & STUDIO CLASSES
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white uppercase tracking-tight font-display">
              Live Class Schedule
            </h2>
            <p className="mt-3 text-slate-300 text-base max-w-2xl leading-relaxed font-sans">
              Experience the energy of group workouts on Westend Marg. All members enjoy access to daily Crossfit, Zumba, Kickboxing, HIIT, Cycling, and Yoga sessions.
            </p>
          </div>

          {/* Day Selector Buttons */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-[#0c0c0c] border border-white/10">
            {days.map((day) => (
              <button
                key={day}
                onClick={() => setSelectedDay(day)}
                className={`px-3.5 py-2 text-xs font-bold uppercase tracking-wider transition-all cursor-pointer font-display ${
                  selectedDay === day
                    ? 'text-white font-extrabold shadow-sm'
                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                }`}
                style={{
                  backgroundColor: selectedDay === day ? theme.primary : 'transparent',
                }}
              >
                {day}
              </button>
            ))}
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1.5 text-xs font-bold uppercase tracking-wider transition-all cursor-pointer font-display ${
                selectedCategory === cat
                  ? 'border text-white'
                  : 'bg-white/5 text-slate-400 hover:text-white border border-transparent'
              }`}
              style={{
                borderColor: selectedCategory === cat ? theme.primary : 'transparent',
                backgroundColor: selectedCategory === cat ? theme.accentBg : 'rgba(255,255,255,0.03)',
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Classes Table / Cards */}
        {filteredClasses.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredClasses.map((item) => (
              <div
                key={item.id}
                className="p-6 bg-[#0a0a0a] border border-white/10 hover:border-white/25 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span
                      className="text-[10px] font-bold uppercase tracking-widest px-2.5 py-0.5 font-display"
                      style={{
                        backgroundColor: theme.accentBg,
                        color: theme.primary,
                        border: `1px solid ${theme.accentBorder}`,
                      }}
                    >
                      {item.category}
                    </span>
                    <span className="text-xs text-slate-400 font-sans flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{item.duration}</span>
                    </span>
                  </div>

                  <h3 className="text-2xl font-black text-white uppercase font-display tracking-wide mb-2">
                    {item.title}
                  </h3>

                  <div className="space-y-1.5 text-xs text-slate-300 font-sans my-4">
                    <div className="flex items-center gap-2">
                      <Clock className="w-3.5 h-3.5 text-slate-400" />
                      <span className="font-semibold text-white">{item.time}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <User className="w-3.5 h-3.5 text-slate-400" />
                      <span>Coach: <strong className="text-white">{item.trainer}</strong></span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-3.5 h-3.5 text-slate-400" />
                      <span className="text-slate-400">{item.room} · Saket</span>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                  <span className="text-[11px] font-bold uppercase text-slate-400 font-display">
                    Intensity: <span className="text-white">{item.intensity}</span>
                  </span>
                  <button
                    onClick={() => handleBookClass(item.title, item.time)}
                    className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider font-display transition-colors cursor-pointer group-hover:underline"
                    style={{ color: theme.primary }}
                  >
                    <span>Reserve Spot</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="p-12 bg-[#0a0a0a] border border-white/10 text-center space-y-3">
            <Sparkles className="w-8 h-8 text-slate-500 mx-auto" />
            <h4 className="text-xl font-bold uppercase text-white font-display">
              No specific group classes for this filter on {selectedDay}
            </h4>
            <p className="text-xs text-slate-400 font-sans max-w-md mx-auto">
              The main strength floor, cardio deck, and sauna remain open throughout all operating hours (5:30 AM – 11:00 PM).
            </p>
          </div>
        )}

      </div>
    </section>
  );
};
