import React, { useState } from 'react';
import { GymConfig, DesignTheme } from './types';
import { DEFAULT_GYM_CONFIG } from './data/gymData';
import { THEME_CONFIGS } from './data/themes';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Facilities } from './components/Facilities';
import { ClassSchedule } from './components/ClassSchedule';
import { TrainersSection } from './components/TrainersSection';
import { FitnessCalculator } from './components/FitnessCalculator';
import { ReviewsSection } from './components/ReviewsSection';
import { WhyChooseUs } from './components/WhyChooseUs';
import { Gallery } from './components/Gallery';
import { MembershipEnquiry } from './components/MembershipEnquiry';
import { ContactLocation } from './components/ContactLocation';
import { Footer } from './components/Footer';
import { JoinModal } from './components/JoinModal';
import { OwnerEditBar } from './components/OwnerEditBar';
import { ThemeSwitcher } from './components/ThemeSwitcher';

export default function App() {
  const [gymConfig, setGymConfig] = useState<GymConfig>(() => {
    try {
      const saved = localStorage.getItem('pro_ultimate_saket_config');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (parsed.name?.includes('Pro Ultimate')) {
          return parsed;
        }
      }
    } catch {
      // Fallback to default
    }
    return DEFAULT_GYM_CONFIG;
  });

  const [currentTheme, setCurrentTheme] = useState<DesignTheme>(() => {
    try {
      const saved = localStorage.getItem('pro_ultimate_theme') as DesignTheme;
      if (saved && (saved === 'iron-red' || saved === 'electric-volt' || saved === 'stealth-gold' || saved === 'cobalt-ice')) {
        return saved;
      }
    } catch {
      // Default
    }
    return 'iron-red';
  });

  const [isJoinModalOpen, setIsJoinModalOpen] = useState(false);
  const [selectedPlanForModal, setSelectedPlanForModal] = useState<string | undefined>(undefined);

  const activeThemeColors = THEME_CONFIGS[currentTheme];

  const handleSelectTheme = (theme: DesignTheme) => {
    setCurrentTheme(theme);
    try {
      localStorage.setItem('pro_ultimate_theme', theme);
    } catch {
      // Ignore
    }
  };

  const handleUpdateConfig = (newConfig: GymConfig) => {
    setGymConfig(newConfig);
    try {
      localStorage.setItem('pro_ultimate_saket_config', JSON.stringify(newConfig));
    } catch {
      // Ignore storage errors
    }
  };

  const handleOpenJoin = (planName?: string) => {
    setSelectedPlanForModal(planName);
    setIsJoinModalOpen(true);
  };

  const handleEnquireFacility = (facilityTitle: string) => {
    setSelectedPlanForModal(`Enquiry: ${facilityTitle}`);
    setIsJoinModalOpen(true);
  };

  return (
    <div
      className="min-h-screen bg-[#000000] text-slate-100 flex flex-col font-sans"
      style={{
        // CSS variable for global theme accents
        // @ts-ignore
        '--color-primary': activeThemeColors.primary,
      }}
    >
      {/* Design Style Switcher Pill */}
      <ThemeSwitcher
        currentTheme={currentTheme}
        onSelectTheme={handleSelectTheme}
      />

      {/* Top Bar Header */}
      <Header
        gymConfig={gymConfig}
        onJoinClick={() => handleOpenJoin()}
      />

      {/* Main Content Flow */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          gymConfig={gymConfig}
          onJoinClick={() => handleOpenJoin()}
        />

        {/* About Section */}
        <About gymConfig={gymConfig} />

        {/* Facilities & Disciplines Section */}
        <Facilities
          gymConfig={gymConfig}
          onEnquireFacility={handleEnquireFacility}
        />

        {/* Live Weekly Class Schedule Timetable */}
        <ClassSchedule
          gymConfig={gymConfig}
          theme={activeThemeColors}
        />

        {/* Elite Trainers Spotlight */}
        <TrainersSection
          gymConfig={gymConfig}
          theme={activeThemeColors}
          onEnquireTrainer={(name) => handleOpenJoin(`Personal Training with ${name}`)}
        />

        {/* Reviews Section: 4.8 Rating with 898 Google Reviews */}
        <div id="reviews">
          <ReviewsSection gymConfig={gymConfig} />
        </div>

        {/* Interactive Fitness & Calorie Target Calculator */}
        <FitnessCalculator
          gymConfig={gymConfig}
          theme={activeThemeColors}
        />

        {/* Why Choose Us */}
        <WhyChooseUs gymConfig={gymConfig} />

        {/* Gym Gallery */}
        <Gallery />

        {/* Membership Enquiry & Bottom Banner */}
        <MembershipEnquiry
          gymConfig={gymConfig}
          onOpenJoinModal={handleOpenJoin}
        />

        {/* Contact & Location with Google Map */}
        <ContactLocation gymConfig={gymConfig} />
      </main>

      {/* Footer */}
      <Footer gymConfig={gymConfig} />

      {/* Join / Quick Connect Modal */}
      <JoinModal
        isOpen={isJoinModalOpen}
        onClose={() => setIsJoinModalOpen(false)}
        gymConfig={gymConfig}
        initialPlan={selectedPlanForModal}
      />

      {/* Gym Owner Realtime Edit & Test Bar */}
      <OwnerEditBar
        gymConfig={gymConfig}
        onUpdateConfig={handleUpdateConfig}
      />
    </div>
  );
}
