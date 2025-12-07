import React from "react";
import { useLanguage } from "../../context/LanguageContext";

export const ComplianceBadgesSection: React.FC = () => {
  const { t } = useLanguage();

  const badges = [
    {
      code: "29100",
      title: t("compliance.standards.29100.title"),
      desc: t("compliance.standards.29100.desc"),
    },
    {
      code: "27017",
      title: t("compliance.standards.27017.title"),
      desc: t("compliance.standards.27017.desc"),
    },
    {
      code: "27018",
      title: t("compliance.standards.27018.title"),
      desc: t("compliance.standards.27018.desc"),
    },
    {
      code: "27557",
      title: t("compliance.standards.27557.title"),
      desc: t("compliance.standards.27557.desc"),
    }
  ];

  return (
    <section className="py-24 relative bg-black text-white overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,224,255,0.07),transparent_70%)]"></div>

      <div className="relative z-10 container mx-auto px-6">

        {/* TITLE */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-3xl md:text-4xl font-bold 
              bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            {t("compliance.title")}
          </h2>

          <div className="h-1 w-24 mx-auto mt-4 bg-gradient-to-r from-[#00E0FF] to-[#FFD166]"></div>

          <p className="text-gray-300 text-lg leading-relaxed mt-6">
            {t("compliance.description")}
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {badges.map((item) => (
            <div
              key={item.code}
              className="bg-gray-900/50 rounded-xl p-6 backdrop-blur-sm 
                         border border-gray-800 transition-all duration-300
                         hover:border-[#00E0FF]/40 hover:shadow-[0_0_30px_rgba(0,224,255,0.15)]"
            >
              {/* CODE BADGE */}
              <div className="w-24 h-24 mx-auto mb-5 flex items-center justify-center
                              rounded-full border border-[#00E0FF]/40
                              text-[#00E0FF] font-bold text-2xl tracking-wide">
                {item.code}
              </div>

              <h3 className="text-lg font-semibold text-white mb-2 text-center">
                {item.title}
              </h3>

              <p className="text-sm text-gray-300 leading-relaxed text-center">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <a
            href="https://compliance.hyperone.site"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-full border border-[#00E0FF]/40 
                       text-[#00E0FF] hover:bg-[#00E0FF]/10 
                       transition-all font-medium inline-flex items-center"
          >
            {t("compliance.viewMore")} →
          </a>
        </div>

      </div>
    </section>
  );
};
