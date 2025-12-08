import React from "react";
import { useLanguage } from "../../context/LanguageContext";

export const MouSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section
      id="mou"
      className="py-20 md:py-24 relative bg-black text-white overflow-hidden"
    >
      {/* Soft Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,224,255,0.05),transparent_80%)]"></div>

      <div className="container mx-auto px-6 relative z-10 max-w-5xl">

        {/* TITLE BLOCK */}
        <div className="text-center mb-14">
          <h2
            className="
              text-3xl md:text-4xl font-bold tracking-tight
              bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent
            "
          >
            {t("mou.title")}
          </h2>

          <div className="h-[2px] w-20 mx-auto mt-4 mb-6 rounded-full bg-gradient-to-r from-[#00E0FF] to-[#FFD166]"></div>

          <p className="text-gray-300 text-lg leading-relaxed max-w-2xl mx-auto">
            {t("mou.subtitle")}
          </p>
        </div>

        {/* IMAGE */}
        <div className="flex justify-center mb-14">
          <div
            className="
              rounded-2xl overflow-hidden
              border border-white/10
              shadow-[0_0_28px_rgba(0,224,255,0.18)]
              bg-gray-900/20 w-full max-w-xl
            "
          >
            <img
              src="https://pub-f826d697a1694a0dac74ab8db71a8d8d.r2.dev/hyperone/partners/sps.jpg"
              alt="MOU Signing"
              className="w-full object-cover"
            />
          </div>
        </div>

        {/* CONTENT */}
        <div className="space-y-5 text-gray-300 text-lg leading-[1.8] max-w-4xl mx-auto">
          <p>{t("mou.content1")}</p>
          <p>{t("mou.content2")}</p>
          <p>{t("mou.content3")}</p>
          <p>{t("mou.content4")}</p>
        </div>

        {/* CTA BUTTON */}
        <div className="text-center mt-16">
          <a
            href="https://spssps.co.kr"
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-flex items-center
              px-6 py-3 rounded-full
              border border-[#00E0FF]/50 text-[#00E0FF]
              hover:bg-[#00E0FF]/10 transition-all duration-300
              text-base font-medium
            "
          >
            {t("mou.cta")}
            <span className="ml-2">→</span>
          </a>
        </div>

      </div>
    </section>
  );
};
