import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform, useInView, AnimatePresence } from "framer-motion";
import {
  Factory, Building2, Home as HomeIcon, Landmark,
  ArrowRight, Star, Check, ShieldCheck, CalendarCheck, IndianRupee,
} from "lucide-react";
import Label from "@/components/Label";
import Reveal from "@/components/Reveal";
import Marquee from "@/components/Marquee";
import ClientMarquee from "@/components/ClientMarquee";
import ServicesCarousel from "@/components/ServicesCarousel";
import EnquiryForm from "@/components/EnquiryForm";
import {
  IMG, INDUSTRIES, TESTIMONIALS, PROJECTS, PROCESS_STEPS, STATS, COMPANY,
} from "@/data/content";

const ICONS = { Factory, Building2, Home: HomeIcon, Landmark };

/** Rising offsets for the four process circles on large screens. */
const STEP_OFFSET = ["lg:mt-24", "lg:mt-16", "lg:mt-8", "lg:mt-0"];

const ASSURANCES = [
  {
    icon: ShieldCheck,
    title: "Safety & Engineering Standards",
    description: "Site safety protocols and engineering checks held to the same standard on every project, whatever its size.",
  },
  {
    icon: CalendarCheck,
    title: "On Schedule",
    description: "A programme agreed before mobilisation, tracked weekly, with early warning the moment anything threatens it.",
  },
  {
    icon: IndianRupee,
    title: "Within Budget",
    description: "Scope frozen and priced on measured quantities, so the final bill matches the number you approved.",
  },
];

