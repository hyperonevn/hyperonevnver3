import React from 'react';
import { useLanguage } from '../../context/LanguageContext';

export const FounderSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="founder" className="py-20 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(0,224,255,0.1),transparent_70%)]"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* LEFT COLUMN */}
          <div className="order-2 lg:order-1">

            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              {t('founder.title')}
            </h2>

            <div className="h-1 w-20 bg-gradient-to-r from-[#00E0FF] to-[#FFD166] mb-8"></div>

            <h3 className="text-2xl font-semibold text-white mb-4">
              Lữ Minh Trí
            </h3>

            <p className="text-[#00E0FF] mb-6">
              {t('founder.position')}
            </p>

            {/* ⭐ HYPER ME LINK – GIỮ NGUYÊN ⭐ */}
            <p className="text-gray-300 mb-6">
              <span className="text-[#00E0FF] font-semibold">HYPER ME</span>{' '}
              <a
                href="https://luminhtri.profile.io.vn"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-white transition"
              >
                luminhtri.profile.io.vn
              </a>
            </p>
            {/* ⭐ END ⭐ */}

            {/* QUOTE */}
            <blockquote className="text-lg text-gray-300 mb-8 italic">
              "{t('founder.quote')}"
            </blockquote>

            {/* BIOS */}
            <div className="mb-8">
              <p className="text-gray-300 mb-4">{t('founder.bio1')}</p>
              <p className="text-gray-300">{t('founder.bio2')}</p>
            </div>

            {/* ⭐⭐⭐ THREE BUTTON LINKS ⭐⭐⭐ */}
            <div className="mt-8 flex flex-wrap gap-4">

              <a
                href="https://awk.edu.vn"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2 rounded-lg border border-[#00E0FF] text-[#00E0FF] hover:bg-[#00E0FF]/10 transition"
              >
                AI WIZ KIDS
              </a>

              <a
                href="https://sadecx.com"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2 rounded-lg border border-[#FFD166] text-[#FFD166] hover:bg-[#FFD166]/10 transition"
              >
                SADEC X
              </a>

              <a
                href="https://das.io.vn"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2 rounded-lg border border-white text-white hover:bg-white/10 transition"
              >
                DAS Institute
              </a>

            </div>
            {/* ⭐⭐⭐ END BUTTONS ⭐⭐⭐ */}

          </div>

          {/* RIGHT COLUMN — IMAGE */}
          <div className="order-1 lg:order-2 relative">
            <div className="bg-gradient-to-br from-[#00E0FF]/20 to-[#FFD166]/20 rounded-2xl p-1">
              <div className="aspect-[3/4] rounded-xl overflow-hidden relative">
                <img
                  src="https://raw.githubusercontent.com/hyperonevn/hyperonevnver3/main/founder.jpg"
                  alt="Lữ Minh Trí"
                  className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>

                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <blockquote className="text-white/90 text-lg italic font-light">
                    "{t('founder.shortQuote')}"
                  </blockquote>
                </div>
              </div>
            </div>

            {/* Decorative glows */}
            <div className="absolute -bottom-6 -right-6 h-24 w-24 rounded-full bg-gradient-to-r from-[#00E0FF] to-[#FFD166] blur-2xl opacity-30"></div>
            <div className="absolute -top-6 -left-6 h-24 w-24 rounded-full bg-gradient-to-r from-[#00E0FF] to-[#FFD166] blur-2xl opacity-30"></div>
          </div>

        </div>
      </div>
    </section>
  );
};
