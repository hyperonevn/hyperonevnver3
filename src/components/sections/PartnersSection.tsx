import React from 'react';
import { useLanguage } from '../../context/LanguageContext';

export const PartnersSection: React.FC = () => {
  const { t } = useLanguage();

  // 4 PARTNERS CHÍNH THỨC
  const partnerLogos = [
    {
      name: 'AI WIZ KIDS',
      logo: 'https://raw.githubusercontent.com/hyperonevn/hyperonevnver3/main/aiwizkids.jpg'
    },
    {
      name: 'HẢO KIM THỦY',
      logo: 'https://raw.githubusercontent.com/hyperonevn/hyperonevnver3/main/haokimthuy.jpg'
    },
    {
      name: 'Dubai AI Solutions LLC',
      logo: 'https://raw.githubusercontent.com/hyperonevn/hyperonevnver3/main/dubai-aisolutions.jpg'
    },
    {
      name: 'OKA & CO. INTERIOR SINGAPORE',
      logo: 'https://raw.githubusercontent.com/hyperonevn/hyperonevnver3/main/okainterior.jpg'
    }
  ];

  return (
    <section id="partners" className="py-20 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,209,102,0.05),transparent_70%)]"></div>

      <div className="container mx-auto px-4 relative z-10">

        {/* TITLE */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            {t('partners.title')}
          </h2>

          <div className="h-1 w-20 bg-gradient-to-r from-[#00E0FF] to-[#FFD166] mx-auto mb-8"></div>

          <p className="text-gray-300 text-lg">
            {t('partners.description')}
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {partnerLogos.map((partner, index) => (
            <div
              key={index}
              className="bg-gray-900/60 backdrop-blur-sm border border-gray-800 rounded-xl p-6 flex flex-col items-center justify-center h-40 group transition-all hover:border-[#00E0FF]/50"
            >

              {/* LOGO */}
              <div className="relative mb-4">
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="h-16 w-16 object-cover rounded-lg opacity-80 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
                />

                <div className="absolute -inset-2 rounded-lg opacity-0 group-hover:opacity-100 bg-[radial-gradient(circle,rgba(0,224,255,0.20),transparent_70%)] transition-opacity duration-300"></div>
              </div>

              {/* NAME */}
              <p className="text-sm text-gray-300 text-center leading-tight group-hover:text-white transition-all duration-300">
                {partner.name}
              </p>

            </div>
          ))}
        </div>

        {/* BUTTON */}
        <div className="text-center mt-12">
          <a
            href="#contact"
            className="px-8 py-3 bg-[#00E0FF]/10 text-[#00E0FF] border border-[#00E0FF]/30 rounded-full hover:bg-[#00E0FF]/20 transition-all duration-300 inline-flex items-center"
          >
            {t('partners.becomePartner')} <span className="ml-2">→</span>
          </a>
        </div>

      </div>
    </section>
  );
};
