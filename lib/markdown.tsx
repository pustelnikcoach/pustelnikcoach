import type { ReactNode } from "react";

// Jednoduchý inline renderer pro **bold** v textech z lib/content.ts.
// Petis píše do content.ts text se **hvězdičkami**, my je vykreslíme jako <strong>.
export function renderInline(text: string): ReactNode[] {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((p, i) => {
    if (p.startsWith("**") && p.endsWith("**")) {
      return (
        <strong key={i} className="font-semibold text-bone">
          {p.slice(2, -2)}
        </strong>
      );
    }
    return <span key={i}>{p}</span>;
  });
}
