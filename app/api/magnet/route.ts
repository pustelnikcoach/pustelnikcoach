import { NextResponse } from "next/server";
import { Resend } from "resend";
import { z } from "zod";
import {
  PLAN_ATTACHMENT,
  addToAudience,
  renderPlanEmail,
  renderPlanText,
} from "@/lib/plan-magnet";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const Schema = z.object({ email: z.string().email("Neplatný e-mail") });

export async function POST(req: Request) {
  let payload: unknown;
  try {
    payload = await req.json();
  } catch {
    return NextResponse.json({ error: "Neplatný požadavek." }, { status: 400 });
  }

  const parsed = Schema.safeParse(payload);
  if (!parsed.success) {
    return NextResponse.json({ error: "Zadej platný e-mail." }, { status: 422 });
  }
  const { email } = parsed.data;

  const apiKey = process.env.RESEND_API_KEY;
  const fromEmail = process.env.LEAD_FROM_EMAIL;
  if (!apiKey || !fromEmail) {
    console.error("[magnet] missing env vars", {
      hasKey: !!apiKey,
      hasFrom: !!fromEmail,
    });
    return NextResponse.json(
      { error: "E-mail server zatím není nastavený. Zkus to prosím později." },
      { status: 503 },
    );
  }

  const resend = new Resend(apiKey);
  try {
    const res = await resend.emails.send({
      from: `Petr Pustelník <${fromEmail}>`,
      to: [email],
      subject: "Tvůj tréninkový plán Upper/Lower 4× týdně",
      html: renderPlanEmail(),
      text: renderPlanText(),
      attachments: [PLAN_ATTACHMENT],
    });
    if (res.error) {
      console.error("[magnet] send failed", res.error);
      return NextResponse.json(
        { error: "Nepodařilo se odeslat. Zkus to prosím za chvíli znovu." },
        { status: 502 },
      );
    }
    await addToAudience(resend, email);
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[magnet] unexpected error", err);
    return NextResponse.json({ error: "Něco se pokazilo." }, { status: 500 });
  }
}
