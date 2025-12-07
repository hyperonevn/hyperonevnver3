import React from "react";
import { FeaturedGrid } from "./hero/FeaturedGrid";
import { useLanguage } from "../../context/LanguageContext";

export const EventSpotlight: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section
      id="spotlight"
      className="
        py-24
        bg-[#000a0f]
        bg-[radial-gradient(circle_at_top,rgba(0,224,255,0.06),transparent_75%)]
      "
    >
      <div className="container mx-auto px-6">

        {/* WRAPPER TITLE */}
        <div className="flex flex-col items-center justify-center text-center mb-12">

          {/* HYPER ONE */}
          <div className="flex items-center justify-center w-full">
            <span
              className="
                inline-block
                text-[2.7rem] md:text-[3.3rem]
                font-extrabold
                tracking-wide
                bg-gradient-to-r from-[#00E0FF] to-[#FFD166]
                bg-clip-text text-transparent
                leading-none select-none
              "
              style={{ paddingLeft: "0.05em", paddingRight: "0.05em" }}
            >
              HYPER ONE
            </span>
          </div>

          {/* SPOTLIGHT TITLE */}
          <h2
            className="
              text-[1.3rem] md:text-[1.6rem]
              font-semibold
              text-white/90 mt-3 leading-tight
            "
          >
            Spotlight
          </h2>

          {/* SPOTLIGHT DESCRIPTION (LẤY TỪ JSON) */}
          <p
            className="
              max-w-2xl mt-6 text-center text-white/80
              text-[0.95rem] md:text-[1.05rem] leading-relaxed
            "
          >
            {t("spotlight.desc")}
          </p>
        </div>

        {/* GRID ẢNH */}
        <div className="w-full max-w-4xl mx-auto">
          <FeaturedGrid />
        </div>
      </div>
    </section>
  );
};
