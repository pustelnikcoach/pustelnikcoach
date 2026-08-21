import { heroState } from "@/lib/content";

export function StickyBar() {
  // Až se místo obsadí nebo projde termín, lišta zmizí a spodek webu je čistý.
  if (heroState() !== "nabidka") return null;

  return (
    <a
      href="#kontakt"
      className="fixed inset-x-0 bottom-0 z-50 block bg-emerald px-4 py-2.5 text-center text-[0.78rem] font-semibold uppercase tracking-[0.06em] text-bone transition-colors hover:bg-emerald-light sm:text-sm"
    >
      Poslední 1 místo za zakládající cenu{" "}
      <span className="hidden sm:inline">→ Rezervuj </span>📩
    </a>
  );
}
