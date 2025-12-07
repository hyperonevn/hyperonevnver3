import React from "react";
import { useLanguage } from "../../context/LanguageContext";

export const DasResearchSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="py-20 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.04),transparent_70%)]"></div>

      <div className="relative container mx-auto px-4 max-w-4xl text-center">

        {/* LOGO */}
        <div className="flex justify-center mb-8">
          <img
            src="https://pub-f826d697a1694a0dac74ab8db71a8d8d.r2.dev/hyperone/partners/das.jpg"
            alt={t("das.title")}
            className="h-20 w-20 rounded-lg object-cover shadow-lg opacity-90"
          />
        </div>

        {/* TITLE */}
        <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
          {t("das.title")}
        </h2>

        <div className="h-1 w-24 bg-gradient-to-r from-[#00E0FF] to-[#FFD166] mx-auto mb-8"></div>

        {/* DESCRIPTION */}
        <p className="text-gray-300 leading-relaxed text-lg md:text-xl mb-10">
          {t("das.description")}
        </p>

        {/* CTA BUTTON */}
        <div className="mt-6">
          <a
            href="https://das.io.vn"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 rounded-full border border-white/40 text-white hover:bg-white/10 transition-all duration-300"
          >
            {t("das.cta")}
            <span className="ml-2">→</span>
          </a>
        </div>

      </div>
    </section>
  );
};
