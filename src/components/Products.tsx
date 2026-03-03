import p9Prata from "@/assets/fones/p9/p9-prata.png";
import p9Preto from "@/assets/fones/p9/p9-preto.png";
import p9Rosa from "@/assets/fones/p9/p9-rosa.png";
import p9Azul from "@/assets/fones/p9/p9-azul.png";
import p9Verde from "@/assets/fones/p9/p9-verde.png";

import lePreto from "@/assets/fones/le0271/le-preto.png";
import leVermelho from "@/assets/fones/le0271/le-vermelho.png";
import leVerde from "@/assets/fones/le0271/le-verde.png";

import cartFibCarbImg1 from "@/assets/carteira-fib-carb/img1.jpg";
import cartFibCarbImg2 from "@/assets/carteira-fib-carb/img2.jpg";
import cartFibCarbImg3 from "@/assets/carteira-fib-carb/img3.jpg";
import cartFibCarbImg4 from "@/assets/carteira-fib-carb/img4.jpg";
import cartFibCarbImg5 from "@/assets/carteira-fib-carb/img5.jpg";

import productSpeaker from "@/assets/product-speaker.jpg";
import productLed from "@/assets/product-led.jpg";
import productCharger from "@/assets/product-charger.jpg";
import { MessageCircle } from "lucide-react";
import { useState } from "react";

const WHATSAPP_BASE = "https://wa.me/5581994692735";

const Carousel = ({ images, name }) => {
  const [current, setCurrent] = useState(0);

  const prev = () => {
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const next = () => {
    setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="w-full h-full relative group">
      <img
        src={images[current]}
        alt={name}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
      />

      {/* Botão Esquerda */}
      <button
        onClick={prev}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 text-white px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition"
      >
        &lt;
      </button>

      {/* Botão Direita */}
      <button
        onClick={next}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 text-white px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition"
        >
          &gt;

      </button>

      {/* Indicadores */}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
        {images.map((_, i) => (
          <div
            key={i}
            className={`w-2 h-2 rounded-full ${
              i === current ? "bg-white" : "bg-white/40"
            }`}
          />
        ))}
      </div>
    </div>
  );
};


const products = [
  {
    name: "FONE DE OUVIDO BLUETOOTH P9",
    desc: "Som cristalino | estiloso | suporte à cartão SD",
    price: "R$ 60,00",
    images: [
      p9Prata,
      p9Preto,
      p9Rosa,
      p9Azul,
      p9Verde,
    ]
  },
  {
    name: "FONE GAMER INTRA-AURICULAR LE-0271",
    desc: "Som imersivo & espacial | microfone + borrachinhas extras",
    price: "R$ 40,00",
    images: [
      lePreto,
      leVermelho,
      leVerde,
    ]
  },
  {
    name: "CARTEIRA DE FIBRA DE CARBONO",
    desc: "Estilosa | proteção RFID | praticidade",
    price: "R$ 25,00",
    images: [
      cartFibCarbImg5,
      cartFibCarbImg4,
      cartFibCarbImg3,
      cartFibCarbImg2,
    ]
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
              {p.images ? (
                <Carousel images={p.images} name={p.name}/>
              ) : (
                <img
                  src={p.image}
                  alt={p.name}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  loading="lazy"
                />
              )}
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
