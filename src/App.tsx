import React, { useEffect, useState } from 'react';

// 🌐 CONTEXT & UI
import { LanguageProvider } from './context/LanguageContext';
import { ParticleBackground } from './components/ui/ParticleBackground';

// 🌐 CORE LAYOUT
import { Header } from './components/Header';
import { Footer } from './components/Footer';

// 🌐 HERO + MAIN SECTIONS
import { HeroSection } from './components/sections/HeroSection';
import { EventSpotlight } from './components/sections/EventSpotlight';   // ⭐ NEW — thêm đúng vị trí

import { AboutSection } from './components/sections/AboutSection';
import { MilestonesSection } from './components/sections/MilestonesSection';
import { CoreBusinessSection } from './components/sections/CoreBusinessSection';

// 🌐 STORY, FOUNDER, WHY, HF5
import { OurStorySection } from './components/sections/OurStorySection';
import { FounderSection } from './components/sections/FounderSection';
import { WhyHyperOneSection } from './components/sections/WhyHyperOneSection';
import { HowWeWorkSection } from './components/sections/HowWeWorkSection';

// 🌐 TECHNOLOGY + VALUES + CULTURE
import { TechnologyStackSection } from './components/sections/TechnologyStackSection';
import { CoreValuesSection } from './components/sections/CoreValuesSection';
import { CompanyCultureSection } from './components/sections/CompanyCultureSection';

// 🌐 SOLUTIONS + ECOSYSTEM + PHILOSOPHY
import { SolutionsSection } from './components/sections/SolutionsSection';
import { EcosystemSection } from './components/sections/EcosystemSection';
import { PhilosophySection } from './components/sections/PhilosophySection';

// 🌐 BRAND & PARTNERS
import { PartnersSection } from './components/sections/PartnersSection';
import { MembershipSection } from './components/sections/MembershipSection';
import { ComplianceBadgesSection } from './components/sections/ComplianceBadgesSection';

// 🌐 TECH STACK — moved under PARTNERS
import { TechStackSection } from './components/sections/TechStackSection';

// 🌐 MEDIA + CAREER + CONTACT
import { CareerSection } from './components/sections/CareerSection';
import { MediaSection } from './components/sections/MediaSection';
import { ContactSection } from './components/sections/ContactSection';

// 🌐 HYPER ME + CO-FOUNDER
import { HyperMESection } from './components/sections/HyperMESection';
import { HonoraryCoFounderSection } from './components/sections/HonoraryCoFounderSection';

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
            {/* HERO */}
            <HeroSection />

            {/* ⭐ NEW: EVENT SPOTLIGHT — đặt ngay sau Hero */}
            <EventSpotlight />

            {/* ABOUT */}
            <AboutSection />
            <MilestonesSection />

            {/* CORE BUSINESS */}
            <CoreBusinessSection />

            {/* STORY */}
            <OurStorySection />
            <FounderSection />

            {/* WHY */}
            <WhyHyperOneSection />

            {/* HF5 */}
            <HowWeWorkSection />

            {/* AI TECH ARCHITECTURE */}
            <TechnologyStackSection />

            {/* VALUES + CULTURE */}
            <CoreValuesSection />
            <CompanyCultureSection />

            {/* SOLUTIONS */}
            <SolutionsSection />

            {/* ECOSYSTEM */}
            <EcosystemSection />

            {/* PHILOSOPHY */}
            <PhilosophySection />

            {/* PARTNERS */}
            <PartnersSection />

            {/* ⭐ TECH STACK — MOVED HERE BELOW PARTNERS */}
            <TechStackSection />

            {/* COMPLIANCE */}
            <ComplianceBadgesSection />

            {/* MEMBERSHIP */}
            <MembershipSection />

            {/* CAREER + MEDIA */}
            <CareerSection />
            <MediaSection />

            {/* HYPER ME + HONORARY */}
            <HyperMESection />
            <HonoraryCoFounderSection />

            {/* CONTACT */}
            <ContactSection />
          </main>

          <Footer />
        </div>
      </div>
    </LanguageProvider>
  );
}
