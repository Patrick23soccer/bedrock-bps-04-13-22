import type { Metadata } from "next";
import "./globals.css";
import { JsonLd } from "./json-ld";

//  — replaced at scaffold time with next/font imports.

export const metadata: Metadata = {
  //  — replaced at scaffold time with brand-specific title/description/og.
  title: "Bedrock Property Services",
  description: "Pre-purchase home inspection. Diagnostic-grade clarity.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
        <JsonLd />
      </body>
    </html>
  );
}
