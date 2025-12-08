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
        overflow-hidden bg-black text-white pb-24
      "
    >
      {/* PURE BACKGROUND — NO OVERLAY */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://pub-f826d697a1694a0dac74ab8db71a8d8d.r2.dev/hyperone/cover/webcover.png')",
        }}
      />

      {/* CONTENT */}
      <div className="container mx-auto px-6 text-center relative z-10 flex flex-col items-center">

        {/* LOGO — CIRCLE + LIGHT TRANSPARENCY */}
        <img
          src="https://pub-f826d697a1694a0dac74ab8db71a8d8d.r2.dev/logo/hyperone.jpg"
          alt="Hyper One Logo"
          className="
            w-[150px] md:w-[200px] lg:w-[220px]
            mb-6 rounded-full
            opacity-85 hover:opacity-100
            transition-all duration-300
            shadow-[0_0_16px_rgba(0,0,0,0.45)]
          "
        />

        {/* TEXT BLOCK — LIGHT GLASS BACKGROUND */}
        <div
          className="
            px-4 py-4 md:px-6 md:py-5
            rounded-xl
            bg-black/25 backdrop-blur-md
            shadow-[0_0_18px_rgba(0,0,0,0.35)]
            max-w-2xl
          "
        >
          {/* MAIN TAGLINE */}
          <h1
            className="
              bg-gradient-to-r from-[#00E0FF] via-[#00B7C2] to-[#FFD166]
              bg-clip-text text-transparent
              animate-gradient-move
              text-[1.1rem] md:text-[1.6rem] lg:text-[1.75rem]
              font-semibold leading-snug mb-3
              drop-shadow-[0_0_8px_rgba(0,0,0,0.6)]
            "
          >
            <TypewriterText text={t('hero.tagline')} speed={65} />
          </h1>

          {/* SUBTITLE */}
          <p
            className="
              text-gray-200 text-[0.9rem] md:text-[1.05rem]
              leading-relaxed mb-5
              drop-shadow-[0_0_8px_rgba(0,0,0,0.65)]
            "
          >
            {t('hero.subtitle')}
          </p>

          {/* CTA BUTTONS */}
          <div className="flex flex-col sm:flex-row justify-center gap-3">
            <a
              href="#about"
              className="
                px-6 py-2.5 rounded-full border border-[#00E0FF]/50 text-[#00E0FF]
                bg-[#00E0FF]/10 hover:bg-[#00E0FF]/20
                hover:shadow-[0_0_18px_rgba(0,224,255,0.45)]
                backdrop-blur-sm
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
      </div>

      {/* SCROLL HINT */}
      <div
        className="
          absolute bottom-8 left-0 right-0
          flex flex-col items-center justify-center
          text-gray-200 hover:text-[#00E0FF]
          transition-colors duration-300 animate-bounce 
          drop-shadow-[0_0_5px_rgba(0,0,0,0.65)]
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
