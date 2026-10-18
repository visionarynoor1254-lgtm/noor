import React, { useState } from 'react';
import { Calculator, ArrowRight, Activity, Zap, MessageSquare, CheckCircle2 } from 'lucide-react';
import { GymConfig, ThemeColors } from '../types';

interface FitnessCalculatorProps {
  gymConfig: GymConfig;
  theme: ThemeColors;
}

export const FitnessCalculator: React.FC<FitnessCalculatorProps> = ({ gymConfig, theme }) => {
  const [gender, setGender] = useState<'male' | 'female'>('male');
  const [age, setAge] = useState<number>(26);
  const [height, setHeight] = useState<number>(175);
  const [weight, setWeight] = useState<number>(75);
  const [activity, setActivity] = useState<number>(1.55); // Moderate exercise
  const [goal, setGoal] = useState<'fat-loss' | 'muscle-gain' | 'recomp'>('muscle-gain');

  // BMI Calculation
  const heightInMeters = height / 100;
  const bmi = parseFloat((weight / (heightInMeters * heightInMeters)).toFixed(1));

  let bmiCategory = 'Normal Weight';
  let bmiColor = 'text-emerald-400';
  if (bmi < 18.5) {
    bmiCategory = 'Underweight';
    bmiColor = 'text-amber-400';
  } else if (bmi >= 25 && bmi < 29.9) {
    bmiCategory = 'Overweight / Muscular';
    bmiColor = 'text-amber-400';
  } else if (bmi >= 30) {
    bmiCategory = 'High Body Mass';
    bmiColor = 'text-red-400';
  }

  // BMR via Mifflin-St Jeor Formula
  const bmr = gender === 'male'
    ? 10 * weight + 6.25 * height - 5 * age + 5
    : 10 * weight + 6.25 * height - 5 * age - 161;

  const maintenanceCalories = Math.round(bmr * activity);

  let targetCalories = maintenanceCalories;
  let proteinTarget = Math.round(weight * 2.0); // 2g per kg

  if (goal === 'fat-loss') {
    targetCalories = Math.round(maintenanceCalories * 0.8); // 20% deficit
    proteinTarget = Math.round(weight * 2.2);
  } else if (goal === 'muscle-gain') {
    targetCalories = Math.round(maintenanceCalories * 1.15); // 15% surplus
    proteinTarget = Math.round(weight * 2.0);
  } else {
    targetCalories = maintenanceCalories;
    proteinTarget = Math.round(weight * 2.1);
  }

  const handleShareToWhatsApp = () => {
    const text = `Hi Pro Ultimate Gyms Saket! I just used your Fitness Calculator:\n\n• Stats: ${weight}kg, ${height}cm, Age ${age} (${gender})\n• BMI: ${bmi} (${bmiCategory})\n• Target Goal: ${goal.toUpperCase()}\n• Target Calories: ~${targetCalories} kcal/day (Protein: ~${proteinTarget}g)\n\nI would like to discuss a customized workout plan and tour the gym on Westend Marg!`;
    const cleanNumber = gymConfig.whatsappNumber.replace(/[^0-9]/g, '');
    window.open(`https://wa.me/${cleanNumber}?text=${encodeURIComponent(text)}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="calculator" className="py-20 md:py-28 bg-[#000000] border-t border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div
            className="text-xs font-bold uppercase tracking-widest mb-2 font-display"
            style={{ color: theme.primary }}
          >
            INTERACTIVE ASSESSMENT TOOL
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white uppercase tracking-tight font-display">
            Calculate Your Target Metrics
          </h2>
          <p className="mt-3 text-slate-300 text-base leading-relaxed font-sans">
            Calculate your BMI, daily calorie baseline, and ideal protein intake to accelerate your progress at Pro Ultimate Gyms Saket.
          </p>
        </div>

        {/* 2-Column Calculator Box */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 bg-[#0a0a0a] border border-white/10 p-6 sm:p-10 shadow-2xl">
          
          {/* Left Column: Sliders & Controls */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Gender & Goal Tabs */}
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 font-display mb-1.5">
                  Biological Gender
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => setGender('male')}
                    className={`py-2 text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer font-display ${
                      gender === 'male'
                        ? 'text-white border'
                        : 'bg-black text-slate-400 border border-white/10 hover:text-white'
                    }`}
                    style={{
                      borderColor: gender === 'male' ? theme.primary : undefined,
                      backgroundColor: gender === 'male' ? theme.accentBg : undefined,
                    }}
                  >
                    Male
                  </button>
                  <button
                    type="button"
                    onClick={() => setGender('female')}
                    className={`py-2 text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer font-display ${
                      gender === 'female'
                        ? 'text-white border'
                        : 'bg-black text-slate-400 border border-white/10 hover:text-white'
                    }`}
                    style={{
                      borderColor: gender === 'female' ? theme.primary : undefined,
                      backgroundColor: gender === 'female' ? theme.accentBg : undefined,
                    }}
                  >
                    Female
                  </button>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 font-display mb-1.5">
                  Primary Goal
                </label>
                <select
                  value={goal}
                  onChange={(e) => setGoal(e.target.value as any)}
                  className="w-full py-2.5 px-3 bg-black border border-white/10 text-xs text-white focus:outline-none focus:border-white/30 font-display uppercase tracking-wider"
                >
                  <option value="muscle-gain">Muscle Hypertrophy (+15%)</option>
                  <option value="fat-loss">Fat Loss Shred (-20%)</option>
                  <option value="recomp">Body Recomposition</option>
                </select>
              </div>
            </div>

            {/* Height Slider */}
            <div>
              <div className="flex justify-between text-xs font-bold uppercase text-slate-300 font-display mb-1.5">
                <span>Height</span>
                <span className="text-white font-mono">{height} cm ({Math.floor(height / 30.48)}' {Math.round((height % 30.48) / 2.54)}")</span>
              </div>
              <input
                type="range"
                min="130"
                max="220"
                value={height}
                onChange={(e) => setHeight(Number(e.target.value))}
                className="w-full accent-red-600 cursor-pointer"
                style={{ accentColor: theme.primary }}
              />
            </div>

            {/* Weight Slider */}
            <div>
              <div className="flex justify-between text-xs font-bold uppercase text-slate-300 font-display mb-1.5">
                <span>Current Weight</span>
                <span className="text-white font-mono">{weight} kg ({Math.round(weight * 2.20462)} lbs)</span>
              </div>
              <input
                type="range"
                min="40"
                max="160"
                value={weight}
                onChange={(e) => setWeight(Number(e.target.value))}
                className="w-full cursor-pointer"
                style={{ accentColor: theme.primary }}
              />
            </div>

            {/* Age Slider */}
            <div>
              <div className="flex justify-between text-xs font-bold uppercase text-slate-300 font-display mb-1.5">
                <span>Age</span>
                <span className="text-white font-mono">{age} Years</span>
              </div>
              <input
                type="range"
                min="15"
                max="80"
                value={age}
                onChange={(e) => setAge(Number(e.target.value))}
                className="w-full cursor-pointer"
                style={{ accentColor: theme.primary }}
              />
            </div>

          </div>

          {/* Right Column: Dynamic Assessment Card */}
          <div className="lg:col-span-5 bg-black p-6 sm:p-8 border border-white/10 flex flex-col justify-between">
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-slate-400 font-display mb-1">
                Your Calculated Profile
              </div>
              <h3 className="text-2xl font-black text-white uppercase font-display mb-6">
                Target Nutrition & Split
              </h3>

              <div className="grid grid-cols-2 gap-4 mb-6">
                {/* BMI Card */}
                <div className="p-4 bg-[#0e0e0e] border border-white/5">
                  <div className="text-[11px] font-bold uppercase text-slate-400 font-display">
                    Body Mass Index
                  </div>
                  <div className="text-3xl font-black text-white font-display tabular-nums mt-1">
                    {bmi}
                  </div>
                  <div className={`text-xs font-semibold mt-0.5 ${bmiColor}`}>
                    {bmiCategory}
                  </div>
                </div>

                {/* Target Calories */}
                <div className="p-4 bg-[#0e0e0e] border border-white/5">
                  <div className="text-[11px] font-bold uppercase text-slate-400 font-display">
                    Target Calories
                  </div>
                  <div
                    className="text-3xl font-black font-display tabular-nums mt-1"
                    style={{ color: theme.primary }}
                  >
                    {targetCalories}
                  </div>
                  <div className="text-xs text-slate-400 font-sans">
                    kcal / day
                  </div>
                </div>
              </div>

              {/* Recommended Daily Protein & Split */}
              <div className="space-y-3 p-4 bg-[#0e0e0e] border border-white/5 text-xs text-slate-300 font-sans">
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">Daily Protein Target:</span>
                  <strong className="text-white font-mono">{proteinTarget}g / day</strong>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">Recommended Saket Facility:</span>
                  <span className="text-white font-bold">Free Weights & Turf</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">Post-Workout Recovery:</span>
                  <span className="text-white font-semibold">Sauna & Steam Session</span>
                </div>
              </div>
            </div>

            {/* Action to send to WhatsApp */}
            <div className="pt-6">
              <button
                type="button"
                onClick={handleShareToWhatsApp}
                className="w-full py-3.5 px-4 text-white font-extrabold text-xs uppercase tracking-widest flex items-center justify-center gap-2 transition-all cursor-pointer font-display"
                style={{ backgroundColor: theme.primary }}
              >
                <MessageSquare className="w-4 h-4" />
                <span>Discuss Plan With Coach Zain (WhatsApp)</span>
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
