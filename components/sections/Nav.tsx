"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { nav } from "@/lib/content";
import { cn } from "@/lib/utils";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled
            ? "bg-ink/85 backdrop-blur-md border-b border-bone/5"
            : "bg-transparent"
        )}
      >
        <div className="max-w-6xl mx-auto px-5 sm:px-8 h-16 flex items-center justify-between">
          <a
            href="#"
            className="font-display text-lg font-semibold tracking-wider text-bone"
            aria-label={`${nav.brand}.`}
          >
            {nav.brand}
            <span className="text-emerald-light">.</span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {nav.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-bone/75 hover:text-bone transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#kontakt"
              className="ml-2 inline-flex items-center gap-2 h-10 px-4 rounded-xl bg-emerald hover:bg-emerald-light text-bone text-sm font-medium transition-colors"
            >
              {nav.cta}
              <span aria-hidden>→</span>
            </a>
          </nav>

          <button
            type="button"
            onClick={() => setOpen(true)}
            className="md:hidden h-10 w-10 inline-flex items-center justify-center rounded-lg text-bone hover:bg-bone/5"
            aria-label="Otevřít menu"
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </header>

      {open && (
        <div className="fixed inset-0 z-[60] bg-ink md:hidden">
          <div className="px-5 sm:px-8 h-16 flex items-center justify-between">
            <span className="font-display text-lg font-semibold tracking-wider text-bone">
              {nav.brand}
              <span className="text-emerald-light">.</span>
            </span>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="h-10 w-10 inline-flex items-center justify-center rounded-lg text-bone hover:bg-bone/5"
              aria-label="Zavřít menu"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          <nav className="flex flex-col gap-2 px-5 sm:px-8 pt-8">
            {nav.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="font-display text-3xl font-semibold py-3 text-bone hover:text-emerald-light transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#kontakt"
              onClick={() => setOpen(false)}
              className="mt-6 inline-flex items-center justify-center gap-2 h-14 rounded-xl bg-emerald hover:bg-emerald-light text-bone font-medium"
            >
              {nav.cta} →
            </a>
          </nav>
        </div>
      )}
    </>
  );
}
