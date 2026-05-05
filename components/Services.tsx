/**
 * Services — 4-card grid. Brand-specific service titles + body get authored
 * by Claude at scaffold time and substituted into the [{\"title\":\"Pre-Purchase Inspection\",\"body\":\"Full structural, mechanical, and envelope assessment with a photo-referenced report delivered within 24 hours of walkthrough.\"},{\"title\":\"Builder Warranty Inspection\",\"body\":\"Identifies deficiencies before your Tarion deadline closes — documented findings you can submit directly to your builder.\"},{\"title\":\"Maintenance Audit\",\"body\":\"Annual or pre-listing condition review covering roofing, HVAC, drainage, and envelope wear for long-term cost planning.\"},{\"title\":\"Thermal Imaging\",\"body\":\"Infrared scanning locates hidden moisture intrusion, insulation gaps, and electrical hot spots not visible to the naked eye.\"}] slot.
 */
const SERVICES = [
  {
    title: "Pre-Purchase Inspection",
    body: "Full structural, mechanical, and envelope assessment with a photo-referenced report delivered within 24 hours of walkthrough.",
  },
  {
    title: "Builder Warranty Inspection",
    body: "Identifies deficiencies before your Tarion deadline closes — documented findings you can submit directly to your builder.",
  },
  {
    title: "Maintenance Audit",
    body: "Annual or pre-listing condition review covering roofing, HVAC, drainage, and envelope wear for long-term cost planning.",
  },
  {
    title: "Thermal Imaging",
    body: "Infrared scanning locates hidden moisture intrusion, insulation gaps, and electrical hot spots not visible to the naked eye.",
  },
];

export function Services() {
  return (
    <section id="services" className="mx-auto max-w-6xl px-6 py-24">
      <p className="font-body text-sm uppercase tracking-[0.18em] text-[color:oklch(from_var(--surface-contrast)_l_c_h_/_0.6)]">
        Services
      </p>
      <h2 className="mt-3 font-display text-4xl md:text-5xl font-semibold leading-tight">
        {"What we inspect and why it matters."}
      </h2>
      <div className="mt-14 grid gap-6 md:grid-cols-2">
        {SERVICES.map((s, i) => (
          <article
            key={i}
            className="rounded-xl border border-[color:oklch(from_var(--surface-contrast)_l_c_h_/_0.1)] bg-[color:oklch(from_var(--surface-contrast)_l_c_h_/_0.02)] p-8"
          >
            <h3 className="font-display text-2xl font-semibold">{s.title}</h3>
            <p className="mt-3 text-[color:oklch(from_var(--surface-contrast)_l_c_h_/_0.75)]">
              {s.body}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
