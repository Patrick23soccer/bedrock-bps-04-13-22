import { Hero } from "@/components/Hero";
import { TrustStrip } from "@/components/TrustStrip";
import { Services } from "@/components/Services";
import { Process } from "@/components/Process";
import { CTA } from "@/components/CTA";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { StickyCTA } from "@/components/StickyCTA";
import { ScrollProgress } from "@/components/ScrollProgress";
import { PageTransition } from "@/components/PageTransition";

export default function HomePage() {
  return (
    <PageTransition>
      <ScrollProgress />
      <main>
        <Hero />
        <TrustStrip />
        <Services />
        <Process />
        <CTA />
        <Contact />
        <Footer />
      </main>
      <StickyCTA />
    </PageTransition>
  );
}
