"use client";

import { useEffect, useState } from "react";

// Vyskakovací lead magnet — naskočí jednou za návštěvu (sessionStorage).
// Doručení řeší stejný endpoint /api/magnet jako sekce PlanMagnet.
export function PlanMagnetModal() {
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "done" | "error">(
    "idle",
  );
  const [error, setError] = useState("");

  useEffect(() => {
    if (sessionStorage.getItem("planPopup")) return;
    const t = setTimeout(() => setOpen(true), 1200);
    return () => clearTimeout(t);
  }, []);

  const close = () => {
    setOpen(false);
    sessionStorage.setItem("planPopup", "1");
  };

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && close();
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setError("");
    try {
      const res = await fetch("/api/magnet", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body?.error || "Něco se pokazilo.");
      }
      setStatus("done");
      sessionStorage.setItem("planPopup", "1");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Něco se pokazilo.");
      setStatus("error");
    }
  };

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/75 p-4 backdrop-blur-sm"
      onClick={close}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Tréninkový plán zdarma"
        onClick={(e) => e.stopPropagation()}
        className="relative flex w-full max-w-2xl flex-col overflow-hidden rounded-2xl border border-emerald/30 bg-graphite shadow-2xl sm:flex-row"
      >
        <button
          onClick={close}
          aria-label="Zavřít"
          className="absolute right-3 top-3 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-ink/60 text-bone/70 transition-colors hover:bg-ink hover:text-bone"
        >
          ✕
        </button>

        <img
          src="/plan-cover.png"
          alt="Titulní strana tréninkového plánu Upper/Lower 4× týdně"
          className="h-48 w-full bg-ink object-contain sm:h-auto sm:w-2/5"
        />

        <div className="p-6 sm:p-8">
          <div className="inline-flex items-center gap-2 rounded-full bg-emerald/15 px-3 py-1 text-xs uppercase tracking-[0.15em] text-emerald-light">
            Zdarma
          </div>
          <h2 className="mt-4 font-display text-2xl font-semibold leading-tight text-bone sm:text-3xl">
            Zhubni tuky, ne svaly — 4týdenní plán ZDARMA
          </h2>

          {status === "done" ? (
            <p className="mt-5 font-semibold text-emerald-light">
              Hotovo — plán ti letí do e-mailu. Kdyby nedorazil do pár minut,
              mrkni do spamu.
            </p>
          ) : (
            <>
              <p className="mt-3 text-[0.95rem] leading-relaxed text-bone/65">
                Hotový čtyřtýdenní plán do každého fitka: přesné série, výběr
                zátěže, mobilita, warm-up a mnoho dalšího. Nech si poslat ten
                svůj do minutky na mail.
              </p>
              <form onSubmit={submit} className="mt-5 flex flex-col gap-3" noValidate>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="tvuj@email.cz"
                  aria-label="E-mail"
                  aria-invalid={status === "error"}
                  className="rounded-xl border border-bone/15 bg-ink px-4 py-3 text-bone placeholder:text-bone/40 focus:border-emerald focus:outline-none"
                />
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="rounded-xl bg-emerald px-6 py-3 font-semibold text-bone transition-colors hover:bg-emerald-light disabled:opacity-60"
                >
                  {status === "loading" ? "Posílám…" : "Chci plán zdarma"}
                </button>
              </form>
              {status === "error" && (
                <p role="alert" className="mt-3 text-sm text-red-400">
                  {error}
                </p>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}
