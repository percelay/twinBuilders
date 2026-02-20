import Image from "next/image";

export default function Hero() {
  return (
    <section id="hero" className="relative h-screen overflow-hidden">
      {/* Background Image */}
      <Image
        src="/images/hero.jpeg"
        alt="Twin Builders custom home exterior"
        fill
        className="object-cover"
        priority
        quality={90}
      />

      {/* Dark overlay — bottom heavier for legibility */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/40 to-primary/20" />

      {/* Thin decorative rule */}
      <div className="absolute top-0 left-0 right-0 h-px bg-accent/30" />

      {/* Content — bottom left */}
      <div className="absolute bottom-16 left-8 md:left-16 lg:left-24 max-w-2xl">
        <p className="font-body text-[10px] uppercase tracking-[0.4em] text-accent mb-5">
          Albrightsville, Pennsylvania
        </p>

        <h1 className="font-display text-6xl md:text-8xl font-bold text-white leading-none mb-5">
          Twin<br />Builders
        </h1>

        <p className="font-body text-base text-white/70 mb-10 tracking-wide">
          Custom homes built by hand. Call for a free quote.
        </p>

        <div className="flex flex-wrap gap-4">
          <a
            href="#portfolio"
            className="inline-flex items-center px-8 py-3.5 border border-white/70 text-white font-body text-xs uppercase tracking-[0.2em] transition-all duration-700 hover:bg-white hover:text-primary"
          >
            View Portfolio
          </a>
          <a
            href="#contact"
            className="inline-flex items-center px-8 py-3.5 bg-accent text-text-main font-body text-xs font-bold uppercase tracking-[0.2em] transition-opacity duration-700 hover:opacity-85"
          >
            Get a Free Quote
          </a>
        </div>
      </div>

      {/* Scroll hint — bottom right */}
      <div className="absolute bottom-8 right-8 md:right-16 flex flex-col items-center gap-3">
        <span className="font-body text-[9px] uppercase tracking-[0.3em] text-white/40">
          Scroll
        </span>
        <div className="w-px h-14 bg-gradient-to-b from-white/30 to-transparent" />
      </div>
    </section>
  );
}
