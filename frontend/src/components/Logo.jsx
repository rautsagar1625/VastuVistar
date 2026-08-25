/**
 * Company logo.
 *
 * Two variants of the supplied artwork, both with the strapline cropped off —
 * it is illegible at header size and is set as live text in the footer instead:
 *   - default  : original charcoal lettering, for light surfaces
 *   - `light`  : knocked out to white, for charcoal/blue surfaces
 */
export default function Logo({ light = false, className = "", height = 54 }) {
  const base = light ? "vv-lockup-light" : "vv-lockup";
  return (
    <span className={`inline-flex items-center ${className}`}>
      <img
        src={`/assets/${base}.png`}
        srcSet={`/assets/${base}.png 1x, /assets/${base}@2x.png 2x`}
        alt="Vastu Vistar LLP — The Integrated Industrials"
        style={{ height }}
        width={412}
        height={214}
        className="w-auto object-contain"
      />
    </span>
  );
}
