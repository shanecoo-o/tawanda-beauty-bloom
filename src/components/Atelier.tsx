import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import mirror from "@/assets/atelier-mirror.jpg";
import hands from "@/assets/editorial-hands.jpg";
import salon from "@/assets/salon-interior.jpg";

export function Atelier() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y1 = useTransform(scrollYProgress, [0, 1], [60, -60]);
  const y2 = useTransform(scrollYProgress, [0, 1], [-40, 80]);
  const y3 = useTransform(scrollYProgress, [0, 1], [40, -40]);

  return (
    <section id="atelier" className="relative py-32 md:py-48 px-5 md:px-10 overflow-hidden">
      <div className="absolute top-1/3 -left-40 w-[500px] h-[500px] rounded-full bg-gold/8 blur-[160px]" />

      <div ref={ref} className="relative max-w-7xl mx-auto grid grid-cols-12 gap-x-4 gap-y-10">
        {/* Eyebrow */}
        <div className="col-span-12 md:col-span-4 flex md:block items-center gap-3 mb-2">
          <span className="h-px w-10 bg-gold block md:mb-3" />
          <div className="text-[10px] tracking-[0.4em] uppercase text-gold/80">
            03 — Atelier
          </div>
        </div>

        {/* Big headline */}
        <h2 className="col-span-12 md:col-span-8 font-display text-[14vw] md:text-[7.5vw] leading-[0.92] tracking-[-0.03em]">
          Um santuário<br />
          <span className="italic text-transparent bg-clip-text bg-[linear-gradient(120deg,var(--gold-soft),var(--gold))] pl-[10vw]">
            criado para si.
          </span>
        </h2>

        {/* Composition row */}
        <motion.div
          style={{ y: y1 }}
          className="col-span-7 md:col-span-3 relative aspect-[3/4] rounded-[1.5rem] overflow-hidden shadow-luxe mt-8"
        >
          <img src={mirror} alt="Espelho atelier" loading="lazy" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-noir/60 to-transparent" />
          <span className="absolute bottom-4 left-4 text-[9px] tracking-[0.4em] uppercase text-ivory/80">
            Mirror
          </span>
        </motion.div>

        <motion.div
          style={{ y: y2 }}
          className="col-span-5 md:col-span-4 self-start md:mt-24"
        >
          <p className="font-display italic text-2xl md:text-3xl leading-[1.4] text-foreground/85">
            "Cada detalhe — da fragrância ao toque, da luz à música — é orquestrado para suspender o tempo."
          </p>
          <div className="mt-6 text-[10px] tracking-[0.3em] uppercase text-gold/70">
            — Tawanda, fundadora
          </div>
        </motion.div>

        <motion.div
          style={{ y: y3 }}
          className="col-span-12 md:col-span-5 relative aspect-[4/3] md:aspect-[5/6] rounded-[1.5rem] overflow-hidden shadow-luxe md:mt-12"
        >
          <img src={salon} alt="Interior do salão" loading="lazy" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-bl from-noir/50 via-transparent to-noir/30" />
        </motion.div>

        {/* Pillars row */}
        <div className="col-span-12 grid md:grid-cols-4 gap-8 mt-20 border-t border-foreground/10 pt-12">
          {[
            ["Artesãs", "Mãos formadas em escolas europeias."],
            ["Produtos", "Apenas casas premium selecionadas."],
            ["Privacidade", "Cabines reservadas, ritmo seu."],
            ["Tempo", "Sem pressa. Sem ruído. Só você."],
          ].map(([t, d], i) => (
            <motion.div
              key={t}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 1, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="text-[10px] tracking-[0.4em] uppercase text-gold/70 mb-4">
                0{i + 1}
              </div>
              <div className="font-display text-3xl mb-3">{t}</div>
              <p className="text-sm text-foreground/55 leading-relaxed">{d}</p>
            </motion.div>
          ))}
        </div>

        {/* Floating hands editorial */}
        <motion.div
          style={{ y: y2 }}
          className="col-span-12 md:col-span-7 md:col-start-4 relative aspect-[16/9] rounded-[1.5rem] overflow-hidden shadow-luxe mt-12"
        >
          <img src={hands} alt="Detalhe editorial" loading="lazy" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-noir/40 to-transparent" />
          <div className="absolute top-6 left-6 font-display italic text-ivory/90 text-xl">
            "The Detail"
          </div>
        </motion.div>
      </div>
    </section>
  );
}
