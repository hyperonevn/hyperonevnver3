import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { TypewriterText } from '../ui/TypewriterText';
import { ArrowDownIcon } from 'lucide-react';

export const HeroSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section
      id="vision"
      className="relative h-screen flex items-center justify-center overflow-hidden bg-black text-white"
    >
      {/* 🔮 Background layers */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-[#001018] to-[#000610]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,224,255,0.18),transparent_70%)] animate-pulse-slow" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(255,209,102,0.05),transparent_70%)] mix-blend-screen" />
      </div>

      {/* 🌌 Content */}
      <div className="container mx-auto px-6 text-center relative z-10">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-8 tracking-wide">
          
          {/* HYPER ONE */}
          <span className="block drop-shadow-lg mb-3">
            <span className="text-[#00E0FF]">HYPER</span>{' '}
            <span className="text-white">ONE</span>
          </span>

          <span className="block bg-gradient-to-r from-[#00E0FF] via-[#00B7C2] to-[#FFD166] bg-clip-text text-transparent animate-gradient-move">
            <TypewriterText text={t('hero.tagline')} speed={70} />
          </span>
        </h1>

        <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed opacity-0 animate-fade-in animation-delay-300">
          {t('hero.subtitle')}
        </p>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-5 opacity-0 animate-fade-in animation-delay-600">
          <a
            href="#about"
            className="px-8 py-3 rounded-full border border-[#00E0FF]/40 text-[#00E0FF]
                       bg-[#00E0FF]/10 hover:bg-[#00E0FF]/20
                       hover:shadow-[0_0_25px_rgba(0,224,255,0.5)]
                       transition-all duration-300 ease-in-out"
          >
            {t('hero.learnMore')}
          </a>

          <a
            href="#contact"
            className="px-8 py-3 rounded-full text-black font-semibold
                       bg-gradient-to-r from-[#00E0FF] to-[#00B7C2]
                       hover:from-[#00B7C2] hover:to-[#FFD166]
                       hover:shadow-[0_0_25px_rgba(0,224,255,0.5)]
                       transition-all duration-300 ease-in-out"
          >
            {t('hero.contactUs')}
          </a>
        </div>
      </div>

      {/* Scroll hint */}
      <a
        href="#about"
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center
                   text-gray-400 hover:text-[#00E0FF]
                   transition-colors duration-300 animate-bounce"
      >
        <span className="text-sm mb-2 tracking-wider">
          {t('hero.scrollDown')}
        </span>
        <ArrowDownIcon className="h-5 w-5" />
      </a>
    </section>
  );
};
