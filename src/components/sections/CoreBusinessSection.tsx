import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { 
  BrainCircuit, 
  Layers, 
  Share2, 
  Users, 
  Sparkles,
  GraduationCap
} from 'lucide-react';

export const CoreBusinessSection: React.FC = () => {
  const { t } = useLanguage();

  const items = [
    {
      icon: <BrainCircuit className="h-8 w-8 text-[#00E0FF]" />,
      title: t('coreBusiness.items.0.title'),
      desc: t('coreBusiness.items.0.description'),
    },
    {
      icon: <Layers className="h-8 w-8 text-[#00E0FF]" />,
      title: t('coreBusiness.items.1.title'),
      desc: t('coreBusiness.items.1.description'),
    },
    {
      icon: <Share2 className="h-8 w-8 text-[#00E0FF]" />,
      title: t('coreBusiness.items.2.title'),
      desc: t('coreBusiness.items.2.description'),
    },
    {
      icon: <Users className="h-8 w-8 text-[#00E0FF]" />,
      title: t('coreBusiness.items.3.title'),
      desc: t('coreBusiness.items.3.description'),
    },
    {
      icon: <Sparkles className="h-8 w-8 text-[#00E0FF]" />,
      title: t('coreBusiness.items.4.title'),
      desc: t('coreBusiness.items.4.description'),
    },
    {
      icon: <GraduationCap className="h-8 w-8 text-[#00E0FF]" />,
      title: t('coreBusiness.items.5.title'),
      desc: t('coreBusiness.items.5.description'),
    }
  ];

  return (
    <section id="core-business" className="py-24 relative bg-black text-white overflow-hidden">

      {/* Light BG */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,180,255,0.12),transparent_70%)]"></div>

      <div className="container mx-auto px-6 relative z-10">
        
        {/* TITLE */}
        <h2 className="text-3xl md:text-4xl font-bold text-center bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-4">
          {t('coreBusiness.title')}
        </h2>

        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-14">
          {t('coreBusiness.subtitle')}
        </p>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {items.map((item, i) => (
            <div
              key={i}
              className="p-8 bg-[#0a1a24]/60 border border-[#0ae0ff]/20 rounded-2xl shadow-lg
                         hover:bg-[#0a1f2d]/80 hover:border-[#00e0ff]/40 transition-all duration-300"
            >
              <div className="mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-3">
                {item.title}
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};
