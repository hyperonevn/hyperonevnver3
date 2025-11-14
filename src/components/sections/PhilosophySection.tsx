import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { TypewriterText } from '../ui/TypewriterText';

export const PhilosophySection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="philosophy" className="py-20 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,209,102,0.05),transparent_70%)]"></div>
      <div className="container mx-auto px-4 relative z-10">
        
        {/* Title */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            {t('philosophy.title')}
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-[#00E0FF] to-[#FFD166] mx-auto mb-8"></div>
        </div>

        {/* Manifesto only */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="bg-gray-900/60 backdrop-blur-sm border border-gray-800 rounded-xl p-8">
            <blockquote className="text-xl md:text-2xl font-light text-gray-300 text-center italic">
              <span className="text-[#00E0FF] text-3xl">"</span>
              <TypewriterText
                text={t('philosophy.manifesto')}
                speed={30}
                className="leading-relaxed"
              />
              <span className="text-[#00E0FF] text-3xl">"</span>
            </blockquote>
          </div>
        </div>

      </div>
    </section>
  );
};
