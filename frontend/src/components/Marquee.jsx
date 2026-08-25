const ITEMS = [
  "TURNKEY PROJECTS",
  "PEB BUILDINGS",
  "RCC CONSTRUCTION",
  "CC ROADS",
  "LAND DEVELOPMENT",
  "FABRICATION",
];

export default function Marquee({ dark = false }) {
  const row = [...ITEMS, ...ITEMS, ...ITEMS];
  return (
    <div
      data-testid="editorial-marquee"
      className={`overflow-hidden py-7 border-y ${dark ? "border-white/10 panel-navy" : "border-mist bg-cloud"}`}
      aria-hidden="true"
    >
      <div className="flex w-max animate-marquee">
        {[0, 1].map((half) => (
          <div key={half} className="flex shrink-0">
            {row.map((item, i) => (
              <span key={`${half}-${i}`} className="flex items-center">
                <span
                  className={`display-heavy text-2xl md:text-4xl px-8 whitespace-nowrap ${
                    dark ? "text-white/15" : "text-navy/15"
                  }`}
                >
                  {item}
                </span>
                <span className="text-amber text-2xl">•</span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
