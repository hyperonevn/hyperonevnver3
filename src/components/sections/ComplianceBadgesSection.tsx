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
    <section className="py-24 px-6 md:px-12 bg-[#0d1117] text-white relative overflow-hidden">

      <div className="relative max-w-7xl mx-auto text-center">

        <h2 className="text-4xl md:text-5xl font-extrabold mb-6 
          bg-gradient-to-r from-blue-300 via-cyan-200 to-blue-400
          bg-clip-text text-transparent drop-shadow-lg">
          {t("compliance.title")}
        </h2>

        <p className="text-gray-300 max-w-3xl mx-auto mb-16 leading-relaxed text-lg">
          {t("compliance.description")}
        </p>

        {/* badge grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {badges.map((item) => (
            <div key={item.code} className="bg-[#161b22] p-6 rounded-xl">
              <div className="w-28 h-28 mx-auto mb-4 flex items-center justify-center 
                rounded-full border-2 border-blue-400 text-blue-300 text-2xl font-bold">
                {item.code}
              </div>
              <h3 className="text-lg font-semibold text-gray-100 mb-2">{item.title}</h3>
              <p className="text-sm text-gray-300">{item.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
