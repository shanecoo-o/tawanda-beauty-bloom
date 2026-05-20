import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import salon from "@/assets/salon-interior.jpg";
import { Reveal } from "./Reveal";

const pillars = [
  { n: "01", t: "Profissionais especializadas", d: "Equipa formada nas mais reconhecidas escolas de beleza." },
  { n: "02", t: "Produtos premium", d: "Apenas marcas selecionadas e tecnologia de ponta." },
  { n: "03", t: "Ambiente acolhedor", d: "Um santuário desenhado para o seu conforto e privacidade." },
  { n: "04", t: "Resultados que encantam", d: "Cada cliente sai com mais do que beleza — sai com confiança." },
];

export function WhyTawanda() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [-60, 60]);

  return (
    <section className="relative py-32 px-6 lg:px-16 overflow-hidden">
      <div className="relative max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        <div className="lg:col-span-5 relative" ref={ref}>
          <motion.div
            style={{ y }}
            className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-luxe"
          >
            <img src={salon} alt="Interior do salão Tawanda" loading="lazy" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-noir/60 to-transparent" />
          </motion.div>

          {/* Floating glass card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.4 }}
            className="absolute -bottom-8 -right-4 lg:-right-12 glass-strong rounded-2xl p-6 max-w-[240px] shadow-luxe"
          >
            <div className="font-display text-5xl gradient-gold-text">12+</div>
            <div className="text-xs text-foreground/70 mt-2 tracking-wide">
              Anos a transformar rotinas em rituais de beleza.
            </div>
          </motion.div>
        </div>

        <div className="lg:col-span-7">
          <Reveal>
            <div className="flex items-center gap-4 mb-6">
              <span className="h-px w-10 bg-gold" />
              <span className="text-[11px] tracking-[0.35em] uppercase text-gold/80">Porquê Tawanda</span>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <h2 className="font-display text-5xl md:text-6xl leading-[1.05] mb-8">
              Mais do que beleza,<br />
              é sobre <em className="not-italic gradient-gold-text italic">autoestima.</em>
            </h2>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="text-foreground/65 leading-relaxed max-w-xl mb-12">
              Cada detalhe — da iluminação à fragrância, do toque ao tempo — é orquestrado
              para que o seu momento connosco seja inesquecível.
            </p>
          </Reveal>

          <div className="grid sm:grid-cols-2 gap-6">
            {pillars.map((p, i) => (
              <Reveal key={p.n} delay={0.2 + i * 0.1}>
                <div className="group p-6 rounded-2xl glass hover:bg-foreground/[0.06] transition-all duration-500">
                  <div className="text-[11px] tracking-[0.3em] text-gold mb-3">{p.n}</div>
                  <div className="font-display text-xl text-foreground mb-2">{p.t}</div>
                  <p className="text-sm text-foreground/60 leading-relaxed">{p.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}