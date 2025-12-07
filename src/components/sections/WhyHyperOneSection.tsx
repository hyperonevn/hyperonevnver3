import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { ShieldCheckIcon, ZapIcon, GlobeIcon, StarsIcon } from 'lucide-react';

export const WhyHyperOneSection: React.FC = () => {
  const { t } = useLanguage();

  const items = [
    {
      icon: <StarsIcon className="h-12 w-12 text-[#00E0FF] opacity-90" />,
      title: t('why.reason1'),
      desc: t('why.reason1Desc'),
    },
    {
      icon: <ZapIcon className="h-12 w-12 text-[#FFD166] opacity-90" />,
      title: t('why.reason2'),
      desc: t('why.reason2Desc'),
    },
    {
      icon: <ShieldCheckIcon className="h-12 w-12 text-[#00E0FF] opacity-90" />,
      title: t('why.reason3'),
      desc: t('why.reason3Desc'),
    },
    {
      icon: <GlobeIcon className="h-12 w-12 text-[#FFD166] opacity-90" />,
      title: t('why.reason4'),
      desc: t('why.reason4Desc'),
    },
  ];

  return (
    <section
      id="why-hyperone"
      className="py-24 relative bg-black text-white overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(0,224,255,0.07),transparent_75%)]"></div>

      <div className="container mx-auto px-6 relative z-10">

        {/* TITLE */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold 
              bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            {t('why.title')}
          </h2>

          <div className="h-1 w-24 bg-gradient-to-r from-[#00E0FF] to-[#FFD166] mx-auto mt-4 mb-6"></div>

          <p className="text-gray-300 text-lg leading-relaxed">
            {t('why.subtitle')}
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map((item, i) => (
            <div
              key={i}
              className="
                bg-gray-900/50 border border-gray-800 rounded-xl 
                p-8 text-center 
                backdrop-blur-sm
                transition-all duration-300
                hover:-translate-y-1 
                hover:border-[#00E0FF]/40 
                hover:shadow-[0_0_30px_rgba(0,224,255,0.15)]
              "
            >
              <div className="flex justify-center mb-5">
                {item.icon}
              </div>

              <h3 className="text-xl font-semibold text-white mb-3">
                {item.title}
              </h3>

              <p className="text-gray-300 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
