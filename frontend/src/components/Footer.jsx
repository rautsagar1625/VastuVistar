import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Linkedin, Instagram, Phone, Mail, MapPin, ArrowUp, MessageCircle } from "lucide-react";
import Logo from "@/components/Logo";
import { CONTACT, COMPANY, SERVICES } from "@/data/content";

export default function Footer() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <footer data-testid="site-footer" className="panel-navy text-white">
        <div className="mx-auto max-w-[1320px] px-6 py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1.2fr_1.3fr] gap-x-12 gap-y-10">
          <div>
            <Logo light height={48} />
            <p className="display-heavy text-lg text-white mt-5 leading-snug">
              {COMPANY.promise}
            </p>
            <p className="text-white/55 text-[13px] mt-2 leading-relaxed">
              {COMPANY.strapline}
            </p>
            <div className="flex gap-4 mt-5">
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" data-testid="footer-linkedin" aria-label="LinkedIn" className="text-white/60 hover:text-amber transition-colors duration-200">
                <Linkedin size={20} strokeWidth={1.5} />
              </a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" data-testid="footer-instagram" aria-label="Instagram" className="text-white/60 hover:text-amber transition-colors duration-200">
                <Instagram size={20} strokeWidth={1.5} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="eyebrow text-amber/90 mb-4">Quick Links</h4>
            <ul className="space-y-2.5 text-[14px]">
              {[["/", "Home"], ["/about", "About Us"], ["/portfolio", "Portfolio"], ["/contact", "Contact Us"]].map(([to, label]) => (
                <li key={to}>
                  <Link to={to} data-testid={`footer-link-${label.toLowerCase().replace(/[^a-z]+/g, "-")}`} className="text-white/75 hover:text-amber transition-colors duration-200">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="eyebrow text-amber/90 mb-4">Our Services</h4>
            <ul className="space-y-2.5 text-[14px]">
              {SERVICES.map((s) => (
                <li key={s.id}>
                  <Link to={`/#${s.id}`} data-testid={`footer-service-${s.id}`} className="text-white/75 hover:text-amber transition-colors duration-200">
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="eyebrow text-amber/90 mb-4">Contact</h4>
            <ul className="space-y-3 text-[14px] text-white/75">
              <li className="flex gap-3">
                <MapPin size={17} strokeWidth={1.5} className="text-amber shrink-0 mt-0.5" />
                <span>{CONTACT.address}</span>
              </li>
              <li>
                <a href={CONTACT.phoneHref} data-testid="footer-phone" className="flex gap-3 hover:text-amber transition-colors duration-200">
                  <Phone size={17} strokeWidth={1.5} className="text-amber shrink-0 mt-0.5" />
                  {CONTACT.phone}
                </a>
              </li>
              <li>
                <a href={CONTACT.phoneAltHref} data-testid="footer-phone-alt" className="flex gap-3 hover:text-amber transition-colors duration-200">
                  <Phone size={17} strokeWidth={1.5} className="text-amber shrink-0 mt-0.5" />
                  {CONTACT.phoneAlt}
                </a>
              </li>
              <li>
                <a href={`mailto:${CONTACT.email}`} data-testid="footer-email" className="flex gap-3 hover:text-amber transition-colors duration-200 break-all">
                  <Mail size={17} strokeWidth={1.5} className="text-amber shrink-0 mt-0.5" />
                  {CONTACT.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10">
          <div className="mx-auto max-w-[1320px] px-6 sm:pr-24 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-[12.5px] text-white/45">
            <span>© {new Date().getFullYear()} {COMPANY.name}. All rights reserved.</span>
            <div className="flex gap-6">
              <Link to="/contact" data-testid="footer-privacy" className="hover:text-amber transition-colors duration-200">Privacy Policy</Link>
              <Link to="/contact" data-testid="footer-terms" className="hover:text-amber transition-colors duration-200">Terms</Link>
            </div>
          </div>
        </div>
      </footer>

      <a
        href={CONTACT.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        data-testid="whatsapp-float"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-6 right-6 z-40 w-[60px] h-[60px] rounded-full bg-[#25D366] flex items-center justify-center shadow-[0_8px_28px_rgba(6,27,58,0.28)]"
        style={{ borderRadius: "50%" }}
      >
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-pulse-ring" aria-hidden="true" />
        <MessageCircle size={26} className="text-white relative" fill="white" strokeWidth={0} />
      </a>

      {showTop && (
        <button
          data-testid="back-to-top"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Back to top"
          className="fixed bottom-[86px] right-6 z-40 w-11 h-11 rounded-full bg-amber text-ink flex items-center justify-center shadow-[0_6px_18px_rgba(20,26,36,0.28)] transition-colors duration-200 hover:bg-amber-dark"
        >
          <ArrowUp size={18} strokeWidth={1.5} />
        </button>
      )}
    </>
  );
}
