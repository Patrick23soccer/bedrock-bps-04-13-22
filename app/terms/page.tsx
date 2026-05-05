export const metadata = {
  title: "Terms of Service",
};

export default function TermsPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <div className="mb-8 rounded-md border border-amber-300 bg-amber-50 p-4 text-sm text-amber-900">
        <strong>Counsel-review draft.</strong> This page is a starter template.
        Replace it with terms approved by your legal counsel before launch.
      </div>
      <h1 className="font-display text-4xl font-semibold mb-6">Terms of Service</h1>
      <p className="mb-4">
        By using the {"Bedrock Property Services"} website you agree to these terms. Content is
        provided as-is without warranty. Service descriptions are not contractual
        offers — engagements begin only after a signed agreement.
      </p>
      <h2 className="font-display text-2xl font-semibold mt-8 mb-3">Liability</h2>
      <p className="mb-4">
        To the maximum extent permitted by law, {"Bedrock Property Services"} is not liable for
        indirect or consequential damages arising from use of this site.
      </p>
      <h2 className="font-display text-2xl font-semibold mt-8 mb-3">Governing law</h2>
      <p className="mb-4">
        These terms are governed by the laws of {"ON"}.
      </p>
    </main>
  );
}
