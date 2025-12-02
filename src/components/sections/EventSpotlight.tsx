import React from "react";
import { FeaturedGrid } from "./hero/FeaturedGrid";

export const EventSpotlight: React.FC = () => {
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

        {/* WRAPPER CHO PHẦN TITLE — CĂN GIỮA THỊ GIÁC */}
        <div className="flex flex-col items-center justify-center text-center mb-12">

          {/* HYPER ONE — CĂN GIỮA CHUẨN KHÔNG LỆCH 1PX */}
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
              style={{
                paddingLeft: "0.05em", // FIX TRỤC NGANG CHỮ 'H'
                paddingRight: "0.05em",
              }}
            >
              HYPER ONE
            </span>
          </div>

          {/* SPOTLIGHT — BELOW LOGO, CHUẨN CENTER */}
          <h2
            className="
              text-[1.3rem] md:text-[1.6rem]
              font-semibold
              text-white/90 mt-3 leading-tight
            "
          >
            Spotlight
          </h2>
        </div>

        {/* GRID ẢNH */}
        <div className="w-full max-w-4xl mx-auto">
          <FeaturedGrid />
        </div>
      </div>
    </section>
  );
};
