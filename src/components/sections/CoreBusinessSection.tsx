{/* ⭐ FLAGSHIP CARD — BẢN GỌN + CTA */}
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.45 }}
  className="
    w-full p-7 md:p-9 rounded-3xl mb-16
    bg-[#000f17]/90 backdrop-blur-md
    border border-[#FFD166]/40
    shadow-[0_0_35px_rgba(255,209,102,0.28)]
    relative overflow-hidden
  "
>
  {/* HALO */}
  <div className="absolute -top-8 -left-8 w-32 h-32 rounded-full 
                  bg-gradient-to-br from-[#FFD166]/35 to-transparent blur-2xl"></div>

  <div className="flex flex-col md:flex-row md:items-center gap-5 relative z-10">

    {/* ICON */}
    <div className="flex-shrink-0">
      <flagship.icon
        className="
          h-14 w-14 md:h-16 md:w-16 text-[#FFD166]
          drop-shadow-[0_0_18px_rgba(255,209,102,0.55)]
        "
      />
    </div>

    {/* TEXT + CTA */}
    <div className="md:flex-1">
      <h3 className="text-xl md:text-2xl font-bold text-white mb-2 leading-snug">
        {flagship.title}
      </h3>

      <p className="text-gray-200 text-base md:text-lg leading-relaxed mb-4">
        {flagship.desc}
      </p>

      {/* CTA BUTTON */}
      <a
        href="#contact"
        className="
          inline-block px-5 py-2 rounded-full text-sm font-medium
          bg-gradient-to-r from-[#00E0FF] to-[#FFD166]
          text-black hover:opacity-90 transition
          shadow-[0_0_18px_rgba(0,224,255,0.35)]
        "
      >
        {t("cofounderandtechpartner.cta")}
      </a>
    </div>

  </div>
</motion.div>
