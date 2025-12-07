import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { LayersIcon, CpuIcon, BoxIcon, NetworkIcon, CodeIcon, BrainIcon } from 'lucide-react';

export const TechnologyStackSection: React.FC = () => {
  const { t } = useLanguage();

  const items = [
    { icon: BrainIcon, key: 'tech.core1' },
    { icon: CpuIcon, key: 'tech.core2' },
    { icon: NetworkIcon, key: 'tech.core3' },
    { icon: LayersIcon, key: 'tech.core4' },
    { icon: BoxIcon, key: 'tech.core5' },
    { icon: CodeIcon, key: 'tech.core6' }
  ];

  return (
    <section id="technology" className="py-24 relative bg-black text-white overflow-hidden">

      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(0,224,255,0.06),transparent_75%)]"></div>

      <div className="container mx-auto px-6 relative z-10">

        {/* TITLE */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold 
              bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            {t('tech.title')}
          </h2>

          <div className="h-1 w-24 bg-gradient-to-r from-[#00E0FF] to-[#FFD166] mx-auto mt-4 mb-8"></div>

          <p className="text-gray-300 text-lg leading-relaxed">
            {t('tech.subtitle')}
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-12">

          {items.map((item, i) => (
            <div
              key={i}
              className="
                p-8 rounded-xl 
                bg-gray-900/50 border border-gray-800 
                backdrop-blur-sm
                transition-all duration-300
                hover:-translate-y-1 
                hover:border-[#00E0FF]/40 
                hover:shadow-[0_0_30px_rgba(0,224,255,0.15)]
              "
            >
              <item.icon className="h-12 w-12 text-[#00E0FF] opacity-90 mb-5" />

              <h3 className="text-xl font-semibold text-white mb-3">
                {t(`${item.key}.title`)}
              </h3>

              <p className="text-gray-300 text-sm leading-relaxed">
                {t(`${item.key}.desc`)}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};
