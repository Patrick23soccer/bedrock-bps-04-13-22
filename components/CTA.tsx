export function CTA() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24 text-center">
      <h2 className="font-display text-4xl md:text-6xl font-semibold leading-tight">
        {"Questions before you commit?"}
      </h2>
      <p className="mx-auto mt-5 max-w-xl text-[color:oklch(from_var(--surface-contrast)_l_c_h_/_0.75)]">
        {"A five-minute call can clarify what a report covers and whether an inspection fits your timeline."}
      </p>
      <a
        href="#contact"
        className="mt-10 inline-flex items-center rounded-full bg-[var(--surface-contrast)] px-8 py-4 font-body text-sm font-medium text-[var(--surface)] transition hover:opacity-90"
      >
        {"Start the call"}
      </a>
    </section>
  );
}
