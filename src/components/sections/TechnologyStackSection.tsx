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
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(0,224,255,0.05),transparent_70%)]"></div>

      <div className="container mx-auto px-6 relative z-10">

        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            {t('tech.title')}
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-[#00E0FF] to-[#FFD166] mx-auto mt-4 mb-8"></div>
          <p className="text-gray-300 text-lg">{t('tech.subtitle')}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-12">
          {items.map((item, i) => (
            <div
              key={i}
              className="bg-gray-900/60 p-8 rounded-xl border border-gray-800 
                         backdrop-blur-sm hover:-translate-y-1 transition-all
                         hover:shadow-[0_0_30px_rgba(0,224,255,0.2)]"
            >
              <item.icon className="h-12 w-12 text-[#00E0FF] mb-5" />
              <h3 className="text-xl font-semibold mb-3">{t(`${item.key}.title`)}</h3>
              <p className="text-gray-300 text-sm">{t(`${item.key}.desc`)}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
