import { Reveal } from "./Reveal";

const tiers = [
  { name: "Bronze", points: "0–500 pts", perk: "10% em produtos" },
  { name: "Champagne", points: "500–1500 pts", perk: "Tratamento bônus mensal" },
  { name: "Noir VIP", points: "1500+ pts", perk: "Acesso prioritário · Eventos privados" },
];

export function Membership() {
  return (
    <section id="membros" className="relative py-32 px-6 lg:px-16">
      <div className="relative max-w-6xl mx-auto rounded-[2.5rem] overflow-hidden glass-strong p-10 lg:p-16 shadow-luxe grain">
        <div className="absolute -top-20 -right-20 w-[400px] h-[400px] rounded-full bg-gold/15 blur-[120px]" />
        <div className="absolute -bottom-20 -left-20 w-[400px] h-[400px] rounded-full bg-blush/10 blur-[120px]" />

        <div className="relative grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5">
            <Reveal>
              <div className="flex items-center gap-4 mb-6">
                <span className="h-px w-10 bg-gold" />
                <span className="text-[11px] tracking-[0.35em] uppercase text-gold/80">Membros Tawanda</span>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="font-display text-4xl md:text-5xl leading-[1.05] mb-6">
                Um círculo <em className="not-italic gradient-gold-text italic">exclusivo</em> que celebra a sua beleza.
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="text-foreground/65 leading-relaxed mb-10">
                Acumule pontos a cada visita, desbloqueie tratamentos exclusivos
                e seja a primeira a conhecer os nossos novos rituais.
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <a
                href="#contacto"
                className="inline-flex items-center gap-3 px-7 py-3.5 rounded-full bg-gold text-noir text-[12px] tracking-[0.25em] uppercase hover:shadow-glow transition-all"
              >
                Tornar-me membro
                <span className="h-px w-6 bg-noir" />
              </a>
            </Reveal>
          </div>

          <div className="lg:col-span-7 space-y-4">
            {tiers.map((t, i) => (
              <Reveal key={t.name} delay={0.2 + i * 0.1}>
                <div className="group flex items-center justify-between gap-6 p-6 rounded-2xl glass hover:bg-foreground/[0.06] transition-all duration-500">
                  <div className="flex items-center gap-6">
                    <div className="font-display text-3xl gradient-gold-text w-10">{i + 1}</div>
                    <div>
                      <div className="font-display text-2xl text-foreground">{t.name}</div>
                      <div className="text-xs text-foreground/50 mt-1 tracking-wider">{t.points}</div>
                    </div>
                  </div>
                  <div className="text-sm text-foreground/70 text-right max-w-[180px]">{t.perk}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}