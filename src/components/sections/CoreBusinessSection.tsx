import React from "react";
import { useLanguage } from "../../context/LanguageContext";
import { motion } from "framer-motion";

import {
  BrainCircuit,
  Layers,
  Share2,
  Users,
  Sparkles,
  GraduationCap
} from "lucide-react";

export const CoreBusinessSection: React.FC = () => {
  const { t } = useLanguage();

  // ⭐ FLAGSHIP – CARD ĐỘC TÔN
  const flagship = {
    icon: Users,
    title: t("cofounderandtechpartner.title"),
    desc: t("cofounderandtechpartner.info")
  };

  // ⭐ 5 business pillars còn lại
  const others = [
    { icon: BrainCircuit, title: t("coreBusiness.items.0.title"), desc: t("coreBusiness.items.0.description") },
    { icon: Layers, title: t("coreBusiness.items.1.title"), desc: t("coreBusiness.items.1.description") },
    { icon: Share2, title: t("coreBusiness.items.2.title"), desc: t("coreBusiness.items.2.description") },
    { icon: Sparkles, title: t("coreBusiness.items.4.title"), desc: t("coreBusiness.items.4.description") },
    { icon: GraduationCap, title: t("coreBusiness.items.5.title"), desc: t("coreBusiness.items.5.description") }
  ];

  return (
    <section id="core-business" className="py-20 md:py-28 relative bg-black text-white overflow-hidden">

      {/* Glow nền */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,180,255,0.10),transparent_70%)]"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">

        {/* TITLE */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="text-3xl md:text-4xl font-bold text-center 
                     bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-4"
        >
          {t("coreBusiness.title")}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="text-gray-400 text-center max-w-xl mx-auto mb-14 text-base md:text-lg"
        >
          {t("coreBusiness.subtitle")}
        </motion.p>

        {/* ⭐ FLAGSHIP CARD */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="
            w-full p-10 md:p-12 rounded-3xl mb-20
            bg-[#000f17]/90 backdrop-blur-md
            border border-[#FFD166]/40
            shadow-[0_0_40px_rgba(255,209,102,0.35)]
            relative overflow-hidden
          "
        >
          {/* VÒNG HÀO QUANG CHO USERS ICON */}
          <div className="absolute -top-10 -left-10 w-40 h-40 rounded-full 
                          bg-gradient-to-br from-[#FFD166]/40 to-transparent blur-2xl"></div>

          <div className="flex flex-col md:flex-row md:items-center gap-6 relative z-10">

            {/* ICON VIP */}
            <div className="flex-shrink-0">
              <flagship.icon
                className="
                  h-16 w-16 md:h-20 md:w-20 text-[#FFD166]
                  drop-shadow-[0_0_25px_rgba(255,209,102,0.6)]
                "
              />
            </div>

            {/* TEXT */}
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
                {flagship.title}
              </h3>
              <p className="text-gray-200 text-lg md:text-xl leading-relaxed">
                {flagship.desc}
              </p>
            </div>
          </div>
        </motion.div>

        {/* ⭐ 5 PILLARS GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {others.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: i * 0.1 }}
                className="
                  p-6 md:p-8 rounded-2xl
                  bg-[#06141c]/60 
                  border border-[#0ae0ff]/20 
                  shadow-lg
                  hover:bg-[#0a1f2d]/80 hover:border-[#00e0ff]/40
                  hover:scale-[1.03] transition-all duration-300
                "
              >
                <Icon className="h-8 w-8 text-[#00E0FF] mb-4" />

                <h3 className="text-lg md:text-xl font-semibold text-white mb-2">
                  {item.title}
                </h3>

                <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                  {item.desc}
                </p>
              </motion.div>
            );
          })}

        </div>

      </div>
    </section>
  );
};
