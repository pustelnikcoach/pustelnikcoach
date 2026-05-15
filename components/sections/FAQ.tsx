"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import { faq, faqHeading } from "@/lib/content";
import { renderInline } from "@/lib/markdown";
import { cn } from "@/lib/utils";

export function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section id="faq" className="py-20 sm:py-28 bg-ink">
      <div className="max-w-3xl mx-auto px-5 sm:px-8">
        <div className="mb-12 sm:mb-14">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="font-display font-semibold text-display-lg text-bone"
          >
            {faqHeading.title}
          </motion.h2>
          {faqHeading.subtitle && (
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-4 text-[1.0625rem] text-bone/65 leading-relaxed"
            >
              {renderInline(faqHeading.subtitle)}
            </motion.p>
          )}
        </div>

        <ul className="divide-y divide-bone/10 border-y border-bone/10">
          {faq.map((item, i) => {
            const isOpen = openIdx === i;
            return (
              <li key={i}>
                <button
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={`faq-${i}`}
                  onClick={() => setOpenIdx(isOpen ? null : i)}
                  className={cn(
                    "w-full flex items-center justify-between gap-6 py-5 sm:py-6 text-left transition-colors",
                    "focus:outline-none focus-visible:bg-bone/[0.03]",
                    "hover:text-bone"
                  )}
                >
                  <span
                    className={cn(
                      "font-display text-lg sm:text-xl font-medium leading-snug transition-colors",
                      isOpen ? "text-bone" : "text-bone/85"
                    )}
                  >
                    {item.q}
                  </span>
                  <span
                    className={cn(
                      "shrink-0 inline-flex h-9 w-9 items-center justify-center rounded-full border transition-all duration-300",
                      isOpen
                        ? "border-emerald bg-emerald/15 text-emerald-light rotate-45"
                        : "border-bone/15 text-bone/70"
                    )}
                    aria-hidden
                  >
                    <Plus className="h-4 w-4" />
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`faq-${i}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="pb-6 pr-12 text-[1rem] leading-relaxed text-bone/70">
                        {renderInline(item.a)}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
