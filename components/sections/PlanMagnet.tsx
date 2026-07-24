"use client";

import { useState } from "react";

// TODO(CMO): copy sekce (nadpis, podnadpis, bullety, tlačítko) je placeholder.
// Pozicování lead magnetu patří CMO — technika (odeslání + doručení PDF) je hotová.
export function PlanMagnet() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "done" | "error">(
    "idle",
  );
  const [error, setError] = useState("");

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
    } catch (err) {
      setError(err instanceof Error ? err.message : "Něco se pokazilo.");
      setStatus("error");
    }
  };

  return (
    <section id="plan-zdarma" className="py-20 sm:py-28 bg-ink">
      <div className="max-w-3xl mx-auto px-5 sm:px-8">
        <div className="rounded-2xl bg-graphite border border-emerald/30 p-8 sm:p-12 relative overflow-hidden">
          <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-emerald/15 blur-3xl pointer-events-none" />
          <div className="relative">
            <div className="inline-flex items-center gap-2 rounded-full bg-emerald/15 text-emerald-light px-3 py-1 text-xs uppercase tracking-[0.15em]">
              Zdarma
            </div>
            <h2 className="mt-6 font-display font-semibold text-display-lg text-bone">
              Tréninkový plán Upper/Lower 4× týdně
            </h2>
            <p className="mt-4 text-[1.0625rem] text-bone/65 leading-relaxed">
              Čtyřtýdenní blok pro redukci tuku bez ztráty svalu — stroje, jasné
              série, regrese na horší dny. Nech mi e-mail a pošlu ti ho hned jako
              PDF.
            </p>

            {status === "done" ? (
              <p className="mt-8 text-emerald-light font-semibold">
                Hotovo — plán ti letí do e-mailu. Mrkni i do spamu. 💪
              </p>
            ) : (
              <form
                onSubmit={submit}
                className="mt-8 flex flex-col sm:flex-row gap-3"
                noValidate
              >
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="tvuj@email.cz"
                  aria-label="E-mail"
                  aria-invalid={status === "error"}
                  className="flex-1 rounded-xl bg-ink border border-bone/15 px-4 py-3 text-bone placeholder:text-bone/40 focus:outline-none focus:border-emerald"
                />
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="rounded-xl bg-emerald px-6 py-3 font-semibold text-bone hover:bg-emerald-light transition-colors disabled:opacity-60"
                >
                  {status === "loading" ? "Posílám…" : "Poslat plán"}
                </button>
              </form>
            )}
            {status === "error" && (
              <p role="alert" className="mt-3 text-sm text-red-400">
                {error}
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
