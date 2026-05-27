# Návod: jak si web upravím sám (Petr)

Tenhle web (pustelnikcoach.vercel.app) si můžeš měnit úplně sám přes **Claude Code**.
Nemusíš umět programovat. Stačí napsat česky, co chceš, a Claude to udělá i zveřejní.

---

## Jak udělat změnu (3 kroky)

**1. Otevři projekt v Claude Code.**
Spustíš Claude Code ve složce s webem (ta, kde je tenhle návod). Když nevíš jak,
napiš si do poznámek postup, který ti ukázal Luke.

**2. Napiš česky, co chceš změnit.**
Mluv normálně, jako bys to říkal člověku. Příklady:

- „Změň cenu balíčku Hybrid Pro na 3 500 Kč."
- „Přidej novou recenzi od klienta Martina: ‚Skvělá spolupráce, zhubl jsem 10 kg.'"
- „Vyměň moji fotku v sekci O mně za tuhle novou." *(fotku mu rovnou pošli/nahraj do složky)*
- „Oprav překlep v nadpisu na hlavní stránce."
- „Přidej klienta do výsledků — jméno Petra, fotka před/po, text recenze."

**3. Počkej, až Claude napíše „hotovo".**
Claude změnu udělá a **sám ji zveřejní**. Na webu se objeví **do ~1 minuty**.
Nemusíš mačkat žádné tlačítko ani nic ukládat.

---

## Jak si ověřím, že to vyšlo

Otevři v prohlížeči **https://pustelnikcoach.vercel.app** a mrkni, jestli tam změna je.
(Když ji nevidíš hned, dej Ctrl+R / Cmd+R pro obnovení stránky a chvilku počkej.)

---

## Co Claude zvládne sám

- Texty, ceny, balíčky, nadpisy, popisky
- Recenze a výsledky klientů (přidat / upravit / odebrat)
- Výměna fotek
- Drobné vzhledové úpravy (větší písmo, jiná barva)

Claude to vždy **rovnou i zveřejní** — uloží změnu a pošle ji na web automaticky.

---

## Čeho se NEDOTÝKEJ

Některé části jsou „srdce" webu a nemají se měnit:

- **Kontaktní formulář** (přes který ti chodí poptávky)
- **Odesílání e-mailů** (Resend)
- **Přihlašovací údaje a nastavení**

Tyhle soubory jsou **zamčené** — Claude je sám od sebe nezmění a upozorní tě.
Když budeš opravdu potřebovat něco z toho upravit, **napiš Lukovi**, ne Claudovi.

---

## Když se něco pokazí

Nic nerozbiješ natrvalo — všechno jde vrátit zpět. Když ti web přestane fungovat
nebo si nejsi jistý, **napiš Lukovi (Web by Luke Přibyla)**. On to spraví.

---

## Tvoje přihlášení (co k čemu je)

Tohle už máš nastavené, jen ať víš, co která věc dělá:

- **GitHub** (účet `pustelnikcoach`) — tady je „uložený" celý web. Claude sem změny posílá.
- **Vercel** — sám web zveřejní (deploy). Jakmile Claude pošle změnu, Vercel ji do minuty hodí online.
- **Resend** — posílá ti e-maily z kontaktního formuláře na petrpustelnikcoach@gmail.com.

Do těchhle služeb normálně nemusíš vůbec chodit — všechno běží samo.
