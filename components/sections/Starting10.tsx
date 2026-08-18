import { founding } from "@/lib/content";

const included = [
  "Osobní vedení hlavního trenéra nové Opavy",
  "Tréninkový plán, jídelníček i suplementace na míru",
  "První trénink zdarma — i když si nesedneme, odejdeš s plánem co zlepšit",
  `🔒 Zakládající cena ti zůstává ${founding.lock}`,
  "🏅 Status zakládajícího člena",
  "🛡️ 90denní garance — neuvidíš progres, vrátím ti peníze",
];

const steps = [
  "Necháš mi kontakt na webu",
  "Ozvu se ti do 48 hodin",
  "Domluvíme konzultaci (hovor nebo osobně)",
  "První trénink zdarma — uvidíme, jestli si sedneme",
  "Spolupráce + 90denní garance",
];

export function Starting10() {
  return (
    <section id="starting-10" className="bg-ink px-5 sm:px-8 py-20 sm:py-28">
      <div className="mx-auto max-w-4xl">
        <p className="mb-3 text-xs font-medium uppercase tracking-[0.18em] text-emerald">
          Akce · jen do {founding.deadline}
        </p>
        <h2 className="font-display font-semibold text-display-lg text-bone">
          Zakládající cena OPAVA
        </h2>
        <p className="mt-4 max-w-2xl leading-relaxed text-bone/70">
          Do <b className="text-bone">{founding.deadline}</b> beru nové klienty do
          balíčku <b className="text-bone">Hybrid&nbsp;Pro</b> za{" "}
          <b className="text-bone">{founding.price}&nbsp;Kč/měs</b> místo{" "}
          {founding.regular}&nbsp;Kč. Cena se ti zamkne na{" "}
          <b className="text-bone">{founding.lock}</b>, pak přechází na běžný
          ceník.
        </p>
        <p className="mt-3 max-w-2xl text-[0.9375rem] leading-relaxed text-bone/55">
          Hybrid Pro = 4× osobní trénink měsíčně · osobní konzultace · tréninkový
          plán · jídelníček ve 4 variantách · suplementace · komunikace kdykoliv
        </p>

        <div className="mt-10 grid gap-10 sm:grid-cols-2">
          <div>
            <h3 className="mb-4 font-display text-xl text-bone">Co dostaneš</h3>
            <ul className="space-y-3">
              {included.map((i) => (
                <li key={i} className="flex gap-3 text-bone/80">
                  <span className="text-emerald-light">✓</span>
                  {i}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="mb-4 font-display text-xl text-bone">Jak to probíhá</h3>
            <ol className="space-y-3">
              {steps.map((s, i) => (
                <li key={s} className="flex gap-3 text-bone/80">
                  <span className="font-display text-emerald-light">{i + 1}.</span>
                  {s}
                </li>
              ))}
            </ol>
          </div>
        </div>

        <a
          href="#kontakt"
          className="mt-10 inline-flex h-14 items-center gap-2 rounded-xl bg-emerald px-8 font-medium text-bone transition hover:bg-emerald-light"
        >
          Chci zakládající cenu →
        </a>
      </div>
    </section>
  );
}
