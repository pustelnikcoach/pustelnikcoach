import { founding, hero, heroState } from "@/lib/content";
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
const badge =
  "inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-[0.68rem] font-semibold uppercase tracking-[0.16em]";
const heading = "mt-5 font-display text-display-lg font-semibold text-bone";
const priceRow =
  "mt-5 flex flex-wrap items-baseline justify-center gap-x-4 gap-y-1 md:justify-start";
const bigPrice = "font-display text-display-lg font-semibold text-bone";
const body =
  "mx-auto mt-6 max-w-md text-[1.0625rem] leading-relaxed text-bone/70 md:mx-0";
const button =
  "group inline-flex h-14 items-center justify-center gap-2 rounded-xl bg-emerald px-8 font-medium text-bone transition-all duration-200 hover:bg-emerald-light active:scale-[0.98]";
const buttonGhost =
  "inline-flex h-14 items-center justify-center rounded-xl border border-bone/15 px-7 font-medium text-bone transition-all duration-200 hover:border-bone/30 hover:bg-bone/[0.03]";
const guarantee = "mt-4 text-sm font-medium text-emerald-light";
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
  const state = heroState();

  // Zakládající cena běží: poslední místo za 2 790.
  if (state === "nabidka") {
    return (
      <Frame>
        <span className={`${badge} border border-emerald-light bg-emerald/90 text-bone`}>
          <span
            className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#7FD8B8] shadow-[0_0_8px_2px_rgba(127,216,184,0.55)]"
            aria-hidden
          />
          Zbývá poslední místo
        </span>
        <h1 className={heading}>
          Zakládající cena
          <br />
          končí <span className="text-emerald">{founding.deadline}</span>
        </h1>
        <div className={priceRow}>
          <span className="text-xl text-mute line-through decoration-mute/70">
            {founding.regular}&nbsp;Kč
          </span>
          <span className={bigPrice}>{founding.price}&nbsp;Kč</span>
          <span className="text-lg text-mute">/měs</span>
        </div>
        <p className={body}>
          Balíček <b className="text-bone">Hybrid&nbsp;Pro</b> s hlavním trenérem nově
          otevřeného fitka ElementGyms Opava. Cena se zamkne pouze na{" "}
          <b className="text-bone">{founding.lock}</b>, poté běžný ceník.
        </p>
        <p className="mx-auto mt-3 max-w-md text-[0.9375rem] leading-relaxed text-bone/55 md:mx-0">
          4× osobní trénink měsíčně · osobní konzultace · tréninkový plán ·
          jídelníček ve 4 variantách · suplementace · komunikace kdykoliv
        </p>
        <a href="#kontakt" className={`${button} mt-7`}>
          Chci poslední místo
          {arrow}
        </a>
        <p className={guarantee}>
          🛡️ 90denní garance, neuvidíš progres, vrátím ti peníze.
        </p>
      </Frame>
    );
  }

  // Místo je pryč nebo prošel termín: běžná cena a konzultace zdarma.
  if (state === "obsazeno") {
    return (
      <Frame>
        <span className={`${badge} border border-mute/45 text-mute`}>
          Zakládající místa obsazena
        </span>
        <h1 className={heading}>
          Tvůj cíl se
          <br />
          nezměnil.
        </h1>
        <div className={priceRow}>
          <span className={bigPrice}>{founding.regular}&nbsp;Kč</span>
          <span className="text-lg text-mute">/měs · Hybrid&nbsp;Pro</span>
        </div>
        <p className={body}>
          Balíček <b className="text-bone">Hybrid&nbsp;Pro</b> je stále za běžnou cenu.
          I když si nesedneme, odejdeš z konzultace s radami, co konkrétně zlepšit.
        </p>
        <a href="#kontakt" className={`${button} mt-7`}>
          Chci konzultaci ZDARMA!
          {arrow}
        </a>
        <p className={guarantee}>
          🛡️ 90denní garance, neuvidíš progres, vrátím ti peníze.
        </p>
        <p className="mt-2 text-xs text-mute">
          Napiš mi a dám ti vědět, až se místo uvolní.
        </p>
      </Frame>
    );
  }

  // Zpátky na původní web. Texty jsou v lib/content.ts v bloku `hero`.
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
