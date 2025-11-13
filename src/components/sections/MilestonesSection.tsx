import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { AnimatedCounter } from '../ui/AnimatedCounter';
import { CheckCircleIcon, UsersIcon, ClockIcon, BarChart2Icon } from 'lucide-react';
export const MilestonesSection: React.FC = () => {
  const {
    t
  } = useLanguage();
  const milestones = [{
    value: 10,
    suffix: '+',
    label: t('milestones.projects'),
    icon: <CheckCircleIcon className="h-8 w-8" />
  }, {
    value: 5,
    suffix: '+',
    label: t('milestones.engineers'),
    icon: <UsersIcon className="h-8 w-8" />
  }, {
    value: 8,
    suffix: '+',
    label: t('milestones.years'),
    icon: <ClockIcon className="h-8 w-8" />
  }, {
    value: 100,
    suffix: '%',
    label: t('milestones.clients'),
    icon: <BarChart2Icon className="h-8 w-8" />
  }];
  return <section id="milestones" className="py-20 relative bg-black">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(0,224,255,0.1),transparent_70%)]"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            {t('milestones.title')}
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-[#00E0FF] to-[#FFD166] mx-auto mb-8"></div>
          <p className="text-gray-300 text-lg">{t('milestones.description')}</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {milestones.map((milestone, index) => <div key={index} className="bg-gray-900/60 backdrop-blur-sm border border-gray-800 rounded-xl p-6 text-center transform transition-all hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(0,224,255,0.2)]">
              <div className="text-[#00E0FF] flex justify-center mb-4">
                {milestone.icon}
              </div>
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#00E0FF] to-[#FFD166] bg-clip-text text-transparent mb-2">
                <AnimatedCounter end={milestone.value} suffix={milestone.suffix} />
              </div>
              <p className="text-gray-300 text-lg">{milestone.label}</p>
            </div>)}
        </div>
      </div>
    </section>;
};