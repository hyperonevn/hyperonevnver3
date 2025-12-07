import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { BrainCircuitIcon, HeartPulseIcon, RocketIcon } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-14 md:py-20 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(0,224,255,0.08),transparent_70%)]"></div>

      <div className="container mx-auto px-4 relative z-10">

        {/* HEADER */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-2xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent leading-snug">
            {t('about.title')}
          </h2>

          <div className="h-1 w-16 bg-gradient-to-r from-[#00E0FF] to-[#FFD166] mx-auto mb-6"></div>

          <p className="text-gray-300 text-base md:text-lg leading-relaxed px-2">
            {t('about.description')}
          </p>

          {/* HYPER ME */}
          <p className="text-gray-300 mt-3 text-sm md:text-base">
            <span className="text-[#00E0FF] font-semibold">HYPER ME</span> —{' '}
            <a
              href="https://hyperone.profile.io.vn"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-white transition"
            >
              hyperone.profile.io.vn
            </a>
          </p>
        </div>

        {/* 3 CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mt-8">
          
          {[ 
            {
              icon: <BrainCircuitIcon className="h-8 w-8" />,
              color: "text-[#00E0FF]",
              title: t('about.innovation.title'),
              desc: t('about.innovation.description')
            },
            {
              icon: <HeartPulseIcon className="h-8 w-8" />,
              color: "text-[#FFD166]",
              title: t('about.humanity.title'),
              desc: t('about.humanity.description')
            },
            {
              icon: <RocketIcon className="h-8 w-8" />,
              color: "text-[#00E0FF]",
              title: t('about.vision.title'),
              desc: t('about.vision.description')
            }
          ].map((item, i) => (
            <div
              key={i}
              className="p-6 bg-gray-900/60 backdrop-blur-sm border border-gray-800 rounded-xl 
                         hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(0,224,255,0.15)] 
                         transition-all duration-300"
            >
              <div className={`${item.color} mb-3`}>
                {item.icon}
              </div>
              <h3 className="text-lg md:text-xl font-semibold mb-2 text-white">
                {item.title}
              </h3>
              <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}

        </div>

        {/* QUOTE */}
        <div className="mt-12 md:mt-16 text-center">
          <blockquote className="text-lg md:text-2xl italic text-gray-300 max-w-3xl mx-auto leading-relaxed">
            "{t('about.quote')}"
          </blockquote>
        </div>
      </div>
    </section>
  );
};
