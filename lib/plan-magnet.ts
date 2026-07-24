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
          <p style="margin:0 0 16px 0;">Tréninkový plán <strong>Upper/Lower 4× týdně</strong> máš v příloze (PDF). Čtyřtýdenní blok pro redukci tuku bez ztráty svalu — stroje, jasné série, regrese na horší dny.</p>
          <p style="margin:0 0 16px 0;">Kdyby příloha nešla otevřít, stáhni ho tady:</p>
          <p style="margin:0 0 4px 0;">
            <a href="${PLAN_URL}" style="display:inline-block;background:${emerald};color:${bone};text-decoration:none;padding:12px 20px;border-radius:10px;font-size:15px;font-weight:600;">Stáhnout plán (PDF)</a>
          </p>
          <p style="margin:24px 0 0 0;">Petr</p>
        </td></tr>
      </table>
    </td></tr>
  </table>
</body></html>`;
}

export function renderPlanText(): string {
  return `Tady je tvůj plán.

Tréninkový plán Upper/Lower 4x tydne mas v priloze (PDF).
Ctyrtydenni blok pro redukci tuku bez ztraty svalu.

Kdyby priloha nesla otevrit, stahni ho tady:
${PLAN_URL}

Petr
Petr Pustelnik - pustelnikcoach.cz
`;
}
