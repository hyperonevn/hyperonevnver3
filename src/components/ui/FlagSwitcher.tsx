import React from "react";
import { useLanguage } from "../../context/LanguageContext";

const flags: Record<string, string> = {
  
  en: "🇺🇸",
  vi: "🇻🇳",
  ja: "🇯🇵",
  ko: "🇰🇷",
  zh: "🇨🇳",
  es: "🇪🇸",
};

export const FlagSwitcher: React.FC = () => {
  const { language, setLanguage } = useLanguage();

  const locales = ["en", "vi", "ja", "ko", "zh", "es"];
  const nextLocale = locales[(locales.indexOf(language) + 1) % locales.length];

  return (
    <button
      onClick={() => {
        console.log("Changing language to:", nextLocale);
        setLanguage(nextLocale as any);
      }}
      className="text-2xl px-2 py-1 rounded-lg hover:bg-white/10 transition select-none"
    >
      {flags[language]}
    </button>
  );
};
