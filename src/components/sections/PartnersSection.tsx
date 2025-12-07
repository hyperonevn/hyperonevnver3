import React from 'react';
import { useLanguage } from '../../context/LanguageContext';

export const PartnersSection: React.FC = () => {
  const { t } = useLanguage();
  const base = "https://pub-f826d697a1694a0dac74ab8db71a8d8d.r2.dev/hyperone/partners/";

  const partnerLogos = [
    { name: "An Nam Tax", logo: base + "annamtax.jpg" },
    { name: "AI WIZ KIDS", logo: base + "awk.jpg" },
    { name: "Dubai AI Solutions LLC", logo: base + "dubai-aisolutions.jpg" },
    { name: "Futher Up", logo: base + "futherup.jpg" },
    { name: "Hảo Kim Thủy", logo: base + "haokimthuy.jpg" },
    { name: "Kính Vạn Hoa", logo: base + "kinhvanhoa.jpg" },
    { name: "Niti Boutique", logo: base + "nitibotique.jpg" },
    { name: "Niti Group", logo: base + "nitigroup.jpg" },
    { name: "Niti Sun", logo: base + "nitisun.jpg" },
    { name: "Niti Tax", logo: base + "nititax.jpg" },
    { name: "OKA & CO. INTERIOR SINGAPORE", logo: base + "okainterior.jpg" },
    { name: "Stardelight", logo: base + "stardelight.jpg" },
    { name: "Tree House Kids", logo: base + "treehousekids.jpeg" }
  ];

  return (
    <section id="partners" className="py-20 relative bg-black">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,224,255,0.08),transparent_70%)]"></div>

      <div className="container mx-auto px-4 relative z-10">

        {/* TITLE */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <p className="text-xs font-semibold text-white/50 tracking-widest uppercase mb-2">
            HYPER PARTNER NETWORK
          </p>

          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-4">
            {t('partners.title')}
          </h2>

          <div className="h-1 w-20 bg-gradient-to-r from-[#00E0FF] to-[#FFD166] mx-auto mb-6" />

          <p className="text-gray-300 text-lg">
            {t('partners.description')}
          </p>
        </div>

        {/* LOGO GRID */}
        <div className="
          grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 
          gap-6 md:gap-8
        ">
          {partnerLogos.map((partner, i) => (
            <div
              key={i}
              className="
                bg-gray-900/40 border border-gray-800 
                rounded-xl p-4 
                flex flex-col items-center justify-center 
                backdrop-blur-sm
                transition-all 
                hover:bg-gray-900/70 
                hover:border-[#00E0FF]/40
              "
            >
              {/* LOGO */}
              <img
                src={partner.logo}
                alt={partner.name}
                className="
                  h-12 w-12 md:h-14 md:w-14 
                  object-cover rounded-md 
                  opacity-80 grayscale 
                  group-hover:opacity-100 
                  group-hover:grayscale-0 
                  transition-all duration-300
                "
              />

              {/* NAME */}
              <p className="text-xs text-gray-300 text-center mt-3 leading-tight">
                {partner.name}
              </p>
            </div>
          ))}
        </div>

        {/* CTA BUTTON */}
        <div className="text-center mt-12">
          <a
            href="#contact"
            className="
              px-7 py-3 
              bg-[#00E0FF]/10 text-[#00E0FF] 
              border border-[#00E0FF]/30 
              rounded-full 
              inline-flex items-center 
              hover:bg-[#00E0FF]/20 
              transition-all duration-300
            "
          >
            {t('partners.becomePartner')}
            <span className="ml-2">→</span>
          </a>
        </div>

      </div>
    </section>
  );
};
