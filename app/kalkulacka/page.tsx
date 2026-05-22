import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { FitnessCalculator } from "@/components/sections/FitnessCalculator";
import { Footer } from "@/components/sections/Footer";
import { Nav } from "@/components/sections/Nav";

export const metadata: Metadata = {
  title: "Kalkulačka kalorií a času k cíli | Petr Pustelník",
  description:
    "Spočítej si reálný čas k cíli, denní příjem kalorií a podívej se na orientační siluetu. Bez registrace, bez emailu.",
  robots: { index: true, follow: true },
};

export default function KalkulackaPage() {
  return (
    <>
      <Nav />
      <main className="bg-ink min-h-screen pt-28 pb-20">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-mute hover:text-bone transition-colors mb-10"
          >
            <ArrowLeft className="h-4 w-4" />
            Zpět na hlavní stránku
          </Link>

          <header className="max-w-2xl mb-12 sm:mb-16">
            <h1 className="font-display font-semibold text-display-lg text-bone">
              Kalkulačka kalorií a času k cíli
            </h1>
            <p className="mt-4 text-[1.0625rem] text-bone/65 leading-relaxed">
              Žádné magické rovnice. Mifflin-St Jeor, realistický týdenní rozsah
              a poctivý odhad, ne marketingový slib. Když chceš to samé na
              míru, dej vědět.
            </p>
          </header>

          <FitnessCalculator ctaHref="/#kontakt" />
        </div>
      </main>
      <Footer />
    </>
  );
}
