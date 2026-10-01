import { hero } from "@/lib/content";
import { renderInline } from "@/lib/markdown";

const photo = (
  <div className="relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-2xl border border-bone/5 bg-graphite md:max-w-md">
    {/* eslint-disable-next-line @next/next/no-img-element */}
    <img
      src={hero.image}
      alt={hero.imageAlt}
      className="absolute inset-0 h-full w-full object-cover object-top"
    />
    <div className="absolute inset-0 bg-gradient-to-br from-emerald/25 via-transparent to-ink/80" />
  </div>
);

const shell =
  "flex min-h-[90vh] items-center bg-ink-graphite px-5 sm:px-8 pt-28 sm:pt-32 pb-16";
const grid =
  "mx-auto grid w-full max-w-5xl items-center gap-10 text-center md:grid-cols-2 md:gap-14 md:text-left";
const heading = "mt-5 font-display text-display-lg font-semibold text-bone";
const body =
  "mx-auto mt-6 max-w-md text-[1.0625rem] leading-relaxed text-bone/70 md:mx-0";
const button =
  "group inline-flex h-14 items-center justify-center gap-2 rounded-xl bg-emerald px-8 font-medium text-bone transition-all duration-200 hover:bg-emerald-light active:scale-[0.98]";
const buttonGhost =
  "inline-flex h-14 items-center justify-center rounded-xl border border-bone/15 px-7 font-medium text-bone transition-all duration-200 hover:border-bone/30 hover:bg-bone/[0.03]";
const arrow = (
  <span className="transition-transform group-hover:translate-x-1" aria-hidden>→</span>
);

function Frame({ children }: { children: React.ReactNode }) {
  return (
    <section id="top" className={shell}>
      <div className={grid}>
        <div>{children}</div>
        {photo}
      </div>
    </section>
  );
}

export function Hero() {
  // Texty jsou v lib/content.ts v bloku `hero`.
  return (
    <Frame>
      <p className="text-xs font-medium uppercase tracking-[0.18em] text-mute sm:text-[0.78rem]">
        {hero.eyebrow}
      </p>
      <h1 className={heading}>
        {hero.headlineLine1}
        <br />
        <span className="text-bone/70">{hero.headlineLine2}</span>
      </h1>
      <p className={body}>{renderInline(hero.subheadline)}</p>
      <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row md:justify-start">
        <a href="#kontakt" className={button}>
          {hero.ctaPrimary}
          {arrow}
        </a>
        <a href="#vysledky" className={buttonGhost}>
          {hero.ctaSecondary}
        </a>
      </div>
    </Frame>
  );
}
