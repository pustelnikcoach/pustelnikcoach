import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { CalendlyConversion } from "@/components/sections/CalendlyConversion";
import { Footer } from "@/components/sections/Footer";
import { Nav } from "@/components/sections/Nav";

export const metadata: Metadata = {
  title: "Rezervace tréninku zdarma | Petr Pustelník",
  description:
    "Rezervuj si termín prvního tréninku zdarma. Vyber si čas, vyplň pár údajů a termín se ti i mně objeví v kalendáři.",
  robots: { index: true, follow: true },
};

// Calendly odkaz na event „Konzultace" (zdarma). Barvy sladěné s webem.
const CALENDLY_URL =
  "https://calendly.com/petrpustelnikcoach/konzultace" +
  "?hide_gdpr_banner=1" +
  "&background_color=0B0F0D" +
  "&text_color=E8E6E1" +
  "&primary_color=0F4C3A";

export default function RezervacePage() {
  return (
    <>
      <CalendlyConversion />
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

          <header className="max-w-2xl mb-10 sm:mb-12">
            <h1 className="font-display font-semibold text-display-lg text-bone">
              Rezervuj si termín
            </h1>
            <p className="mt-4 text-[1.0625rem] text-bone/65 leading-relaxed">
              Vyber si termín <strong className="text-bone">prvního tréninku ZDARMA!</strong>{" "}
              Vyplníš pár údajů a termín se uloží do tvého i mého kalendáře.
              Přijde ti i připomínka, ať na nic nezapomeneš.
            </p>
          </header>

          {/* Calendly rezervace */}
          <div className="rounded-2xl overflow-hidden border border-bone/10 bg-graphite">
            {/* eslint-disable-next-line @next/next/no-unknown-property */}
            <iframe
              src={CALENDLY_URL}
              title="Rezervace tréninku zdarma"
              className="w-full"
              style={{ height: "1050px", border: "0" }}
              loading="lazy"
            />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
