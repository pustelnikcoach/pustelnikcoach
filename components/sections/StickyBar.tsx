import { slotsTaken, TOTAL } from "./FoundingCounter";

export function StickyBar() {
  const left = TOTAL - slotsTaken();
  const slot = left === 1 ? "MÍSTO" : left < 5 ? "MÍSTA" : "MÍST";
  const messages = [
    `ZBÝVAJÍ ${left} ${slot} → REZERVUJ NYNÍ 📩`,
    `Možná si říkáš „zvládnu to?" — první trénink ZDARMA, nezávazně`,
    `„Přidala jsem 120 kg na hip thrust za 4 měsíce" — Justýna`,
  ];
  const group = (
    <div className="flex shrink-0">
      {messages.map((m) => (
        <span key={m} className="mx-8">{m}</span>
      ))}
    </div>
  );
  return (
    <a href="#kontakt" className="fixed inset-x-0 bottom-0 z-50 block overflow-hidden bg-emerald py-2 text-sm font-medium text-bone transition-colors hover:bg-emerald-light">
      <style>{`@keyframes ptmarquee{to{transform:translateX(-50%)}}`}</style>
      <div className="flex w-max" style={{ animation: "ptmarquee 22s linear infinite" }}>
        {group}
        {group}
      </div>
    </a>
  );
}
