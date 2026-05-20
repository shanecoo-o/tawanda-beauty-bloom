import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";
import hair from "@/assets/service-hair.jpg";
import makeup from "@/assets/service-makeup.jpg";
import { Reveal } from "./Reveal";

const images = [g1, g2, g3, g4, hair, makeup, g1, g2];

export function Gallery() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const x = useTransform(scrollYProgress, [0, 1], ["5%", "-45%"]);

  return (
    <section id="galeria" className="relative py-32 overflow-hidden">
      <div className="px-6 lg:px-16 max-w-7xl mx-auto mb-16">
        <Reveal>
          <div className="flex items-center gap-4 mb-6">
            <span className="h-px w-10 bg-gold" />
            <span className="text-[11px] tracking-[0.35em] uppercase text-gold/80">Nosso Trabalho</span>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="font-display text-5xl md:text-7xl leading-[1.02] max-w-3xl">
            Resultados que <em className="not-italic gradient-gold-text italic">falam</em> por nós.
          </h2>
        </Reveal>
      </div>

      <div ref={ref} className="relative">
        <motion.div style={{ x }} className="flex gap-6 px-6 lg:px-16 will-change-transform">
          {images.map((src, i) => (
            <div
              key={i}
              className={`relative shrink-0 overflow-hidden rounded-3xl shadow-luxe ${
                i % 3 === 0 ? "w-[320px] h-[480px]" : i % 3 === 1 ? "w-[280px] h-[420px] mt-12" : "w-[360px] h-[520px]"
              }`}
            >
              <img src={src} alt={`Trabalho ${i + 1}`} loading="lazy" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-noir/40 to-transparent" />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}