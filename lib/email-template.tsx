// 🔒 CHRÁNĚNÁ ZÓNA — e-mail templates.
// Měnit jen po domluvě s Lukem.

import {
  EXPERIENCE_LABELS,
  GOAL_LABELS,
  KG_LABELS,
  REASON_LABELS,
  SOURCE_LABELS,
  TIMELINE_LABELS,
  type LeadInput,
} from "./schema";

const ink = "#0B0F0D";
const graphite = "#1C2622";
const emerald = "#0F4C3A";
const bone = "#E8E6E1";
const mute = "#7A8580";

export function renderLeadEmail(data: LeadInput, receivedAt: Date): string {
  const date = receivedAt.toLocaleString("cs-CZ", {
    dateStyle: "long",
    timeStyle: "short",
    timeZone: "Europe/Prague",
  });

  const rows: Array<[string, string]> = [
    ["Jméno", escape(data.name)],
    ["E-mail", `<a href="mailto:${escape(data.email)}" style="color:${bone};">${escape(data.email)}</a>`],
    ["Telefon", `<a href="tel:${escape(data.phone.replace(/\s+/g, ""))}" style="color:${bone};">${escape(data.phone)}</a>`],
    ["Cíl", GOAL_LABELS[data.goal]],
    ["Kolik kg", data.kg ? KG_LABELS[data.kg] : "—"],
    ["Časový horizont", TIMELINE_LABELS[data.timeline]],
    ["Zkušenost", EXPERIENCE_LABELS[data.experience]],
    ["Balíček", escape(data.package)],
    ["Odkud přišel", SOURCE_LABELS[data.source]],
    ["Proč si vybral mě", REASON_LABELS[data.reason]],
    ["Zpráva", data.message ? escape(data.message).replace(/\n/g, "<br/>") : "—"],
  ];

  return `<!doctype html>
<html lang="cs">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <title>Nový lead — ${escape(data.name)}</title>
</head>
<body style="margin:0;padding:0;background:${ink};font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;color:${bone};">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:${ink};padding:32px 16px;">
    <tr>
      <td align="center">
        <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background:${graphite};border-radius:16px;overflow:hidden;">
          <tr>
            <td style="padding:32px 32px 16px 32px;">
              <div style="font-size:12px;letter-spacing:0.15em;text-transform:uppercase;color:${mute};margin-bottom:8px;">Nový lead z webu</div>
              <h1 style="margin:0;font-family:Georgia,serif;font-size:28px;line-height:1.2;color:${bone};">
                ${escape(data.name)}
              </h1>
              <div style="margin-top:6px;font-size:14px;color:${mute};">
                ${GOAL_LABELS[data.goal]} · ${escape(data.package)}
              </div>
            </td>
          </tr>
          <tr>
            <td style="padding:8px 32px 32px 32px;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse;">
                ${rows
                  .map(
                    ([k, v]) => `
                  <tr>
                    <td style="padding:12px 0;border-bottom:1px solid rgba(232,230,225,0.08);width:35%;color:${mute};font-size:13px;text-transform:uppercase;letter-spacing:0.05em;vertical-align:top;">${escape(k)}</td>
                    <td style="padding:12px 0;border-bottom:1px solid rgba(232,230,225,0.08);color:${bone};font-size:15px;vertical-align:top;">${v}</td>
                  </tr>`
                  )
                  .join("")}
              </table>
            </td>
          </tr>
          <tr>
            <td style="padding:0 32px 24px 32px;">
              <a href="tel:${escape(data.phone.replace(/\s+/g, ""))}" style="display:inline-block;background:${emerald};color:${bone};text-decoration:none;padding:14px 22px;border-radius:10px;font-size:15px;font-weight:600;">
                Zavolat ${escape(data.name.split(" ")[0])} →
              </a>
            </td>
          </tr>
          <tr>
            <td style="padding:16px 32px 24px 32px;border-top:1px solid rgba(232,230,225,0.08);font-size:12px;color:${mute};">
              Odesláno z pustelnikcoach.cz · ${escape(date)}
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

export function renderAutoresponderEmail(data: LeadInput): string {
  const firstName = data.name.split(" ")[0];

  return `<!doctype html>
<html lang="cs">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <title>Mám tvoji poptávku, ${escape(firstName)}</title>
</head>
<body style="margin:0;padding:0;background:${ink};font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;color:${bone};">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:${ink};padding:32px 16px;">
    <tr>
      <td align="center">
        <table role="presentation" width="560" cellpadding="0" cellspacing="0" style="max-width:560px;width:100%;background:${graphite};border-radius:16px;overflow:hidden;">
          <tr>
            <td style="padding:40px 32px 16px 32px;">
              <h1 style="margin:0;font-family:Georgia,serif;font-size:28px;line-height:1.2;color:${bone};">
                Ahoj ${escape(firstName)},
              </h1>
            </td>
          </tr>
          <tr>
            <td style="padding:0 32px 24px 32px;font-size:16px;line-height:1.6;color:${bone};">
              <p style="margin:0 0 16px 0;">děkuju ti za zájem o spolupráci.</p>
              <p style="margin:0 0 16px 0;">Beru aktuálně jen omezený počet nových klientů, ale <strong>do 48 hodin si na tebe najdu čas</strong> — zavolám na ${escape(data.phone)} nebo napíšu na tento e-mail.</p>
              <p style="margin:0 0 24px 0;">Mezitím mrkni na můj Instagram, ať víš, co tě čeká:</p>
              <p style="margin:0 0 28px 0;">
                <a href="https://instagram.com/petrpustelnikcoach" style="display:inline-block;background:${emerald};color:${bone};text-decoration:none;padding:12px 20px;border-radius:10px;font-size:15px;font-weight:600;">
                  Instagram → @petrpustelnikcoach
                </a>
              </p>
              <p style="margin:24px 0 0 0;">Petr</p>
            </td>
          </tr>
          <tr>
            <td style="padding:16px 32px 32px 32px;border-top:1px solid rgba(232,230,225,0.08);font-size:13px;color:${mute};">
              <strong style="color:${bone};">Petr Pustelník</strong><br/>
              Osobní trenér · Elements Gym Ostrava / Opava
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

export function renderLeadText(data: LeadInput, receivedAt: Date): string {
  const date = receivedAt.toLocaleString("cs-CZ", {
    dateStyle: "long",
    timeStyle: "short",
    timeZone: "Europe/Prague",
  });
  return `Nový lead z webu — ${data.name}
${GOAL_LABELS[data.goal]} · ${data.package}

Jméno: ${data.name}
E-mail: ${data.email}
Telefon: ${data.phone}
Cíl: ${GOAL_LABELS[data.goal]}
Kolik kg: ${data.kg ? KG_LABELS[data.kg] : "—"}
Časový horizont: ${TIMELINE_LABELS[data.timeline]}
Zkušenost: ${EXPERIENCE_LABELS[data.experience]}
Balíček: ${data.package}
Odkud přišel: ${SOURCE_LABELS[data.source]}
Proč si vybral mě: ${REASON_LABELS[data.reason]}
Zpráva: ${data.message || "—"}

Odesláno z pustelnikcoach.cz · ${date}
`;
}

export function renderAutoresponderText(data: LeadInput): string {
  const firstName = data.name.split(" ")[0];
  return `Ahoj ${firstName},

děkuju ti za zájem o spolupráci.

Beru aktuálně jen omezený počet nových klientů, ale do 48 hodin
si na tebe najdu čas — zavolám na ${data.phone} nebo napíšu
na tento e-mail.

Mezitím mrkni na můj Instagram, ať víš, co tě čeká:
https://instagram.com/petrpustelnikcoach

Petr

Petr Pustelník
Osobní trenér · Elements Gym Ostrava / Opava
`;
}

function escape(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}