function MaskLine({ children, delay }) {
  return (
    <span className="block overflow-hidden">
      <motion.span
        className="block"
        initial={{ y: "110%" }}
        animate={{ y: 0 }}
        transition={{ delay, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      >
        {children}
      </motion.span>
    </span>
  );
}

function CountUp({ value, suffix = "", decimals = 0 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const start = performance.now();
    const dur = 1400;
    let frame;
    const tick = (t) => {
      const p = Math.min((t - start) / dur, 1);
      setN(value * (1 - Math.pow(1 - p, 3)));
      if (p < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, value]);
  return (
    <span ref={ref}>
      {n.toFixed(decimals)}
      {suffix}
    </span>
  );
}

export default function Home() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "35%"]);
  const fade = useTransform(scrollYProgress, [0, 0.75], [1, 0]);

  const [testimonial, setTestimonial] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setTestimonial((i) => (i + 1) % TESTIMONIALS.length), 5000);
    return () => clearInterval(t);
  }, []);

  const featured = PROJECTS[0];
  const preview = [PROJECTS[2], PROJECTS[3], PROJECTS[5]];

  return (
    <main data-testid="home-page">
      {/* HERO */}
      <section ref={heroRef} data-testid="hero-section" className="relative h-screen min-h-[620px] overflow-hidden panel-navy">
        <motion.div style={{ y: bgY }} className="absolute inset-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            poster={IMG.heroHome}
            className="w-full h-full object-cover"
          >
            <source src="/hero.mp4" type="video/mp4" />
          </video>
        </motion.div>
        <div className="absolute inset-0 bg-[linear-gradient(102deg,rgba(28,36,49,0.95)_0%,rgba(28,36,49,0.70)_45%,rgba(10,77,224,0.32)_100%)]" />

        <motion.div style={{ y: contentY, opacity: fade }} className="relative h-full mx-auto max-w-[1320px] px-6 md:pl-20 flex flex-col justify-center">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="eyebrow text-white/70"
          >
            TURNKEY · PEB · RCC · CC ROADS · FABRICATION
          </motion.p>

          <motion.div
            initial={{ width: 0 }}
            animate={{ width: 72 }}
            transition={{ delay: 0.7, duration: 0.5, ease: "easeOut" }}
            className="h-1 bg-amber my-7"
          />

          <h1 className="display-heavy text-white text-[42px] md:text-[72px] leading-[0.98]" data-testid="hero-headline">
            <MaskLine delay={0.5}>Experience Your Growth</MaskLine>
            <MaskLine delay={0.65}>With Vastu Vistar</MaskLine>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.7 }}
            className="mt-7 max-w-xl text-base md:text-lg text-white/75 leading-relaxed"
          >
            A one-stop solution for civil construction — from industrial facilities to commercial
            and residential buildings. Design, sanctioning, development and handover, all under
            one roof.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.7 }}
            className="mt-10 flex flex-col sm:flex-row gap-4"
          >
            <Link
              to="/contact"
              data-testid="hero-quote-btn"
              className="inline-flex items-center justify-center h-[54px] px-8 rounded-full bg-amber text-ink font-sans text-sm font-semibold tracking-wide transition-[background-color,transform] duration-200 hover:bg-amber-dark hover:-translate-y-px"
            >
              Get a Quote
            </Link>
            <Link
              to="/portfolio"
              data-testid="hero-view-portfolio-btn"
              className="inline-flex items-center justify-center h-[54px] px-8 rounded-full border border-white/50 text-white font-sans text-sm font-semibold tracking-wide transition-colors duration-200 hover:bg-white hover:text-navy"
            >
              View Portfolio
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6 }}
          className="absolute bottom-8 left-6 md:left-20 flex flex-col items-center gap-3"
        >
          <span className="eyebrow text-white/60 text-[10px]">SCROLL</span>
          <div className="relative h-12 w-px bg-white/30 overflow-hidden">
            <span className="absolute top-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-white animate-scroll-dot" />
          </div>
        </motion.div>

        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6 }}
          className="absolute bottom-8 right-6 md:right-12 eyebrow text-white/60"
        >
          {COMPANY.promise}
        </motion.span>
      </section>

      {/* STATS TRUST BAR */}
      <section data-testid="stats-bar" className="bg-brand">
        <div className="mx-auto max-w-[1320px] px-6 grid grid-cols-2 lg:grid-cols-4">
          {STATS.map((s, i) => (
            <div
              key={s.label}
              className={`py-10 lg:py-14 px-4 lg:px-10 text-center ${i > 0 ? "lg:border-l lg:border-white/20" : ""} ${i % 2 === 1 ? "max-lg:border-l max-lg:border-white/20" : ""} ${i > 1 ? "max-lg:border-t max-lg:border-white/20" : ""}`}
            >
              <div className="display-heavy text-5xl lg:text-[56px] text-amber leading-none" data-testid={`stat-value-${i}`}>
                {s.text ? s.text : <CountUp value={s.value} suffix={s.suffix} decimals={s.decimals} />}
              </div>
              <div className="eyebrow text-white/75 mt-3">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT US INTRO */}
      <section data-testid="about-intro-section" className="py-[100px] max-md:py-[60px]">
        <div className="mx-auto max-w-[1000px] px-6 text-center">
          <Reveal>
            <h2 className="display-heavy text-brand text-5xl md:text-[76px] leading-none">about us</h2>
            <p className="mt-8 text-[17px] md:text-lg leading-[1.8] text-slate">
              Vastu Vistar is a one-stop solution for every kind of civil construction work — from
              industrial to commercial spaces, we've got you. We are a civil construction firm
              delivering high-quality infrastructure and building solutions across residential,
              commercial, industrial and public sectors, transforming concepts into durable,
              functional and well-built structures.
            </p>
            <Link
              to="/about"
              data-testid="about-intro-link"
              className="link-underline inline-flex items-center gap-2 mt-9 text-brand font-sans text-sm font-semibold"
            >
              More about the firm <ArrowRight size={16} strokeWidth={2} />
            </Link>
          </Reveal>
        </div>
      </section>

      <Marquee />

      {/* SERVICES */}
      <section data-testid="services-section" className="py-[100px] max-md:py-[60px]">
        <div className="mx-auto max-w-[1320px] px-6">
          <Reveal>
            <ServicesCarousel />
          </Reveal>
        </div>
      </section>

      {/* DEVELOPMENT PROCESS — BRAND PANEL */}
      <section data-testid="process-section" className="panel-brand py-[100px] max-md:py-[60px]">
        <div className="mx-auto max-w-[1320px] px-6">
          <Reveal>
            <h2 className="display-heavy text-white text-4xl md:text-[56px] leading-[1.02]">
              Development<br />process
            </h2>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
            {PROCESS_STEPS.map((s, i) => (
              <Reveal key={s.title} delay={i * 0.1}>
                {/* Staircase offsets echo the rising circles in the company profile */}
                <div data-testid={`process-step-${i + 1}`} className={`text-center ${STEP_OFFSET[i]}`}>
                  <div className="mx-auto w-[150px] h-[150px] rounded-full bg-white flex items-center justify-center shadow-[0_10px_30px_rgba(4,20,50,0.18)]">
                    <span className="display-heavy text-navy text-lg px-4 leading-tight">{s.title}</span>
                  </div>
                  <p className="text-sm text-white/80 leading-relaxed mt-6 max-w-[260px] mx-auto">
                    {s.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal>
            <p className="text-right text-white/85 text-xl md:text-2xl mt-16">{COMPANY.promise}</p>
          </Reveal>
        </div>
      </section>

      {/* FEATURED PROJECT STRIP */}
      <section data-testid="featured-project" className="relative h-[520px] max-md:h-auto overflow-hidden">
        <img src={featured.image} alt={featured.name} className="absolute inset-0 w-full h-full object-cover" />
        <div className="relative h-full flex max-md:flex-col">
          <div className="w-full md:w-[40%] panel-navy h-full flex items-center max-md:py-16">
            <div className="px-8 md:px-14">
              <Reveal>
                <p className="eyebrow text-amber">Featured Project</p>
                <h2 className="display-heavy text-white text-[30px] md:text-[36px] leading-[1.1] mt-5">
                  {featured.name}
                </h2>
                <p className="text-white/50 text-sm mt-2">{featured.location} · {featured.year}</p>
                <p className="mt-4 text-white/75 text-[15px] leading-relaxed">{featured.tagline}</p>
                <Link
                  to="/portfolio"
                  data-testid="featured-case-study-link"
                  className="link-underline inline-flex items-center gap-2 mt-7 text-white font-sans text-sm font-semibold"
                >
                  See the portfolio <ArrowRight size={16} strokeWidth={2} />
                </Link>
              </Reveal>
            </div>
          </div>
          <div className="hidden md:block flex-1" />
        </div>
      </section>

      {/* INDUSTRIES */}
      <section data-testid="industries-section" className="py-[100px] max-md:py-[60px] bg-frost">
        <div className="mx-auto max-w-[1320px] px-6">
          <Reveal>
            <Label>Who We Build For</Label>
            <h2 className="display-heavy text-navy text-3xl md:text-[44px] mt-6">
              Built for demanding sites
            </h2>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mt-14">
            {INDUSTRIES.map((ind, i) => {
              const Icon = ICONS[ind.icon];
              return (
                <Reveal key={ind.name} delay={i * 0.08}>
                  <div data-testid={`industry-${ind.name.toLowerCase().replace(/[^a-z]+/g, "-")}`} className="border-t-2 border-amber pt-6">
                    <Icon size={30} strokeWidth={1.5} className="text-amber" />
                    <h3 className="display-heavy text-ink text-lg mt-4">{ind.name}</h3>
                    <p className="text-sm text-slate/80 mt-2 leading-relaxed">{ind.description}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ASSURANCES */}
      <section data-testid="assurances-section" className="py-[100px] max-md:py-[60px] blueprint-light">
        <div className="mx-auto max-w-[1320px] px-6">
          <Reveal>
            <Label>What You Get</Label>
            <h2 className="display-heavy text-navy text-3xl md:text-[44px] mt-6">
              The three commitments we hold to
            </h2>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-6 mt-14">
            {ASSURANCES.map((a, i) => (
              <Reveal key={a.title} delay={i * 0.08}>
                <div data-testid={`assurance-${i}`} className="bg-white h-full p-8 border-l-4 border-amber shadow-[0_4px_20px_rgba(20,26,36,0.08)]">
                  <a.icon size={30} strokeWidth={1.5} className="text-amber" />
                  <h3 className="display-heavy text-ink text-lg mt-5">{a.title}</h3>
                  <p className="text-sm text-slate/80 mt-3 leading-relaxed">{a.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PORTFOLIO PREVIEW */}
      <section data-testid="projects-preview" className="py-[100px] max-md:py-[60px]">
        <div className="mx-auto max-w-[1320px] px-6">
          <Reveal>
            <Label>Selected Projects</Label>
            <h2 className="display-heavy text-navy text-3xl md:text-[44px] mt-6">
              Structures already standing
            </h2>
          </Reveal>
          <div className="grid md:grid-cols-2 gap-6 mt-14">
            <Reveal className="md:row-span-2">
              <ProjectPreviewCard project={preview[0]} tall />
            </Reveal>
            <Reveal delay={0.1}>
              <ProjectPreviewCard project={preview[1]} />
            </Reveal>
            <Reveal delay={0.2}>
              <ProjectPreviewCard project={preview[2]} />
            </Reveal>
          </div>
          <Reveal className="text-center mt-14">
            <Link
              to="/portfolio"
              data-testid="view-all-projects-btn"
              className="inline-flex items-center h-[54px] px-10 rounded-full border-2 border-amber text-ink font-sans text-sm font-semibold tracking-wide transition-colors duration-200 hover:bg-amber"
            >
              View Full Portfolio
            </Link>
          </Reveal>
        </div>
      </section>

      {/* CLIENTS */}
      <section data-testid="clients-section" className="py-[100px] max-md:py-[60px] bg-cloud">
        <div className="mx-auto max-w-[1320px] px-6">
          <Reveal>
            <Label>Our Clients</Label>
            <h2 className="display-heavy text-navy text-3xl md:text-[44px] mt-6">
              Trusted by
            </h2>
            <p className="text-[15px] text-slate/80 mt-4 max-w-[560px] leading-relaxed">
              Manufacturers, developers and infrastructure firms who have handed us a site and
              taken back a finished building.
            </p>
          </Reveal>
        </div>

        <div className="mt-12">
          <ClientMarquee />
        </div>

      </section>

      {/* TESTIMONIALS */}
      <section data-testid="testimonials-section" className="panel-navy py-[100px] max-md:py-[60px]">
        <div className="mx-auto max-w-[900px] px-6 text-center">
          <Reveal>
            <Label dark>Client Voices</Label>
          </Reveal>
          <div className="relative min-h-[260px] mt-10">
            <AnimatePresence mode="wait">
              <motion.blockquote
                key={testimonial}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.35 }}
                data-testid="testimonial-card"
              >
                <span className="display-heavy text-amber text-[80px] leading-none block" aria-hidden="true">&ldquo;</span>
                <p className="text-white text-xl md:text-[23px] leading-relaxed -mt-4">
                  {TESTIMONIALS[testimonial].quote}
                </p>
                <div className="flex justify-center gap-1 mt-6" aria-label="5 star rating">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} size={14} className="text-amber" fill="#F5A623" strokeWidth={0} />
                  ))}
                </div>
                <footer className="mt-4">
                  <div className="font-sans font-semibold text-sm text-white">{TESTIMONIALS[testimonial].name}</div>
                  <div className="eyebrow text-white/50 mt-1">{TESTIMONIALS[testimonial].role}</div>
                </footer>
              </motion.blockquote>
            </AnimatePresence>
          </div>
          <div className="flex justify-center gap-3 mt-8">
            {TESTIMONIALS.map((_, i) => (
              <button
                key={i}
                data-testid={`testimonial-dot-${i}`}
                onClick={() => setTestimonial(i)}
                aria-label={`Testimonial ${i + 1}`}
                className={`h-[3px] transition-all duration-300 ${i === testimonial ? "w-8 bg-amber" : "w-4 bg-white/30"}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* LEAD CAPTURE */}
      <section data-testid="lead-capture-section" className="py-[100px] max-md:py-[60px] bg-cloud">
        <div className="mx-auto max-w-[1320px] px-6 grid lg:grid-cols-2 gap-16">
          <Reveal>
            <Label>Start a Project</Label>
            <h2 className="display-heavy text-navy text-3xl md:text-[46px] leading-[1.06] mt-6">
              Tell us about your site.
            </h2>
            <p className="mt-6 text-[17px] leading-[1.75] text-slate max-w-md">
              Share the location, the built-up area and the timeline you're working to. We'll come
              back with a scope and an indicative budget within 24 hours.
            </p>
            <ul className="mt-9 space-y-4">
              {[
                "Design, sanctioning and execution under one roof",
                "Fixed scope, tracked schedule, transparent billing",
                "In-house crews for civil, fabrication and finishing",
              ].map((t) => (
                <li key={t} className="flex items-center gap-3 text-[15px] text-ink">
                  <Check size={18} strokeWidth={2.5} className="text-amber shrink-0" />
                  {t}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="bg-white p-8 md:p-10 shadow-[0_4px_24px_rgba(6,27,58,0.09)]">
              <EnquiryForm variant="home" />
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}

function ProjectPreviewCard({ project, tall = false }) {
  return (
    <Link
      to="/portfolio"
      data-testid={`project-card-${project.slug}`}
      className="group relative block overflow-hidden h-full"
    >
      <img
        src={project.image}
        alt={project.name}
        className={`w-full object-cover transition-transform duration-300 ease-out group-hover:scale-[1.04] ${tall ? "aspect-[3/4] md:h-full md:aspect-auto" : "aspect-[3/2]"}`}
      />
      <div className="absolute inset-0 bg-brand/0 group-hover:bg-brand/85 transition-colors duration-300 flex flex-col items-start justify-end p-8 opacity-0 group-hover:opacity-100">
        <span className="inline-block bg-white text-brand eyebrow px-3 py-1.5">{project.category}</span>
        <h3 className="display-heavy text-lg text-white mt-3">{project.name}</h3>
        <p className="text-white/80 text-sm">{project.location}</p>
        <span className="inline-flex items-center gap-2 mt-3 text-white text-sm font-semibold">
          View Project <ArrowRight size={15} strokeWidth={2} />
        </span>
      </div>
    </Link>
  );
}
