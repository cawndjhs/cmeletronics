import { Truck, ShieldCheck, CreditCard, Package } from "lucide-react";

const features = [
  { icon: Truck, title: "Entrega para todo Brasil", desc: "Enviamos para qualquer lugar do país" },
  { icon: ShieldCheck, title: "Compra segura", desc: "Seus dados sempre protegidos" },
  { icon: CreditCard, title: "Pagamento facilitado", desc: "Diversas formas de pagamento" },
  { icon: Package, title: "Produtos nacionais e importados", desc: "Variedade e qualidade garantida" },
];

const Features = () => (
  <section className="py-20 px-4 bg-secondary/50">
    <div className="container mx-auto max-w-6xl">
      <h2 className="text-2xl md:text-3xl font-display text-center mb-12 neon-text">
        Por que escolher a CM Eletronics?
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((f, i) => (
          <div
            key={f.title}
            className="flex flex-col items-center text-center p-6 rounded-lg border border-border bg-card card-hover opacity-0 animate-fade-in"
            style={{ animationDelay: `${i * 0.1}s` }}
          >
            <div className="w-14 h-14 rounded-full gradient-neon flex items-center justify-center mb-4">
              <f.icon className="w-7 h-7 text-primary-foreground" />
            </div>
            <h3 className="font-display text-sm font-semibold mb-2">{f.title}</h3>
            <p className="text-muted-foreground text-sm">{f.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Features;
