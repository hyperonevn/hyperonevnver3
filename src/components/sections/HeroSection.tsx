import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { TypewriterText } from '../ui/TypewriterText';
import { ArrowDownIcon } from 'lucide-react';

export const HeroSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section
      id="vision"
      className="
        relative min-h-screen flex flex-col justify-center
        overflow-hidden text-white pb-24
      "
    >
      {/* PURE BACKGROUND IMAGE — NO OVERLAY */}
      <div className="absolute inset-0 -z-10">
        <img
          src="https://raw.githubusercontent.com/hyperonevn/hyperonevnver3/main/webcover.png"
          className="w-full h-full object-cover"
        />
      </div>

      {/* CONTENT */}
      <div className="container mx-auto px-6 text-center relative z-10 flex flex-col items-center">

        {/* LOGO with SOFT BACKDROP */}
        <div
          className="
            font-extrabold tracking-tight
            text-[2.6rem] md:text-[4rem] lg:text-[4.6rem]
            leading-none mb-3 whitespace-nowrap
            px-4 py-1 rounded-xl 
            bg-black/25 backdrop-blur-[2px]
            drop-shadow-[0_3px_10px_rgba(0,0,0,0.8)]
          "
        >
          <span className="text-[#00E0FF]">HYPER</span>{' '}
          <span className="text-white">ONE</span>
        </div>

        {/* TAGLINE — NO WRAP + SOFT BACKDROP */}
        <h1
          className="
            text-[1rem] md:text-[1.45rem] lg:text-[1.7rem]
            font-semibold leading-tight mb-4 max-w-full
            whitespace-nowrap overflow-hidden text-ellipsis
            px-4 py-1 rounded-xl
            bg-black/20 backdrop-blur-[2px]
            drop-shadow-[0_3px_10px_rgba(0,0,0,0.9)]
            text-white
          "
        >
          <TypewriterText text={t('hero.tagline')} speed={50} />
        </h1>

        {/* SUBTITLE with LIGHT BACKDROP */}
        <p
          className="
            text-gray-200 text-[0.95rem] md:text-[1.05rem]
            max-w-xl mx-auto mb-8 leading-snug
            opacity-0 animate-fade-in animation-delay-300
            px-4 py-2 rounded-xl
            bg-black/15 backdrop-blur-[2px]
            drop-shadow-[0_2px_8px_rgba(0,0,0,0.7)]
          "
        >
          {t('hero.subtitle')}
        </p>

        {/* CTA */}
        <div
          className="
            flex flex-col sm:flex-row justify-center gap-3
            opacity-0 animate-fade-in animation-delay-600
          "
        >
          <a
            href="#about"
            className="
              px-6 py-2.5 rounded-full border border-[#00E0FF]/40 text-[#00E0FF]
              bg-[#00E0FF]/10 hover:bg-[#00E0FF]/20
              hover:shadow-[0_0_18px_rgba(0,224,255,0.45)]
              transition-all duration-300
            "
          >
            {t('hero.learnMore')}
          </a>

          <a
            href="#contact"
            className="
              px-6 py-2.5 rounded-full text-black font-semibold
              bg-gradient-to-r from-[#00E0FF] to-[#00B7C2]
              hover:from-[#00B7C2] hover:to-[#FFD166]
              hover:shadow-[0_0_18px_rgba(0,224,255,0.45)]
              transition-all duration-300
            "
          >
            {t('hero.contactUs')}
          </a>
        </div>
      </div>

      {/* SCROLL HINT */}
      <div
        className="
          absolute bottom-8 left-0 right-0
          flex flex-col items-center justify-center
          text-gray-300 hover:text-[#00E0FF]
          transition-colors duration-300 animate-bounce
        "
      >
        <a href="#spotlight" className="flex flex-col items-center">
          <span className="text-xs mb-1 tracking-wider">{t('hero.scrollDown')}</span>
          <ArrowDownIcon className="h-4 w-4" />
        </a>
      </div>
    </section>
  );
};
