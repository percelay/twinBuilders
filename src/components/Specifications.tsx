"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

type SpecSection = {
  title: string;
  items: string[];
};

const specs: SpecSection[] = [
  {
    title: "Site Preparation",
    items: [
      "Remove all necessary trees and stumps for driveway, foundation area, 15' around home and clearing for septic and well.",
      "Any other trees cut more than the allowed area is at Homeowner's expense.",
      "Excavate land for foundation, back-fill and grade with existing material/dozer finished. No landscaping.",
      "ANY SETTLING AROUND PROPERTY AFTER C/O IS ISSUED WILL BE HOMEOWNERS RESPONSIBILITY.",
      "Driveway to be 50 x 15 with 1 course of rip-rap or equivalent, and 1 course of 2b stone.",
    ],
  },
  {
    title: "Well & Septic Allowances",
    items: [
      "Well allowance – 250 ft. drilling with 50 ft. casing.",
      "800 sq. ft. Septic System.",
      "Allowance price for septic system and access road is $10,500.00. Additional costs will be paid by Homeowner.",
      "ANYTHING THAT GOES OVER OUR ALLOWANCE WILL BE AN ADDITIONAL COST TO THE HOMEOWNER.",
      "Contractor recommends that homeowner buy and run a dehumidifier in basement or crawl space for the first full year, to reduce humidity.",
    ],
  },
  {
    title: "Crawl Space",
    items: [
      "XI Superior Walls.",
      "Crawl space floor shall have a moisture barrier over crushed stone base with 2\" concrete floor.",
      "Anchor bolts shall be set in top course every 4'.",
      "Treated sill plates shall be firmly secured to foundation by anchor bolts with fiberglass sill seal.",
      "Sub-pump in crawl space and/or perimeter drain.",
      "One (1) Sub-pump supplied by builder if needed. It is owner's responsibility to maintain and make sure the pump is functioning properly.",
      "Bilco door entry.",
    ],
  },
  {
    title: "Full Basement",
    items: [
      "XI Plus Superior walls.",
      "R-21 wall insulation.",
      "Two (2) anchor bolts shall be set every 4' side by side.",
      "Treated sill plates shall be firmly secured by anchor bolts with fiberglass sill seal.",
      "Perimeter drain to daylight or sub-pump.",
      "One (1) Sub-pump if needed will be supplied by builder. It is the Homeowner's responsibility to maintain and make sure pump is working properly.",
    ],
  },
  {
    title: "Framing",
    items: [
      "All lumber to be kiln dried at construction grade.",
      "All exterior wall framing to be 2 x 6 16\" O.C.",
      "Interior walls to be 2 x 4 16\" O.C.",
      "Floor joists to be 2 x 10 16\" O.C.",
      "Roof rafters to be 2 x 8 16\" O.C in flat ceiling area and 2 x 12 in cathedral ceiling.",
      "Flooring shall be 3/4 Advantech nailed, screwed and glued.",
      "Roof sheathing and exterior wall to be 7/16 OSB covered with synthetic felt and 25yr warranty shingles, ice and water shield on first 3' of roof.",
      "All exterior box joists will be pressure treated lumber for crawl space application.",
      "National Shelter House wrap to be used for house wrap.",
      "Ridge and soffit vents installed.",
      "Mastic Ovation or Summit Manor Vinyl siding on exterior walls — See Blue Prints.",
    ],
  },
  {
    title: "Insulation",
    items: [
      "All exterior walls will have R-21 insulation.",
      "R-30 in box joist in crawl space.",
      "R-49 in cathedral ceilings and R-49 in flat ceilings (all with proper vents and vapor barrier).",
    ],
  },
  {
    title: "Plumbing",
    items: [
      "50 Gallon hot water heater installed in utility room, crawl space or basement.",
      "Two (2) hose-bibs with frost free spigots.",
      "Faucets — Moen brand.",
      "Water saving toilets with shut off valves.",
      "Vanity and vanity tops to be cultured marble in bathrooms with shut off valves.",
      "Fiber glass one piece tub/shower.",
      "Light with exhaust fan in all bathrooms.",
      "Medicine cabinet with mirror and light bar.",
      "All water supply lines to be ¾\" Pex tubing with feeder lines to be ½\" Pex tubing with shut off valves.",
      "Washer/dryer hook-up.",
      "All plumbing to meet or exceed code.",
    ],
  },
  {
    title: "Kitchen",
    items: [
      "\"Woodstar\" cabinets — 6 choices of wood color (white is additional cost).",
      "Formica counter top with 4\" or full back splash.",
      "Stainless steel sink — single or double bowl, your choice.",
      "Electric range, microwave hood, dishwasher, and 18 cubic ft. refrigerator.",
    ],
  },
  {
    title: "Interior",
    items: [
      "½\" Sheetrock screwed, glued, taped, spackled and sanded with a smooth finish.",
      "Water proof sheetrock in bathroom.",
      "Paint walls all one color (flat white).",
      "Passage doors to be flush birch or white 6 panel doors.",
      "All entry doors to be Stanley Steel or equivalent (Twin Builders are not responsible for painting exterior doors).",
      "All closets to have a minimum of one (1) shelf and pole with bi-fold flush door.",
      "All trim to be colonial or ranch casing, stain grade your choice of color.",
    ],
  },
  {
    title: "Flooring",
    items: [
      "Wall to wall carpet, 7/16\" top bond padding with Plush, felt with Berber.",
      "No wax vinyl flooring in kitchen and bath.",
    ],
  },
  {
    title: "Electrical",
    items: [
      "200 Amp with circuit breakers; 40 breaker panel.",
      "All copper wiring to outlets and switches.",
      "Two (2) outside weatherproof electric receptacles with ground fault circuit interrupters.",
      "Electric baseboard heat.",
      "U.L. approved AC/DC smoke and carbon monoxide detectors.",
      "Standard light package: all rooms receive a ceiling fan with lights.",
      "All bathrooms to have exhaust fan with lights.",
      "Receptacles every 12 feet throughout house.",
      "Two (2) telephone and Two (2) cable jacks.",
      "All electric to meet or exceed codes.",
    ],
  },
  {
    title: "Exterior Windows",
    items: [
      "All windows are white Silverline by Andersen single hung that meet and exceed new energy codes.",
      "Picture frame window trim in your choice of color.",
    ],
  },
  {
    title: "Fireplace",
    items: [
      "Twin Builders will supply fire box and log set; customer is responsible for gas line hook-up and any charges incurred from Gas Company.",
      "Zero clearance style.",
      "5' Tall Eldorado stone facing (choice of color).",
      "8\" Lime Stone mantle with 12\" Lime Stone hearth.",
    ],
  },
  {
    title: "Decking",
    items: [
      "All pressure treated lumber, 16\" on center with 6 x 6 posts on concrete piers.",
      "5/4\" decking boards, with 2\"x8\" joist and 2\"x10\" box joist.",
      "2\"x2\" wood stock railing 4\" apart and 36\" high.",
      "House does include gutters.",
    ],
  },
];

