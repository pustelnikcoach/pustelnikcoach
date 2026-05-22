import type { Metadata } from "next";
import { LegalLayout } from "../legal-layout";
import { contact, legal } from "@/lib/content";

export const metadata: Metadata = {
  title: "Ochrana osobních údajů (GDPR) | Petr Pustelník",
  description:
    "Informace o zpracování osobních údajů podle nařízení GDPR.",
  robots: { index: true, follow: true },
};

export default function GdprPage() {
  return (
    <LegalLayout title="Ochrana osobních údajů">
      <p>
        Tento dokument vysvětluje, jak nakládám s osobními údaji, které mi
        poskytneš prostřednictvím kontaktního formuláře na tomto webu nebo
        e-mailem.
      </p>

      <h2 className="font-display text-2xl font-semibold text-bone mt-10 mb-3">
        1. Správce osobních údajů
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
      </p>

      <h2 className="font-display text-2xl font-semibold text-bone mt-10 mb-3">
        2. Jaké údaje zpracovávám
      </h2>
      <ul className="list-disc pl-6 space-y-2">
        <li>Jméno a příjmení</li>
        <li>E-mailová adresa</li>
        <li>Telefonní číslo</li>
        <li>
          Informace o tvém cíli, časovém horizontu, zkušenosti a preferovaném
          balíčku (volitelně i vlastní zpráva)
        </li>
      </ul>

      <h2 className="font-display text-2xl font-semibold text-bone mt-10 mb-3">
        3. Účel zpracování
      </h2>
      <p>
        Údaje zpracovávám výhradně proto, abych tě mohl kontaktovat ohledně
        tvojí poptávky spolupráce a domluvit se na dalších krocích. Údaje
        nepoužívám k automatickému profilování ani k cíleným reklamám.
      </p>

      <h2 className="font-display text-2xl font-semibold text-bone mt-10 mb-3">
        4. Právní základ
      </h2>
      <p>
        Údaje zpracovávám na základě tvého souhlasu, který udělíš odesláním
        kontaktního formuláře (čl. 6 odst. 1 písm. a GDPR), a v rozsahu plnění
        smlouvy / opatření před uzavřením smlouvy (čl. 6 odst. 1 písm. b GDPR).
      </p>

      <h2 className="font-display text-2xl font-semibold text-bone mt-10 mb-3">
        5. Doba uchování
      </h2>
      <p>
        Údaje uchovávám maximálně po dobu <strong className="text-bone">24 měsíců</strong>{" "}
        od odeslání formuláře, nebo dokud souhlas neodvoláš, podle toho, co
        nastane dřív. Pokud spolu uzavřeme spolupráci, uchovávám údaje po dobu
        trvání smluvního vztahu a následně po dobu vyžadovanou zákonem
        (typicky účetní doklady 5–10 let).
      </p>

      <h2 className="font-display text-2xl font-semibold text-bone mt-10 mb-3">
        6. Komu údaje předávám
      </h2>
      <p>
        Pro odesílání e-mailů z formuláře využívám službu{" "}
        <a
          href="https://resend.com"
          target="_blank"
          rel="noreferrer noopener"
          className="text-emerald-light hover:underline"
        >
          Resend
        </a>{" "}
        (Resend, Inc., USA). Web je hostován na platformě{" "}
        <a
          href="https://vercel.com"
          target="_blank"
          rel="noreferrer noopener"
          className="text-emerald-light hover:underline"
        >
          Vercel
        </a>
        . Třetím stranám údaje neprodávám.
      </p>

      <h2 className="font-display text-2xl font-semibold text-bone mt-10 mb-3">
        7. Tvoje práva
      </h2>
      <p>Máš právo:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>na přístup ke svým osobním údajům,</li>
        <li>na opravu nepřesných údajů,</li>
        <li>
          na výmaz údajů (právo „být zapomenut“),
        </li>
        <li>na omezení zpracování,</li>
        <li>na přenositelnost údajů,</li>
        <li>
          kdykoliv odvolat souhlas, stačí napsat na{" "}
          <a
            href={`mailto:${legal.legalEmail}`}
            className="text-emerald-light hover:underline"
          >
            {legal.legalEmail}
          </a>
          ,
        </li>
        <li>
          podat stížnost u dozorového úřadu. Úřad pro ochranu osobních údajů
          (
          <a
            href="https://www.uoou.cz"
            target="_blank"
            rel="noreferrer noopener"
            className="text-emerald-light hover:underline"
          >
            uoou.cz
          </a>
          ).
        </li>
      </ul>

      <h2 className="font-display text-2xl font-semibold text-bone mt-10 mb-3">
        8. Cookies a analytika
      </h2>
      <p>
        Tento web aktuálně nepoužívá analytické ani marketingové cookies.
        Pokud se to v budoucnu změní, najdeš tady samostatnou informaci.
      </p>
    </LegalLayout>
  );
}
