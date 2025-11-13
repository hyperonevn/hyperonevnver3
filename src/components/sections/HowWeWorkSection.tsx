import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { ArrowRightIcon, WorkflowIcon, LightbulbIcon, CpuIcon, RocketIcon } from 'lucide-react';

export const HowWeWorkSection: React.FC = () => {
  const { t } = useLanguage();

  const steps = [
    { icon: LightbulbIcon, title: t('work.step1'), desc: t('work.step1Desc') },
    { icon: WorkflowIcon, title: t('work.step2'), desc: t('work.step2Desc') },
    { icon: CpuIcon, title: t('work.step3'), desc: t('work.step3Desc') },
    { icon: ArrowRightIcon, title: t('work.step4'), desc: t('work.step4Desc') },
    { icon: RocketIcon, title: t('work.step5'), desc: t('work.step5Desc') }
  ];

  return (
    <section
      id="how-we-work"
      className="py-24 relative bg-black text-white overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,224,255,0.07),transparent_70%)]"></div>

      <div className="container mx-auto px-6 relative z-10">

        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            {t('work.title')}
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-[#00E0FF] to-[#FFD166] mx-auto mt-4 mb-8"></div>
          <p className="text-gray-300 text-lg">{t('work.subtitle')}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mt-12">
          {steps.map((step, i) => (
            <div
              key={i}
              className="bg-gray-900/60 p-6 border border-gray-800 rounded-xl 
                         backdrop-blur-sm hover:-translate-y-1 transition-all
                         hover:shadow-[0_0_25px_rgba(0,224,255,0.2)]"
            >
              <step.icon className="h-10 w-10 text-[#00E0FF] mb-4" />
              <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-300 text-sm">{step.desc}</p>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
};
