import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Footer } from "@/components/sections/Footer";
import { Nav } from "@/components/sections/Nav";
import { ResultMedia } from "@/components/sections/Results";
import { allResults } from "@/lib/content";

export const metadata: Metadata = {
  title: "Výsledky klientů | Petr Pustelník",
  description:
    "Reálné výsledky klientů Petra Pustelníka. Před/po fotky a transformace z dlouhodobé spolupráce. Žádný photoshop, žádné stock fotky.",
  robots: { index: true, follow: true },
};

export default function VysledkyPage() {
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
              Všechny výsledky klientů
            </h1>
            <p className="mt-4 text-[1.0625rem] text-bone/65 leading-relaxed">
              Reálné fotky reálných klientů. Žádný photoshop, žádné stock fotky.
              Tady najdeš úplný přehled spoluprací, od krátkodobých transformací
              po dlouhodobé partnerství.
            </p>
          </header>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 lg:gap-8 items-start">
            {allResults.map((r) => (
              <article
                key={r.name}
                className="group bg-graphite rounded-2xl overflow-hidden border border-bone/5 hover:border-emerald/30 transition-colors duration-300"
              >
                <ResultMedia card={r} />

                <div className="p-6 sm:p-7">
                  <div className="flex flex-wrap items-center gap-2 mb-3">
                    <span className="text-xs uppercase tracking-[0.15em] text-mute">
                      {r.name}
                    </span>
                    <span className="inline-flex items-center rounded-full bg-emerald/10 px-2.5 py-0.5 text-[0.65rem] uppercase tracking-[0.15em] text-emerald-light">
                      {r.duration}
                    </span>
                  </div>
                  <div className="font-display text-xl sm:text-2xl font-semibold text-bone leading-tight">
                    {r.kind === "ba" ? (
                      <>
                        Před{" "}
                        <span className="text-mute mx-1" aria-hidden>
                          →
                        </span>{" "}
                        <span className="text-emerald-light">Po</span>
                      </>
                    ) : (
                      <span className="text-emerald-light">Reálný výsledek</span>
                    )}
                  </div>
                  {r.quote && (
                    <blockquote className="mt-4 pt-4 border-t border-bone/5 text-[0.95rem] text-bone/70 leading-relaxed">
                      &ldquo;{r.quote}&rdquo;
                    </blockquote>
                  )}
                </div>
              </article>
            ))}
          </div>

          <div className="mt-16 flex justify-center">
            <Link
              href="/#kontakt"
              className="group inline-flex items-center justify-center gap-2 h-14 px-7 rounded-xl bg-emerald hover:bg-emerald-light text-bone font-medium transition-all duration-200 active:scale-[0.98]"
            >
              Chci taky takový výsledek
              <span className="transition-transform group-hover:translate-x-1" aria-hidden>
                →
              </span>
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
