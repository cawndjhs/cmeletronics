import { Instagram, MapPin, MessageCircle } from "lucide-react";
import logo from "@/assets/logo.png";

const WHATSAPP_BASE = "https://wa.me/5581SEUNUMEROAQUI";

const Footer = () => (
  <>
    <footer className="border-t border-border py-10 px-4">
      <div className="container mx-auto max-w-6xl flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-muted-foreground">
        <img src={logo} alt="CM Eletrônicos" className="h-14" />

        <div className="flex flex-col sm:flex-row items-center gap-4">
          <a
            href="https://instagram.com/cm.eletronics"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 hover:text-primary transition-colors"
          >
            <Instagram className="w-4 h-4" />
            @cm.eletronics
          </a>
          <span className="inline-flex items-center gap-2">
            <MapPin className="w-4 h-4" />
            Belo Jardim – PE
          </span>
        </div>

        <span className="text-xs text-muted-foreground/60">
          © {new Date().getFullYear()} CM Eletrônicos. Todos os direitos reservados.
        </span>
      </div>
    </footer>

    {/* Floating WhatsApp button */}
    <a
      href={`${WHATSAPP_BASE}?text=${encodeURIComponent("Olá!")}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-success text-success-foreground flex items-center justify-center shadow-lg transition-transform duration-200 hover:scale-110 animate-pulse-glow"
      aria-label="WhatsApp"
    >
      <MessageCircle className="w-7 h-7" />
    </a>
  </>
);

export default Footer;
