import React from 'react';
import { useLanguage } from '../../context/LanguageContext';

export const OurStorySection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section
      id="our-story"
      className="py-20 md:py-24 relative bg-black text-white overflow-hidden"
    >
      {/* Soft glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,224,255,0.05),transparent_80%)]"></div>

      <div className="relative container mx-auto px-6 max-w-5xl">

        {/* TITLE + SUBTITLE */}
        <div className="text-center mb-14">
          <h2
            className="text-3xl md:text-4xl font-bold tracking-tight
                       bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent"
          >
            {t('ourStory.title')}
          </h2>

          <div className="h-[2px] w-20 mx-auto bg-gradient-to-r from-[#00E0FF] to-[#FFD166] mt-4 mb-6 rounded-full"></div>

          <p className="text-gray-300 text-lg leading-relaxed max-w-2xl mx-auto">
            {t('ourStory.subtitle')}
          </p>
        </div>

        {/* IMAGE */}
        <div className="flex justify-center mb-14">
          <div
            className="
              rounded-2xl overflow-hidden
              border border-white/10
              shadow-[0_0_28px_rgba(0,224,255,0.18)]
              bg-gray-900/20 w-full max-w-4xl
            "
          >
            <img
              src="https://raw.githubusercontent.com/hyperonevn/hyperonevnver3/main/office.jpg"
              alt="Hyper One Office"
              className="w-full object-cover"
            />
          </div>
        </div>

        {/* STORY — COMPACT, SMOOTH, PREMIUM */}
        <div
          className="space-y-5 text-gray-300 text-lg leading-[1.8] max-w-4xl mx-auto"
        >
          <p>{t('ourStory.p1')}</p>
          <p>{t('ourStory.p2')}</p>
          <p>{t('ourStory.p3')}</p>
          <p>{t('ourStory.p4')}</p>
          <p>{t('ourStory.p5')}</p>
          <p>{t('ourStory.p6')}</p>
        </div>

        {/* QUOTE – STRONG, CENTERED */}
        <div className="mt-16 text-center">
          <blockquote
            className="text-xl md:text-2xl italic text-gray-200 font-light max-w-3xl mx-auto
                       leading-snug"
          >
            “{t('ourStory.quote')}”
          </blockquote>
        </div>

      </div>
    </section>
  );
};
