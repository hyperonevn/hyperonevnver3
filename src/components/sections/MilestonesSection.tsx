import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { AnimatedCounter } from '../ui/AnimatedCounter';
import { CheckCircleIcon, UsersIcon, ClockIcon, BarChart2Icon } from 'lucide-react';

export const MilestonesSection: React.FC = () => {
  const { t } = useLanguage();

  const milestones = [
    {
      value: 46,
      suffix: '+',
      label: t('milestones.projects'),
      icon: <CheckCircleIcon className="h-7 w-7" />
    },
    {
      value: 9,
      suffix: '+',
      label: t('milestones.engineers'),
      icon: <UsersIcon className="h-7 w-7" />
    },
    {
      value: 8,
      suffix: '+',
      label: t('milestones.years'),
      icon: <ClockIcon className="h-7 w-7" />
    },
    {
      value: 100,
      suffix: '%',
      label: t('milestones.clients'),
      icon: <BarChart2Icon className="h-7 w-7" />
    }
  ];

  return (
    <section id="milestones" className="py-20 relative bg-black">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(0,224,255,0.1),transparent_70%)]"></div>

      <div className="container mx-auto px-4 relative z-10">

        {/* TITLE */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent mb-4">
            {t('milestones.title')}
          </h2>

          <div className="h-1 w-20 bg-gradient-to-r from-[#00E0FF] to-[#FFD166] mx-auto mb-6" />

          <p className="text-gray-300 text-lg">
            {t('milestones.description')}
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {milestones.map((m, i) => (
            <div
              key={i}
              className="
                bg-gray-900/50 
                border border-gray-800 
                rounded-2xl 
                p-5 
                text-center 
                backdrop-blur-sm
                transition-all 
                hover:bg-gray-900/70 
                hover:border-[#00E0FF]/40
                hover:-translate-y-1
              "
            >
              <div className="text-[#00E0FF] flex justify-center mb-3">
                {m.icon}
              </div>

              <div className="text-4xl font-bold mb-1 bg-gradient-to-r from-[#00E0FF] to-[#FFD166] bg-clip-text text-transparent">
                <AnimatedCounter end={m.value} suffix={m.suffix} />
              </div>

              <p className="text-gray-300 text-sm md:text-base">{m.label}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
