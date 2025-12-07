import React from "react";
import { useLanguage } from "../../context/LanguageContext";

export const DasResearchSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="py-14 md:py-20 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.04),transparent_70%)]"></div>

      <div className="relative container mx-auto px-4 max-w-3xl text-center">

        {/* LOGO */}
        <div className="flex justify-center mb-6 md:mb-8">
          <img
            src="https://pub-f826d697a1694a0dac74ab8db71a8d8d.r2.dev/hyperone/partners/das.jpg"
            alt={t("das.title")}
            className="h-14 w-14 md:h-20 md:w-20 rounded-lg object-cover shadow-lg opacity-90"
          />
        </div>

        {/* TITLE */}
        <h2 className="text-2xl md:text-4xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent leading-snug">
          {t("das.title")}
        </h2>

        {/* DIVIDER */}
        <div className="h-1 w-16 md:w-24 bg-gradient-to-r from-[#00E0FF] to-[#FFD166] mx-auto mb-6 md:mb-8"></div>

        {/* DESCRIPTION */}
        <p className="text-gray-300 leading-relaxed text-base md:text-xl mb-8 md:mb-10 px-1">
          {t("das.description")}
        </p>

        {/* CTA BUTTON */}
        <div className="mt-4">
          <a
            href="https://das.io.vn"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-2.5 md:px-6 md:py-3 rounded-full border border-white/40 text-white text-sm md:text-base hover:bg-white/10 transition-all duration-300"
          >
            {t("das.cta")}
            <span className="ml-2">→</span>
          </a>
        </div>

      </div>
    </section>
  );
};
