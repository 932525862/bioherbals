"use client";

import { useState, useEffect } from "react";
import { Menu, X, Phone, MessageCircle, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import Logo from "@/assets/logo1-Photoroom.png";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  const handleChangeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  const navLinks = [
    { label: t("navbar.home"), id: "hero" },
    { label: t("navbar.products"), id: "products" },
    { label: t("navbar.features"), id: "features" },
    { label: t("navbar.delivery"), id: "delivery" },
    { label: t("navbar.contact"), id: "contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-lg shadow-[var(--shadow-medium)]"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="flex items-center justify-between h-24">
              <img
                src={Logo}
                alt="Logo"
                className="h-12 w-auto object-contain md:h-16"
              />
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
              </button>
            ))}
          </div>

          {/* Contact + Language */}
          <div className="hidden md:flex items-center space-x-3">
            <Button variant="ghost" size="sm">
              <Phone className="mr-2 h-4 w-4" />
              +998 00 000-00-00
            </Button>
            <Button
              variant="hero"
              size="sm"
              onClick={() => scrollToSection("contact")}
            >
              <MessageCircle className="mr-2 h-4 w-4" />
              {t("navbar.connect")}
            </Button>

            {/* Language Selector */}
            <div className="flex items-center space-x-2 ml-2">
              <Globe className="h-5 w-5 text-foreground/70" />
              <select
                onChange={(e) => handleChangeLanguage(e.target.value)}
                value={i18n.language}
                className="bg-transparent border border-border rounded-md px-2 py-1 text-sm focus:outline-none"
              >
                <option value="uz">UZ</option>
                <option value="ru">RU</option>
                <option value="en">EN</option>
              </select>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 space-y-4 animate-fade-in">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="block w-full text-left py-2 px-4 text-foreground/80 hover:text-primary hover:bg-muted rounded-lg transition-colors"
              >
                {link.label}
              </button>
            ))}

            <div className="pt-4 border-t border-border space-y-3">
              <Button variant="outline" size="sm" className="w-full">
                <Phone className="mr-2 h-4 w-4" />
                +998 00 000-00-00
              </Button>
              <Button
                variant="hero"
                size="sm"
                className="w-full"
                onClick={() => scrollToSection("contact")}
              >
                <MessageCircle className="mr-2 h-4 w-4" />
                {t("navbar.connect")}
              </Button>

              {/* Mobile Language Selector */}
              <div className="flex items-center justify-center space-x-2 pt-3">
                <Globe className="h-5 w-5 text-foreground/70" />
                <select
                  onChange={(e) => handleChangeLanguage(e.target.value)}
                  value={i18n.language}
                  className="bg-transparent border border-border rounded-md px-2 py-1 text-sm focus:outline-none"
                >
                  <option value="uz">UZ</option>
                  <option value="ru">RU</option>
                  <option value="en">EN</option>
                </select>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
