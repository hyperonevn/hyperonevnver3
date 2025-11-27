import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { BadgeCheckIcon, BuildingIcon } from 'lucide-react';

export const MembershipSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section
      id="membership"
      className="py-24 relative bg-black text-white overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,224,255,0.06),transparent_70%)]"></div>

      <div className="container mx-auto px-6 relative z-10">

        {/* TITLE + SUBTITLE */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            {t('membership.title')}
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-[#00E0FF] to-[#FFD166] mx-auto mt-4 mb-6"></div>
          <p className="text-gray-300 text-lg mb-10">
            {t('membership.subtitle')}
          </p>
        </div>

        {/* LOGO UNDER TITLE */}
        <div className="flex justify-center mb-16">
          <div className="bg-gray-900/40 p-6 rounded-xl border border-gray-800 shadow-[0_0_20px_rgba(0,224,255,0.12)]">
            <img
              src="https://raw.githubusercontent.com/hyperonevn/hyperonevnver3/main/hcmrea-logo.png"
              alt="HCMREA Logo"
              className="h-20 w-auto object-contain filter brightness-110"
            />
          </div>
        </div>

        {/* ================================
            CERTIFICATE IMAGE (NEW)
        ================================ */}
        <div className="flex justify-center mb-16">
          <div className="bg-gray-900/40 p-4 rounded-xl border border-gray-800 shadow-[0_0_25px_rgba(0,224,255,0.12)]">
            <img
              src="https://pub-f826d697a1694a0dac74ab8db71a8d8d.r2.dev/hcmrea.jpg"
              alt="HCMREA Certificate"
              className="w-full max-w-xl rounded-lg object-cover shadow-lg border border-gray-700"
            />
          </div>
        </div>

        {/* CONTENT CARD */}
        <div className="max-w-4xl mx-auto bg-gray-900/60 backdrop-blur-sm border border-gray-800 rounded-xl p-10 text-center hover:shadow-[0_0_30px_rgba(0,224,255,0.15)] transition-all">
          <BadgeCheckIcon className="h-14 w-14 mx-auto text-[#00E0FF] mb-5" />

          <h3 className="text-2xl font-semibold mb-4">
            {t('membership.hcmreaTitle')}
          </h3>

          <p className="text-gray-300 text-lg leading-relaxed mb-4">
            {t('membership.hcmreaDesc')}
          </p>

          <div className="flex items-center justify-center gap-3 text-[#FFD166] mt-6">
            <BuildingIcon className="h-6 w-6" />
            <span className="text-lg font-medium">
              {t('membership.official')}
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};
