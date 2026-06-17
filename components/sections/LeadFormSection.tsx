import { LeadForm } from "./LeadForm";
import { formCopy } from "@/lib/content";

export function LeadFormSection() {
  return (
    <section id="kontakt" className="py-20 sm:py-28 bg-ink-graphite relative overflow-hidden">
      <div className="absolute inset-0 bg-hero-radial opacity-60 pointer-events-none" aria-hidden />
      <div className="relative max-w-6xl mx-auto px-5 sm:px-8">
        <div className="max-w-2xl mx-auto text-center mb-10 sm:mb-14">
          <h2 className="font-display font-semibold text-display-lg text-bone">
            {formCopy.sectionTitle}
          </h2>
          <p className="mt-4 text-[1.0625rem] text-bone/65 leading-relaxed">
            {formCopy.sectionSubtitle.split("48").map((part, i, arr) =>
              i < arr.length - 1 ? (
                <span key={i}>
                  {part}
                  <strong className="text-emerald-light font-bold">48</strong>
                </span>
              ) : (
                <span key={i}>{part}</span>
              )
            )}
          </p>
        </div>
        <LeadForm />
      </div>
    </section>
  );
}
