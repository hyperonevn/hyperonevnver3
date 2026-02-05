import React from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";

export const CompanyInfoPage: React.FC = () => {
  const { t } = useLanguage();
  const overview = t("company.overview") as { label: string; value: string }[];
  const businessAreas = t("company.businessAreas") as string[];
  const history = t("company.history") as {
    date: string;
    items: string[];
  }[];

  return (
    <div className="min-h-screen bg-[#0A0C0F] text-white">
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(0,224,255,0.10),transparent_60%)]" />
        <div className="relative z-10 max-w-6xl mx-auto px-6 py-16">
          <div className="flex items-center justify-between gap-6 flex-wrap">
            <div>
              <p className="text-sm uppercase tracking-widest text-[#7DE3FF]">
                {t("company.kicker")}
              </p>
              <h1 className="text-3xl md:text-5xl font-bold mt-3">
                {t("company.title")}
              </h1>
              <p className="text-gray-300 mt-4 max-w-3xl">
                {t("company.subtitle")}
              </p>
            </div>
            <Link
              to="/"
              className="px-4 py-2 rounded-lg border border-[#00E0FF] text-[#00E0FF] hover:bg-[#00E0FF]/10 transition"
            >
              {t("company.backHome")}
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 pb-20 space-y-12">
        <section className="bg-[#0F141A] border border-white/10 rounded-2xl p-6 md:p-8">
          <h2 className="text-2xl font-semibold mb-6">
            {t("company.sections.overview")}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {overview.map((item) => (
              <div key={item.label} className="space-y-2">
                <p className="text-sm text-gray-400">{item.label}</p>
                <p className="text-white">{item.value}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-[#0F141A] border border-white/10 rounded-2xl p-6 md:p-8">
          <h2 className="text-2xl font-semibold mb-6">
            {t("company.sections.businessAreas")}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {businessAreas.map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 rounded-xl border border-white/5 bg-white/5 p-4"
              >
                <span className="mt-1 h-2 w-2 rounded-full bg-[#00E0FF]" />
                <p className="text-gray-200">{item}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-[#0F141A] border border-white/10 rounded-2xl p-6 md:p-8">
          <h2 className="text-2xl font-semibold mb-6">
            {t("company.sections.history")}
          </h2>
          <div className="space-y-6">
            {history.map((entry) => (
              <div
                key={entry.date}
                className="rounded-xl border border-white/5 bg-gradient-to-r from-white/5 to-transparent p-5"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-[#00E0FF] font-semibold">
                    {entry.date}
                  </span>
                  <div className="h-px flex-1 bg-white/10" />
                </div>
                <ul className="space-y-2 text-gray-200 list-disc list-inside">
                  {entry.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};
