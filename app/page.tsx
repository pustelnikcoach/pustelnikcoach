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
import { Pillars } from "@/components/sections/Pillars";
import { ProofBar } from "@/components/sections/ProofBar";
import { Results } from "@/components/sections/Results";
import { ResultsCurve } from "@/components/sections/ResultsCurve";
import { StickyBar } from "@/components/sections/StickyBar";
import { FoundingCounter } from "@/components/sections/FoundingCounter";

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
        <Results />
        <ProofBar />
        <Guarantee />
        <Reviews />
        <ResultsCurve />
        <Pillars />
        <Packages />
        <CustomCollab />
        <FAQ />
        <LeadFormSection />
      </main>
      <Footer />
    </>
  );
}
