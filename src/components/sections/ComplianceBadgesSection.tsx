import React from "react";
import { useTranslation } from "react-i18next";

export const ComplianceBadgesSection: React.FC = () => {
  const { t } = useTranslation();

  const badges = [
    { code: "29100", ...t("compliance.badges.29100") },
    { code: "27017", ...t("compliance.badges.27017") },
    { code: "27018", ...t("compliance.badges.27018") },
    { code: "27557", ...t("compliance.badges.27557") }
  ];

  return (
    <section className="py-24 px-6 md:px-12 bg-[#0d1117] text-white relative overflow-hidden">

      {/* BACKGROUND ORB EFFECT */}
      <div className="absolute inset-0 opacity-[0.15] pointer-events-none">
        <div className="w-[800px] h-[800px] bg-blue-500/20 rounded-full blur-[180px] absolute -top-40 -left-40"></div>
        <div className="w-[600px] h-[600px] bg-cyan-400/20 rounded-full blur-[160px] absolute bottom-0 right-0"></div>
      </div>

      <div className="relative max-w-7xl mx-auto text-center">

        {/* TITLE */}
        <h2 className="text-4xl md:text-5xl font-extrabold mb-6 
          bg-gradient-to-r from-blue-300 via-cyan-200 to-blue-400
          bg-clip-text text-transparent drop-shadow-lg">
          {t("compliance.title")}
        </h2>

        {/* SUBTITLE */}
        <p className="text-gray-300 max-w-3xl mx-auto mb-16 leading-relaxed text-lg">
          {t("compliance.subtitle")}
        </p>

        {/* BADGE GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {badges.map((item) => (
            <div
              key={item.code}
              className="group relative bg-[#161b22] border border-[#2a2f36]
                rounded-2xl p-6 shadow-md transition-all duration-300
                hover:-translate-y-2 hover:shadow-blue-500/40 hover:border-blue-400/60"
            >
              {/* BADGE */}
              <div className="relative w-28 h-28 mx-auto mb-4">
                {/* glow ring */}
                <div className="absolute inset-0 rounded-full 
                  bg-gradient-to-r from-blue-300 to-blue-600 
                  blur-xl opacity-30 group-hover:opacity-60 transition-all">
                </div>

                {/* main circle */}
                <div className="relative w-28 h-28 rounded-full
                  bg-[#0d1117] border-2 border-blue-400 shadow-inner
                  flex items-center justify-center text-2xl font-bold text-blue-300
                  group-hover:border-blue-300 group-hover:text-blue-200 transition-all">
                  {item.code}
                </div>
              </div>

              {/* TITLE */}
              <h3 className="text-lg font-semibold text-gray-100 mb-2">
                {item.title}
              </h3>

              {/* DESCRIPTION */}
              <p className="text-sm text-gray-300 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
