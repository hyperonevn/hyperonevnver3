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

  // ⭐ NEW — NVIDIA
  {
    key: "nvidia",
    name: "NVIDIA",
    logo: "https://upload.wikimedia.org/wikipedia/sco/2/21/Nvidia_logo.svg",
  }
];

export const TechStackSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="w-full py-16 text-center">
      <h2 className="text-4xl font-bold mb-10 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
        {t("hypercales.title")}
      </h2>

      <p className="text-gray-300 max-w-3xl leading-relaxed mb-12 mx-auto">
        {t("hypercales.subtitle")}
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {tech.map((item) => (
          <div
            key={item.key}
            className="p-6 rounded-xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-white/20 transition duration-200"
          >
            <div className="flex items-center gap-4">
              <img
                src={item.logo}
                className="w-12 h-12 object-contain"
                alt={item.name}
              />
              <h3 className="text-xl font-semibold">{item.name}</h3>
            </div>

            <p className="text-gray-300 mt-3 text-sm">
              {t(`hypercales.${item.key}.desc`)}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};
