import { About } from "@/components/sections/About";
import { Calculator } from "@/components/sections/Calculator";
import { CustomCollab } from "@/components/sections/CustomCollab";
import { Reviews } from "@/components/sections/Reviews";
import { FAQ } from "@/components/sections/FAQ";
import { Footer } from "@/components/sections/Footer";
import { Guarantee } from "@/components/sections/Guarantee";
import { LeadFormSection } from "@/components/sections/LeadFormSection";
import { Nav } from "@/components/sections/Nav";
import { Packages } from "@/components/sections/Packages";
import { PlanMagnet } from "@/components/sections/PlanMagnet";
import { ProofBar } from "@/components/sections/ProofBar";
import { Results } from "@/components/sections/Results";
import { ResultsCurve } from "@/components/sections/ResultsCurve";
import { StickyBar } from "@/components/sections/StickyBar";
import { Hero } from "@/components/sections/Hero";
import { VSL } from "@/components/sections/VSL";

// Stránka je statická. Tohle ji nechá jednou za hodinu přegenerovat,
// aby se úvodní obrazovka i lišta samy přepnuly, až projdou data v content.ts.
export const revalidate = 3600;

export default function HomePage() {
  return (
    <>
      <StickyBar />
      <Nav />
      <main>
        <Hero />
        <About />
        <Calculator />
        <Packages />
        <Results />
        <ProofBar />
        <Guarantee />
        <Reviews />
        <ResultsCurve />
        <VSL /> {/* Nahradilo „Čím se liším". Skryté dokud lib/content.ts vsl.videoUrl == "" */}
        <CustomCollab />
        <PlanMagnet />
        <FAQ />
        <LeadFormSection />
      </main>
      <Footer />
    </>
  );
}
