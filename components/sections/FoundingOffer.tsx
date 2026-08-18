import { founding } from "@/lib/content";

export function FoundingOffer() {
  return (
    <section className="flex min-h-[90vh] items-center justify-center bg-ink-graphite px-5 sm:px-8 pt-28 sm:pt-32 pb-16 text-center">
      <div className="mx-auto max-w-2xl">
        <p className="mb-5 text-xs sm:text-[0.78rem] font-medium uppercase tracking-[0.18em] text-emerald">
          NOVÝ ElementGyms Opava · Hlavní trenér
        </p>
        <h2 className="font-display font-semibold text-display-xl text-bone">
          Zakládající cena
          <br />
          končí <span className="text-emerald">{founding.deadline}</span>
        </h2>

        <div className="mx-auto mt-9 inline-flex flex-col items-center rounded-2xl border border-emerald/30 bg-ink/60 px-8 sm:px-12 py-7">
          <div className="flex flex-wrap items-baseline justify-center gap-x-4 gap-y-1">
            <span className="text-xl text-mute line-through decoration-mute/70">
              {founding.regular}&nbsp;Kč
            </span>
            <span className="font-display font-semibold text-display-lg text-bone">
              {founding.price}&nbsp;Kč
            </span>
            <span className="text-lg text-mute">/měs</span>
          </div>
        </div>

        <p className="mx-auto mt-8 max-w-xl text-[1.0625rem] leading-relaxed text-bone/70">
          Balíček <b className="text-bone">Hybrid&nbsp;Pro</b> za zakládající cenu{" "}
          <b className="text-bone">{founding.price}&nbsp;Kč/měs</b> místo{" "}
          {founding.regular}&nbsp;Kč. Cena se ti zamkne na{" "}
          <b className="text-bone">{founding.lock}</b>, pak přechází na běžný ceník.
        </p>
        <p className="mx-auto mt-3 max-w-xl text-[0.9375rem] leading-relaxed text-bone/55">
          4× osobní trénink měsíčně · osobní konzultace · tréninkový plán ·
          jídelníček ve 4 variantách · suplementace · komunikace kdykoliv
        </p>

        <a
          href="#kontakt"
          className="group mt-8 inline-flex h-14 items-center justify-center gap-2 rounded-xl bg-emerald px-8 font-medium text-bone transition-all duration-200 hover:bg-emerald-light active:scale-[0.98]"
        >
          Chci zakládající cenu
          <span className="transition-transform group-hover:translate-x-1" aria-hidden>→</span>
        </a>
        <p className="mt-4 text-sm font-medium text-emerald-light">
          🛡️ 90denní garance — neuvidíš progres, vrátím ti peníze.
        </p>
      </div>
    </section>
  );
}
