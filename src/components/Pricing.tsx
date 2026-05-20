import { Reveal } from "./Reveal";
import { motion } from "motion/react";

const packages = [
  {
    name: "Pacote Diva",
    items: ["Corte premium", "Brushing", "Maquilhagem social"],
    price: "3.900",
    tag: "",
  },
  {
    name: "Pacote Noiva",
    items: ["Penteado completo", "Maquilhagem profissional", "Prova prévia"],
    price: "7.500",
    tag: "Mais popular",
  },
  {
    name: "Pacote Premium",
    items: ["Botox capilar", "Hidratação profunda", "Brushing assinatura"],
    price: "4.900",
    tag: "",
  },
];

export function Pricing() {
  return (
    <section className="relative py-32 px-6 lg:px-16 overflow-hidden">
      <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full bg-gold/[0.06] blur-[160px]" />

      <div className="relative max-w-7xl mx-auto">
        <Reveal>
          <div className="text-center mb-20">
            <div className="flex items-center justify-center gap-4 mb-6">
              <span className="h-px w-10 bg-gold" />
              <span className="text-[11px] tracking-[0.35em] uppercase text-gold/80">Pacotes em Destaque</span>
              <span className="h-px w-10 bg-gold" />
            </div>
            <h2 className="font-display text-5xl md:text-6xl">
              Experiências <em className="not-italic gradient-gold-text italic">curadas</em> para si.
            </h2>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {packages.map((p, i) => (
            <Reveal key={p.name} delay={i * 0.1}>
              <motion.div
                whileHover={{ y: -8 }}
                transition={{ duration: 0.6 }}
                className={`relative h-full p-8 lg:p-10 rounded-3xl flex flex-col ${
                  p.tag
                    ? "glass-strong shadow-glow border-gold/30"
                    : "glass"
                }`}
              >
                {p.tag && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-gold text-noir text-[10px] tracking-[0.3em] uppercase">
                    {p.tag}
                  </div>
                )}
                <div className="text-[11px] tracking-[0.3em] uppercase text-gold/80 mb-4">
                  Pacote
                </div>
                <h3 className="font-display text-3xl mb-8">{p.name}</h3>
                <ul className="space-y-3 mb-10 flex-1">
                  {p.items.map((it) => (
                    <li key={it} className="flex items-start gap-3 text-sm text-foreground/70">
                      <span className="mt-2 h-px w-4 bg-gold/60 shrink-0" />
                      {it}
                    </li>
                  ))}
                </ul>
                <div className="flex items-baseline gap-2 mb-8">
                  <span className="font-display text-5xl gradient-gold-text">{p.price}</span>
                  <span className="text-xs tracking-widest text-foreground/50 uppercase">MT</span>
                </div>
                <a
                  href="#contacto"
                  className={`inline-flex justify-center items-center px-6 py-3.5 rounded-full text-[11px] tracking-[0.25em] uppercase transition-all duration-500 ${
                    p.tag
                      ? "bg-gold text-noir hover:shadow-glow"
                      : "glass hover:bg-foreground/10 text-foreground"
                  }`}
                >
                  Reservar
                </a>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}