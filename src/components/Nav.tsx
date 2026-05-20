import { motion, useScroll, useMotionValueEvent } from "motion/react";
import { useState } from "react";

const links = [
  { label: "Serviços", href: "#servicos" },
  { label: "Galeria", href: "#galeria" },
  { label: "Membros", href: "#membros" },
  { label: "Contacto", href: "#contacto" },
];

export function Nav() {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (v) => setScrolled(v > 30));

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? "py-3" : "py-6"
      }`}
    >
      <div className={`mx-auto max-w-7xl px-6 lg:px-10 transition-all duration-500 ${
        scrolled ? "glass-strong rounded-full mx-4 sm:mx-6 lg:mx-10 px-6 py-3" : ""
      }`}>
        <div className="flex items-center justify-between">
          <a href="#" className="flex flex-col leading-none">
            <span className="font-display text-2xl tracking-wide text-foreground">
              Tawanda
            </span>
            <span className="text-[10px] tracking-[0.3em] uppercase text-gold/70 mt-0.5">
              Beauty Salon
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-10">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-[13px] tracking-[0.18em] uppercase text-foreground/70 hover:text-gold transition-colors duration-300"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <a
            href="#contacto"
            className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-[12px] tracking-[0.2em] uppercase bg-gold text-noir hover:shadow-glow transition-all duration-500"
          >
            Agendar
          </a>

          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-foreground"
            aria-label="Menu"
          >
            <div className="flex flex-col gap-1.5">
              <span className={`h-px w-6 bg-current transition-transform ${open ? "rotate-45 translate-y-2" : ""}`} />
              <span className={`h-px w-6 bg-current transition-opacity ${open ? "opacity-0" : ""}`} />
              <span className={`h-px w-6 bg-current transition-transform ${open ? "-rotate-45 -translate-y-2" : ""}`} />
            </div>
          </button>
        </div>

        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden mt-6 glass-strong rounded-3xl p-6 flex flex-col gap-5"
          >
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-sm tracking-[0.18em] uppercase text-foreground/80"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contacto"
              onClick={() => setOpen(false)}
              className="mt-2 text-center px-5 py-3 rounded-full text-[12px] tracking-[0.2em] uppercase bg-gold text-noir"
            >
              Agendar Agora
            </a>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
}