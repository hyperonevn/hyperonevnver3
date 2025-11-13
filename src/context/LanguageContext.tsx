import React, {
  useState,
  createContext,
  useContext,
  ReactNode
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
  const [language, setLanguage] = useState<Language>('en');

  const locales: Record<Language, LocaleData> = {
    en: enLocale,
    vi: viLocale,
    ja: jaLocale,
    ko: koLocale,
    zh: zhLocale,
    es: esLocale
  };

  const t = (key: string): string => {
    const keys = key.split('.');
    let value: any = locales[language];

    for (const k of keys) {
      if (value && value[k]) {
        value = value[k];
      } else {
        console.warn(`Missing translation key: ${key}`);
        return key;
      }
    }

    return value;
  };

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
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
