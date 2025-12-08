import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { HandshakeIcon, UsersIcon, HeartIcon } from 'lucide-react';

export const CompanyCultureSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section
      id="company-culture"
      className="
        py-24 relative bg-black text-white overflow-hidden
      "
    >
      {/* Subtle glow background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,224,255,0.08),transparent_75%)]" />

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Title Block */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold 
                         bg-gradient-to-r from-white to-gray-300 
                         bg-clip-text text-transparent drop-shadow-[0_0_18px_rgba(255,255,255,0.2)]">
            {t('culture.title')}
          </h2>

          <div className="h-1 w-24 mx-auto mt-4 mb-8 
                          bg-gradient-to-r from-[#00E0FF] to-[#FFD166] 
                          rounded-full shadow-[0_0_12px_rgba(0,224,255,0.4)]" />

          <p className="text-gray-300 text-lg leading-relaxed">
            {t('culture.subtitle')}
          </p>
        </div>

        {/* Cards Wrapper */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-12">

          {/* Card Template */}
          {[
            {
              icon: <HandshakeIcon className="h-12 w-12 text-[#00E0FF]" />,
              title: t('culture.partner'),
              desc: t('culture.partnerDesc'),
            },
            {
              icon: <UsersIcon className="h-12 w-12 text-[#FFD166]" />,
              title: t('culture.employee'),
              desc: t('culture.employeeDesc'),
            },
            {
              icon: <HeartIcon className="h-12 w-12 text-[#00E0FF]" />,
              title: t('culture.human'),
              desc: t('culture.humanDesc'),
            }
          ].map((item, i) => (
            <div
              key={i}
              className="
                bg-gray-900/50 backdrop-blur-md 
                border border-gray-800 rounded-2xl p-8
                transition-all duration-300
                hover:-translate-y-1.5 
                hover:shadow-[0_0_30px_rgba(0,224,255,0.25)]
              "
            >
              <div className="mb-5">{item.icon}</div>

              <h3 className="text-xl font-semibold mb-3 
                             text-white drop-shadow-[0_0_6px_rgba(255,255,255,0.15)]">
                {item.title}
              </h3>

              <p className="text-gray-300 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};
