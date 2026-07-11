import { proof } from "@/lib/content";

export const TAKEN = 6;   // ← kolik z 10 je obsazeno (vyšší = větší tlak). Sdílí i StickyBar.
export const TOTAL = 10;

export function FoundingCounter() {
  const left = TOTAL - TAKEN;
  return (
    <section className="bg-ink-graphite px-5 sm:px-8 pt-28 sm:pt-32 pb-16 text-center">
      <div className="mx-auto max-w-2xl">
        <p className="mb-5 text-xs sm:text-[0.78rem] font-medium uppercase tracking-[0.18em] text-emerald">
          NOVÝ Element Opava · Hlavní trenér
        </p>
        <h2 className="font-display font-semibold text-display-xl text-bone">
          Zakládajících <span className="text-emerald">10</span>
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-[1.0625rem] leading-relaxed text-bone/70">
          Beru jen <b className="text-bone">10 lidí</b> za zakládající cenu{" "}
          <b className="text-bone">2 790 Kč/měs. napořád</b> (běžně&nbsp;4&nbsp;390,-). Až se{" "}
          <b className="text-bone">kapacita</b> naplní, zavírám.{" "}
          <b className="text-bone">Po otevření Opavy sleva KONČÍ!</b>
        </p>

        <div className="mt-8 flex items-baseline justify-center gap-2">
          <span className="font-display font-semibold text-display-lg text-bone">{TAKEN}</span>
          <span className="font-display text-3xl text-mute">/{TOTAL}</span>
          <span className="ml-2 text-sm uppercase tracking-[0.18em] text-mute">obsazeno</span>
        </div>

        <div className="mx-auto mt-4 h-3 max-w-md overflow-hidden rounded-full border border-emerald/20 bg-ink">
          <div
            className="h-full rounded-full bg-emerald"
            style={{ width: `${(TAKEN / TOTAL) * 100}%` }}
          />
        </div>
        <p className="mt-4 font-medium text-bone">
          Zbývají už jen <span className="font-semibold text-emerald">{left} z 10</span>
        </p>

        <div className="mx-auto mt-8 grid max-w-lg grid-cols-3 gap-4">
          {proof.map((p) => (
            <div key={p.number} className="text-center">
              <div className="font-display text-2xl font-semibold text-emerald-light tabular-nums">
                {p.number}
              </div>
              <div className="mt-1 text-xs text-mute">{p.label}</div>
            </div>
          ))}
        </div>

        <a
          href="https://calendly.com/petrpustelnikcoach/konzultace"
          className="group mt-8 inline-flex h-14 items-center justify-center gap-2 rounded-xl bg-emerald px-8 font-medium text-bone transition-all duration-200 hover:bg-emerald-light active:scale-[0.98]"
        >
          Chci být 1 z 10 → první trénink ZDARMA
          <span className="transition-transform group-hover:translate-x-1" aria-hidden>→</span>
        </a>
        <p className="mt-4 text-sm font-medium text-emerald-light">
          🛡️ 90denní garance — neuvidíš progres, vrátím ti peníze.
        </p>
        <p className="mt-2 text-xs text-mute">Nebo napiš do DM „OPAVA". Bez závazku.</p>
      </div>
    </section>
  );
}
