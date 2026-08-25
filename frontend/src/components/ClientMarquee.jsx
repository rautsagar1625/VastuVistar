import { CLIENT_LOGOS, CLIENTS } from "@/data/content";

/**
 * Two counter-running lines: client logos drifting left, client names
 * drifting right.
 *
 * Each row is rendered twice; `animate-marquee` translates the track by -50%
 * so the second copy lands exactly where the first began and the loop is
 * seamless. `animate-marquee-reverse` does the same journey backwards.
 * Hovering pauses both, and they hold still under reduced-motion.
 */
/* Four copies, translated -50% — so the animation travels exactly two copies
   and lands on an identical pair. Two copies rather than one because a single
   pass of seven logos is narrower than a wide desktop, which left a visible
   gap at the end of each cycle before the row wrapped around. */
const COPIES = [0, 1, 2, 3];

function Track({ children, reverse = false }) {
  return (
    <div
      className={`flex w-max ${
        reverse ? "animate-marquee-reverse" : "animate-marquee"
      } group-hover:[animation-play-state:paused] motion-reduce:animate-none`}
    >
      {COPIES.map((copy) => (
        <div key={copy} className="flex shrink-0 items-center" aria-hidden={copy !== 0}>
          {children(copy)}
        </div>
      ))}
    </div>
  );
}

export default function ClientMarquee() {
  return (
    <div data-testid="client-marquee" className="group">
      {/* Logos — drifting left */}
      <div className="overflow-hidden border-y border-mist bg-frost py-9">
        <Track>
          {(copy) =>
            CLIENT_LOGOS.map((logo) => (
              <img
                key={`${copy}-${logo.src}`}
                src={logo.src}
                alt={copy === 0 ? logo.name : ""}
                loading="lazy"
                className="h-14 md:h-16 w-auto object-contain mx-10 md:mx-14 shrink-0"
              />
            ))
          }
        </Track>
      </div>

      {/* Names — drifting right */}
      <div className="overflow-hidden border-b border-mist bg-cloud py-5" data-testid="client-name-marquee">
        <Track reverse>
          {(copy) =>
            CLIENTS.map((name) => (
              <span key={`${copy}-${name}`} className="flex items-center shrink-0">
                <span className="display-heavy text-ink/80 text-[15px] md:text-lg whitespace-nowrap px-7">
                  {name}
                </span>
                <span className="text-amber text-lg" aria-hidden="true">
                  •
                </span>
              </span>
            ))
          }
        </Track>
      </div>
    </div>
  );
}
