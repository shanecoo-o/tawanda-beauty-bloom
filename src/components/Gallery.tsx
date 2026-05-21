import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";
import hair from "@/assets/service-hair.jpg";
import makeup from "@/assets/service-makeup.jpg";
import portrait from "@/assets/editorial-portrait.jpg";
import profile from "@/assets/editorial-profile.jpg";

const plates = [
  { src: portrait, label: "Glow", n: "I", h: "h-[80vh]", w: "w-[300px] md:w-[420px]" },
  { src: g1, label: "Hair", n: "II", h: "h-[60vh] mt-24", w: "w-[260px] md:w-[340px]" },
  { src: profile, label: "Aura", n: "III", h: "h-[75vh] mt-8", w: "w-[300px] md:w-[400px]" },
  { src: makeup, label: "Lip", n: "IV", h: "h-[55vh] mt-32", w: "w-[240px] md:w-[320px]" },
  { src: g2, label: "Eyes", n: "V", h: "h-[72vh]", w: "w-[280px] md:w-[380px]" },
  { src: hair, label: "Wave", n: "VI", h: "h-[65vh] mt-16", w: "w-[260px] md:w-[360px]" },
  { src: g3, label: "Skin", n: "VII", h: "h-[78vh] mt-4", w: "w-[300px] md:w-[400px]" },
  { src: g4, label: "Nails", n: "VIII", h: "h-[60vh] mt-28", w: "w-[260px] md:w-[340px]" },
];

export function Gallery() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const x = useTransform(scrollYProgress, [0, 1], ["8%", "-55%"]);

  return (
    <section id="galeria" className="relative py-32 overflow-hidden">
      <div className="px-5 md:px-10 max-w-7xl mx-auto mb-20">
        <div className="grid grid-cols-12 gap-4 items-end">
          <div className="col-span-12 md:col-span-3 flex md:block items-center gap-3 mb-2">
            <span className="h-px w-10 bg-gold block md:mb-3" />
            <div className="text-[10px] tracking-[0.4em] uppercase text-gold/80">
              04 — Editorial
            </div>
          </div>
          <h2 className="col-span-12 md:col-span-9 font-display text-[12vw] md:text-[6.5vw] leading-[0.92] tracking-[-0.03em]">
            Uma parede de<br />
            <span className="italic text-transparent bg-clip-text bg-[linear-gradient(120deg,var(--gold-soft),var(--gold))]">
              momentos.
            </span>
          </h2>
        </div>
      </div>

      <div ref={ref} className="relative">
        <motion.div style={{ x }} className="flex gap-6 md:gap-10 px-5 md:px-10 items-start will-change-transform">
          {plates.map((p, i) => (
            <motion.figure
              key={i}
              whileHover={{ y: -10 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className={`relative shrink-0 ${p.w} ${p.h} rounded-[1.5rem] overflow-hidden shadow-luxe`}
            >
              <img
                src={p.src}
                alt={p.label}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-[1600ms] hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-noir/55 via-transparent to-transparent" />
              <figcaption className="absolute bottom-5 left-5 right-5 flex items-end justify-between">
                <span className="text-[9px] tracking-[0.4em] uppercase text-ivory/80">
                  Plate {p.n}
                </span>
                <span className="font-display italic text-lg text-ivory/95">
                  "{p.label}"
                </span>
              </figcaption>
            </motion.figure>
          ))}
        </motion.div>
      </div>

      <div className="px-5 md:px-10 max-w-7xl mx-auto mt-16 flex items-center justify-between text-[10px] tracking-[0.4em] uppercase text-foreground/35">
        <span>Scroll →</span>
        <span>SS / 2026</span>
      </div>
    </section>
  );
}
