import { TAKEN, TOTAL } from "./FoundingCounter";

export function StickyBar() {
  const left = TOTAL - TAKEN;
  const slot = left === 1 ? "místo" : left < 5 ? "místa" : "míst";
  const text = `Zbývají ${left} ${slot} → rezervuj nyní`;
  const group = (
    <div className="flex shrink-0">
      {[0, 1, 2, 3].map((i) => (
        <span key={i} className="mx-8">{text}</span>
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
