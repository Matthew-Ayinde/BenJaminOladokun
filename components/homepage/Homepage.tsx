'use client';

import React from 'react';
import Navigation from '@/components/sections/Navigation';
import HeroSection from '@/components/sections/HeroSection';
import StatsSection from '@/components/sections/StatsSection';
import AboutSection from '@/components/sections/AboutSection';
import JourneySection from '@/components/sections/JourneySection';
import AchievementsSection from '@/components/sections/AchievementsSection';
import SpeakingSection from '@/components/sections/SpeakingSection';
import ContactSection from '@/components/sections/ContactSection';
import Footer from '@/components/sections/Footer';

// Main Luxury Homepage Component
const Homepage = () => {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden px-0">
      <Navigation />

      <HeroSection />
      <StatsSection />
      <AboutSection />
      <JourneySection />
      <AchievementsSection />
      <SpeakingSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Homepage;
