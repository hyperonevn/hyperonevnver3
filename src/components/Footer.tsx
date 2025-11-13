import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { GithubIcon, LinkedinIcon, InstagramIcon, FacebookIcon } from 'lucide-react';

export const Footer: React.FC = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-gray-800 mt-20">
      <div className="container mx-auto px-4 py-14">

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          
          {/* BRAND */}
          <div>
            <h3 className="text-xl font-bold bg-gradient-to-r from-[#00E0FF] to-[#FFD166] bg-clip-text text-transparent mb-4">
              HYPER ONE
            </h3>
            <p className="text-gray-400 leading-relaxed max-w-sm mb-6">
              {t('footer.description')}
            </p>
            <div className="flex space-x-5">
              <a className="group" href="#">
                <FacebookIcon className="h-5 w-5 text-gray-400 group-hover:text-[#00E0FF] transition-all duration-200" />
              </a>
              <a className="group" href="#">
                <InstagramIcon className="h-5 w-5 text-gray-400 group-hover:text-[#00E0FF] transition-all duration-200" />
              </a>
              <a className="group" href="#">
                <LinkedinIcon className="h-5 w-5 text-gray-400 group-hover:text-[#00E0FF] transition-all duration-200" />
              </a>
              <a className="group" href="#">
                <GithubIcon className="h-5 w-5 text-gray-400 group-hover:text-[#00E0FF] transition-all duration-200" />
              </a>
            </div>
          </div>

          {/* LINKS */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-5 tracking-wide">
              {t('footer.links')}
            </h3>
            <ul className="space-y-3">
              <li>
                <a href="#about" className="text-gray-400 hover:text-[#00E0FF] transition-colors">
                  {t('nav.about')}
                </a>
              </li>
              <li>
                <a href="#solutions" className="text-gray-400 hover:text-[#00E0FF] transition-colors">
                  {t('nav.solutions')}
                </a>
              </li>
              <li>
                <a href="#career" className="text-gray-400 hover:text-[#00E0FF] transition-colors">
                  {t('nav.career')}
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-[#00E0FF] transition-colors">
                  {t('nav.contact')}
                </a>
              </li>
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-5 tracking-wide">
              {t('footer.contact')}
            </h3>
            <address className="text-gray-400 not-italic space-y-2 leading-relaxed">
              <p>Ho Chi Minh City, Vietnam</p>
              <p>info@hyperonevn.com</p>
              <p>+84 352608068</p>
            </address>
          </div>

        </div>

        {/* BOTTOM */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
           {t('footer.rights')}
          </p>

          <div className="flex space-x-8 mt-5 md:mt-0">
            <a
              href="https://privacy.hyperonevn.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-[#00E0FF] text-sm transition-colors"
            >
              {t('footer.privacy')}
            </a>

            <a
              href="#"
              className="text-gray-400 hover:text-[#00E0FF] text-sm transition-colors"
            >
              {t('footer.terms')}
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};
