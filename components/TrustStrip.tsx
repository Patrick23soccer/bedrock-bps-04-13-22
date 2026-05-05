/**
 * Trust strip — logos / certifications / press marks.
 * Replace InterNACHI Certified / 5/5 on Google / Fully insured / 20+ years on tools with brand-specific items at scaffold time.
 */
export function TrustStrip() {
  const items = [
    "InterNACHI Certified",
    "5/5 on Google",
    "Fully insured",
    "20+ years on tools",
  ];
  return (
    <section className="border-y border-[color:oklch(from_var(--surface-contrast)_l_c_h_/_0.08)] py-10">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-6 px-6">
        {items.map((item, i) => (
          <span
            key={i}
            className="font-body text-xs uppercase tracking-[0.2em] text-[color:oklch(from_var(--surface-contrast)_l_c_h_/_0.5)]"
          >
            {item}
          </span>
        ))}
      </div>
    </section>
  );
}
