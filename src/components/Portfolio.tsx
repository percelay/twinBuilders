"use client";

import { useState } from "react";
import Image from "next/image";
import { X, ArrowRight } from "lucide-react";

type Model = {
  id: string;
  name: string;
  specs: string;
  feature: string;
  description: string;
  featureDescription: string;
  contact?: string;
  image: string | null;
  floorplan: string | null;
};

const models: Model[] = [
  {
    id: "chalet",
    name: "The Chalet",
    specs: "Nearly 2,600 sq ft",
    feature: "Spacious!",
    description:
      "With a great room, family room, loft, plus three bedrooms and two full baths plus a half bath this model boasts nearly 2,600 sq. ft. of living space. This Chalet also features a fireplace AND a spiral staircase!",
    featureDescription:
      "Loads of storage space, including two walk-in closets on the second floor. Two entry ways from an expansive wrap-around patio deck, including French door at living room, additional deck at rear of living room and a balcony with sliding glass door off of master bedroom.",
    contact: "twinbldr@ptd.net | (570) 722-9282",
    image: "/images/chaletpic.webp",
    floorplan: "/images/chaletfloorplan.webp",
  },
  {
    id: "pocono",
    name: "The Pocono Chalet with Basement",
    specs: "Roughly 1,700 sq ft",
    feature: "Versatile open basement",
    description:
      "Three spacious bedrooms and two full baths give this model roughly 1,700 square feet of functional space spread over three levels. The loft and stairway overlook the living room with cathedral ceilings.",
    featureDescription:
      "With a fireplace, separate entrance, and the potential to add a third bedroom, the open basement area is extremely versatile.",
    image: "/images/pocongarageopic.webp",
    floorplan: "/images/poconogarageplan.webp",
  },
  {
    id: "garbo",
    name: "The Garbo",
    specs: "Nearly 2,500 sq ft",
    feature: "Garage & large porch",
    description:
      "Three spacious bedrooms and three full baths give this model nearly 2,500 square feet of living space on two floors. The fireplace and open second-floor loft add to its rustic charm. Lighted ceiling fans in all bedrooms, kitchen, living room, dining room and family room.",
    featureDescription:
      "The garage adds another 440 square feet of functionality and the porch stretches across the entire front. Three direct entry ways plus garage access and washer/dryer hook-ups on the first floor in a separate laundry room.",
    image: "/images/garbopic.webp",
    floorplan: "/images/garboplan.webp",
  },
  {
    id: "hideaway",
    name: "The Hideaway",
    specs: "1,480 sq ft",
    feature: "Loft, fireplace & wrap-around deck",
    description:
      "Three bedrooms and two full baths between its two levels give this model 1,480 square feet of living space. Washer/Dryer hook-ups on the first floor, ceiling fans in all bedrooms and from cathedral ceiling above living room.",
    featureDescription:
      "Its rustic features include a loft, a fireplace and two entry ways from a wrap-around patio deck, including a sliding glass door at the living room.",
    image: null,
    floorplan: null,
  },
  {
    id: "hilltop",
    name: "The Hilltop with Basement & Garage",
    specs: "1,150 sq ft",
    feature: "Four entry ways & added functionality",
    description:
      "Three spacious bedrooms and two bathrooms fill more than 1,150 square feet of living space on the main floor. This model has four entry ways — one through the garage, another through the basement plus two via the deck.",
    featureDescription:
      "The fireplace, attic space and enclosed all-weather porch add to the functionality of this model. The lower level adds the convenience of a basement and attached garage.",
    image: null,
    floorplan: null,
  },
];

function FallbackPhoto({ label }: { label: string }) {
  return (
    <div className="w-full h-full bg-surface flex flex-col items-center justify-center gap-3">
      <div className="w-8 h-px bg-primary/20" />
      <p className="font-body text-xs text-text-muted italic text-center px-4">{label}</p>
      <div className="w-8 h-px bg-primary/20" />
    </div>
  );
}

function ModelCard({ model, onClick }: { model: Model; onClick: () => void }) {
  const [imgError, setImgError] = useState(false);
  const hasImage = model.image && !imgError;

  return (
    <button
      onClick={onClick}
      className="group relative block w-full text-left bg-bg border border-primary/15 transition-all duration-700 hover:border-primary/50 hover:shadow-lg"
    >
      {/* Thumbnail */}
      <div className="relative w-full overflow-hidden bg-surface" style={{ aspectRatio: "4/3" }}>
        {hasImage ? (
          <Image
            src={model.image!}
            alt={`${model.name} — Twin Builders`}
            fill
            className="object-cover transition-all duration-700 group-hover:scale-105"
            onError={() => setImgError(true)}
          />
        ) : (
          <FallbackPhoto label={`${model.name} — Photo Coming Soon`} />
        )}

        <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/30 transition-all duration-700" />
        <div className="absolute bottom-0 right-0 px-3 py-1.5 bg-accent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <span className="font-body text-[9px] font-bold uppercase tracking-[0.2em] text-text-main flex items-center gap-1">
            View Details <ArrowRight size={9} />
          </span>
        </div>
      </div>

      {/* Meta */}
      <div className="p-5 border-t border-primary/10">
        <p className="font-body text-[9px] uppercase tracking-[0.25em] text-text-muted mb-1.5">
          {model.specs}
        </p>
        <h3 className="font-display text-lg font-bold text-primary leading-snug">
          {model.name}
        </h3>
        <p className="font-body text-[9px] font-bold uppercase tracking-[0.2em] text-accent mt-2">
          {model.feature}
        </p>
      </div>
    </button>
  );
}

