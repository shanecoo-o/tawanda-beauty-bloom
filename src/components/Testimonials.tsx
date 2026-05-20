import { Reveal } from "./Reveal";

const items = [
  {
    quote: "Ambiente acolhedor, profissionais incríveis e resultados que superam expectativas.",
    name: "Lúcia M.",
    role: "Cliente desde 2022",
  },
  {
    quote: "Saio sempre a sentir-me uma nova versão de mim mesma. É terapia.",
    name: "Ana C.",
    role: "Noiva 2024",
  },
  {
    quote: "Atenção ao detalhe absurda. O cabelo nunca esteve tão bonito.",
    name: "Maria F.",
    role: "Cliente VIP",
  },
];

export function Testimonials() {
  return (
    <section className="relative py-32 px-6 lg:px-16">
      <div className="relative max-w-7xl mx-auto">
        <Reveal>
          <div className="text-center mb-20">
            <div className="flex items-center justify-center gap-4 mb-6">
              <span className="h-px w-10 bg-gold" />
              <span className="text-[11px] tracking-[0.35em] uppercase text-gold/80">Quem nos visita</span>
              <span className="h-px w-10 bg-gold" />
            </div>
            <h2 className="font-display text-5xl md:text-6xl">
              Clientes que viraram <em className="not-italic gradient-gold-text italic">fãs.</em>
            </h2>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-6">
          {items.map((t, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <figure className="h-full p-8 lg:p-10 rounded-3xl glass shadow-luxe">
                <div className="text-gold text-2xl font-display mb-6">"</div>
                <blockquote className="font-display text-xl lg:text-2xl leading-relaxed text-foreground/90 mb-8">
                  {t.quote}
                </blockquote>
                <div className="flex items-center justify-between pt-6 border-t border-foreground/10">
                  <div>
                    <div className="text-sm text-foreground">{t.name}</div>
                    <div className="text-xs text-foreground/50 mt-1">{t.role}</div>
                  </div>
                  <div className="text-gold text-sm tracking-widest">★★★★★</div>
                </div>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}