import React from "react";
import { useLanguage } from "../../context/LanguageContext";

const tech = [
  {
    key: "gemini",
    name: "Google Gemini",
    logo: "https://upload.wikimedia.org/wikipedia/commons/8/8a/Google_Gemini_logo.svg",
  },
  {
    key: "openai",
    name: "OpenAI GPT",
    logo: "https://static.vecteezy.com/system/resources/previews/022/227/365/large_2x/openai-chatgpt-logo-icon-free-png.png",
  },
  {
    key: "gcp",
    name: "Google Cloud Platform",
    logo: "https://avatars.githubusercontent.com/u/2810941?s=200&v=4",
  },
  {
    key: "cloudflare",
    name: "Cloudflare",
    logo: "https://everwas.com/wp-content/uploads/2025/06/cloudflare.png",
  },
  {
    key: "vercel",
    name: "Vercel",
    logo: "https://assets.vercel.com/image/upload/front/favicon/vercel/180x180.png",
  },
  {
    key: "nvidia",
    name: "NVIDIA",
    logo: "https://upload.wikimedia.org/wikipedia/sco/2/21/Nvidia_logo.svg",
  }
];

export const TechStackSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="w-full py-24 relative bg-black text-white overflow-hidden">

      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,224,255,0.06),transparent_75%)]"></div>

      <div className="relative z-10 container mx-auto px-6">

        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-center 
          bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-6">
          {t("hypercales.title")}
        </h2>

        <div className="h-1 w-24 bg-gradient-to-r from-[#00E0FF] to-[#FFD166] mx-auto mb-8"></div>

        <p className="text-gray-300 text-center max-w-3xl mx-auto text-lg leading-relaxed mb-14">
          {t("hypercales.subtitle")}
        </p>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tech.map((item) => (
            <div
              key={item.key}
              className="
                p-6 rounded-xl bg-gray-900/50 backdrop-blur-sm 
                border border-gray-800 hover:border-[#00E0FF]/40
                hover:shadow-[0_0_25px_rgba(0,224,255,0.15)]
                transition-all duration-300
              "
            >
              {/* LOGO + NAME */}
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={item.logo}
                  className="w-12 h-12 object-contain rounded-md"
                  alt={item.name}
                />
                <h3 className="text-xl font-semibold">{item.name}</h3>
              </div>

              {/* DESCRIPTION */}
              <p className="text-gray-300 text-sm leading-relaxed">
                {t(`hypercales.${item.key}.desc`)}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
