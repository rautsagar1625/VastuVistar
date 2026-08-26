import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, X, MapPin, CalendarDays, Layers } from "lucide-react";
import Label from "@/components/Label";
import Reveal from "@/components/Reveal";
import PageHero from "@/components/PageHero";
import { IMG, PROJECTS, NOTABLE_CAPABILITIES, SITE_GALLERY } from "@/data/content";

const FILTERS = ["All", "Industrial", "Commercial", "Residential", "Infrastructure"];

/* The corridor the firm actually operates in. Deliberately no per-area
   counts — the project total lives in STATS and is not split by area. */
const REACH = [
  { name: "Sanaswadi" },
  { name: "Ranjangaon" },
  { name: "Koregaon" },
  { name: "Wadegaon" },
  { name: "Shikrapur" },
  { name: "Talegaon" },
];

function ProjectCard({ project, onOpen, tall = false }) {
  return (
    <button
      type="button"
      onClick={() => onOpen(project)}
      data-testid={`project-card-${project.slug}`}
      className="group relative block w-full text-left overflow-hidden"
    >
      <img
        src={project.image}
        alt={project.name}
        className={`w-full object-cover transition-transform duration-300 ease-out group-hover:scale-[1.04] ${tall ? "aspect-[3/4]" : "aspect-[3/2]"}`}
      />
      <div className="absolute inset-0 bg-brand/0 group-hover:bg-brand/85 transition-colors duration-300 flex flex-col items-start justify-end p-8 opacity-0 group-hover:opacity-100">
        <span className="inline-block bg-white text-brand eyebrow px-3 py-1.5">{project.category}</span>
        <h3 className="display-heavy text-lg text-white mt-3">{project.name}</h3>
        <p className="text-white/80 text-sm">{project.location}</p>
        <span className="inline-flex items-center gap-2 mt-3 text-white text-sm font-semibold">
          View Case Study <ArrowRight size={15} strokeWidth={2} />
        </span>
      </div>
    </button>
  );
}

