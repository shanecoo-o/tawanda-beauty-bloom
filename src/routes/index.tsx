import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Marquee } from "@/components/Marquee";
import { Manifesto } from "@/components/Manifesto";
import { Services } from "@/components/Services";
import { Atelier } from "@/components/Atelier";
import { Gallery } from "@/components/Gallery";
import { Testimonials } from "@/components/Testimonials";
import { Pricing } from "@/components/Pricing";
import { Membership } from "@/components/Membership";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <main className="relative bg-background text-foreground">
      {/* Floating WhatsApp */}
      <a
        href="https://wa.me/258000000000"
        target="_blank"
        rel="noreferrer"
        aria-label="WhatsApp"
        className="fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full bg-gold text-noir flex items-center justify-center shadow-glow hover:scale-110 transition-transform duration-500"
      >
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
          <path d="M.057 24l1.687-6.163a11.867 11.867 0 01-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.817 11.817 0 018.413 3.488 11.824 11.824 0 013.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 01-5.688-1.448L.057 24z" />
        </svg>
      </a>

      <Nav />
      <Hero />
      <Marquee items={["Beauty", "Atelier", "Ritual", "Tawanda", "Editorial"]} />
      <Manifesto />
      <Services />
      <Atelier />
      <Gallery />
      <Marquee items={["Reserve", "Celebre", "Brilhe", "Ritual", "Tawanda"]} reverse />
      <Testimonials />
      <Pricing />
      <Membership />
      <Contact />
      <Footer />
    </main>
  );
}