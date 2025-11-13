import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { BrainCircuitIcon, HeartPulseIcon, RocketIcon } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-20 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(0,224,255,0.1),transparent_70%)]"></div>

      <div className="container mx-auto px-4 relative z-10">

        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            {t('about.title')}
          </h2>

          <div className="h-1 w-20 bg-gradient-to-r from-[#00E0FF] to-[#FFD166] mx-auto mb-8"></div>

          <p className="text-gray-300 text-lg">{t('about.description')}</p>

          {/* ⭐ THÊM BLOCK HYPER ME – GIỮ NGUYÊN 100% ⭐ */}
          <p className="text-gray-300 mt-4">
            <span className="text-[#00E0FF] font-semibold">HYPER ME</span> —{' '}
            <a
              href="https://hyperone.profile.io.vn"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-white transition"
            >
              hyperone.profile.io.vn
            </a>
          </p>
          {/* ⭐ HẾT PHẦN THÊM ⭐ */}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <div className="bg-gray-900/60 backdrop-blur-sm border border-gray-800 rounded-xl p-6 transform transition-transform hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(0,224,255,0.2)]">
            <div className="text-[#00E0FF] mb-4">
              <BrainCircuitIcon className="h-10 w-10" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-white">
              {t('about.innovation.title')}
            </h3>
            <p className="text-gray-300">{t('about.innovation.description')}</p>
          </div>

          <div className="bg-gray-900/60 backdrop-blur-sm border border-gray-800 rounded-xl p-6 transform transition-transform hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(0,224,255,0.2)]">
            <div className="text-[#FFD166] mb-4">
              <HeartPulseIcon className="h-10 w-10" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-white">
              {t('about.humanity.title')}
            </h3>
            <p className="text-gray-300">{t('about.humanity.description')}</p>
          </div>

          <div className="bg-gray-900/60 backdrop-blur-sm border border-gray-800 rounded-xl p-6 transform transition-transform hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(0,224,255,0.2)]">
            <div className="text-[#00E0FF] mb-4">
              <RocketIcon className="h-10 w-10" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-white">
              {t('about.vision.title')}
            </h3>
            <p className="text-gray-300">{t('about.vision.description')}</p>
          </div>
        </div>

        <div className="mt-16 text-center">
          <blockquote className="text-xl md:text-2xl italic text-gray-300 max-w-3xl mx-auto">
            "{t('about.quote')}"
          </blockquote>
        </div>
      </div>
    </section>
  );
};
