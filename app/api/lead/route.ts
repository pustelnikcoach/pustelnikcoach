// 🔒 CHRÁNĚNÁ ZÓNA — odesílání leadů přes Resend.
// Měnit jen po domluvě s Lukem.

import { NextResponse } from "next/server";
import { Resend } from "resend";
import { GOAL_LABELS, LeadSchema } from "@/lib/schema";
import {
  renderAutoresponderEmail,
  renderAutoresponderText,
  renderLeadEmail,
  renderLeadText,
} from "@/lib/email-template";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function POST(req: Request) {
  let payload: unknown;
  try {
    payload = await req.json();
  } catch {
    return NextResponse.json(
      { error: "Neplatný formát požadavku." },
      { status: 400 }
    );
  }

  const parsed = LeadSchema.safeParse(payload);
  if (!parsed.success) {
    return NextResponse.json(
      {
        error: "Některá pole nejsou v pořádku, podívej se prosím znovu.",
        details: parsed.error.flatten().fieldErrors,
      },
      { status: 422 }
    );
  }
  const data = parsed.data;

  const apiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.LEAD_TO_EMAIL;
  const fromEmail = process.env.LEAD_FROM_EMAIL;

  if (!apiKey || !toEmail || !fromEmail) {
    console.error("[lead] missing env vars", {
      hasKey: !!apiKey,
      hasTo: !!toEmail,
      hasFrom: !!fromEmail,
    });
    return NextResponse.json(
      {
        error:
          "E-mail server zatím není nastavený. Ozvi se Petrovi přímo na petrpustelnikcoach@gmail.com.",
      },
      { status: 503 }
    );
  }

  const resend = new Resend(apiKey);
  const now = new Date();

  try {
    const subject = `🎯 Nový lead: ${data.name} · ${GOAL_LABELS[data.goal]} · ${data.package}`;

    const [notifyRes, autoRes] = await Promise.all([
      resend.emails.send({
        from: `Pustelnik Coach <${fromEmail}>`,
        to: [toEmail],
        replyTo: data.email,
        subject,
        html: renderLeadEmail(data, now),
        text: renderLeadText(data, now),
      }),
      resend.emails.send({
        from: `Petr Pustelník <${fromEmail}>`,
        to: [data.email],
        replyTo: toEmail,
        subject: "Děkuju za zájem o spolupráci, ozvu se do 48 hodin",
        html: renderAutoresponderEmail(data),
        text: renderAutoresponderText(data),
      }),
    ]);

    if (notifyRes.error) {
      console.error("[lead] notify failed", notifyRes.error);
      return NextResponse.json(
        {
          error:
            "Něco se zaseklo při odesílání. Zkus to prosím za chvíli znovu, nebo napiš přímo na petrpustelnikcoach@gmail.com.",
        },
        { status: 502 }
      );
    }
    if (autoRes.error) {
      // Autoresponder selhal — lead už ale dorazil. Logujeme, ale uživateli to nevadí.
      console.warn("[lead] autoresponder failed", autoRes.error);
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[lead] unexpected error", err);
    return NextResponse.json(
      {
        error:
          "Něco se pokazilo. Zkus to prosím za chvíli znovu, nebo napiš přímo na petrpustelnikcoach@gmail.com.",
      },
      { status: 500 }
    );
  }
}
