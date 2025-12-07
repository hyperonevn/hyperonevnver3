import React from 'react';
import { useLanguage } from '../../context/LanguageContext';

export const OurStorySection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section
      id="our-story"
      className="py-20 md:py-24 relative bg-black text-white overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,224,255,0.06),transparent_75%)]"></div>

      <div className="container mx-auto px-6 relative z-10">

        {/* TITLE */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-3xl md:text-4xl font-bold 
            bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            {t('ourStory.title')}
          </h2>

          <div className="h-1 w-24 bg-gradient-to-r from-[#00E0FF] to-[#FFD166] mx-auto mt-4 mb-6"></div>

          <p className="text-gray-300 text-lg leading-relaxed">
            {t('ourStory.subtitle')}
          </p>

          {/* IMAGE */}
          <div className="mt-10 flex justify-center">
            <div className="
              rounded-2xl overflow-hidden 
              border border-white/10 
              shadow-[0_0_25px_rgba(0,224,255,0.15)]
              bg-gray-900/20
            ">
              <img
                src="https://raw.githubusercontent.com/hyperonevn/hyperonevnver3/main/office.jpg"
                alt="Hyper One Office"
                className="w-full max-w-3xl object-cover"
              />
            </div>
          </div>
        </div>

        {/* STORY CONTENT */}
        <div className="
          max-w-4xl mx-auto 
          space-y-6 
          text-gray-300 text-lg leading-[1.85]
        ">
          <p>{t('ourStory.p1')}</p>
          <p>{t('ourStory.p2')}</p>
          <p>{t('ourStory.p3')}</p>
          <p>{t('ourStory.p4')}</p>
          <p>{t('ourStory.p5')}</p>
          <p>{t('ourStory.p6')}</p>
        </div>

        {/* QUOTE */}
        <div className="mt-16 text-center">
          <blockquote className="text-xl md:text-2xl italic text-gray-200 font-light max-w-3xl mx-auto">
            “{t('ourStory.quote')}”
          </blockquote>
        </div>

      </div>
    </section>
  );
};