function ModelModal({ model, onClose }: { model: Model; onClose: () => void }) {
  const [imgError, setImgError] = useState(false);
  const [fpError, setFpError] = useState(false);

  const showPhoto = model.image && !imgError;
  const showFloorplan = model.floorplan && !fpError;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto"
      style={{ background: "rgba(26,51,34,0.85)" }}
      onClick={onClose}
    >
      <div
        className="relative bg-bg max-w-5xl w-full my-8 border border-primary/30 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-start justify-between p-6 md:p-8 border-b border-primary/20">
          <div>
            <p className="font-body text-[9px] uppercase tracking-[0.3em] text-text-muted mb-1.5">
              {model.specs}
            </p>
            <h3 className="font-display text-2xl md:text-3xl font-bold text-primary">
              {model.name}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="text-text-muted hover:text-primary transition-colors duration-300 ml-4 mt-1"
            aria-label="Close modal"
          >
            <X size={20} />
          </button>
        </div>

        {/* Top row: exterior photo + description */}
        <div className="grid grid-cols-1 md:grid-cols-2 border-b border-primary/20">
          {/* Exterior photo */}
          <div className="relative bg-surface" style={{ aspectRatio: "4/3" }}>
            {showPhoto ? (
              <Image
                src={model.image!}
                alt={`${model.name} exterior`}
                fill
                className="object-cover"
                onError={() => setImgError(true)}
              />
            ) : (
              <FallbackPhoto label="Home Photo" />
            )}
            <div className="absolute bottom-0 left-0 bg-primary/80 px-3 py-1.5">
              <span className="font-body text-[9px] uppercase tracking-[0.2em] text-white">
                Exterior
              </span>
            </div>
          </div>

          {/* Description */}
          <div className="p-6 md:p-8 border-t md:border-t-0 md:border-l border-primary/20 flex flex-col justify-between">
            <div>
              <p className="font-body text-sm text-text-main leading-relaxed mb-6">
                {model.description}
              </p>
              <p className="font-body text-[9px] uppercase tracking-[0.25em] text-accent font-bold mb-2">
                {model.feature}
              </p>
              <p className="font-body text-sm text-text-main leading-relaxed">
                {model.featureDescription}
              </p>
            </div>

            {model.contact && (
              <p className="font-body text-xs text-text-muted mt-6 pt-5 border-t border-primary/15">
                Questions?{" "}
                <span className="text-primary font-medium">{model.contact}</span>
              </p>
            )}
          </div>
        </div>

        {/* Floor plan — full width, landscape */}
        <div className="border-b border-primary/20">
          <div className="relative bg-surface w-full" style={{ aspectRatio: "16/7" }}>
            {showFloorplan ? (
              <Image
                src={model.floorplan!}
                alt={`${model.name} floor plan`}
                fill
                className="object-contain py-4 px-6"
                onError={() => setFpError(true)}
              />
            ) : (
              <FallbackPhoto label="Floor Plan — Coming Soon" />
            )}
            <div className="absolute bottom-0 left-0 bg-primary/80 px-3 py-1.5">
              <span className="font-body text-[9px] uppercase tracking-[0.2em] text-white">
                Floor Plan
              </span>
            </div>
          </div>
        </div>

        {/* Footer actions */}
        <div className="p-6 md:p-8 flex flex-wrap gap-4">
          <a
            href="#contact"
            onClick={onClose}
            className="inline-flex items-center gap-2 px-7 py-3 bg-accent text-text-main font-body text-xs font-bold uppercase tracking-[0.2em] transition-opacity duration-500 hover:opacity-80"
          >
            Request a Quote
            <ArrowRight size={12} />
          </a>
          <button
            onClick={onClose}
            className="inline-flex items-center px-7 py-3 border border-primary/30 text-text-muted font-body text-xs uppercase tracking-[0.2em] transition-colors duration-500 hover:border-primary hover:text-primary"
          >
            Back to Portfolio
          </button>
        </div>
      </div>
    </div>
  );
}

export default function Portfolio() {
  const [selectedModel, setSelectedModel] = useState<Model | null>(null);

  return (
    <section id="portfolio" className="py-32 bg-surface">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="mb-16 border-b border-primary/20 pb-8">
          <p className="font-body text-[10px] uppercase tracking-[0.4em] text-text-muted mb-3">
            Our Builds
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-primary">
            Home Models
          </h2>
          <p className="font-body text-sm text-text-muted mt-4 max-w-xl leading-relaxed">
            Each model serves as a fully customizable starting point. Wider windows, room
            extensions, and personalized finishes make every Twin Builders home uniquely yours.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-primary/10">
          {models.map((model) => (
            <div key={model.id} className="bg-surface">
              <ModelCard model={model} onClick={() => setSelectedModel(model)} />
            </div>
          ))}
        </div>
      </div>

      {selectedModel && (
        <ModelModal model={selectedModel} onClose={() => setSelectedModel(null)} />
      )}
    </section>
  );
}
