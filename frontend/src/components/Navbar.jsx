import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, ArrowRight } from "lucide-react";
import Logo from "@/components/Logo";
import { CONTACT } from "@/data/content";

const LINKS = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/contact", label: "Contact Us" },
];

/**
 * Site-badge header. The bar is always the steel-blue gradient, so links and
 * logo never depend on what is behind them; the logo hangs below the bar on a
 * white plate with an amber footing, like a board on a hoarding.
 */
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [location.pathname]);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      <header data-testid="main-nav" className="fixed top-0 left-0 right-0 z-50">
        <div
          className={`nav-gradient-solid transition-[height,box-shadow] duration-300 ${
            scrolled ? "h-[68px] shadow-[0_6px_26px_rgba(15,39,66,0.30)]" : "h-[78px]"
          }`}
        >
          <div className="mx-auto max-w-[1320px] h-full px-6 flex items-center gap-6">
            {/* badge occupies this slot; spacer keeps the row aligned */}
            <div className={`shrink-0 transition-[width] duration-300 ${scrolled ? "w-[190px]" : "w-[224px]"}`} />

            <nav className="hidden lg:flex items-center gap-10 mx-auto" aria-label="Primary">
              {LINKS.map((l) => (
                <NavLink
                  key={l.to}
                  to={l.to}
                  end={l.to === "/"}
                  data-testid={`nav-link-${l.label.toLowerCase().replace(/[^a-z]+/g, "-")}`}
                  className={({ isActive }) =>
                    `relative py-2 font-sans text-[15px] font-semibold tracking-wide transition-colors duration-200
                     after:absolute after:left-0 after:right-0 after:-bottom-0.5 after:h-[3px] after:bg-amber
                     after:origin-left after:transition-transform after:duration-200 ${
                       isActive
                         ? "text-white after:scale-x-100"
                         : "text-white/80 hover:text-white after:scale-x-0 hover:after:scale-x-100"
                     }`
                  }
                >
                  {l.label}
                </NavLink>
              ))}
            </nav>

            <div className="hidden lg:flex items-center gap-5 shrink-0 ml-auto">
              <div className="flex items-center gap-2 text-[14.5px] font-semibold text-white/85">
                <Phone size={17} strokeWidth={2} className="shrink-0" />
                <a
                  href={CONTACT.phoneHref}
                  data-testid="nav-phone"
                  className="hover:text-white transition-colors duration-200"
                >
                  {CONTACT.phone}
                </a>
                <span className="text-white/35" aria-hidden="true">/</span>
                <a
                  href={CONTACT.phoneAltHref}
                  data-testid="nav-phone-alt"
                  className="hover:text-white transition-colors duration-200"
                >
                  {CONTACT.phoneAlt}
                </a>
              </div>
              <Link
                to="/contact"
                data-testid="get-quote-btn"
                className="group inline-flex items-center gap-2 h-12 pl-7 pr-6 rounded-full bg-amber text-ink font-sans text-[14.5px] font-bold tracking-wide transition-colors duration-200 hover:bg-amber-dark"
              >
                Get a Quote
                <ArrowRight size={16} strokeWidth={2.5} className="transition-transform duration-200 group-hover:translate-x-0.5" />
              </Link>
            </div>

            <button
              data-testid="mobile-menu-btn"
              onClick={() => setOpen(true)}
              className="lg:hidden ml-auto w-11 h-11 rounded-full bg-white/12 text-white flex items-center justify-center transition-colors duration-200 hover:bg-white/20"
              aria-label="Open menu"
            >
              <Menu size={22} strokeWidth={2} />
            </button>
          </div>
        </div>

        {/* The badge — white plate hung below the bar, amber footing */}
        <div className="absolute top-0 left-0 right-0 pointer-events-none">
          <div className="mx-auto max-w-[1320px] px-6">
            <Link
              to="/"
              data-testid="nav-logo"
              className={`pointer-events-auto relative block bg-white shadow-[0_14px_34px_rgba(10,20,35,0.30)]
                flex items-center justify-center transition-[width,height] duration-300
                ${scrolled ? "w-[176px] h-[94px] lg:w-[190px] lg:h-[100px]" : "w-[196px] h-[116px] lg:w-[224px] lg:h-[130px]"}`}
            >
              <Logo height={scrolled ? 62 : 84} className="px-2" />
              <span className="absolute left-0 right-0 bottom-0 h-[5px] bg-amber" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            data-testid="mobile-menu-overlay"
            className="fixed inset-0 z-[60] nav-gradient-solid flex flex-col"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <div className="flex items-center justify-between px-6 h-[78px]">
              <span className="bg-white px-3 py-2 shadow-[0_10px_24px_rgba(10,20,35,0.28)] relative">
                <Logo height={56} />
                <span className="absolute left-0 right-0 bottom-0 h-[4px] bg-amber" aria-hidden="true" />
              </span>
              <button
                data-testid="mobile-menu-close"
                onClick={() => setOpen(false)}
                className="w-11 h-11 rounded-full bg-white/12 text-white flex items-center justify-center"
                aria-label="Close menu"
              >
                <X size={22} strokeWidth={2} />
              </button>
            </div>
            <nav className="flex-1 flex flex-col justify-center px-8 gap-1 overflow-y-auto" aria-label="Mobile">
              {LINKS.map((l, i) => (
                <motion.div
                  key={l.to}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.08 + i * 0.05, duration: 0.4 }}
                >
                  <NavLink
                    to={l.to}
                    end={l.to === "/"}
                    data-testid={`mobile-nav-${l.label.toLowerCase().replace(/[^a-z]+/g, "-")}`}
                    className="block display-heavy text-3xl text-white py-3 hover:text-amber transition-colors duration-200"
                  >
                    {l.label}
                  </NavLink>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="mt-8 flex flex-col gap-4 items-start"
              >
                <Link
                  to="/contact"
                  data-testid="mobile-get-quote-btn"
                  className="inline-flex items-center gap-2 h-12 px-8 rounded-full bg-amber text-ink font-sans text-sm font-bold"
                >
                  Get a Quote <ArrowRight size={16} strokeWidth={2.5} />
                </Link>
                <a href={CONTACT.phoneHref} className="text-white/75 text-sm">{CONTACT.phone}</a>
                <a href={CONTACT.phoneAltHref} className="text-white/75 text-sm">{CONTACT.phoneAlt}</a>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
