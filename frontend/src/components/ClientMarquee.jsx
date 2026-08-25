import { CLIENT_LOGOS } from "@/data/content";

/**
 * One continuous line of client logos scrolling horizontally, forever.
 *
 * The row is rendered twice; `animate-marquee` translates the track by -50%,
 * so the second copy lands exactly where the first started and the loop is
 * seamless. Hovering pauses it, and it holds still under reduced-motion.
 */
export default function ClientMarquee() {
  return (
    <div
      data-testid="client-marquee"
      className="group overflow-hidden border-y border-mist bg-frost py-9"
    >
      <div className="flex w-max animate-marquee group-hover:[animation-play-state:paused] motion-reduce:animate-none">
        {[0, 1].map((copy) => (
          <div key={copy} className="flex shrink-0 items-center" aria-hidden={copy === 1}>
            {CLIENT_LOGOS.map((logo) => (
              <img
                key={`${copy}-${logo.src}`}
                src={logo.src}
                alt={copy === 0 ? logo.name : ""}
                loading="lazy"
                className="h-14 md:h-16 w-auto object-contain mx-10 md:mx-14 shrink-0"
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
