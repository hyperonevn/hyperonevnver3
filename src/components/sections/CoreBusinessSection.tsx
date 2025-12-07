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

  const items = [
    { icon: BrainCircuit, title: t("coreBusiness.items.0.title"), desc: t("coreBusiness.items.0.description") },
    { icon: Layers, title: t("coreBusiness.items.1.title"), desc: t("coreBusiness.items.1.description") },
    { icon: Share2, title: t("coreBusiness.items.2.title"), desc: t("coreBusiness.items.2.description") },
    { icon: Users, title: t("coreBusiness.items.3.title"), desc: t("coreBusiness.items.3.description") },
    { icon: Sparkles, title: t("coreBusiness.items.4.title"), desc: t("coreBusiness.items.4.description") },
    { icon: GraduationCap, title: t("coreBusiness.items.5.title"), desc: t("coreBusiness.items.5.description") }
  ];

  return (
    <section id="core-business" className="py-16 md:py-24 relative bg-black text-white overflow-hidden">

      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,180,255,0.12),transparent_70%)]"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">

        {/* TITLE */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-2xl md:text-4xl font-bold text-center bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-3"
        >
          {t("coreBusiness.title")}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="text-gray-400 text-center max-w-xl mx-auto mb-10 md:mb-14 text-base md:text-lg"
        >
          {t("coreBusiness.subtitle")}
        </motion.p>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">

          {items.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.1 }}
                className="p-6 md:p-8 bg-[#0a1a24]/60 border border-[#0ae0ff]/20 rounded-2xl shadow-lg 
                           hover:bg-[#0a1f2d]/80 hover:border-[#00e0ff]/40 
                           transition-all duration-300 hover:scale-[1.02]"
              >
                <Icon className="h-7 w-7 md:h-8 md:w-8 text-[#00E0FF] mb-4" />

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
