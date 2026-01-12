import { Phone, Mail, MapPin, Instagram, Facebook } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-forest text-cream">
      <div className="container-custom section-padding pb-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <img
              src={logo}
              alt="Chalet Ciocănești"
              className="h-20 w-auto mb-4 brightness-110"
            />
            <p className="text-cream/80 text-sm leading-relaxed">
              Cabana ideală pentru vacanțe în natură, familii și grupuri. 
              Relaxare autentică în inima Bucovinei.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg font-bold mb-5">
              Linkuri rapide
            </h4>
            <nav className="space-y-3">
              {[
                { href: "#despre", label: "Despre noi" },
                { href: "#facilitati", label: "Facilități" },
                { href: "#galerie", label: "Galerie foto" },
                { href: "#relaxare", label: "Relaxare" },
                { href: "#locatie", label: "Locație" },
                { href: "#contact", label: "Contact" },
              ].map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block text-cream/70 hover:text-cream transition-colors text-sm"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-lg font-bold mb-5">Contact</h4>
            <div className="space-y-4">
              <a
                href="tel:+40700000000"
                className="flex items-center gap-3 text-cream/70 hover:text-cream transition-colors text-sm"
              >
                <Phone className="w-4 h-4" />
                0700 000 000
              </a>
              <a
                href="mailto:contact@chalet-ciocanesti.ro"
                className="flex items-center gap-3 text-cream/70 hover:text-cream transition-colors text-sm"
              >
                <Mail className="w-4 h-4" />
                contact@chalet-ciocanesti.ro
              </a>
              <div className="flex items-start gap-3 text-cream/70 text-sm">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                Ciocănești, Suceava, România
              </div>
            </div>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-display text-lg font-bold mb-5">Social Media</h4>
            <p className="text-cream/70 text-sm mb-4">
              Urmărește-ne pentru noutăți și imagini din cabană.
            </p>
            <div className="flex gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-cream/10 hover:bg-cream/20 flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-cream/10 hover:bg-cream/20 flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-cream/10">
        <div className="container-custom py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-cream/60 text-sm text-center md:text-left">
            © {currentYear} Chalet Ciocănești. Toate drepturile rezervate.
          </p>
          <p className="text-cream/40 text-xs">
            Creat cu ❤️ pentru iubitorii de munte
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
