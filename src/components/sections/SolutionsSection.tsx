import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { GlowingCard } from '../ui/GlowingCard';
import {
  BrainCircuitIcon,
  RocketIcon,
  CloudIcon,
  PackageIcon,
  BarChart3Icon,
  GraduationCapIcon
} from 'lucide-react';

export const SolutionsSection: React.FC = () => {
  const { t } = useLanguage();

  const solutions = [
    {
      key: 'consulting',
      icon: <BrainCircuitIcon className="h-8 w-8 text-[#00E0FF]" />,
      color: '#00E0FF'
    },
    {
      key: 'automation',
      icon: <RocketIcon className="h-8 w-8 text-[#FFD166]" />,
      color: '#FFD166'
    },
    {
      key: 'cloud',
      icon: <CloudIcon className="h-8 w-8 text-[#00E0FF]" />,
      color: '#00E0FF'
    },
    {
      key: 'product',
      icon: <PackageIcon className="h-8 w-8 text-[#FFD166]" />,
      color: '#FFD166'
    },
    {
      key: 'geo',
      icon: <BarChart3Icon className="h-8 w-8 text-[#00E0FF]" />,
      color: '#00E0FF'
    },
    {
      key: 'education',
      icon: <GraduationCapIcon className="h-8 w-8 text-[#FFD166]" />,
      color: '#FFD166'
    }
  ];

  return (
    <section id="solutions" className="py-24 relative bg-black text-white overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,209,102,0.05),transparent_75%)]"></div>

      <div className="container mx-auto px-6 relative z-10">

        {/* HEADER */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold 
            bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            {t('solutions.title')}
          </h2>

          <div className="h-1 w-24 bg-gradient-to-r from-[#00E0FF] to-[#FFD166] mx-auto mt-4 mb-8"></div>

          <p className="text-gray-300 text-lg leading-relaxed">
            {t('solutions.description')}
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-12">

          {solutions.map((s, i) => (
            <GlowingCard
              key={i}
              title={t(`solutions.${s.key}.title`)}
              description={t(`solutions.${s.key}.description`)}
              icon={s.icon}
              glowColor={s.color}
            >
              <a
                href="#contact"
                className="
                  text-[#00E0FF] hover:text-[#00E0FF]/80 
                  inline-flex items-center font-medium mt-3
                "
              >
                {t('solutions.learnMore')} →
              </a>
            </GlowingCard>
          ))}

        </div>

      </div>
    </section>
  );
};
