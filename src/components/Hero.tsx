import heroBanner from "@/assets/hero-banner.jpg";

const WHATSAPP_BASE = "https://wa.me/5581994692735";

const Hero = () => (
  <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
    {/* Background */}
    <div className="absolute inset-0">
      <img src={heroBanner} alt="Eletrônicos" className="w-full h-full object-cover opacity-40" />
      <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
    </div>

    {/* Grid overlay */}
    <div className="absolute inset-0 bg-grid opacity-30" />

    {/* Content */}
    <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
      <h1 className="text-3xl sm:text-5xl md:text-6xl font-display font-bold mb-6 neon-text opacity-0 animate-fade-in">
        Eletrônicos e Utilidades que você precisa!
      </h1>
      <p className="text-lg md:text-xl text-muted-foreground mb-10 opacity-0 animate-fade-in-delay-1">
        Qualidade, preço justo e entrega para todo o Brasil
      </p>
      <a
        href={`${WHATSAPP_BASE}?text=${encodeURIComponent("Olá, gostaria de saber mais sobre os produtos!")}`}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-3 px-8 py-4 rounded-lg bg-success text-success-foreground font-semibold text-lg transition-all duration-300 hover:scale-105 animate-pulse-glow opacity-0 animate-fade-in-delay-2"
      >
        Comprar pelo WhatsApp
      </a>
    </div>
  </section>
);

export default Hero;
