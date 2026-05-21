import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

const words = [
  "Beleza", "que", "não", "se", "consome —",
  "se", "celebra.",
];

export function Manifesto() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.9", "end 0.4"] });

  return (
    <section ref={ref} className="relative py-32 md:py-48 px-5 md:px-10">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-12 gap-y-6">
          <div className="col-span-12 md:col-span-3 flex md:block items-center gap-3 mb-6 md:mb-0">
            <span className="h-px w-10 bg-gold md:mb-3 block" />
            <div className="text-[10px] tracking-[0.4em] uppercase text-gold/80">
              Manifesto
            </div>
            <div className="hidden md:block mt-3 text-[10px] tracking-[0.3em] uppercase text-foreground/40">
              01 — Filosofia
            </div>
          </div>

          <div className="col-span-12 md:col-span-9">
            <h2 className="font-display text-[10vw] md:text-[5.5vw] leading-[0.95] tracking-[-0.03em] flex flex-wrap gap-x-[0.18em] gap-y-1">
              {words.map((w, i) => {
                const start = i / words.length;
                const end = start + 1 / words.length;
                const opacity = useTransform(scrollYProgress, [start, end], [0.18, 1]);
                const y = useTransform(scrollYProgress, [start, end], [20, 0]);
                const filter = useTransform(
                  scrollYProgress,
                  [start, end],
                  ["blur(6px)", "blur(0px)"]
                );
                const isEm = w.includes("celebra");
                return (
                  <motion.span
                    key={i}
                    style={{ opacity, y, filter }}
                    className={
                      isEm
                        ? "italic text-transparent bg-clip-text bg-[linear-gradient(120deg,var(--gold-soft),var(--gold))]"
                        : "text-foreground"
                    }
                  >
                    {w}
                  </motion.span>
                );
              })}
            </h2>

            <div className="mt-16 grid md:grid-cols-3 gap-10 md:gap-6 max-w-3xl">
              <div>
                <div className="font-display text-5xl gradient-gold-text mb-2">12</div>
                <div className="text-[10px] tracking-[0.3em] uppercase text-foreground/50">
                  Anos de atelier
                </div>
              </div>
              <div>
                <div className="font-display text-5xl gradient-gold-text mb-2">8k</div>
                <div className="text-[10px] tracking-[0.3em] uppercase text-foreground/50">
                  Rituais entregues
                </div>
              </div>
              <div>
                <div className="font-display text-5xl gradient-gold-text mb-2">∞</div>
                <div className="text-[10px] tracking-[0.3em] uppercase text-foreground/50">
                  Cuidado feito à mão
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
