import { motion } from "motion/react";
import { Reveal } from "./Reveal";
import hair from "@/assets/service-hair.jpg";
import nails from "@/assets/service-nails.jpg";
import makeup from "@/assets/service-makeup.jpg";
import skin from "@/assets/service-skin.jpg";
import massage from "@/assets/service-massage.jpg";

const services = [
  {
    title: "Cabelo",
    sub: "Cortes · Coloração · Tratamentos",
    desc: "Da técnica clássica à coloração contemporânea, esculpimos o seu cabelo com produtos de assinatura.",
    price: "Desde 2.500 MT",
    image: hair,
    span: "lg:col-span-2 lg:row-span-2",
  },
  {
    title: "Maquilhagem",
    sub: "Social · Noiva · Editorial",
    desc: "Looks personalizados que iluminam a sua essência em qualquer ocasião.",
    price: "Desde 3.500 MT",
    image: makeup,
    span: "",
  },
  {
    title: "Unhas",
    sub: "Manicure · Gel · Nail Art",
    desc: "Acabamentos perfeitos com a precisão de uma joalheira.",
    price: "Desde 1.200 MT",
    image: nails,
    span: "",
  },
  {
    title: "Tratamentos",
    sub: "Facial · Hidratação · Reconstrução",
    desc: "Protocolos profundos que devolvem brilho, vitalidade e firmeza.",
    price: "Desde 4.000 MT",
    image: skin,
    span: "",
  },
  {
    title: "Massagens",
    sub: "Relaxante · Terapêutica · Pedras quentes",
    desc: "Um intervalo cinematográfico para o corpo e para a mente.",
    price: "Desde 2.800 MT",
    image: massage,
    span: "",
  },
];

export function Services() {
  return (
    <section id="servicos" className="relative py-32 px-6 lg:px-16 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full bg-gold/5 blur-[180px] -z-0" />

      <div className="relative max-w-7xl mx-auto">
        <Reveal>
          <div className="flex items-center gap-4 mb-6">
            <span className="h-px w-10 bg-gold" />
            <span className="text-[11px] tracking-[0.35em] uppercase text-gold/80">
              Nossos Serviços
            </span>
          </div>
        </Reveal>

        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-20">
          <Reveal delay={0.1}>
            <h2 className="font-display text-5xl md:text-7xl leading-[1.02] max-w-2xl">
              Tudo o que <em className="not-italic gradient-gold-text italic">você precisa</em>,
              num só lugar.
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="max-w-sm text-foreground/60 leading-relaxed">
              Um portefólio completo de experiências de beleza, executadas por profissionais
              especializadas, com produtos premium.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:auto-rows-[260px] gap-4">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.08} className={s.span}>
              <motion.article
                whileHover={{ y: -6 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="group relative h-full min-h-[300px] rounded-3xl overflow-hidden cursor-pointer shadow-luxe"
              >
                <img
                  src={s.image}
                  alt={s.title}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-noir via-noir/50 to-noir/10" />
                <div className="absolute inset-0 bg-gradient-to-br from-transparent to-noir/40 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                {/* Floating price badge */}
                <div className="absolute top-5 right-5 glass rounded-full px-3.5 py-1.5 text-[10px] tracking-[0.2em] uppercase text-gold">
                  {s.price}
                </div>

                <div className="absolute inset-x-0 bottom-0 p-7">
                  <div className="text-[10px] tracking-[0.3em] uppercase text-gold/80 mb-3">
                    {s.sub}
                  </div>
                  <h3 className="font-display text-3xl md:text-4xl text-foreground mb-3">
                    {s.title}
                  </h3>
                  <p className="text-sm text-foreground/70 max-w-xs overflow-hidden max-h-0 group-hover:max-h-32 transition-all duration-700 ease-out">
                    {s.desc}
                  </p>
                  <div className="mt-4 flex items-center gap-2 text-gold text-[11px] tracking-[0.25em] uppercase opacity-70 group-hover:opacity-100 transition-opacity">
                    Saber mais
                    <span className="h-px w-6 bg-gold transition-all group-hover:w-10" />
                  </div>
                </div>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}