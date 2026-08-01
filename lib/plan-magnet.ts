// Lead magnet: tréninkový plán Upper/Lower 4× týdně (PDF v public/).
// Sdílené pro /api/magnet (samostatný box) i /api/lead (příloha k autoresponderu).
import type { Resend } from "resend";

export const PLAN_URL =
  "https://pustelnikcoach.cz/treninkovy-plan-upper-lower.pdf";

export const PLAN_ATTACHMENT = {
  filename: "Treninkovy-plan-Upper-Lower-4x.pdf",
  path: PLAN_URL,
};

// Uloží kontakt do Resend Audience. Chybí-li RESEND_AUDIENCE_ID, tiše přeskočí
// (doručení PDF na tom nezávisí). Chyba se loguje, ale nepadá kvůli ní request.
export async function addToAudience(
  resend: Resend,
  email: string,
  firstName?: string,
) {
  const audienceId = process.env.RESEND_AUDIENCE_ID;
  if (!audienceId) return;
  try {
    await resend.contacts.create({
      audienceId,
      email,
      firstName,
      unsubscribed: false,
    });
  } catch (err) {
    console.warn("[magnet] audience add failed", err);
  }
}

const ink = "#0B0F0D";
const graphite = "#1C2622";
const emerald = "#0F4C3A";
const bone = "#E8E6E1";

export function renderPlanEmail(): string {
  return `<!doctype html>
<html lang="cs"><head><meta charset="utf-8"/><meta name="viewport" content="width=device-width,initial-scale=1"/><title>Tvůj tréninkový plán</title></head>
<body style="margin:0;padding:0;background:${ink};font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;color:${bone};">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:${ink};padding:32px 16px;">
    <tr><td align="center">
      <table role="presentation" width="560" cellpadding="0" cellspacing="0" style="max-width:560px;width:100%;background:${graphite};border-radius:16px;overflow:hidden;">
        <tr><td style="padding:40px 32px 16px 32px;">
          <h1 style="margin:0;font-family:Georgia,serif;font-size:26px;line-height:1.25;color:${bone};">Tady je tvůj plán 💪</h1>
        </td></tr>
        <tr><td style="padding:0 32px 28px 32px;font-size:16px;line-height:1.6;color:${bone};">
          <p style="margin:0 0 16px 0;">Ahoj, v příloze máš slíbený plán. Upper/Lower, 4× týdně, přesné série i výběr zátěže. Začít můžeš klidně dnes.</p>
          <p style="margin:0 0 24px 0;">
            <a href="${PLAN_URL}" style="display:inline-block;background:${emerald};color:${bone};text-decoration:none;padding:12px 20px;border-radius:10px;font-size:15px;font-weight:600;">Stáhnout plán (PDF)</a>
          </p>

          <p style="margin:0 0 12px 0;">A teď to, co ti nikdo u plánu zdarma neřekne.</p>
          <p style="margin:0 0 12px 0;">Tenhle plán je dobrý. Ale je stejný pro tebe i pro člověka, který váží o třicet kilo víc a nikdy nedřepoval. Neví, kolik toho zvládneš, co ti bolí a co budeš dělat, až se za šest týdnů váha zastaví — a ona se zastaví.</p>
          <p style="margin:0 0 24px 0;"><strong style="color:${bone};">85 % lidí to vzdá mezi 4. a 8. týdnem.</strong> Ne proto, že mají špatný plán. Proto, že v tu chvíli nemají nikoho, kdo jim řekne, co změnit.</p>

          <p style="margin:0 0 12px 0;">Proto dávám <strong style="color:${bone};">první konzultaci zdarma</strong>. Bez závazku a bez prodejního tlaku — i když si nesedneme, odejdeš s tím, co konkrétně máš zlepšit.</p>
          <p style="margin:0 0 24px 0;">
            <a href="https://pustelnikcoach.cz/#kontakt" style="display:inline-block;background:${emerald};color:${bone};text-decoration:none;padding:14px 24px;border-radius:10px;font-size:16px;font-weight:600;">Chci konzultaci zdarma →</a>
          </p>
          <p style="margin:0 0 24px 0;font-size:15px;">Nebo mi rovnou zavolej: <a href="tel:+420702169863" style="color:#7FD8B8;text-decoration:none;font-weight:600;">702 169 863</a>. Napsat můžeš i na tenhle mail, čtu ho sám.</p>

          <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin:0 0 24px 0;border:1px solid rgba(15,76,58,0.55);border-radius:12px;">
            <tr><td style="padding:16px 18px;font-size:14px;line-height:1.55;color:${bone};">
              <strong style="color:${bone};">Otevírám Opavu a beru 10 zakládajících klientů</strong> do balíčku Hybrid&nbsp;Pro za 2&nbsp;790&nbsp;Kč/měs. napořád (běžně 4&nbsp;390&nbsp;Kč). Až se kapacita naplní, cena končí. Plus 90denní garance — neuvidíš progres, vracím peníze.
            </td></tr>
          </table>

          <p style="margin:0;">— Petr Pustelník, hlavní trenér ElementGyms Opava</p>
        </td></tr>
      </table>
    </td></tr>
  </table>
</body></html>`;
}

export function renderPlanText(): string {
  return `Ahoj, v priloze mas slibeny plan. Upper/Lower, 4x tydne, presne serie
i vyber zataze. Zacit muzes klidne dnes.

Kdyby priloha nesla otevrit, stahni ho tady:
${PLAN_URL}

A teď to, co ti nikdo u planu zdarma nerekne.

Tenhle plan je dobry. Ale je stejny pro tebe i pro cloveka, ktery vazi o tricet
kilo vic a nikdy nedrepoval. Nevi, kolik toho zvladnes, co te boli a co budes
delat, az se za sest tydnu vaha zastavi - a ona se zastavi.

85 % lidi to vzda mezi 4. a 8. tydnem. Ne proto, ze maji spatny plan.
Proto, ze v tu chvili nemaji nikoho, kdo jim rekne, co zmenit.

Proto davam prvni konzultaci i prvni trenink ZDARMA. Bez zavazku a bez
prodejniho tlaku - i kdyz si nesedneme, odejdes s tim, co konkretne mas zlepsit.

Chci trenink zdarma:
https://pustelnikcoach.cz/#kontakt

Nebo mi rovnou zavolej: 702 169 863
Napsat muzes i na tenhle mail, ctu ho sam.

---
Oteviram Opavu a beru 10 zakladajicich klientu do balicku Hybrid Pro za
2 790 Kc/mes. naporad (bezne 4 390 Kc). Az se kapacita naplni, cena konci.
Plus 90denni garance - neuvidis progres, vracim penize.
---

- Petr Pustelnik, hlavni trener ElementGyms Opava
`;
}
