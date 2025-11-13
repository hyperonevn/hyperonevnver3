import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { ShieldCheckIcon, ZapIcon, GlobeIcon, StarsIcon } from 'lucide-react';

export const WhyHyperOneSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section
      id="why-hyperone"
      className="py-24 relative bg-black text-white overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(0,224,255,0.06),transparent_70%)]"></div>

      <div className="container mx-auto px-6 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            {t('why.title')}
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-[#00E0FF] to-[#FFD166] mx-auto mt-4 mb-8"></div>
          <p className="text-gray-300 text-lg">{t('why.subtitle')}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-12">

          <div className="bg-gray-900/60 p-8 border border-gray-800 rounded-xl hover:-translate-y-1 transition-all hover:shadow-[0_0_25px_rgba(0,224,255,0.2)]">
            <StarsIcon className="h-12 w-12 text-[#00E0FF] mb-5" />
            <h3 className="text-xl font-semibold mb-3">{t('why.reason1')}</h3>
            <p className="text-gray-300 text-sm">{t('why.reason1Desc')}</p>
          </div>

          <div className="bg-gray-900/60 p-8 border border-gray-800 rounded-xl hover:-translate-y-1 transition-all hover:shadow-[0_0_25px_rgba(0,224,255,0.2)]">
            <ZapIcon className="h-12 w-12 text-[#FFD166] mb-5" />
            <h3 className="text-xl font-semibold mb-3">{t('why.reason2')}</h3>
            <p className="text-gray-300 text-sm">{t('why.reason2Desc')}</p>
          </div>

          <div className="bg-gray-900/60 p-8 border border-gray-800 rounded-xl hover:-translate-y-1 transition-all hover:shadow-[0_0_25px_rgba(0,224,255,0.2)]">
            <ShieldCheckIcon className="h-12 w-12 text-[#00E0FF] mb-5" />
            <h3 className="text-xl font-semibold mb-3">{t('why.reason3')}</h3>
            <p className="text-gray-300 text-sm">{t('why.reason3Desc')}</p>
          </div>

          <div className="bg-gray-900/60 p-8 border border-gray-800 rounded-xl hover:-translate-y-1 transition-all hover:shadow-[0_0_25px_rgba(0,224,255,0.2)]">
            <GlobeIcon className="h-12 w-12 text-[#FFD166] mb-5" />
            <h3 className="text-xl font-semibold mb-3">{t('why.reason4')}</h3>
            <p className="text-gray-300 text-sm">{t('why.reason4Desc')}</p>
          </div>

        </div>
      </div>
    </section>
  );
};
