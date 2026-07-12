import { About } from "@/components/sections/About";
import { Calculator } from "@/components/sections/Calculator";
import { CustomCollab } from "@/components/sections/CustomCollab";
import { Excuses } from "@/components/sections/Excuses";
import { FAQ } from "@/components/sections/FAQ";
import { Footer } from "@/components/sections/Footer";
import { Guarantee } from "@/components/sections/Guarantee";
import { Hero } from "@/components/sections/Hero";
import { LeadFormSection } from "@/components/sections/LeadFormSection";
import { Nav } from "@/components/sections/Nav";
import { Packages } from "@/components/sections/Packages";
import { Pillars } from "@/components/sections/Pillars";
import { ProofBar } from "@/components/sections/ProofBar";
import { Process } from "@/components/sections/Process";
import { Results } from "@/components/sections/Results";
import { ResultsCurve } from "@/components/sections/ResultsCurve";
import { Starting10 } from "@/components/sections/Starting10";
import { StickyBar } from "@/components/sections/StickyBar";
import { Testimonials } from "@/components/sections/Testimonials";
import { FoundingCounter } from "@/components/sections/FoundingCounter";

export const dynamic = "force-dynamic"; // počítadlo se počítá z času při každém requestu

export default function HomePage() {
  return (
    <>
      <StickyBar />
      <Nav />
      <main>
        <FoundingCounter />
        <Starting10 />
        <Hero />
        <ProofBar />
        <Calculator />
        <Results />
        <ResultsCurve />
        <Testimonials />
        <About />
        <Excuses />
        <Guarantee />
        <Packages />
        <CustomCollab />
        <Process />
        <Pillars />
        <LeadFormSection />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
