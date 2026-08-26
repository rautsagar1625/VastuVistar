import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Check, Eye, Target, PencilRuler, Stamp, HardHat, KeySquare } from "lucide-react";
import Label from "@/components/Label";
import Reveal from "@/components/Reveal";
import Marquee from "@/components/Marquee";
import { IMG, VALUES, VISION, MISSION, SERVICES, PROCESS_STEPS, LEADERSHIP, COMPANY } from "@/data/content";

const STEP_ICONS = [PencilRuler, Stamp, HardHat, KeySquare];

/** What actually happens inside each of the four stages. */
const STEP_DETAIL = [
  [
    "Site study, feasibility and area planning",
    "Architectural and structural drawings",
    "Budget estimation against a measured BOQ",
  ],
  [
    "Drawing submissions and revisions",
    "Statutory approvals and NOCs",
    "Liaison with local authorities on your behalf",
  ],
  [
    "Earthwork, foundations, structure and finishing",
    "Supervised quality checks at every stage",
    "Weekly progress reporting against the programme",
  ],
  [
    "Snagging and joint inspection",
    "Testing, commissioning and cleaning",
    "As-built documentation and formal handover",
  ],
];

export default function About() {
  return (
    <main data-testid="about-page">
      {/* SPLIT HERO */}
      <section data-testid="about-hero" className="min-h-[480px] flex max-lg:flex-col pt-[78px]">
        <div className="lg:w-[55%] relative overflow-hidden min-h-[320px]">
          <motion.img
            src={IMG.site}
            alt="A Vastu Vistar site under construction"
            initial={{ scale: 1.12 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
        <div className="lg:w-[45%] panel-brand flex items-center">
          <div className="px-8 lg:px-16 py-16">
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="eyebrow text-white/70"
            >
              Who We Are
            </motion.p>
            <div className="overflow-hidden mt-5">
              <motion.h1
                initial={{ y: "110%" }}
                animate={{ y: 0 }}
                transition={{ delay: 0.15, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="display-heavy text-white text-[38px] md:text-[52px] leading-[1.02]"
              >
                One stop. Every kind of civil work.
              </motion.h1>
            </div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="mt-6 text-white/85 leading-[1.75]"
            >
              {COMPANY.name} — a civil construction firm delivering infrastructure and building
              solutions across residential, commercial, industrial and public sectors.
            </motion.p>
          </div>
        </div>
      </section>

      {/* STORY */}
      <section data-testid="about-story" className="py-[100px] max-md:py-[60px]">
        <div className="mx-auto max-w-[1320px] px-6 grid lg:grid-cols-2 gap-16 items-start">
          <Reveal>
            <Label>Our Story</Label>
            <h2 className="display-heavy text-ink text-3xl md:text-[42px] leading-[1.08] mt-6">
              Concepts turned into structures that hold up.
            </h2>
            <div className="mt-7 space-y-5 text-[17px] leading-[1.75] text-slate">
              <p>
                <strong className="text-ink font-semibold">Vastu Vistar</strong> is built on a
                simple yet powerful foundation — to make the entire journey of building a space
                seamless, transparent and hassle-free for our clients.
              </p>
              <p>
                From{" "}
                <strong className="text-ink font-semibold">
                  sanctioning and approvals to architectural drawings and complete construction
                </strong>
                , we bring every essential service together under one roof. Our approach is
                centred around understanding the client's vision, transforming it into practical
                designs, and executing the project with quality and precision.
              </p>
              <p>
                With Vastu Vistar, clients get{" "}
                <strong className="text-ink font-semibold">
                  one trusted partner from the first drawing to the final structure
                </strong>{" "}
                — making the process simpler, more coordinated and more reliable.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.15} className="relative">
            <video
              autoPlay
              muted
              loop
              playsInline
              preload="none"
              poster="/assets/engineers-blueprint-poster.jpg"
              aria-label="Engineers reviewing drawings on site"
              className="w-full aspect-[4/3] object-cover"
            >
              <source src="/assets/engineers-blueprint.mp4" type="video/mp4" />
            </video>
            <div className="absolute -bottom-8 -left-8 bg-amber text-ink p-8 hidden md:block max-w-xs">
              <p className="display-heavy text-xl leading-snug">
                Designed, sanctioned, developed and handed over — all under one roof.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* SERVICE RANGE */}
      <section data-testid="about-services" className="py-[90px] max-md:py-[60px] blueprint-light">
        <div className="mx-auto max-w-[1320px] px-6">
          <Reveal>
            <Label>What We Specialise In</Label>
            <h2 className="display-heavy text-ink text-3xl md:text-[42px] mt-6">
              Seven verticals, one team
            </h2>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-mist mt-12" data-testid="about-service-grid">
            {SERVICES.map((s, i) => (
              <Reveal key={s.id} delay={i * 0.06}>
                <Link
                  to={`/#${s.id}`}
                  className="group bg-white h-full p-8 flex flex-col justify-between hover:bg-amber transition-colors duration-300"
                  data-testid={`about-service-${s.id}`}
                >
                  <div>
                    <span className="display-heavy text-3xl text-amber group-hover:text-ink/40 transition-colors duration-300">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="display-heavy text-ink text-lg mt-4 transition-colors duration-300">{s.name}</h3>
                    <p className="text-sm text-slate/80 mt-2 leading-relaxed group-hover:text-ink/80 transition-colors duration-300">{s.short}</p>
                  </div>
                  <span className="inline-flex items-center gap-2 mt-6 text-brand text-[13px] font-semibold group-hover:text-ink transition-colors duration-300">
                    Details <ArrowRight size={14} strokeWidth={2} />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* VISION & MISSION */}
      <section data-testid="vision-mission-section" className="grid lg:grid-cols-2">
        <div className="bg-cloud px-6 md:px-14 py-[90px] flex items-center">
          <Reveal className="max-w-lg mx-auto lg:ml-auto lg:mr-0">
            <span className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-brand text-white">
              <Eye size={26} strokeWidth={1.75} />
            </span>
            <h2 className="display-heavy text-brand text-4xl md:text-[52px] mt-8">vision</h2>
            <p className="mt-6 text-[16px] leading-[1.8] text-slate">{VISION}</p>
          </Reveal>
        </div>
        <div className="panel-brand px-6 md:px-14 py-[90px] flex items-center">
          <Reveal className="max-w-lg mx-auto lg:mr-auto lg:ml-0">
            <span className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-white text-brand">
              <Target size={26} strokeWidth={1.75} />
            </span>
            <h2 className="display-heavy text-white text-4xl md:text-[52px] mt-8">mission</h2>
            <ul className="mt-7 space-y-4">
              {MISSION.map((m) => (
                <li key={m} className="flex items-start gap-3 text-white/90 text-[16px] leading-relaxed">
                  <Check size={19} strokeWidth={2.5} className="text-white shrink-0 mt-1" />
                  {m}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* TURNKEY MODEL */}
      <section data-testid="turnkey-section" className="py-[100px] max-md:py-[60px] blueprint-light">
        <div className="mx-auto max-w-[1320px] px-6">
          <Reveal>
            <Label>The Turnkey Model</Label>
            <div className="grid lg:grid-cols-12 gap-8 items-end mt-6">
              <h2 className="lg:col-span-6 display-heavy text-ink text-3xl md:text-[44px] leading-[1.06]">
                One partner from the first drawing to the last snag.
              </h2>
              <p className="lg:col-span-6 text-[17px] leading-[1.75] text-slate">
                Most construction problems are coordination problems — the architect waiting on the
                structural consultant, the contractor waiting on sanction, the client caught between
                all three. We remove those gaps by carrying the whole chain ourselves.
              </p>
            </div>
          </Reveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-14">
            {PROCESS_STEPS.map((s, i) => {
              const Icon = STEP_ICONS[i];
              return (
                <Reveal key={s.title} delay={i * 0.08}>
                  <div data-testid={`process-step-${i + 1}`} className="bg-white h-full p-8 border-t-4 border-amber shadow-[0_4px_20px_rgba(20,26,36,0.08)]">
                    <div className="flex items-center justify-between">
                      <Icon size={28} strokeWidth={1.5} className="text-amber" />
                      <span className="display-heavy text-4xl text-amber/60">{String(i + 1).padStart(2, "0")}</span>
                    </div>
                    <h3 className="display-heavy text-ink text-lg mt-6">{s.title}</h3>
                    <p className="text-sm text-slate/80 mt-3 leading-relaxed">{s.description}</p>
                    <ul className="mt-5 space-y-2 border-t border-mist pt-5">
                      {STEP_DETAIL[i].map((d) => (
                        <li key={d} className="text-[13px] text-slate flex gap-2">
                          <span className="text-amber shrink-0">•</span>
                          {d}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              );
            })}
          </div>
          <Reveal>
            <p className="display-heavy text-ink/70 text-2xl md:text-3xl text-right mt-14">{COMPANY.promise}</p>
          </Reveal>
        </div>
      </section>

      {/* VALUES */}
      <section data-testid="about-values" className="py-[100px] max-md:py-[60px]">
        <div className="mx-auto max-w-[1320px] px-6">
          <Reveal>
            <Label>Core Values</Label>
            <h2 className="display-heavy text-ink text-3xl md:text-[42px] mt-6 max-w-2xl leading-[1.08]">
              What guides our actions and decisions
            </h2>
            <p className="mt-5 text-slate max-w-2xl leading-relaxed">
              Our values shape our culture and the relationships we build with clients, partners
              and our own team.
            </p>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mt-14">
            {VALUES.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.08}>
                <div data-testid={`about-value-${v.title.toLowerCase()}`} className="border-l-4 border-amber pl-6">
                  <h3 className="display-heavy text-lg text-ink">{v.title}</h3>
                  <p className="text-sm text-slate/80 mt-3 leading-relaxed">{v.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Marquee dark />

      {/* LEADERSHIP */}
      <section data-testid="leadership-section" className="py-[100px] max-md:py-[60px] bg-cloud">
        <div className="mx-auto max-w-[1320px] px-6 grid lg:grid-cols-12 gap-x-16 gap-y-12">
          {/* Copy column sits beside the portraits, not opposite them */}
          <div className="lg:col-span-4">
            <Reveal>
              <Label>Leadership</Label>
              <h2 className="display-heavy text-ink text-[30px] md:text-[34px] leading-[1.12] mt-6 text-balance">
                The people behind the firm
              </h2>
              <span className="block h-1 w-14 bg-amber mt-6" aria-hidden="true" />
              <p className="text-[16px] leading-[1.8] text-slate mt-6">
                Vastu Vistar is run by its founders. The people you meet at the first site visit
                are the ones accountable at handover — not a sales team handing you to someone else.
              </p>
            </Reveal>
          </div>

          <div className="lg:col-span-8 grid sm:grid-cols-2 gap-6">
            {LEADERSHIP.map((person, i) => (
              <Reveal key={person.name} delay={i * 0.1}>
                <figure
                  data-testid={`founder-${person.name.toLowerCase().replace(/[^a-z]+/g, "-")}`}
                  className="group bg-white shadow-[0_4px_22px_rgba(20,26,36,0.09)] h-full flex flex-col"
                >
                  <div className="relative overflow-hidden bg-navy">
                    <img
                      src={person.image}
                      alt={person.name}
                      loading="lazy"
                      style={{
                        objectPosition: person.focus,
                        transform: `scale(${person.zoom || 1})`,
                        transformOrigin: person.focus,
                      }}
                      className="w-full aspect-[3/4] object-cover"
                    />
                  </div>
                  <figcaption className="px-6 py-6 border-t-[3px] border-amber">
                    <h3 className="display-heavy text-ink text-[19px] leading-tight">{person.name}</h3>
                    <p className="eyebrow text-brand mt-2">{person.role}</p>
                    <p className="text-[14px] text-slate/85 mt-3.5 leading-[1.6]">{person.note}</p>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* COMMITMENT — light, so the dark footer reads as its own band */}
      <section data-testid="commitment-section" className="blueprint-light py-[90px] max-md:py-[60px]">
        <div className="mx-auto max-w-[1320px] px-6 grid lg:grid-cols-2 gap-16 items-center">
          <Reveal>
            <Label>Why Clients Stay</Label>
            <h2 className="display-heavy text-ink text-3xl md:text-[40px] leading-[1.08] mt-6">
              Advanced techniques. Quality materials. Skilled hands.
            </h2>
            <p className="mt-6 text-slate leading-[1.75] max-w-[54ch]">
              Every project is executed with modern construction methods, materials that meet
              specification, and crews who have done the work before. That combination is why our
              clients come back with their next site — and why they refer us to theirs.
            </p>
            <Link
              to="/contact"
              data-testid="about-contact-link"
              className="group inline-flex items-center gap-2 h-12 px-7 mt-8 rounded-full bg-amber text-ink font-sans text-[13px] font-bold tracking-wide transition-colors duration-200 hover:bg-amber-dark"
            >
              Work with our team
              <ArrowRight size={15} strokeWidth={2.5} className="transition-transform duration-200 group-hover:translate-x-0.5" />
            </Link>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="grid grid-cols-2 gap-5" data-testid="commitment-grid">
              {[
                ["Excellence", "Quality assured at every stage"],
                ["Safety", "Protocols held on every site"],
                ["Timeliness", "Schedules agreed and tracked"],
                ["Transparency", "Billing you can reconcile"],
              ].map(([t, d]) => (
                <div key={t} className="bg-white border-t-[3px] border-amber p-7 shadow-[0_4px_18px_rgba(20,26,36,0.07)]">
                  <h3 className="display-heavy text-ink text-lg">{t}</h3>
                  <p className="text-slate/80 text-sm mt-2 leading-relaxed">{d}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
