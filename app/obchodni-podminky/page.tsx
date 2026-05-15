import type { Metadata } from "next";
import { LegalLayout } from "../legal-layout";
import { contact, legal } from "@/lib/content";

export const metadata: Metadata = {
  title: "Obchodní podmínky | Petr Pustelník",
  description:
    "Obchodní podmínky pro tréninkovou spolupráci a jednorázové služby.",
  robots: { index: true, follow: true },
};

export default function TermsPage() {
  return (
    <LegalLayout title="Obchodní podmínky">
      <p className="rounded-xl border border-amber-400/20 bg-amber-400/[0.04] p-4 text-sm text-bone/70">
        Tento dokument je vzorovým rámcem. Pro definitivní verzi doporučuji
        konzultaci s právníkem nebo daňovým poradcem.
      </p>

      <h2 className="font-display text-2xl font-semibold text-bone mt-10 mb-3">
        1. Poskytovatel
      </h2>
      <p>
        <strong className="text-bone">{legal.fullName}</strong>
        <br />
        IČO: {legal.ico}
        <br />
        Sídlo: {legal.address}
        <br />
        E-mail:{" "}
        <a
          href={`mailto:${legal.legalEmail}`}
          className="text-emerald-light hover:underline"
        >
          {legal.legalEmail}
        </a>
        <br />
        Telefon:{" "}
        <a
          href={`tel:${contact.phoneHref}`}
          className="text-emerald-light hover:underline"
        >
          {contact.phone}
        </a>
        <br />
        Provozovna pro osobní tréninky: {contact.gym}
      </p>
      <p>
        Poskytovatel není plátcem DPH (pokud se to změní, bude uvedeno).
      </p>

      <h2 className="font-display text-2xl font-semibold text-bone mt-10 mb-3">
        2. Předmět služby
      </h2>
      <p>
        Předmětem služby je individuální tréninková a výživová spolupráce
        v rozsahu zvoleného balíčku (Online Coaching, Hybrid, Hybrid Pro,
        Hybrid Elite), případně jednorázových služeb (osobní trénink, tréninkový
        plán, jídelníček, kurz „Naučím tě cvičit“) nebo spolupráce na míru
        dohodnuté individuálně.
      </p>

      <h2 className="font-display text-2xl font-semibold text-bone mt-10 mb-3">
        3. Vznik a trvání spolupráce
      </h2>
      <p>
        Spolupráce vzniká uhrazením první faktury, případně osobním
        domluvením spolupráce a jejím prvním vykonáním. Měsíční balíčky se
        sjednávají na dobu neurčitou s měsíční výpovědní lhůtou, není-li
        dohodnuto jinak.
      </p>

      <h2 className="font-display text-2xl font-semibold text-bone mt-10 mb-3">
        4. Cena a platba
      </h2>
      <p>
        Aktuální ceny balíčků a jednorázových služeb jsou uvedeny na tomto webu
        v sekci „Spolupráce“. Měsíční balíčky se platí předem na začátku
        příslušného měsíce na základě faktury. Jednorázové služby se hradí
        před plněním.
      </p>

      <h2 className="font-display text-2xl font-semibold text-bone mt-10 mb-3">
        5. Garance vrácení peněz
      </h2>
      <p>
        Pokud po prvním měsíci spolupráce nejsi spokojen/a s výsledky a
        prokazatelně jsi dodržoval/a sjednaný plán (tréninky, jídelníček,
        suplementaci, kontroly), můžeš zažádat o vrácení úhrady za první měsíc.
        Žádost stačí poslat e-mailem na{" "}
        <a
          href={`mailto:${legal.legalEmail}`}
          className="text-emerald-light hover:underline"
        >
          {legal.legalEmail}
        </a>
        .
      </p>

      <h2 className="font-display text-2xl font-semibold text-bone mt-10 mb-3">
        6. Storno osobních tréninků
      </h2>
      <p>
        Osobní trénink je možné bezplatně přesunout nebo zrušit nejpozději 24
        hodin před dohodnutým termínem. Při pozdějším zrušení se trénink
        započítává do plnění.
      </p>

      <h2 className="font-display text-2xl font-semibold text-bone mt-10 mb-3">
        7. Odpovědnost klienta
      </h2>
      <p>
        Klient se zavazuje informovat poskytovatele o všech zdravotních
        omezeních, lécích a kontraindikacích, které mohou mít vliv na trénink
        nebo stravování. Poskytovatel neodpovídá za škody vzniklé v důsledku
        zatajení podstatných zdravotních informací nebo nedodržení sjednaného
        plánu.
      </p>

      <h2 className="font-display text-2xl font-semibold text-bone mt-10 mb-3">
        8. Reklamace a stížnosti
      </h2>
      <p>
        Reklamace se podávají písemně e-mailem na{" "}
        <a
          href={`mailto:${legal.legalEmail}`}
          className="text-emerald-light hover:underline"
        >
          {legal.legalEmail}
        </a>
        . Vyřízení reklamace proběhne nejpozději do 30 dnů od jejího doručení.
      </p>
      <p>
        K mimosoudnímu řešení spotřebitelských sporů je příslušná Česká obchodní
        inspekce (
        <a
          href="https://adr.coi.cz"
          target="_blank"
          rel="noreferrer noopener"
          className="text-emerald-light hover:underline"
        >
          adr.coi.cz
        </a>
        ).
      </p>

      <h2 className="font-display text-2xl font-semibold text-bone mt-10 mb-3">
        9. Ochrana osobních údajů
      </h2>
      <p>
        Zpracování osobních údajů se řídí samostatným dokumentem{" "}
        <a href="/gdpr" className="text-emerald-light hover:underline">
          Ochrana osobních údajů
        </a>
        .
      </p>

      <h2 className="font-display text-2xl font-semibold text-bone mt-10 mb-3">
        10. Závěrečná ustanovení
      </h2>
      <p>
        Vztahy neupravené těmito podmínkami se řídí českým právem, zejména
        zákonem č. 89/2012 Sb. (občanský zákoník) a zákonem č. 634/1992 Sb.
        (o ochraně spotřebitele). Tyto podmínky jsou platné a účinné od data
        uvedeného v záhlaví.
      </p>
    </LegalLayout>
  );
}
