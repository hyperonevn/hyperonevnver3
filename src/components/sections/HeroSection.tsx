import React from 'react';
import { Link } from 'react-router-dom';
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
      {/* Background layers */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-[#001018] to-[#000610]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,224,255,0.18),transparent_70%)] animate-pulse-slow" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(255,209,102,0.05),transparent_70%)] mix-blend-screen" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 text-center relative z-10 flex flex-col items-center">
        {/* LOGO BLOCK */}
        <div
          className="
            font-extrabold tracking-tight
            text-[2.6rem] md:text-[4rem] lg:text-[4.6rem]
            leading-none mb-3 whitespace-nowrap
          "
        >
          <span className="text-[#00E0FF]">HYPER</span>{' '}
          <span className="text-white">ONE</span>
        </div>

        {/* TAGLINE — AUTO WRAP + GIỮ CỤM TỪ */}
        <h1
          className="
            bg-gradient-to-r from-[#00E0FF] via-[#00B7C2] to-[#FFD166]
            bg-clip-text text-transparent animate-gradient-move
            text-[1rem] md:text-[1.45rem] lg:text-[1.7rem]
            font-semibold
            leading-snug
            mb-4
            max-w-[90%]
            break-keep
          "
          style={{
            wordBreak: "keep-all",     // không cắt chữ tiếng Việt
            overflowWrap: "break-word" // xuống dòng an toàn
          }}
        >
          <TypewriterText text={t('hero.tagline')} speed={70} />
        </h1>

        {/* SUBTITLE */}
        <p
          className="
            text-gray-300 text-[0.95rem] md:text-[1.05rem]
            max-w-xl mx-auto mb-8 leading-snug
            opacity-0 animate-fade-in animation-delay-300
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

          <Link
            to="/company"
            className="
              px-6 py-2.5 rounded-full border border-white/30 text-white
              bg-white/10 hover:bg-white/20
              hover:shadow-[0_0_18px_rgba(255,255,255,0.25)]
              transition-all duration-300
            "
          >
            {t('common.companyInfo')}
          </Link>
        </div>
      </div>

      {/* SCROLL HINT */}
      <div
        className="
          absolute bottom-8 left-0 right-0
          flex flex-col items-center justify-center
          text-gray-400 hover:text-[#00E0FF]
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
