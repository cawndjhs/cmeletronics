import productHeadphone from "@/assets/product-headphone.jpg";
import productSmartphone from "@/assets/product-smartphone.jpg";
import productSmartwatch from "@/assets/product-smartwatch.jpg";
import productSpeaker from "@/assets/product-speaker.jpg";
import productLed from "@/assets/product-led.jpg";
import productCharger from "@/assets/product-charger.jpg";
import { MessageCircle } from "lucide-react";

const WHATSAPP_BASE = "https://wa.me/5581SEUNUMEROAQUI";

const products = [
  {
    name: "Fone Bluetooth Pro",
    desc: "Som cristalino com cancelamento de ruído",
    price: "R$ 129,90",
    image: productHeadphone,
  },
  {
    name: "Smartphone Ultra X",
    desc: "Tela AMOLED, 128GB, câmera tripla",
    price: "R$ 1.299,00",
    image: productSmartphone,
  },
  {
    name: "Smartwatch Fit",
    desc: "Monitor cardíaco, GPS e resistente à água",
    price: "R$ 249,90",
    image: productSmartwatch,
  },
  {
    name: "Caixa de Som Portátil",
    desc: "Bluetooth 5.0, 12h de bateria, à prova d'água",
    price: "R$ 189,90",
    image: productSpeaker,
  },
  {
    name: "Fita LED RGB",
    desc: "5 metros, controle remoto, 16 cores",
    price: "R$ 59,90",
    image: productLed,
  },
  {
    name: "Carregador Wireless",
    desc: "Carregamento rápido 15W, compatível com todos",
    price: "R$ 79,90",
    image: productCharger,
  },
];

const Products = () => (
  <section id="produtos" className="py-20 px-4">
    <div className="container mx-auto max-w-6xl">
      <h2 className="text-2xl md:text-3xl font-display text-center mb-4 neon-text">
        Nossos Produtos
      </h2>
      <p className="text-center text-muted-foreground mb-12">
        Confira nossa seleção de eletrônicos e utilidades
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((p, i) => (
          <div
            key={p.name}
            className="rounded-lg border border-border bg-card overflow-hidden card-hover opacity-0 animate-fade-in"
            style={{ animationDelay: `${i * 0.1}s` }}
          >
            <div className="aspect-square overflow-hidden bg-secondary">
              <img
                src={p.image}
                alt={p.name}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                loading="lazy"
              />
            </div>
            <div className="p-5">
              <h3 className="font-display text-sm font-semibold mb-1">{p.name}</h3>
              <p className="text-muted-foreground text-sm mb-3">{p.desc}</p>
              <p className="text-primary font-bold text-xl mb-4">{p.price}</p>
              <a
                href={`${WHATSAPP_BASE}?text=${encodeURIComponent(`Olá, quero comprar o ${p.name}`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-success text-success-foreground font-semibold text-sm transition-all duration-200 hover:scale-[1.02] hover:brightness-110"
              >
                <MessageCircle className="w-4 h-4" />
                Comprar no WhatsApp
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Products;
