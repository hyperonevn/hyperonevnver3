import React, { useEffect, useState } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HeroSection } from './components/sections/HeroSection';
import { OurStorySection } from './components/sections/OurStorySection';
import { HonoraryCoFounderSection } from './components/sections/HonoraryCoFounderSection';

// 🌟 THÊM 3 SECTION MỚI
import { MembershipSection } from './components/sections/MembershipSection';

import { WhyHyperOneSection } from './components/sections/WhyHyperOneSection';
import { HowWeWorkSection } from './components/sections/HowWeWorkSection';
import { TechnologyStackSection } from './components/sections/TechnologyStackSection';

import { CoreValuesSection } from './components/sections/CoreValuesSection';
import { CompanyCultureSection } from './components/sections/CompanyCultureSection';

import { AboutSection } from './components/sections/AboutSection';
import { SolutionsSection } from './components/sections/SolutionsSection';
import { MilestonesSection } from './components/sections/MilestonesSection';
import { EcosystemSection } from './components/sections/EcosystemSection';
import { HyperMESection } from './components/sections/HyperMESection';
import { PhilosophySection } from './components/sections/PhilosophySection';
import { FounderSection } from './components/sections/FounderSection';
import { PartnersSection } from './components/sections/PartnersSection';
import { CareerSection } from './components/sections/CareerSection';
import { MediaSection } from './components/sections/MediaSection';
import { ContactSection } from './components/sections/ContactSection';

import { LanguageProvider } from './context/LanguageContext';
import { ParticleBackground } from './components/ui/ParticleBackground';

// 👉 THÊM MỚI
import { CoreBusinessSection } from './components/sections/CoreBusinessSection';

export function App() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <LanguageProvider>
      <div className="relative min-h-screen bg-black text-white overflow-hidden">
        <ParticleBackground />

        <div className="relative z-10">
          <Header />
          <main>
            <HeroSection />
            <AboutSection />
            <MilestonesSection />


                        {/* 🌟 HOẠT ĐỘNG KINH DOANH CỐT LÕI — MOVED DOWN */}
            <CoreBusinessSection />


            {/* OUR STORY */}
            <OurStorySection />
            <FounderSection />


            {/* 🌟 WHY HYPER ONE */}
            <WhyHyperOneSection />

            {/* 🌟 HOW WE WORK (HF5) */}
            <HowWeWorkSection />

            {/* 🌟 AI TECHNOLOGY ARCHITECTURE */}
            <TechnologyStackSection />

            {/* CORE VALUES */}
            <CoreValuesSection />

            {/* COMPANY CULTURE */}
            <CompanyCultureSection />

            <SolutionsSection />
            <EcosystemSection />





            <PhilosophySection />
            <PartnersSection />
            <MembershipSection />

            <CareerSection />
            <MediaSection />
            <HyperMESection />
            <HonoraryCoFounderSection />   {/* New */}
            <ContactSection />
          </main>

          <Footer />
        </div>
      </div>
    </LanguageProvider>
  );
}
