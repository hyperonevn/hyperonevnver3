import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { GlowingCard } from '../ui/GlowingCard';
import { CodeIcon, BrainIcon, PencilIcon, UsersIcon } from 'lucide-react';
export const CareerSection: React.FC = () => {
  const {
    t
  } = useLanguage();
  const positions = [{
    title: t('career.positions.engineer.title'),
    description: t('career.positions.engineer.description'),
    icon: <CodeIcon className="h-8 w-8" />,
    color: '#00E0FF'
  }, {
    title: t('career.positions.researcher.title'),
    description: t('career.positions.researcher.description'),
    icon: <BrainIcon className="h-8 w-8" />,
    color: '#FFD166'
  }, {
    title: t('career.positions.designer.title'),
    description: t('career.positions.designer.description'),
    icon: <PencilIcon className="h-8 w-8" />,
    color: '#00E0FF'
  }, {
    title: t('career.positions.manager.title'),
    description: t('career.positions.manager.description'),
    icon: <UsersIcon className="h-8 w-8" />,
    color: '#FFD166'
  }];
  return <section id="career" className="py-20 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(0,224,255,0.1),transparent_70%)]"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            {t('career.title')}
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-[#00E0FF] to-[#FFD166] mx-auto mb-8"></div>
          <p className="text-gray-300 text-lg">{t('career.description')}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {positions.map((position, index) => <GlowingCard key={index} title={position.title} description={position.description} icon={position.icon} glowColor={position.color}>
              <a href="#contact" className="px-5 py-2 mt-4 bg-[#00E0FF]/10 text-[#00E0FF] border border-[#00E0FF]/30 rounded-lg hover:bg-[#00E0FF]/20 transition-all duration-300 inline-flex items-center text-sm">
                {t('career.applyNow')}
              </a>
            </GlowingCard>)}
        </div>
        <div className="mt-16 bg-gray-900/60 backdrop-blur-sm border border-gray-800 rounded-xl p-8">
          <div className="text-center">
            <h3 className="text-2xl font-semibold text-white mb-4">
              {t('career.joinTeam.title')}
            </h3>
            <p className="text-gray-300 max-w-2xl mx-auto mb-8">
              {t('career.joinTeam.description')}
            </p>
            <a href="#contact" className="px-8 py-3 bg-[#00E0FF] text-black rounded-full hover:bg-[#00E0FF]/90 transition-all duration-300">
              {t('career.joinTeam.button')}
            </a>
          </div>
        </div>
      </div>
    </section>;
};