import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import portrait from "@/assets/editorial-portrait.jpg";
import profile from "@/assets/editorial-profile.jpg";

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y1 = useTransform(scrollYProgress, [0, 1], [0, 220]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);
  const fade = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section ref={ref} className="relative min-h-[100svh] w-full overflow-hidden grain">
      {/* Ambient lights */}
      <div className="absolute -top-40 -left-40 w-[700px] h-[700px] rounded-full bg-gold/15 blur-[160px] z-0 animate-pulse-glow" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] rounded-full bg-blush/10 blur-[180px] z-0 animate-float-slow" />

      {/* Grid stage */}
      <div className="relative z-10 grid grid-cols-12 grid-rows-[auto_1fr_auto] min-h-[100svh] pt-28 md:pt-32 pb-10 px-5 md:px-10 gap-x-4">
        {/* Top eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.2 }}
          className="col-span-12 md:col-span-6 row-start-1 flex items-center gap-3 mb-6 md:mb-0"
        >
          <span className="h-px w-10 bg-gold" />
          <span className="text-[10px] tracking-[0.4em] uppercase text-gold/80">
            Issue Nº 01 · Maputo · 2026
          </span>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.35 }}
          className="hidden md:flex col-span-6 row-start-1 justify-end items-center gap-3"
        >
          <span className="text-[10px] tracking-[0.4em] uppercase text-foreground/50">
            Beauty · Atelier · Ritual
          </span>
          <span className="h-px w-10 bg-foreground/30" />
        </motion.div>

        {/* Left portrait — floating editorial */}
        <motion.div
          style={{ y: y1, scale }}
          className="col-span-6 md:col-span-4 lg:col-span-3 row-start-2 self-end md:self-center relative h-[55vh] md:h-[70vh] rounded-[2rem] overflow-hidden shadow-luxe"
        >
          <img
            src={portrait}
            alt="Retrato editorial Tawanda Beauty"
            className="w-full h-full object-cover scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-noir/80 via-transparent to-transparent" />
          <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
            <span className="text-[9px] tracking-[0.35em] uppercase text-ivory/80">
              Plate I
            </span>
            <span className="font-display italic text-ivory/90 text-sm">
              "Glow"
            </span>
          </div>
        </motion.div>

        {/* Center hero text */}
        <motion.div
          style={{ opacity: fade }}
          className="col-span-12 md:col-span-8 lg:col-span-6 row-start-3 md:row-start-2 self-end md:self-center text-center md:text-left -mt-10 md:mt-0 md:-ml-12 lg:-ml-20 relative z-10"
        >
          <h1 className="font-display leading-[0.86] tracking-[-0.04em]">
            <motion.span
              initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 1.4, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="block text-[18vw] md:text-[13vw] lg:text-[10.5vw] text-foreground"
            >
              Tawanda
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 1.4, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="block text-[14vw] md:text-[9vw] lg:text-[7vw] italic text-transparent bg-clip-text bg-[linear-gradient(120deg,var(--gold-soft),var(--gold)_50%,var(--nude))] -mt-2 md:-mt-3"
            >
              the ritual
            </motion.span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.95 }}
            className="mt-8 md:mt-10 max-w-md md:max-w-sm mx-auto md:mx-0 text-[13px] md:text-sm text-foreground/65 leading-[1.8] tracking-wide"
          >
            Um atelier de beleza onde cada gesto é cuidado,
            cada detalhe é arte e cada visita é uma editorial dedicada a si.
          </motion.p>
        </motion.div>

        {/* Right profile portrait */}
        <motion.div
          style={{ y: y2, scale }}
          className="hidden md:block col-span-4 lg:col-span-3 col-start-9 lg:col-start-10 row-start-2 self-center relative h-[60vh] rounded-[2rem] overflow-hidden shadow-luxe"
        >
          <img
            src={profile}
            alt="Perfil editorial luxo"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-noir/40 via-transparent to-noir/80" />
          <div className="absolute top-4 left-4 right-4 flex items-start justify-between">
            <span className="text-[9px] tracking-[0.35em] uppercase text-ivory/70">
              Plate II
            </span>
            <span className="font-display italic text-ivory/90 text-sm">
              "Aura"
            </span>
          </div>
        </motion.div>

        {/* Bottom strip — CTA + meta */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 1.1 }}
          className="col-span-12 row-start-4 md:row-start-3 mt-12 md:mt-16 flex flex-col md:flex-row items-center md:items-end justify-between gap-8"
        >
          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href="#contacto"
              className="group relative inline-flex items-center gap-3 px-7 py-4 rounded-full bg-foreground text-noir text-[11px] tracking-[0.3em] uppercase overflow-hidden transition-all duration-500 hover:bg-gold"
            >
              <span className="relative z-10">Reservar Ritual</span>
              <span className="relative z-10 h-px w-5 bg-noir transition-all group-hover:w-10" />
            </a>
            <a
              href="#atelier"
              className="inline-flex items-center gap-3 px-7 py-4 rounded-full border border-foreground/15 text-foreground/80 text-[11px] tracking-[0.3em] uppercase hover:border-gold/40 hover:text-gold transition-all duration-500"
            >
              Explorar Atelier
            </a>
          </div>

          <div className="hidden md:flex items-center gap-5 text-[10px] tracking-[0.35em] uppercase text-foreground/40">
            <span>★ 4.9 / 192 reviews</span>
            <span className="h-px w-8 bg-foreground/20" />
            <span>Open Today · 08—19h</span>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 1 }}
        className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 text-foreground/35"
      >
        <span className="text-[9px] tracking-[0.4em] uppercase">scroll</span>
        <motion.span
          animate={{ y: [0, 10, 0], opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
          className="h-8 w-px bg-gradient-to-b from-gold to-transparent"
        />
      </motion.div>
    </section>
  );
}
