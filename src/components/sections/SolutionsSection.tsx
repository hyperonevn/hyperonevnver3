import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { GlowingCard } from '../ui/GlowingCard';
import { BrainCircuitIcon, RocketIcon, CloudIcon, PackageIcon, BarChart3Icon, GraduationCapIcon } from 'lucide-react';
export const SolutionsSection: React.FC = () => {
  const {
    t
  } = useLanguage();
  const solutions = [{
    title: t('solutions.consulting.title'),
    description: t('solutions.consulting.description'),
    icon: <BrainCircuitIcon className="h-8 w-8" />,
    color: '#00E0FF'
  }, {
    title: t('solutions.automation.title'),
    description: t('solutions.automation.description'),
    icon: <RocketIcon className="h-8 w-8" />,
    color: '#FFD166'
  }, {
    title: t('solutions.cloud.title'),
    description: t('solutions.cloud.description'),
    icon: <CloudIcon className="h-8 w-8" />,
    color: '#00E0FF'
  }, {
    title: t('solutions.product.title'),
    description: t('solutions.product.description'),
    icon: <PackageIcon className="h-8 w-8" />,
    color: '#FFD166'
  }, {
    title: t('solutions.geo.title'),
    description: t('solutions.geo.description'),
    icon: <BarChart3Icon className="h-8 w-8" />,
    color: '#00E0FF'
  }, {
    title: t('solutions.education.title'),
    description: t('solutions.education.description'),
    icon: <GraduationCapIcon className="h-8 w-8" />,
    color: '#FFD166'
  }];
  return <section id="solutions" className="py-20 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,209,102,0.05),transparent_70%)]"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            {t('solutions.title')}
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-[#00E0FF] to-[#FFD166] mx-auto mb-8"></div>
          <p className="text-gray-300 text-lg">{t('solutions.description')}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((solution, index) => <GlowingCard key={index} title={solution.title} description={solution.description} icon={solution.icon} glowColor={solution.color}>
              <a href="#contact" className="text-[#00E0FF] hover:text-[#00E0FF]/80 font-medium inline-flex items-center mt-2">
                {t('solutions.learnMore')} →
              </a>
            </GlowingCard>)}
        </div>
      </div>
    </section>;
};