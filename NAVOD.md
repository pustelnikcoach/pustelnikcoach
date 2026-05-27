# Návod pro Petra: jak si web spravuju sám

Tvůj web **pustelnikcoach.cz** si můžeš měnit úplně sám — texty, ceny, fotky,
recenze. Nemusíš umět nic technického. Mluvíš česky s pomocníkem (**Claude Code**),
řekneš mu, co chceš, a on to udělá i zveřejní.

Návod má dvě části:
- **ČÁST 1 – Nastavení** → uděláš **jen jednou** (klidně s Lukem přes sdílení obrazovky).
- **ČÁST 2 – Běžné používání** → tohle budeš dělat pokaždé. Je to úplně jednoduché.

---

## ČÁST 1 — Nastavení (jen jednou)

> Tip: Tahle část je nejvíc „technická". Když si nebudeš jistý, klidně ji projdi s Lukem
> přes sdílení obrazovky — je to na 15 minut a pak už to máš navždy.

### Krok 1 — Nainstaluj appku Claude Code
1. Stáhni si appku **Claude Code** (odkaz na stažení ti pošle Luke).
2. Otevři ji a **přihlas se** svým účtem.

### Krok 2 — Stáhni si web do počítače
1. V Claude Code (v okně, kam se píše) napiš přesně tohle a odešli:

   > **Stáhni web z https://github.com/pustelnikcoach/pustelnikcoach.git do složky Dokumenty. Na GitHubu jsem účet pustelnikcoach.**

2. Co se může cestou stát (a co dělat):
   - **Vyskočí okno „Install command line tools"** → klikni **Install** a počkej.
   - **Claude se zeptá na přihlášení k GitHubu** → napiš mu *„přihlas mě jako pustelnikcoach"*.
     Otevře se ti **prohlížeč**, kde jen klikneš na potvrzení. (Tvůj účet je `pustelnikcoach`.)
   - Když se Claude na něco ptá, normálně odpověz česky.

3. Až Claude napíše, že je web stažený a připravený — **máš hotovo.** Tohle už nikdy znovu dělat nemusíš.

---

## ČÁST 2 — Běžné používání (pokaždé)

### Krok 1 — Otevři web v Claude Code
Spusť appku Claude Code a otevři složku **pustelnikcoach** (tu, co se stáhla při nastavení).

### Krok 2 — Napiš česky, co chceš změnit
Mluv úplně normálně, jako bys to říkal člověku. Příklady:

- „Změň cenu balíčku Hybrid Pro na **3 500 Kč**."
- „Přidej novou recenzi od **Martina**: ‚Skvělá spolupráce, zhubl jsem 10 kg.'"
- „Vyměň moji fotku v sekci **O mně** za tuhle novou." *(fotku rovnou přetáhni do okna / pošli Claudovi)*
- „Oprav překlep v nadpisu na hlavní stránce."
- „Přidej klienta do **Výsledků** — jméno Petra, fotka před a po, krátká recenze."

### Krok 3 — Počkej na „hotovo"
Claude změnu udělá a **sám ji zveřejní**. Nic nemačkáš, nic neukládáš.
Na webu se objeví **do ~1 minuty**.

### Krok 4 — Zkontroluj to
Otevři **https://pustelnikcoach.cz**, dej **Cmd + R** (obnovit) a koukni, jestli tam změna je.

---

## Čeho se NEMÁŠ dotýkat

Pár věcí je „srdce" webu a nemají se měnit:
- **Kontaktní formulář** (přes něj ti chodí poptávky)
- **Odesílání e-mailů**
- **Přihlašovací údaje a nastavení**

Nemusíš se bát, že to omylem rozbiješ — tyhle soubory jsou **zamčené** a Claude je sám od sebe
nezmění. Kdybys přesto něco z toho potřeboval řešit, **řekni to Claudovi** — poradí ti, jak na to.

---

## Když se něco pokazí

Klid — **nic nerozbiješ natrvalo**, všechno jde vrátit zpátky. Když web přestane fungovat,
nebo si v čemkoliv nejsi jistý, **napiš to Claudovi** — popiš mu vlastními slovy, co se stalo,
a on tě navede (klidně to vrátí do původního stavu).

---

## Tvoje přihlášení (jen ať víš, co k čemu je)

Tohle všechno už máš — normálně do toho vůbec nemusíš chodit, běží to samo:

- **GitHub** (účet `pustelnikcoach`) — tady je „uložený" celý web. Claude sem změny posílá.
- **Vercel** — sám web zveřejní. Jakmile Claude pošle změnu, Vercel ji do minuty hodí online.
- **Resend** — posílá ti e-maily z formuláře na **petrpustelnikcoach@gmail.com**.

---

> ### Technická poznámka pro Luka (ne pro Petra)
> Repo je privátní pod účtem `pustelnikcoach`. Rychlé nastavení Petrova Macu napřímo:
> ```bash
> git clone https://github.com/pustelnikcoach/pustelnikcoach.git
> cd pustelnikcoach
> npm install   # volitelné – jen pro lokální náhled; na edit→push→deploy není potřeba
> ```
> GitHub: přihlásit jako `pustelnikcoach` (`gh auth login --web`, autorizovat v prohlížeči).
> Deploy běží automaticky z pushe na `main` (GitHub → Vercel). `.env`/secrets jsou jen ve Vercelu,
> lokálně nejsou potřeba. Oprávnění Claude Code jsou v `.claude/settings.json` (auto-akceptace
> úprav + povolené git/npm příkazy + zámek citlivých souborů), takže se Petra nic neptá.
