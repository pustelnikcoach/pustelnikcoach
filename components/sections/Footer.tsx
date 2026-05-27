import Link from "next/link";
import { Instagram, Mail, MapPin, Phone } from "lucide-react";
import { contact, footer, legal, nav } from "@/lib/content";

// TikTok / Facebook ikony jako jednoduché inline SVG (lucide nemá oficiální TikTok ikonu)
function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
    </svg>
  );
}

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="bg-ink border-t border-bone/5 py-16">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <div className="flex items-center gap-3">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <div
                className="overflow-hidden flex-shrink-0"
                style={{ height: "56px", width: "76px" }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/logo-petr.png"
                  alt="Petr Pustelník logo"
                  style={{
                    width: "151px",
                    height: "auto",
                    marginLeft: "-38px",
                    mixBlendMode: "screen",
                  }}
                />
              </div>
              <div className="font-display text-xl font-bold tracking-wider text-bone">
                {nav.brand}
                <span className="text-emerald-light">.</span>
              </div>
            </div>
            <p className="mt-3 text-sm text-mute">{footer.tagline}</p>
          </div>

          <div>
            <div className="text-xs uppercase tracking-[0.18em] text-mute mb-4">
              Kontakt
            </div>
            <ul className="space-y-3 text-bone/85">
              <li>
                <a
                  href={`tel:${contact.phoneHref}`}
                  className="inline-flex items-center gap-3 hover:text-bone transition-colors"
                >
                  <Phone className="h-4 w-4 text-emerald-light" aria-hidden />
                  {contact.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${contact.email}`}
                  className="inline-flex items-center gap-3 hover:text-bone transition-colors"
                >
                  <Mail className="h-4 w-4 text-emerald-light" aria-hidden />
                  {contact.email}
                </a>
              </li>
              <li className="inline-flex items-center gap-3 text-bone/85">
                <MapPin className="h-4 w-4 text-emerald-light" aria-hidden />
                {contact.gym}
              </li>
            </ul>
          </div>

          <div>
            <div className="text-xs uppercase tracking-[0.18em] text-mute mb-4">
              Sleduj
            </div>
            <ul className="space-y-3 text-bone/85">
              <li>
                <a
                  href={contact.instagramUrl}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex items-center gap-3 hover:text-bone transition-colors"
                >
                  <Instagram className="h-4 w-4 text-emerald-light" aria-hidden />
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href={contact.tiktokUrl}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex items-center gap-3 hover:text-bone transition-colors"
                >
                  <TikTokIcon className="h-4 w-4 text-emerald-light" />
                  TikTok
                </a>
              </li>
              <li>
                <a
                  href={contact.facebookUrl}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex items-center gap-3 hover:text-bone transition-colors"
                >
                  <FacebookIcon className="h-4 w-4 text-emerald-light" />
                  Facebook
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-bone/5 flex flex-col gap-4 text-xs text-mute">
          <div className="flex flex-wrap items-center gap-x-5 gap-y-1">
            <span>{footer.rightsLine}</span>
            <Link
              href="/gdpr"
              className="hover:text-bone transition-colors underline-offset-4 hover:underline"
            >
              Ochrana osobních údajů
            </Link>
            <Link
              href="/obchodni-podminky"
              className="hover:text-bone transition-colors underline-offset-4 hover:underline"
            >
              Obchodní podmínky
            </Link>
          </div>
          <span className="text-bone/40">
            {legal.fullName} · IČO {legal.ico} · {legal.address}
          </span>
        </div>
      </div>
    </footer>
  );
}
