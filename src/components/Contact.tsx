"use client";

import { useState } from "react";
import { Phone, MapPin, Clock, Send, CheckCircle } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    details: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate submission — swap for a real API/Formspree endpoint in production
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 800);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-32 bg-surface">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="mb-16 border-b border-primary/20 pb-8">
          <p className="font-body text-[10px] uppercase tracking-[0.4em] text-text-muted mb-3">
            Let&apos;s Build Together
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-primary">
            Get a Free Quote
          </h2>
          <p className="font-body text-sm text-text-muted mt-4 max-w-xl leading-relaxed">
            We strive to be in constant communication with our customers until the job is done.
            Drop us a line — we look forward to serving you.
          </p>
        </div>

        {/* Split Screen */}
        <div className="grid grid-cols-1 lg:grid-cols-2 border border-primary/20">
          {/* Left — Form */}
          <div className="p-8 md:p-12 border-b lg:border-b-0 lg:border-r border-primary/20">
            <h3 className="font-display text-2xl font-bold text-primary mb-10">
              Request a Quote
            </h3>

            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-9">
                {/* Name */}
                <div>
                  <label className="font-body text-[9px] uppercase tracking-[0.3em] text-text-muted block mb-2">
                    Full Name <span className="text-accent">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                    className="w-full bg-transparent border-0 border-b border-primary/25 py-2.5 font-body text-sm text-text-main placeholder:text-text-muted/35 focus:outline-none focus:border-primary transition-colors duration-500"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="font-body text-[9px] uppercase tracking-[0.3em] text-text-muted block mb-2">
                    Email Address <span className="text-accent">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    className="w-full bg-transparent border-0 border-b border-primary/25 py-2.5 font-body text-sm text-text-main placeholder:text-text-muted/35 focus:outline-none focus:border-primary transition-colors duration-500"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="font-body text-[9px] uppercase tracking-[0.3em] text-text-muted block mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="(570) 000-0000"
                    className="w-full bg-transparent border-0 border-b border-primary/25 py-2.5 font-body text-sm text-text-main placeholder:text-text-muted/35 focus:outline-none focus:border-primary transition-colors duration-500"
                  />
                </div>

                {/* Project Details */}
                <div>
                  <label className="font-body text-[9px] uppercase tracking-[0.3em] text-text-muted block mb-2">
                    Project Details <span className="text-accent">*</span>
                  </label>
                  <textarea
                    name="details"
                    rows={4}
                    required
                    value={formData.details}
                    onChange={handleChange}
                    placeholder="Tell us about your project — model interest, lot location, timeline, questions..."
                    className="w-full bg-transparent border-0 border-b border-primary/25 py-2.5 font-body text-sm text-text-main placeholder:text-text-muted/35 focus:outline-none focus:border-primary transition-colors duration-500 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="flex items-center gap-2.5 px-8 py-3.5 bg-accent text-text-main font-body text-xs font-bold uppercase tracking-[0.2em] transition-opacity duration-700 hover:opacity-80 disabled:opacity-60"
                >
                  <Send size={13} />
                  {loading ? "Sending..." : "Send Request"}
                </button>
              </form>
            ) : (
              <div className="py-16 flex flex-col items-center text-center">
                <CheckCircle size={40} className="text-primary mb-5" strokeWidth={1.5} />
                <div className="w-12 h-px bg-accent mx-auto mb-6" />
                <h4 className="font-display text-2xl font-bold text-primary mb-3">
                  Thank You!
                </h4>
                <p className="font-body text-sm text-text-muted max-w-xs leading-relaxed">
                  We&apos;ve received your request. Shawn, Scott, or Lee will be in touch with
                  you shortly.
                </p>
              </div>
            )}
          </div>

          {/* Right — Info + Map */}
          <div className="p-8 md:p-12 bg-bg">
            <h3 className="font-display text-2xl font-bold text-primary mb-10">
              Contact Information
            </h3>

            <div className="space-y-8 mb-10">
              <div className="flex items-start gap-4">
                <MapPin size={15} className="text-primary mt-0.5 shrink-0" strokeWidth={1.5} />
                <div>
                  <p className="font-body text-[9px] uppercase tracking-[0.3em] text-text-muted mb-1.5">
                    Office Location
                  </p>
                  <p className="font-body text-sm text-text-main leading-relaxed">
                    2581 State Route 903<br />
                    Albrightsville, PA 18210
                  </p>
                  <p className="font-body text-xs text-text-muted mt-1">
                    1½ miles from the Route 534 & 903 junction toward Jim Thorpe
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Phone size={15} className="text-primary mt-0.5 shrink-0" strokeWidth={1.5} />
                <div>
                  <p className="font-body text-[9px] uppercase tracking-[0.3em] text-text-muted mb-1.5">
                    Phone
                  </p>
                  <a
                    href="tel:5707229282"
                    className="font-body text-sm text-text-main hover:text-primary transition-colors duration-300"
                  >
                    (570) 722-9282
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Clock size={15} className="text-primary mt-0.5 shrink-0" strokeWidth={1.5} />
                <div>
                  <p className="font-body text-[9px] uppercase tracking-[0.3em] text-text-muted mb-1.5">
                    Office Hours
                  </p>
                  <p className="font-body text-sm text-text-main">
                    Monday – Friday: 8:00 am – 3:00 pm
                  </p>
                  <p className="font-body text-sm text-text-main">
                    Saturday – Sunday: By Appointment Only
                  </p>
                </div>
              </div>
            </div>

            {/* Google Maps */}
            <div className="border border-primary/20 overflow-hidden">
              <iframe
                src="https://maps.google.com/maps?q=2581+State+Route+903,+Albrightsville,+PA+18210&output=embed"
                width="100%"
                height="260"
                style={{ border: 0, display: "block" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Twin Builders Office Location — 2581 State Route 903, Albrightsville, PA"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
