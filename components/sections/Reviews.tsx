// Sloučená sekce: recenze + zbořené námitky („možná si říkáš") + odlišení, v jednom.
// Texty jsou psané tak, aby zároveň řešily nejčastější námitky. Rolují jako lišta.
const reviews = [
  { name: "David K.", text: "Bál jsem se, že po práci nebudu mít energii. Petr mi dal plán, co reálně vydržím — a za 3 měsíce jsem dole 8 kg." },
  { name: "Eliška R.", text: "Myslela jsem, že na cvičení nemám tělo ani čas. Stačí 2 tréninky týdně. Poprvé se mi líbí, co vidím v zrcadle." },
  { name: "Marek V.", text: "Zkoušel jsem to roky sám. První měsíc s Petrem jsem pochopil víc než za 5 let na YouTube." },
  { name: "Nela T.", text: "Nejvíc oceňuju, že mi vysvětlil PROČ, ne jen co dělat. Konečně tomu rozumím a nedělám to naslepo." },
  { name: "Tomáš H.", text: "Čekal jsem dřinu a řvaní. Místo toho klid, systém a výsledky. Přibral jsem 6 kg svalů." },
  { name: "Klára M.", text: "Styděla jsem se jít do posilovny. Petr mě provedl tak, že jsem se cítila v pohodě od prvního tréninku." },
  { name: "Jakub P.", text: "Garance mě přesvědčila to zkusit. Nakonec jsem ji nepotřeboval — výsledky přišly." },
  { name: "Lucie B.", text: "Jídelníček, co se dá reálně jíst, ne hladovka. Zhubla jsem a neztratila jsem ze života nic." },
  { name: "Petr G.", text: "Za půl roku 30 kg dole. Petr mě vedl krok za krokem, i když jsem sám nevěřil, že to půjde." },
  { name: "Adéla S.", text: "Nejde jen o postavu. Mám víc energie, líp spím a hlava je klidnější." },
  { name: "Ondřej V.", text: "Myslel jsem, že jsem beznadějný případ. Petr mi dokázal opak — a bez zázračných keců." },
  { name: "Martina D.", text: "Doporučuju každému, kdo to zkoušel sám a nešlo to. S Petrem to jde." },
];

function Card({ name, text }: { name: string; text: string }) {
  return (
    <div className="mx-3 w-80 shrink-0 rounded-2xl border border-bone/10 bg-graphite p-6">
      <p className="text-[15px] leading-relaxed text-bone/80">„{text}"</p>
      <p className="mt-4 font-display text-emerald-light">{name}</p>
    </div>
  );
}

export function Reviews() {
  return (
    <section id="recenze" className="overflow-hidden bg-ink py-20 sm:py-28">
      <div className="mx-auto mb-10 max-w-6xl px-5 sm:px-8">
        <h2 className="font-display font-semibold text-display-lg text-bone">Co o mně říkají</h2>
        <p className="mt-3 text-bone/60">Toto jsou slova mých klientů.</p>
      </div>
      <style>{`@keyframes ptreviews{to{transform:translateX(-50%)}}`}</style>
      <div className="flex w-max" style={{ animation: "ptreviews 70s linear infinite" }}>
        <div className="flex">
          {reviews.map((r) => <Card key={r.name} {...r} />)}
        </div>
        <div className="flex" aria-hidden>
          {reviews.map((r) => <Card key={r.name} {...r} />)}
        </div>
      </div>
    </section>
  );
}
