import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { ShieldCheckIcon, SparklesIcon, UsersIcon, HeartHandshakeIcon } from 'lucide-react';

export const CoreValuesSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section
      id="core-values"
      className="py-24 relative bg-black text-white overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,224,255,0.06),transparent_70%)]"></div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            {t('coreValues.title')}
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-[#00E0FF] to-[#FFD166] mx-auto mt-4 mb-8"></div>
          <p className="text-gray-300 text-lg leading-relaxed">
            {t('coreValues.subtitle')}
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-10">

          {/* 1. Integrity */}
          <div className="bg-gray-900/60 p-6 rounded-xl border border-gray-800 
                          backdrop-blur-sm hover:-translate-y-1 
                          hover:shadow-[0_0_25px_rgba(0,224,255,0.2)]
                          transition-all duration-300">
            <ShieldCheckIcon className="h-10 w-10 text-[#00E0FF] mb-4" />
            <h3 className="text-xl font-semibold mb-3">{t('coreValues.integrity')}</h3>
            <p className="text-gray-300 text-sm">{t('coreValues.integrityDesc')}</p>
          </div>

          {/* 2. Innovation */}
          <div className="bg-gray-900/60 p-6 rounded-xl border border-gray-800 
                          backdrop-blur-sm hover:-translate-y-1 
                          hover:shadow-[0_0_25px_rgba(0,224,255,0.2)]
                          transition-all duration-300">
            <SparklesIcon className="h-10 w-10 text-[#FFD166] mb-4" />
            <h3 className="text-xl font-semibold mb-3">{t('coreValues.innovation')}</h3>
            <p className="text-gray-300 text-sm">{t('coreValues.innovationDesc')}</p>
          </div>

          {/* 3. Empathy */}
          <div className="bg-gray-900/60 p-6 rounded-xl border border-gray-800 
                          backdrop-blur-sm hover:-translate-y-1 
                          hover:shadow-[0_0_25px_rgba(0,224,255,0.2)]
                          transition-all duration-300">
            <HeartHandshakeIcon className="h-10 w-10 text-[#00E0FF] mb-4" />
            <h3 className="text-xl font-semibold mb-3">{t('coreValues.empathy')}</h3>
            <p className="text-gray-300 text-sm">{t('coreValues.empathyDesc')}</p>
          </div>

          {/* 4. Connection */}
          <div className="bg-gray-900/60 p-6 rounded-xl border border-gray-800 
                          backdrop-blur-sm hover:-translate-y-1 
                          hover:shadow-[0_0_25px_rgba(0,224,255,0.2)]
                          transition-all duration-300">
            <UsersIcon className="h-10 w-10 text-[#FFD166] mb-4" />
            <h3 className="text-xl font-semibold mb-3">{t('coreValues.connection')}</h3>
            <p className="text-gray-300 text-sm">{t('coreValues.connectionDesc')}</p>
          </div>

        </div>
      </div>
    </section>
  );
};
