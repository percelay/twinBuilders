export default function VideoShowcase() {
  const videos = [
    {
      id: 1,
      embedUrl:
        "https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2FTwinBuilders2%2Fvideos%2F671275351757992&show_text=false&width=560",
      label: "Custom Home Build — Project Showcase",
    },
    {
      id: 2,
      embedUrl:
        "https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2FTwinBuilders2%2Fvideos%2F616671333183753&show_text=false&width=560",
      label: "Custom Home Build — Project Showcase",
    },
  ];

  return (
    <section id="videos" className="py-32 bg-bg">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="mb-16 border-b border-primary/20 pb-8">
          <p className="font-body text-[10px] uppercase tracking-[0.4em] text-text-muted mb-3">
            See The Work
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-primary">
            Past Projects
          </h2>
          <p className="font-body text-sm text-text-muted mt-4 max-w-xl leading-relaxed">
            Watch Twin Builders homes come to life — from foundation to finish.
          </p>
        </div>

        {/* 2-Column Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {videos.map((video) => (
            <div
              key={video.id}
              className="border border-primary/20 overflow-hidden"
            >
              {/* Responsive 16:9 wrapper */}
              <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
                <iframe
                  src={video.embedUrl}
                  className="absolute inset-0 w-full h-full"
                  allowFullScreen
                  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                  title={video.label}
                  style={{ border: "none", display: "block" }}
                  loading="lazy"
                />
              </div>

              {/* Caption */}
              <div className="px-5 py-4 border-t border-primary/15 bg-surface">
                <p className="font-body text-[9px] uppercase tracking-[0.25em] text-text-muted">
                  Twin Builders — {video.label}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Follow CTA */}
        <div className="mt-12 border-t border-primary/20 pt-10 text-center">
          <p className="font-body text-xs text-text-muted uppercase tracking-widest mb-4">
            See more on Facebook
          </p>
          <a
            href="https://www.facebook.com/TwinBuilders2"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-7 py-3 border border-primary/40 text-primary font-body text-xs uppercase tracking-[0.2em] transition-all duration-700 hover:bg-primary hover:text-white"
          >
            Visit Our Page
          </a>
        </div>
      </div>
    </section>
  );
}
