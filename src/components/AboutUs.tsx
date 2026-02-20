"use client";

import { useState } from "react";
import Image from "next/image";
import { Newspaper, X } from "lucide-react";

export default function AboutUs() {
  const [showNewspaper, setShowNewspaper] = useState(false);
  const [photoError, setPhotoError] = useState(false);
  const [newspaperError, setNewspaperError] = useState(false);

  return (
    <section id="about" className="py-32 bg-bg">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section label */}
        <div className="mb-16 border-b border-primary/20 pb-8">
          <p className="font-body text-[10px] uppercase tracking-[0.4em] text-text-muted mb-3">
            Our Story
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-primary">
            As Featured In The Press
          </h2>
        </div>

        {/* Newspaper Clipping Container */}
        <div
          className="relative shadow-2xl"
          style={{ background: "#F0EBD5", border: "1px solid #9B8B6B" }}
        >
          {/* Aged corner fold */}
          <div
            className="absolute top-0 right-0 w-10 h-10"
            style={{
              background: "linear-gradient(225deg, #D4C8A8 50%, transparent 50%)",
              borderLeft: "1px solid #9B8B6B",
              borderBottom: "1px solid #9B8B6B",
            }}
          />

          {/* Masthead */}
          <div
            className="mx-6 md:mx-10 pt-8 pb-5 text-center"
            style={{ borderBottom: "3px double #1C1C1C" }}
          >
            <p
              className="font-body text-[9px] uppercase tracking-[0.4em] mb-2"
              style={{ color: "#5A5040" }}
            >
              ★ &nbsp; Local Business Feature Edition &nbsp; ★
            </p>
            <h3
              className="font-display font-black leading-none"
              style={{
                fontSize: "clamp(1.8rem, 5vw, 3.5rem)",
                color: "#1C1C1C",
                letterSpacing: "-0.02em",
              }}
            >
              The Carbon County Postscript
            </h3>
            <div
              className="flex justify-between items-center mt-3 pt-2"
              style={{ borderTop: "1px solid #9B8B6B" }}
            >
              <span
                className="font-body text-[9px] uppercase tracking-widest"
                style={{ color: "#5A5040" }}
              >
                Serving the Greater Pocono Region
              </span>
              <span
                className="font-body text-[9px] uppercase tracking-widest"
                style={{ color: "#5A5040" }}
              >
                Albrightsville, PA
              </span>
            </div>
          </div>

          {/* Article Body */}
          <div className="px-6 md:px-10 py-8">
            {/* Headline */}
            <h4
              className="font-display font-bold text-center leading-tight mb-2"
              style={{
                fontSize: "clamp(1.4rem, 3vw, 2.2rem)",
                color: "#1C1C1C",
              }}
            >
              Twin Builders Make Dreams Come True
            </h4>
            <p
              className="text-center text-xs italic mb-6 pb-5"
              style={{
                color: "#5A5040",
                fontFamily: "var(--font-body)",
                borderBottom: "1px solid #9B8B6B",
              }}
            >
              By Elsa Kerschner, Postscript Coordinator
            </p>

            {/* Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Article Text — Multi-column */}
              <div className="lg:col-span-2">
                <div
                  className="text-sm leading-relaxed"
                  style={{
                    columns: "2",
                    columnGap: "2rem",
                    color: "#2C2C1C",
                    fontFamily: "var(--font-body)",
                  }}
                >
                  <p className="mb-3 break-inside-avoid">
                    <span
                      className="font-display font-bold float-left leading-none mr-1"
                      style={{ fontSize: "3.5rem", lineHeight: "0.85", color: "#1A3322" }}
                    >
                      T
                    </span>
                    win Builders, Albrightsville, is building dreams for people with the well
                    constructed houses they are becoming known for. The twins of Twin Builders
                    are Shawn and Scott Lignore.
                  </p>

                  <p className="mb-3 break-inside-avoid">
                    The boys tested so high in mechanical ability at school that their parents
                    were called. Consequently, when they attended the Carbon County Vo-Tech
                    school they enrolled in carpentry for Shawn and plumbing for Scott. Upon
                    graduation they stepped into waiting construction jobs. By 1989 they felt
                    they were ready to step out on their own.
                  </p>

                  <p className="mb-3 break-inside-avoid">
                    Money was raised to buy land to build a house. The house was sold before
                    it was completed. That profit went into the next house and the fledgling
                    business quickly expanded.
                  </p>

                  <p className="mb-3 break-inside-avoid">
                    Parents Lee, office manager, and Rich, helper and advice-giver, are still
                    involved in the business. Other family members also get credit for helping
                    out such as sister Nicole Quavado who takes over the office when her
                    parents go on vacation.
                  </p>

                  <p className="mb-3 break-inside-avoid">
                    Commendations line the walls of the Route 903 office: "Thanks for getting
                    things done ahead of schedule"; from a construction engineer, "Doing
                    business with Twin Builders and watching our house take form has been a
                    true pleasure"; from an architect, "I believe I can recognize the qualities
                    of a good builder."
                  </p>

                  <p className="mb-3 break-inside-avoid">
                    Especially pleasing to Lee is the fact that she holds keys to many of the
                    residences Twin Builders have built so she can show them to potential
                    customers. People for whom they have built houses return to ask for
                    expansions or garages — which says a lot for the quality of the original
                    work.
                  </p>

                  <p className="mb-3 break-inside-avoid">
                    "We have a good rapport with suppliers," Lee says, which makes finishing
                    jobs on time easier. Twin Builders have a set of standard floor plans used
                    as a basis for customizing. "Chalets are popular right now as both primary
                    and secondary homes," Lee says.
                  </p>

                  <p className="mb-3 break-inside-avoid">
                    "I show them the homes and if they are interested they talk with my sons.
                    Our motto is 'The hand you shake is the hand that builds.' When I show a
                    house the quality of the work sells the customer on Twin Builders."
                  </p>

                  <p className="mb-3 break-inside-avoid">
                    The family is proud that the company received the contract to build the
                    rectory at St. Peter the Fisherman Catholic Church at Lake Hermany. "We
                    cater to people. You have to treat them with respect. We respected our
                    sons and taught them to pass it on," Lee says.
                  </p>

                  <p className="break-inside-avoid">
                    For information call (570) 722-9282 or stop in the office 1½ miles from
                    the Route 534 and 903 junction going toward Jim Thorpe.
                  </p>
                </div>
              </div>

              {/* Right Column — Photo + Quote + Button */}
              <div className="lg:col-span-1 space-y-6">
                {/* Photo */}
                <div style={{ border: "1px solid #9B8B6B" }}>
                  {!photoError ? (
                    <div className="relative w-full aspect-[3/4]">
                      <Image
                        src="/images/aboutUsPhoto.png"
                        alt="Shawn and Scott Lignore of Twin Builders"
                        fill
                        className="object-cover"
                        style={{ filter: "grayscale(30%) sepia(15%)" }}
                        onError={() => setPhotoError(true)}
                      />
                    </div>
                  ) : (
                    <div
                      className="w-full aspect-[3/4] flex flex-col items-center justify-center gap-2"
                      style={{ background: "#D4C8A8" }}
                    >
                      <span className="text-xs italic text-center px-4" style={{ color: "#5A5040" }}>
                        [Photo: Twin Builders Founders]
                      </span>
                    </div>
                  )}
                  <p
                    className="text-[9px] text-center italic py-2 px-3"
                    style={{
                      color: "#5A5040",
                      fontFamily: "var(--font-body)",
                      borderTop: "1px solid #9B8B6B",
                    }}
                  >
                    Shawn and Scott Lignore, Twin Builders, Albrightsville.
                  </p>
                </div>

                {/* Pull Quote */}
                <blockquote style={{ borderLeft: "3px solid #9B8B6B", paddingLeft: "1rem" }}>
                  <p
                    className="font-display text-lg italic leading-snug"
                    style={{ color: "#2C2C1C" }}
                  >
                    "The hand you shake is the hand that builds."
                  </p>
                  <cite
                    className="block mt-2 text-[9px] uppercase tracking-widest not-italic"
                    style={{ color: "#5A5040", fontFamily: "var(--font-body)" }}
                  >
                    — Lee Lignore, Twin Builders
                  </cite>
                </blockquote>

                {/* Original Paper Reveal */}
                <button
                  onClick={() => setShowNewspaper(true)}
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 text-xs uppercase tracking-widest transition-all duration-500"
                  style={{
                    border: "1px solid #9B8B6B",
                    color: "#5A5040",
                    fontFamily: "var(--font-body)",
                    background: "transparent",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.background = "#D4C8A8";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.background = "transparent";
                  }}
                >
                  <Newspaper size={13} />
                  Check out the original paper!
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Newspaper Lightbox */}
      {showNewspaper && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ background: "rgba(0,0,0,0.85)" }}
          onClick={() => setShowNewspaper(false)}
        >
          <div
            className="relative max-w-4xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowNewspaper(false)}
              className="absolute -top-10 right-0 flex items-center gap-2 text-white/70 hover:text-white transition-colors duration-300 font-body text-xs uppercase tracking-widest"
            >
              <X size={14} />
              Close
            </button>

            {!newspaperError ? (
              <div className="relative w-full" style={{ aspectRatio: "8.5/11" }}>
                <Image
                  src="/images/newspaper.png"
                  alt="Original Twin Builders newspaper article from The Carbon County Postscript"
                  fill
                  className="object-contain"
                  onError={() => setNewspaperError(true)}
                />
              </div>
            ) : (
              <div
                className="p-12 text-center"
                style={{ background: "#F0EBD5", border: "1px solid #9B8B6B" }}
              >
                <Newspaper size={40} style={{ color: "#9B8B6B", margin: "0 auto 1rem" }} />
                <p className="font-display text-xl italic" style={{ color: "#5A5040" }}>
                  Original newspaper clipping — coming soon.
                </p>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
