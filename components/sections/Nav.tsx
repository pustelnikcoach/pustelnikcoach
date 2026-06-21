"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { nav } from "@/lib/content";
import { cn } from "@/lib/utils";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  // showLogo = zobrazit vycentrované logo (scrollování dolů).
  // Když je false, ukáže se plné menu (nahoře na stránce nebo při scrollu zpět nahoru).
  const [showLogo, setShowLogo] = useState(false);
  const [open, setOpen] = useState(false);
  const lastY = useRef(0);

  // Na homepage kotvy plynule scrollují (#sekce). Na podstránkách (např. /rezervace)
  // musí odkaz skočit na homepage a teprve tam dorolovat → /#sekce.
  const isHome = usePathname() === "/";
  const to = (hash: string) => (isHome ? hash : `/${hash}`);
  const homeHref = isHome ? "#top" : "/";

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 40);
      const prev = lastY.current;
      if (y < 40) {
        setShowLogo(false); // úplně nahoře → plné menu
      } else if (y > prev + 5) {
        setShowLogo(true); // scroll dolů → logo
      } else if (y < prev - 5) {
        setShowLogo(false); // scroll nahoru → naběhne menu
      }
      lastY.current = y;
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50">

        {/* Tmavé pozadí lišty — plynule se objeví po scrollu */}
        <div
          className="absolute inset-0 bg-ink/90 backdrop-blur-md border-b border-bone/5 transition-opacity duration-300"
          style={{ opacity: scrolled ? 1 : 0 }}
        />

        <div className="relative max-w-6xl mx-auto px-5 sm:px-8 h-20 sm:h-28 flex items-center justify-between">

          {/* Značka vlevo — zmizí když ukazujeme logo */}
          <a
            href={homeHref}
            className="font-display text-xl font-bold tracking-wider text-bone transition-opacity duration-300"
            style={{ opacity: showLogo ? 0 : 1, pointerEvents: showLogo ? "none" : "auto" }}
            tabIndex={showLogo ? -1 : 0}
            aria-label={`${nav.brand}.`}
          >
            {nav.brand}
            <span className="text-emerald-light">.</span>
          </a>

          {/* Logo vycentrované — ukáže se při scrollu dolů */}
          <a
            href={homeHref}
            className="absolute left-1/2 top-1/2 transition-all duration-500 ease-out"
            style={{
              opacity: showLogo ? 1 : 0,
              transform: `translate(-50%, -50%) scale(${showLogo ? 1 : 0.85})`,
              pointerEvents: showLogo ? "auto" : "none",
            }}
            aria-label="Zpět nahoru"
            tabIndex={showLogo ? 0 : -1}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/logo-transparent.png"
              alt=""
              aria-hidden
              className="block w-auto h-14 sm:h-32"
            />
          </a>

          {/* Navigační odkazy — zmizí když ukazujeme logo */}
          <nav
            className="hidden md:flex items-center gap-8 transition-opacity duration-300"
            style={{ opacity: showLogo ? 0 : 1, pointerEvents: showLogo ? "none" : "auto" }}
          >
            {nav.links.map((link) => (
              <a
                key={link.href}
                href={to(link.href)}
                className="text-sm text-bone/75 hover:text-bone transition-colors"
                tabIndex={showLogo ? -1 : 0}
              >
                {link.label}
              </a>
            ))}
            {nav.showReservations && (
              <a
                href={nav.reservationsHref}
                className="text-sm text-bone/75 hover:text-bone transition-colors"
                tabIndex={showLogo ? -1 : 0}
              >
                {nav.reservationsLabel}
              </a>
            )}
            <a
              href={to("#kontakt")}
              className="ml-2 inline-flex items-center gap-2 h-10 px-4 rounded-xl bg-emerald hover:bg-emerald-light text-bone text-sm font-medium transition-colors"
              tabIndex={showLogo ? -1 : 0}
            >
              {nav.cta}
              <span aria-hidden>→</span>
            </a>
          </nav>

          {/* Tlačítko mobilního menu — zmizí když ukazujeme logo */}
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="md:hidden h-10 w-10 inline-flex items-center justify-center rounded-lg text-bone hover:bg-bone/5 transition-opacity duration-300"
            style={{ opacity: showLogo ? 0 : 1, pointerEvents: showLogo ? "none" : "auto" }}
            aria-label="Otevřít menu"
            tabIndex={showLogo ? -1 : 0}
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </header>

      {open && (
        <div className="fixed inset-0 z-[60] bg-ink md:hidden">
          <div className="px-5 sm:px-8 h-16 flex items-center justify-between">
            <span className="font-display text-xl font-bold tracking-wider text-bone">
              {nav.brand}<span className="text-emerald-light">.</span>
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
                href={to(link.href)}
                onClick={() => setOpen(false)}
                className="font-display text-3xl font-semibold py-3 text-bone hover:text-emerald-light transition-colors"
              >
                {link.label}
              </a>
            ))}
            {nav.showReservations && (
              <a
                href={nav.reservationsHref}
                onClick={() => setOpen(false)}
                className="font-display text-3xl font-semibold py-3 text-bone hover:text-emerald-light transition-colors"
              >
                {nav.reservationsLabel}
              </a>
            )}
            <a
              href={to("#kontakt")}
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
