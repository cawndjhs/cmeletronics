import { useState } from "react";
import { Menu, X, MessageCircle } from "lucide-react";
import logo from "@/assets/logo.png";

const WHATSAPP_BASE = "https://wa.me/5581994692735";

const navLinks = [
  { label: "Início", href: "#inicio" },
  { label: "Produtos", href: "#produtos" },
  { label: "Ofertas", href: "#ofertas" },
  { label: "Contato", href: "#contato" },
];

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto max-w-6xl flex items-center justify-between px-4 py-3">
        {/* Logo */}
        <a href="#inicio" className="flex items-center">
          <img src={logo} alt="CM Eletronics" className="h-14" />
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
            >
              {l.label}
            </a>
          ))}
          <a
            href={`${WHATSAPP_BASE}?text=${encodeURIComponent("Olá!")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-success text-success-foreground text-sm font-semibold transition-all duration-200 hover:scale-105"
          >
            <MessageCircle className="w-4 h-4" />
            Fale no WhatsApp
          </a>
        </nav>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-background/95 backdrop-blur-md border-b border-border px-4 pb-4">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block py-3 text-muted-foreground hover:text-primary transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href={`${WHATSAPP_BASE}?text=${encodeURIComponent("Olá!")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-success text-success-foreground text-sm font-semibold"
          >
            <MessageCircle className="w-4 h-4" />
            Fale no WhatsApp
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;
