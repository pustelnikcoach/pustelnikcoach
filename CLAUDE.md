# CLAUDE.md — Pravidla pro úpravy webu pustelnikcoach

Tenhle web spravuje **Petr "Petis" Pustelník** — fitness trenér, ne developer.
Bude ti dávat instrukce v češtině typu "změň cenu" nebo "přidej klienta".

## Jak fungovat

1. **Vždy odpovídej česky.** Stručně, lidsky, bez technického žargonu.
2. **Po každé úpravě udělej commit a push.** Vercel deploynue automaticky.
3. **Před komplexní změnou se Petise zeptej**, jestli to chápeš správně.
4. **Po dokončení napiš jednu větu**: co se změnilo + že to bude na webu za ~1 minutu.

## Co MŮŽEŠ měnit volně

✅ **`lib/content.ts`** — všechny texty, ceny, balíčky, výsledky klientů, kontakty
✅ **`public/images/`** — když Petis řekne "vyměnit fotku" a poskytne novou
✅ **Nadpisy a copy** kdekoliv na webu (Hero, About, Pillars, Process)
✅ **SEO metadata** v `app/layout.tsx`
✅ **Drobné stylové úpravy** (větší písmo, jiná barva detailu) — vždy potvrď s Petisem
✅ **Přidat/odebrat klienta z výsledků** — duplikuj objekt v poli `results`

## Co NESMÍŠ měnit bez explicitního požadavku

🔒 **`components/sections/LeadForm.tsx`** — formulář (konverzní logika)
🔒 **`components/form/`** — komponenty formuláře
🔒 **`app/api/lead/route.ts`** — odesílání e-mailů
🔒 **`lib/schema.ts`** — validace formuláře
🔒 **`lib/email-template.tsx`** — e-mail templates
🔒 **`.env.local`** a environment variables
🔒 **`tailwind.config.ts`** — brand barvy a fonty

Pokud Petis chce změnit něco z tohohle seznamu, **vždy nejdřív potvrď**:

> *"Tohle je citlivá část webu. Opravdu chceš změnit X? Doporučuju nejdřív kontaktovat Luka (Web by Luke Přibyla)."*

## Při přidávání nové fotky klienta

1. Petis ti pošle fotku → ulož do `public/images/results/[jmeno].jpg`
2. Otevři `lib/content.ts` → najdi pole `results`
3. **Přidej** nový objekt na konec pole (neměň existující)
4. Commit + push

## Při změně ceny balíčku

1. Otevři `lib/content.ts` → najdi pole `packages`
2. Najdi balíček podle `name` (Hybrid, Hybrid Pro, atd.)
3. Změň jen `price` — nech ostatní pole netknuté
4. Commit + push

## Standardní workflow

```bash
git add .
git commit -m "Update: [krátký popis česky]"
git push
```

Po pushi Vercel automaticky deploynue. Petisovi řekni:

> *"Hotovo, za chvilku to bude na webu."*

## Když si nejsi jistý

Radši se zeptej, než něco rozbít. Petis nezná kód — když mu řekneš
"přidal jsem useEffect hook", nepochopí. Mluv lidsky.

## Důležité technické poznámky

- **Stack**: Next.js 15 (App Router) + TypeScript + Tailwind + Resend
- **Deploy**: Vercel (automaticky z `main` branche)
- **E-maily**: Resend → `petrpustelnikcoach@gmail.com`
- **Doména**: dočasně `pustelnikcoach.vercel.app`, později vlastní (řeší Luke)

Lokální dev: `npm run dev` → otevři `http://localhost:3000`
