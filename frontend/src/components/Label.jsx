export default function Label({ children, dark = false }) {
  return (
    <div className="flex items-center gap-3" data-testid="section-label">
      <span
        className="block h-[10px] w-[10px] rounded-full bg-amber"
        aria-hidden="true"
      />
      <span className={`eyebrow ${dark ? "text-white/80" : "text-brand"}`}>{children}</span>
    </div>
  );
}
