import { Dumbbell, MessageCircle, TrendingUp, Utensils } from "lucide-react";
import { offer } from "@/lib/content";

const icons = [Dumbbell, Utensils, TrendingUp, MessageCircle];

export function Offer() {
  return (
    <section className="bg-ink px-5 sm:px-8 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <h2 className="font-display text-display-lg font-semibold text-bone">
          {offer.heading}
        </h2>
        <p className="mt-3 text-[1.0625rem] text-bone/60">{offer.subtitle}</p>

        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {offer.items.map((item, i) => {
            const Icon = icons[i];
            return (
              <li
                key={item.title}
                className="rounded-2xl border border-bone/5 bg-graphite p-6 transition-colors hover:border-emerald/40"
              >
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-emerald/30 text-[#7FD8B8]">
                  <Icon className="h-5 w-5" aria-hidden />
                </span>
                <h3 className="mt-5 font-display text-xl font-semibold text-bone">
                  {item.title}
                </h3>
                <p className="mt-2 text-[0.95rem] leading-relaxed text-bone/65">
                  {item.text}
                </p>
              </li>
            );
          })}
        </ul>

        <div className="mt-10 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-bone/60">{offer.note}</p>
          <a
            href="#kontakt"
            className="group inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-emerald px-7 font-medium text-bone transition-colors hover:bg-emerald-light"
          >
            {offer.cta}
            <span className="transition-transform group-hover:translate-x-1" aria-hidden>
              →
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
