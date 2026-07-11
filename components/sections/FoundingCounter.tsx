const TAKEN = 7;   // ← změň, kolik z 10 je obsazeno
const TOTAL = 10;

export function FoundingCounter() {
  const left = TOTAL - TAKEN;
  return (
    <section className="bg-[#07120d] px-6 py-20">
      <div className="mx-auto max-w-xl rounded-2xl border border-[#1c3327] bg-[#0e1c16] p-10 text-center">
        <p className="mb-3 text-xs font-extrabold uppercase tracking-[0.18em] text-[#00a15f]">
          Nová Element Opava · Hlavní trenér
        </p>
        <h2 className="text-4xl font-black uppercase text-white sm:text-5xl">
          Zakládajících <span className="text-[#00a15f]">10</span>
        </h2>
        <p className="mx-auto mt-4 max-w-md text-[15px] leading-relaxed text-[#9bb0a5]">
          Beru jen <b className="text-white">10 lidí</b> za zakládající cenu{" "}
          <b className="text-white">2 790 Kč/měs napořád</b> (běžně 4 390). Až se naplní, zavírám.
        </p>

        <div className="mt-6 flex items-baseline justify-center gap-2">
          <span className="text-6xl font-black text-white">{TAKEN}</span>
          <span className="text-3xl font-black text-[#9bb0a5]">/{TOTAL}</span>
          <span className="ml-1 text-sm uppercase tracking-widest text-[#9bb0a5]">obsazeno</span>
        </div>

        <div className="mt-3 h-3 overflow-hidden rounded-full border border-[#1c3327] bg-[#04110b]">
          <div
            className="h-full rounded-full bg-gradient-to-r from-[#006039] to-[#00a15f]"
            style={{ width: `${(TAKEN / TOTAL) * 100}%` }}
          />
        </div>
        <p className="mt-4 font-extrabold text-white">
          Zbývá už jen <span className="text-[#00a15f]">{left} z 10</span>
        </p>

        <a
          href="https://calendly.com/petrpustelnikcoach/konzultace"
          className="mt-6 inline-block rounded-xl bg-[#006039] px-8 py-4 font-extrabold text-white transition hover:bg-[#00a15f]"
        >
          Chci být 1 z 10 → první trénink ZDARMA
        </a>
        <p className="mt-4 text-xs text-[#9bb0a5]">Nebo napiš do DM „OPAVA". Bez závazku.</p>
      </div>
    </section>
  );
}
