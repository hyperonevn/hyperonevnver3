import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { HandshakeIcon, UsersIcon, HeartIcon } from 'lucide-react';

export const CompanyCultureSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section
      id="company-culture"
      className="py-24 relative bg-black text-white overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,224,255,0.06),transparent_70%)]"></div>

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            {t('culture.title')}
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-[#00E0FF] to-[#FFD166] mx-auto mt-4 mb-8"></div>
          <p className="text-gray-300 text-lg">{t('culture.subtitle')}</p>
        </div>

        {/* Culture Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-12">

          {/* Partner = Customer */}
          <div className="bg-gray-900/60 backdrop-blur-sm border border-gray-800 rounded-xl p-8 
                          transition-all hover:-translate-y-1 hover:shadow-[0_0_25px_rgba(0,224,255,0.2)]">
            <HandshakeIcon className="h-12 w-12 text-[#00E0FF] mb-5" />
            <h3 className="text-xl font-semibold mb-3 text-white">{t('culture.partner')}</h3>
            <p className="text-gray-300">{t('culture.partnerDesc')}</p>
          </div>

          {/* Employee = Asset */}
          <div className="bg-gray-900/60 backdrop-blur-sm border border-gray-800 rounded-xl p-8 
                          transition-all hover:-translate-y-1 hover:shadow-[0_0_25px_rgba(0,224,255,0.2)]">
            <UsersIcon className="h-12 w-12 text-[#FFD166] mb-5" />
            <h3 className="text-xl font-semibold mb-3 text-white">{t('culture.employee')}</h3>
            <p className="text-gray-300">{t('culture.employeeDesc')}</p>
          </div>

          {/* Human-Centered */}
          <div className="bg-gray-900/60 backdrop-blur-sm border border-gray-800 rounded-xl p-8 
                          transition-all hover:-translate-y-1 hover:shadow-[0_0_25px_rgba(0,224,255,0.2)]">
            <HeartIcon className="h-12 w-12 text-[#00E0FF] mb-5" />
            <h3 className="text-xl font-semibold mb-3 text-white">{t('culture.human')}</h3>
            <p className="text-gray-300">{t('culture.humanDesc')}</p>
          </div>

        </div>
      </div>
    </section>
  );
};
