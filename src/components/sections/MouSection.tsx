import React from "react";
import { useLanguage } from "../../context/LanguageContext";

export const MouSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="mou" className="py-24 relative bg-black text-white overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,224,255,0.06),transparent_70%)]"></div>

      <div className="container mx-auto px-6 relative z-10">

        {/* TITLE */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            {t("mou.title")}
          </h2>
          <div className="h-1 w-24 mx-auto mt-4 mb-8 bg-gradient-to-r from-[#00E0FF] to-[#FFD166]"></div>
          <p className="text-gray-300 text-lg">{t("mou.subtitle")}</p>
        </div>

        {/* IMAGE */}
        <div className="flex justify-center mb-12">
          <img
            src="https://pub-f826d697a1694a0dac74ab8db71a8d8d.r2.dev/hyperone/partners/sps.jpg"
            alt="MOU Signing"
            className="w-full max-w-md rounded-xl border border-[#00E0FF]/20 shadow-[0_0_25px_rgba(0,224,255,0.2)] object-cover"
          />
        </div>

        {/* CONTENT */}
        <div className="max-w-4xl mx-auto space-y-6 text-gray-300 text-lg leading-relaxed">
          <p>{t("mou.content1")}</p>
          <p>{t("mou.content2")}</p>
          <p>{t("mou.content3")}</p>
          <p>{t("mou.content4")}</p>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a
            href="https://spssps.co.kr"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-full border border-[#00E0FF]/50 text-[#00E0FF] hover:bg-[#00E0FF]/10 transition-all inline-flex items-center"
          >
            {t("mou.cta")} <span className="ml-2">→</span>
          </a>
        </div>

      </div>
    </section>
  );
};
