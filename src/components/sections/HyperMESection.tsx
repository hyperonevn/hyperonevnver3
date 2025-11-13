import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { Fingerprint, Shield, UserIcon } from 'lucide-react';
import { HyperMEMockupSection } from './HyperMEMockupSection';

export const HyperMESection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="hyperme" className="py-20 relative">
      <style>
        {`
          @keyframes cardGlow {
            0% { box-shadow:0 0 18px rgba(80,180,255,0.18); }
            100% { box-shadow:0 0 35px rgba(80,180,255,0.32); }
          }
          @keyframes auroraShift {
            0% { background-position:0% 50%; }
            100% { background-position:100% 50%; }
          }
          @keyframes pulseBadge {
            0%,100% { transform:scale(1); }
            50% { transform:scale(1.08); }
          }
        `}
      </style>

      {/* BG Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,224,255,0.1),transparent_70%)]"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* LEFT CONTENT */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              {t('hyperme.title')}
            </h2>

            <div className="h-1 w-20 bg-gradient-to-r from-[#00E0FF] to-[#FFD166] mb-8"></div>

            <p className="text-gray-300 text-lg mb-4">
              {t('hyperme.description')}
            </p>

            {/* ⭐ THÊM HYPER ME – GIỮ NGUYÊN 100% KỸ THUẬT ⭐ */}
            <p className="text-gray-300 mb-8">
              <span className="text-[#00E0FF] font-semibold">HYPER ME</span> —{' '}
              <a
                href="https://hyperme.profile.io.vn"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-white transition"
              >
                hyperme.profile.io.vn
              </a>
            </p>
            {/* ⭐ HẾT PHẦN THÊM ⭐ */}

            {/* Features */}
            <div className="space-y-6">
              <Feature icon={<Fingerprint />} title={t('hyperme.identity.title')} desc={t('hyperme.identity.description')} />
              <Feature icon={<Shield />} title={t('hyperme.security.title')} desc={t('hyperme.security.description')} />
              <Feature icon={<UserIcon />} title={t('hyperme.control.title')} desc={t('hyperme.control.description')} />
            </div>

            {/* CTA */}
            <div className="mt-10 space-y-4">
              <a
                href="https://profile.io.vn"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-[#00E0FF]/10 text-[#00E0FF] border border-[#00E0FF]/30 rounded-lg hover:bg-[#00E0FF]/20 transition-all duration-300 inline-flex items-center"
              >
                {t('hyperme.visitButton')} <span className="ml-2">→</span>
              </a>

              <p className="text-gray-400 text-sm">{t('hyperme.ctaLine1')}</p>
              <p className="text-gray-500 text-xs italic">{t('hyperme.ctaLine2')}</p>
            </div>
          </div>

          {/* RIGHT — CLEAN MOCKUP */}
          <div className="flex justify-center relative">
            <HyperMEMockupSection />
          </div>

        </div>
      </div>
    </section>
  );
};

const Feature = ({ icon, title, desc }) => (
  <div className="flex items-start space-x-4">
    <div className="bg-[#00E0FF]/10 p-2 rounded-lg text-[#00E0FF]">
      {icon}
    </div>
    <div>
      <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
      <p className="text-gray-300">{desc}</p>
    </div>
  </div>
);