export default function Specifications() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="specifications" className="py-20 bg-primary">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="mb-10 border-b border-white/15 pb-8">
          <p className="font-body text-[10px] uppercase tracking-[0.4em] text-accent mb-3">
            What&apos;s Included
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white">
            Building Specifications
          </h2>
          <p className="font-body text-sm text-white/50 mt-3 max-w-xl leading-relaxed">
            Every Twin Builders home is constructed to these standards. Owners may upgrade any
            package items at an additional cost.
          </p>
        </div>

        {/* Accordion */}
        <div className="divide-y divide-white/10">
          {specs.map((spec, index) => (
            <div key={spec.title}>
              <button
                onClick={() => toggle(index)}
                className="w-full flex items-center justify-between py-3 text-left group transition-colors duration-300"
                aria-expanded={openIndex === index}
              >
                <span className="font-body text-sm font-semibold text-white/80 group-hover:text-white transition-colors duration-500 uppercase tracking-[0.12em]">
                  {spec.title}
                </span>
                <ChevronDown
                  size={14}
                  className={`shrink-0 ml-4 text-white/30 transition-all duration-500 ${
                    openIndex === index ? "rotate-180 text-accent" : "group-hover:text-white/60"
                  }`}
                />
              </button>

              {/* Collapsible content */}
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  openIndex === index ? "max-h-[600px] pb-5" : "max-h-0"
                }`}
              >
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-1.5 pl-1 pb-1">
                  {spec.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-accent text-xs mt-0.5 shrink-0">—</span>
                      <span className="font-body text-xs text-white/60 leading-snug">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Disclaimer */}
        <div className="mt-8 pt-6 border-t border-white/15">
          <p className="font-body text-xs text-white/30 leading-relaxed max-w-3xl">
            <strong className="text-white/50 font-semibold">Disclaimer: </strong>
            Owner may feel free to upgrade any package items at an additional cost of material
            and labor. Any changes or alterations after start of construction will be additional
            charges to the Homeowner.
          </p>
        </div>
      </div>
    </section>
  );
}
