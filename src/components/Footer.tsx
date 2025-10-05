import { Leaf, Facebook, Instagram, Mail, Phone } from "lucide-react";
import Logo from "@/assets/logo1-Photoroom.png";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { label: t("footer.companyLinks.about"), href: "#features" },
      { label: t("footer.companyLinks.products"), href: "#products" },
      { label: t("footer.companyLinks.delivery"), href: "#delivery" },
      { label: t("footer.companyLinks.contact"), href: "#contact" },
    ],
    legal: [
      { label: t("footer.legalLinks.terms"), href: "#" },
      { label: t("footer.legalLinks.privacy"), href: "#" },
      { label: t("footer.legalLinks.refund"), href: "#" },
    ],
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-card border-t border-border/50">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <span className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                <img 
                  src={Logo} 
                  alt="Logo" 
                  className="h-12 w-auto object-contain" 
                />
              </span>
            </div>
            <p className="text-muted-foreground text-sm">
              {t("footer.description")}
            </p>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-semibold mb-4">{t("footer.companyTitle")}</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => link.href.startsWith('#') && scrollToSection(link.href.slice(1))}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="font-semibold mb-4">{t("footer.legalTitle")}</h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4">{t("footer.contactTitle")}</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="tel:+998901234567"
                  className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  <Phone className="w-4 h-4" />
                  +998 00 000-00-00
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@bioherbals.uz"
                  className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  <Mail className="w-4 h-4" />
                  info@bioherbals.uz
                </a>
              </li>
            </ul>

            {/* Social Media */}
            <div className="mt-6">
              <h4 className="font-semibold mb-3 text-sm">{t("footer.socialTitle")}</h4>
              <div className="flex gap-3">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-muted hover:bg-primary/10 flex items-center justify-center transition-colors group"
                >
                  <Facebook className="w-5 h-5 text-muted-foreground group-hover:text-primary" />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-muted hover:bg-primary/10 flex items-center justify-center transition-colors group"
                >
                  <Instagram className="w-5 h-5 text-muted-foreground group-hover:text-primary" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border/50">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground text-center md:text-left">
              © {currentYear} BIOHERBALS. {t("footer.rights")}
            </p>
            <p className="text-sm text-muted-foreground text-center md:text-right">
              {t("footer.worldwide")}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
