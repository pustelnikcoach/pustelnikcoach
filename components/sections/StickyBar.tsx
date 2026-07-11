import { TAKEN, TOTAL } from "./FoundingCounter";

export function StickyBar() {
  const left = TOTAL - TAKEN;
  const text = `Zbývají ${left}/${TOTAL} zakládajících míst — napiš OPAVA →`;
  const group = (
    <div className="flex shrink-0">
      {[0, 1, 2, 3].map((i) => (
        <span key={i} className="mx-8">{text}</span>
      ))}
    </div>
  );
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 overflow-hidden bg-emerald py-2 text-sm font-medium text-bone">
      <style>{`@keyframes ptmarquee{to{transform:translateX(-50%)}}`}</style>
      <div className="flex w-max" style={{ animation: "ptmarquee 22s linear infinite" }}>
        {group}
        {group}
      </div>
    </div>
  );
}