function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  const facts = [
    [MapPin, "Location", project.location],
    [CalendarDays, "Completed", project.year],
    [Layers, "Scope", project.scope.join(", ")],
  ];

  return (
    <motion.div
      data-testid="project-modal"
      className="fixed inset-0 z-[70] flex items-start justify-center p-4 md:p-8 overflow-y-auto"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="fixed inset-0 bg-navy/85 backdrop-blur-sm" onClick={onClose} />
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 30, opacity: 0 }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className="relative bg-white w-full max-w-3xl my-8"
        role="dialog"
        aria-modal="true"
        aria-label={project.name}
      >
        <button
          onClick={onClose}
          data-testid="project-modal-close"
          aria-label="Close"
          className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/90 text-ink hover:bg-amber hover:text-ink transition-colors duration-200 flex items-center justify-center"
        >
          <X size={20} strokeWidth={2} />
        </button>

        <img src={project.image} alt={project.name} className="w-full aspect-[16/9] object-cover" />

        <div className="p-8 md:p-10">
          <span className="inline-block bg-brand text-white eyebrow px-3 py-1.5">{project.category}</span>
          <h2 className="display-heavy text-ink text-3xl md:text-[38px] leading-[1.06] mt-4">{project.name}</h2>
          <p className="text-slate mt-4 text-[16px] leading-relaxed">{project.tagline}</p>

          <div className="grid sm:grid-cols-3 gap-px bg-mist mt-8">
            {facts.filter(([, , v]) => v).map(([Icon, k, v]) => (
              <div key={k} className="bg-cloud p-5">
                <Icon size={17} strokeWidth={1.75} className="text-amber" />
                <div className="eyebrow text-slate/50 mt-3">{k}</div>
                <div className="text-[14px] text-ink mt-1 leading-snug">{v}</div>
              </div>
            ))}
          </div>

          <div className="mt-8">
            <div className="eyebrow text-slate/50 mb-3">Services Provided</div>
            <div className="flex flex-wrap gap-2">
              {project.services.map((s) => (
                <span key={s} className="border border-mist px-3 py-1.5 text-[13px] text-ink">{s}</span>
              ))}
            </div>
          </div>

          {[
            ["The Challenge", project.challenge],
            ["Our Solution", project.solution],
            ["The Outcome", project.outcome],
          ]
            .filter(([, body]) => body)
            .map(([title, body], i) => (
            <div key={title} className="mt-8">
              <div className="flex items-baseline gap-4">
                <span className="display-heavy text-2xl text-amber">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="display-heavy text-ink text-lg">{title}</h3>
              </div>
              <p className="mt-3 text-[15px] leading-[1.75] text-slate sm:pl-[44px]">{body}</p>
            </div>
            ))}

          <div className="grid grid-cols-3 gap-3 mt-10">
            {project.gallery.map((g, i) => (
              <img key={g} src={g} alt={`${project.name} — detail ${i + 1}`} className="w-full aspect-[4/3] object-cover" />
            ))}
          </div>

          <Link
            to="/contact"
            onClick={onClose}
            data-testid="modal-enquire-link"
            className="inline-flex items-center h-12 px-8 mt-10 rounded-full bg-amber text-ink font-sans text-[13px] font-semibold tracking-wide transition-colors duration-200 hover:bg-amber-dark"
          >
            Discuss a similar project
          </Link>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Portfolio() {
  const [filter, setFilter] = useState("All");
  const [open, setOpen] = useState(null);
  const shown = filter === "All" ? PROJECTS : PROJECTS.filter((p) => p.category === filter);

  return (
    <main data-testid="portfolio-page">
      <PageHero
        image={IMG.tower}
        eyebrow="INDUSTRIAL · COMMERCIAL · RESIDENTIAL · INFRASTRUCTURE"
        title="Our work speaks for itself"
      />

      {/* FILTER BAR */}
      <div data-testid="project-filters" className="sticky top-[78px] z-30 bg-white border-b border-mist">
        <div className="mx-auto max-w-[1320px] px-6 flex gap-1 overflow-x-auto">
          {FILTERS.map((f) => (
            <button
              key={f}
              data-testid={`filter-${f.toLowerCase()}`}
              onClick={() => setFilter(f)}
              className={`whitespace-nowrap px-5 py-4 font-sans text-[13px] font-semibold border-b-2 transition-colors duration-200 ${
                filter === f ? "border-brand text-brand" : "border-transparent text-slate/70 hover:text-ink"
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      {/* GRID */}
      <section className="py-[80px] max-md:py-[50px]">
        <div className="mx-auto max-w-[1320px] px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6" data-testid="projects-grid">
            {shown.map((p, i) => (
              <Reveal key={p.slug} delay={(i % 3) * 0.08}>
                <div>
                  <ProjectCard project={p} onOpen={setOpen} />
                  <div className="mt-3">
                    <h3 className="display-heavy text-ink text-[15px]">{p.name}</h3>
                    <p className="text-sm text-slate/70">
                      {[p.location, p.year].filter(Boolean).join(" · ")}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
          {shown.length === 0 && (
            <p className="text-center text-slate/60 py-16" data-testid="no-projects">No projects in this category yet.</p>
          )}
        </div>
      </section>

      {/* FROM OUR SITES */}
      <section data-testid="site-gallery-section" className="py-[90px] max-md:py-[60px]">
        <div className="mx-auto max-w-[1320px] px-6">
          <Reveal>
            <Label>From Our Sites</Label>
            <h2 className="display-heavy text-ink text-3xl md:text-[42px] mt-6">
              Sanaswadi &amp; Koregaon
            </h2>
            <p className="text-[15px] text-slate/80 mt-4 max-w-[560px] leading-relaxed">
              Photographs taken on our own sites — steel up, sheeting on, and the finished
              buildings handed over.
            </p>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {SITE_GALLERY.map((shot, i) => (
              <Reveal
                key={shot.src}
                delay={(i % 3) * 0.08}
                className={shot.wide ? "lg:col-span-2" : ""}
              >
                <figure
                  data-testid={`site-shot-${shot.src.split("/").pop().split(".")[0].toLowerCase()}`}
                  className="group bg-white shadow-[0_4px_20px_rgba(6,27,58,0.08)] h-full"
                >
                  <div className="overflow-hidden">
                    <img
                      src={shot.src}
                      alt={`${shot.caption} — ${shot.location}`}
                      loading="lazy"
                      className={`w-full object-cover transition-transform duration-500 group-hover:scale-[1.04] ${
                        shot.wide ? "aspect-[2/1]" : "aspect-[4/3]"
                      }`}
                    />
                  </div>
                  <figcaption className="p-6">
                    <span className="eyebrow text-brand">{shot.location}</span>
                    <p className="text-sm text-slate/80 mt-2 leading-relaxed">{shot.caption}</p>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CAPABILITIES */}
      <section data-testid="capabilities-section" className="py-[90px] max-md:py-[60px] bg-cloud">
        <div className="mx-auto max-w-[1320px] px-6">
          <Reveal>
            <Label>Capabilities</Label>
            <h2 className="display-heavy text-ink text-3xl md:text-[42px] mt-6">
              What we put up, week after week
            </h2>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {NOTABLE_CAPABILITIES.map((c, i) => (
              <Reveal key={c.name} delay={i * 0.07} className={i === 0 ? "lg:col-span-2" : ""}>
                <div data-testid={`capability-${c.name.toLowerCase().replace(/[^a-z]+/g, "-")}`} className="group bg-white shadow-[0_4px_20px_rgba(6,27,58,0.08)] h-full">
                  <div className="overflow-hidden">
                    <img
                      src={c.image}
                      alt={c.name}
                      className={`w-full object-cover transition-transform duration-500 group-hover:scale-[1.04] ${i === 0 ? "aspect-[2/1]" : "aspect-[4/3]"}`}
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="display-heavy text-ink text-[15px]">{c.name}</h3>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* REACH — DARK */}
      <section data-testid="geo-reach-section" className="panel-brand py-[84px] max-md:py-[56px]">
        <div className="mx-auto max-w-[1320px] px-6 grid lg:grid-cols-2 gap-14">
          <Reveal>
            <Label dark>Where We Build</Label>
            <h2 className="display-heavy text-white text-3xl md:text-[46px] mt-6 leading-[1.06]">
              Across Maharashtra's industrial belt
            </h2>
            <p className="mt-6 text-white/70 leading-[1.75] max-w-lg">
              We work across the industrial belt east of Pune — on the estates around
              Sanaswadi, Ranjangaon, Koregaon, Wadegaon, Shikrapur and Talegaon. Sites are
              supervised by our own engineers, not handed to third parties.
            </p>
            <Link
              to="/contact"
              data-testid="portfolio-cta-link"
              className="link-underline inline-flex items-center gap-2 mt-8 text-white font-sans text-sm font-semibold"
            >
              Start your project <ArrowRight size={16} strokeWidth={2} />
            </Link>
          </Reveal>
          <div className="grid sm:grid-cols-2 gap-px bg-white/15 self-center" data-testid="region-list">
            {REACH.map((r, i) => (
              <Reveal key={r.name} delay={i * 0.06}>
                <div className="bg-brand-deep p-6 flex items-center gap-3">
                  <MapPin size={16} strokeWidth={2} className="text-amber shrink-0" />
                  <span className="display-heavy text-white text-[15px]">{r.name}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <AnimatePresence>
        {open && <ProjectModal project={open} onClose={() => setOpen(null)} />}
      </AnimatePresence>
    </main>
  );
}
