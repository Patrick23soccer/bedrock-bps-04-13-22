export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-[color:oklch(from_var(--surface-contrast)_l_c_h_/_0.1)] py-14">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 md:grid-cols-3">
        <div>
          <p className="font-display text-xl font-semibold">{"Bedrock Property Services"}</p>
          <p className="mt-3 text-sm text-[color:oklch(from_var(--surface-contrast)_l_c_h_/_0.7)]">
            {"Bedrock Property Services — Diagnostic-grade clarity, Hamilton, ON."}
          </p>
        </div>
        <div className="text-sm">
          <p className="font-medium">Visit</p>
          <p className="mt-2 text-[color:oklch(from_var(--surface-contrast)_l_c_h_/_0.75)]">
            {"55 King St E"}
            <br />
            {"Hamilton"}, {"ON"} {"L8N 1A6"}
          </p>
        </div>
        <div className="text-sm">
          <p className="font-medium">Contact</p>
          <p className="mt-2 text-[color:oklch(from_var(--surface-contrast)_l_c_h_/_0.75)]">
            <a href={`tel:${"+1-555-0142"}`} className="hover:underline">
              {"+1-555-0142"}
            </a>
            <br />
            <a href={`mailto:${"hello@bedrockbps.example"}`} className="hover:underline">
              {"hello@bedrockbps.example"}
            </a>
          </p>
        </div>
      </div>
      <div className="mx-auto mt-10 flex max-w-6xl flex-wrap items-center justify-between gap-4 px-6 text-xs text-[color:oklch(from_var(--surface-contrast)_l_c_h_/_0.6)]">
        <p>
          &copy; {year} {"Bedrock Property Services"}. All rights reserved.
        </p>
        <p className="flex gap-5">
          <a href="/privacy" className="hover:underline">Privacy</a>
          <a href="/terms" className="hover:underline">Terms</a>
        </p>
      </div>
    </footer>
  );
}
