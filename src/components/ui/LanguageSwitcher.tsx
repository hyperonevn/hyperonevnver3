import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
export const LanguageSwitcher: React.FC = () => {
  const {
    language,
    setLanguage
  } = useLanguage();
  return <div className="flex items-center space-x-2 border border-gray-700 rounded-md overflow-hidden">
      <button onClick={() => setLanguage('en')} className={`px-3 py-1 text-sm transition-colors ${language === 'en' ? 'bg-[#00E0FF]/20 text-[#00E0FF]' : 'text-gray-400 hover:text-white'}`}>
        EN
      </button>
      <div className="h-4 w-px bg-gray-700"></div>
      <button onClick={() => setLanguage('vi')} className={`px-3 py-1 text-sm transition-colors ${language === 'vi' ? 'bg-[#00E0FF]/20 text-[#00E0FF]' : 'text-gray-400 hover:text-white'}`}>
        VI
      </button>
    </div>;
};