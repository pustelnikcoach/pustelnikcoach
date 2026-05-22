import { About } from "@/components/sections/About";
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
import { Testimonials } from "@/components/sections/Testimonials";

export default function HomePage() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <ProofBar />
        <LeadFormSection />
        <Results />
        <ResultsCurve />
        <Testimonials />
        <About />
        <Pillars />
        <Excuses />
        <Guarantee />
        <Packages />
        <CustomCollab />
        <Process />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
