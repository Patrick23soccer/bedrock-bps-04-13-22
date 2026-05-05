export const metadata = {
  title: "Privacy Policy",
};

export default function PrivacyPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <div className="mb-8 rounded-md border border-amber-300 bg-amber-50 p-4 text-sm text-amber-900">
        <strong>Counsel-review draft.</strong> This page is a starter template.
        Replace it with policy text approved by your legal counsel before launch.
      </div>
      <h1 className="font-display text-4xl font-semibold mb-6">Privacy Policy</h1>
      <p className="mb-4">
        {"Bedrock Property Services"} respects your privacy. We collect information you provide
        directly (name, email, phone, message) when you submit our contact form,
        and basic technical data (IP, browser) for security purposes.
      </p>
      <h2 className="font-display text-2xl font-semibold mt-8 mb-3">How we use information</h2>
      <p className="mb-4">
        Contact form submissions are sent to our inbox via Resend. We do not sell
        your information or share it with third parties except as required by law.
      </p>
      <h2 className="font-display text-2xl font-semibold mt-8 mb-3">Your rights</h2>
      <p className="mb-4">
        You may request access, correction, or deletion of personal data we hold
        about you by emailing the address listed in our footer.
      </p>
    </main>
  );
}
