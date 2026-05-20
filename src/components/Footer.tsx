export function Footer() {
  return (
    <footer className="relative px-6 lg:px-16 pt-20 pb-10 border-t border-foreground/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-10 mb-16">
          <div className="md:col-span-2">
            <div className="font-display text-3xl mb-2">Tawanda</div>
            <div className="text-[11px] tracking-[0.35em] uppercase text-gold/70 mb-6">Beauty Salon</div>
            <p className="text-sm text-foreground/55 max-w-sm leading-relaxed">
              Beleza que eleva. Estilo que transforma. Confiança que permanece.
            </p>
          </div>

          <div>
            <div className="text-[10px] tracking-[0.3em] uppercase text-gold/70 mb-5">Explore</div>
            <ul className="space-y-3 text-sm text-foreground/65">
              <li><a href="#servicos" className="hover:text-gold transition-colors">Serviços</a></li>
              <li><a href="#galeria" className="hover:text-gold transition-colors">Galeria</a></li>
              <li><a href="#membros" className="hover:text-gold transition-colors">Membros</a></li>
              <li><a href="#contacto" className="hover:text-gold transition-colors">Contacto</a></li>
            </ul>
          </div>

          <div>
            <div className="text-[10px] tracking-[0.3em] uppercase text-gold/70 mb-5">Siga-nos</div>
            <ul className="space-y-3 text-sm text-foreground/65">
              <li><a href="#" className="hover:text-gold transition-colors">Instagram</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">TikTok</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">WhatsApp</a></li>
            </ul>
          </div>
        </div>

        <div className="divider-gold mb-6" />
        <div className="flex flex-col sm:flex-row justify-between gap-3 text-[11px] tracking-wider text-foreground/40">
          <div>© {new Date().getFullYear()} Tawanda Beauty Salon. Todos os direitos reservados.</div>
          <div>Nampula · Moçambique</div>
        </div>
      </div>
    </footer>
  );
}