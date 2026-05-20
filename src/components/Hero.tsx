import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import heroImg from "@/assets/hero.jpg";

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={ref} className="relative min-h-screen w-full overflow-hidden grain">
      {/* Background image with parallax */}
      <motion.div style={{ y, scale }} className="absolute inset-0 z-0">
        <img
          src={heroImg}
          alt="Modelo elegante no salão Tawanda"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-noir/30 via-noir/40 to-noir" />
        <div className="absolute inset-0 bg-gradient-to-r from-noir via-noir/60 to-transparent md:via-noir/30" />
      </motion.div>

      {/* Ambient glows */}
      <div className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-gold/20 blur-[140px] animate-pulse-glow z-0" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-blush/10 blur-[160px] animate-float-slow z-0" />

      {/* Content */}
      <motion.div
        style={{ opacity }}
        className="relative z-10 min-h-screen flex items-center px-6 lg:px-16 pt-32 pb-20"
      >
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, delay: 0.3 }}
            className="flex items-center gap-4 mb-8"
          >
            <span className="h-px w-12 bg-gold" />
            <span className="text-[11px] tracking-[0.35em] uppercase text-gold/80">
              Salão Premium · Estética · Boutique
            </span>
          </motion.div>

          <h1 className="font-display text-[clamp(2.75rem,8vw,7rem)] leading-[0.95] tracking-tight text-foreground">
            <motion.span
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.3, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="block"
            >
              Realce sua beleza
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.3, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
              className="block"
            >
              com <em className="not-italic gradient-gold-text font-display italic">elegância.</em>
            </motion.span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.85 }}
            className="mt-8 max-w-xl text-base md:text-lg text-foreground/70 leading-relaxed"
          >
            Experiência premium em beleza, estética e cuidado pessoal.
            Cabelo, unhas, maquilhagem e tratamentos num santuário criado para si.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 1.05 }}
            className="mt-12 flex flex-wrap items-center gap-4"
          >
            <a
              href="#contacto"
              className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gold text-noir text-[12px] tracking-[0.25em] uppercase font-medium overflow-hidden transition-all duration-500 hover:shadow-glow"
            >
              <span className="relative z-10">Agendar Agora</span>
              <span className="relative z-10 h-px w-6 bg-noir transition-all group-hover:w-10" />
            </a>
            <a
              href="#servicos"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full glass text-foreground text-[12px] tracking-[0.25em] uppercase hover:bg-foreground/5 transition-all duration-500"
            >
              Ver Serviços
            </a>
          </motion.div>

          {/* Floating trust card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.3, delay: 1.3 }}
            className="mt-16 inline-flex items-center gap-5 glass-strong rounded-2xl px-6 py-4"
          >
            <div className="flex -space-x-2">
              {[1, 2, 3].map((i) => (
                <div key={i} className="w-9 h-9 rounded-full border-2 border-noir bg-gradient-to-br from-gold/60 to-mocha" />
              ))}
            </div>
            <div className="text-xs">
              <div className="text-gold font-medium tracking-wider">★ 4.9 · 192 avaliações</div>
              <div className="text-foreground/60 mt-0.5">Clientes que confiam em nós</div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-foreground/40"
      >
        <span className="text-[10px] tracking-[0.3em] uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="h-10 w-px bg-gradient-to-b from-gold/60 to-transparent"
        />
      </motion.div>
    </section>
  );
}