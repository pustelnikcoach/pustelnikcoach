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
import { FoundingCounter } from "@/components/sections/FoundingCounter";
import { VSL } from "@/components/sections/VSL";

export const dynamic = "force-dynamic"; // počítadlo se počítá z času při každém requestu

export default function HomePage() {
  return (
    <>
      <StickyBar />
      <Nav />
      <main>
        <FoundingCounter />
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
