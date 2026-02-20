import { Phone, MapPin, Mail } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-primary border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-12">
        <div className="flex flex-col md:flex-row items-start justify-between gap-10">
          {/* Brand */}
          <div>
            <p className="font-display text-2xl font-bold text-white tracking-tight">
              Twin Builders
            </p>
            <p className="font-body text-[9px] uppercase tracking-[0.35em] text-white/35 mt-1.5">
              Custom Homes · Albrightsville, PA
            </p>
            <p className="font-display text-xs italic text-white/25 mt-3">
              "The hand you shake is the hand that builds."
            </p>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col gap-3.5">
            <div className="flex items-center gap-3">
              <Phone size={11} className="text-accent shrink-0" />
              <a
                href="tel:5707229282"
                className="font-body text-xs text-white/55 hover:text-white transition-colors duration-500"
              >
                (570) 722-9282
              </a>
            </div>
            <div className="flex items-center gap-3">
              <Mail size={11} className="text-accent shrink-0" />
              <a
                href="mailto:twinbldr@ptd.net"
                className="font-body text-xs text-white/55 hover:text-white transition-colors duration-500"
              >
                twinbldr@ptd.net
              </a>
            </div>
            <div className="flex items-start gap-3">
              <MapPin size={11} className="text-accent shrink-0 mt-0.5" />
              <span className="font-body text-xs text-white/55 leading-relaxed">
                2581 State Route 903<br />
                Albrightsville, PA 18210
              </span>
            </div>
          </div>

          {/* Copyright */}
          <div className="text-left md:text-right">
            <p className="font-body text-[10px] text-white/25">
              © {year} Twin Builders. All rights reserved.
            </p>
            <p className="font-body text-[10px] text-white/15 mt-1">
              Albrightsville, Pennsylvania
            </p>
          </div>
        </div>
      </div>

      {/* Bottom strip */}
      <div className="border-t border-white/5 py-3">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="h-px bg-accent/20" />
        </div>
      </div>
    </footer>
  );
}
