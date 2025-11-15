import React from 'react';
import { useLanguage } from '../../context/LanguageContext';

export const HonoraryCoFounderSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="honorary-cofounder" className="py-20 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(0,224,255,0.1),transparent_70%)]"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* LEFT CONTENT */}
          <div className="order-1">

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

          </div>

          {/* RIGHT IMAGE — REMOVED */}

        </div>
      </div>
    </section>
  );
};
