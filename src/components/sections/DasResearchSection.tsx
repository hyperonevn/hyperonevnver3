import React from "react";
import { useLanguage } from "../../context/LanguageContext";

export const DasResearchSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="py-16 relative">
      {/* LIGHT GLOW */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.05),transparent_75%)]"></div>

      <div className="relative container mx-auto px-4 max-w-4xl text-center">

        {/* LOGO */}
        <div className="flex justify-center mb-5">
          <div className="p-[2px] rounded-xl bg-gradient-to-br from-[#00E0FF]/40 to-[#FFD166]/40 shadow-lg">
            <img
              src="https://pub-f826d697a1694a0dac74ab8db71a8d8d.r2.dev/hyperone/partners/das.jpg"
              alt={t("das.title")}
              className="h-14 w-14 md:h-16 md:w-16 rounded-lg object-cover"
            />
          </div>
        </div>

        {/* TITLE */}
        <h2
          className="
            text-2xl md:text-3xl font-bold mb-3
            bg-gradient-to-r from-white to-gray-300 
            bg-clip-text text-transparent
            tracking-tight
          "
        >
          {t("das.title")}
        </h2>

        {/* SMALL DIVIDER */}
        <div className="h-[2px] w-20 mx-auto mb-6 bg-gradient-to-r from-[#00E0FF] to-[#FFD166]/80 rounded-full"></div>

        {/* DESCRIPTION */}
        <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-6">
          {t("das.description")}
        </p>

        {/* CTA */}
        <a
          href="https://das.io.vn"
          target="_blank"
          rel="noopener noreferrer"
          className="
            inline-flex items-center px-5 py-2.5 rounded-full
            text-white text-sm md:text-base font-medium
            border border-white/30 
            hover:border-[#00E0FF] 
            hover:bg-white/5 
            transition-all duration-300
          "
        >
          {t("das.cta")}
          <span className="ml-2 text-lg">→</span>
        </a>

      </div>
    </section>
  );
};
