import React, {
  useState,
  createContext,
  useContext,
  ReactNode,
  useEffect
} from 'react';

// Import all locales
import enLocale from '../locales/en.json';
import viLocale from '../locales/vi.json';
import jaLocale from '../locales/ja.json';
import koLocale from '../locales/ko.json';
import zhLocale from '../locales/cn.json';
import esLocale from '../locales/es.json';

// 6 languages
type Language = 'en' | 'vi' | 'ja' | 'ko' | 'zh' | 'es';
type LocaleData = typeof enLocale;

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  // ⭐ Chỉ định null để CHỜ lấy ngôn ngữ trước khi render UI
  const [language, setLanguage] = useState<Language | null>(null);

  const locales: Record<Language, LocaleData> = {
    en: enLocale,
    vi: viLocale,
    ja: jaLocale,
    ko: koLocale,
    zh: zhLocale,
    es: esLocale
  };

  // ⭐ Load language từ localStorage hoặc default VI
  useEffect(() => {
    const saved = localStorage.getItem('lang') as Language | null;
    setLanguage(saved || 'vi');
  }, []);

  // ⭐ Save language khi đổi
  const updateLanguage = (lang: Language) => {
    localStorage.setItem('lang', lang);
    setLanguage(lang);
  };

  const t = (key: string): string => {
    if (!language) return ''; // chưa load thì tránh lỗi
    
    const keys = key.split('.');
    let value: any = locales[language];

    for (const k of keys) {
      if (value && value[k] !== undefined) {
        value = value[k];
      } else {
        console.warn(`Missing translation key: ${key}`);
        return key;
      }
    }

    return value;
  };

  // ⭐ Quan trọng: CHƯA CÓ LANGUAGE → KHÔNG RENDER UI → tránh flash EN
  if (!language) return null;

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage: updateLanguage,
        t
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used inside LanguageProvider");
  return context;
};
