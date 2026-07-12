import { Nav } from "@/components/sections/Nav";
import { Footer } from "@/components/sections/Footer";
import { Starting10 } from "@/components/sections/Starting10";

export const dynamic = "force-dynamic";

export default function Starting10Page() {
  return (
    <>
      <Nav />
      <main className="pt-28 sm:pt-32">
        <Starting10 />
      </main>
      <Footer />
    </>
  );
}
