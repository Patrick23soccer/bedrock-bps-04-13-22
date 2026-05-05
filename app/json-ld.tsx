/**
 * LocalBusiness JSON-LD. The  slot is replaced at scaffold
 * time with brand-specific NAP + services. Counsel-review the address and hours
 * before launch.
 *
 * Safe by construction: data is static at build time. No user input flows in.
 */
export function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    // 
    name: "Bedrock Property Services",
    description: "Pre-purchase home inspection. Diagnostic-grade clarity.",
    url: "https://bedrockbps.example",
    telephone: "+1-555-0142",
    address: {
      "@type": "PostalAddress",
      streetAddress: "55 King St E",
      addressLocality: "Hamilton",
      addressRegion: "ON",
      postalCode: "L8N 1A6",
      addressCountry: "CA",
    },
  };

  // JSON.stringify of a static object cannot produce a script-closing sequence
  // because all `<` are escaped in JSON output, so this is safe at build time.
  const json = JSON.stringify(data);

  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: json }}
    />
  );
}
