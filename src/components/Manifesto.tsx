import { motion, useScroll, useTransform, type MotionValue } from "motion/react";
import { useRef } from "react";

const phrase = ["Beleza", "que", "não", "se", "consome —", "se", "celebra."];

function Word({
  word,
  progress,
  start,
  end,
  em,
}: {
  word: string;
  progress: MotionValue<number>;
  start: number;
  end: number;
  em: boolean;
}) {
  const opacity = useTransform(progress, [start, end], [0.18, 1]);
  const y = useTransform(progress, [start, end], [20, 0]);
  const filter = useTransform(progress, [start, end], ["blur(6px)", "blur(0px)"]);
  return (
    <motion.span
      style={{ opacity, y, filter }}
      className={
        em
          ? "italic text-transparent bg-clip-text bg-[linear-gradient(120deg,var(--gold-soft),var(--gold))]"
          : "text-foreground"
      }
    >
      {word}
    </motion.span>
  );
}

export function Manifesto() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.9", "end 0.4"] });

  return (
    <section ref={ref} className="relative py-32 md:py-48 px-5 md:px-10">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-12 gap-y-6">
          <div className="col-span-12 md:col-span-3 flex md:block items-center gap-3 mb-6 md:mb-0">
            <span className="h-px w-10 bg-gold md:mb-3 block" />
            <div className="text-[10px] tracking-[0.4em] uppercase text-gold/80">Manifesto</div>
            <div className="hidden md:block mt-3 text-[10px] tracking-[0.3em] uppercase text-foreground/40">
              01 — Filosofia
            </div>
          </div>

          <div className="col-span-12 md:col-span-9">
            <h2 className="font-display text-[10vw] md:text-[5.5vw] leading-[0.95] tracking-[-0.03em] flex flex-wrap gap-x-[0.18em] gap-y-1">
              {phrase.map((w, i) => (
                <Word
                  key={i}
                  word={w}
                  progress={scrollYProgress}
                  start={i / phrase.length}
                  end={(i + 1) / phrase.length}
                  em={w.includes("celebra")}
                />
              ))}
            </h2>

            <div className="mt-16 grid md:grid-cols-3 gap-10 md:gap-6 max-w-3xl">
              {[
                ["12", "Anos de atelier"],
                ["8k", "Rituais entregues"],
                ["∞", "Cuidado feito à mão"],
              ].map(([n, l]) => (
                <div key={l}>
                  <div className="font-display text-5xl gradient-gold-text mb-2">{n}</div>
                  <div className="text-[10px] tracking-[0.3em] uppercase text-foreground/50">{l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
