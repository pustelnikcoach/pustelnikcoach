import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { legal } from "@/lib/content";

interface Props {
  title: string;
  children: React.ReactNode;
}

export function LegalLayout({ title, children }: Props) {
  return (
    <main className="bg-ink min-h-screen pt-24 pb-20">
      <div className="max-w-3xl mx-auto px-5 sm:px-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-mute hover:text-bone transition-colors mb-10"
        >
          <ArrowLeft className="h-4 w-4" />
          Zpět na hlavní stránku
        </Link>

        <header className="mb-10 pb-8 border-b border-bone/10">
          <h1 className="font-display text-4xl sm:text-5xl font-semibold text-bone leading-tight">
            {title}
          </h1>
          <p className="mt-3 text-sm text-mute">
            Aktualizováno: {legal.updatedAt}
          </p>
        </header>

        <article className="prose-legal text-bone/80 leading-relaxed text-[1rem] space-y-6">
          {children}
        </article>

        <footer className="mt-16 pt-8 border-t border-bone/10 text-sm text-mute">
          <Link href="/" className="hover:text-bone transition-colors">
            ← Petr Pustelník · Osobní trenér
          </Link>
        </footer>
      </div>
    </main>
  );
}
