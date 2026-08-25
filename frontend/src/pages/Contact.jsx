import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import Label from "@/components/Label";
import Reveal from "@/components/Reveal";
import EnquiryForm from "@/components/EnquiryForm";
import { CONTACT } from "@/data/content";

export default function Contact() {
  return (
    <main data-testid="contact-page">
      {/* HERO — support team on video behind the headline */}
      <section data-testid="contact-hero" className="relative overflow-hidden pt-[78px] panel-brand">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="/assets/support-team-poster.jpg"
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/assets/support-team.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-[linear-gradient(100deg,rgba(15,39,66,0.95)_0%,rgba(27,74,122,0.82)_52%,rgba(46,107,168,0.62)_100%)]" />
        <div className="relative mx-auto max-w-[1320px] px-6 py-24">
          <p className="eyebrow text-white/75 mb-4">Contact Us</p>
          <h1 className="display-heavy text-white text-[42px] md:text-[64px] leading-[1.02] max-w-[16ch]">
            Let's build it together.
          </h1>
          <p className="mt-6 text-white/80 text-lg max-w-[46ch] leading-relaxed">
            A real person picks up. Tell us the site, the area and the timeline — we'll come back
            within 24 hours.
          </p>
          <span className="block h-1 w-16 bg-amber mt-8" aria-hidden="true" />
        </div>
      </section>

      <section className="py-[90px] max-md:py-[60px]">
        <div className="mx-auto max-w-[1320px] px-6 grid lg:grid-cols-5 gap-16">
          {/* FORM */}
          <div className="lg:col-span-3">
            <Reveal>
              <Label>Start a Conversation</Label>
              <h2 className="display-heavy text-ink text-3xl md:text-[38px] mt-6 leading-[1.08]">
                Share your project requirements
              </h2>
              <p className="mt-4 text-slate">
                Site location, built-up area, scope and timeline are enough for us to come back
                with a realistic answer. We respond within 24 hours.
              </p>
              <div className="mt-10 bg-white p-8 md:p-10 shadow-[0_4px_24px_rgba(20,26,36,0.10)] border-t-4 border-amber">
                <EnquiryForm variant="full" />
              </div>

              <div className="mt-10 flex flex-col sm:flex-row gap-6">
                <a
                  href={CONTACT.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-testid="contact-whatsapp-cta"
                  className="flex items-center gap-3 border border-[#25D366]/40 px-6 py-4 hover:bg-[#25D366]/5 transition-colors duration-200"
                >
                  <MessageCircle size={20} className="text-[#25D366]" fill="#25D366" strokeWidth={0} />
                  <span className="text-sm font-semibold text-ink">Chat directly with our team</span>
                </a>
                <a
                  href={CONTACT.phoneHref}
                  data-testid="contact-phone-cta"
                  className="flex items-center gap-3 border border-mist px-6 py-4 hover:border-amber transition-colors duration-200"
                >
                  <Phone size={19} strokeWidth={1.75} className="text-amber" />
                  <span className="text-lg font-semibold text-ink">{CONTACT.phone}</span>
                </a>
              </div>
            </Reveal>
          </div>

          {/* INFO */}
          <div className="lg:col-span-2">
            <Reveal delay={0.15}>
              <div className="overflow-hidden border border-mist" data-testid="contact-map">
                <iframe
                  title="Vastu Vistar office location"
                  src="https://maps.google.com/maps?q=18.6647298,74.0942504&z=17&output=embed"
                  className="w-full h-[300px]"
                  loading="lazy"
                />
              </div>
              <div className="mt-8 space-y-6">
                <div className="flex gap-4">
                  <MapPin size={20} strokeWidth={1.75} className="text-amber shrink-0 mt-1" />
                  <div>
                    <h3 className="eyebrow text-slate/50">Office</h3>
                    <p className="text-[15px] text-ink mt-1.5">{CONTACT.address}</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Phone size={20} strokeWidth={1.75} className="text-amber shrink-0 mt-1" />
                  <div>
                    <h3 className="eyebrow text-slate/50">Phone</h3>
                    <a href={CONTACT.phoneHref} data-testid="contact-info-phone" className="text-[15px] text-ink mt-1.5 block hover:text-brand transition-colors duration-200">
                      {CONTACT.phone}
                    </a>
                    <a href={CONTACT.phoneAltHref} data-testid="contact-info-phone-alt" className="text-[15px] text-ink mt-1 block hover:text-brand transition-colors duration-200">
                      {CONTACT.phoneAlt}
                    </a>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Mail size={20} strokeWidth={1.75} className="text-amber shrink-0 mt-1" />
                  <div>
                    <h3 className="eyebrow text-slate/50">Email</h3>
                    <a href={`mailto:${CONTACT.email}`} data-testid="contact-info-email" className="text-[15px] text-ink mt-1.5 block break-all hover:text-brand transition-colors duration-200">
                      {CONTACT.email}
                    </a>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Clock size={20} strokeWidth={1.75} className="text-amber shrink-0 mt-1" />
                  <div>
                    <h3 className="eyebrow text-slate/50">Working Hours</h3>
                    <p className="text-[15px] text-ink mt-1.5">{CONTACT.hours}</p>
                  </div>
                </div>
                <div className="border-t border-mist pt-6">
                  <p className="display-heavy text-xl text-ink leading-snug">
                    Design, sanctioning, development and handover — all under one roof.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </main>
  );
}
