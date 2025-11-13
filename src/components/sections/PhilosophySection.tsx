import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { TypewriterText } from '../ui/TypewriterText';
import { HeartIcon, BrainIcon, EyeIcon, TargetIcon } from 'lucide-react';
export const PhilosophySection: React.FC = () => {
  const {
    t
  } = useLanguage();
  const values = [{
    icon: <HeartIcon className="h-8 w-8" />,
    title: t('philosophy.values.humanity.title'),
    description: t('philosophy.values.humanity.description')
  }, {
    icon: <BrainIcon className="h-8 w-8" />,
    title: t('philosophy.values.intelligence.title'),
    description: t('philosophy.values.intelligence.description')
  }, {
    icon: <EyeIcon className="h-8 w-8" />,
    title: t('philosophy.values.vision.title'),
    description: t('philosophy.values.vision.description')
  }, {
    icon: <TargetIcon className="h-8 w-8" />,
    title: t('philosophy.values.purpose.title'),
    description: t('philosophy.values.purpose.description')
  }];
  return <section id="philosophy" className="py-20 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,209,102,0.05),transparent_70%)]"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            {t('philosophy.title')}
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-[#00E0FF] to-[#FFD166] mx-auto mb-8"></div>
        </div>
        <div className="max-w-4xl mx-auto mb-16">
          <div className="bg-gray-900/60 backdrop-blur-sm border border-gray-800 rounded-xl p-8">
            <blockquote className="text-xl md:text-2xl font-light text-gray-300 text-center italic">
              <span className="text-[#00E0FF] text-3xl">"</span>
              <TypewriterText text={t('philosophy.manifesto')} speed={30} className="leading-relaxed" />
              <span className="text-[#00E0FF] text-3xl">"</span>
            </blockquote>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
          {values.map((value, index) => <div key={index} className="bg-gray-900/60 backdrop-blur-sm border border-gray-800 rounded-xl p-6 flex items-start space-x-4 transform transition-all hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(0,224,255,0.2)]">
              <div className="text-[#FFD166] flex-shrink-0">{value.icon}</div>
              <div>
                <h3 className="text-xl font-semibold mb-3 text-white">
                  {value.title}
                </h3>
                <p className="text-gray-300">{value.description}</p>
              </div>
            </div>)}
        </div>
      </div>
    </section>;
};