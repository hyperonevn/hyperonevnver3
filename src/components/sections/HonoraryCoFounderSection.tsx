import React from 'react';
import { useLanguage } from '../../context/LanguageContext';

export const HonoraryCoFounderSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="honorary-cofounder" className="py-20 relative">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(0,224,255,0.1),transparent_70%)]"></div>

      <div className="container mx-auto px-4 relative z-10">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* LEFT CONTENT */}
          <div className="order-2 lg:order-1">

            <h2 className="text-3xl md:text-4xl font-bold mb-6 
                           bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              {t('honorary.title')}
            </h2>

            <div className="h-1 w-20 bg-gradient-to-r from-[#00E0FF] to-[#FFD166] mb-8"></div>

            <h3 className="text-2xl font-semibold text-white mb-4">
              {t('honorary.name')}
            </h3>

            <p className="text-[#00E0FF] mb-6">
              {t('honorary.role')}
            </p>

            {/* ⭐ THÊM DÒNG HYPER ME + LINK — GIỮ NGUYÊN 100% CẤU TRÚC ⭐ */}
            <p className="text-gray-300 mb-6">
              <span className="text-[#00E0FF] font-semibold">HYPER ME</span> —{' '}
              <a
                href="https://truongnhatlinh.profile.io.vn"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-white transition"
              >
                truongnhatlinh.profile.io.vn
              </a>
            </p>
            {/* ⭐ HẾT PHẦN THÊM ⭐ */}

            <blockquote className="text-lg text-gray-300 mb-8 italic">
              "{t('honorary.quote')}"
            </blockquote>

            <div className="mb-8">
              <p className="text-gray-300 mb-4">
                {t('honorary.bio1')}
              </p>
              <p className="text-gray-300">
                {t('honorary.bio2')}
              </p>
            </div>

            {/* HOẶC CHỮ KÝ NẾU CÓ */}
            
          </div>

          {/* RIGHT IMAGE */}
          <div className="order-1 lg:order-2 relative">

            <div className="bg-gradient-to-br from-[#00E0FF]/20 to-[#FFD166]/20 rounded-2xl p-1">
              <div className="aspect-[3/4] rounded-xl overflow-hidden relative">

                <img
                  src="https://raw.githubusercontent.com/hyperonevn/hyperonevnver3/main/honorary.jpg"
                  alt={t('honorary.name')}
                  className="object-cover w-full h-full"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>

                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <blockquote className="text-white/90 text-lg italic font-light">
                    "{t('honorary.shortQuote')}"
                  </blockquote>
                </div>

              </div>
            </div>

            {/* Glow */}
            <div className="absolute -bottom-6 -right-6 h-24 w-24 rounded-full 
                            bg-gradient-to-r from-[#00E0FF] to-[#FFD166] blur-2xl opacity-30"></div>

            <div className="absolute -top-6 -left-6 h-24 w-24 rounded-full 
                            bg-gradient-to-r from-[#00E0FF] to-[#FFD166] blur-2xl opacity-30"></div>

          </div>

        </div>
      </div>
    </section>
  );
};
