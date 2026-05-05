/**
 * Process — 4-step ladder. Brand-specific copy substituted at scaffold time.
 */
const STEPS = [
  { n: "01", title: "Book", body: "Choose a date online or by phone. We confirm within one business day and send prep instructions for owners." },
  { n: "02", title: "On-site", body: "A licensed RHI walks every accessible area — roof, crawlspace, attic, mechanicals — taking calibrated measurements and photos." },
  { n: "03", title: "Report", body: "A structured, plain-language report with photos and priority rankings lands in your inbox within 24 hours of inspection." },
  { n: "04", title: "Debrief", body: "We walk through findings by phone so you understand every item before negotiation or possession decisions are made." },
];

export function Process() {
  return (
    <section id="process" className="bg-[color:oklch(from_var(--surface-contrast)_l_c_h_/_0.03)] py-24">
      <div className="mx-auto max-w-6xl px-6">
        <p className="font-body text-sm uppercase tracking-[0.18em] text-[color:oklch(from_var(--surface-contrast)_l_c_h_/_0.6)]">
          How we work
        </p>
        <h2 className="mt-3 font-display text-4xl md:text-5xl font-semibold leading-tight">
          {"How an inspection works."}
        </h2>
        <ol className="mt-14 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((s) => (
            <li key={s.n} className="border-t border-[color:oklch(from_var(--surface-contrast)_l_c_h_/_0.15)] pt-6">
              <span className="font-body text-xs tracking-[0.15em] text-[color:var(--accent-primary)]">
                {s.n}
              </span>
              <h3 className="mt-3 font-display text-xl font-semibold">{s.title}</h3>
              <p className="mt-3 text-sm text-[color:oklch(from_var(--surface-contrast)_l_c_h_/_0.7)]">
                {s.body}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
