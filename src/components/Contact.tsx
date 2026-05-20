import { Reveal } from "./Reveal";

export function Contact() {
  return (
    <section id="contacto" className="relative py-32 px-6 lg:px-16 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] rounded-full bg-gold/10 blur-[180px]" />

      <div className="relative max-w-6xl mx-auto">
        <Reveal>
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-4 mb-6">
              <span className="h-px w-10 bg-gold" />
              <span className="text-[11px] tracking-[0.35em] uppercase text-gold/80">Reserve já</span>
              <span className="h-px w-10 bg-gold" />
            </div>
            <h2 className="font-display text-5xl md:text-7xl leading-[1.02]">
              Agende sua <em className="not-italic gradient-gold-text italic">transformação.</em>
            </h2>
            <p className="mt-6 max-w-xl mx-auto text-foreground/65">
              Responda em segundos, agendamos o seu momento. Atendimento via WhatsApp para máxima conveniência.
            </p>
          </div>
        </Reveal>

        <div className="grid lg:grid-cols-5 gap-6">
          <Reveal delay={0.1} className="lg:col-span-3">
            <form className="p-8 lg:p-10 rounded-3xl glass-strong shadow-luxe">
              <div className="grid sm:grid-cols-2 gap-5">
                <Field label="Nome" placeholder="Como podemos chamar-lhe" />
                <Field label="WhatsApp" placeholder="+258 ..." />
                <Field label="Serviço desejado" placeholder="Ex: Cabelo + Maquilhagem" />
                <Field label="Data preferida" placeholder="dd/mm/aaaa" />
              </div>
              <div className="mt-5">
                <label className="block text-[10px] tracking-[0.3em] uppercase text-foreground/50 mb-2">
                  Mensagem
                </label>
                <textarea
                  rows={3}
                  placeholder="Conte-nos um pouco sobre a ocasião..."
                  className="w-full px-5 py-4 rounded-2xl glass text-foreground placeholder-foreground/30 focus:outline-none focus:border-gold/40 transition-colors resize-none"
                />
              </div>
              <button
                type="button"
                className="mt-8 w-full inline-flex justify-center items-center gap-3 px-8 py-4 rounded-full bg-gold text-noir text-[12px] tracking-[0.25em] uppercase hover:shadow-glow transition-all"
              >
                Enviar Pedido
                <span className="h-px w-6 bg-noir" />
              </button>
              <p className="mt-4 text-center text-[11px] text-foreground/40 tracking-wide">
                Entraremos em contacto em breve para confirmar.
              </p>
            </form>
          </Reveal>

          <Reveal delay={0.2} className="lg:col-span-2">
            <div className="h-full flex flex-col gap-4">
              <a
                href="https://wa.me/258000000000"
                target="_blank"
                rel="noreferrer"
                className="group p-6 rounded-3xl glass hover:bg-foreground/[0.06] transition-all flex items-center gap-5"
              >
                <div className="w-12 h-12 rounded-full bg-gold/15 flex items-center justify-center text-gold">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                    <path d="M.057 24l1.687-6.163a11.867 11.867 0 01-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.817 11.817 0 018.413 3.488 11.824 11.824 0 013.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 01-5.688-1.448L.057 24z" />
                  </svg>
                </div>
                <div>
                  <div className="text-[10px] tracking-[0.3em] uppercase text-gold/70 mb-1">Mais rápido</div>
                  <div className="font-display text-xl">Fale no WhatsApp</div>
                </div>
              </a>

              <div className="p-6 rounded-3xl glass">
                <div className="text-[10px] tracking-[0.3em] uppercase text-gold/70 mb-2">Localização</div>
                <div className="font-display text-xl mb-1">Av. da Liberdade, 123</div>
                <div className="text-sm text-foreground/60">Bairro Central · Nampula</div>
              </div>

              <div className="p-6 rounded-3xl glass flex-1">
                <div className="text-[10px] tracking-[0.3em] uppercase text-gold/70 mb-3">Horário</div>
                <ul className="text-sm text-foreground/70 space-y-2">
                  <li className="flex justify-between"><span>Segunda — Sexta</span><span className="text-foreground">08:00 — 19:00</span></li>
                  <li className="flex justify-between"><span>Sábado</span><span className="text-foreground">08:00 — 16:00</span></li>
                  <li className="flex justify-between"><span>Domingo</span><span className="text-foreground/50">Fechado</span></li>
                </ul>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Field({ label, placeholder }: { label: string; placeholder: string }) {
  return (
    <div>
      <label className="block text-[10px] tracking-[0.3em] uppercase text-foreground/50 mb-2">
        {label}
      </label>
      <input
        type="text"
        placeholder={placeholder}
        className="w-full px-5 py-3.5 rounded-full glass text-foreground placeholder-foreground/30 focus:outline-none focus:border-gold/40 transition-colors"
      />
    </div>
  );
}