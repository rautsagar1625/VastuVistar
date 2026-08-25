import { useCallback, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import useEmblaCarousel from "embla-carousel-react";
import {
  KeyRound, Factory, Building2, Route, Building, Wrench, ArrowRight, ArrowLeft, Check,
} from "lucide-react";
import Label from "@/components/Label";
import { SERVICES } from "@/data/content";

const ICONS = { KeyRound, Factory, Building2, Route, Building, Wrench };
const AUTOPLAY_MS = 4200;

export default function ServicesCarousel() {
  const [emblaRef, embla] = useEmblaCarousel({
    align: "start",
    loop: true,
    duration: 32,          // slower, smoother glide than the default snap
    containScroll: "trimSnaps",
  });
  const [selected, setSelected] = useState(0);
  const [snaps, setSnaps] = useState([]);
  const paused = useRef(false);

  const onSelect = useCallback(() => {
    if (embla) setSelected(embla.selectedScrollSnap());
  }, [embla]);

  useEffect(() => {
    if (!embla) return undefined;
    setSnaps(embla.scrollSnapList());
    onSelect();
    embla.on("select", onSelect).on("reInit", onSelect);
    return () => { embla.off("select", onSelect).off("reInit", onSelect); };
  }, [embla, onSelect]);

  /* Auto-advance. Pauses on hover, on focus, while dragging, and when the tab
     is hidden; disabled entirely for reduced-motion users. */
  useEffect(() => {
    if (!embla) return undefined;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return undefined;

    const hold = () => { paused.current = true; };
    const release = () => { paused.current = false; };
    embla.on("pointerDown", hold).on("pointerUp", release);

    const id = setInterval(() => {
      if (!paused.current && !document.hidden) embla.scrollNext();
    }, AUTOPLAY_MS);

    return () => {
      clearInterval(id);
      embla.off("pointerDown", hold).off("pointerUp", release);
    };
  }, [embla]);

  return (
    <div
      data-testid="services-carousel"
      onMouseEnter={() => { paused.current = true; }}
      onMouseLeave={() => { paused.current = false; }}
      onFocusCapture={() => { paused.current = true; }}
      onBlurCapture={() => { paused.current = false; }}
    >
      {/* Heading left, carousel controls right — the right column does a job
          instead of holding a floating paragraph */}
      <div className="flex flex-wrap items-end justify-between gap-y-8 gap-x-12 mb-12">
        <div className="max-w-[620px]">
          <Label>What We Build</Label>
          <h2 className="display-heavy text-ink text-[30px] md:text-[38px] leading-[1.1] mt-5">
            A comprehensive range of<br className="hidden sm:block" /> civil development services
          </h2>
          <p className="text-[16px] leading-[1.75] text-slate/90 mt-5 max-w-[52ch]">
            Six verticals, one accountable team — the same firm
            <span className="text-ink font-semibold"> designs it, sanctions it, builds it and
            hands it over.</span>
          </p>
        </div>

        <div className="flex items-center gap-6 shrink-0">
          <span className="display-heavy text-[15px] tabular-nums text-slate/50">
            <span className="text-amber">{String(selected + 1).padStart(2, "0")}</span>
            <span className="mx-1.5">/</span>
            {String(snaps.length || SERVICES.length).padStart(2, "0")}
          </span>
          <div className="flex gap-3">
            <button
              type="button"
              aria-label="Previous services"
              data-testid="services-prev"
              onClick={() => embla && embla.scrollPrev()}
              className="w-12 h-12 rounded-full border-2 border-mist text-ink flex items-center justify-center transition-colors duration-200 hover:border-amber hover:bg-amber hover:text-ink"
            >
              <ArrowLeft size={19} strokeWidth={2} />
            </button>
            <button
              type="button"
              aria-label="Next services"
              data-testid="services-next"
              onClick={() => embla && embla.scrollNext()}
              className="w-12 h-12 rounded-full border-2 border-mist text-ink flex items-center justify-center transition-colors duration-200 hover:border-amber hover:bg-amber hover:text-ink"
            >
              <ArrowRight size={19} strokeWidth={2} />
            </button>
          </div>
        </div>
      </div>

      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex -ml-6">
          {SERVICES.map((s, i) => {
            const Icon = ICONS[s.icon];
            return (
              <div
                key={s.id}
                id={s.id}
                className="pl-6 shrink-0 grow-0 basis-full sm:basis-1/2 lg:basis-1/3 scroll-mt-[100px]"
              >
                <article
                  data-testid={`service-card-${s.id}`}
                  className="group h-full flex flex-col bg-white border border-mist transition-[border-color,box-shadow,transform] duration-300
                             hover:border-amber hover:shadow-[0_16px_40px_rgba(20,26,36,0.12)] hover:-translate-y-1"
                >
                  <div className="relative overflow-hidden shrink-0">
                    <img
                      src={s.cardBg}
                      alt={s.name}
                      loading="lazy"
                      className="w-full aspect-[16/10] object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/20 to-transparent" />
                    <span className="absolute bottom-5 left-6 inline-flex items-center justify-center w-12 h-12 bg-amber text-ink shadow-[0_6px_18px_rgba(20,26,36,0.28)]">
                      <Icon size={23} strokeWidth={1.75} />
                    </span>
                    <span className="absolute top-4 right-5 display-heavy text-white/35 text-[28px] tabular-nums">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <div className="px-7 pt-7 pb-7 flex flex-col flex-1">
                    <h3 className="display-heavy text-ink text-[20px] leading-[1.2] min-h-[48px]">{s.name}</h3>
                    <p className="text-[15px] text-slate/90 mt-2.5 leading-[1.6]">{s.short}</p>

                    <ul className="mt-6 space-y-2.5 border-t border-mist pt-6">
                      {s.features.slice(0, 3).map((f) => (
                        <li key={f} className="text-[13.5px] leading-[1.5] text-slate flex gap-2.5">
                          <Check size={14} strokeWidth={3} className="text-amber shrink-0 mt-[3px]" />
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>

                    <Link
                      to="/contact"
                      data-testid={`enquire-${s.id}`}
                      className="inline-flex items-center gap-2 mt-auto pt-7 text-brand text-[13px] font-bold tracking-wide uppercase self-start
                                 transition-colors duration-200 hover:text-amber-dark"
                    >
                      Enquire
                      <ArrowRight size={14} strokeWidth={2.5} className="transition-transform duration-200 group-hover:translate-x-1" />
                    </Link>
                  </div>
                </article>
              </div>
            );
          })}
        </div>
      </div>

      <div className="flex items-center justify-between gap-6 mt-10">
        <div className="flex gap-2" role="tablist" aria-label="Service slides">
          {snaps.map((_, i) => (
            <button
              key={i}
              type="button"
              role="tab"
              aria-selected={i === selected}
              aria-label={`Go to slide ${i + 1}`}
              data-testid={`services-dot-${i}`}
              onClick={() => embla && embla.scrollTo(i)}
              className={`h-[3px] transition-all duration-300 ${i === selected ? "w-10 bg-amber" : "w-5 bg-mist hover:bg-slate/40"}`}
            />
          ))}
        </div>
        <p className="text-slate/60 text-[13px]">And more besides — tell us what you need built.</p>
      </div>
    </div>
  );
}
