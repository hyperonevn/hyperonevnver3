import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
import { MenuIcon, XIcon } from "lucide-react";
import { FlagSwitcher } from "./ui/FlagSwitcher";

export const Header: React.FC = () => {
  const { t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: t("nav.vision"), href: "#vision" },
    { name: t("nav.about"), href: "#about" },
    { name: t("nav.solutions"), href: "#solutions" },
    { name: t("nav.ecosystem"), href: "#ecosystem" },
    { name: t("nav.hyperme"), href: "#hyperme" },
    { name: t("nav.contact"), href: "#contact" },
  ];

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-black/80 backdrop-blur-md py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">

          {/* 🔥 LOGO HÌNH VUÔNG */}
          <a href="#vision" className="flex items-center select-none">
            <img
              src="https://pub-f826d697a1694a0dac74ab8db71a8d8d.r2.dev/logo/hyperone.jpg"
              alt="Hyper One Logo"
              className="
                h-10 w-10 md:h-12 md:w-12
                object-cover
                shadow-[0_0_10px_rgba(0,0,0,0.45)]
                transition-all duration-300
                hover:opacity-90
              "
            />
          </a>

          {/* DESKTOP NAV */}
          <nav className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-gray-300 hover:text-[#00D4FF] transition"
              >
                {item.name}
              </a>
            ))}
            <Link
              to="/company"
              className="text-sm font-semibold text-[#00E0FF] border border-[#00E0FF]/50 px-3 py-1.5 rounded-full hover:bg-[#00E0FF]/10 transition"
            >
              {t("common.companyInfo")}
            </Link>
            {/* Flag Switcher */}
            <FlagSwitcher />
          </nav>

          {/* MOBILE */}
          <div className="md:hidden flex items-center gap-4">
            <FlagSwitcher />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-white focus:outline-none"
            >
              {mobileMenuOpen ? (
                <XIcon className="h-6 w-6" />
              ) : (
                <MenuIcon className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE MENU */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-lg">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-3">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-base font-medium text-gray-300 hover:text-[#00D4FF] transition py-2"
                >
                  {item.name}
                </a>
              ))}
              <Link
                to="/company"
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-semibold text-[#00E0FF] border border-[#00E0FF]/50 px-3 py-2 rounded-full hover:bg-[#00E0FF]/10 transition"
              >
                {t("common.companyInfo")}
              </Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};
