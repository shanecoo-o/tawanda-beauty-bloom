import { motion, useScroll, useTransform, AnimatePresence } from "motion/react";
import { useRef, useState } from "react";
import hair from "@/assets/service-hair.jpg";
import nails from "@/assets/service-nails.jpg";
import makeup from "@/assets/service-makeup.jpg";
import skin from "@/assets/service-skin.jpg";
import massage from "@/assets/service-massage.jpg";

const services = [
  {
    n: "01",
    title: "Cabelo",
    sub: "Cortes · Coloração · Tratamentos",
    desc: "Da técnica clássica francesa à coloração contemporânea — esculpido com produtos de assinatura.",
    price: "2.500",
    image: hair,
  },
  {
    n: "02",
    title: "Maquilhagem",
    sub: "Social · Noiva · Editorial",
    desc: "Looks personalizados que iluminam a sua essência, em qualquer momento da sua narrativa.",
    price: "3.500",
    image: makeup,
  },
  {
    n: "03",
    title: "Unhas",
    sub: "Manicure · Gel · Nail Art",
    desc: "Acabamentos perfeitos com a precisão silenciosa de uma joalheira.",
    price: "1.200",
    image: nails,
  },
  {
    n: "04",
    title: "Pele",
    sub: "Facial · Hidratação · Lifting",
    desc: "Protocolos profundos que devolvem brilho, vitalidade e firmeza ao seu rosto.",
    price: "4.000",
    image: skin,
  },
  {
    n: "05",
    title: "Corpo",
    sub: "Relaxante · Terapêutica · Pedras",
    desc: "Um intervalo cinematográfico para o corpo e para a mente, devolvido em silêncio.",
    price: "2.800",
    image: massage,
  },
];

export function Services() {
  const [active, setActive] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const imgY = useTransform(scrollYProgress, [0, 1], [0, -40]);

  return (
    <section id="servicos" className="relative">
      {/* Section header */}
      <div className="px-5 md:px-10 pt-24 pb-16 max-w-7xl mx-auto">
        <div className="flex items-end justify-between gap-8 flex-wrap">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="h-px w-10 bg-gold" />
              <span className="text-[10px] tracking-[0.4em] uppercase text-gold/80">
                02 — Rituais
              </span>
            </div>
            <h2 className="font-display text-[12vw] md:text-[7vw] leading-[0.92] tracking-[-0.03em]">
              Cada gesto,<br />
              <span className="italic text-transparent bg-clip-text bg-[linear-gradient(120deg,var(--gold-soft),var(--gold))]">
                um capítulo.
              </span>
            </h2>
          </div>
          <p className="max-w-xs text-sm text-foreground/55 leading-relaxed">
            Cinco rituais. Cinco linguagens.
            <br />Uma só obsessão pela sua beleza.
          </p>
        </div>
      </div>

      {/* Sticky split-screen */}
      <div ref={ref} className="relative">
        <div className="lg:grid lg:grid-cols-2">
          {/* Image column — sticky */}
          <div className="hidden lg:block sticky top-0 h-screen overflow-hidden">
            <div className="relative w-full h-full">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={{ opacity: 0, scale: 1.08 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute inset-0"
                >
                  <motion.img
                    src={services[active].image}
                    alt={services[active].title}
                    style={{ y: imgY }}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-noir/70 via-noir/20 to-transparent" />
                </motion.div>
              </AnimatePresence>

              {/* Floating label */}
              <div className="absolute top-10 left-10 text-[10px] tracking-[0.4em] uppercase text-ivory/70">
                Plate {services[active].n}
              </div>
              <div className="absolute bottom-10 right-10 font-display italic text-2xl text-ivory/90">
                "{services[active].title}"
              </div>

              {/* Floating price */}
              <motion.div
                key={`p-${active}`}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="absolute bottom-10 left-10 glass-strong rounded-full px-5 py-2.5 flex items-center gap-3"
              >
                <span className="text-[9px] tracking-[0.35em] uppercase text-gold/80">desde</span>
                <span className="font-display text-2xl gradient-gold-text">{services[active].price}</span>
                <span className="text-[10px] tracking-widest text-foreground/60">MT</span>
              </motion.div>
            </div>
          </div>

          {/* List column */}
          <div className="px-5 md:px-10 lg:px-16">
            {services.map((s, i) => (
              <ServiceRow
                key={s.n}
                s={s}
                onEnter={() => setActive(i)}
                index={i}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ServiceRow({
  s,
  onEnter,
  index,
}: {
  s: (typeof services)[number];
  onEnter: () => void;
  index: number;
}) {
  const rowRef = useRef<HTMLDivElement>(null);
  return (
    <motion.div
      ref={rowRef}
      onViewportEnter={onEnter}
      viewport={{ amount: 0.5, margin: "-30% 0px -30% 0px" }}
      className="group relative min-h-[80vh] lg:min-h-screen flex flex-col justify-center py-16 lg:py-0 border-b border-foreground/8 last:border-b-0"
    >
      {/* Mobile image */}
      <div className="lg:hidden relative aspect-[4/5] mb-10 rounded-[2rem] overflow-hidden shadow-luxe">
        <img src={s.image} alt={s.title} loading="lazy" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-noir/70 via-transparent to-transparent" />
        <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between">
          <span className="text-[9px] tracking-[0.4em] uppercase text-ivory/80">Plate {s.n}</span>
          <span className="glass rounded-full px-3 py-1 text-[10px] text-gold tracking-widest">
            {s.price} MT
          </span>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="flex items-center gap-4 mb-6">
          <span className="text-[10px] tracking-[0.4em] text-gold/70">{s.n}</span>
          <span className="h-px flex-1 max-w-[60px] bg-foreground/15" />
          <span className="text-[10px] tracking-[0.35em] uppercase text-foreground/40">
            {s.sub}
          </span>
        </div>
        <h3 className="font-display text-[16vw] md:text-[10vw] lg:text-[7vw] leading-[0.9] tracking-[-0.03em] text-foreground group-hover:text-gold transition-colors duration-700">
          {s.title}
        </h3>
        <p className="mt-8 max-w-md text-foreground/60 leading-[1.8] text-[15px]">
          {s.desc}
        </p>
        <a
          href="#contacto"
          className="mt-10 inline-flex items-center gap-3 text-[11px] tracking-[0.3em] uppercase text-gold"
        >
          Reservar ritual
          <span className="h-px w-8 bg-gold transition-all group-hover:w-14" />
        </a>
      </motion.div>
    </motion.div>
  );
}
