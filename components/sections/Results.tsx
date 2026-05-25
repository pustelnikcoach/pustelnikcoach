"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { featuredResults, resultsHeading, type ResultCard } from "@/lib/content";

export function Results() {
  return (
    <section id="vysledky" className="py-20 sm:py-28 bg-ink">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="max-w-2xl mb-12 sm:mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="font-display font-semibold text-display-lg text-bone"
          >
            {resultsHeading.title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-4 text-[1.0625rem] text-bone/65 leading-relaxed"
          >
            {resultsHeading.subtitle}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 lg:gap-8">
          {featuredResults.map((r, i) => (
            <motion.article
              key={r.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
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
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12 flex justify-center"
        >
          <Link
            href="/vysledky"
            className="group inline-flex items-center gap-2 h-14 px-7 rounded-xl bg-transparent border border-bone/15 text-bone hover:border-emerald/40 hover:bg-bone/[0.03] font-medium transition-all duration-200"
          >
            Zobrazit všechny výsledky
            <span className="transition-transform group-hover:translate-x-1" aria-hidden>
              →
            </span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

export function ResultMedia({ card }: { card: ResultCard }) {
  if (card.kind === "ba") {
    return (
      <div className="relative grid grid-cols-2 gap-px bg-ink/40">
        <ImageTile
          src={card.before}
          alt={`${card.name} — před`}
          label="PŘED"
          position={card.beforePosition}
        />
        <ImageTile
          src={card.after}
          alt={`${card.name} — po`}
          label="PO"
          accent
          position={card.afterPosition}
        />
      </div>
    );
  }

  const isTopZoom = card.focus === "top-zoom";
  const hasZoom = typeof card.zoom === "number" && card.zoom !== 1;
  return (
    <div className="relative aspect-[4/5] bg-ink/50 overflow-hidden">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={card.image}
        alt={`${card.name} — výsledek spolupráce`}
        className={
          "absolute inset-0 h-full w-full object-cover transition-transform duration-700 " +
          (isTopZoom
            ? "scale-[1.1] origin-top group-hover:scale-[1.03]"
            : hasZoom
              ? ""
              : "group-hover:scale-[1.03]")
        }
        style={{
          objectPosition:
            card.objectPosition ?? (isTopZoom ? "50% 15%" : "50% 50%"),
          transform: hasZoom ? `scale(${card.zoom})` : undefined,
        }}
        onError={(e) => {
          (e.currentTarget as HTMLImageElement).style.display = "none";
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-graphite via-graphite/20 to-transparent pointer-events-none" />
    </div>
  );
}

function ImageTile({
  src,
  alt,
  label,
  accent = false,
  position,
}: {
  src: string;
  alt: string;
  label: string;
  accent?: boolean;
  position?: string;
}) {
  return (
    <div className="relative aspect-[4/5] overflow-hidden bg-ink/60">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={alt}
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
        style={{ objectPosition: position ?? "50% 50%" }}
        onError={(e) => {
          (e.currentTarget as HTMLImageElement).style.display = "none";
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-graphite via-graphite/10 to-transparent pointer-events-none" />
      <div
        className={
          "absolute bottom-3 left-3 inline-flex items-center gap-1 rounded-md px-2 py-0.5 text-[0.65rem] tracking-[0.18em] uppercase backdrop-blur " +
          (accent
            ? "bg-emerald/80 text-bone"
            : "bg-ink/70 text-bone/80")
        }
      >
        {label}
      </div>
    </div>
  );
}
